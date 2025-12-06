// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
          light: '#a855f7',
        },
        accent: '#0044ff',
        background: '#ffffff',
        text: '#1f2937',
        card: '#f9fafb',
        border: '#e5e7eb',
      },
      safelist: [
    "purple-gradient",
    "purple-gradient-hover",
    "purple-text",
    "purple-outline"
  ],
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}