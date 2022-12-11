/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#231557',
        'secondary': 'rgb(35,21,87)',
        'yellow' : '#facf0f'
      }
    },
  },
  plugins: [],
}

