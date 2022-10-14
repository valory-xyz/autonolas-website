import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Divider } from 'antd';
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

// part of the homepage
import WhoDoesAutonolasHelp from '../../../components/HomePage/1WhoDoesAutonolasHelp';
import WhatIsAutonolas from '../../../components/HomePage/2WhatIsAutonolas';
import DecentralizedAndSophisticated from '../../../components/HomePage/3DecentralizedAndSophisticated';
import HowDoAutonolasWork from '../../../components/HomePage/4HowDoAutonolasWork';
import QuickIntroArticles from '../../../components/HomePage/5QuickIntroArticles';
import { LearnContainer } from '../../../components/HomePage/styles';

import {
  dividerCss,
  AssetManagementContainer,
  FullImage,
  BenefitsContainer,
  HowItWorksAndBuildOneSection,
  HowItWorksContainer,
  HowToBuildOneContainer,
  Features,
} from './styles';

const getFeatures = list => (
  <>
    {list.map(({ name, desc, imageUrl }, index) => (
      <Col
        key={`feature-${index + 1}`}
        xs={24}
        md={6}
        lg={6}
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

const AssetManagement = ({ educationArticles }) => (
  <AssetManagementContainer>
    <BenefitsContainer className="section">
      <Header className="header" title="Benefits:" />
      <Row gutter={[32, 0]}>
        {BENEFITS_LIST.map(({
          id, name, desc, imageUrl,
        }) => (
          <Col key={id} xs={24} md={6} lg={6} className="each-benefit">
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
              xs={24}
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
          {HOW_TO_BUILD_ONE.map(({
            name, desc, imageUrl, imgStyle,
          }, index) => (
            <Col
              key={`how-to-build-one-${index + 1}`}
              xs={24}
              md={6}
              lg={6}
              className="each-how-to-build"
            >
              <div className="img-container" style={imgStyle}>
                <img
                  src={`images/funnels/6AssetManagement/HowToBuildOne/${imageUrl}`}
                  alt=" "
                />
              </div>
              <HeaderText className="header-text">{name}</HeaderText>
              <Description type={2} title={desc || ''} />
            </Col>
          ))}
        </Row>
      </HowToBuildOneContainer>
    </HowItWorksAndBuildOneSection>

    <Features className="section">
      <Header className="header" title="Features:" />
      <Row gutter={[32, 0]}>
        {getFeatures(FEATURES.slice(0, 5))}
        <Divider style={dividerCss} />
        {getFeatures(FEATURES.slice(5, 10))}
      </Row>
    </Features>

    <Balancer />

    <LearnContainer>
      <WhoDoesAutonolasHelp />
      <WhatIsAutonolas />
      <DecentralizedAndSophisticated />
      <HowDoAutonolasWork />
      <QuickIntroArticles educationArticles={educationArticles} />
    </LearnContainer>
  </AssetManagementContainer>
);

AssetManagement.propTypes = {
  educationArticles: PropTypes.instanceOf(Array),
};

AssetManagement.defaultProps = {
  educationArticles: [],
};

export default AssetManagement;
