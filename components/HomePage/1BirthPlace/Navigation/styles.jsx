import styled from 'styled-components';
import { COLOR, BREAK_POINT } from 'util/theme';

export const Container = styled.header`
  /* position: sticky; */
  /* top: 0; */
  /* width: calc(100% + 60px); */
  position: absolute;
  top: 64px;
  width: calc(100% - 32px);
  max-width: 1500px;
  &.hide-navbar {
    display: none;
  }
  .navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    /* position: fixed; */
    /* width: 100%; */
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
          width: 48px;
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

  @media only screen and (max-width: ${BREAK_POINT.md}) {
    position: fixed;
    width: 100%;
    max-width: 100%;
    top: 58px;
    .navbar {
      padding: 0;
      padding-bottom: 32px;
      height: calc(100vh - 56px);
      background-image: url("/images/birth-place/background.jpg");
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
        .mobile-nav-item-logo {
          position: absolute;
          right: 16px;
          top: 16px;
          img {
            width: 72px;
          }
        }
      }
    }
  }
`;

export const Div = null;
