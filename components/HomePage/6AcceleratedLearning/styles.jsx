import styled from 'styled-components';
import { BREAK_POINT, COLOR } from 'util/theme';

export const SectionSix = styled.div`
  background-image: url("/images/accelerated-learning/background.jpg");
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
        max-width: 274px;
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

export const EG = styled.div``;
