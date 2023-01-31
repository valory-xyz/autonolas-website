import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Hero } from "./styles";
import {LinkCard} from 'components/GlobalStyles'

const Whitepaper = () =>
<>
  <Hero>
    <Title className="title">Whitepaper</Title>
    <Row gutter={24}>
      <Col lg={{span: 6, offset: 6}} md={{span: 8, offset: 4}} xs={24}>
        <a href="/documents/whitepaper/autonolas-whitepaper-summary.pdf">
          <LinkCard>
            <Title level={2}>Summary</Title>
          </LinkCard>
        </a>
      </Col>
      <Col lg={6} md={8} xs={24}>
        <a href="/documents/whitepaper/autonolas-whitepaper.pdf">
        <LinkCard>
          <Title level={2}>Whitepaper</Title>
        </LinkCard>
        </a>
      </Col>
    </Row>
    <img className="image" src='/images/pages/whitepaper/glass-element.png' alt="Glass object, encapsulating complexity" />
  </Hero>
</>;

export default Whitepaper;
