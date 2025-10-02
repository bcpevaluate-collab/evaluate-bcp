/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bcp: ["Flexo", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // Mapeos directos a los tamaños que vimos en la página original
        "fs-14": ["14px", { lineHeight: "1.4" }],
        "fs-16": ["16px", { lineHeight: "1.4" }],
        "fs-18": ["18px", { lineHeight: "1.4" }],
        "fs-28": ["28px", { lineHeight: "1.3" }],
        "fs-32": ["32px", { lineHeight: "1.25" }],
        "fs-40": ["40px", { lineHeight: "1.25" }],
        "fs-56": ["56px", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        tightest: "-0.01em",
      },
    },
  },
  plugins: [],
};
