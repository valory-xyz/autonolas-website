import React from 'react';
import Header from 'common-util/Header';
import { SectionThree } from '../styles';

const WhatIsAutonolas = () => (
  <SectionThree className="section section-3" id="what-is-autonolas">
    <Header className="header" title="What is Autonolas?" />

    <div className="content">
      <img src="/images/what-is-autonolas/logo.png" alt="What is Autonolas logo" />
      <div className="text text-1 description-l-3">
        Autonolas is a platform for extending the cryptonative capabilities of
        smart contract applications into the off-chain space.
      </div>
      <div className="text text-2 description-l-3">
        We explore open possibilities of crypto apps with our generalized
        middleware platform.
      </div>
    </div>
  </SectionThree>
);

export default WhatIsAutonolas;
