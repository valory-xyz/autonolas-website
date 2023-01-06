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
      height: 190px;
      text-align: center;
    }
    .text-content {
      text-align: center;
      .header-text {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 26px;
        font-family: "manrope__bold", sans-serif;
        min-height: 76px;
      }
    }

    /* content-images */
    .img-container img {
      width: 190px;
    }
    &.column-4 .img-container img {
      width: 60%;
    }
  }

  ${MEDIA_QUERY.laptop} {
    .column {
      .img-container {
        height: 140px;
        img {
          width: 150px;
        }
      }
      .header-text {
        font-size: 28px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    .column {
      margin-bottom: 2rem;
      .img-container {
        height: 120px;
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

  ${MEDIA_QUERY.mobileL} {
    .column {
      margin-bottom: 2rem;
      .img-container {
        height: 120px;
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
