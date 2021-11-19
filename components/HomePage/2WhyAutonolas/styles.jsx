import styled from 'styled-components';
import { BREAK_POINT } from 'util/theme';

export const SectionTwo = styled.div`
  background-image: url("/images/why-autonolas/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
  }
  .row {
    &.row-1 {
      display: flex;
      align-items: flex-start;
      .column {
        flex: 1;
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
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    .row {
      flex-wrap: wrap;
      .text {
        font-size: 14px;
      }
      &.row-1 {
        .column {
          &.column-1,
          &.column-2 {
            flex: 0 50%;
            .content {
              max-width: 100%;
            }
          }
          &.column-1 {
            .content {
              margin-right: 16px;
            }
          }
          &.column-2 {
            .content {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              margin-left: 16px;
              margin-top: 42px;
              .text {
                text-align: right;
              }
            }
          }
          &.column-3 {
            flex: 0 100%;
            margin: 32px 0;
            .content {
              display: flex;
              max-width: 100%;
              img {
                flex: 1;
                width: 150px;
                margin-right: 24px;
              }
              .text {
                flex: 1;
                margin: 0;
              }
            }
          }
        }
      }
      &.row-2 {
        display: inline-flex;
        flex-direction: row-reverse;
        .column-3 {
          display: none;
        }
      }
    }
  }
`;

export const ABC = styled.div``;
