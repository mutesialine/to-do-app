/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        '3xl':"-1px 2px 5px 6px rgba(18,16,17,0.59)"
      }
    },
  },
  plugins: [],
};
