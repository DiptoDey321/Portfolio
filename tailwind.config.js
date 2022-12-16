/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : 'rgb(1, 131, 88)',
        'secondary': 'rgb(35,21,87)',
        'yellow' : '#facf0f'
      }
    },
  },
  plugins: [],
}

