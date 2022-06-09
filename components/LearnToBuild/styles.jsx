import styled from 'styled-components';
// import { MEDIA_QUERY } from "util/theme";

export const Container = styled.div`
  padding: 2rem;
  .row {
    .column-1 {
      .each-video-section {
        margin-bottom: 3rem;
        .module-name {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: bolder;
        }
      }
    }
  }
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: 78px;
  line-height: normal;
  font-family: triakis__fontheavy, sans-serif;
`;

export const VideoTable = styled.table`
  border-collapse: collapse;
  th {
    border-bottom: 1px solid black;
    text-align: left;
    font-weight: normal;
    &:nth-child(1),
    &:nth-child(3) {
      width: 100px;
    }
    &:nth-child(2) {
      width: 480px;
    }
  }
  th,
  td {
    padding: 0.3rem 0.5rem;
  }
  td {
    &:nth-child(2) {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

export const ModulesFinished = styled.div`
  border: 1px solid black;
  max-width: 280px;
  padding: 1rem;
  .card-header {
    width: 10rem;
    margin: 0 auto;
    text-align: center;
    line-height: normal;
    font-size: 25px;
    font-family: triakis__fontbold, sans-serif;
  }
  .card-body {
    width: 13rem;
    margin: 1rem auto;
    text-align: center;
  }
`;
