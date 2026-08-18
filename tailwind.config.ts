import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        neutral: {
          0: 'var(--colors-neutral-0)',
          100: 'var(--colors-neutral-100)',
          200: 'var(--colors-neutral-200)',
          300: 'var(--colors-neutral-300)',
          400: 'var(--colors-neutral-400)',
          600: 'var(--colors-neutral-600)',
          700: 'var(--colors-neutral-700)',
          800: 'var(--colors-neutral-800)',
          900: 'var(--colors-neutral-900)',
        },
        blue: {
          200: 'var(--colors-blue-200)',
          500: 'var(--colors-blue-500)',
          700: 'var(--colors-blue-700)',
          800: 'var(--colors-blue-800)',
          900: 'var(--colors-blue-900)',
        },
        green: {
          200: 'var(--colors-green-200)',
          500: 'var(--colors-green-500)',
          700: 'var(--colors-green-700)',
          900: 'var(--colors-green-900)',
        },
        yellow: {
          200: 'var(--colors-yellow-200)',
          500: 'var(--colors-yellow-500)',
          700: 'var(--colors-yellow-700)',
          900: 'var(--colors-yellow-900)',
        },
        red: {
          400: 'var(--colors-red-400)',
          600: 'var(--colors-red-600)',
        },
      },
      spacing: {
        0: 'var(--spacing-0)',
        25: 'var(--spacing-25)',
        50: 'var(--spacing-50)',
        75: 'var(--spacing-75)',
        100: 'var(--spacing-100)',
        150: 'var(--spacing-150)',
        200: 'var(--spacing-200)',
        250: 'var(--spacing-250)',
        300: 'var(--spacing-300)',
        400: 'var(--spacing-400)',
        500: 'var(--spacing-500)',
        600: 'var(--spacing-600)',
        800: 'var(--spacing-800)',
        1000: 'var(--spacing-1000)',
      },
      borderRadius: {
        0: 'var(--corner-radius-0)',
        4: 'var(--corner-radius-4)',
        6: 'var(--corner-radius-6)',
        8: 'var(--corner-radius-8)',
        10: 'var(--corner-radius-10)',
        12: 'var(--corner-radius-12)',
        16: 'var(--corner-radius-16)',
        20: 'var(--corner-radius-20)',
        24: 'var(--corner-radius-24)',
        full: 'var(--corner-radius-full)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      // boxShadow: {
      //   darkShadow:
      //     '1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.08)',
      // },
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

export default config;
