export const COLOR = {
  GREEN_1: '#00FC82',
  GREEN_2: '#00F422',
  GREY_1: '#C4C4C4',
  GREY_2: '#F0F0F0',
  WHITE: '#FFFFFF',
  BLACK: '#000000',

  PURPLE: '#7200D6',
  LIGHT_BLUE: '#E9FDFF',
};

export const BOX_SHADOW = '0px 4px 4px rgba(0, 0, 0, 0.25)';

export const BORDER_RADIUS = '5px';
export const BORDER = `1px solid ${COLOR.GREY_2}`;

export const ROW_GUTTER = 48;

export const FONT_SIZE = {
  12: '12px',
  30: '30px',
  28: '28px',
  26: '26px',
  24: '24px',
  22: '22px',
  20: '20px',
  18: '18px',
  16: '16px',
  14: '14px',

  // TODO
};

export const BREAK_POINT = {
  xxs: '375px',
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const TRANSITION = {
  all: 'all 0.3s',
};

export const SIZES = {
  bannerHeight: '60px',
  navigationBarHeight: '84px',
  maxWidth: '1100px',
};

export const MEDIA_QUERY = {
  mobileS: `@media only screen and (max-width: ${BREAK_POINT.xxs})`,
  mobileM: `@media only screen and (max-width: ${BREAK_POINT.xs})`,
  mobileL: `@media only screen and (max-width: ${BREAK_POINT.sm})`,
  tablet: `@media only screen and (max-width: ${BREAK_POINT.md})`,
  tabletL: `@media only screen and (max-width: ${BREAK_POINT.lg})`,
  laptop: `@media only screen and (max-width: ${BREAK_POINT.xl})`,
  desktop: `@media only screen and (max-width: ${BREAK_POINT.xxl})`,
};
