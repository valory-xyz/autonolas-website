import styled from 'styled-components';
import { BORDER_RADIUS, BOX_SHADOW, COLOR } from 'util/theme';

export const ProductHero = styled.div`
  padding: 10rem 1rem;
  text-align: center;
  .product-icon {
    margin-bottom: 1rem;
  }
  .product-title {
    display: block;
    margin-bottom: 1rem;
  }
  .product-description {
    margin: 0 auto 2rem auto;
    max-width: 60ch;
  }
  .product-screen-container {
    margin: 0 auto;
    max-width: 900px;
  }
  .product-screen {
    border: 1px solid ${COLOR.GREY_2};
    border-radius: ${BORDER_RADIUS};
    box-shadow: ${BOX_SHADOW};
    margin-top: 2rem;
    width: 100%;
  }
`;
