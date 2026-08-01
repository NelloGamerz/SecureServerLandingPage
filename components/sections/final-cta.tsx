import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <Reveal>
      <section className="relative z-[1]">
        <div className="final-cta">
          <h2>Ready to modernize the way your team shares files?</h2>
          <Button asChild variant="primary">
            <a href="#waitlist">Join the Waitlist</a>
          </Button>
        </div>
      </section>
    </Reveal>
  );
}
