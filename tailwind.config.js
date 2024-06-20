/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'ubuntu': ["Ubuntu", 'sans-serif'],
        'FiraCode': ["Fira Code",'monospace'],
        'Agdasima': ["Agdasima",'sans-serif'],
        'RockSalt': ["Rock Salt", 'cursive'],
        'julee':[ "Julee", 'cursive'],
        'Acme': ["Acme", 'sans-serif']


      },
      colors:{
        mainColor:"#e9692c",
        grey:"#555555 ",
        bg:"#F8F8FF",
        borderColor:"#DCDCDC",
        greenColor:"#1A7C26",
        lightGrey:"#F4F4F4",
        colorhelp:"#37718e",
      },
      transitionDuration:{
        transition:".5s ease all"
      },
      FCshadow: {
        '3xl': '10 35px 60px 15px rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}