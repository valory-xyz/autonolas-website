import styled from 'styled-components';
import { Row } from 'antd/lib';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { backgroundGradient } from 'components/GlobalStyles';

export const ProductsSection = styled.div`
  ${backgroundGradient};
  .header {
    font-weight: 900;
    margin-bottom: 10rem !important;
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
    }
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
  margin: 2rem 0;
  .ant-col {
    border-top: 1px solid ${COLOR.BLACK};
    border-bottom: 1px solid ${COLOR.BLACK};
    h3 {
      margin: 0.5rem 0;
    }
    &:nth-child(2) {
      border-left: 1px solid ${COLOR.BLACK};
      h3 {
        padding-left: 1rem;
      }
    }
  }
`;

export const ProductCard = styled.div`
  display: block;
  max-width: 260px;
  padding: 1rem;
  text-align: center;
  border-right: 4px solid ${COLOR.PURPLE};
  border-bottom: 4px solid ${COLOR.PURPLE};
  border-radius: 1rem;
  background-color: ${COLOR.WHITE};
  transition: box-shadow 0.3s;
  &.users {
    border-right-color: ${COLOR.GREEN_1};
    border-bottom-color: ${COLOR.GREEN_1};
  }

  ${MEDIA_QUERY.laptop} {
    max-width: 230px;
  }

  ${MEDIA_QUERY.tablet} {
    max-width: 260px;
  }

  ${MEDIA_QUERY.mobileL} {
    max-width: 300px;
  }
`;
