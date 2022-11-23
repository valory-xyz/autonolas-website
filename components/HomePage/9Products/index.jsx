import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import CustomButton from 'common-util/Button';
import Header from 'common-util/Header';
import React from 'react';
import Image from 'next/image';
import { COLOR } from 'util/theme';
import { EcosystemServicesSection, HeadersRow } from './styles';

const BASE_IMAGES_PATH = '/images/10EcosystemServices/';
const CORE = [
  {
    id: 'open-autonomy',
    imageFilename: 'open-autonomy-framework.png',
    title: 'Open Autonomy',
    description: 'Framework for building any autonomous service',
    link: 'https://docs.autonolas.network/',
    color: COLOR.PURPLE,
  },
  {
    id: 'protocol',
    imageFilename: 'protocol.png',
    title: 'Protocol',
    description: 'Register and manage autonomous services',
    link: 'https://protocol.autonolas.network/',
    color: COLOR.PURPLE,
  },
  {
    id: 'el-collectooorr',
    imageFilename: 'el-col.png',
    title: 'El Collectooorr',
    description: 'Get passive exposure to new generative art collections',
    link: 'https://elcollectooorr.art/',
    color: COLOR.GREEN_2,
  },
  {
    id: 'autonolas-contribute',
    imageFilename: 'alter-orbis.png',
    title: 'Autonolas Contribute',
    description:
      'Strenghten the Autonolas ecosystem to earn points and upgrade your Alter Orbis character',
    link: 'https://www.autonolas.network/community-leaderboard',
    color: COLOR.GREEN_2,
  },

  // 2nd part
  {
    id: 'smart-managed-pools',
    imageFilename: 'smart-managed-pools.png',
    title: 'Smart Managed Pools',
    description: 'Build autonomous asset management products',
    link: 'https://www.autonolas.network/autonomous-asset-management-infra',
    color: COLOR.PURPLE,
  },
  {
    id: 'custom-oracle-infra',
    imageFilename: 'custom-oracle.png',
    title: 'Custom Oracle Infra',
    description: 'Build any oracle you can imagine',
    link: 'https://oracle.autonolas.network/',
    color: COLOR.PURPLE,
  },
];

const Products = () => (
  <EcosystemServicesSection id="products" className="section">
    <Header title="Products" />
    <HeadersRow>
      <Col lg={12}>
        <h3>For Developers</h3>
      </Col>
      <Col lg={12}>
        <h3>For Users</h3>
      </Col>
    </HeadersRow>

    <Row gutter={16} className="ecosystem-services-list" style={{ display: 'none' }}>
      {CORE.map(ecosystemService => {
        const {
          id, imageFilename, title, description, link, buttonTitle,
        } = ecosystemService;

        return (
          <Col xs={24} lg={12} key={id} className="ecosystem-service">
            <Image
              src={BASE_IMAGES_PATH + imageFilename}
              className="ecosystem-service-image"
              width="668px"
              height="356px"
            />
            <Title className="ecosystem-service-title">{title}</Title>
            <Text className="ecosystem-service-description">{description}</Text>
            <br />
            <a href={link} target="_blank" rel="noopener noreferrer">
              <CustomButton title={buttonTitle} />
            </a>
          </Col>
        );
      })}
    </Row>
  </EcosystemServicesSection>
);

export default Products;
