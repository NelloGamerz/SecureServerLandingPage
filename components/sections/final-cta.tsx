import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ScrollLink } from "../scrollLink";

export function FinalCta() {
  return (
    <Reveal>
      <section className="relative z-[1]">
        <div className="relative mx-4 overflow-hidden rounded-[26px] border border-cobalt/25 bg-gradient-to-br from-[#0a1730] via-ink to-[#06101f] px-6 py-14 text-center before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(21,88,201,0.35),transparent_60%),radial-gradient(circle_at_85%_90%,rgba(212,255,36,0.06),transparent_50%)] before:content-[''] sm:mx-8 sm:px-10 sm:py-20">
          <h2 className="relative mx-auto mb-[30px] max-w-[640px] font-serif text-[clamp(30px,4vw,52px)] font-normal text-paper">
            Ready to modernize the way your team shares files?
          </h2>
          <Button asChild variant="primary">
            <ScrollLink href="/#waitlist">Join the Waitlist</ScrollLink>
          </Button>
        </div>
      </section>
    </Reveal>
  );
}
