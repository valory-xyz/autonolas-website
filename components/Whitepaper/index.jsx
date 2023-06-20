import { Col, Row, Typography } from 'antd/lib';
import { LinkCard } from 'components/GlobalStyles';
import { Hero } from './styles';

const { Title } = Typography;

const Whitepaper = () => (
  <Hero>
    <Title className="title">Whitepaper</Title>
    <Row gutter={24}>
      <Col lg={{ span: 6, offset: 3 }} md={{ span: 8 }} xs={24}>
        <a href="/documents/whitepaper/Whitepaper Summary v1.0.pdf">
          <LinkCard>
            <img
              src="/images/whitepaper/autonolas-whitepaper-summary.svg"
              alt="Autonolas whitepaper summary"
            />
            <Title level={2}>Summary</Title>
          </LinkCard>
        </a>
      </Col>

      <Col lg={6} md={8} xs={24}>
        <a href="/documents/whitepaper/Whitepaper v1.0.pdf">
          <LinkCard>
            <img
              src="/images/whitepaper/autonolas-whitepaper.svg"
              alt="Autonolas whitepaper"
            />
            <Title level={2}>Whitepaper</Title>
          </LinkCard>
        </a>
      </Col>

      <Col lg={6} md={8} xs={24}>
        <a href="/documents/whitepaper/Autonolas_Tokenomics_Core_Technical_Document.pdf">
          <LinkCard>
            <img
              src="/images/whitepaper/autonolas-tokenomics.png"
              alt="Autonolas Tokenomics"
            />
            <Title level={2}>Tokenomics</Title>
          </LinkCard>
        </a>
      </Col>
    </Row>
    <img
      className="image"
      src="/images/pages/whitepaper/glass-element.png"
      alt="Glass object, encapsulating complexity"
    />
  </Hero>
);

export default Whitepaper;
