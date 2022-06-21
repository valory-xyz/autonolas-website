import { createGlobalStyle, css } from 'styled-components';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

export const backgroundGradient = url => css`
  background-image: linear-gradient(
      180deg,
      rgba(239, 255, 253, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(227, 255, 252, 1) 100%,
      rgba(239, 255, 253, 1) 100%
    ),
    url(${url});
  background-blend-mode: multiply;
`;

export const backgroundImage = url => css`
  background-image: url(${url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
