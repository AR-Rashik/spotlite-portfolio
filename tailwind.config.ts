import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";

import typographyStyles from "./typography";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  plugins: [typographyPlugin],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        outsideDarkBg: "#080d17", // dark:bg-black
        primaryDarkBg: "#0f182a", // dark:bg-zinc-900
        secondaryDarkBg: "#1c2c50", // dark:bg-zinc-800/90
        cardDarkBg: "#16213d", // dark:bg-zinc-800/50
        primaryDarkText: "#e2e8f0", // dark:text-zinc-100
        secondaryDarkText: "#94a3b8", // dark:text-zinc-400
        tertiaryDarkText: "#64748b", // dark:text-zinc-500
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      typography: typographyStyles,
    },
  },
} satisfies Config;
