/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blue': '#1fb6ff',
            },
            spacing:{
              '72': '18rem',
              '84': '21rem',
              '96': '24rem',
       },
    },
  },
  plugins: [],
}

