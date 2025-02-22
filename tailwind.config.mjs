/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-1": "#0F172A",
        "blue-1": "#003B99",
        "blue-2": "#2563EB",
        "off-white": "#F1F5F9",
        "gray-1": "#475569",
        "gray-2": "#C9C9C9",
        "gray-3": "#8D8D8D",
        "light-gray": "#CBD5E1",
        "green-1": "#D1FAE5",
        "green-2": "#CFFAFE",
        "light-blue": "#DBEAFE",
        "light-purple": "#EDE9FE",
      },
      backgroundImage: {
        "team-bg":
          "linear-gradient(96.34deg, #06AB06 0.49%, #122483 100%), url('/images/hero.png')",
        "hero-bg":
          "linear-gradient(270deg, rgba(0, 59, 153, 0) 1.67%, rgba(0, 59, 153, 0.2) 17.89%, rgba(0, 59, 153, 0.4) 41.49%, rgba(0, 59, 153, 0.8) 73.52%, rgba(0, 59, 153, 0.9) 100%), url('/images/hero-1.png')",

        "community-linear":
          "linear-gradient(99.45deg, #312E81 0%, #1E40AF 0.01%, #1E3A8A 46%, #701A75 96.97%)",
        "howto-bg": "url('/images/blueRoad.png')",
      },
    },
  },
  plugins: [],
};
