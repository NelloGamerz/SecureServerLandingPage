import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is SecureShare?",
    a: "SecureShare is a platform that lets businesses and teams share files directly between their devices, without routing through slow uploads or complex permission trees.",
  },
  {
    q: "Is SecureShare secure?",
    a: "Every transfer is encrypted end to end, so files are unreadable to anyone but the sender and the intended recipient — including us.",
  },
  {
    q: "Does it work for remote teams?",
    a: "Yes. SecureShare is built for teams spread across offices, homes, and time zones, with no dependency on being on the same network.",
  },
  {
    q: "Which platforms will be supported?",
    a: "macOS and Windows at launch, with mobile apps for iOS and Android following shortly after.",
  },
  {
    q: "Who is SecureShare built for?",
    a: "Any team that regularly moves large or sensitive files — from software teams to video editors, agencies, and IT departments.",
  },
];

export function Faq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="section" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="wrap">
        <Reveal className="section-head center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            FAQ
          </div>
          <h2>Questions, answered.</h2>
        </Reveal>
        <Reveal>
          <div className="faq mx-auto max-w-[760px]">
            <Accordion type="single" collapsible>
              {faqs.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>
                    <p>{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
