"use client";

import { motion } from "framer-motion";

const LINES: { words: string[]; em?: number }[] = [
  { words: ["Move", "files", "faster."] },
  { words: ["Work", "better"], em: 1 },
  { words: ["together."] },
];

export function KineticHeadline() {
  return (
    <h1 className="font-serif text-[clamp(42px,5vw,68px)] font-normal leading-none text-cobalt-light">
      {LINES.map((line, i) => (
        <span className="block" key={i}>
          {line.words.map((word, j) => (
            <span
              className="inline-block overflow-hidden pb-[0.1em] pr-[0.2em] align-bottom -mb-[0.1em]"
              key={word}
            >
              <motion.span
                className="inline-block will-change-transform"
                initial={{ y: "115%", rotate: 5 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  delay: 0.12 + (i * 3 + j) * 0.07,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.em === j ? <em className="italic text-lime">{word}</em> : word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
