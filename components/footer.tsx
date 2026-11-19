import Image from "next/image";
import { ScrollLink } from "./scrollLink";

export function Footer() {
  return (
    <footer className="relative z-[1] mt-[60px] border-t border-white/[0.06] pt-16 pb-10">
      <div className="mb-12 overflow-hidden border-t border-white/[0.06] pb-[14px] pt-[26px]" aria-hidden>
        <div className="flex w-max animate-mega gap-12">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="whitespace-nowrap font-serif text-[clamp(54px,8.5vw,120px)] leading-[0.9] text-transparent [-webkit-text-stroke:1px_rgba(238,242,248,0.14)] even:[-webkit-text-stroke-color:rgba(21,88,201,0.65)]">VILSEND — SECURE TRANSFER — </span>
          ))}
        </div>
      </div>
      <div className="wrap">
        <div className="mb-14 grid grid-cols-2 gap-7 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-[22px] font-normal text-paper">
              <Image
                src="/icon.png"
                alt="VilSend"
                width={32}
                height={32}
                className="h-8 w-8"
              />

              <span>VilSend</span>
            </div>

            <p className="mt-3.5 max-w-[280px] text-[13.5px] leading-[1.6] text-ash-soft">
              Secure file sharing built for modern teams — fast, encrypted, and
              simple across every device.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ash-soft">Product</h4>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/#features">Features</ScrollLink>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/#how">How it works</ScrollLink>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/#why">Why VilSend</ScrollLink>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ash-soft">Support</h4>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/#faq">FAQ</ScrollLink>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/#waitlist">Join Waitlist</ScrollLink>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ash-soft">Legal</h4>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/privacy">Privacy Policy</ScrollLink>
            <ScrollLink className="mb-3 block text-sm text-ash transition-colors hover:text-paper" href="/terms">Terms of Service</ScrollLink>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-7 text-[12.5px] text-ash-soft">
          <span>© 2026 VilSend. All rights reserved.</span>

          {/* <div className="social-icons">
            <a href="#" aria-label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
              >
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                <path d="M10 9v12M10 13a4 4 0 0 1 8 0v8" />
              </svg>
            </a>

            <a href="#" aria-label="X (Twitter)">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
              >
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
