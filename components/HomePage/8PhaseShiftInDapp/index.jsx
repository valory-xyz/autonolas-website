import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionEight } from '../styles';

const PhaseShiftInDapp = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionEight className="section section-8" id="product">
      <div className="description-l-3">A NEW CATEGORY OF CRYPTO APPLICATION</div>

      <Header className="header" title="A phase shift in Dapp capacity and UX" />

      <div className="row-1 description-l-4">
        With us, smart contract apps ‘own’ their off-chain components. These
        components do things like make decisions, source data and make things
        happen in the real-world, on other chains and web2.
      </div>

      <div className="row-2">
        <div className="content">
          <img
            src={isMobile ? '/images/dapp/logo-mobile.png' : '/images/dapp/logo.png'}
            alt="DAPP logo"
            className="full-width"
          />
        </div>
      </div>

      <div className="row-3">
        <div className="column column-1">
          <div className="content description-l-4">
            What does that mean though? Apps on our platform can do fundamentally
            new things, and do existing things at much higher levels of
            efficiency. For the end user, this passes on new opportunities,
            functionality and above all, radically simpler user experiences.
          </div>
        </div>

        <div className="column column-2">
          <div className="content">
            <div className="description-l-4">Want to learn more?</div>
            <Button
              type="primary"
              title="Snoop in #product-and-apps"
            />
          </div>
        </div>

        <div className="column column-3">
          <div className="content">
            <div className="description-l-4">DeFi private alpha scheduled for Q2 ‘21</div>
            <Button type="primary" title="apply as an early tester" />
          </div>
        </div>
      </div>
    </SectionEight>
  );
};

export default PhaseShiftInDapp;
