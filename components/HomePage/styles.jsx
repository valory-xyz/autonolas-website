import styled, { createGlobalStyle } from 'styled-components';
import { COLOR, BREAK_POINT, SIZES } from 'util/theme';

const widths = {
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
  top: -84px;
  margin: 0 auto;
  .section {
    padding: 40px 50px;
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
  .description-l-2 {
    font-size: 28px;
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
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    top: -75px;
    .section {
      padding: ${widths.mobileSectionPadding};
      .header {
        margin-bottom: 20px;
      }
    }
    .description-l-2 {
      font-size: 20px;
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

export const SectionOne = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${SIZES.bannerHeight});
  background-image: url("/images/birth-place/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 1100px;
    margin: 0;
    margin-top: 96px;
    margin-bottom: 0 !important;
    text-align: center;
    line-height: 0.85;
    font-size: 124px;
  }
  .description-l-2 {
    text-align: center;
    max-width: 800px;
    margin: 3rem 0;
    line-height: 1.4;
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    align-items: flex-start;
    justify-content: flex-start;
    background-image: url("/images/birth-place/background-mobile.jpg");
    padding: ${({ isNavigationOpen: e }) => `${e ? '20px 0px' : widths.mobileSectionPadding}!important`};

    .header {
      margin-right: 60px;
      margin-top: 86px;
      text-align: left;
      font-size: 54px;
    }
    .description-l-2 {
      max-width: 280px;
      margin-top: 6rem;
      text-align: left;
    }
    .btn {
      position: absolute;
      width: 80%;
      bottom: 64px;
      left: 50%;
      transform: translate(-50%, 0px);
    }
  }
`;

export const SectionFour = styled.div`
  position: relative;
  background-image: url("/images/what-are-we-building/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 586px;
    margin-bottom: 166px !important;
  }
  .bg-image {
    position: absolute;
    top: 280px;
    left: 50%;
    height: 275px;
    width: 500px;
    transform: translate(-50%, 0%);
    background-image: url("/images/what-are-we-building/image-1.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .row {
    .column {
      padding: 180px 0 48px 0 !important;
      .content {
        max-width: 64% !important;
        /* align-items: flex-start !important; */
        .title {
          text-transform: uppercase;
          max-width: 330px;
        }
        .text {
          margin-top: 12px !important;
          line-height: normal;
        }
      }
      &.column-1,
      &.column-3 {
        .content {
          align-items: flex-start !important;
        }
      }
      &.column-2 {
        .content {
          max-width: 330px;
          .title {
            text-align: center;
          }
        }
      }
    }
  }
  .btn {
    margin-top: 40px;
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/what-are-we-building/background-mobile.jpg");
    .header {
      margin-bottom: 54px !important;
    }
    .bg-image {
      top: 120px;
      width: 92%;
    }
    .row {
      .column {
        padding: 24px 16px !important;
        &.column-1 {
          min-height: 340px;
          display: flex;
          .content {
            justify-content: flex-end;
          }
        }
        &.column-2 {
          .content {
            align-items: flex-start;
            .title {
              text-align: left;
            }
          }
        }
      }
    }
    .btn {
      margin-bottom: 32px;
    }
  }
`;

export const SectionFive = styled.div`
  background-image: url("/images/your-head-start/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .description-l-3 {
    margin: 40px 0 20px 0;
  }
  .header {
    max-width: 980px;
  }
  .btn {
    margin-top: 40px;
  }
  .text {
    max-width: 280px;
    line-height: normal;
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/your-head-start/background-mobile.jpg");
    .description-l-3 {
      margin: 0 0 10px 0;
    }
    .text {
      max-width: 260px;
      text-align: center;
    }
  }
`;

export const SectionSix = styled.div`
  background-image: url("/images/accelerated-learning/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .dev-academy-logo img {
    display: flex;
    margin: 0 auto 32px auto;
    width: 140px;
  }
  .header {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .btn {
    margin-top: 40px;
  }
  .bg-image {
    height: 125px;
    width: 160px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .content .text {
    line-height: normal;
  }
  .row-1 {
    .column-1 {
      .bg-image {
        width: 200px;
      }
    }
    .column {
      .text {
        max-width: 246px;
      }
    }
  }
  .row-2 {
    .column {
      padding: 24px 0 !important;
      .title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 24px;
      }
      .text {
        > div {
          line-height: normal;
          margin-bottom: 12px;
        }
      }
    }
    .column-1 {
      border-color: transparent ${COLOR.BLACK} transparent transparent !important;
      .text {
        padding-right: 76px;
      }
    }
    .column-2 {
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      .title,
      .text {
        padding-left: 32px;
        padding-right: 32px;
      }
    }
    .column-3 {
      border-color: transparent transparent transparent ${COLOR.BLACK} !important;
      .title-logo {
        margin: 16px auto 0 auto;
        background-image: url("/images/accelerated-learning/autonolas-logo.png");
      }
    }
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/accelerated-learning/background-mobile.jpg");
    .header {
      line-height: 0.85;
    }
    &.border-boxes {
      .row-1 {
        .text {
          text-align: center;
        }
      }
      .row-2 .column {
        &.column-1 {
          border-right-color: transparent !important;
          border-bottom-color: ${COLOR.BLACK} !important;
        }
        &.column-2,
        &.column-3 {
          border-color: transparent !important;
        }
        &.column-2 {
          .title,
          .text {
            padding: 0;
          }
        }
        &.column-3 {
          .bg-image {
            display: none;
          }
        }
      }
    }
    .btn {
      margin-top: -16px;
    }
  }
`;

export const SectionEight = styled.div`
  background-image: url("/images/dapp/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 1000px;
  }
  .row-1 {
    max-width: 450px;
    margin-bottom: -60px;
  }
  .row-2 {
    .content {
      position: relative;
    }
  }
  .row-3 {
    display: flex;
    align-items: flex-start;
    margin-top: 48px;
    margin-bottom: 16px;
    .column {
      flex: 1;
      /* border: 1px solid red; */
    }
    .column-1 {
      min-width: 440px;
    }
    .column-2,
    .column-3 {
      padding-left: 64px;
      .btn {
        margin-top: 16px;
      }
    }
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/dapp/background-mobile.jpg");
    .row-1 {
      margin-bottom: 0;
    }
    .row-2 {
      .content {
        display: flex;
        flex-direction: column;
        img {
          &:nth-child(1) {
            padding: 48px 24px;
          }
          &:nth-child(2) {
            padding: 0px 24px;
          }
        }
        .text {
          position: relative;
          top: 0;
          font-size: 26px;
          transform: none;
        }
      }
    }
    .row-3 {
      flex-direction: column;
      .column {
        &.column-1 {
          min-width: auto;
        }
        &.column-2,
        &.column-3 {
          padding: 0;
          width: 100%;
          .content {
            margin-top: 32px;
            .btn {
              margin-top: 8px;
            }
          }
        }
      }
    }
  }
`;

export const SectionNine = styled.div`
  background-image: url("/images/lore/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    margin-bottom: 8px !important;
  }
  .row-2 {
    position: relative;
    font-size: 18px;
    .text-container {
      position: absolute;
      height: 200px;
      width: 100%;
      .text-row {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .text {
        text-align: center;
        line-height: 1.2;
      }
      .text-column {
      }
    }
    .text-container-1 {
      top: 35%;
      .text-row {
        align-items: flex-start;
        .column-1 {
          flex: 1.25;
        }
        .column-2 {
          flex: 1;
        }
        .text {
          max-width: 280px;
          margin: 0 auto;
        }
      }
    }
    .text-container-2 {
      bottom: 10%;
      .text-row {
        align-items: center;
      }
      .column-1 {
        margin-left: -10%;
      }
      .text {
        max-width: 300px;
      }
    }
  }
  .row-3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    .btn {
      margin-top: 16px;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/lore/background-mobile.jpg");
    .row-2 {
      font-size: 20px;
      .text-container {
        .text-row {
          align-items: center;
          flex-direction: column;
        }
      }
      .text-container-1 {
        height: 680px;
        top: 17.5%;
        .text-row {
          .text {
            max-width: 280px;
          }
        }
      }
      .text-container-2 {
        bottom: -3.5%;
        .column-1 {
          margin: 0;
        }
        .text-row {
          .text {
            max-width: 300px;
          }
        }
      }
    }
    .row-3 {
      flex-direction: column;
      .column {
        width: 100%;
        text-align: left;
        .btn {
          margin-top: 8px;
        }
        &.column-1 {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
