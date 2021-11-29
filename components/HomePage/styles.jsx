import styled, { createGlobalStyle } from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const widths = {
  maxSectionWidth: '1500px',
  mobileSectionPadding: '20px 10px',
};

/**
 * margin for button top 32px
 */

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow: ${({ isNavigationOpen }) => (isNavigationOpen ? 'hidden' : 'auto')};
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  .section {
    padding: 60px 50px;
    background-size: 100% 100%;
    .header {
      margin-bottom: 50px;
    }
  }
  /* common */
  .btn-center {
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  /* border-boxes (3 boxes with image) */
  .border-boxes {
    .row {
      display: flex;
      align-items: stretch;
      justify-content: center;
      .column {
        flex: 1;
        border: 1px solid ${COLOR.BLACK};
        padding: 96px 0;
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 60%;
          margin: 0 auto;
          img {
            width: 160px;
          }
          .text {
            margin-top: 48px;
          }
        }
        &:nth-child(2) {
          border-left-color: transparent;
          border-right-color: transparent;
        }
      }
    }
  }
  .description-l-1 {
    font-size: 30px;
  }
  .description-l-3 {
    font-size: 26px;
  }
  .description-l-4 {
    font-size: 18px;
  }
  .description-l-5 {
    font-size: 14px;
  }
  .bold {
    font-weight: bold;
  }
  .full-width {
    width: 100%;
  }
  .socials {
    display: flex;
    a {
      margin-right: 24px;
      img {
        width: 24px;
        height: 24px;
      }
      &.twitter {
        margin-top: 2px;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .description-l-3 {
      font-size: 22px;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .section {
      padding: ${widths.mobileSectionPadding};
      .header {
        margin-bottom: 20px;
      }
    }
    .description-l-3 {
      font-size: 20px;
    }
    .description-l-4 {
      font-size: 16px;
    }
    .border-boxes {
      .row {
        flex-direction: column;
        .column {
          padding: 32px 0;
          .content {
            max-width: none !important;
            img {
              width: 100px;
            }
            .text {
              margin-top: 24px;
            }
          }
          &:nth-child(2) {
            border-color: transparent ${COLOR.BLACK};
          }
        }
      }
    }
  }
`;
