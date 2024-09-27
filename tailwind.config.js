// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure your app and components are being scanned
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlack: "#101112",
        selectedGray: "#2c2c2d",
        primaryTeal: "#24a89b",
      },
    },
  },
  plugins: [],
};