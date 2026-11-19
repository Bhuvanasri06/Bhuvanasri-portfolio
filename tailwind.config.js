/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070709',
          card: 'rgba(16, 16, 26, 0.7)',
          cardElevated: 'rgba(22, 22, 38, 0.85)',
          border: 'rgba(168, 85, 247, 0.15)',
          borderHover: 'rgba(168, 85, 247, 0.45)',
        },
        brand: {
          purple: '#a855f7',
          violet: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          fuchsia: '#d946ef',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'subtle-pulse': 'subtlePulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        subtlePulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.65)' },
        }
      }
    },
  },
  plugins: [],
}
