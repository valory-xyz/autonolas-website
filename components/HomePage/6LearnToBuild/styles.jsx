import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const LearnToBuildContainer = styled.div`
  background-image: url("/images/accelerated-learning/background.jpg");
  .dev-academy-logo {
    display: flex;
    margin: 0 auto 32px auto;
    justify-content: center;
  }
  .header {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
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
  }
  .row-2 {
    display: flex;
    align-items: center;
    flex-direction: column;
    a {
      font-size: 24px;
      text-decoration: underline;
      text-underline-offset: 2px;
      color: inherit;
    }
  }

  ${MEDIA_QUERY.tablet} {
    background-image: url("/images/accelerated-learning/background-mobile.jpg");
    .header {
      line-height: 0.85;
    }
    &.border-boxes {
      .row-1 {
        .description {
          text-align: center;
        }
      }
      .row-2 .column {
      }
    }
  }
`;

export const EG = styled.div``;
