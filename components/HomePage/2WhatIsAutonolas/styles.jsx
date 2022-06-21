import styled from 'styled-components';
import { backgroundGradient } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';

export const SectionTwo = styled.div`
  ${backgroundGradient('/images/2WhatIsAutonolas/background.png')}
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  .column {
    max-width: 340px;
    .img-container {
      min-height: 180px;
      img {
        margin-left: 1rem;
      }
    }
    .header-text {
      margin-top: 4rem;
      margin-bottom: 1rem;
      font-size: 34px;
      font-family: "manrope__bold", sans-serif;
      min-height: 92px;
    }
    .sub-text {
      font-size: 22px;
    }
    /* content-images */
    &.column-1 {
      .img-container img {
        width: 54%;
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
        width: 54%;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
