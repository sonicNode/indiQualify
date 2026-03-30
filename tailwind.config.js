/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saarthi: {
          bg: '#0F172A',
          surface: '#111C33',
          gold: '#E6C9A8',
          goldDeep: '#D4A373',
          cream: '#F5F0E6',
          muted: '#C9B8A8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(230, 201, 168, 0.25)',
        'glow-sm': '0 0 24px -6px rgba(212, 163, 115, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.85s ease-out forwards',
        'fade-up': 'fadeUp 0.85s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
