const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "primary": ["Raleway", ...defaultTheme.fontFamily.sans],
      "secondary": ["Quicksand", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        "theme-about": "#ff0000",
        "theme-resume": "#84CC16",
        "theme-projects": "#3B82F6",
        "theme-blog": "#EA580C",
        "theme-skills": "#F59E0B",
        "theme-contact": "#32FFFF",
        "lime": colors.lime
      },
      fontSize: {
        "4.5xl": "2.625rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
