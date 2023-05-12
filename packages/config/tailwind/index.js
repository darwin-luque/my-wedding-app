/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/pages/_app.tsx",
    "./src/pages/_document.tsx",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
