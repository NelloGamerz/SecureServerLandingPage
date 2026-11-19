import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#030407",
          soft: "#070B14",
          card: "#0C1322",
        },
        paper: {
          DEFAULT: "#EEF2F8",
          dim: "#D7E0EE",
          line: "#26334A",
        },
        cobalt: {
          DEFAULT: "#1558C9",
          light: "#4D8BF0",
        },
        lime: "#D4FF24",
        mist: "#caced7",
        ash: {
          DEFAULT: "#98A3B8",
          soft: "#69758C",
        },
        danger: "#E0553C",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "sans-serif"],
        serif: ["var(--font-display)", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        radius: "14px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.18)", opacity: "0.85" },
        },
        stamp: {
          "0%": { transform: "scale(0.7) rotate(-12deg)", opacity: "0" },
          "60%": { transform: "scale(1.04) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        travel: {
          "0%": { left: "-12px", opacity: "0" },
          "10%": { opacity: "1" },
          "50%": { left: "50%", opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "calc(100% + 8px)", opacity: "0" },
        },
        spinfast: {
          to: { transform: "rotate(360deg)" },
        },
        progress: {
          "0%": { width: "0%", opacity: "0.85" },
          "50%": { width: "100%", opacity: "1" },
          "100%": { width: "100%", opacity: "1" },
        },
        send: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-4px) scale(1.03)" },
        },
        receive: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(4px) scale(1.03)" },
        },
        drift: {
          "0%, 100%": { translate: "0 0" },
          "50%": { translate: "-36px 28px" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s infinite",
        stamp: "stamp 900ms cubic-bezier(.2,1.6,.4,1) 400ms both",
        travel: "travel 2.6s ease-in-out infinite",
        "spin-fast": "spinfast 0.7s linear infinite",
        progress: "progress 2.6s ease-in-out infinite",
        receive: "receive 2.6s ease-in-out infinite",
        send: "send 2.6s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "drift-slow": "drift 22s ease-in-out infinite reverse",
        marquee: "marquee 30s linear infinite",
        mega: "marquee 46s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
