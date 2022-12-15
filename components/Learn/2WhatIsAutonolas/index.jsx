import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { SectionTwo, Content } from './styles';

const LIST = [
  {
    imageUrl: 'open-source',
    heading: 'OPEN-SOURCE FRAMEWORK',
    subHeading: 'Ruby on Rails for building autonomous services',
  },
  {
    imageUrl: 'on-chain-protocol',
    heading: 'ON-CHAIN PROTOCOL',
    subHeading: 'For securing autonomous services and taking action on-chain',
  },
  {
    imageUrl: 'ecosystem',
    heading: 'ECOSYSTEM',
    subHeading: 'Autonomous services running and being used by DAOs',
  },
];

const WhatIsAutonolas = () => (
  <SectionTwo className="section" id="what-is-autonolas">
    <Description type={2} title="LEARN" />

    <Header
      className="header"
      title={(
        <>
          What&nbsp;
          <span className="sub-text">is&nbsp;</span>
          Autonolas?
        </>
      )}
    />

    <Content>
      {LIST.map((item, index) => (
        <div key={item.imageUrl} className={`column column-${index + 1}`}>
          <div className="img-container">
            <img
              src={`/images/2WhatIsAutonolas/${item.imageUrl}.png`}
              alt={`${item.heading} Icon`}
            />
          </div>
          <div className="text-content">
            <div className="header-text">{item.heading}</div>
            <div className="sub-text">{item.subHeading}</div>
          </div>
        </div>
      ))}
    </Content>
  </SectionTwo>
);

export default WhatIsAutonolas;
