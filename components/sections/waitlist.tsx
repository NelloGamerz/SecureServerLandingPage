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

const toggleClass = (active: boolean) =>
  `flex-1 cursor-pointer rounded-lg border-none py-2.5 font-sans text-[13.5px] font-semibold transition-all ${
    active ? "bg-cobalt text-white" : "bg-transparent text-ash-soft"
  }`;

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

  const showToast = (error: boolean) => {
    setToastError(error);
    setToastOpen(true);
    setTimeout(() => setToastOpen(false), 4000);
  };

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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        showToast(true);
        return;
      }

      reset();
      setAccountType("individual");
      showToast(false);
    } catch {
      showToast(true);
    }
  };

  const switchMode = (mode: AccountType) => {
    setAccountType(mode);
    if (mode === "individual") {
      setValue("company", "");
      setValue("teamSize", "");
      setValue("role", "");
    }
  };

  return (
    <section className="relative z-[1] pb-[120px] pt-[72px] md:pt-[100px]" id="waitlist">
      <div className="wrap">
        <Reveal className="relative mx-auto max-w-[640px] rounded-[22px] border border-white/[0.08] bg-ink-card p-6 pb-8 text-paper shadow-[0_40px_90px_rgba(0,0,0,0.65),0_0_90px_rgba(21,88,201,0.16)] before:absolute before:-left-[13px] before:top-[132px] before:h-[26px] before:w-[26px] before:rounded-full before:bg-ink before:content-[''] after:absolute after:-right-[13px] after:top-[132px] after:h-[26px] after:w-[26px] after:rounded-full after:bg-ink after:content-[''] sm:p-11 sm:pb-10">
          <div className="mb-[26px] text-center">
            <div
              className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-lime before:inline-block before:h-px before:w-3.5 before:bg-lime before:content-['']"
            >
              Early access
            </div>
            <h2 className="mb-2 font-serif text-[32px] font-normal text-paper">
              Join the Early Access Program
            </h2>
            <p className="text-[14.5px] text-ash-soft">
              Be one of the first teams to experience VilSend.
            </p>
          </div>

          <div className="mb-[26px] flex gap-1 rounded-[11px] bg-white/[0.05] p-1" role="tablist" aria-label="Applying as">
            <button
              type="button"
              className={toggleClass(accountType === "individual")}
              role="tab"
              aria-selected={accountType === "individual"}
              onClick={() => switchMode("individual")}
            >
              Individual
            </button>
            <button
              type="button"
              className={toggleClass(accountType === "organization")}
              role="tab"
              aria-selected={accountType === "organization"}
              onClick={() => switchMode("organization")}
            >
              Organization
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="col-span-full flex flex-col gap-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  aria-invalid={!!errors.name}
                  placeholder="Jordan Blake"
                  autoComplete="name"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-[11.5px] text-danger">{errors.name.message}</span>
                )}
              </div>

              <div className="col-span-full flex flex-col gap-1.5">
                <Label htmlFor="email">{<isO></isO>rg ? "Work email" : "Email"}</Label>
                <Input
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  placeholder={isOrg ? "you@company.com" : "you@email.com"}
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-[11.5px] text-danger">{errors.email.message}</span>
                )}
              </div>

              <AnimatePresence>
                {isOrg && (
                  <motion.div
                    className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="company">Company name</Label>
                      <Input
                        id="company"
                        aria-invalid={!!errors.company}
                        placeholder="Acme Inc."
                        {...register("company")}
                      />
                      {errors.company && (
                        <span className="text-[11.5px] text-danger">{errors.company.message}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="teamSize">Team size</Label>
                      <Select
                        value={teamSize}
                        onValueChange={(v) =>
                          setValue("teamSize", v, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger aria-invalid={!!errors.teamSize}>
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
                        <span className="text-[11.5px] text-danger">{errors.teamSize.message}</span>
                      )}
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                      <Label htmlFor="role">Role</Label>
                      <Select
                        value={role}
                        onValueChange={(v) =>
                          setValue("role", v, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger aria-invalid={!!errors.role}>
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
                        <span className="text-[11.5px] text-danger">{errors.role.message}</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-[11px] bg-cobalt px-6 py-3.5 font-sans text-[14px] font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.9 : 1,
              }}
            >
              <span style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                Join Waitlist
              </span>
              {isSubmitting && (
                <span className="inline-block h-4 w-4 animate-spin-fast rounded-full border-2 border-paper/30 border-t-paper" />
              )}
            </button>
            <p className="mt-3.5 text-center text-[11.5px] text-ash-soft">
              No spam. One email when we&apos;re ready for you.
            </p>
          </form>
        </Reveal>
      </div>

      <AnimatePresence>
        {toastOpen && (
          <motion.div
            className={`fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 rounded-[11px] border bg-ink px-[22px] py-3.5 text-[14px] text-paper shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
              toastError ? "border-danger/40" : "border-cobalt/40"
            }`}
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ duration: 0.35, ease: [0.2, 1, 0.3, 1] }}
          >
            <span className={`h-2 w-2 rounded-full ${toastError ? "bg-danger" : "bg-lime"}`} />
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
