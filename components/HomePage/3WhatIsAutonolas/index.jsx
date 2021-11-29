import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionThree, Content } from './styles';

const WhatIsAutonolas = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionThree className="section section-3" id="what-is-autonolas">
      <Header className="header" title="What is Autonolas?" />

      <Content>
        <img
          src={`/images/what-is-autonolas/logo${isMobile ? '-mobile' : ''}.png`}
          alt="What is Autonolas logo"
          loading="lazy"
        />
        <Description
          className="text text-1"
          type={3}
          title="Autonolas is a platform for extending the cryptonative capabilities of
          smart contract applications into the off-chain space."
        />
        <Description
          className="text text-2"
          type={3}
          title="We explore open possibilities of crypto apps with our generalized
          middleware platform."
        />
      </Content>
    </SectionThree>
  );
};

export default WhatIsAutonolas;
