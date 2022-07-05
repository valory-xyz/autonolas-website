import styled, { css } from 'styled-components';
import { COLOR, TRANSITION, MEDIA_QUERY } from 'util/theme';

const openCloseText = css`
  font-weight: bold;
  font-size: 22px;
`;

const mobileCloseMenuHeight = '96px';

export const DesktopNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .nav-item-logo {
    display: flex;
    justify-content: center;
    img {
      width: 104px;
    }
  }
  .btn {
    min-width: 212px;
    font-size: 14px;
  }

  ${MEDIA_QUERY.laptop} {
    .nav-item-logo {
      min-width: 180px;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .nav-item-logo {
      min-width: auto;
    }
  }
`;

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

export const MobileCloseMenu = styled.div`
  position: absolute;
  height: ${mobileCloseMenuHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  .close-menu {
    &-logo {
      height: 76px;
    }
    &-text {
      ${openCloseText}
    }
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  ${openCloseText}
`;

export const NavMenu = styled.ul`
  top: ${mobileCloseMenuHeight};
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav-item {
    .nav-link {
      color: ${COLOR.BLACK};
      text-transform: uppercase;
      &:hover {
        color: ${COLOR.BLACK};
        text-decoration: underline;
      }
    }
  }
`;

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: ${TRANSITION.all};
  .navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
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

  ${MEDIA_QUERY.tablet} {
    z-index: 2;
    .navbar {
      padding: 8px;
      &.is-open-for-mobile {
        flex-direction: column !important;
        background: ${COLOR.LIGHT_BLUE};
        height: 100vh;
      }
      &.mobile {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        ${NavMenu} {
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
              font-size: 72px;
              font-weight: bold;
              text-transform: capitalize;
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
          }
        }
        .btn {
          font-size: inherit;
          padding: 0.75rem 1rem;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileM} {
    .navbar {
      &.mobile {
        ${NavMenu} {
          max-height: 420px;
        }
        .nav-logo svg {
          width: 90px;
        }
        .btn {
          font-size: 13px;
        }
      }
    }
  }
`;
