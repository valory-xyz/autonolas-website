import styled, { css } from 'styled-components';
import { COLOR } from 'util/theme';

export const AssetManagementContainer = styled.div``;

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

export const BenefitsContainer = styled.div`
  ${backgroundGradientCss}
  .each-benefit {
    border-top: 1px solid ${COLOR.BLACK};
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

// export const AssetManagementContainer = styled.div``;
