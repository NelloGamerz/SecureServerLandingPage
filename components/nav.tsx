import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons";
import { ScrollLink } from "./scrollLink";
import Image from "next/image";

const navLink = "text-ash transition-colors hover:text-paper";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/82 backdrop-blur-[14px]">
      <nav className="wrap flex h-[76px] items-center justify-between">
        <ScrollLink
          href="/"
          className="flex items-center gap-2.5 font-serif text-[22px] font-normal text-paper"
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

        <div className="hidden gap-9 text-[14.5px] md:flex">
          <ScrollLink
            href="/#features"
            className={`${navLink} relative text-ash transition-colors hover:text-paper after:absolute after:-bottom-[7px] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-lime after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.2,1,.3,1)] after:content-[''] hover:after:origin-left hover:after:scale-x-100`}
          >
            Product
          </ScrollLink>

          <ScrollLink
            href="/#how"
            className={`${navLink} relative text-ash transition-colors hover:text-paper after:absolute after:-bottom-[7px] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-lime after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.2,1,.3,1)] after:content-[''] hover:after:origin-left hover:after:scale-x-100`}
          >
            How it works
          </ScrollLink>

          <ScrollLink
            href="/#why"
            className={`${navLink} relative text-ash transition-colors hover:text-paper after:absolute after:-bottom-[7px] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-lime after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.2,1,.3,1)] after:content-[''] hover:after:origin-left hover:after:scale-x-100`}
          >
            Why VilSend
          </ScrollLink>

          <ScrollLink
            href="/#faq"
            className={`${navLink} relative text-ash transition-colors hover:text-paper after:absolute after:-bottom-[7px] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-lime after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(.2,1,.3,1)] after:content-[''] hover:after:origin-left hover:after:scale-x-100`}
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
