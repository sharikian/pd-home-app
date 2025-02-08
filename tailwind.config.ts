import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom': '8px -23px 81.4px #FFF, -8px 23px 81.4px rgba(26, 96, 78, 0.10)',
        'faq': '-8px 23px 81.4px #1a604e1a, 8px -23px 81.4px #ffffff'
      }
    },
  },
  plugins: [],
} satisfies Config;
