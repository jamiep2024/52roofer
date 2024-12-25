/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss,sass}", // Updated styles directory
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#1a365d",
          600: "#1a365d",
          700: "#1a365d",
          800: "#1a365d",
          900: "#1a365d",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#2d3748",
          600: "#2d3748",
          700: "#2d3748",
          800: "#2d3748",
          900: "#2d3748",
        },
        accent: "#FF4E8C",
        gold: {
          light: "#FFD700",
          DEFAULT: "#C5A572",
          dark: "#B8860B",
        },
        background: "#f9fafb", // gray-50
        text: "#111827", // gray-900
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      fontSize: {
        "xs-mobile": ["0.75rem", { lineHeight: "1rem" }],
        "sm-mobile": ["0.875rem", { lineHeight: "1.25rem" }],
        "base-mobile": ["1rem", { lineHeight: "1.5rem" }],
      },
      aspectRatio: {
        video: "16 / 9",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
