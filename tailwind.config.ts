import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        char: "#1a1a1a",
        paper: "#ffffff",
        cream: "#f5f0e6",
        rule: "#e5e0d4",
        ruled: "#2a2a26",
        ivory: "#e8e4da",
        stone: "#6b6b66",
        sand: "#8a857a",
        fog: "#a8a39a",
        gold: "#c9a961",
        moss: "#5c8c5a",
        navy: "#142844",
        navyEdge: "#1d3358",
        pine: "#2d4a36",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
