import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionThree = styled.div`
  background-image: url("/images/what-is-autonolas/background.jpg");
  .header {
    max-width: 420px;
  }

  ${MEDIA_QUERY.tablet} {
    background-image: url("/images/what-is-autonolas/background-mobile.jpg");
  }
`;

export const Content = styled.div`
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

  ${MEDIA_QUERY.laptop} {
    .text {
      width: 260px;
    }
  }

  ${MEDIA_QUERY.tablet} {
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
`;
