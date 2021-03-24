import { create } from '@storybook/theming';
import tokens from '../tailwind.config.js';

export default create({
  base: 'light',

  colorPrimary: tokens.theme.colors.gray[800],
  colorSecondary: tokens.theme.colors.blue[900],

  appBg: tokens.theme.colors.white,
  appContentBg: tokens.theme.colors.white,
  appBorderColor: tokens.theme.colors.gray[300],
  appBorderRadius: 8,
  appTextColor: tokens.theme.colors.gray[500],

  textColor: tokens.theme.colors.gray[800],
  fontBase: 'DM Sans, sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: tokens.theme.colors.gray[800],
  barSelectedColor: tokens.theme.colors.brand,
  // barBg: lighten(0.05, tokens.colors.nebula[900]),

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: tokens.theme.colors.gray[800],
  inputBorderRadius: 4,

  brandTitle: 'Brand Docs',
  brandUrl: 'https://www.danarocha.com',
});
