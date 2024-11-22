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
        'glow-border': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
        glow: {
          '0%': { borderColor: 'rgba(139, 92, 246, 0.4)' },
          '25%': { borderColor: 'rgba(220, 180, 246, 0.6)' },
          '50%': { borderColor: 'rgba(72, 61, 139, 0.7)' },
          '75%': { borderColor: 'rgba(220, 180, 246, 0.6)' },
          '100%': { borderColor: 'rgba(139, 92, 246, 0.4)' },
        },
      },
    },
  },
  plugins: [
    // Existing custom plugins
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    // function ({ addUtilities }) {
    //   const ScrollUtilities = {
    //     ".no-scrollbar::-webkit-scrollbar": {
    //       display: "none",
    //     },
    //     ".no-scrollbar": {
    //       "-ms-overflow-style": "none",
    //       "scrollbar-width": "none",
    //     },
    //   };
    //   addUtilities(ScrollUtilities);
    // },
  ],
};
