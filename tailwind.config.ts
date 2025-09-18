import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--white)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--primary)',
        },
        black: 'var(--black)',
        red: {
          DEFAULT: 'var(--red)',
          1: 'var(--red-01)',
          2: 'var(--red-02)',
          3: 'var(--red-03)',
        },
        orange: {
          1: 'var(--orange-01)',
          2: 'var(--orange-02)',
          3: 'var(--orange-03)',
          4: 'var(--orange-04)',
        },
        gray: {
          1: 'var(--gray-01)',
          2: 'var(--gray-02)',
          3: 'var(--gray-03)',
          4: 'var(--gray-04)',
          5: 'var(--gray-05)',
          6: 'var(--gray-06)',
          7: 'var(--gray-07)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
