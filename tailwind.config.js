/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Hammersmith": "Hammersmith One"
      },
      boxShadow:{
        "form": "0px 5px 5px 20px rgba(255, 255, 255, 0.08)"
      }
    },
  },
  plugins: [],
}
