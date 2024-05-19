/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "authBG" : "url('../public/Images/AuthWallpaper.jpg')"
      }
    },
  },
  plugins: [],
  darkMode: 'selector',

}

