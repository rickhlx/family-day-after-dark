/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    fontFamily: {
      'sans': ['RoxboroughCF']
    },
    extend: {
      fontFamily: {
        parklane: ['PARKLANE']
      }
    },
  },
  plugins: [],
}
