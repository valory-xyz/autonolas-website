import Image from 'next/image';
import { Col, Row } from 'antd';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { WhySection } from './styles';

const Why = () => (
  <WhySection className="section" id="build">
    <Header className="header" title="About the Program" />

    <div className="text-body">
      <Description
        type={3}
        title="DeFi and on-chain development continues to grow and innovate at an impressive rate. Off-chain… not so much. The solutions available are often overly centralized, inflexible and siloed."
      />
      <Description
        type={3}
        title="While on-chain services can provide decentralization, they remain limited. Smart contracts cannot perform the complex analysis and execution needed for more powerful services, forcing developers to choose between decentralization and performance… until now."
      />
      <Description
        type={3}
        title="Autonolas is the answer to both of these dilemmas. Our open-source framework allows developers to build robust, decentralized, fault-tolerant off-chain applications–and secure them on-chain. This enables powerful new, unprecedented use cases, available to all via our open-source code."
      />
    </div>

    <Row align="middle">
      <Col xs={24} lg={10}>
        <Image
          src="/images/Academy/LandingPage/pre-autonolas.svg"
          width={540}
          height={422}
        />
      </Col>
      <Col xs={24} lg={4} className="arrow-image-container">
        <img
          src="/images/Academy/LandingPage/arrow.svg"
          className="arrow-image"
          alt=""
        />
      </Col>
      <Col xs={24} lg={10}>
        <Image
          src="/images/Academy/LandingPage/post-autonolas.svg"
          width={540}
          height={422}
        />
      </Col>
    </Row>
  </WhySection>
);

export default Why;
