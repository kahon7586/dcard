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
          "text-2": "#7f7f7f",
          bg: "#00324e",
          "btn-bg-gray": "#f0f1f2",
          hover: "#002133",
          selected: "#4d7083",
          border: "#005585",
          "section-title": "#597a8c",
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
}
