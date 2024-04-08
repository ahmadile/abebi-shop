/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        'header-heigth':'3rem',
      },
      colors:{
        'dark-color':'#141414',
        'dark-color-light':'#848484',
        'dark-color-lighten':'#F2F2F2',
        'white-color':'#FFF'
      },
      rotate:{
        'rotate-img':'-30deg'
      },
      fontSize:{
        'big':'1.25rem',
        'bigger':'1.5rem',
        'biggest':'2rem',
        'h2':'1.25rem',
        'normal':'.938rem',
        'smaller':'.813rem'
      },
      fontFamily:{
        'body':['Poppins'],
      }
    },
  },
  plugins: [],
}

