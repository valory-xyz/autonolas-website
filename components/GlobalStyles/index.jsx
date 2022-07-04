import styled, { createGlobalStyle, css } from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

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

export const individualPageSection = css`
  /* max-width: 1200px; */
  margin: 0 auto;
`;

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  .ml-2 {
    margin-left: 2rem;
  }
  a {
    color: ${COLOR.PURPLE};
    text-underline-offset: 3px;
    &.btn {
      display: inline-block;
      text-decoration: none;
    }
    &.no-underline {
      text-decoration: none !important;
    }
  }
  .divider {
    border-bottom: 1px solid ${COLOR.BLACK};
  }
  .background-gradient {
    ${backgroundGradient};
  }
  .twitter-tweet {
    border-left: 3px solid ${COLOR.GREY_1};
    margin-left: 0;
    padding-left: 2rem;
  }
`;

export default GlobalStyle;

// ------------- common styles -------------
export const SubText = styled.div`
  font-size: 22px;
`;

export const HeaderAndAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  .header {
    margin-bottom: 0 !important;
  }

  ${MEDIA_QUERY.mobileL} {
    &.xs-wrap {
      flex-direction: column;
      .btn {
        padding-left: 0;
      }
    }
  }
`;

export const SeeAllBtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  ${MEDIA_QUERY.tablet} {
    margin-bottom: 0rem;
  }
`;

export const TwoColumnContents = styled.div`
  ${individualPageSection}
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6rem 0;
  .column {
    width: 40%;
    .img-container {
      width: 100%;
      min-height: 300px;
      ${containImage};
      background-position: left;
      margin-bottom: 0.75rem;
    }
    .header-text {
      margin: 0.75rem 0 0.5rem 0;
      font-size: 28px;
      font-family: "manrope__semibold", sans-serif;
    }
    .sub-text {
      font-size: 18px;
      margin: 1rem 0;
      text-transform: uppercase;
    }
    .date-published {
      margin-top: 1rem;
    }
    .btn {
      min-width: 150px;
      margin-top: 1rem;
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .column {
      .img-container {
        min-height: 200px;
      }
    }
    &.two-column-contents {
      padding: 0 !important;
    }
  }

  ${MEDIA_QUERY.tablet} {
    gap: 2rem;
    padding: 1rem !important;
    .column {
      width: 47.5%;
      .img-container {
        width: 100%;
      }
      .header-text {
      }
      .sub-text {
      }
      .btn {
        width: auto;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    display: flex;
    flex-direction: column;
    width: 100%;
    .column {
      width: 100%;
    }
  }
`;

export const ThreeColumnContents = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  .details {
    width: 30%;
    color: inherit;
    text-decoration: none;
  }
  .column {
    color: inherit;
    text-decoration: none;
    max-width: 400px;
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
    }
    .sub-text {
      font-size: 18px;
      margin: 1rem 0;
      text-transform: uppercase;
    }
    .btn {
      min-width: 150px;
      margin-top: 1rem;
    }
    .socials {
      margin-top: 1rem;
    }
  }

  ${MEDIA_QUERY.laptop} {
    .details {
      width: 28.5%;
    }
  }

  ${MEDIA_QUERY.tablet} {
    gap: 2rem;
    .details {
      width: 30%;
    }
  }

  ${MEDIA_QUERY.mobileL} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .details {
      width: 100%;
    }
    .column {
      .img-container {
        max-height: 200px;
      }
      .header-text {
      }
      .sub-text {
      }
      .btn {
        width: auto;
      }
      .socials {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.team-column-contents {
      .details {
        flex-basis: 100%;
        max-width: 300px;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
`;
