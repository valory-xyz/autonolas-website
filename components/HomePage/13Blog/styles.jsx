import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const SectionBlog = styled.div`
  padding-bottom: 6rem !important;
  .blog-item {
    margin-bottom: 4rem;
    a {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 200px;
      margin-bottom: 0.5rem;
    }
    &-subtitle {
      min-height: 50px;
    }
  }
  .blog-collection-row-1 {
    margin-bottom: 4rem;
    .blog-item {
      a {
        height: 340px;
      }
    }
  }
  .subtitle {
    max-width: 42ch;
  }

  ${MEDIA_QUERY.tabletL} {
    .blog-item {
      &-image {
        height: 172px;
      }
    }
  }
`;
