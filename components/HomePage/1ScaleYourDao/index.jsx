import Image from 'next/image';
import {
  Row, Col, Divider, Grid,
} from 'antd';
import Header from 'common-util/Header';
import { SectionScaleYourDao, Content } from './styles';

const { useBreakpoint } = Grid;

const LIST = [
  {
    imageUrl: '4',
    heading: 'Unify off-chain code',
    subHeading:
      'Consolidate your existing data, compute and transaction automation process.',
  },
  {
    imageUrl: '2',
    heading: 'Maximize control',
    subHeading: 'Your DAO owns and configures its processes.',
  },
  {
    imageUrl: '3',
    heading: 'Reduce liability',
    subHeading:
      'Replace processes that depend on individual humans and bots with off-chain software systems, run by independent operators.',
  },
];

const ScaleYourDao = () => {
  const screens = useBreakpoint();
  const otherImgProps = {
    layout: 'responsive',
    objectFit: 'contain',
    alt: 'Scale your DAO background',
  };

  return (
    <SectionScaleYourDao className="section" id="why-autonolas">
      <Header className="header" title="Scale your DAO" />

      {screens.xs ? (
        <Image
          src="/images/1ScaleYourDao/header-mobile.png"
          width="100%"
          height="190px"
          {...otherImgProps}
        />
      ) : (
        <Image
          src="/images/1ScaleYourDao/header-desktop.svg"
          width="90%"
          height="40px"
          {...otherImgProps}
        />
      )}

      <Divider />
      <br />

      <Content>
        <Row gutter={[32, 0]}>
          {LIST.map(({ heading, subHeading, imageUrl }, index) => (
            <Col
              key={`scale-your-dao-${imageUrl}`}
              xs={24}
              md={8}
              lg={8}
              className={`column column-${index + 1}`}
            >
              <div className="img-container">
                <Image
                  src={`/images/1ScaleYourDao/${imageUrl}.png`}
                  alt={`${heading} Icon`}
                  width="190px"
                  height="190px"
                />
              </div>
              <div className="text-content">
                <div className="header-text">{heading}</div>
                <div className="sub-text">{subHeading}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Content>
    </SectionScaleYourDao>
  );
};

export default ScaleYourDao;
