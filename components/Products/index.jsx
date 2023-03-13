import { useRouter } from 'next/router';
import { Typography } from 'antd';
import Link from 'next/link';
import { META_TAGS_INFO, SITE_URL } from 'util/constants/site';
import PropTypes from 'prop-types';
import Meta from 'common-util/meta';
import Button from 'common-util/Button';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { BUILDER_HELP_URL, PRODUCT_DOCS_PATH } from 'util/paths';
import { IEKit } from './IEKit';
import { ProductHero } from './styles';

const { Title } = Typography;

const Products = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;

  const { category, title, description } = product || {};

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

      {category === 'toolkit' ? (
        <ToolkitPage product={product} />
      ) : (
        <ProductPage product={product} />
      )}

      {/* if the type is tookit and iekit show the component */}
      <IEKit product={product} />
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

/**
 * Toolkit page component
 */
const ToolkitPage = ({ product }) => {
  const {
    id, title, description, liveLink,
  } = product || {};
  return (
    <>
      <ProductHero>
        <img
          src={`/images/products/icons/${id}.svg`}
          alt=" "
          className="product-icon"
        />

        <Title level={1} className="product-title">
          {title}
        </Title>

        <p className="product-description">{description}</p>

        <br />

        <CallToActionButton
          href={liveLink.url}
          external={liveLink.external}
          btnText="View demo"
          className="product-cta-btn"
        />
        <br />
        <br />
        <Link href={`${PRODUCT_DOCS_PATH}${id}`} passHref>
          <a>
            <Button
              className="product-cta-btn"
              title="View docs"
              type="black"
            />
          </a>
        </Link>
        <br />
        <br />
        <Link href={BUILDER_HELP_URL} passHref>
          <a target="_blank" rel="noopener">
            <Button
              className="product-cta-btn"
              title="Get help building"
              type="black"
            />
          </a>
        </Link>
      </ProductHero>
    </>
  );
};

ToolkitPage.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
