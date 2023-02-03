import { Col, Row, Grid } from 'antd';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Link from 'next/link';
import {
  SectionSeven, Container, CommissionUs, HeadersRow,
} from './styles';

const { useBreakpoint } = Grid;

const LEARN_LIST = [
  {
    imageUrl: 'learn',
    heading: '',
    subHeading:
      'Understand the concepts that power Autonolas’ technology and ecosystem.',
    redirectTo: '/learn',
  },
];

const BUILD_LIST = [
  {
    imageUrl: 'docs',
    heading: 'DOCS',
    subHeading:
      'Work your way through our written documentation at your own pace.',
    redirectTo: ' https://docs.autonolas.network/',
  },
  {
    imageUrl: 'dev-academy',
    heading: 'ACADEMY',
    subHeading:
      'Follow videos and complete projects in our Education Track. Then, apply to the Builder Track for expert guidance in developing high-impact services.',
    redirectTo: '/academy',
  },
];

const getContent = list => list.map(({
  heading, subHeading, imageUrl, redirectTo,
}, index) => (
  <Col lg={8} sm={24} xs={24} key={`start-building-${imageUrl}`}>
    <div key={imageUrl} className={`column column-${index + 1}`}>
      <div className="img-container-custom">
        <img
          src={`/images/7StartBuilding/${imageUrl}.png`}
          alt={`${heading} Icon`}
        />
      </div>
      <div className="text-content">
        <div className="header-text">{heading}</div>
        <div className="sub-text">{subHeading}</div>
        <div className="action-btn">
          <Link href={redirectTo} passHref>
            <Button title="GET STARTED" type="black" />
          </Link>
        </div>
      </div>
    </div>
  </Col>
));

const LearnAndBuild = () => {
  const screens = useBreakpoint();
  const isIpadAndLess = (screens.xs || screens.sm) && !screens.lg;
  const forUserHeader = <h3 className="product-title main-title">Build</h3>;

  return (
    <SectionSeven className="section" id="learn-and-build">
      <Header className="header center" title="Learn and build" />

      <HeadersRow>
        <Col lg={8} sm={24} xs={24}>
          <h3 className="product-title main-title">Learn</h3>
        </Col>
        {!isIpadAndLess && (
          <Col lg={16} sm={24} xs={24} style={{ textAlign: 'center' }}>
            {forUserHeader}
          </Col>
        )}
      </HeadersRow>

      <Container>
        {getContent(
          isIpadAndLess ? LEARN_LIST : [...LEARN_LIST, ...BUILD_LIST],
        )}
      </Container>

      {isIpadAndLess && (
        <>
          <HeadersRow>
            <Col sm={24} xs={24}>
              {forUserHeader}
            </Col>
          </HeadersRow>
          <Container>{getContent(BUILD_LIST)}</Container>
        </>
      )}

      <Row>
        <Col lg={16} sm={24} xs={24} offset={isIpadAndLess ? 0 : 8}>
          <CommissionUs>
            <p>Don’t have time to build right now?</p>
            <Link href="/#ecosystem-builders" passHref>
              <a>
                <Button hasArrowSuffix type="purple" title="Get support with your project" />
              </a>
            </Link>
          </CommissionUs>
        </Col>
      </Row>
    </SectionSeven>
  );
};

export default LearnAndBuild;
