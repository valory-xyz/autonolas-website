import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionSix = styled.div`
  padding-bottom: 0;
  .header {
    margin-left: -2rem;
    margin-right: -2rem;
  }
  .divider {
    padding-top: 3rem;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  .column {
    max-width: 340px;
    .img-container {
      height: 180px;
      width: 180px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .header-text {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size: 34px;
      font-family: "manrope__bold", sans-serif;
      text-align: center;
      min-height: 92px;
    }
    .sub-text {
      font-size: 22px;
      text-align: center;
    }
    /* content-images */
    &.column-1 {
      .img-container img {
      }
    }
    &.column-2 {
      .img-container img {
      }
    }
    &.column-3 {
      .img-container img {
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    flex-direction: column;
    .column {
      max-width: 280px;
      .header-text {
        margin-top: 1rem;
        font-size: 20px;
        min-height: auto;
      }
      .sub-text {
        font-size: 18px;
      }
    }
  }
`;
