import React from 'react';
import Header from 'common-util/Header';
import { HeaderText } from 'common-util/styles';
import { Row, Col, Divider } from 'antd';
import { BENEFITS_LIST, FEATURES } from './data';
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

const AssetManagement = () => (
  <AssetManagementContainer>
    <HowItWorksAndBuildOneSection>
      <HowItWorksContainer className="section">
        <Header className="header" title="How it works:" />
      </HowItWorksContainer>

      <HowToBuildOneContainer className="section">
        <Header className="header" title="How to build one:" />
      </HowToBuildOneContainer>
    </HowItWorksAndBuildOneSection>

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

    <Features className="section">
      <Header className="header" title="Features:" />
      <Row gutter={[32, 0]}>
        {getFeatures(FEATURES.slice(0, 5))}
        <Divider style={dividerCss} />
        {getFeatures(FEATURES.slice(5, 10))}
      </Row>
    </Features>
  </AssetManagementContainer>
);

export default AssetManagement;
