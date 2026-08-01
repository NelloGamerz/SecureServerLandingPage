"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckIcon } from "@/components/icons";

type AccountType = "individual" | "organization";

const individualSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid work email."),
});

const orgSchema = individualSchema.extend({
  company: z.string().min(2, "Enter your company name."),
  teamSize: z.string().min(1, "Select a team size."),
  role: z.string().min(1, "Select your role."),
});

export function Waitlist() {
  const [accountType, setAccountType] = useState<AccountType>("individual");
  const [toastOpen, setToastOpen] = useState(false);
  const [toastError, setToastError] = useState(false);

  const isOrg = accountType === "organization";
  const schema = isOrg ? orgSchema : individualSchema;

  type FormValues = z.infer<typeof orgSchema>;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      company: "",
      teamSize: "",
    },
  });

  const role = watch("role");
  const teamSize = watch("teamSize");

  const onSubmit = async (data: FormValues) => {
    const payload = {
      accountType,
      name: data.name,
      email: data.email,
      role: isOrg ? data.role : null,
      company: isOrg ? data.company : null,
      teamSize: isOrg ? data.teamSize : null,
    };

    await new Promise((resolve) => setTimeout(resolve, 900));

    try {
      const res = await fetch("http://localhost:8080/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setToastError(true);
        setToastOpen(true);
        setTimeout(() => setToastOpen(false), 3600);
        return;
      }

      reset();
      setAccountType("individual");
      setToastError(false);
      setToastOpen(true);
      setTimeout(() => setToastOpen(false), 3600);
    } catch {
      setToastError(true);
      setToastOpen(true);
      setTimeout(() => setToastOpen(false), 3600);
    }
  };

  const switchMode = (mode: AccountType) => {
    setAccountType(mode);
    if (mode === "individual") {
      setValue("company", "");
      setValue("teamSize", "");
    }
  };

  return (
    <section className="section waitlist-section" id="waitlist">
      <div className="wrap">
        <Reveal className="waitlist-card">
          <div className="waitlist-head">
            <div
              className="eyebrow center"
              style={{ justifyContent: "center" }}
            >
              Early access
            </div>
            <h2>Join the Early Access Program</h2>
            <p>Be one of the first teams to experience SecureShare.</p>
          </div>

          <div className="toggle" role="tablist" aria-label="Applying as">
            <button
              type="button"
              className={accountType === "individual" ? "active" : ""}
              role="tab"
              aria-selected={accountType === "individual"}
              onClick={() => switchMode("individual")}
            >
              Individual
            </button>
            <button
              type="button"
              className={accountType === "organization" ? "active" : ""}
              role="tab"
              aria-selected={accountType === "organization"}
              onClick={() => switchMode("organization")}
            >
              Organization
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-grid">
              <div className={`field full ${errors.name ? "invalid" : ""}`}>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  placeholder="Jordan Blake"
                  autoComplete="name"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="err">{errors.name.message}</span>
                )}
              </div>

              <div className={`field full ${errors.email ? "invalid" : ""}`}>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="err">{errors.email.message}</span>
                )}
              </div>

              <AnimatePresence>
                {isOrg && (
                  <motion.div
                    className="org-only show"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`field ${errors.company ? "invalid" : ""}`}>
                      <Label htmlFor="company">Company name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        {...register("company")}
                      />
                      {errors.company && (
                        <span className="err">{errors.company.message}</span>
                      )}
                    </div>
                    <div
                      className={`field ${errors.teamSize ? "invalid" : ""}`}
                    >
                      <Label htmlFor="teamSize">Team size</Label>
                      <Select
                        value={teamSize}
                        onValueChange={(v) =>
                          setValue("teamSize", v, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Just Me">Just Me</SelectItem>
                          <SelectItem value="2–5">2–5</SelectItem>
                          <SelectItem value="6–20">6–20</SelectItem>
                          <SelectItem value="21–50">21–50</SelectItem>
                          <SelectItem value="50+">50+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.teamSize && (
                        <span className="err">{errors.teamSize.message}</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isOrg && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`field full ${errors.role ? "invalid" : ""}`}
                    >
                      <Label htmlFor="role">Role</Label>
                      <Select
                        value={role}
                        onValueChange={(v) =>
                          setValue("role", v, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Founder">Founder</SelectItem>
                          <SelectItem value="Developer">Developer</SelectItem>
                          <SelectItem value="Designer">Designer</SelectItem>
                          <SelectItem value="Video Editor">
                            Video Editor
                          </SelectItem>
                          <SelectItem value="IT Admin">IT Admin</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.role && (
                        <span className="err">{errors.role.message}</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              style={{
                transform: isSubmitting ? undefined : undefined,
                opacity: isSubmitting ? 0.9 : 1,
              }}
            >
              <span style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                Join Waitlist
              </span>
              {isSubmitting && (
                <span className="spinner" style={{ display: "inline-block" }} />
              )}
            </button>
            <p className="form-note">
              No spam. One email when we&apos;re ready for you.
            </p>
          </form>
        </Reveal>
      </div>

      <AnimatePresence>
        {toastOpen && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ duration: 0.35, ease: [0.2, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              bottom: "28px",
              left: "50%",
              zIndex: 100,
              ...(toastError ? { borderColor: "rgba(179,84,63,0.6)" } : {}),
            }}
          >
            <CheckIcon />
            <span>
              {toastError
                ? "Something went wrong — please try again."
                : "You're on the list — we'll be in touch."}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
