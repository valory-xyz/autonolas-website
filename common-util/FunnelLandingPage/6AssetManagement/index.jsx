import React from 'react';
import Header from 'common-util/Header';
import { HeaderText } from 'common-util/styles';
import { Row, Col } from 'antd';
import { AssetManagementContainer, BenefitsContainer } from './styles';

const BENEFITS_LIST = [
  {
    id: 'b-1',
    name: 'Attract More Liquidity',
    desc: 'Build novel products and keep your edge in the asset management market',
    imageUrl: 'attract-more-liquidity.png',
  },
  {
    id: 'b-1',
    name: 'Stay Compliant',
    desc: 'Run automated funds without breaking any laws',
    imageUrl: 'stay-compliant.png',
  },
  {
    id: 'b-1',
    name: 'Take Control',
    desc: 'Plan for the future with total control and flexibility of your product infrastructure',
    imageUrl: 'take-control.png',
  },
  {
    id: 'b-1',
    name: 'Scale',
    desc: 'Deploy and manage more products, all with high-uptime',
    imageUrl: 'scale.png',
  },
];

const AssetManagement = () => (
  <AssetManagementContainer>
    <BenefitsContainer className="section">
      <Header className="header" title="Benefits:" />

      <Row gutter={[32, 0]}>
        {BENEFITS_LIST.map(({
          id, name, desc, imageUrl,
        }) => (
          <Col key={id} xs={24} md={6} lg={6} className="each-benefit">
            <div className="img-container">
              <img
                src={`images/funnels/6AssetManagement/${imageUrl}`}
                alt=" "
              />
            </div>
            <HeaderText>{name}</HeaderText>
            <div>{desc}</div>
          </Col>
        ))}
      </Row>
      <div />
    </BenefitsContainer>
  </AssetManagementContainer>
);

export default AssetManagement;
