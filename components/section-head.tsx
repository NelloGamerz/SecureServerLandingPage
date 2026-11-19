import { type ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHead({
  eyebrow,
  title,
  center = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <Reveal className={`mb-14 max-w-[640px] ${center ? "mx-auto text-center" : ""}`}>
      <div
        className={`mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-lime before:inline-block before:h-px before:w-3.5 before:bg-lime before:content-[''] ${
          center ? "justify-center" : ""
        }`}
      >
        {eyebrow}
      </div>
      <h2 className="font-serif text-[clamp(30px,3.7vw,46px)] font-normal leading-[1.08] text-paper">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
