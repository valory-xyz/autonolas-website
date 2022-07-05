import styled from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';


export const FooterContainer = styled.div`
  .header {
    margin-bottom: 1rem !important;
    margin-top: 4rem;
  }
  ${MEDIA_QUERY.tablet} {
    .header {
      padding-left: 0rem;
      margin-top: 1rem;
    }
  }
`;

export const FooterTop = styled.div`
  .row-socials {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 3rem 5rem 5rem 5rem;
    border-top: 1px solid ${COLOR.BLACK};
  }
  ${MEDIA_QUERY.tablet} {
    .row-socials {
      flex-direction: column;
      align-items: center;
      margin: 0;
      border-top: none;
    }
  }
`;

export const SocialConnect = styled.div`
  width: 50%;
  padding-top: 2rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  .logo svg {
    width: 108px;
    height: 108px;
  }
  .text {
    padding-top: 1rem;
    font-size: 64px;
    font-weight: 600;
  }
  &.follow-us {
    border-right: 1px solid ${COLOR.BLACK};
  }

  ${MEDIA_QUERY.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid ${COLOR.BLACK};
    .logo svg {
      width: 80px;
      height: 80px;
    }
    .text {
      padding-top: 0rem;
      font-size: 44px;
    }
    &.follow-us {
      border-right: none;
    }
  }

  ${MEDIA_QUERY.mobileM} {
    .text {
      font-size: 34px;
    }
  }
`;

export const FooterBottom = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      td {
        padding: 2rem 0 2rem 3rem;
        border: 1px solid ${COLOR.BLACK};
        vertical-align: top;
        a {
          display: block;
          color: ${COLOR.BLACK};
          font-size: 22px;
          text-decoration: none;
          margin-bottom: 0.5rem;
          &:hover,
          &:active {
            color: ${COLOR.PURPLE} !important;
          }
        }
        &:nth-child(1) {
          width: 200px;
          min-width: 200px;
          max-width: 200px;
        }
        &:nth-child(2) {
          width: 30%;
        }
        &:nth-child(3) {
          width: 30%;
        }
        &:nth-child(4) {
          width: 22.5%;
        }
        .footer-title {
          color: ${COLOR.PURPLE};
          font-weight: bold;
          margin-bottom: 2rem;
        }
      }
      &:nth-child(1) {
        td:nth-child(1),
        td:nth-child(4) {
          border-bottom-color: transparent;
        }
      }
    }
  }
  img.footer-logo {
    width: 92px;
  }
  .copyright {
    vertical-align: bottom;
    span {
      display: block;
      font-weight: bold;
    }
  }
  .xs-footer {
    display: none;
  }

  ${MEDIA_QUERY.tablet} {
    table {
      tr {
        td {
          padding: 1rem 0 1rem 0.5rem;
          a {
            font-size: inherit;
          }
          &:nth-child(1) {
            display: none;
          }
        }
      }
    }
    .xs-footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 1rem 0;
    }
  }
`;
