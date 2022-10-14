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
    .img-container {
      width: 160px;
      padding: 2rem 0;
      img {
        width: 100%;
        height: 100%;
      }
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

export const HowItWorksContainer = styled.div``;

export const HowToBuildOneContainer = styled.div``;

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
