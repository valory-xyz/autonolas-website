import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';

export const SectionTwo = styled.div`
  ${backgroundImage('/images/2WhatIsAutonolas/background.png')};
  mix-blend-mode: multiply;

  ${MEDIA_QUERY.tablet} {
    background-size: contain !important;
    background-position: -1rem 2rem;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  .column {
    max-width: 260px;
    .img-container {
      min-height: 190px;
      text-align: center;
    }
    .header-text {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 34px;
      font-family: "manrope__bold", sans-serif;
      min-height: 92px;
      text-align: center;
    }
    .sub-text {
      font-size: 22px;
      text-align: center;
    }
    /* content-images */
    &.column-1 {
      .img-container img {
        width: 68%;
      }
    }
    &.column-2 {
      max-width: 340px;
      .img-container img {
        width: 64%;
      }
    }
    &.column-3 {
      .img-container img {
        width: 64%;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .column {
      text-align: center;
    }
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    flex-direction: column;
    .column {
      display: flex;
      width: 100%;
      max-width: 100% !important;
      align-items: flex-start;
      margin-bottom: 2rem;
      text-align: center;
      .img-container {
        width: 50%;
        min-height: auto;
        text-align: left;
      }
      .text-content {
        width: 50%;
        text-align: left;
      }
      .header-text {
        // margin-top: 1rem;
        font-size: 20px;
        min-height: auto;
        text-align: left;
      }
      .sub-text {
        text-align: left;
        font-size: 18px;
      }
      .action-btn {
        text-align: center;
      }
      /* content-images */
      &.column-1 {
        .img-container img {
          width: 72%;
        }
      }
      &.column-2 {
        .img-container img {
          width: 82%;
        }
      }
      &.column-3 {
        .img-container img {
          width: 74%;
        }
      }
    }
  }
`;
