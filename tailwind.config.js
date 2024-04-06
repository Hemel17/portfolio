const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt: "VT323, monospace",
      },
      colors: {
        primary: "#fbbf24",
        secondary: "rgb(0,207,93)",
      },
    },
  },
  plugins: [],
});
