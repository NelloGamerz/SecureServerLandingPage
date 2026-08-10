import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons";
import { ScrollLink } from "./scrollLink";
import Image from "next/image";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/82 backdrop-blur-[14px]">
      <nav className="wrap flex h-[76px] items-center justify-between">
        <ScrollLink
          href="/"
          className="flex items-center gap-2.5 font-serif text-[19px] font-semibold text-paper"
        >
          <Image
            src="/icon.png"
            alt="VilSend"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />

          <span>VilSend</span>
        </ScrollLink>

        <div className="nav-links flex gap-9 text-[14.5px]">
          <ScrollLink
            href="/#features"
            className="text-ash transition-colors hover:text-paper"
          >
            Product
          </ScrollLink>

          <ScrollLink
            href="/#how"
            className="text-ash transition-colors hover:text-paper"
          >
            How it works
          </ScrollLink>

          <ScrollLink
            href="/#why"
            className="text-ash transition-colors hover:text-paper"
          >
            Why VilSend
          </ScrollLink>

          <ScrollLink
            href="/#faq"
            className="text-ash transition-colors hover:text-paper"
          >
            FAQ
          </ScrollLink>
        </div>

        <div className="nav-cta flex items-center gap-[18px]">
          <Button asChild variant="primary">
            <ScrollLink href="/#waitlist">Join Waitlist</ScrollLink>
          </Button>
        </div>

        <button className="menu-btn hidden text-paper" aria-label="Menu">
          <MenuIcon className="h-[22px] w-[22px]" />
        </button>
      </nav>
    </header>
  );
}
