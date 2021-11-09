import styled, { createGlobalStyle } from 'styled-components';
import { COLOR } from 'util/theme';

const widths = {
  maxSectionWidth: '1400px',
};

/**
 * margin for button top 32px
 */

export const GlobalStyle = createGlobalStyle`
  body {}
`;

export const Container = styled.div`
  .section {
    padding: 40px 50px;
    .header {
      margin-bottom: 50px;
    }
    > * {
      max-width: ${widths.maxSectionWidth};
      /* margin: 0 auto; */
    }
  }

  .section-1 {
  }
  .section-2 {
  }
  .section-3 {
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
          max-width: 55%;
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
    font-size: 20px;
  }
  .bold {
    font-weight: bold;
  }
  .full-width {
    width: 100%;
  }
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: linear-gradient(
    120deg,
    rgba(149, 242, 183, 1) 0%,
    rgba(0, 255, 36, 1) 40%,
    rgba(138, 209, 114, 1) 68%,
    rgba(136, 182, 118, 1) 77%,
    rgba(219, 219, 219, 1) 100%
  ); */
  background-image: url("/images/header-background-frame.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .header {
    text-align: center;
    max-width: 700px;
    transform: scale(1.25);
    margin: 0;
  }
  .description {
    text-align: center;
    max-width: 550px;
    margin: 4rem 0;
  }
`;

export const SectionTwo = styled.div`
  background-image: url("/images/why-autonolas/background.png");
  background-repeat: no-repeat;
  .header {
    /* margin-bottom: 50px; */
  }
  .row {
    &.row-1 {
      display: flex;
      align-items: flex-start;
      .column {
        flex: 1;
        /* border: 1px solid red; */
        &.column-1 {
          .content {
            max-width: 70%;
            img {
              width: 55%;
            }
          }
        }
        &.column-2 {
          .content {
            max-width: 65%;
            img {
              width: 90%;
            }
          }
        }
        &.column-3 {
          .content {
            max-width: 70%;
            img {
              width: 100%;
            }
            li {
              list-style-type: circle;
              margin-bottom: 1em;
            }
          }
        }
      }
    }
    &.row-2 {
      display: flex;
      align-items: flex-start;
      .column {
        flex: 1;
        /* border: 1px solid red; */
      }
      .column-1 img {
        width: 90%;
      }
      .column-2 {
        align-self: flex-end;
        .content {
          max-width: calc(100% - 30px);
          img {
            width: 35%;
          }
        }
      }
      .column-3 {
        position: relative;
        left: -30px;
        top: 50px;
        align-self: center;
        img {
          width: 80%;
        }
      }
    }
    .text {
      margin-top: 30px;
    }
  }
`;

export const SectionThree = styled.div`
  background-image: url("/images/what-is-autonolas/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content {
    position: relative;
    /* max-height: 560px;
    min-height: 560px;
    background-image: url("/images/what-is-autonolas/logo.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; */
    img {
      width: 100%;
    }
    .text {
      position: absolute;
      width: 250px;
    }
    .text-1 {
      top: 50%;
      left: 0;
      text-align: left;
    }
    .text-2 {
      top: 15%;
      right: 0;
      text-align: right;
    }
  }
`;

export const SectionFour = styled.div`
  position: relative;
  background-image: url("/images/what-are-we-building/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .header {
    max-width: 420px;
    margin-bottom: 140px !important;
  }
  .bg-image {
    position: absolute;
    top: 210px;
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
      padding: 180px 0 40px 0 !important;
      .content {
        /* align-items: flex-start !important; */
        .title {
          text-transform: uppercase;
          font-size: 20px;
        }
        .text {
          margin-top: 12px !important;
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
          max-width: 300px;
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
`;

export const SectionFive = styled.div`
  background-color: ${COLOR.GREY_1};
  .header {
    max-width: 700px;
  }
  .btn {
    margin-top: 40px;
  }
`;

export const SectionSix = styled.div`
  background-image: url("/images/accelerated-learning/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .dev-academy-logo img {
    display: flex;
    margin: 0 auto 32px auto;
    width: 120px;
  }
  .header {
    max-width: 800px;
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
  .row-1.column-1 {
    .bg-image {
      width: 200px;
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
          text-transform: uppercase;
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
`;
