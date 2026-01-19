/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#595E9F',
        secondary: '#DCE4FF',
        ternary:"#E6E9ED",
        gray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c",
        },
        purple: {
          300: "#e0e7ff",
          400: "#ede9fe",
          500: "#6366f1",
          600: "#5046e4",
        }
      }
    },
  },
  plugins: [],
};
