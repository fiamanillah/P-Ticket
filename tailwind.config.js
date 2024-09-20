/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        // Add more custom font families as needed
      },
      colors:{
        primary : "#1DD100",
        primary10 : "#1DD1001A",
        dullText : "#030712B3"
      },
      boxShadow : {
        primary : " 0px 3px 0px 0px #1DD100"
      },
      gridTemplateColumns: {
        // Custom grid template: 1st col 50px, other 5 cols 1fr each
        'custom-layout': '50px repeat(5, 1fr)',
      },
    },
  },
  plugins: [],
}