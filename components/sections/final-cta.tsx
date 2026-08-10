import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ScrollLink } from "../scrollLink";

export function FinalCta() {
  return (
    <Reveal>
      <section className="relative z-[1]">
        <div className="final-cta">
          <h2>Ready to modernize the way your team shares files?</h2>
          <Button asChild variant="primary">
            <ScrollLink href="/#waitlist">Join the Waitlist</ScrollLink>
          </Button>
        </div>
      </section>
    </Reveal>
  );
}
