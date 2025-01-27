import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A6BBCC',
        background: '#221F1F',
        friendlyGit: '#DF4B33',
        friendlyOs: '#1793D1',
      },
      boxShadow: {
        darkShadow:
          '1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.08)',
      },
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
