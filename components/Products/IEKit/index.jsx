// import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd/lib';
import { kebabCase } from 'lodash';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { IMPACT_EVALUATORS, FEATURES, MORE_INFO } from './data';
import { IEKitContainer } from './styles';

const { Title, Paragraph } = Typography;

export const IEKit = () => (
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

// IEKit.propTypes = {
//   product: PropTypes.instanceOf(Object).isRequired,
// };
