/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#13253C",
        secondary: "#36B6EF",
        tertiary: "#AD503D",
      },
    },
    screens: {
      "lg": { max: "2023px" },

      "sm": { max: "1000px" },
    },
  },
  plugins: [],
};
