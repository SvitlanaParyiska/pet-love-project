/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,ts, tsx}", "./components/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      light: "#fff4df",
      accent: "#f6b83d",
      midnight: "#262626",
      error: "#ef2447",
      success: "#08aa83",
    },
  },
  plugins: [],
};
