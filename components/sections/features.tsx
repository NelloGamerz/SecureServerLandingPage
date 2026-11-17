import { SectionHead } from "@/components/section-head";
import { StaggerGroup, StaggerItem } from "@/components/stagger";

const features = [
  {
    title: "Device-to-device transfers",
    desc: "Files move directly between devices, encrypted the entire way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Organization workspaces",
    desc: "Give every team its own space, permissions, and shared history.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: "Team invitations",
    desc: "Bring people in with one link — no accounts to provision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="9" cy="7" r="3.2" />
        <path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6M16 3.5a3.2 3.2 0 0 1 0 6.2M22 21c0-2.8-2-5-4.5-5.7" />
      </svg>
    ),
  },
  {
    title: "Large file support",
    desc: "Send full-resolution exports and archives without compression.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9M3 15l4-4 4 4 5-6 5 6" />
      </svg>
    ),
  },
  {
    title: "Cross-platform experience",
    desc: "The same fast transfer, whether you're on Mac, Windows, or mobile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Transfer history",
    desc: "A full, searchable log of what moved, when, and to where.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Real-time device status",
    desc: "See exactly which devices are online and ready to receive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Modern desktop experience",
    desc: "A native app that feels quick, quiet, and out of your way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="relative z-[1] py-[72px] md:py-[100px]" id="features">
      <div className="wrap">
        <SectionHead
          eyebrow="Features"
          title="Everything a team needs to move files, nothing it doesn&apos;t."
        />
        <StaggerGroup className="grid grid-cols-2 gap-[18px] lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem
              key={f.title}
              className="relative overflow-hidden rounded-radius border border-white/[0.07] bg-gradient-to-b from-ink-card to-ink-soft p-6 px-5 transition-all duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(21,88,201,0.22),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:-top-px after:right-3.5 after:h-3.5 after:w-3.5 after:rounded-full after:bg-ink after:shadow-[0_8px_0_-1px_var(--ink),16px_0_0_-1px_var(--ink)] after:content-[''] hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_24px_60px_rgba(21,88,201,0.14)] hover:before:opacity-100"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[9px] bg-cobalt/[0.14] [&_svg]:h-[17px] [&_svg]:w-[17px] [&_svg]:text-cobalt-light">
                {f.icon}
              </div>
              <h3 className="mb-1.5 font-serif text-[16.5px] font-normal text-paper">
                {f.title}
              </h3>
              <p className="text-[13px] leading-[1.5] text-ash-soft">{f.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
