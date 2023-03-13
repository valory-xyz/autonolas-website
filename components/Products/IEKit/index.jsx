import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd/lib';
// import { COLOR } from 'util/theme';
// import Button from 'common-util/Button';
// import { DiscordLogo } from 'common-util/svg';
import { kebabCase } from 'lodash';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { IEKitContainer } from './styles';

const { Title, Paragraph } = Typography;

const IMPACT_EVALUATORS = [
  {
    emoji: '🛡️',
    title: 'Transparent',
    description:
      'With open-source code, you can fork, tweak and show all the code being run, maintaining credibility over time.',
  },
  {
    emoji: '🚀',
    title: 'Powerful',
    description:
      ' Built on Autonolas, there is no upper-end to the complexity of what can be processed, and IEKit can grow uncapped with your org.',
  },
  {
    emoji: '🌐',
    title: 'Decentralized',
    description:
      'Can be operated in a full-stack decentralized way, reducing the liability of running the organization as you grow.',
  },
  {
    emoji: '🧩',
    title: 'Composable',
    description:
      'Easily add measurable actions to your IE via the Autonolas protocol as other developers add them to the broader ecosystem.',
  },
];

export const FEATURES = [
  {
    emoji: '🛠️',
    title: 'Framework',
    description:
      'IEKit is a framework – no need to do any boilerplate development work, so you can get started quickly.',
  },
  {
    emoji: '🌐',
    title: 'Transparent',
    description:
      "IEKit is transparent – fork, tweak and show all the open-source code that's being run, important for maintaining credibility over time.",
  },
  {
    emoji: '📡',
    title: 'Decentralized',
    description:
      'IEKit is decentralized – can be operated in a full-stack decentralized way, reducing the liability of running the organization as you grow.',
  },
  {
    emoji: '🧩',
    title: 'Extensible',
    description:
      'IEKit is highly extensible & composable – as other developers add measurable actions, you can easily add them to your own IE via the Autonolas protocol.',
  },
  {
    emoji: '💻',
    title: 'Powerful Compute',
    description:
      'IEKit has powerful compute – compute is run via Autonolas, and therefore there is no upper-end to the complexity of what can be processed.',
  },
  {
    emoji: '🧊',
    title: 'Flexible',
    description:
      'IEKit is flexible – built as an open-source project, it can adapt to a range of use cases and be modified as needed.',
  },
];

export const MORE_INFO = [
  {
    id: 'oraclekit',
    title: 'About Ceramic',
    description:
      "Ceramic is a decentralized data storage network that provides a tamper-evident, immutable, and censorship-resistant foundation for building data-driven applications. It's the perfect substrate for Impact Evaluators built with IEKit.",
    liveLink: {
      url: 'https://oracle.autonolas.network/price',
      external: false,
    },
  },
  {
    id: 'oraclekit',
    title: 'About Autonolas',
    description:
      "Autonolas is a suite of tools for building off-chain, decentralized servers which can be directly owned by your DAO. It's what powers the backend of Impact Evaluators built with IEKit.",
    liveLink: {
      url: 'https://oracle.autonolas.network/price',
      external: false,
    },
  },
];

export const IEKit = ({ product }) => {
  // const { category, title, description } = product || {};
  console.log(product);

  return (
    <IEKitContainer>
      <div className="section iekit-section-1 grey-bg">
        <Title level={2}>See IEKit in action</Title>
        <iframe
          title="IEKit Demo"
          src="https://www.youtube.com/embed/95TzYSSZN9s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
          className="youtube-iframe"
        />

        <Title level={2} className="h2-impact">
          <div>Experiment with Impact Evaluators.</div>
          <div>Make a difference.</div>
        </Title>
        <div className="img-container">
          <img src="/images/products/screens/iekit/dummy-image.png" alt=" " />
        </div>

        <div className="list-details">
          <Row justify="space-between" gutter={[32, 32]}>
            {IMPACT_EVALUATORS.map(ie => (
              <Col xs={24} lg={12} key={kebabCase(ie.title)}>
                <h3>
                  <span>{ie.emoji}</span>
                  {ie.title}
                </h3>
                <p>{ie.description}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="section iekit-section-2">
        <Title level={2}>Features</Title>

        <div className="list-features">
          <Row justify="space-between" gutter={[32, 32]}>
            {FEATURES.map(ie => (
              <Col xs={24} lg={12} key={kebabCase(ie.title)}>
                <div>{ie.emoji}</div>
                <h3>{ie.title}</h3>
                <p>{ie.description}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="section iekit-section-3 grey-bg">
        <Title level={2}>What is an Impact Evaluator?</Title>
        <Paragraph>
          Watch this video by Joel Thorstensson, CTO and Co-founder of 3Box
          Labs, to learn more about Impact Evaluators:
        </Paragraph>
        <iframe
          title="IEKit Demo"
          src="https://www.youtube.com/embed/95TzYSSZN9s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
          className="youtube-iframe"
        />
      </div>

      <div className="section iekit-section-4">
        <Title level={2}>More Info</Title>

        {MORE_INFO.map(ie => (
          <div key={ie.id}>
            <img
              src={`/images/products/icons/${ie.id}.svg`}
              alt=" "
              className="product-icon"
            />
            <Title level={2} className="product-title">
              {ie.title}
            </Title>
            <Paragraph>{ie.description}</Paragraph>
            <CallToActionButton
              href={ie.liveLink.url}
              external={ie.liveLink.external}
              btnText="Learn more"
              className="product-cta-btn"
            />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>

      <div className="section iekit-section-5">
        <Title level={2}>Built With</Title>

        <Paragraph>
          IEKit was built with the support of a grant from&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ceramic.network"
          >
            Ceramic
          </a>
          &nbsp;as part of their first grant program, called &quot;Origins
          Cohort&quot;.
        </Paragraph>

        <Paragraph>
          You can read the original proposal for IEKit on the&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.ceramic.network/t/proposal-iekit-a-modular-toolkit-for-building-impact-evaluators/553"
          >
            Ceramic Forum
          </a>
          .
        </Paragraph>
      </div>
    </IEKitContainer>
  );
};

IEKit.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
