/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['Poiret One', 'sans-serif'],
      },
      colors: {
        customFooterGreen: "#232E26", // New color for the footer bottom part
        customblack:"#2c2828 ",
        customdarkyellow:"#3f3a2d",
        customyellow:"#dec066",
      },
    },
  },
  
  screens: {
    sm: '425px', // Small devices
    md: '768px', // Medium devices
    lg: '1024px', // Large devices
    xl: '1440px', // Extra-large devices
  },
  plugins: [],
}