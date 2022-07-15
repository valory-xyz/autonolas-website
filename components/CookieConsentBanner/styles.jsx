import styled from 'styled-components';
import { COLOR, MEDIA_QUERY, FONT_SIZE } from 'util/theme';

const Container = styled.div`
  .banner-container {
    background-color: ${COLOR.BLACK};
    bottom: 0;
    color:  ${COLOR.WHITE};
    padding: 1rem;
    position: fixed;
    flex
    a {
      color: white;
    }
  }
  .banner-content {
    margin-bottom: 1rem;
  }
  .banner-btn {
    outline: none;
    font-size: ${FONT_SIZE[18]};
    text-transform: uppercase;
    transition: all 0.3s;
    line-height: normal;
    padding: 0.75rem 2rem;
    clip-path: none;
    border-radius: 48px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    border: 1px solid ${COLOR.PURPLE};
    background-color: ${COLOR.PURPLE};
    color: ${COLOR.WHITE};
    &:hover, &:active {
      background-color: ${COLOR.GREEN_1};
      color: ${COLOR.BLACK};
      border : 1px solid ${COLOR.GREEN_1};
    }

    ${MEDIA_QUERY.laptop} {
      width: auto;
      padding-left: 48px;
      padding-right: 48px;
    }

    ${MEDIA_QUERY.mobileL} {
      width: 100%;
      font-size: 18px;
    }
  }
`;

export default Container;
