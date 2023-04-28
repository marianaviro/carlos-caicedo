/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#191919",
        yellow: "#f6d700",
        orange: "#fc5e02",
        pink: "#ff74df",
        white: "#f8f7f1",
      },
      fontFamily: {
        sans: ["proxima-nova-condensed", "Arial", "sans-serif"],
        display: ["Gregor", "Impact", "sans-serif"],
        serif: ["Bagatela", "Times New Roman", "serif"],
      },
      fontSize: {
        xs: "0.85rem",
        xxs: "0.7rem",
        "full-mobile": "6.3rem",
        "full-desktop": "12rem",
      },
      dropShadow: {
        pink: "0px 0px 8px #FF74E0",
        orange: "0px 0px 5px #fc5e02",
        "white-sm": "0px 0px 1px #f8f7f1",
        "white-md": "0px 0px 3px rgba(246, 245, 239, 0.8)",
      },
      borderWidth: {
        1: "1px",
      },
      opacity: {
        85: ".85",
      },
      lineHeight: {
        "very-tight": "0.8",
        "extra-tight": "0.75",
      },
    },
  },
  plugins: [],
};
