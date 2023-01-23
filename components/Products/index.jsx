import { useRouter } from 'next/router';
import { Typography } from 'antd';
import Link from 'next/link';
import { META_TAGS_INFO, SITE_URL } from 'util/constants/site';
import PropTypes from 'prop-types';

import Meta from 'common-util/meta';
import Button from 'common-util/Button';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { BUILDER_HELP_URL, PRODUCT_DOCS_PATH } from 'util/paths';
import { ProductHero } from './styles';


const { Title } = Typography;

const Products = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;

  const {
    category,
    title,
    description,
  } = product || {};

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

      {
        category === 'toolkit'
          ? <ToolkitPage product={product} />
          : <ProductPage product={product} />
      }
    </>
  );
};

const ProductPage = ({ product }) => {
  const {
    description,
    id,
    liveUrl,
    title,
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
        href={liveUrl}
        btnText="Get started"
        className="product-cta-btn"
      />

      <br />

      <img
        src={`/images/products/screens/${id}.jpg`}
        className="product-screen"
        alt={`${title} product screen`}
      />

    </ProductHero>
  );
};

const ToolkitPage = ({ product }) => {
  const {
    id,
    title,
    description,
    liveUrl,
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
          href={liveUrl}
          btnText="View demo"
          className="product-cta-btn"
        />
        <br />
        <br />
        <Link href={`${PRODUCT_DOCS_PATH}${id}`}>
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
        <Link href={BUILDER_HELP_URL}>
          <a>
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


Products.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

ProductPage.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

ToolkitPage.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
