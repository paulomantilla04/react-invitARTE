/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'ibm': ['IBM'],
        'andika': ['Andika'],
        'inter': ['Inter'],
      }
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
    colors: {
      'homeSection': 'rgba(182, 252, 250, 0.3)'
    }
  },
  plugins: [],
}