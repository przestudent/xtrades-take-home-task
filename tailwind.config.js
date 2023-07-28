/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "accent-green": "#81edb9",
        "accent-blue": "#5865f2",
        "accent-email": "#81EDBA",
        "accent-aqua": "#05cfee",
        "accent-greener": "#04E08A",
        "accent-gray": "#14171a",
        "accent-border": "#2B2E30",
      },
    },
  },
  plugins: [],
};
