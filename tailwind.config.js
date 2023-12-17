/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "governor-bay": {
          50: "#f0f5fe",
          100: "#dce8fd",
          200: "#c1d7fc",
          300: "#96befa",
          400: "#659df5",
          500: "#4178f0",
          600: "#2c59e4",
          700: "#2346d2",
          800: "#263fba",
          900: "#223586",
          950: "#192252",
        },
      },
    },
  },
  plugins: [],
};
