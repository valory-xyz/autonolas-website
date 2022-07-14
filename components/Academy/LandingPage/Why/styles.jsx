import styled from 'styled-components';
import { MEDIA_QUERY, COLOR } from 'util/theme';


export const WhySection = styled.div`
  padding-bottom: 0;
  .header {
    font-weight: 900;
  }
  .description {
    max-width: 42ch;
    margin-bottom: 2rem;
  }
  .description.custom {
    text-transform: uppercase;
  }
  .divider {
    padding: 1rem 0;
  }
  .big-number {
    font-family: 'neuemachina__bold';
    font-size: 96px;
    line-height: 100px;
    letter-spacing: -0.045em;

    color: ${COLOR.PURPLE};
  }
  .text-body {
    margin-bottom: 5rem;
  }
  .arrow-image-container {
    text-align: center;
    padding: 2rem 0;
  }

  ${MEDIA_QUERY.tablet} {
    .arrow-image {
      transform: rotate(90deg);
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .arrow-image {
      transform: rotate(90deg);
    }
  }
`;
