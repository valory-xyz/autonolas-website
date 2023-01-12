import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const ProductContainer = styled.div`
  .each-content-details {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    &-1 {
    }
    &-2 {
      margin-top: 2rem;
      margin-left: 2rem;
    }
  }
  .each-content-sider {
  }
  .body {
    margin-top: 2rem;
  }

  ${MEDIA_QUERY.tablet} {
    .each-content-details {
      flex-direction: column;
      &-2 {
        margin-top: 2rem;
        margin-left: 0rem;
      }
    }
  }
`;
