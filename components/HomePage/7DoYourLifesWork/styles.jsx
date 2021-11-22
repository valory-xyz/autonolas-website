import styled from 'styled-components';
import { COLOR, BREAK_POINT } from 'util/theme';

export const SectionSeven = styled.div`
  background-image: url("/images/do-your-lifes-work/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    margin-bottom: 12px !important;
  }
  .section-7-desc {
    font-size: 26px;
    width: 482px;
    margin-bottom: 32px;
    line-height: normal;
  }
  img {
    width: 100%;
  }
  .btn {
    margin: 60px auto;
  }
  .row-1 {
    display: flex;
    margin-top: -15px;
    .column {
      flex: 1;
      padding: 100px 0;
      .content {
        max-width: 320px;
        margin: 0 auto;
        text-align: center;
        line-height: normal;
      }
      &.column-2 {
        border-left: 1px solid ${COLOR.GREEN_2};
        border-right: 1px solid ${COLOR.GREEN_2};
      }
    }
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
        line-height: normal;
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
          width: 360px;
          line-height: normal;
          float: right;
          p {
            margin: 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    .section-7-desc {
      width: auto;
      margin-bottom: 16px;
      font-size: 16px;
      line-height: normal;
    }
    img {
      display: none;
    }
    .btn {
      margin: 16px auto;
    }
    .row-1 {
      padding: 24px 0 0 0;
      flex-direction: column;
      .column {
        padding: 32px 0;
        border-top: 1px solid ${COLOR.GREEN_1};
        .content {
          text-align: left;
          margin: 0;
        }
        &.column-2 {
          border-left-color: transparent;
          border-right-color: transparent;
        }
      }
    }
    .row-2 {
      align-items: flex-start;
      flex-direction: column;
      padding-top: 20px;
      border-color: transparent;
      .column {
        &.column-2 {
          width: 100%;
          order: 2;
        }
        &.column-3 {
          margin: 30px 0 16px 0;
          text-align: left;
        }
      }
    }
  }
`;

export const ABC = styled.div``;
