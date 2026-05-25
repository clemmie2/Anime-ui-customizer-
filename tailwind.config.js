/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anime: ['"Press Start 2P"', 'sans-serif'],
        cyber: ['"VT323"', 'monospace'],
        sakura: ['Inter', 'system-ui'],
      },
      colors: {
        neon: {
          pink: '#ff00ff',
          cyan: '#00ffff',
          purple: '#9d00ff',
        }
      }
    }
  }
}