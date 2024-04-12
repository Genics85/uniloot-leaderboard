/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#c61ed4",
          blue:"#0e042d",
          DEFAULT: "#3490dc",
          dark: "#2779bd",
        },
      },
    },
  },
  plugins: [],
};
