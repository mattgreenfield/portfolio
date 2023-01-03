/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{md,liquid,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ridley", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },

  plugins: [],
};
