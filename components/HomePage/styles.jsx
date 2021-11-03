import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {}
`;

export const Container = styled.div`
  text-align: center;
  .section {
    height: 100vh;
  }

  .section-1 {
  }
  .section-2 {
  }
  .section-3 {
  }
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    120deg,
    rgba(149, 242, 183, 1) 0%,
    rgba(0, 255, 36, 1) 40%,
    rgba(138, 209, 114, 1) 68%,
    rgba(136, 182, 118, 1) 77%,
    rgba(219, 219, 219, 1) 100%
  );
  .header {
    text-align: center;
    max-width: 700px;
  }
  .description {
    text-align: center;
    max-width: 550px;
  }
`;
