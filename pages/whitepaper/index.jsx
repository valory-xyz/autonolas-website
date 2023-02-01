import { Col, Row } from "antd";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;
import { Hero } from "./styles";
import {LinkCard} from 'components/GlobalStyles'
import Meta from "common-util/meta";
import { getHostName } from "common-util/functions";
import { SITE_URL } from "util/constants/site";

const pageSettings = {
  pathname: '/whitepaper',
  title: "Whitepaper",
  description: "Do a deep-dive into Autonolas' vision for autonomy, technical architecture, tokenomics, use cases and governance.",
  imagePath: `${getHostName()}/images/whitepaper/autonolas-whitepaper-meta.png`
}

const Whitepaper = () =>
<>
  <Meta
    meta={{
      siteUrl: `${SITE_URL}${pageSettings.pathname}`,
      title: `${pageSettings.title} | Autonolas`,
      description: pageSettings.description,
      image: pageSettings.imagePath,
    }}
  />
  <Hero>
    <Title className="title">Whitepaper</Title>
    <Row gutter={24}>
      <Col lg={{span: 6, offset: 6}} md={{span: 8, offset: 4}} xs={24}>
        <a href="/documents/whitepaper/autonolas-whitepaper-summary.pdf">
          <LinkCard>
            <img src="/images/whitepaper/autonolas-whitepaper-summary.svg" />
            <Title level={2}>Summary</Title>
          </LinkCard>
        </a>
      </Col>
      <Col lg={6} md={8} xs={24}>
        <a href="/documents/whitepaper/autonolas-whitepaper.pdf">
        <LinkCard>
          <img src="/images/whitepaper/autonolas-whitepaper.svg" />
          <Title level={2}>Whitepaper</Title>
        </LinkCard>
        </a>
      </Col>
    </Row>
    <img className="image" src='/images/pages/whitepaper/glass-element.png' alt="Glass object, encapsulating complexity" />
  </Hero>
</>;

export default Whitepaper;
