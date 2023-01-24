import styled from 'styled-components';
import { Row } from 'antd/lib';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const ProductsSection = styled.div`
  background-color: ${COLOR.LIGHT_BLUE};

  .products-section-title {
    margin-bottom: 2rem;
  }

  .product-list {
    margin-top: 3rem;
  }

  .product {
    margin-bottom: 3rem;
    &-image {
      margin-bottom: 1rem;
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 70px;
      margin: 0;
      line-height: 0.86;
      text-align: center;
      font-size: 26px;
      font-family: "manrope__semibold", sans-serif;
      &.main-title {
        min-height: 48px;
        font-size: 36px;
        justify-content: flex-start;
      }
      &.subtitle {
        justify-content: flex-start;
      }
    }
    &-description {
      display: inline-block;
      min-height: 100px;
      max-width: 250px;
    }
  }

  .products-category-row {
    margin-bottom: 2rem;
  }

  ${MEDIA_QUERY.laptop} {
    .product {
      &-description {
        min-height: 120px;
      }
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .product {
      &-description {
        min-height: auto;
        margin-bottom: 2rem;
      }
    }
  }
`;

export const HeadersRow = styled(Row)`
  margin-bottom: 2rem;
  .ant-col {
    border-top: 1px solid ${COLOR.BLACK};
    border-bottom: 1px solid ${COLOR.BLACK};
    h3 {
      margin: 0.5rem 0;
    }
  }
`;
