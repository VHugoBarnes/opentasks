import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/user/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/organization/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/space/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/list/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/task/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: colors.amber,
      secondary: colors.white,

      background: colors.gray[300],
      backgroundBlack: colors.neutral[900],

      foreground: colors.neutral[900],
      foregroundBlack: colors.neutral[300]
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
