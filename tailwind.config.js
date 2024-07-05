/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#2A2B2F',
        secondary: '#ffffff',
        error: '#92400e',
        warning: '#f97316',
        info: '#575958',
        success: '#4ade80'
      },
      keyframes: {
        puzzle: {
          '0%': {},
          '100%': {
            left: '50%',
            order: 2
          }
        },
        pivotPuzzle: {
          '0%': {},
          '100%': {
            left: '50%',
            order: 1
          }
        },
        translateX: {
          '0%': {},
          '100%': {
            transform: 'translateX(var(--translateX))'
          }
        }
      },
      animation: {
        puzzle: 'puzzle 1s ease-in-out forwards',
        pivotPuzzle: 'pivotPuzzle 2s ease-in-out forwards',
        translateX: 'translateX 2s ease-in-out forwards'
      }
    }
  },
  plugins: []
}
