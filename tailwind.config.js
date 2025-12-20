/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007bff',
        'brand-silk': '#f2f2f2',
        'brand-black': '#141414',
      },
    },
  },
  plugins: [],
};
