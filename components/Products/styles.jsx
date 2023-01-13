import { Row } from 'antd';
import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

export const ProductContainer = styled.div`
  margin-top: 10rem;
  padding: 0 1rem;
  text-align: center;

  .product-icon {
    margin-bottom: 1rem;
  }

  .product-title {
    display: block;
    margin-bottom: 1.5rem;
  }

  .product-description {
    margin: 0 auto 1rem auto;
    max-width: 60ch;
  }

  .product-cta-btn {
    display: block;
    margin-bottom: 2rem;
  }

  .each-content-header-image {
    margin-top: 2rem;
  }

  .body {
    margin-top: 5rem;
  }
`;

export const LinksSection = styled(Row)`
  text-align: center;
  padding: 5rem 1rem 0 1rem;

  .links-column {
    margin-bottom: 4rem;
    
    .links-column-description {
      display: inline-block;
      margin-bottom: 2rem;
      width: 300px;
    }
  }
`;
