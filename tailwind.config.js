/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
      "from-gray-400",
      "from-blue-400",
      "from-green-400",
      "to-gray-700",
      "to-blue-700",
      "to-green-700",
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variats: {
    extend: {},
  },
  plugins: [],
};
