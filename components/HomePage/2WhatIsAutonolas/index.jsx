/* eslint-disable react/no-array-index-key */
import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionThree, Content } from './styles';

const LIST = [
  {
    imageUrl: '',
    heading: 'OPEN-SOURCE FRAMEWORK',
    subHeading: 'Django for building autonomous services',
  },
  {
    imageUrl: '',
    heading: 'ON-CHAIN PROTOCOL',
    subHeading: 'For running autonomous services and taking action on-chain',
  },
  {
    imageUrl: '',
    heading: 'ECOSYSTEM',
    subHeading: 'Autonomous services in the wild, being used',
  },
];

const WhatIsAutonolas = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionThree className="section section-3" id="what-is-autonolas">
      <Description type={2} title="LEARN" />

      <Header className="header" title="What is Autonolas?" />

      <Content>
        <img
          src={`/images/what-is-autonolas/logo${isMobile ? '-mobile' : ''}.png`}
          alt="What is Autonolas logo"
          loading="lazy"
        />

        <div>
          {LIST.map((item, index) => (
            <Description
              key={`what-is-autonolas-list-${index}`}
              className="text"
              type={3}
              title={item.heading}
              subTitle={item.subHeading}
            />
          ))}
        </div>
      </Content>
    </SectionThree>
  );
};

export default WhatIsAutonolas;
