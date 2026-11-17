import { type ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="relative z-[1] pb-20 pt-[60px]">
          <div className="wrap max-w-[760px]">
            <Reveal>
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-lime before:inline-block before:h-px before:w-3.5 before:bg-lime before:content-['']">
                Legal
              </div>
              <h1 className="mb-3 font-serif text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] text-paper">
                {title}
              </h1>
              <p className="mb-10 font-mono text-xs text-ash-soft">
                Last updated: {lastUpdated}
              </p>
              <div className="text-[15px] leading-[1.7] text-ash">
                {children}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
