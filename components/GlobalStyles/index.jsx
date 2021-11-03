import { createGlobalStyle } from 'styled-components';
import { COLOR } from 'util/theme';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  body,
  html {
    width: 100%;
    height: 100%;
    background: ${COLOR.WHITE};
    overscroll-behavior: none;
    margin: 0;
    font-family: triakis__fontbold, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;

/**
 * Refer public/fonts/{font_name}/stylesheet.css for different font-family
 * eg. font-family: texgyreheroscn__italic;
 */
