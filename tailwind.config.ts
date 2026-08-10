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
          DEFAULT: "#14120F",
          soft: "#1B1812",
          card: "#211D15",
        },
        paper: {
          DEFAULT: "#F3ECDD",
          dim: "#E7DEC8",
          line: "#C9B78E",
        },
        brass: {
          DEFAULT: "#C08A3E",
          light: "#E0B978",
        },
        mist: "#7FA0AA",
        ash: {
          DEFAULT: "#9C9484",
          soft: "#6E6858",
        },
        danger: "#B3543F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        radius: "14px",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        stamp: {
          "0%": { transform: "scale(2.4) rotate(-18deg)", opacity: "0" },
          "70%": { transform: "scale(0.92) rotate(4deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        travel: {
          "0%": { left: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "96%", opacity: "0" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        progress: {
          "0%": { width: "0%", opacity: "0.4" },
          "15%": { opacity: "1" },
          "85%": { width: "100%", opacity: "1" },
          "100%": { width: "100%", opacity: "0" },
        },
        receive: {
          "0%, 75%": { boxShadow: "0 0 0 0 rgba(192, 138, 62, 0)" },
          "90%": { boxShadow: "0 0 0 8px rgba(192, 138, 62, 0.2)" },
          "100%": { boxShadow: "0 0 0 0 rgba(192, 138, 62, 0)" },
        },
        send: {
          "0%, 100%": { transform: "scale(1)" },
          "5%": { transform: "scale(1.06)" },
          "15%": { transform: "scale(1)" },
        },
      },
      animation: {
        pulse: "pulse 2.4s infinite",
        stamp: "stamp 900ms cubic-bezier(.2,1.6,.4,1) 400ms both",
        travel: "travel 2.6s ease-in-out infinite",
        spin: "spin 0.7s linear infinite",
        progress: "progress 2.6s ease-in-out infinite",
        receive: "receive 2.6s ease-in-out infinite",
        send: "send 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
