import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionScaleYourDao = styled.div`
  ${MEDIA_QUERY.mobileL} {
    .header {
      margin-bottom: 2rem !important;
    }
  }
`;

export const Content = styled.div`
  .column {
    .img-container {
      text-align: center;
    }
    .text-content {
      text-align: center;
      .header-text {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 26px;
        font-family: "manrope__bold", sans-serif;
        min-height: 76px;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .column {
      .header-text {
        font-size: 28px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    .column {
      margin-bottom: 2rem;
      .text-content {
        .header-text {
          font-size: 20px;
          margin-top: 1rem;
          min-height: auto;
        }
        .sub-text {
          font-size: 18px;
          min-height: auto !important;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .column {
      margin-bottom: 2rem;
      .img-container {
        img {
          height: 100%;
          width: 120px !important;
        }
      }
      .text-content {
        .header-text {
          font-size: 20px;
          margin-top: 1rem;
          min-height: auto;
        }
        .sub-text {
          font-size: 18px;
          min-height: auto !important;
        }
      }
    }
  }
`;
