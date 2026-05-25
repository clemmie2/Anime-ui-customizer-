/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'anime': ['"Press Start 2P"', 'system-ui'],
        'cyber': ['"VT323"', 'monospace'],
        'sakura': ['"Inter"', 'sans-serif']
      },
      colors: {
        neon: {
          pink: '#ff00ff',
          blue: '#00f0ff',
          purple: '#8b00ff'
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  }
}