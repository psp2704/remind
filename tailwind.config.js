/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        navy: '#14213d',
        orange: '#fca311',
        lightgray: '#e5e5e5',
        white: '#ffffff',
      },
      textColor: {
        DEFAULT: '#1a202c', // gray-900
      },
    },
  },
  plugins: [],
}