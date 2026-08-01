import { Reveal } from "@/components/reveal";
import { CheckIcon, LaptopIcon, TabletIcon, MonitorIcon, PhoneIcon } from "@/components/icons";

const benefits = [
  "Secure file sharing, encrypted end to end",
  "Works across different locations and networks",
  "Simple team collaboration, no learning curve",
  "Fast, reliable transfers at any file size",
];

const lanes = [
  { left: <LaptopIcon />, right: <TabletIcon />, delay: "0s" },
  { left: <MonitorIcon />, right: <PhoneIcon />, delay: "0.9s" },
  { left: <TabletIcon />, right: <LaptopIcon />, delay: "1.7s" },
];

export function Solution() {
  return (
    <section className="section">
      <div className="wrap solution">
        <Reveal>
          <div className="eyebrow">The solution</div>
          <h2 className="font-serif font-medium text-paper" style={{ fontSize: "clamp(26px,3vw,36px)" }}>
            A simpler way to share files.
          </h2>
          <ul className="benefit-list">
            {benefits.map((b) => (
              <li key={b}>
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lanes">
          {lanes.map((lane, i) => (
            <div key={i} className="lane" style={i === lanes.length - 1 ? { marginBottom: 0 } : undefined}>
              <div className="device-icon">{lane.left}</div>
              <div className="route-line">
                <span className="packet" style={{ animationDelay: lane.delay }} />
              </div>
              <div className="device-icon">{lane.right}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
