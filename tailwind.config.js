module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxl: '153.6rem',
      xl: '128rem',
      lg: '102.4rem',
      md: '76.8rem',
      sm: '64rem',
      gutter: '3.2rem',
    },
    colors: {
      brand: '#F57573',
      white: '#FFFFFF',
      blue: {
        900: '#617DE0',
        500: '#a1b2ed',
        400: '#b6c3f1',
        300: '#ccd5f5',
        200: '#e1e6f9',
        100: '#f6f8fd',
      },
      green: {
        900: '#2AC084',
      },
      gray: {
        900: '#1D2324',
        800: '#252E30',
        700: '#3C4A4D',
        600: '#566A6E',
        500: '#7F9599',
        400: '#A0B3B3',
        300: '#BCCACA',
        200: '#D9E0E0',
        100: '#F0F2F2',
      },
    },
    fontFamily: {
      sans: [
        "-apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      ],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      tiny: '1.0rem',
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '4.4rem',
    },
    borderRadius: {
      xs: '0.4rem',
      sm: '0.8rem',
      md: '1.2rem',
      lg: '1.6rem',
      rounded: '50%',
    },
    boxShadow: {
      10: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      30: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      none: 'none',
    },
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
