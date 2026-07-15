/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1c100c',
        roast: '#291711',
        coffee: '#5a3324',
        caramel: '#c8874b',
        cream: '#f4eadc',
        warm: '#fffaf3',
        gold: '#d2a665',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
