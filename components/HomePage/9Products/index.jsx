import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Header from 'common-util/Header';
import Link from 'next/dist/client/link';
import allProducts from 'common-util/data/products.json';
import { LinkCard } from 'components/GlobalStyles';
import { PRODUCT_PATH } from 'util/paths';
import { getProducts } from 'common-util/functions';
import { ProductsSection, HeadersRow } from './styles';

const { Text } = Typography;
const BASE_IMAGES_PATH = '/images/products/icons/';

const Products = () => (
  <ProductsSection id="products" className="section">
    <Header title="Products" className="products-section-title" />

    <HeadersRow>
      <Col xs={24}>
        <h3 className="product-title main-title">For Developers</h3>
      </Col>
    </HeadersRow>

    <h3 className="product-title subtitle">Core</h3>
    <ProductsCategory products={allProducts} category="core" />

    <h3 className="product-title subtitle">Toolkits</h3>
    <ProductsCategory products={allProducts} category="toolkit" />

    <HeadersRow>
      <Col xs={24}>
        <h3 className="product-title main-title">
          For Users — by Ecosystem Builders
        </h3>
      </Col>
    </HeadersRow>
    <ProductsCategory products={allProducts} category="user" />
  </ProductsSection>
);

const ProductsCategory = ({ products, category }) => {
  const filteredProducts = getProducts(products, category);

  return (
    <Row gutter={[16, 24]} className="products-category-row">
      {filteredProducts.map(product => {
        const { description, id, title } = product;
        const imageFilename = category === 'toolkit' ? `${id}.svg` : `${id}.png`;

        return (
          <Col key={id} lg={6} md={12} sm={12} xs={24}>
            <Link href={`${PRODUCT_PATH}${id}`} legacyBehavior passHref>
              <a>
                <LinkCard className={category}>
                  <Image
                    src={BASE_IMAGES_PATH + imageFilename}
                    className="product-image"
                    width="100px"
                    height="100px"
                    alt={`${title} product`}
                  />

                  <h3 className="product-title">{title}</h3>

                  <Text className="product-description">{description}</Text>
                </LinkCard>
              </a>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

ProductsCategory.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.string,
};

ProductsCategory.defaultProps = {
  category: '',
};

export default Products;
