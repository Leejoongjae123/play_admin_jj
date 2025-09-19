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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--white))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--primary))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--orange-02))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        black: 'hsl(var(--black))',
        white: 'hsl(var(--white))',
        red: {
          DEFAULT: 'hsl(var(--red))',
          1: 'hsl(var(--red-01))',
          2: 'hsl(var(--red-02))',
          3: 'hsl(var(--red-03))',
        },
        orange: {
          1: 'hsl(var(--orange-01))',
          2: 'hsl(var(--orange-02))',
          3: 'hsl(var(--orange-03))',
          4: 'hsl(var(--orange-04))',
        },
        gray: {
          1: 'hsl(var(--gray-01))',
          2: 'hsl(var(--gray-02))',
          3: 'hsl(var(--gray-03))',
          4: 'hsl(var(--gray-04))',
          5: 'hsl(var(--gray-05))',
          6: 'hsl(var(--gray-06))',
          7: 'hsl(var(--gray-07))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
