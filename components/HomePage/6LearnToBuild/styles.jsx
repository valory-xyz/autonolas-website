import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const SectionSix = styled.div`
  background: linear-gradient(180deg, ${COLOR.WHITE} 0%, ${COLOR.GREEN_2} 100%);
  .header {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 0rem !important;
  }
  .bg-image {
    height: 125px;
    width: 160px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .content .text {
    line-height: normal;
  }
  .row-1 {
    text-align: center;
  }
  .row-2 {
    margin-top: 3rem;
    .start-learning {
      display: flex;
      justify-content: center;
      a {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 2px;
        font-size: 28px;
        font-family: triakis__fontbold, sans-serif;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    .header {
      line-height: 0.85;
    }
    &.border-boxes {
      .row-1 {
        .description {
          text-align: center;
        }
      }
    }
  }
`;

export const DevAcademyLogo = styled.div`
  display: flex;
  margin: 0 auto 32px auto;
  justify-content: center;
`;
