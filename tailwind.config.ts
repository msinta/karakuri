import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        // Karakuri — Hostinger-style vibrant purple
        brand: {
          50:  '#EEEAFF',
          100: '#DDD4FF',
          400: '#8B6FFF',
          500: '#7556FF',
          600: '#673DE6',
          700: '#5226CC',
          900: '#1F0F66',
        },
        // Dark surface palette
        ink: {
          DEFAULT: '#0A0A0F',
          900: '#0A0A0F',
          800: '#13131C',
          700: '#1C1C28',
          600: '#27273B',
          500: '#3A3A52',
        },
        line: '#06C755',
      },
    },
  },
  plugins: [],
}

export default config
