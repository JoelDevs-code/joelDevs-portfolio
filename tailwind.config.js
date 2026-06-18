/** @type {import('tailwindcss').Config} */

// import plugin from 'eslint-plugin-react-hooks';

export default{
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "950px",
    },
    extend: {},
  },
  plugins: [],
};
