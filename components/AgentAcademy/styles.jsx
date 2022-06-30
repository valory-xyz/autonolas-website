import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';

export const Hr = styled.hr`
  margin: 0 -2rem;
  height: 1px;
  color: ${COLOR.BLACK};
  background-color: ${COLOR.BLACK};
  border: none;
`;

export const Container = styled.div`
  padding: 0 2rem;
  background: linear-gradient(
    180deg,
    ${COLOR.GREEN_2} 0%,
    ${COLOR.WHITE} 20%,
    ${COLOR.WHITE} 100%
  );
  .description {
    padding: 2rem 0;
    letter-spacing: 2px;
  }
  .row-1 {
    font-size: 18px;
    .each-video-section {
      Hr {
        margin-bottom: 2rem;
      }
      .module-name {
        font-family: triakis__fontheavy, sans-serif;
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: bolder;
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
    font-family: triakis__fontheavy, sans-serif;
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
  display: flex;
  justify-content: space-between;
  padding: 3rem 2.5rem 3rem 1rem;
  .card-left {
    display: flex;
    .content {
      max-width: 45%;
      margin-left: 4rem;
      .title {
        line-height: 54px;
        font-size: 70px;
        font-family: triakis__fontsemibold, sans-serif;
        margin-bottom: 1rem;
      }
      .desc {
        font-size: 20px;
      }
    }
  }
  .card-right {
    margin-top: 2rem;
  }

  ${MEDIA_QUERY.tablet} {
    flex-direction: column;
    padding: 2rem 0 2rem 0;
    .card-left {
      .content {
        max-width: initial;
        margin-left: 1rem;
        .title {
          line-height: 32px;
          font-size: 38px;
        }
        .desc {
          font-size: 16px;
        }
      }
    }
  }
`;

export const AcademyContainer = styled.div`
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;
