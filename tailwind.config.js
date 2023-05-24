/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-red': 'hsl(0, 78%, 62%)',
        'primary-cyan': 'hsl(180, 62%, 55%)',
        'primary-orange': 'hsl(34, 97%, 64%)',
        'primary-blue': 'hsl(212, 86%, 64%)',
        'neutral-darkBlue': 'hsl(234, 12%, 34%)',
        'neutral-grayishBlue': 'hsl(229, 6%, 66%)',
        'neutral-lightGray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
