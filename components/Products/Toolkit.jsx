import { Typography } from 'antd/lib';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { BUILDER_HELP_URL, PRODUCT_DOCS_PATH } from 'util/paths';
import { ProductHero } from './styles';

const { Title } = Typography;

export const ActionButtons = ({ product }) => {
  const { id, liveLink } = product || {};

  return (
    <>
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
          <Button className="product-cta-btn" title="View docs" type="black" />
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
    </>
  );
};

ActionButtons.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export const ToolkitPage = ({ product }) => {
  const { id, title, description } = product || {};
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
        <ActionButtons product={product} />
      </ProductHero>
    </>
  );
};

ToolkitPage.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
