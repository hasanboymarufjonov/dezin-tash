/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   yellowdef: "#FDE910",
    //   blackdef: "#363532",
    //   graydef: "#C8C7C3",
    //   bluedef: "#F0F4F9",
    //   white: "#FFFFFF",
    // },

    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) ",
          },
          "33%": {
            transform: "translate(40px, -60px) ",
          },
          "66%": {
            transform: "translate(30px, 30px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
