import { Reveal } from "@/components/reveal";
import { ArrowRightIcon } from "@/components/icons";

const steps = [
  { num: "STEP 01", title: "Create your workspace", desc: "Set up a home for your team's files in under a minute." },
  { num: "STEP 02", title: "Connect your devices", desc: "Link laptops, desktops, and mobile in a few taps." },
  { num: "STEP 03", title: "Invite your team", desc: "Send an invite and get everyone set up instantly." },
  { num: "STEP 04", title: "Start sharing securely", desc: "Drag, drop, done — encrypted from device to device." },
];

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">How it works</div>
          <h2>From setup to first transfer, in four steps.</h2>
        </Reveal>
        <Reveal className="steps">
          {steps.map((step, i) => (
            <div key={step.num} className="step">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="step-connector">
                  <ArrowRightIcon />
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
