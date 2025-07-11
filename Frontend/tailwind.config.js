/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        first: "var(--color-first)",
        second: "var(--color-second)",
        third: "var(--color-third)",
        fourth: "var(--color-fourth)",
        fifth: "var(--color-fifth)",
      },
    },
  },
};
