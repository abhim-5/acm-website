/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flax-smoke': {
          50: '#f4f4f1',
          100: '#e8e8df',
          200: '#d2d3c3',
          300: '#b6b79f',
          400: '#9b9c7f',
          500: '#838566',
          600: '#62644c',
          700: '#4d4e3d',
          800: '#404133',
          900: '#38392e',
          950: '#1c1d16',
        },
      },
      fontFamily: {
        title: ['title', 'sans-serif'],
        body: ['body', 'sans-serif'],
        fancy: ['Bricolage Grotesque', 'sans-serif'],
      },
      screens: {
        '2xs': '420px',
        'xs': '512px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        '8xl': '1920px',
        '9xl': '2560px',
        '10xl': '3200px',
      },
    },
  },
  plugins: [],
}
