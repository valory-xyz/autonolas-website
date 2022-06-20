import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
