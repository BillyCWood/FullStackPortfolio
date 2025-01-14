/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'primary-light': '#7480BA',
      'secondary-light': '#BAAE73',
      'dark': '#0B0D16',
      'primary-dark': '#191E31',
      'secondary-dark': '#C3BB6D',
    },
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
}

