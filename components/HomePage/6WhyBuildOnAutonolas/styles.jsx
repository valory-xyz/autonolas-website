import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { Content } from '../2WhatIsAutonolas/styles';

export const SectionSix = styled.div`
  padding-bottom: 0;
  .header {
    margin-left: -2rem;
    margin-right: -2rem;
  }
  .description {
    margin: 1rem 0 2rem 0;
    text-align: center;
  }
  .divider {
    padding-top: 3rem;
  }

  ${MEDIA_QUERY.tablet} {
    .header {
      margin-left: 0;
      margin-right: 0;
    }
    .description {
      text-align: left;
    }
  }
`;

export const Container = styled(Content)`
  .column {
    max-width: 340px;
  }

  ${MEDIA_QUERY.tablet} {
    .column {
      width: 32%;
      .img-container {
        min-height: 160px;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .column {
      width: 100%;
      .img-container {
        width: 42%;
        min-height: auto;
        margin-top: 1rem;
        img {
          margin-left: 0;
          width: 90% !important;
        }
      }
      .text-content {
        width: 64%;
      }
    }
  }
`;
