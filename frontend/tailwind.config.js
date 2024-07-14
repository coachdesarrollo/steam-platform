/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-hero": "url('src/assets/banner-hero.png')",
      },
      animation: {
        scale: "scale linear forwards",
        "fade-out": "fade-out linear",
        slide: "slide linear forwards",
      },
      keyframes: {
        scale: {
          "25%": { opacity: 1 },
          "85%, 100%": { opacity: 0, transform: "scale(1.5)" },
        },
        "fade-out": {
          "100%": {
            opacity: 0,
            transform: "scale(0.5)",
          },
        },
        slide: {
          "100%": {
            transform: "translate(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
