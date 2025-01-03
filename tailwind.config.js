/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F4F5F7',
        'cream': '#FBF3E8',
        'primary': '#1572E8',
        'secondary': '#E67E22',
        'dark': '#242424',
      },
      fontFamily: {
        'display': ['"DM Serif Display"', 'serif'],
        'body': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'marquee-up': 'marquee-up var(--duration) linear infinite',
        'marquee-down': 'marquee-down var(--duration) linear infinite',
        'marquee': 'marquee var(--duration) linear infinite',
        'marquee-left': 'marquee-left var(--duration) linear infinite',
        'marquee-right': 'marquee-right var(--duration) linear infinite',
      },
      keyframes: {
        'marquee-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        'marquee-down': {
          '0%': { transform: 'translateY(calc(-100% - var(--gap)))' },
          '100%': { transform: 'translateY(0)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-right': {
          '0%': { transform: 'translateX(calc(-100% - var(--gap)))' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      screens: {
        // 'sm':'640px',
        // 'md':'768px',
        // 'lg':'1024px',
        // 'max-sm':'640px',
        'desktop-1900': '1900px', // Custom breakpoint for 100%
        'desktop-1200': '1200px', // Custom breakpoint for 150%
        'desktop-1500': '1500px', // Custom breakpoint for 125%
        // '125-range': { min: '1501', max: '1900' },
        // '150-range': { min: '1200px', max: '1500px' },
        'sm': '1099px',
      // => @media (min-width: 640px) { ... }

      'md': '1100px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};