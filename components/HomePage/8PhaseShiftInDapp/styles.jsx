import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionEight = styled.div`
  background-image: url("/images/dapp/background.jpg");
  .header {
    max-width: 1000px;
  }
  .ant-row {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      max-width: 442px;
      img {
        padding: 48px 16px;
      }
      > div {
        margin-bottom: 24px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    background-image: url("/images/dapp/background-mobile.jpg");
  }
`;

export const RowThree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 16px;
  .column {
    .btn {
      margin-top: 16px;
    }
  }

  ${MEDIA_QUERY.tablet} {
    flex-direction: column;
    margin-top: 32px;
    .column {
      width: 100%;
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
`;
