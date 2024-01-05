/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1472px",
      },
    },
    fontFamily: {
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      primary: ["var(--playfair_display-font)"],
      secondary: ["var(--lato-font)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "borders-dark": "#363636",
        "borders-light": "#71717A",
      },
      transitionDuration: {
        10000: "20000ms",
      },
      animation: {
        fade: "fadeIn 3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
