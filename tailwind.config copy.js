/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4377bc',
        'text-dark': '#1d1e1e',
        blue: {
          500: '#4377bc',
          600: '#3a6ba3',
          700: '#325d8a',
        }
      }
    },
  },
  plugins: [],
};
