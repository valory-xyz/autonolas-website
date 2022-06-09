import { createGlobalStyle } from 'styled-components';

export const LayoutGlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow: ${({ isNavigationOpen }) => (isNavigationOpen ? 'hidden' : 'auto')};
  }
`;

export default LayoutGlobalStyle;
