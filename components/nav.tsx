import { Button } from "@/components/ui/button";
import { LogoMark, MenuIcon } from "@/components/icons";
import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/82 backdrop-blur-[14px]">
      <nav className="wrap flex h-[76px] items-center justify-between">
        <div className="flex items-center gap-2.5 font-serif text-[19px] font-semibold text-paper">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brass-light to-brass shadow-[0_4px_14px_rgba(192,138,62,0.35)]">
            <LogoMark className="h-4 w-4" />
          </span>
          SecureShare
        </div>
        <div className="nav-links flex gap-9 text-[14.5px]">
          <Link
            href="/#features"
            className="text-ash transition-colors hover:text-paper"
          >
            Product
          </Link>

          <Link
            href="/#how"
            className="text-ash transition-colors hover:text-paper"
          >
            How it works
          </Link>

          <Link
            href="/#why"
            className="text-ash transition-colors hover:text-paper"
          >
            Why SecureShare
          </Link>

          <Link
            href="/#faq"
            className="text-ash transition-colors hover:text-paper"
          >
            FAQ
          </Link>
        </div>
        <div className="nav-cta flex items-center gap-[18px]">
          <Button asChild variant="primary">
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>
        <button className="menu-btn hidden text-paper" aria-label="Menu">
          <MenuIcon className="h-[22px] w-[22px]" />
        </button>
      </nav>
    </header>
  );
}
