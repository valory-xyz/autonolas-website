import styled from 'styled-components';
import { COLOR, BREAK_POINT, TRANSITION } from 'util/theme';

export const MobileNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-logo {
    img {
      width: 90px;
    }
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  right: 32px;
  top: 26px;
  display: flex;
  flex-direction: column;
  span {
    width: 60px;
    height: 8px;
    background-color: ${COLOR.BLACK};
    display: inline-block;
    transition: ${TRANSITION.all};
    border-radius: 4px;
    &:nth-child(1) {
      margin-bottom: 8px;
    }
  }
`;

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: ${TRANSITION.all};
  .navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px 1.5rem;
  }
  .nav-menu {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-item {
      .nav-link {
        font-size: 14px;
        color: ${COLOR.BLACK};
        text-transform: uppercase;
        &:hover {
          color: ${COLOR.BLACK};
          text-decoration: underline;
        }
      }
      &.nav-item-logo {
        min-width: 140px;
        display: flex;
        justify-content: center;
        img {
          width: 104px;
        }
      }
    }
  }
  /* common */
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .is-open-for-mobile {
    ${Hamburger} {
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate(10px, 12px);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media only screen and (max-width: ${BREAK_POINT.md}) {
    z-index: 2;
    .navbar {
      &.is-open-for-mobile {
        background-image: url("/images/birth-place/background.jpg");
        height: calc(100vh - ${({ navHeight }) => `${navHeight}px`});
      }
      &.mobile {
        flex-direction: column;
        .nav-menu {
          position: relative;
          left: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          max-height: 500px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          transition: 0.3s;
          .nav-item {
            margin: 2.5rem 0;
            line-height: normal;
            margin: 0 16px;
            .nav-link {
              font-size: 24px;
              text-transform: none;
            }
          }
        }
        .socials {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px;
          border-top: 1px solid ${COLOR.BLACK};
          a {
            margin: 0 !important;
            img {
              width: 42px;
              height: 42px;
            }
          }
        }
      }
    }
  }
`;
