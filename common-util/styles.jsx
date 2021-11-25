import styled from 'styled-components';
import { COLOR, BREAK_POINT } from 'util/theme';

export const BorderBoxes = styled.div`
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
  @media only screen and (max-width: ${BREAK_POINT.md}) {
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
`;

export const A = styled.div``;
