/* eslint-disable react/no-array-index-key */
import React from 'react';
// import Image from 'next/image';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionThree, Content } from './styles';

const LIST = [
  {
    imageUrl: 'open-source',
    heading: 'OPEN-SOURCE FRAMEWORK',
    subHeading: 'Django for building autonomous services',
  },
  {
    imageUrl: 'on-chain-protocol',
    heading: 'ON-CHAIN PROTOCOL',
    subHeading: 'For running autonomous services and taking action on-chain',
  },
  {
    imageUrl: 'ecosystem',
    heading: 'ECOSYSTEM',
    subHeading: 'Autonomous services in the wild, being used',
  },
];

const WhatIsAutonolas = () => {
  const isMobile = useCheckMobileScreen();
  console.log({ isMobile });

  return (
    <SectionThree className="section section-3" id="what-is-autonolas">
      <Description type={2} title="LEARN" />

      <Header
        className="header"
        title={(
          <>
            What&nbsp;
            <span className="sub-text">is</span>
            &nbsp;Autonolas?
          </>
        )}
      />

      <Content>
        {LIST.map((item, index) => (
          <div className={`column column-${index + 1}`}>
            <div className="img-container">
              <img
                src={`/images/v2/2WhatIsAutonolas/${item.imageUrl}.png`}
                alt={`${item.heading} Icon`}
              />
            </div>
            <div className="header-text">{item.heading}</div>
            <div className="sub-text">{item.subHeading}</div>
          </div>
        ))}
      </Content>
    </SectionThree>
  );
};

export default WhatIsAutonolas;
