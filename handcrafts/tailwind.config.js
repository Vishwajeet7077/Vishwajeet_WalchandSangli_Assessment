/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite-fr-moderne': ['"Playwrite FR Moderne"', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'nav-img': "url('/src/components/images/paper1.png')",
        'nav-img2': "url('/src/components/images/paper2.png')",
        'background-img' : "url('/src/components/images/background.jpg')",
      },
    },
  },
  plugins: [],
}
