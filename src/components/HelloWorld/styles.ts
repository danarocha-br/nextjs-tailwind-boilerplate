import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Heading = styled.h1`
  ${tw`text-white`};
  ${({ theme }) => css`
    background-color: ${theme.text.main};
  `}
`;
