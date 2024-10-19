const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ombre1 : '9px 15px 7.6px rgba(0, 0, 0, 0.35)',
        ombre2 : '0px 4px 32.7px rgba(0, 0, 0, 0.35)',
        ombreCarte : '6px 6px 6.9px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        fadeUp : {
          "0%" : { transform : "translateY(30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateY(0) scale(1)", opacity : '1'},
        },
        fadeIn : {
          "0%" : { transform : "translateY(-30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateY(0) scale(1)", opacity : '1'},
        },
        fadeRight : {
          "0%" : { transform : "translateX(30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateX(0) scale(1)", opacity : '1'},
        },
        fadeLeft : {
          "0%" : { transform : "translateX(-30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateX(0) scale(1)", opacity : '1'},
        },
        comeRight : {
          "0%" : { transform : "translateX(50px)"},
          "100%" : { transform : "translateX(0px)"}
        },
        comeLeft : {
          "0%" : { transform : "translateX(-50px)"},
          "100%" : { transform : "translateX(0px)"}
        },
      },
      animation : {
        fadeUp1 : "fadeUp 3s",
        fadeUp2 : "fadeUp 5s",
        fadeIn : "fadeIn 1s",
        fadeRight : "fadeRight 4s",
        fadeLeft : "fadeLeft 3s",
        comeRight : "comeRight 2s",
        comeLeft : "comeLeft 2s"
      }
    },
  },
  plugins: [],
}

