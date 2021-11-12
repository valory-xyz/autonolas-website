import styled, { createGlobalStyle } from 'styled-components';
import { COLOR } from 'util/theme';

const widths = {
  maxSectionWidth: '1500px',
};

/**
 * margin for button top 32px
 */

export const GlobalStyle = createGlobalStyle`
  body {}
`;

export const Container = styled.div`
  max-width: ${widths.maxSectionWidth};
  margin: 0 auto;
  .section {
    padding: 40px 50px;
    .header {
      margin-bottom: 50px;
    }
    > * {
      /* max-width: ${widths.maxSectionWidth}; */
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
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/images/birth-place/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .header {
    text-align: center;
    max-width: 1100px;
    font-size: 120px;
    margin: 0;
  }
  .description {
    text-align: center;
    max-width: 700px;
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
            max-width: 72%;
            img {
              width: 65%;
            }
          }
        }
        &.column-2 {
          .content {
            max-width: 71.75%;
            img {
              width: 86%;
            }
          }
        }
        &.column-3 {
          .content {
            max-width: 78%;
            img {
              width: 100%;
            }
            ul {
              margin-top: 12px;
              li {
                list-style-type: circle;
                margin-bottom: 1em;
              }
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
      font-size: 18px;
    }
  }
`;

export const SectionThree = styled.div`
  background-image: url("/images/what-is-autonolas/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 420px;
  }
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
    max-width: 424px;
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
          max-width: 280px;
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
  .text {
    max-width: 220px;
  }
`;

export const SectionSix = styled.div`
  background-image: url("/images/accelerated-learning/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .dev-academy-logo img {
    display: flex;
    margin: 0 auto 32px auto;
    width: 140px;
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
  .row-1 {
    .column-1 {
      .bg-image {
        width: 200px;
      }
    }
    .column {
      .text {
        max-width: 186px;
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

export const SectionSeven = styled.div`
  background-image: url("/images/do-your-lifes-work/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    margin-bottom: 12px !important;
  }
  /* move to top */

  .description-l-3 {
    width: 350px;
    margin-bottom: 32px;
    font-size: 18px;
  }
  .description-l-5 {
    font-size: 14px;
  }
  img {
    width: 100%;
  }
  .row-1 {
    display: flex;
    margin-top: -15px;
    .column {
      flex: 1;
      padding: 40px 0;
      .content {
        max-width: 220px;
        margin: 0 auto;
        text-align: center;
        font-family: triakis__fontbold, sans-serif;
        font-size: 21px;
        text-transform: uppercase;
      }
      &.column-2 {
        border-left: 1px solid ${COLOR.GREEN_2};
        border-right: 1px solid ${COLOR.GREEN_2};
      }
    }
  }
  .btn {
    margin: 40px auto;
  }
  .row-2 {
    display: flex;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid ${COLOR.BLACK};
    .column {
      flex: 1;
      &.column-1 .time {
        margin-top: 8px;
        p {
          margin: 0;
        }
        span {
          text-decoration: underline;
        }
      }
      &.column-2 {
        text-align: center;
      }
      &.column-3 {
        text-align: right;
        .content {
          width: 280px;
          float: right;
          p {
            margin: 0;
          }
        }
      }
    }
  }
`;

export const SectionEight = styled.div`
  background-image: url("/images/dapp/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 700px;
  }
  .row-1 {
    max-width: 400px;
    margin-bottom: 50px;
  }
  .row-2 {
    .content {
      position: relative;
      .text {
        position: absolute;
        top: 50%;
        transform: translate(0px, -50%);
        font-weight: bold;
        max-width: 500px;
        font-family: triakis__fontheavy, sans-serif;
        font-size: 39px;
      }
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
    .column-2,
    .column-3 {
      padding-left: 64px;
      .btn {
        margin-top: 16px;
      }
    }
  }
`;

export const SectionNine = styled.div`
  background-image: url("/images/lore/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    margin-bottom: 8px !important;
  }
  .row-2 {
    position: relative;
    font-family: "triakis__fontbold";
    font-size: 28px;
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
          max-width: 480px;
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
        max-width: 430px;
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
    .column-1 {
      text-align: left;
    }
    .column-2 {
      text-align: right;
    }
  }
`;

export const SectionTen = styled.div`
  background-image: url("/images/about/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    line-height: normal;
  }
  .name {
    font-family: "triakis__fontmedium";
    text-transform: uppercase;
    font-size: 24px;
  }
  .what-they-do {
    display: table-cell;
    vertical-align: middle;
    list-style: none;
    padding: 0;
    li {
      line-height: 1.2;
    }
  }

  .row-1.founders {
    display: flex;
    padding-bottom: 56px;
    border-bottom: 1px solid ${COLOR.GREEN_2};
    .founder {
      flex: 1;
    }
    .what-they-do {
      max-width: 320px;
      height: 108px;
    }
  }
  .row-2.founding-team {
    display: flex;
    padding: 56px 0;
    overflow-x: auto;
    .found-team-desc {
      margin-right: 48px;
      p {
        margin: 0;
        width: 300px;
      }
    }
    .each-member {
      flex: none;
      width: 300px;
      .member-image {
        height: 280px;
        width: calc(100% - 60px);
        background-color: ${COLOR.BLACK};
        margin-bottom: 24px;
      }
      .what-they-do {
        li {
          margin: 2px 0 16px 0;
        }
      }
    }
  }
  .row-3 {
    padding-top: 56px;
    border-top: 1px solid ${COLOR.GREEN_2};
    .investors-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        &:nth-child(1),
        &:nth-child(3) {
          width: 240px;
        }
        &:nth-child(2) {
          max-width: 640px;
        }
      }
    }
  }
`;

export const SectionEleven = styled.div`
  background-image: url("/images/footer/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  .ant-row {
    display: flex;
    .ant-col {
      &.column-1 {
        margin-top: 40px;
        margin-bottom: 40px;
        .footer-header {
          margin-bottom: 56px;
          max-width: 500px;
          font-family: "triakis__font_lightregular";
          font-size: 112px;
          line-height: normal;
        }
        .be-part-and-contribute {
          display: flex;
          margin-top: 56px;
          .be-part {
            flex: 1;
          }
          .contribute {
            flex: 1;
          }
          .text {
            margin-bottom: 12px;
          }
        }
      }
      &.column-2 {
        padding: 64px;
      }
      .footer-anchors {
        display: flex;
        justify-content: space-between;
        &.footer-anchor-2 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          img {
            width: 112px;
          }
        }
      }
      .ant-anchor-ink {
        display: none;
      }
      .ant-anchor-link {
        padding: 8px 0 8px 0px;
      }
      .ant-anchor-link-title {
        text-transform: uppercase;
        &:hover {
          color: inherit !important;
          text-decoration: underline;
        }
      }
      .ant-anchor-link-active > .ant-anchor-link-title {
        color: inherit;
      }
      .copyright {
        margin-left: 2px;
        margin-top: 24px;
        font-family: "triakis__fontmedium";
        text-transform: uppercase;
        font-size: 18px;
      }
    }
  }
`;
