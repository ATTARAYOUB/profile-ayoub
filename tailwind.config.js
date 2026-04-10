/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00d4ff',
          500: '#00b8e0',
          600: '#0099bb',
        },
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#141428',
          600: '#1a1a35',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        dm:       ['DM Sans', 'sans-serif'],
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        glow:         'glow 2s ease-in-out infinite alternate',
        shimmer:      'shimmer 2s linear infinite',
        'spin-slow':  'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        blink:        'blink 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px rgba(0,212,255,0.3)' },
          to:   { boxShadow: '0 0 25px rgba(0,212,255,0.7)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
