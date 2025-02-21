const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, require("preline/plugin")],
};

// This plugin adds Tailwind colors as CSS variables, with dark mode support
function addVariablesForColors({ addBase, theme }) {
  // Light mode colors
  let lightColors = flattenColorPalette(theme("colors"));

  // Dark mode colors
  let darkColors = flattenColorPalette(theme("colors.dark"));

  // Add CSS variables for light mode
  let lightVars = Object.fromEntries(
    Object.entries(lightColors).map(([key, value]) => [`--${key}`, value])
  );

  // Add CSS variables for dark mode
  let darkVars = Object.fromEntries(
    Object.entries(darkColors).map(([key, value]) => [`--${key}`, value])
  );

  // Define the variables for light and dark mode
  addBase({
    ":root": lightVars, // Light mode variables
    ".dark": darkVars, // Dark mode variables
  });
}
