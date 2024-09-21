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
        'custom-layout-p': '10px repeat(5, 1fr)',
      },
      screens: {
        '2xl-d': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl-l': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg-t': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md-p': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm-p': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}