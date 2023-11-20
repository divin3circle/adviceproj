/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1f2634",
        card: "#333b4a",
        advice: "#cee3e9",
        title: "#33ffa8",
        inner: "#202733",
      },
    },
  },
  plugins: [],
};
