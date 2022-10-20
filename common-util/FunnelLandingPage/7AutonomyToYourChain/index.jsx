import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import get from 'lodash/get';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { HeaderText } from 'common-util/styles';
import { BENEFITS_LIST, WHAT_IT_INVOLVES, EXISTING_SERVICE } from './data';

// part of the homepage
import WhoDoesAutonolasHelp from '../../../components/HomePage/1WhoDoesAutonolasHelp';
import WhatIsAutonolas from '../../../components/HomePage/2WhatIsAutonolas';
import DecentralizedAndSophisticated from '../../../components/HomePage/3DecentralizedAndSophisticated';
import HowDoAutonolasWork from '../../../components/HomePage/4HowDoAutonolasWork';
import QuickIntroArticles from '../../../components/HomePage/5QuickIntroArticles';
import { LearnContainer } from '../../../components/HomePage/styles';

import CallToActionButton from '../Hero/CallToActionButton';
import {
  AutonomyToYourChainContainer,
  FullImage,
  BenefitsContainer,
  WhatItInvolves,
  ExistingContainer,
  BringPowerContainer,
} from './styles';

const AutonomyToYourChain = ({ educationArticles, funnel }) => {
  const { cta_href, cta_btn_text } = get(funnel, 'attributes') || {};

  return (
    <AutonomyToYourChainContainer>
      <BenefitsContainer className="section">
        <Header className="header" title="Benefits:" />
        <Row justify="space-between">
          {BENEFITS_LIST.map(({
            id, name, desc, imageUrl,
          }) => (
            <Col key={id} xs={24} md={6} lg={8} className="each-benefit">
              <div className="img-container">
                <FullImage
                  src={`images/funnels/7AutonomyToYourChain/benefits/${imageUrl}`}
                  alt=" "
                />
              </div>

              <div>
                <HeaderText>{name}</HeaderText>
                <div className="desc">{desc}</div>
              </div>
            </Col>
          ))}
        </Row>
      </BenefitsContainer>

      <WhatItInvolves className="section">
        <Header className="header" title="What it involves:" />
        <Row>
          {WHAT_IT_INVOLVES.map(({
            name, desc, imageUrl, imgStyle,
          }, index) => (
            <Col
              key={`what-it-involves-${index + 1}`}
              xs={24}
              md={8}
              lg={8}
              className="each-what-it-involves"
            >
              <div className="img-container" style={imgStyle}>
                <img
                  src={`images/funnels/7AutonomyToYourChain/WhatItInvolves/${imageUrl}`}
                  alt=" "
                />
              </div>
              <div className="details-row">
                <HeaderText className="header-text">{name}</HeaderText>
                <Description type={4} title={desc || ''} />
              </div>
            </Col>
          ))}
        </Row>
      </WhatItInvolves>

      <ExistingContainer className="section">
        <Header
          className="header"
          title="Existing Services who could come to your chain"
        />

        <Row gutter={[0, 0]}>
          {EXISTING_SERVICE.map(({
            name, desc, imageUrl, imgStyle,
          }, index) => (
            <Col
              key={`existing-service-${index + 1}`}
              xs={24}
              md={12}
              lg={12}
              className="each-existing-service"
            >
              <div className="img-container" style={imgStyle}>
                <img
                  src={`images/funnels/7AutonomyToYourChain/ExistingServices/${imageUrl}`}
                  alt=" "
                />
              </div>
              <div className="details-row">
                <div className="header-text">{name}</div>
                <Description type={4} title={desc || ''} />
              </div>
            </Col>
          ))}
        </Row>
      </ExistingContainer>

      <LearnContainer>
        <WhoDoesAutonolasHelp />
        <WhatIsAutonolas />
        <DecentralizedAndSophisticated />
        <HowDoAutonolasWork />
        <QuickIntroArticles educationArticles={educationArticles} />
      </LearnContainer>

      <BringPowerContainer className="section">
        <Header
          className="header"
          title="Bring the Power of Autonomy to your Chain"
        />
        <CallToActionButton href={cta_href} btnText={cta_btn_text} />
      </BringPowerContainer>
    </AutonomyToYourChainContainer>
  );
};

AutonomyToYourChain.propTypes = {
  educationArticles: PropTypes.instanceOf(Array),
  funnel: PropTypes.instanceOf(Object).isRequired,
};

AutonomyToYourChain.defaultProps = {
  educationArticles: [],

};

export default AutonomyToYourChain;
