import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';
import tw, { GlobalStyles as TailwindGlobal } from 'twin.macro';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const CustomStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    ${tw`antialiased`};

    button {
      ${tw`cursor-pointer`};
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
        -webkit-tap-highlight-color: ${theme.colors.brand};
      `}
    }

    [disabled] {
      ${tw`cursor-not-allowed`};
    }

    html,
    body,
    #__next {
      ${tw`h-full`}
    }

    body,
    button,
    input,
    textarea {
      ${tw`font-sans`}
      font-display: swap;
    }

    button {
      ${tw`outline-none border-none cursor-pointer`}
    }
  `}
`;

const GlobalStyles = () => {
  return (
    <>
      <TailwindGlobal />
      <CustomStyles />
    </>
  );
};

export default GlobalStyles;
