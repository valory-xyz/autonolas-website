import styled, { createGlobalStyle, css } from 'styled-components';
import { COLOR } from 'util/theme';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  a {
    color: ${COLOR.PURPLE};
    text-underline-offset: 3px;
  }

  .divider {
    border-bottom: 1px solid ${COLOR.BLACK};
  }
`;

export default GlobalStyle;

export const backgroundGradient = css`
  background-image: linear-gradient(
    180deg,
    rgba(239, 255, 253, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(227, 255, 252, 1) 100%,
    rgba(239, 255, 253, 1) 100%
  );
  background-blend-mode: multiply;
`;

export const SubText = styled.div`
  font-size: 22px;
`;

export const HeaderAndAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  .header {
    margin-bottom: 0 !important;
  }
`;

export const SeeAllBtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

// ------------- CSS -------------
export const containImage = css`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const backgroundImage = url => css`
  background-image: url(${url});
  ${containImage}
`;
