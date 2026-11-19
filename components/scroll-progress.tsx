"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });
  return <motion.div className="fixed inset-x-0 top-0 z-[90] h-0.5 origin-left bg-[linear-gradient(90deg,var(--cobalt),var(--cobalt-light)_60%,var(--lime))]" style={{ scaleX }} aria-hidden />;
}
