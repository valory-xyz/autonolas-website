import styled from 'styled-components';
import { BREAK_POINT } from 'util/theme';

export const SectionThree = styled.div`
  background-image: url("/images/what-is-autonolas/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 420px;
  }
  .content {
    position: relative;
    img {
      width: 100%;
    }
    .text {
      position: absolute;
      width: 320px;
    }
    .text-1 {
      top: 52%;
      left: 0;
      text-align: left;
    }
    .text-2 {
      top: 0%;
      right: 0;
      text-align: right;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    background-image: url("/images/what-is-autonolas/background-mobile.jpg");
    .header {
    }
    .content {
      display: flex;
      flex-direction: column;
      img {
        order: 2;
        width: 77.5%;
        margin: 32px auto;
      }
      .text {
        position: relative;
        font-size: 14px;
      }
      .text-1 {
        order: 1;
        max-width: 280px;
      }
      .text-2 {
        order: 3;
        align-self: flex-end;
        max-width: 240px;
      }
    }
  }
`;

export const EG = styled.div``;
