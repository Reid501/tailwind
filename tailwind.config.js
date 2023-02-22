/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: "#ff6363",
        secondary: {
          100: "#E2E2DS",
          200: "#888883",
        },
      }),
    },
  },
  plugins: [],
};
