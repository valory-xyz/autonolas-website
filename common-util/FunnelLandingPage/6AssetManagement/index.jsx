import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Divider, Grid,
} from 'antd';
import get from 'lodash/get';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { HeaderText } from 'common-util/styles';
import {
  BENEFITS_LIST,
  HOW_TO_BUILD_ONE,
  HOW_IT_WORKS,
  FEATURES,
} from './data';

import Balancer from './Balancer';
import CallToActionButton from '../Hero/CallToActionButton';

// part of the homepage
import WhatIsAutonolas from '../../../components/Learn/2WhatIsAutonolas';
import DecentralizedAndSophisticated from '../../../components/Learn/3DecentralizedAndSophisticated';
import HowDoAutonolasWork from '../../../components/Learn/4HowDoAutonolasWork';
import QuickIntroArticles from '../../../components/Learn/5QuickIntroArticles';
import { LearnContainer } from '../../../components/HomePage/styles';

import { dividerCss } from '../styles';
import {
  AssetManagementContainer,
  FullImage,
  BenefitsContainer,
  HowItWorksAndBuildOneSection,
  HowItWorksContainer,
  HowToBuildOneContainer,
  Features,
  GetStartedContainer,
} from './styles';

const { useBreakpoint } = Grid;

const getFeatures = list => (
  <>
    {list.map(({ name, desc, imageUrl }, index) => (
      <Col
        key={`feature-${index + 1}`}
        xs={12}
        md={8}
        lg={8}
        className="each-feature"
      >
        <div className="img-container">
          <FullImage
            src={`images/funnels/6AssetManagement/features/${imageUrl}`}
            alt=" "
          />
        </div>
        <HeaderText>{name}</HeaderText>
        <div>{desc}</div>
      </Col>
    ))}
  </>
);

const AssetManagement = ({ educationArticles, funnel }) => {
  const screens = useBreakpoint();
  const { cta_href, cta_btn_text } = get(funnel, 'attributes') || {};

  return (
    <AssetManagementContainer>
      <BenefitsContainer className="section">
        <Header className="header" title="Benefits:" />
        <Row gutter={[32, 0]}>
          {BENEFITS_LIST.map(({
            id, name, desc, imageUrl,
          }) => (
            <Col key={id} xs={12} md={6} lg={6} className="each-benefit">
              <div className="img-container">
                <FullImage
                  src={`images/funnels/6AssetManagement/benefits/${imageUrl}`}
                  alt=" "
                />
              </div>
              <HeaderText>{name}</HeaderText>
              <div>{desc}</div>
            </Col>
          ))}
        </Row>
      </BenefitsContainer>

      <HowItWorksAndBuildOneSection>
        <HowItWorksContainer className="section">
          <Header className="header" title="How it works:" />
          <Row gutter={[32, 0]}>
            {HOW_IT_WORKS.map(({ desc, imageUrl, imgStyle }, index) => (
              <Col
                key={`how-it-works-${index + 1}`}
                xs={8}
                md={index === 1 ? 10 : 7}
                lg={index === 1 ? 10 : 7}
                className="each-how-it-works"
              >
                <div className="img-container" style={imgStyle}>
                  <img
                    src={`images/funnels/6AssetManagement/HowItWorks/${imageUrl}`}
                    alt=" "
                  />
                </div>
                <Description type={2} title={desc || ''} />
              </Col>
            ))}
          </Row>
        </HowItWorksContainer>

        <Divider style={dividerCss} />

        <HowToBuildOneContainer className="section">
          <Header className="header" title="How to build one:" />
          <Row gutter={[32, 0]}>
            {HOW_TO_BUILD_ONE.map(
              ({
                name, desc, imageUrl, imgStyle,
              }, index) => (
                <Col
                  key={`how-to-build-one-${index + 1}`}
                  xs={24}
                  md={12}
                  lg={6}
                  className="each-how-to-build"
                >
                  <div className="img-container" style={imgStyle}>
                    <img
                      src={`images/funnels/6AssetManagement/HowToBuildOne/${imageUrl}`}
                      alt=" "
                    />
                  </div>
                  <div>
                    <HeaderText className="header-text">{name}</HeaderText>
                    <Description type={2} title={desc || ''} />
                  </div>
                </Col>
              ),
            )}
          </Row>
        </HowToBuildOneContainer>
      </HowItWorksAndBuildOneSection>

      <Features className="section">
        <Header className="header" title="Features:" />
        <Row gutter={[32, 0]}>
          {getFeatures(FEATURES.slice(0, 5))}
          {!(screens.md || screens.xs) && <Divider style={dividerCss} />}
          {getFeatures(FEATURES.slice(5, 10))}
        </Row>
      </Features>

      <Balancer />

      <LearnContainer>
        <WhatIsAutonolas />
        <DecentralizedAndSophisticated />
        <HowDoAutonolasWork />
        <QuickIntroArticles educationArticles={educationArticles} />
      </LearnContainer>

      <GetStartedContainer className="section">
        <Header
          className="header"
          title="Get Started Building The Next Generation Of DeFi Asset Management"
        />
        <CallToActionButton href={cta_href} btnText={cta_btn_text} />
      </GetStartedContainer>
    </AssetManagementContainer>
  );
};

AssetManagement.propTypes = {
  educationArticles: PropTypes.instanceOf(Array),
  funnel: PropTypes.instanceOf(Object).isRequired,
};

AssetManagement.defaultProps = {
  educationArticles: [],
};

export default AssetManagement;
