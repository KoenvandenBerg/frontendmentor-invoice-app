import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#7C5DFA',
        'purple-medium': '#9277FF',
        'purple-light': '#7E88C3',
        'purple-very-light': '#DFE3FA ',
        'blue-very-dark': '#141625',
        gray: '#888EB0',
        'blue-dark': '#1E2139',
        'blue-medium': '#252945',
        'red-dark': '#EC5757',
        'red-light': '##9277FF',
        'off-black': '#0C0E16',
        'off-white': '#F8F8FB',
      },
    },
  },
  plugins: [],
};
export default config;
