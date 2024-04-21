/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      light: "#fff4df",
      accent: "#f6b83d",
      midnight: "#262626",
      buttonHover: "#fbe7c1",
      buttonAccent: "#f9b020",
      grey: "rgba(38, 38, 38, 0.15)",
      medgrey: "rgba(255, 255, 255, 0.15)",
      lightgrey: "rgba(255, 255, 255, 0.5)",
      bgmodal: "rgba(38, 38, 38, 0.3)",
      error: "#ef2447",
      success: "#08aa83",
    },
    screens: {
      sm: { max: "374px" },
      mobile: "375px",
      tablet: "768px",
      desktop: "1280px",
    },
    borderRadius: {
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      15: "15px",
      30: "30px",
      full: "9999px",
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    fontSize: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      28: "28px",
      40: "40px",
      32: "32px",
      50: "50px",
      64: "64px",
      68: "68px",
      70: "70px",
    },
    fontFamily: {
      "manrope-medium": "Manrope-medium",
      "manrope-semibold": "Manrope-Semibold",
      "manrope-bold": "Manrope-Bold",
      "manrope-extrabold": "Manrope-ExtraBold",
    },
    transitionDuration: {
      350: "350ms",
    },
  },
  plugins: [],
};