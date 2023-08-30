import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        flee: "run-away 2s linear",
      },
      keyframes: {
        "run-away": {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(1000px, 1000px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
