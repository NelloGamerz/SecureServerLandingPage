import { SectionHead } from "@/components/section-head";
import { StaggerGroup, StaggerItem } from "@/components/stagger";
import { ArrowRightIcon } from "@/components/icons";

const steps = [
  { num: "STEP 01", title: "Create your workspace", desc: "Set up a home for your team's files in under a minute." },
  { num: "STEP 02", title: "Connect your devices", desc: "Link laptops, desktops, and mobile in a few taps." },
  { num: "STEP 03", title: "Invite your team", desc: "Send an invite and get everyone set up instantly." },
  { num: "STEP 04", title: "Start sharing securely", desc: "Drag, drop, done — encrypted from device to device." },
];

export function HowItWorks() {
  return (
    <section className="relative z-[1] py-[72px] md:py-[100px]" id="how">
      <div className="wrap">
        <SectionHead
          eyebrow="How it works"
          title="From setup to first transfer, in four steps."
        />
        <StaggerGroup className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => (
            <StaggerItem
              key={step.num}
              className="relative mx-2 rounded-[14px] border border-white/[0.07] bg-ink-card p-[22px] pb-5 px-[18px] text-paper"
            >
              <div className="mb-3.5 font-mono text-[11px] text-cobalt-light">
                {step.num}
              </div>
              <h3 className="mb-1.5 font-serif text-[17px] font-normal text-paper">
                {step.title}
              </h3>
              <p className="text-[12.5px] leading-[1.5] text-ash-soft">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-16px] top-1/2 z-[2] hidden h-px w-6 bg-[linear-gradient(to_right,var(--paper-line)_50%,transparent_0%)] bg-[length:6px_1px] lg:block [&_svg]:absolute [&_svg]:right-[-6px] [&_svg]:top-[-5px] [&_svg]:h-3 [&_svg]:w-3 [&_svg]:text-paper-line">
                  <ArrowRightIcon />
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
