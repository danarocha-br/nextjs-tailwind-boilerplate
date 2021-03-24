import tokens from '../../../tailwind.config.js';

export default {
  id: 'dark',
  colors: {
    brand: tokens.theme.colors.brand,
    white: tokens.theme.colors.white,
  },

  text: {
    main: tokens.theme.colors.white,
    secondary: tokens.theme.colors.gray[200],
  },
} as const;
