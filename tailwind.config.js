/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cooper': ['Cooper Black' , "sans-serif"],
      },
      boxShadow: {
        '3xl': ' 5px 5px 20px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
