/** @type {import('tailwindcss').Config} */

import { colord } from 'colord'

const lightPrimary=colord("hsl(180, 66%, 49%)").lighten(0.1).toHex()
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
  },
  
  screens:{
    'mobile':'375px',
    "desktop":'1440px'
  },

  colors:{
     colors:{
        primary_100:'hsl(180, 66%, 49%)',
        "light-primary":lightPrimary,
        primary_200:'hsl(257, 27%, 26%)',
        secondary:'hsl(0, 87%, 67%)',
        natural_100:'hsl(0, 0%, 75%)',
        natural_200:'Violet: hsl(257, 7%, 63%)',
        natural_300:'hsl(255, 11%, 22%)',
        natural_400:'hsl(260, 8%, 14%)',
        white:'white',
        main:"rgb(240,241,246)",
       
    },
  },
  fontFamily:{
    Regular:"Poppin_regular",
    Medium:"Poppin_Medium",

  },
  backgroundImage:{
    'SerachBar-pattern':'url("../../../public/images/bg-shorten-desktop.svg")',
    'boost-desktop':'url("../../../public/images/bg-boost-desktop.svg")'
  },

  plugins: [],
}}

