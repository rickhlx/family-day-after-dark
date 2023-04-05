/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      serif: ['RoxboroughCF'],
      sans: ['ui-sans-serif', 'system-ui'],
    },
    extend: {
      fontFamily: {
        parklane: ['PARKLANE'],
      },
    },
  },
  plugins: [],
};
