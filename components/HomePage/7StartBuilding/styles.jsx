import styled from 'styled-components';
import { Row } from 'antd/lib';
import { backgroundImage } from 'components/GlobalStyles';
import { MEDIA_QUERY, COLOR } from 'util/theme';
import { Content as C } from '../../Learn/2WhatIsAutonolas/styles';

export const SectionSeven = styled.div`
  ${backgroundImage('/images/7StartBuilding/background.webp')}

  ${MEDIA_QUERY.mobileL} {
    &.section {
      padding: 3rem 1rem;
    }
  }
`;

export const Container = styled(C)`
  position: relative;
  justify-content: center;
  padding-top: 2rem;
  .column {
    max-width: 340px;
    .img-container-custom {
      margin: 0 auto;
      height: 150px;
      img {
        width: 100%;
      }
    }
    .header-text {
      margin-top: 0rem;
      min-height: 45px;
    }
    .sub-text {
      min-height: 150px;
    }
    &.column-1 {
      margin-right: 12rem;
      max-width: 340px;
      .img-container-custom {
        width: 180px;
      }
    }
    &.column-2 {
      .img-container-custom {
        width: 140px;
      }
    }
    &.column-3 {
      max-width: 360px;
      .img-container-custom {
        width: 120px;
      }
    }
  }
  &::after {
    content: " ";
    position: absolute;
    top: -50px;
    left: 27.5%;
    width: 1px;
    height: 140%;
    background-color: ${COLOR.BLACK};
  }

  ${MEDIA_QUERY.laptop} {
    .column {
      &.column-1 {
        margin-right: 2rem;
      }
    }
    &::after {
      left: 30%;
    }
  }

  ${MEDIA_QUERY.tablet} {
    gap: 0 3rem;
    .column {
      .sub-text {
        min-height: 140px;
      }
      &.column-1 {
        max-width: auto;
        margin-right: 0rem;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .column {
      .img-container-custom {
        width: 140px !important;
        margin-top: 0.25rem;
        img {
          width: 70% !important;
        }
      }
      .text-content {
        width: 64%;
      }
      .header-text {
        min-height: auto;
      }
      .sub-text {
        min-height: auto;
        margin-bottom: 1rem;
      }
      .action-btn .btn {
        font-size: 16px;
      }
    }
    &::after {
      display: none;
    }
  }
`;

export const CommissionUs = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 3rem auto 2rem auto;
  p {
    margin-bottom: 0.5rem;
  }
  a {
    font-weight: bold;
    color: ${COLOR.PURPLE};
  }
`;

export const HeadersRow = styled(Row)`
  margin-top: 2rem;
  .ant-col {
    border-top: 1px solid ${COLOR.BLACK};
    border-bottom: 1px solid ${COLOR.BLACK};
    h3 {
      font-size: 24px;
      margin: 0.5rem 0;
    }
  }
`;
