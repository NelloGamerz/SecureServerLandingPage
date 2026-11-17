"use client";

import { useEffect } from "react";

// Publishes pointer position as CSS vars so the ambient light, the hero orb
// and card highlights can parallax without re-rendering React on every move.
export function Spotlight() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(520px_circle_at_var(--mx,50vw)_var(--my,20vh),rgba(21,88,201,0.14),transparent_70%)]" aria-hidden />;
}
