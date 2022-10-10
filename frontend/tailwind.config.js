/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ecom-01': '#CCCCCC',
        'ecom-02': '#8C8C8C',
        'ecom-03': '#666666',
        'ecom-04': '#F5F7FF',
        'ecom-05': '#0156FF'
      },
    },
  },
  plugins: [],
};
