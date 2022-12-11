import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionTwo = styled.div`
  mix-blend-mode: multiply;
  .description {
    margin-bottom: 1rem;
  }

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
      .sub-text {
        /* min-height: 200px !important; */
      }
    }

    /* content-images */
    &.column .img-container img {
      width: 55%;
    }
    &.column-4 .img-container img {
      width: 60%;
    }
  }

  ${MEDIA_QUERY.laptop} {
    .column {
      .header-text {
        margin-top: 1rem;
        font-size: 28px;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    display: flex;
    flex-direction: column;
    .column {
      width: 100%;
      max-width: 100% !important;
      margin-bottom: 2rem;
      text-align: center;
      .img-container {
        height: 120px;
        /* text-align: left; */
        img {
          height: 100%;
          width: 120px !important;
        }
      }
      .text-content {
        /* text-align: left; */
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
