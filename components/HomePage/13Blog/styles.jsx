import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionBlog = styled.div`
  padding-bottom: 6rem !important;

  .blog-item {
    margin-bottom: 4rem;
    
    &-image {
      margin-bottom: 1rem;
      width: 100%;
    }

    &-subtitle {
      min-height: 50px;
    }
  }

  .blog-collection-row {
    margin-bottom: 4rem;
  }
  
  .header {
  }
  .subtitle {
    max-width: 42ch;
  }
  ${MEDIA_QUERY.tabletL} {
  }
`;
