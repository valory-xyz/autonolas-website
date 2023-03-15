// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Typography, Row, Col } from 'antd/lib';
import { kebabCase } from 'lodash';
import { META_TAGS_INFO, SITE_URL } from 'util/constants/site';
import { getProduct } from 'common-util/api';
import Meta from 'common-util/meta';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { ToolkitPage, ActionButtons } from '../Toolkit';
import { IMPACT_EVALUATORS, FEATURES, MORE_INFO } from './data';
import { IEKitContainer, TitleSubL1 } from './styles';

const { Title, Paragraph } = Typography;

const BASE_IMAGES_PATH = '/images/products/screens/iekit/icons/';

export const IEKit = () => {
  const router = useRouter();
  const { pathname } = router;

  const iekit = getProduct('iekit');
  iekit.title = 'Start experimenting with Impact Evaluators';

  return (
    <>
      <Meta
        meta={{
          siteUrl: `${SITE_URL}${pathname}`,
          title: `${iekit.title} | Autonolas`,
          description: iekit.description,
          image: META_TAGS_INFO.image,
        }}
      />

      <ToolkitPage product={iekit} />

      <IEKitContainer>
        <div className="section iekit-section-1 grey-bg">
          <Title level={2}>See IEKit in action</Title>

          <iframe
            title="IEKit Demo"
            src="https://drive.google.com/file/d/1qupKJ4Nqm7VYlqrVhLnFVIZ2NSjYZ38b/preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            className="youtube-iframe"
          />

          <TitleSubL1 className="h2-impact">
            <div>Experiment with Impact Evaluators.</div>
            <div>Make a difference.</div>
          </TitleSubL1>
          <div className="img-container">
            <img
              src="/images/products/screens/iekit/LP-IEKit-image.png"
              alt=" "
            />
          </div>

          <div className="list-details">
            <Row justify="space-between" gutter={[32, 32]}>
              {IMPACT_EVALUATORS.map(ie => (
                <Col xs={24} lg={12} key={kebabCase(ie.title)}>
                  <Image
                    src={`${BASE_IMAGES_PATH + ie.id}.png`}
                    width="94px"
                    height="94px"
                    alt={`${ie.title}`}
                  />
                  <h3>{ie.title}</h3>
                  <p>{ie.description}</p>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="section iekit-section-2">
          <TitleSubL1>Features</TitleSubL1>

          <div className="list-features">
            <Row justify="space-between" gutter={[32, 32]}>
              {FEATURES.map(ie => (
                <Col xs={24} lg={12} key={kebabCase(ie.title)}>
                  <Image
                    src={`${BASE_IMAGES_PATH + ie.id}.png`}
                    width="108px"
                    height="108px"
                    alt={`${ie.title}`}
                  />
                  <h3>{ie.title}</h3>
                  <p>{ie.description}</p>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="section iekit-section-3 grey-bg">
          <TitleSubL1 level={2}>What is an Impact Evaluator?</TitleSubL1>
          <Paragraph style={{ maxWidth: 800 }}>
            Watch this video by Joel Thorstensson, CTO and Co-founder of 3Box
            Labs, to learn more about Impact Evaluators:
          </Paragraph>
          <iframe
            title="Learn more about Impact Evaluators"
            src="https://www.youtube.com/embed/95TzYSSZN9s"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            className="youtube-iframe"
          />
        </div>

        <div className="section iekit-section-4">
          <TitleSubL1>More Info</TitleSubL1>
          <br />

          {MORE_INFO.map(ie => (
            <div key={ie.id}>
              <div className="more-info-logo">{ie.logoComponent}</div>
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

        <div className="section iekit-section-5 grey-bg">
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

        <div className="section iekit-section-6">
          <Title level={2}>Learn More</Title>
          <ActionButtons product={iekit} />
        </div>
      </IEKitContainer>
    </>
  );
};

// IEKit.propTypes = {
//   product: PropTypes.instanceOf(Object).isRequired,
// };
