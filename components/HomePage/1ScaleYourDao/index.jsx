import Image from 'next/image';
import {
  Row, Col, Divider, Grid,
} from 'antd';
import Header from 'common-util/Header';
import { SectionScaleYourDao, Content } from './styles';

const { useBreakpoint } = Grid;

const LIST = [
  {
    imageUrl: '1',
    heading: 'Get consistent results at lower cost',
    subHeading:
      'Run complex workflows in software without expensive contributors.',
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
  {
    imageUrl: '4',
    heading: 'Unify off-chain code',
    subHeading:
      'Consolidate your existing data, compute and transaction automation process.',
  },
];

const ScaleYourDao = () => {
  const screens = useBreakpoint();

  return (
    <SectionScaleYourDao className="section" id="why-autonolas">
      <Header className="header" title="Scale your DAO" />

      {screens.xs ? (
        <Image
          src="/images/1ScaleYourDao/header-mobile.png"
          width="100%"
          height="190px"
          layout="responsive"
          objectFit="contain"
        />
      ) : (
        <Image
          src="/images/1ScaleYourDao/header-desktop.png"
          width="100%"
          height="40px"
          layout="responsive"
          objectFit="contain"
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
              md={6}
              lg={6}
              className={`column column-${index + 1}`}
            >
              <div className="img-container">
                <img
                  src={`/images/1ScaleYourDao/${imageUrl}.png`}
                  alt={`${heading} Icon`}
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
