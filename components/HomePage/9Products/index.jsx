import {
  Col, Row, Typography, Grid,
} from 'antd';
import Image from 'next/image';
import { COLOR } from 'util/theme';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { openUrl } from 'common-util/functions';
import { ProductsSection, HeadersRow, ProductCard } from './styles';

const { Text } = Typography;
const { useBreakpoint } = Grid;

const BASE_IMAGES_PATH = '/images/9Products/';

const FOR_DEVELOPERS_CORE = [
  {
    id: 'open-autonomy',
    imageFilename: 'open-autonomy-framework.png',
    title: 'Open Autonomy',
    description: 'Framework for building any autonomous service',
    primaryBtnText: 'Get Started',
    primaryLink:
      'https://docs.autonolas.network/get_started/what_is_the_open_autonomy_framework',
    secondaryLink: 'https://autonolas.network/open-autonomy',
    color: COLOR.PURPLE,
  },
  {
    id: 'protocol',
    imageFilename: 'protocol.png',
    title: 'Protocol',
    description: 'Register and manage autonomous services',
    primaryBtnText: 'Explore the Protocol',
    primaryLink: 'https://protocol.autonolas.network/',
    secondaryLink: 'https://autonolas.network/products/protocol',
    color: COLOR.PURPLE,
  },
];

const FOR_DEVELOPERS_TOOLKITS = [
  {
    id: 'smart-managed-pools',
    imageFilename: 'smart-managed-pools.png',
    title: 'Smart Managed Pools',
    description: 'Build autonomous asset management products',
    primaryBtnText: 'See Demo (coming soon)',
    primaryLink: '',
    secondaryLink: 'https://autonolas.network/products/smart-managed-pools',
    color: COLOR.PURPLE,
    isExternal: false,
  },
  // TODO: this will be removed later once the image for other 2 is ready
  {
    id: 'custom-oracle-infra',
    imageFilename: 'custom-oracle.png',
    title: 'Custom Oracle Infra',
    description: 'Build any oracle you can imagine',
    primaryBtnText: 'See Demo',
    primaryLink: 'https://oracle.autonolas.network/',
    secondaryLink: '',
    color: COLOR.PURPLE,
  },
  // TODO: fix later
  // {
  //   id: 'ml-apy-prediction-oracle',
  //   imageFilename: 'custom-oracle.png', // TODO: ask Oak about the image
  //   title: 'ML APY Prediction Oracle',
  //   description: 'Advanced prediction of Uniswap v2 LP yield',
  //   primaryBtnText: 'See demo',
  //   primaryLink: 'https://oracle.autonolas.network/ml-apy-prediction',
  //   secondaryLink: 'https://autonolas.network/products/ml-apy-prediction-oracle',
  //   color: COLOR.PURPLE,
  // },
  // {
  //   id: 'price-oracle',
  //   imageFilename: 'custom-oracle.png', // TODO: ask Oak about the image
  //   title: 'Price Oracle',
  //   description: 'Robust aggregation of CEX pricing data for cryptoassets',
  //   primaryBtnText: 'See demo',
  //   primaryLink: 'https://oracle.autonolas.network/price',
  //   secondaryLink: 'https://autonolas.network/products/price-oracle',
  //   color: COLOR.PURPLE,
  // },
];

const FOR_USERS = [
  {
    id: 'el-collectooorr',
    imageFilename: 'el-col.png',
    title: 'El Collectooorr',
    description: 'Get passive exposure to new generative art collections',
    primaryBtnText: 'Start Collecting',
    primaryLink: 'https://elcollectooorr.art/vaults/latest',
    secondaryLink: 'https://elcollectooorr.art',
    color: COLOR.GREEN_2,
  },
  {
    id: 'autonolas-contribute',
    imageFilename: 'contribute.png',
    imageStyle: { width: 80, height: 80 },
    title: 'Autonolas Contribute',
    description:
      'Make guided contributions and get recognized for your efforts',
    primaryBtnText: 'Get Started',
    primaryLink: 'https://contribute.autonolas.network',
    secondaryLink: 'https://autonolas.network/products/autonolas-contribute',
    color: COLOR.GREEN_2,
    isExternal: true,
  },
];

const getProductList = (list, type) => list.map(eachProduct => {
  const {
    id,
    imageFilename,
    title,
    description,
    primaryLink,
    primaryBtnText,
    // secondaryLink,
  } = eachProduct;

  return (
    <Col lg={12} sm={12} xs={24} key={id} className="product">
      <ProductCard className={type}>
        <Image
          src={BASE_IMAGES_PATH + imageFilename}
          className="product-image"
          width="100px"
          height="100px"
        />
        <h3 className="product-title">{title}</h3>
        <Text className="product-description">{description}</Text>
        <Button
          type="purple"
          title={primaryBtnText}
          disabled={!primaryLink}
          className="mini mb-1"
          onClick={() => openUrl(primaryLink)}
          style={{ minWidth: '200px' }}
        />
        <Button
          title="LEARN MORE"
          type="black"
          className="mini"
          disabled
          // TODO: disabled util the product pages are ready
          // disabled={!secondaryLink}
          // onClick={() => openUrl(secondaryLink)}
        />
      </ProductCard>
    </Col>
  );
});

const Products = () => {
  const screens = useBreakpoint();
  const isIpadAndLess = (screens.xs || screens.sm) && !screens.lg;
  const forUserHeader = <h3 className="product-title main-title">For Users</h3>;

  return (
    <ProductsSection id="products" className="section">
      <Header title="Products" />

      <HeadersRow>
        <Col lg={12} sm={24} xs={24}>
          <h3 className="product-title main-title">For Developers</h3>
        </Col>
        {!isIpadAndLess && (
          <Col lg={12} sm={24} xs={24}>
            {forUserHeader}
          </Col>
        )}
      </HeadersRow>

      <Row>
        <Col lg={12} sm={24} xs={24}>
          <Row>
            <Col lg={24} xs={24}>
              <h3 className="product-title subtitle">Core</h3>
            </Col>
            {getProductList(FOR_DEVELOPERS_CORE, '')}

            <Col lg={24} xs={24}>
              <h3 className="product-title subtitle">Toolkits</h3>
            </Col>
            {getProductList(FOR_DEVELOPERS_TOOLKITS, '')}
          </Row>
        </Col>

        <Col lg={12} sm={24} xs={24}>
          <HeadersRow>
            {isIpadAndLess && <Col xs={24}>{forUserHeader}</Col>}
          </HeadersRow>

          <Row>{getProductList(FOR_USERS, 'users')}</Row>
        </Col>
      </Row>
    </ProductsSection>
  );
};

export default Products;
