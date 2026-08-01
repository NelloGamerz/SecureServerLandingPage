import { LogoMark } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative z-[1] mt-[60px] border-t border-white/[0.06] pt-16 pb-10">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="flex items-center gap-2.5 font-serif text-[19px] font-semibold text-paper">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brass-light to-brass shadow-[0_4px_14px_rgba(192,138,62,0.35)]">
                <LogoMark className="h-4 w-4" />
              </span>
              SecureShare
            </div>
            <p>
              Secure file sharing built for modern teams — fast, encrypted, and simple across every device.
            </p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#why">Why SecureShare</a>
          </div>
          <div className="foot-col">
            <h4>Support</h4>
            <a href="#faq">FAQ</a>
            <a href="#waitlist">Join Waitlist</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 SecureShare. All rights reserved.</span>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                <path d="M10 9v12M10 13a4 4 0 0 1 8 0v8" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
