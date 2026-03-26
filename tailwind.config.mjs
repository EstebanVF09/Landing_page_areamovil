/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'am-dark': '#001D38',
        'am-blue': '#003F79',
        'am-blue-mid': '#014D94',
        'am-accent': '#0A84FF',
        'am-yellow': '#FFC501',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
