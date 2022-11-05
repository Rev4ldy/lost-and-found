/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#2c2c2c",
        foot: "#f1f1f1",
        back: "#d5e9fc",
      },
      fontFamily: {
        qs: ["Quicksand"],
      },
    },
  },
  plugins: [],
};
