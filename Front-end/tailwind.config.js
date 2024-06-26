/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        background: {
          default: '#f0fdf9',
          form: '#9bf4de',
        },
        button: {
          'btn-bg': '#0f7666',
        },
        customGreen: {
          50: '#f0fdf9',
          100: '#ccfbed',
          300: '#5eeac8',
          500: '#14b898',
          600: '#0d947d',
          900: '#134e45',
          950: '#042f2a',
        },
        customBlue: {
          100: '#94c5fc',
          200: '#c0dbfd',
          300: '#94c5fc',
          500: '#2864e8',
        },
        customOrange: {
          200: '#fbd5ad',
          300: '#f9b778',
          500: '#f27322',
          700: '#bc4012',
        },
      },
    },
  },
  plugins: [],
}

