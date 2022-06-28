import styled, { createGlobalStyle, css } from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

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
    &.btn {
      display: inline-block;
      text-decoration: none;
    }
  }

  .divider {
    border-bottom: 1px solid ${COLOR.BLACK};
  }
  
`;

export default GlobalStyle;

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

// ------------- common styles -------------
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

export const TwoColumnContents = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 6rem 0;
  .column {
    width: 40%;
    .img-container {
      min-height: 260px;
      ${containImage};
      background-position: left;
      margin-bottom: 0.75rem;
    }
    .header-text {
      margin: 0.75rem 0 0.5rem 0;
      font-size: 28px;
      font-family: "manrope__semibold", sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-text {
      font-size: 12px;
      margin: 1rem 0;
      text-transform: uppercase;
    }
    .date-published {
      color: ${COLOR.PURPLE};
      margin-top: 1rem;
    }
    .btn {
      min-width: 150px;
      margin-top: 1rem;
    }
  }

  ${MEDIA_QUERY.laptop} {
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    flex-direction: column;
    .column {
      .img-container {
        min-height: 200px;
      }
      .header-text {
      }
      .sub-text {
      }
    }
  }
`;
