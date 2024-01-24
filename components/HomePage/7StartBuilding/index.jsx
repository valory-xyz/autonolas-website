import { Col, Grid } from 'antd/lib';
import Image from 'next/image';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Link from 'next/link';
import {
  SectionSeven, Container, HeadersRow,
} from './styles';

const { useBreakpoint } = Grid;

const getContent = list => list.map(
  (
    {
      heading,
      subHeading,
      imageUrl,
      redirectTo,
      imageStyle,
      isSameSubdomain = true,
    },
    index,
  ) => (
    <Col lg={8} md={12} sm={24} xs={24} key={`start-building-${imageUrl}`}>
      <div key={imageUrl} className={`column column-${index + 1}`}>
        <div className="img-container-custom">
          <Image
            src={`/images/7StartBuilding/${imageUrl}.png`}
            alt={`${heading} Icon`}
            width={imageStyle.width}
            height={imageStyle.height || 150}
          />
        </div>
        <div className="text-content">
          <div className="header-text">{heading}</div>
          <div className="sub-text">{subHeading}</div>
          <div className="action-btn">
            {isSameSubdomain ? (
              <>
                <Link href={redirectTo} passHref>
                  <Button title="GET STARTED" type="black" />
                </Link>
                {imageUrl === 'learn' ? (
                  <Link href="/whitepaper" passHref>
                    <Button
                      type="black"
                      className="mt-1"
                      title="Whitepaper"
                    />
                  </Link>
                ) : null}
              </>
            ) : (
              <Button
                title="GET STARTED"
                type="black"
                onClick={() => window.open(redirectTo, '_self')}
              />
            )}
          </div>
        </div>
      </div>
    </Col>
  ),
);

const LearnAndBuild = () => {
  const screens = useBreakpoint();
  const isIpadAndLess = (screens.xs || screens.sm) && !screens.lg;
  const forUserHeader = <h3 className="product-title main-title">Build</h3>;

  const LEARN_LIST = [
    {
      imageUrl: 'learn',
      heading: '',
      subHeading:
        'Understand the concepts that power Autonolas’ technology and ecosystem.',
      redirectTo: '/learn',
      imageStyle: {
        width: screens.xs ? 95 : 180,
        height: screens.xs ? 95 : 180,
      },
    },
  ];

  const BUILD_LIST = [
    {
      imageUrl: 'docs',
      heading: 'DOCS',
      subHeading:
        'Work your way through our written documentation at your own pace.',
      redirectTo: ' https://docs.autonolas.network/',
      isSameSubdomain: false,
      imageStyle: {
        width: screens.xs ? 95 : 140,
        height: screens.xs ? 82 : 120,
      },
    },
    {
      imageUrl: 'dev-academy',
      heading: 'ACADEMY',
      subHeading:
        'Follow videos and complete projects in our Education Track. Then, apply to the Builder Track for expert guidance in developing high-impact services.',
      redirectTo: '/academy',
      imageStyle: {
        width: screens.xs ? 95 : 120,
        height: screens.xs ? 95 : 120,
      },
    },
  ];

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
    </SectionSeven>
  );
};

export default LearnAndBuild;
