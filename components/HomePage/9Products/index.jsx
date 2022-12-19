import {
  Col, Row, Typography, Grid,
} from 'antd';
import Image from 'next/image';
import { COLOR } from 'util/theme';
import Header from 'common-util/Header';
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
    link: 'https://docs.autonolas.network/',
    color: COLOR.PURPLE,
  },
  {
    id: 'protocol',
    imageFilename: 'protocol.png',
    title: 'Protocol',
    description: 'Register and manage autonomous services',
    link: 'https://protocol.autonolas.network/',
    color: COLOR.PURPLE,
  },
];

const FOR_DEVELOPERS_TOOLKITS = [
  {
    id: 'smart-managed-pools',
    imageFilename: 'smart-managed-pools.png',
    title: 'Smart Managed Pools',
    description: 'Build autonomous asset management products',
    link: 'https://www.autonolas.network/autonomous-asset-management-infra',
    color: COLOR.PURPLE,
    isExternal: false,
  },
  {
    id: 'custom-oracle-infra',
    imageFilename: 'custom-oracle.png',
    title: 'Custom Oracle Infra',
    description: 'Build any oracle you can imagine',
    link: 'https://oracle.autonolas.network/',
    color: COLOR.PURPLE,
  },
];

const FOR_USERS = [
  {
    id: 'el-collectooorr',
    imageFilename: 'el-col.png',
    title: 'El Collectooorr',
    description: 'Get passive exposure to new generative art collections',
    link: 'https://elcollectooorr.art/',
    color: COLOR.GREEN_2,
  },
  {
    id: 'autonolas-contribute',
    imageFilename: 'contribute.png',
    imageStyle: { width: 80, height: 80 },
    title: 'Autonolas Contribute',
    description:
      'Make guided contributions and get recognized for your efforts',
    link: 'https://contribute.autonolas.network',
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
    link,
    isExternal = true,
  } = eachProduct;

  return (
    <Col lg={12} sm={12} xs={24} key={id} className="product">
      <ProductCard
        target={isExternal ? '_blank' : '_self'}
        rel="noopener noreferrer"
        href={link}
        className={type}
      >
        <Image
          src={BASE_IMAGES_PATH + imageFilename}
          className="product-image"
          width="100px"
          height="100px"
        />
        <h3 className="product-title">{title}</h3>
        <Text className="product-description">{description}</Text>
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
