import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
// import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionNine, Row } from './styles';

const Mission = () => (
  <SectionNine className="section section-9" id="mission">
    <Description type={2} title="MISSION" />

    <Header
      className="header"
      title={(
        <>
          Let&apos;s make DAQs&nbsp;
          <span className="sub-text">actually</span>
          &nbsp;autonomous
        </>
      )}
    />

    <Row>
      <Description
        type={2}
        title="Internal Operations are slow and stilted – subDAOs go some way, but not the whole way. DAOs run apps and protocols which are constrained by smart contract limitations and centralized/liability risks."
        className="sub-content"
      />
      <div className="glass-container">
        <img
          src="/images/9Mission/glass.png"
          alt={' '}
        />
      </div>
    </Row>


  </SectionNine>
);

export default Mission;
