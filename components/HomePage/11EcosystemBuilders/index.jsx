import { Col } from 'antd/lib';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { HeaderText } from 'common-util/styles';
import { SectionEcosystemBuilders, Container, HeadersRow } from './styles';

const LIST = [
  {
    imageUrl: 'docs',
    heading: 'Valory',
    subHeading:
      'Valory built the core technology behind Autonolas. The team is a VC-backed group of engineers, researchers and commercial thinkers. Valory is the expert in DAO-owned, decentralized off-chain systems, and is the right choice for your next project.',
    component: (
      <div className="custom-component-section">
        <a
          href="https://www.valory.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
        >
          Website
        </a>

        <div className="action-btn">
          <a href="mailto:bd@valory.xyz">
            <Button title="get support with your project" type="black" />
          </a>
        </div>

      </div>
    ),
  },
  {
    imageUrl: 'dev-academy',
    heading: 'Want to help teams build autonomous services?',
    component: (
      <div>
        <a
          href="https://discord.com/invite/RHY6eJ35ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Autonolas Discord
        </a>
        &nbsp; and let the community know!
      </div>
    ),
  },
];

const WhyBuildOnAutonolas = () => (
  <SectionEcosystemBuilders className="section" id="ecosystem-builders">
    <Description type={2} title="ECOSYSTEM BUILDER" />

    <Header className="header" title="Who’s pushing the autonomous edge?" />

    <div style={{ maxWidth: '500px' }}>
      Here are the teams developing Autonolas’ core frameworks, infrastructure
      and products. Get help with your project.
    </div>

    <Container>
      <HeadersRow>
        {LIST.map(({
          heading, subHeading, imageUrl, component,
        }, index) => (
          <Col key={imageUrl} lg={12} xs={24}>
            <div className={`column column-${index + 1}`}>

              <div className="img-container-custom">
                <img
                  src={`/images/7StartBuilding/${imageUrl}.png`}
                  alt={`${heading} Icon`}
                />
              </div>
              <div className="text-content">
                <HeaderText>{heading}</HeaderText>
                {subHeading && (

                <div className="sub-text">{subHeading}</div>
                )}
                {component}
              </div>
            </div>
          </Col>
        ))}
      </HeadersRow>
    </Container>
  </SectionEcosystemBuilders>
);

export default WhyBuildOnAutonolas;
