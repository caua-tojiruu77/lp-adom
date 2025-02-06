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
        brand: {
          '100': '#9A000C',
          '200': '#6D6D6D',
          '300': '#3D3D3D',
          '400': '#252525'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
