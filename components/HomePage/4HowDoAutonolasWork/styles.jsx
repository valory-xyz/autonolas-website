import { backgroundImage } from 'components/GlobalStyles';
import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

const IMG_URL = '/images/4HowDoAutonolasWork/how-autonomous-services-work.png';

export const SectionFour = styled.div`
  position: relative;
  .header {
  }

  ${MEDIA_QUERY.tablet} {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  .column {
  }
  .column-1 {
    flex: 1;
    width: 100%;
    ${backgroundImage(IMG_URL)}
  }
  .column-2 {
    width: 27.5%;
    padding-top: 8rem;

    .content {
      display: flex;
      padding: 0.75rem 0 1rem 0;
      border-left: 1px solid ${COLOR.BLACK};
      &:not(:last-child) {
        border-bottom: 1px solid ${COLOR.BLACK};
      }
      .sr-no {
        font-family: neuemachina__light;
        padding: 0.5rem 2rem 0 1.5rem;
        font-size: 22px;
        font-weight: bold;
      }
      .text {
        padding-right: 2rem;
      }
    }
  }
`;
