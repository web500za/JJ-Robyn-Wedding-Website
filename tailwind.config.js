/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5D7AC',
        'brown': '#BB3B24',
        'pink': '#D64091',
        'orange': '#F27405',
        'white': '#FFFFFF',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0,0,0,0.1)',
      },
      spacing: {
        'card': '3rem',
        'section': '6rem',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}