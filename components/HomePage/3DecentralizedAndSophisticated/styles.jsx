import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY, COLOR } from 'util/theme';

export const SectionThree = styled.div`
  .header {
    margin-top: 1rem;
  }
  .sub-content {
    max-width: 540px;
    margin-bottom: 3rem;
  }

  ${MEDIA_QUERY.tablet} {
  }
`;

export const Table = styled.div``;

export const AutonolasService = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  ${backgroundImage('/images/3Decentralized/tick.png')}
`;

export const PurbleBall = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${COLOR.PURPLE};
`;

export const No = styled.div`
  width: 36px;
  height: 36px;
  margin: 0 auto;
  ${backgroundImage('/images/3Decentralized/X.png')}
`;

export const ComparisonTable = styled.div`
  overflow-x: auto;
  table {
    width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    th,
    td {
      padding: 0.85rem 1rem;
      &:first-child {
        border-right-color: transparent;
      }
    }
    thead {
      tr th {
        border-top: 1px solid ${COLOR.BORDER_GREY};
        border-bottom: none;
        width: 21%;
        font-weight: normal;
        &:nth-child(1) {
          width: 20%;
        }
        &:nth-child(2) {
          font-weight: bold;
          width: 15%;
          color: ${COLOR.PURPLE};
        }
        &:nth-child(3) {
          border-left: 1px solid ${COLOR.BORDER_GREY};
          border-right: 1px solid ${COLOR.BORDER_GREY};
        }
        &:nth-child(4) {
          border-right: 1px solid ${COLOR.BORDER_GREY};
        }
      }
    }
    tbody {
      tr {
        &:not(:first-child) td {
          border-top: 1px solid ${COLOR.BORDER_GREY};
        }
        td {
          font-weight: bold;
          border-bottom: 1px solid ${COLOR.BORDER_GREY};
          text-align: center;
          img {
            width: 48px;
            height: 48px;
          }
          &:nth-child(2) {
            color: ${COLOR.PURPLE};
          }
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    margin: 0 -1rem;
    table {
      th,
      td {
        padding: 0.5rem 0.3rem;
        word-break: break-word;
        font-size: 12px;
      }
    }
  }
`;
