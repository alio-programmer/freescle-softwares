/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ClashGrotesk-Regular", "sans-serif"], // Default font for Tailwind's `sans`
        clashExtralight: ["ClashGrotesk-Extralight", "sans-serif"],
        clashLight: ["ClashGrotesk-Light", "sans-serif"],
        clashRegular: ["ClashGrotesk-Regular", "sans-serif"],
        clashMedium: ["ClashGrotesk-Medium", "sans-serif"],
        clashSemibold: ["ClashGrotesk-Semibold", "sans-serif"],
        clashBold: ["ClashGrotesk-Bold", "sans-serif"],
        clashVariable: ["ClashGrotesk-Variable", "sans-serif"],
      },
      animation: {
        "matrix-fall": "fall 5s linear infinite",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
