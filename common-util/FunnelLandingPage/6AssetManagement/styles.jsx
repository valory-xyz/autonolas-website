import styled, { css } from 'styled-components';
import { COLOR } from 'util/theme';

export const AssetManagementContainer = styled.div``;

export const dividerCss = {
  backgroundColor: COLOR.BLACK,
  marginTop: '2rem',
  marginBottom: '0rem',
};

const shortLineCss = css`
  content: " ";
  position: absolute;
  height: 50px;
  width: 1px;
  background: ${COLOR.BLACK};
  top: 0;
`;

const backgroundGradientCss = css`
  background: linear-gradient(
    180deg,
    rgba(224, 250, 239, 0) 33.33%,
    #e0faef 90.31%
  );
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BenefitsContainer = styled.div`
  ${backgroundGradientCss}
  .each-benefit {
    border-top: 1px solid ${COLOR.BLACK};
    .img-container {
      width: 160px;
      padding: 2rem 0;
    }
    &:nth-child(2) {
      &:before {
        ${shortLineCss}
        left: -16px;
      }
      &:after {
        ${shortLineCss}
        right: 16px;
      }
    }
    &:nth-child(3) {
      &:after {
        ${shortLineCss}
        right: 16px;
      }
    }
  }
`;

export const HowItWorksAndBuildOneSection = styled.div`
  ${backgroundGradientCss}
`;

export const HowItWorksContainer = styled.div`
  .each-how-it-works {
    text-align: center;
    .img-container {
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem auto;
      img {
        width: 100%;
      }
    }
    &:nth-child(2) {
      .description {
        width: 320px;
        margin: 0 auto;
      }
    }
  }
`;

export const HowToBuildOneContainer = styled.div`
  .each-how-to-build {
    .img-container {
      position: relative;
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      img {
        width: 100%;
      }
    }
    &:not(:last-child) {
      .img-container {
        &::after {
          content: "→";
          position: absolute;
          left: 67.5%;
          font-size: 80px;
          transform: translate(100%, 0%);
          font-family: manrope__extralight;
        }
      }
    }
    .header-text {
      color: ${COLOR.PURPLE};
      font-size: 70px;
    }
    .description {
      width: 85%;
    }
  }
`;

export const Features = styled.div`
  .each-feature {
    flex-basis: 20%;
    width: 20%;
    .img-container {
      width: 120px;
      padding: 2rem 0;
    }
  }
`;
