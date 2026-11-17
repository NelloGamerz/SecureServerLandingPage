import { Reveal } from "@/components/reveal";
import { CheckIcon, LaptopIcon, TabletIcon, MonitorIcon, PhoneIcon } from "@/components/icons";

const benefits = [
  "Secure file sharing, encrypted end to end",
  "Works across different locations and networks",
  "Simple team collaboration, no learning curve",
  "Fast, reliable transfers at any file size",
];

const lanes = [
  { left: <LaptopIcon />, right: <TabletIcon />, delays: ["0s", "0.6s", "1.2s"] },
  { left: <MonitorIcon />, right: <PhoneIcon />, delays: ["0.3s", "0.9s", "1.5s"] },
  { left: <TabletIcon />, right: <LaptopIcon />, delays: ["0.6s", "1.2s", "1.8s"] },
];

export function Solution() {
  return (
    <section className="relative z-[1] py-[72px] md:py-[100px]">
      <div className="wrap grid items-center gap-[60px] lg:grid-cols-2">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-lime before:inline-block before:h-px before:w-3.5 before:bg-lime before:content-['']">
            The solution
          </div>
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] font-normal text-paper">
            A simpler way to share files.
          </h2>
          <ul className="mt-[26px] flex flex-col gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15.5px] text-paper">
                <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-lime" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="rounded-[18px] border border-white/[0.06] bg-ink-soft p-9 px-7">
          {lanes.map((lane, i) => (
            <div
              key={i}
              className={`flex items-center gap-3.5 ${i === lanes.length - 1 ? "" : "mb-[26px]"}`}
            >
              <div className="flex h-11 w-11 animate-send items-center justify-center rounded-xl bg-white/[0.06] text-cobalt-light [&_svg]:h-[22px] [&_svg]:w-[22px]">
                {lane.left}
              </div>
              <div className="relative mx-1 h-px flex-1 bg-[linear-gradient(to_right,var(--paper-line)_40%,transparent_0%)] bg-[length:8px_1px]">
                {lane.delays.map((d, j) => (
                  <span
                    key={j}
                    className="absolute -left-3 -top-1 h-2 w-2 animate-travel rounded-full bg-lime shadow-[0_0_0_4px_rgba(212,255,36,0.16)]"
                    style={{ animationDelay: d }}
                  />
                ))}
              </div>
              <div className="flex h-11 w-11 animate-receive items-center justify-center rounded-xl bg-white/[0.06] text-cobalt-light [&_svg]:h-[22px] [&_svg]:w-[22px]">
                {lane.right}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
