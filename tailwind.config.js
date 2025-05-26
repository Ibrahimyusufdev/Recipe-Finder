/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        volkhov: ["Volkhov", "sans-serif"],
      },
      colors: {
        orange: "#F6B100",
        dark: "#181A20",
        silver: "#9F9F9F",
      },
    },
  },
  plugins: [],
};
