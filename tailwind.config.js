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
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-12%)' },
         
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
         
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        slideIn: 'slideIn 0.2s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-out forwards',
      },
    
     

    },
  },
  plugins: [],
}