import tokens from '../../../tailwind.config.js';

export default {
  id: 'light',
  colors: {
    brand: tokens.theme.colors.brand,
    white: tokens.theme.colors.white,
  },

  text: {
    main: tokens.theme.colors.gray[900],
    secondary: tokens.theme.colors.gray[500],
  },
} as const;
