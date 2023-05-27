/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppin': 'Poppins' 
      },
      colors: {
        'gray': 'hsl(0, 0%, 75%)',
        'grayishViolet': 'hsl(257, 7%, 63%)',
        'veryDarkBlue': 'hsl(255, 11%, 22%)',
        'veryDarkViolet': 'hsl(260, 8%, 14%)',
        'reD': 'hsl(0, 87%, 67%)',
        'darkViolet': 'hsl(257, 27%, 26%)',
        'cYan': 'hsl(180, 66%, 49%)'
      },
      backgroundImage: {
        'bg-boost-mobile': "url('./images/bg-boost-mobile.svg')",
        'bg-boost-desktop': "url('./images/bg-boost-desktop.svg')",
        'bg-shorten-mobile': "url('./images/bg-shorten-mobile.svg')",
        'bg-shorten-desktop': "url('./images/bg-shorten-desktop.svg')"
      }
    }
  },
  plugins: [],
}