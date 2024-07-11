/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        jump: 'jump 0.4s ease-in',
      },
      fontFamily: {
        'inconsolata': ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}
