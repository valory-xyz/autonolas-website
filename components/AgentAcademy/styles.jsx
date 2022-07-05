import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundImage, backgroundGradient } from 'components/GlobalStyles';

export const Hr = styled.hr`
  height: 1px;
  color: ${COLOR.BLACK};
  background-color: ${COLOR.BLACK};
  border: none;
`;

export const Container = styled.div`
  ${backgroundGradient}
  .description {
    padding: 2rem 0;
    letter-spacing: 2px;
  }
  .info {
    max-width: 540px;
    margin-bottom: 4rem;
  }
  .row-1 {
    font-size: 18px;
    .each-video-section {
      Hr {
        margin-bottom: 2rem;
      }
      .module-name {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        color: ${COLOR.PURPLE};
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
  .row-2 {
    .project-challenge {
      margin-bottom: 2rem;
    }
  }
  a {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: ${COLOR.BLACK};
    &:active {
      /* color: ${COLOR.GREY_1}; */
    }
  }

  ${MEDIA_QUERY.tablet} {
    .description {
      padding: 1rem 0;
    }
    .row-1 {
      font-size: 16px;
    }
  }
`;

export const H3 = styled.h3`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem 0;
  div {
    display: inline-block;
    margin-left: 2rem;
    font-size: 78px;
  }

  ${MEDIA_QUERY.tablet} {
    div {
      font-size: 34px;
    }
  }
`;

export const VideoTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  th {
    border-bottom: 1px solid black;
    text-align: left;
    font-weight: normal;
    &:nth-child(1) {
      width: 120px;
    }
    &:nth-child(2) {
      width: 520px;
    }
    &:nth-child(3) {
      width: 100px;
    }
  }
  th,
  td {
    padding: 0.4rem 0.5rem;
  }
  td {
    &:nth-child(1) {
      font-weight: bolder;
    }
  }
`;

export const DoThisTask = styled.div`
  margin-bottom: 2rem;
`;

export const ModulesFinished = styled.div`
  padding: 3rem 0rem 3rem 0rem;
  .btn {
    width: auto;
  }

  ${MEDIA_QUERY.mobileL} {
  }
`;

export const AcademyContainer = styled.div`
  align-items: center;
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;
