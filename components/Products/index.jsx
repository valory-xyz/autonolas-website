import { useRouter } from 'next/router';
import { Typography } from 'antd/lib';
import { META_TAGS_INFO, SITE_URL } from 'util/constants/site';
import PropTypes from 'prop-types';
import Meta from 'common-util/meta';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { IEKit } from './IEKit';
import { ProductHero } from './styles';

const { Title } = Typography;

const Products = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;
  const { category, title, description } = product || {};

  // IEKit has a different layout
  if (category === 'toolkit' && title === 'IEKit') {
    return <IEKit />;
  }

  return (
    <>
      <Meta
        meta={{
          siteUrl: `${SITE_URL}${pathname}`,
          title: `${title} | Autonolas`,
          description,
          image: META_TAGS_INFO.image,
        }}
      />

      <ProductPage product={product} />
    </>
  );
};

/**
 * Product page component
 */
const ProductPage = ({ product }) => {
  const {
    description, id, liveLink, title,
  } = product || {};

  return (
    <ProductHero>
      <img
        src={`/images/products/icons/${id}.png`}
        alt=" "
        width="130px"
        height="130px"
        className="product-icon"
      />

      <Title level={1} className="product-title">
        {title}
      </Title>

      <p className="product-description">{description}</p>

      <CallToActionButton
        href={liveLink.url}
        external={liveLink.external}
        btnText="Get started"
        className="product-cta-btn"
      />

      <br />

      <div className="product-screen-container">
        <img
          src={`/images/products/screens/${id}.jpg`}
          className="product-screen"
          alt={`${title} product screen`}
        />
      </div>
    </ProductHero>
  );
};

Products.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

ProductPage.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
