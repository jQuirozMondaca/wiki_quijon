/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#06b6d4",
          500: "#00bcd4",
          700: "#0e94a7",
        },
        fuchsia: {
          500: "#d946ef",
        },
        "slate-900-40": "rgba(15, 23, 42, 0.4)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgba(6,182,212,0.5)",
        "neon-fuchsia": "0 0 18px rgba(217,70,239,0.45)",
        "glow-inner-cyan": "inset 0 0 10px rgba(6,182,212,0.25)",
      },
      dropShadow: {
        "neon-fuchsia": "0 0 10px rgba(217,70,239,0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
