import { withTV } from 'tailwind-variants/transformer';

const config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#01041F',
        'light-purple': '#020365',
        'light-gray': '#efeff8',
        'dark-blue': '#0e1527',
        'white': '#ffffff',
        'lighter-black': '#141414',
        'purple': '#371172',
        'gray': '#f8f8f8',
        'red': '#ff470b',
        'black': '#000',

      },
      fontSize: {
        '3xl': '36px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});

export default config;
