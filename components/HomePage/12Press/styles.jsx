import styled from 'styled-components';
import { BORDER, MEDIA_QUERY } from 'util/theme';

export const SectionPress = styled.div`
  .subtitle {
    max-width: 42ch;
  }

  .press-item {
    margin-bottom: 4rem;
    &-title {
      margin-top: 1rem;
    }
    a {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 215px;
      border: ${BORDER};
      margin-bottom: 1rem;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .press-item {
      &-image {
        height: 172px;
      }
    }
  }
`;
