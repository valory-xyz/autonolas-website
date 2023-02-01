import styled from 'styled-components';
import { BORDER, MEDIA_QUERY } from 'util/theme';

export const SectionPress = styled.div`
  .header {
  }
  .subtitle {
    max-width: 42ch;
  }
  ${MEDIA_QUERY.tablet} {
  }

  .press-item {
    margin-bottom: 4rem;

    &-image {
      border: ${BORDER};
      margin-bottom: 1rem;
      width: 100%;
    }

    &-title {
      margin-top: 1rem;
    }
  }
`;
