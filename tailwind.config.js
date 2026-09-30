/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // Orange-500
        primaryDark: '#EA580C', // Orange-600
        primaryLight: '#FDBA74', // Orange-300
        dark: '#1F2937', // Gray-800
        light: '#F9FAFB', // Gray-50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
