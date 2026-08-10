import { Reveal } from "@/components/reveal";
import { CheckIcon, XIcon } from "@/components/icons";

const rows = [
  "Easy setup",
  "Remote collaboration",
  "Large file support",
  "Cross-platform",
  "Team workspaces",
  "Modern user experience",
];

export function Comparison() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Why VilSend</div>
          <h2>A clear upgrade from the tools you&apos;re using now.</h2>
        </Reveal>
        <Reveal className="compare">
          <div className="compare-row head">
            <div>Capability</div>
            <div>Traditional File Sharing</div>
            <div>VilSend</div>
          </div>
          {rows.map((row) => (
            <div key={row} className="compare-row">
              <div>{row}</div>
              <div className="mark-x">
                <XIcon />
              </div>
              <div className="mark-check">
                <CheckIcon />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
