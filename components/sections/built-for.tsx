import { Reveal } from "@/components/reveal";
import { StaggerGroup, StaggerItem } from "@/components/stagger";

const tags = [
  {
    label: "Software Teams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    label: "Video Editors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="6" width="15" height="12" rx="2" />
        <path d="M17 10l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    label: "Creative Agencies",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
      </svg>
    ),
  },
  {
    label: "Marketing Teams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 11l18-7-7 18-2-8-9-3z" />
      </svg>
    ),
  },
  {
    label: "IT Departments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
      </svg>
    ),
  },
  {
    label: "Startups",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M13 2L3 14h7l-1 8 11-13h-7l1-7z" />
      </svg>
    ),
  },
];

export function BuiltFor() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Built for</div>
          <h2>Teams that move a lot of files, quickly.</h2>
        </Reveal>
        <StaggerGroup className="grid-6">
          {tags.map((t) => (
            <StaggerItem key={t.label} className="tag-card">
              {t.icon}
              <p>{t.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
