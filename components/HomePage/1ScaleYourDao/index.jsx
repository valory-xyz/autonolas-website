import { Row, Col } from 'antd/lib';
import Header from 'common-util/Header';
import { SectionTwo, Content } from './styles';

const LIST = [
  {
    imageUrl: '1',
    heading: 'Get consistent results at lower cost',
    subHeading:
      'Run complex workflows in software without expensive constributors',
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

const WhatIsAutonolas = () => (
  <SectionTwo className="section" id="learn">
    <Header className="header" title="Scale your DAO" />

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
  </SectionTwo>
);

export default WhatIsAutonolas;
