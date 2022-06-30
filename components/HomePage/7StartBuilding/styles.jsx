import styled from 'styled-components';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';
import { Content as C } from '../2WhatIsAutonolas/styles';

export const SectionSeven = styled.div`
  ${backgroundImage('/images/7StartBuilding/background.webp')}
`;

export const Container = styled(C)`
  justify-content: center;
  padding-top: 2rem;
  .column {
    .img-container-custom {
      margin: 0 auto;
      height: 150px;
      img {
        width: 100%;
      }
    }
    .header-text {
      margin-top: 0rem;
      min-height: auto;
    }
    .sub-text {
      min-height: 200px;
    }
    &.column-1 {
      margin-right: 12rem;
      max-width: 340px;
      .img-container-custom {
        width: 140px;
      }
    }
    &.column-2 {
      max-width: 360px;
      .img-container-custom {
        width: 120px;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    .column {
      .img-container-custom {
        margin-top: 1rem;
        img {
          width: 80% !important;
        }
      }
      .text-content {
        width: 64%;
      }
      .sub-text {
        min-height: auto;
        margin-bottom: 2rem;
      }
      .action-btn .btn {
        font-size: 16px;
      }
    }
  }
`;

export const CommissionUs = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 3rem auto 0 auto;
  p {
    margin-bottom: 0.5rem;
  }
  a {
    font-weight: bold;
  }
`;
