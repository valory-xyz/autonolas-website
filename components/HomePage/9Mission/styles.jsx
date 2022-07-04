import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionNine = styled.div`
  background-image: url("/images/9Mission/background.webp");
  .header {
    margin-top: 1rem;
    margin-bottom: 1rem !important;
  }

  ${MEDIA_QUERY.tablet} {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  .description {
    max-width: 700px;
  }
  .glass-container {
    width: 420px;
    margin-left: auto;
    margin-right: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  ${MEDIA_QUERY.laptop} {
    .description {
      max-width: 500px;
    }
    .glass-container {
      padding-left: 2rem;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .description {
      max-width: 400px;
    }
  }

  ${MEDIA_QUERY.mobileL} {
    flex-direction: column-reverse;
    .glass-container {
      max-width: 100%;
      padding: 4rem 2rem;
    }
  }
`;
