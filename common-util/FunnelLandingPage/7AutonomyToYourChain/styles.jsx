import styled, { css } from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { shortLineCss } from '../styles';

const backgroundGradientCss = (reverse = false, from) => css`
  background: linear-gradient(
    ${reverse ? '180deg' : '0deg'},
    rgba(224, 250, 239, 0) ${from || 0}%,
    #e0e1ff 100%
  );
`;

export const AutonomyToYourChainContainer = styled.div`
  > .section {
    padding: 4rem 4.5rem;
  }
  ${MEDIA_QUERY.tablet} {
    > .section {
      padding: 3rem 2rem;
    }
    .ant-col {
      padding: 0 !important;
    }
    .ant-divider {
      margin-top: 0 !important;
    }
  }
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BenefitsContainer = styled.div`
  ${backgroundGradientCss(true)}
  .each-benefit {
    max-width: 300px;
    .img-container {
      max-width: 160px;
      padding: 1rem 0 2rem 0;
      max-height: 240px;
      margin-bottom: 1rem;
    }
    .desc {
      margin-top: 1rem;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .each-benefit {
      .img-container {
        /* width: 120px; */
      }
    }
  }
`;

export const WhatItInvolves = styled.div`
  /* TODO */
  /* .mini-border-top {
    position: relative;
    border-top: 1px solid ${COLOR.BLACK};
    &:after {
      ${shortLineCss}
      right: 16px;
    }
  } */
  .each-what-it-involves {
    .img-container {
      position: relative;
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem auto;
      img {
        width: 100%;
      }
    }
    .details-row {
      display: flex;
      align-items: flex-start;
      padding-top: 1rem;
      .header-text {
        color: ${COLOR.PURPLE};
        font-size: 70px;
        width: 80px;
        line-height: 1;
      }
      .description {
        width: 85%;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    .each-what-it-involves {
      display: flex;
      align-items: center;
      .img-container {
        width: 45% !important;
        margin-right: 2rem;
        + div {
          width: 50%;
        }
      }
      &:not(:last-child) {
        .img-container {
          &::after {
            content: "";
            display: none;
          }
        }
      }
    }
  }
`;

export const ExistingContainer = styled.div`
  ${backgroundGradientCss(false, 70)}
  .header {
    max-width: 1100px;
  }
  .each-existing-service {
    margin-top: 1rem;
    margin-bottom: 3rem;
    .img-container {
      height: 164px;
      margin: 0 auto 2rem auto;
      padding-bottom: 1rem;
      border-bottom: 1px solid ${COLOR.BLACK};
      img {
        height: 100%;
      }
    }
    .details-row {
      max-width: 500px;
      .header-text {
        color: ${COLOR.PURPLE};
        font-size: 26px;
        font-family: "manrope__bold";
        margin-bottom: 0.25rem;
      }
    }
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const BringPowerContainer = styled.div`
  ${backgroundGradientCss()}
`;
