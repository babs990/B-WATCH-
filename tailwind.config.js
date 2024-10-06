/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ombre1 : '9px 15px 7.6px rgba(0, 0, 0, 0.35)',
        ombre2 : '0px 4px 32.7px rgba(0, 0, 0, 0.35)'
      }
    },
  },
  plugins: [],
}

