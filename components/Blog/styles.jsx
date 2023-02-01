import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';

export const BlogContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 80vh;
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const SiderCard = styled.div`
  width: 340px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid ${COLOR.PURPLE};
  &.card-sticky {
    position: sticky;
    top: 20px;
  }
  .sub-title {
    font-family: neuemachina__light;
    font-size: 19px;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
  .desc {
    font-size: 16px;
    margin-bottom: 1rem;
  }
  .or-text {
    margin: 0.5rem 0;
    text-align: center;
  }
  .btn {
    width: 100%;
    padding: 0.5rem 1rem !important;
    font-size: 16px;
    margin-top: 0 !important;
    &.join-discord-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 0.5rem;
        transition-duration: 0.3s;
      }
      &:hover {
        svg path {
          fill: ${COLOR.PURPLE};
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileM} {
    &.card-sticky {
      position: relative;
      top: 0px;
    }
  }

  ${MEDIA_QUERY.mobileS} {
    width: auto;
  }
`;

export const EachBlogContainer = styled.div`
  .each-content-details {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    &-1 {
    }
    &-2 {
      margin-top: 2rem;
      margin-left: 2rem;
    }
  }
  .each-content-sider {
  }

  ${MEDIA_QUERY.tablet} {
    .each-content-details {
      flex-direction: column;
      &-2 {
        margin-top: 2rem;
        margin-left: 0rem;
      }
    }
  }
`;
