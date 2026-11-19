import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
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
    <section className="relative z-[1] py-[72px] md:py-[100px]" id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why VilSend"
          title="A clear upgrade from the tools you&apos;re using now."
        />
        <Reveal className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-ink-card">
          <div className="grid grid-cols-[1fr_0.7fr_0.7fr] items-center bg-white/[0.02] md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="px-3 py-3.5 font-mono text-[11px] uppercase tracking-[0.06em] text-ash-soft md:px-6 md:py-[18px]">
              Capability
            </div>
            <div className="px-3 py-3.5 text-[13px] text-ash-soft md:px-6 md:py-[18px]">
              Traditional File Sharing
            </div>
            <div className="px-3 py-3.5 font-serif text-[17px] font-normal text-cobalt-light md:px-6 md:py-[18px]">
              VilSend
            </div>
          </div>
          {rows.map((row) => (
            <div
              key={row}
              className="grid grid-cols-[1fr_0.7fr_0.7fr] items-center border-t border-white/[0.05] transition-colors hover:bg-cobalt/[0.07] md:grid-cols-[1.4fr_1fr_1fr]"
            >
              <div className="px-3 py-3.5 text-[13px] text-paper md:px-6 md:py-[18px] md:text-[14.5px]">
                {row}
              </div>
              <div className="px-3 py-3.5 text-ash-soft opacity-50 [&_svg]:h-[17px] [&_svg]:w-[17px] md:px-6 md:py-[18px]">
                <XIcon />
              </div>
              <div className="px-3 py-3.5 text-lime [&_svg]:h-[17px] [&_svg]:w-[17px] md:px-6 md:py-[18px]">
                <CheckIcon />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
