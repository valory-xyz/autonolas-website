/* eslint-disable react/no-array-index-key */
import React from 'react';
// import Image from 'next/image';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionTwo, Content } from './styles';

const LIST = [
  {
    imageUrl: 'open-source',
    heading: 'OPEN-SOURCE FRAMEWORK',
    subHeading: 'Django for building autonomous services',
  },
  {
    imageUrl: 'on-chain-protocol',
    heading: 'ON-CHAIN PROTOCOL',
    subHeading: 'For securing autonomous services and taking action on-chain',
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
    <SectionTwo className="section" id="learn">
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
                src={`/images/2WhatIsAutonolas/${item.imageUrl}.png`}
                alt={`${item.heading} Icon`}
              />
            </div>
            <div className="header-text">{item.heading}</div>
            <div className="sub-text">{item.subHeading}</div>
          </div>
        ))}
      </Content>
    </SectionTwo>
  );
};

export default WhatIsAutonolas;
