/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sandstone: '#9A3E2C',
        brass: '#B08D46',
        ink: '#1B1712',
        marble: '#EFE8DA',
        deepink: '#221D17',
        steel: '#4A443C',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
};
