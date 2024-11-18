/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['roboto', 'sans-serif']
    },
    extend: {
      colors: {
        bg: '#0f0f0f',
        secondary: '#3e403f'
      },
    },
  },
  plugins: [],
}
