import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is VilSend?",
    a: "VilSend is a platform that lets businesses and teams share files directly between their devices, without routing through slow uploads or complex permission trees.",
  },
  {
    q: "How do I transfer files from one device to another?",
    a: "Connect both devices to your VilSend workspace, pick the file you want to send, and choose the receiving device. The transfer starts immediately — no upload step, no download link, and no file size limit.",
  },
  {
    q: "What does device-to-device transfer mean?",
    a: "Instead of uploading a file to a server and sending someone a link, VilSend moves data directly between the sending and receiving devices. Nothing sits in shared storage, and the stream stays encrypted end to end.",
  },
  {
    q: "Can I share data between devices on different networks?",
    a: "Yes. VilSend does not require the sender and receiver to be on the same Wi-Fi or office network — any two connected devices can transfer, wherever they are.",
  },
  {
    q: "How is VilSend different from cloud storage like Drive or Dropbox?",
    a: "Cloud storage keeps a copy of your file on someone else's server. VilSend is a transfer tool: files go from your device to the recipient's device, encrypted the whole way, so there is no permanent third-party copy to manage or clean up.",
  },
  {
    q: "Is VilSend secure?",
    a: "Every transfer is encrypted end to end, so files are unreadable to anyone but the sender and the intended recipient — including us.",
  },
  {
    q: "Does it work for remote teams?",
    a: "Yes. VilSend is built for teams spread across offices, homes, and time zones, with no dependency on being on the same network.",
  },
  {
    q: "Which platforms will be supported?",
    a: "macOS and Windows at launch, with mobile apps for iOS and Android following shortly after.",
  },
  {
    q: "Who is VilSend built for?",
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
    <section className="relative z-[1] py-[72px] md:py-[100px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="wrap">
        <SectionHead eyebrow="FAQ" title="Questions, answered." center />
        <Reveal>
          <div className="mx-auto max-w-[760px]">
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
