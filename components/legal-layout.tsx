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
        <section className="section" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
          <div className="wrap" style={{ maxWidth: "760px" }}>
            <Reveal>
              <div className="eyebrow">Legal</div>
              <h1 className="font-serif font-medium text-paper" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.1, marginBottom: "12px" }}>
                {title}
              </h1>
              <p className="font-mono text-xs text-ash-soft" style={{ marginBottom: "40px" }}>
                Last updated: {lastUpdated}
              </p>
              <div className="legal-content" style={{ color: "var(--ash)", lineHeight: 1.7, fontSize: "15px" }}>
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
