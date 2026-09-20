import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#00BFA5",
          tealLight: "#8FFFEA",
          tealDark: "#06221F",
          blue: "#3B82F6",
          slate: "#64748B",
          ink: "#0F172A",
          bg: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};

export default config;
