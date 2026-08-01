import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BuiltFor } from "@/components/sections/built-for";
import { Comparison } from "@/components/sections/comparison";
import { Waitlist } from "@/components/sections/waitlist";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "SecureShare — Move files faster. Work together better.",
  description:
    "SecureShare helps teams securely transfer files across devices with end-to-end encryption, no file size limits, and a simple, reliable experience built for modern businesses.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <BuiltFor />
        <Comparison />
        <Waitlist />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
