import styled from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';

export const SectionFour = styled.div`
  position: relative;
  background-image: url("/images/what-are-we-building/background.jpg");
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
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
  }
  &.border-boxes .row .column {
    border-color: ${COLOR.WHITE};
  }

  ${MEDIA_QUERY.tablet} {
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
    &.border-boxes .row .column {
      &:nth-child(2) {
        border-color: transparent ${COLOR.WHITE};
      }
    }
    .btn {
      margin-bottom: 32px;
    }
  }
`;

export const EG = styled.div``;
