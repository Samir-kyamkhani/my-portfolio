import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
