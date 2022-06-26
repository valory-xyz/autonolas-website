import styled from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';

export const FooterContainer = styled.div`
  .header {
    margin-bottom: 1rem !important;
    margin-top: 4rem;
    padding-left: 5rem;
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const FooterTop = styled.div`
  .row-socials {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 3rem 5rem;
    border-top: 1px solid ${COLOR.BLACK};
  }
  ${MEDIA_QUERY.tablet} {
  }
`;

export const SocialConnect = styled.div`
  width: 50%;
  padding-top: 2rem;
  text-align: center;
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
        &:nth-child(1) {
          width: 200px;
          min-width: 200px;
          max-width: 200px;
          img {
            width: 92px;
          }
          &.copyright {
            vertical-align: bottom;
            span {
              display: block;
              font-weight: bold;
            }
          }
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
    }
  }
  .ant-anchor {
    &-link {
      padding-left: 0;
    }
    &-ink {
      &:before {
        display: none;
      }
    }
    &-link-title {
      color: ${COLOR.BLACK};
      font-size: 22px;
      &:hover {
        color: ${COLOR.PURPLE} !important;
      }
    }
  }
  ${MEDIA_QUERY.tablet} {
  }
`;
