import styled from 'styled-components';
import { BORDER_RADIUS, BOX_SHADOW, COLOR } from 'util/theme';

export const ProductHero = styled.div`
  margin: 10rem 0;
  padding: 0 1rem;
  text-align: center;

  .product-icon {
    margin-bottom: 2rem;
  }

  .product-title {
    display: block;
    margin-bottom: 1rem;
  }

  .product-description {
    margin: 0 auto 2rem auto;
    max-width: 60ch;
  }

  .product-screen {
    border: 1px solid ${COLOR.GREY_2};
    border-radius: ${BORDER_RADIUS};
    box-shadow: ${BOX_SHADOW};
    margin-top: 2rem;
    max-width: 900px;
  }
`;
