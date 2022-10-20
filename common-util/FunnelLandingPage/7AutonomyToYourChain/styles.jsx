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

  ${MEDIA_QUERY.mobileL} {
    .each-benefit {
      display: flex;
      margin-bottom: 2rem;
      max-width: 100%;
      .img-container {
        width: 120px;
        max-height: 140px;
        padding: 0;
        margin-right: 1rem;
        + div {
          width: 60%;
        }
      }
    }
  }
`;

export const WhatItInvolves = styled.div`
  .each-what-it-involves {
    .img-container {
      position: relative;
      width: 240px;
      height: 240px;
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
      padding: 2rem 3rem;
      position: relative;
      border-top: 1px solid ${COLOR.BLACK};
      &:after {
        ${shortLineCss}
        right: 0px;
      }
      .header-text {
        color: ${COLOR.PURPLE};
        font-size: 70px;
        width: 80px;
        line-height: 1;
      }
      .description {
        width: 85%;
        text-align: center;
      }
    }
    &:last-child {
      .details-row:after {
        display: none;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .each-what-it-involves {
      .img-container {
        width: 180px;
        height: 180px;
      }
      .details-row {
        padding: 2rem;
      }
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .each-what-it-involves {
      .img-container {
        width: 120px !important;
        height: 120px !important;
      }
      .details-row {
        padding: 1rem;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .each-what-it-involves {
      display: flex;
      .details-row {
        border-top: none;
        width: 80%;
        .header-text {
          font-size: 40px;
          width: 60px;
        }
        .description {
          text-align: left;
        }
        &::after {
          display: none;
        }
      }
      .img-container {
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
      position: relative;
      height: 164px;
      margin: 0 auto 2rem auto;
      padding-bottom: 1rem;
      border-bottom: 1px solid ${COLOR.BLACK};
      text-align: center;
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
    /* even */
    &:nth-child(2n + 2) {
      .img-container {
        &:after {
          ${shortLineCss}
          top: auto;
          bottom: 0;
          left: -1rem;
        }
      }
      .details-row {
        padding-left: 3rem;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .each-existing-service {
      .img-container {
        height: 108px;
      }
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .each-existing-service {
      &:first-child > .img-container img {
        height: 70%;
        margin-bottom: -5rem;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .each-existing-service {
      margin-bottom: 1rem;
      padding-bottom: 2rem !important;
      .img-container {
        border-bottom: none;
        margin-bottom: 0;
        &:after {
          display: none;
        }
      }
      .details-row {
        padding-left: 0 !important;
      }
      &:not(:last-child) {
        border-bottom: 1px solid ${COLOR.BLACK};
      }
    }
  }
`;

export const BringPowerContainer = styled.div`
  ${backgroundGradientCss()}
`;
