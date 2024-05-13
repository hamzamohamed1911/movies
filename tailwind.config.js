/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1B262C',
        'navy': '#0F4C75',
        'blue': '#3282B8',
        'babyblue': '#BBE1FA',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ]
}