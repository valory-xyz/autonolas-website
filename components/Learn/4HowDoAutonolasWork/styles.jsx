import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { COLOR, MEDIA_QUERY } from 'util/theme';

const IMG_URL = '/images/4HowDoAutonolasWork/how-autonomous-services-work.png';

export const SectionFour = styled.div`
  position: relative;
  .header {
  }

  ${MEDIA_QUERY.tablet} {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  .column {
  }
  .column-1 {
    flex: 1;
    width: 100%;
    ${backgroundImage(IMG_URL)}
  }
  .column-2 {
    width: 27.5%;
    padding-top: 8rem;
    .content {
      display: flex;
      padding: 0.75rem 0 1rem 0;
      border-left: 1px solid ${COLOR.BLACK};
      &:not(:last-child) {
        border-bottom: 1px solid ${COLOR.BLACK};
      }
      .sr-no {
        font-family: neuemachina__light;
        padding: 0.5rem 2rem 0 1.5rem;
        font-size: 22px;
        font-weight: bold;
      }
      .text {
        padding-right: 2rem;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .column-2 {
      padding-top: 2rem;
      .content {
        .text {
          padding-right: 0rem;
        }
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    flex-direction: column;
    .column-1 {
      min-height: 500px;
    }
    .column-2 {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .content {
        width: 50%;
        border-left: none;
        /* to keep the order as per the design */
        &:nth-child(1) {
          order: 1;
        }
        &:nth-child(2) {
          order: 3;
        }
        &:nth-child(3) {
          order: 5;
        }
        &:nth-child(4) {
          order: 7;
        }
        &:nth-child(5) {
          order: 2;
        }
        &:nth-child(6) {
          order: 4;
        }
        &:nth-child(7) {
          order: 6;
          border-bottom: 1px solid ${COLOR.BLACK};
        }
        .text {
          padding-right: 1rem;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    flex-direction: column;
    .column-1 {
      min-height: 300px;
    }
    .column-2 {
      padding-top: 0;
      width: 100%;
      .content {
        order: 1 !important;
        width: 100%;
        border-left: none;
        .sr-no {
          padding-top: 0rem;
        }
      }
    }
  }
`;
