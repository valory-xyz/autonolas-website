import Image from 'next/image';
import { Col, Row } from 'antd/lib';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import CallToActionButton from '../CallToActionButton';
import { Section } from './styles';

const Content = () => (
  <Section className="section">
    <Header title="What You Will Learn" className="header" />
    <Row align="bottom" className="body">
      <Col xs={24} lg={12}>
        <ul className="custom-bullet-points">
          <li>
            <Description title="How to build your own Autonomous Economic Agents." />
          </li>
          <li>
            <Description title="How to build truly decentralized autonomous off-chain services." />
          </li>
          <li>
            <Description title="How to build your own Autonomous service for a chance to complete our Builder Track, with personalized, expert coaching from the creators of the framework." />
          </li>
        </ul>
      </Col>
      <Col xs={24} lg={12}>
        <Image
          src="/images/Academy/LandingPage/agent-service.png"
          className="agent-service-image"
          width={648}
          height={392}
          alt=" "
        />
      </Col>
    </Row>
    <CallToActionButton />
  </Section>
);

export default Content;
