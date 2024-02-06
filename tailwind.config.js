/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dcard: {
          DEFAULT: "#006aa6",
          light: "#3397cf",
          "light-hover": "#5ab0db",
          text: "#bfc7cc",
          bg: "#00324e",
          hover: "#002133",
          select: "#4d7083",
          border: "#005585",
        },
      },
    },
  },
  plugins: [],
}
