import { css } from 'styled-components';
import { COLOR } from 'util/theme';

export const dividerCss = {
  backgroundColor: COLOR.BLACK,
  marginTop: '2rem',
  marginBottom: '0rem',
};

export const shortLineCss = css`
  content: " ";
  position: absolute;
  height: 50px;
  width: 1px;
  background: ${COLOR.BLACK};
  top: 0;
`;

export const backgroundGradientCss = css`
  background: linear-gradient(
    180deg,
    rgba(224, 250, 239, 0) 33.33%,
    #e0faef 90.31%
  );
`;
