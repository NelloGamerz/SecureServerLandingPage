import { Reveal } from "@/components/reveal";
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
    <section className="section" id="problem">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">The problem</div>
          <h2>Traditional file sharing wasn&apos;t built for modern teams.</h2>
        </Reveal>
        <StaggerGroup className="grid-4">
          {problems.map((p) => (
            <StaggerItem key={p.title} className="note-card">
              <div className="note-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
