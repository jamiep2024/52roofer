/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        accent: '#FF4E8C',
        gold: {
          light: '#FFD700',
          DEFAULT: '#C5A572',
          dark: '#B8860B'
        },
        background: '#f9fafb',  // gray-50
        text: '#111827',        // gray-900
      },
    },
  },
  plugins: [],
}
