/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./components/**/*.{html,js,vue,ts}",
    "./sections/**/*.{html,js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#7480BA',
        'secondary-light': '#BAAE73',
        'dark': '#0B0D16',
        'primary-dark': '#191E31',
        'secondary-dark': '#C3BB6D',
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
}

