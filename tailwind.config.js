/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#E8005A',
          light: '#FF2D78',
        },
        blue: {
          deep: '#060D1F',
          mid: '#0E1E45',
          bright: '#1E4FC2',
        },
        white: {
          DEFAULT: '#F5F8FF',
        },
        grey: {
          steel: '#8A9BB5',
          light: '#C8D4E8',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
