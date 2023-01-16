import { useRouter } from 'next/router';
import { Typography, Col } from 'antd';
import Button from 'common-util/Button';
import PropTypes from 'prop-types';
import { SITE_URL } from 'util/constants/site';
import Meta from 'common-util/meta';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { getHostName} from 'common-util/functions';
import { ProductContainer, LinksSection } from './styles';

const { Title, Text } = Typography;

const Products = ({ details }) => {
  const router = useRouter();
  const { pathname } = router;
  const {
    icon,
    image,
    name,
    description,
    primaryBtnText,
    primaryLink,
    runTheCodeLink,
    buildYourOwnLink,
  } = details || {};

  return (
    <>
      <Meta
        meta={{
          siteUrl: `${SITE_URL}${pathname}`,
          title: name,
          description,
          image: `${getHostName()}/images/Products/${image}`,
        }}
      />

      <ProductContainer>
        <img
          src={`/images/9Products/${icon}`}
          alt=" "
          width="130px"
          height="130px"
          className="product-icon"
        />

        <Title level={1} className="product-title">{name}</Title>

        <p className="product-description">{description}</p>

        <br />

        <CallToActionButton href={primaryLink} btnText={primaryBtnText} className="product-cta-btn" />

        <br />

        <div
          className="each-content-header-image"
          style={{
            backgroundImage: `url(/images/Products/${image})`,
          }}
        />
      </ProductContainer>

      <LinksSection>
        <Col className="links-column" xs={{ span: 24 }} lg={{ span: 8, offset: 4 }}>
          <Title level={2}>
            Run the code
          </Title>
          <Text className="links-column-description">
            Interested to pull down the code for this service and run it yourself?
          </Text>
          <br />
          <Button title="See instructions" onClick={() => window.open(runTheCodeLink)} />
        </Col>
        <Col className="links-column" xs={{ span: 24 }} lg={{ span: 8 }}>
          <Title level={2}>
            Build your own
          </Title>
          <Text className="links-column-description">
            Check out the relevant documentation section for help about how to fork and build your own custom implementation of this product.
          </Text>
          <br />
          <Button title="Learn more" onClick={() => window.open(buildYourOwnLink)} />
        </Col>
      </LinksSection>
    </>
  );
};

Products.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
