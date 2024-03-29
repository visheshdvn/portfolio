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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1900px",
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
        fade: "fadeIn 2s ease-in",
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
