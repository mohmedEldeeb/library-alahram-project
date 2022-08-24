/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode:'jit',
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
