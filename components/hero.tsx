import { Button } from "@/components/ui/button";
import { TiltGlobe } from "@/components/tilt-globe";
import { ScrollLink } from "@/components/scrollLink";
import {
  ShieldIcon,
  BoltIcon,
  UsersIcon,
  CheckIcon,
  LaptopIcon,
  TabletIcon,
} from "@/components/icons";

const deviceIcon =
  "flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white/[0.06] text-cobalt-light [&_svg]:h-[22px] [&_svg]:w-[22px]";
const packet =
  "absolute -left-3 -top-1 h-2 w-2 animate-travel rounded-full bg-lime shadow-[0_0_0_4px_rgba(212,255,36,0.16)]";

export function Hero() {
  return (
    <section className="relative z-[1] flex min-h-[calc(100svh-76px)] items-center overflow-hidden py-16">
      <div className="orb animate-drift" aria-hidden />
      <div className="orb orb-lime animate-drift-slow" aria-hidden />
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="aspect-square w-[min(140vw,170vh)] translate-y-[32%] opacity-50">
          <TiltGlobe />
        </div>
      </div>
      <div className="wrap pointer-events-none relative z-10 flex flex-col items-center text-center">
        <div className="relative -mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-ink/55 blur-3xl"
          />
          <div className="mb-7 inline-flex items-center gap-2 rounded-[30px] border border-cobalt/35 bg-cobalt/[0.06] px-3.5 py-[7px] pl-2.5 font-mono text-xs text-cobalt-light">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-lime shadow-[0_0_0_4px_rgba(212,255,36,0.14)]" />{" "}
            MANIFEST NO. SS—2026 · Now boarding early access
          </div>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-bold leading-[1.04] tracking-[-0.01em] text-cobalt-light">
            Move files faster.
            <br />
            Work <em className="italic text-lime">better</em> together.
          </h1>
          <p className="my-6 max-w-[480px] text-[18px] leading-[1.65] text-ash">
            VilSend helps teams securely transfer files across devices with a
            simple, reliable experience built for modern businesses.
          </p>
          <div className="pointer-events-auto mb-9 flex flex-wrap justify-center gap-3.5">
            <Button asChild variant="primary">
              <ScrollLink href="/#waitlist">Join the Waitlist</ScrollLink>
            </Button>
            <Button asChild variant="ghost">
              <ScrollLink href="/#how">Learn how it works</ScrollLink>
            </Button>
          </div>
          <div className="flex flex-wrap gap-[22px] font-mono text-xs text-ash-soft">
            <span className="flex items-center gap-1.5">
              <ShieldIcon className="h-[13px] w-[13px] text-mist" /> End-to-end
              encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <BoltIcon className="h-[13px] w-[13px] text-mist" /> No file size
              limits
            </span>
            <span className="flex items-center gap-1.5">
              <UsersIcon className="h-[13px] w-[13px] text-mist" /> Built for
              teams
            </span>
          </div>
        </div>

        {/* <div className="relative mx-auto max-w-[440px] rounded-2xl border border-white/[0.08] bg-ink-card p-[30px] pb-[26px] text-paper shadow-[0_30px_70px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07),0_0_70px_rgba(21,88,201,0.14)] before:absolute before:-left-[11px] before:top-1/2 before:h-[22px] before:w-[22px] before:-translate-y-1/2 before:rounded-full before:bg-ink before:content-[''] after:absolute after:-right-[11px] after:top-1/2 after:h-[22px] after:w-[22px] after:-translate-y-1/2 after:rounded-full after:bg-ink after:content-[''] lg:ml-auto ">
          <div className="mb-[18px] flex items-start justify-between">
            <div className="font-mono text-[11px] leading-[1.5] tracking-[0.08em] text-ash-soft">
              TRANSFER · SS-00142
              <br />
              AUG 01 2026 · 14:32
            </div>
            <div className="flex h-[46px] w-[46px] animate-stamp items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--cobalt-light),var(--cobalt)_55%,#0b3477)] text-white shadow-[0_6px_14px_rgba(21,88,201,0.45)] [&_svg]:h-5 [&_svg]:w-5">
              <CheckIcon />
            </div>
          </div>
          <div className="my-5 flex items-center justify-between">
            <div className="flex w-[70px] flex-col items-center gap-2">
              <div className={`${deviceIcon} animate-send`}>
                <LaptopIcon />
              </div>
              <div className="text-center font-mono text-[10px] text-ash-soft">
                MACBOOK PRO
              </div>
            </div>
            <div className="relative mx-1 h-px flex-1 bg-[linear-gradient(to_right,var(--paper-line)_40%,transparent_0%)] bg-[length:8px_1px]">
              <span className={packet} />
              <span className={packet} style={{ animationDelay: "0.8s" }} />
              <span className={packet} style={{ animationDelay: "1.6s" }} />
            </div>
            <div className="flex w-[70px] flex-col items-center gap-2">
              <div className={`${deviceIcon} animate-receive`}>
                <TabletIcon />
              </div>
              <div className="text-center font-mono text-[10px] text-ash-soft">
                IPAD AIR
              </div>
            </div>
          </div>
          <div className="mt-1">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
              <div className="absolute left-0 top-0 h-full animate-progress rounded-full bg-cobalt-light" />
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-ash-soft">
              <span>Transferring…</span>
              <span>2.4 GB</span>
            </div>
          </div>
          <div className="mt-3.5 flex items-center justify-between border-t border-dashed border-paper-line pt-3.5">
            <div className="flex items-center gap-1.5 rounded-[20px] bg-cobalt/15 px-2.5 py-[5px] font-mono text-[10.5px] uppercase tracking-[0.05em] text-cobalt-light before:h-[5px] before:w-[5px] before:rounded-full before:bg-lime before:content-['']">
              Encrypted · in transit
            </div>
            <div className="font-mono text-[11px] text-ash-soft">2.4 GB</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
