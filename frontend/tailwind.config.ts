import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/generated/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        gray: {
          950: '#030712',
        },
        loot: '#FF550E',
        game: {
          bg: '#0a0a0f',
          panel: '#14141a',
        },
      },
      animation: {
        'block-drop': 'blockDrop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        blockDrop: {
          '0%': { transform: 'translateY(-24px) scale(0.8)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 85, 14, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 85, 14, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config