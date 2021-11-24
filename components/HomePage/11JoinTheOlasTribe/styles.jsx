import styled from 'styled-components';
import { COLOR, BREAK_POINT } from 'util/theme';

export const SectionEleven = styled.div`
  background-image: url("/images/footer/background.jpg");
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  .ant-row {
    display: flex;
    .ant-col {
      &.column-1 {
        margin-top: 40px;
        margin-bottom: 40px;
        .footer-header {
          margin-bottom: 64px;
          max-width: 550px;
          font-family: "triakis__font_lightregular";
          font-size: 128px;
          line-height: normal;
        }
        .be-part-and-contribute {
          display: flex;
          margin-top: 70px;
          .be-part {
            flex: 1;
          }
          .contribute {
            flex: 1;
          }
          .text {
            margin-bottom: 12px;
          }
        }
      }
      &.column-2 {
        padding: 64px 0px 24px 64px;
        border-left: 1px solid ${COLOR.BLACK};
      }
      .footer-anchors {
        display: flex;
        justify-content: space-between;
        height: 100%;
        .footer-anchor-1 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .footer-anchor-2 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          img {
            width: 112px;
          }
        }
      }
      .ant-anchor-ink {
        display: none;
      }
      .ant-anchor-link {
        padding: 12px 0 8px 0;
      }
      .ant-anchor-link-title {
        text-transform: uppercase;
        font-size: 18px;
        &:hover {
          color: inherit !important;
          text-decoration: underline;
        }
      }
      .ant-anchor-link-active > .ant-anchor-link-title {
        color: inherit;
      }
      .copyright {
        margin-left: 2px;
        margin-top: 24px;
        font-family: "triakis__fontmedium";
        text-transform: uppercase;
        font-size: 18px;
      }
    }
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/footer/background-mobile.jpg");
    .ant-row .ant-col {
      &.column-1 {
        .footer-header {
          display: none;
        }
        .be-part-and-contribute {
          margin-top: 0;
          .socials a img {
            width: 40px;
            height: 40px;
          }
        }
        .btn {
          display: none;
        }
      }
      &.column-2 {
        padding: 32px 0px 42px 0px;
        border-top: 1px solid ${COLOR.BLACK};
        border-left-color: transparent;
        .footer-anchors {
          flex-direction: column;
          .footer-anchor-2 {
            margin-top: 16px;
          }
        }
        .ant-anchor-link {
          padding: 12px 0 12px 0;
        }
        .copyright {
        }
      }
    }
  }
`;

export const EG = styled.div``;
