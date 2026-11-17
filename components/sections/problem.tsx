import { SectionHead } from "@/components/section-head";
import { StaggerGroup, StaggerItem } from "@/components/stagger";

const problems = [
  {
    title: "Slow file sharing workflows",
    desc: "Uploading, waiting, re-uploading. Sharing a file shouldn't take longer than the work itself.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Large files become unmanageable",
    desc: "Video exports and design archives choke inboxes and drives built for documents, not gigabytes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9M3 15l4-4 4 4 5-6 5 6" />
      </svg>
    ),
  },
  {
    title: "Remote collaboration is frustrating",
    desc: "Teams across time zones lose momentum waiting on links, permissions, and expiring downloads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    title: "Existing tools are unnecessarily complex",
    desc: "Enterprise file tools bury a simple transfer under settings nobody asked for.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
];

export function Problem() {
  return (
    <section className="relative z-[1] py-[72px] md:py-[100px]" id="problem">
      <div className="wrap">
        <SectionHead
          eyebrow="The problem"
          title="Traditional file sharing wasn&apos;t built for modern teams."
        />
        <StaggerGroup className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {problems.map((p) => (
            <StaggerItem
              key={p.title}
              className="rounded-radius border border-white/[0.06] bg-ink-card p-[22px] transition-all duration-300 hover:-translate-y-[3px] hover:border-cobalt/35 hover:shadow-[0_24px_60px_rgba(21,88,201,0.14)]"
            >
              <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-danger/[0.14] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-danger">
                {p.icon}
              </div>
              <h3 className="mb-2 font-serif text-[18px] font-normal text-paper">
                {p.title}
              </h3>
              <p className="text-sm leading-[1.55] text-ash-soft">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
