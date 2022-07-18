/* eslint-disable jsx-a11y/control-has-associated-label */
import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import CustomButton from 'common-util/Button';
import Header from 'common-util/Header';
import React from 'react';
import Image from 'next/image';
import { EcosystemServicesSection } from './styles';

const BASE_IMAGES_PATH = '/images/10EcosystemServices/';
const ecosystemServices = [
  {
    id: 'oracle',
    imageFilename: 'oracle.png',
    title: 'Oracle',
    description:
      "Autonolas' oracle robustly reports data on-chain on the Polygon network. The code can be forked, and it is the first fully-customizable and protocol-ownable oracles on the market.",
    link: 'https://oracle-frontend.autonolas.tech/',
    buttonTitle: 'See it live',
  },
  {
    id: 'el-collectooorr',
    imageFilename: 'el-collectooorr.png',
    title: 'El Collectooor',
    description:
      'Coming soon. El Collectooorr helps you passively build strong exposure to new generative Art Blocks pieces as they hit the market.',
    link: 'https://elcollectooorr.art',
    buttonTitle: 'Visit landing page',
  },
];

const EcosystemServices = () => (
  <EcosystemServicesSection id="use">
    <Header title="Ecosystem Services" />
    <Row gutter={16} className="ecosystem-services-list">
      {ecosystemServices.map(ecosystemService => {
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

export default EcosystemServices;
