/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.css"],
  theme: {
    extend: {
      colors: {
        bgprimary: "var(--bg-primary-color)",
        bgsecondary: "var(--bg-secondary-color)",
        title: "var(--title-color)",
        titleShadow: "var(--title-shadow-color)",
        text: "var(--text-color)",
        buttontext: "var(--button-text-color)",
        buttonbg: "var(--button-bg-color)",
        buttonhoverbg: "var(--button-hover-bg-color)",
        textviewbg: "var(--textview-bg-color)",
        textview: "var(--textview-color)",
        modalbg: "var(--modal-bg-color)",
        modalcontentboxbg: "var(--modal-content-box-bg-color)",
        modaltext: "var(--modal-text-color)",
        modalborder: "var(--modal-border-color)",
        modalclose: "var(--modal-close-color)",
        modalclosehover: "var(--modal-close-hover-color)",
        heart: "var(--heart-color)",
        sociallogo: "var(--social-logo-color)",
        socialoutline: "var(--social-outline-color)",
      },
      fontFamily: {
        custom: ["Londrina", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
