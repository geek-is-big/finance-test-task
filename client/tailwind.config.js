module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: '0px', max: '600px' },
      md: { min: '601px', max: '960px' },
      lg: { min: '961px', max: '1260px' },
      xl: { min: '1261px' },
    },
    extend: {
      fontFamily: {
        ticker: 'Work Sans, sans-serif',
      },
      fontSize: {
        legend: '9px',
      },
      lineHeigth: {
        legend: '9px',
      },
    },
  },
  plugins: [],
}
