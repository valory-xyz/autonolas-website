import styled, { createGlobalStyle } from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';
import { containImage, backgroundGradient } from 'components/GlobalStyles';

export const widths = {
  maxSectionWidth: '1500px',
  mobileSectionPadding: '20px 10px',
};

export const LayoutGlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow: ${({ isNavigationOpen }) => (isNavigationOpen ? 'hidden' : 'auto')};
  }
`;

export default LayoutGlobalStyle;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  .section {
    padding: 2.5rem 4.5rem;
    background-size: 100% 100%;
    .header {
      margin-bottom: 50px;
    }
  }
  /* section for individual page */
  .content-list-section {
    display: flex;
    justify-content: center;
    min-height: 400px;
    height: 100vh;
    padding: 7rem 4.5rem;
    background-size: cover;
    align-items: center;
    ${MEDIA_QUERY.tablet} {
      padding: 0;
    }
  }

  .each-content {
    &-header-image {
      ${containImage}
      min-height: 500px;
    }
    .header {
    }
    &-body {
      padding: 4rem 8rem;
      margin-top: 3rem;
      ${backgroundGradient};
    }
    &-details {
      max-width: 740px;
      .subtitle {
        font-size: 22px;
        margin-top: 2rem;
        font-family: neuemachina__light;
        font-size: 30px;
        text-transform: uppercase;
      }
      .date-published {
        color: ${COLOR.PURPLE};
        margin-top: 2rem;
        margin-bottom: 4rem;
      }
      .btn {
        margin-top: 2rem;
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }
    ${MEDIA_QUERY.tablet} {
      &-header-image {
        min-height: 200px;
      }
      &-body {
        margin-top: 1rem;
        padding: 1rem 2rem;
      }
    }
  }

  /* common */
  .btn-center {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .bold {
    font-weight: bold;
  }
  .full-width {
    width: 100%;
  }
  .socials {
    display: flex;
    a {
      margin-right: 24px;
      img {
        width: 24px;
        height: 24px;
      }
      &.twitter {
        margin-top: 2px;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
  }

  ${MEDIA_QUERY.tablet} {
    .section {
      padding: ${widths.mobileSectionPadding};
      .header {
        margin-bottom: 20px;
      }
    }
  }
`;
