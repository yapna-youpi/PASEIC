/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      firstColor: "#2D2E6F",
      secondColor: "#DD1F2B",
      secondaryDarkColor: "#453c5c",
      lightBgColor: "#f2f3f5",
      lightTextColor: "#7c889a",
      borderColor: "#e5e8ec",
      darkColor: "#0a021c",
    },
    boxShadow: {
      panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
    },
    },
  },
  plugins: [],
}

