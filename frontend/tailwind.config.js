/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'], //global-font
        'montserrat': ['Montserrat'],
        'poppins': ['Poppins'],
      },
      backgroundImage: {
        "banner-hero": "url('/assets/banner-hero.png')",
      },
      animation: {
        scale: "scale linear forwards",
        "fade-out": "fade-out linear",
        slide: "slide linear forwards",
        "small-text": "small-text 1s forwards",
        "big-text": "big-text 1s forwards",
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
        "small-text": {
          from: {
            "font-size": "max(1.2rem, 1.3vw)",
          },
          to: {
            "font-size": "max(16px, 1.1vw)",
          },
        },
        "big-text": {
          from: {
            "font-size": "max(16px, 1.1vw)",
          },
          to: {
            "font-size": "max(1.2rem, 1.3vw)",
          },
        },
      },
    },
  },
  plugins: [],
};
