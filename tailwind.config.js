/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-cyan": "#00494D",
        "very-light-grayish-cyan": "#f4fafa",
        "strong-cyan": "#26c0ab",
        "grayish-cyan": "#7F9C9F",
      },
      borderRadius: {
        "4xl": "37px"
      },
    },
    fontFamily: {
      "sans": ["Space Mono", "monospace"]
    },
  },
  plugins: [],
}