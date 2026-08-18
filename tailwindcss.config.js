/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'smallMobile': { 'min': '320px', 'max': '360px' },
        'middleMobile': { 'min': '481px', 'max': '640px' },
        'bigMobile': { 'min': '641px', 'max': '768px' },
        'tabletsInPortraitMode': { 'min': '769px', 'max': '1024px' },
        'landscapeTabletsAndSmallDesktops': { 'min': '1025px ', 'max': '1280px' },
        'commonNotebook': { 'min': '1281px', 'max': '1440px' },
        'largeDesktops': { 'min': '1441px', 'max': '1920px' },
      },
    },
  },
  plugins: [],
}