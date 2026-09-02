/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: '#0F172A', 800: '#1E293B', 700: '#334155', 600: '#475569' },
        electric:{ DEFAULT: '#2563EB', light: '#3B82F6', dark: '#1D4ED8' },
        teal:    { DEFAULT: '#06B6D4', light: '#22D3EE', dark: '#0891B2' },
        offwhite:{ DEFAULT: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0' },
        slate:   { DEFAULT: '#1E293B', 500: '#64748B', 400: '#94A3B8', 300: '#CBD5E1' },
        emerald: { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
      },
      fontFamily: {
        inter:   ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card:    '0 1px 3px 0 rgba(0,0,0,0.08), 0 4px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 4px 20px 0 rgba(0,0,0,0.12), 0 8px 32px 0 rgba(37,99,235,0.08)',
        'blue':  '0 4px 24px 0 rgba(37,99,235,0.25)',
        'teal':  '0 4px 24px 0 rgba(6,182,212,0.25)',
      },
    },
  },
  plugins: [],
}
