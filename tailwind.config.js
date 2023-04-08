/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: "#212832",
          200: "#181E4B",
          300: "#5E6282",
          400: "#14183E",
          500: "#1E1D4C",
          600: "#080809",
          700: "#84829A",
        },
        secondary: {
          100: "#DF6951",
          200: "#F1A501"
        }
      }
    },
  },
  plugins: [],
}
