/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          "customgray-1": "#D9D9D9",
          "customgray-2": "#FAFAFA",
          primary: "#1890FF",
          secondary: "#433E3F",
        },
   
      },
    },
  },
  plugins: [],
}