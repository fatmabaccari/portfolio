// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#8c6295ff',
        secondary: '#debae7ff',
         secondaryg: '#f0e7f3ff',
      },
       boxShadow: {
        'yellow': '0 4px 6px -1px rgba(249, 35, 199, 0.4), 0 2px 4px -2px rgba(100, 100, 14, 0.3)',
        'violet': '0 4px 6px -1px rgba(140, 98, 149, 0.4), 0 2px 4px -2px rgba(140, 98, 149, 0.3)',
      },
    fontFamily: {
      poppins: ['Paprika', 'sans-serif'],
    },
    },
  },
  plugins: [],
}