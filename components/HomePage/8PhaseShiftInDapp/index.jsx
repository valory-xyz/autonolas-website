import React from 'react';
import { Row, Col } from 'antd';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionEight } from './styles';

const PhaseShiftInDapp = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionEight className="section section-8" id="product">
      <div className="description-l-3">
        A NEW CATEGORY OF CRYPTO APPLICATION
      </div>

      <Header
        className="header"
        title="A phase shift in Dapp capacity and UX"
      />

      <Row>
        <Col xs={24} md={10} className="column column-1">
          <div className="content">
            <div className="description-l-4">
              With us, smart contract apps ‘own’ their off-chain components.
              These components do things like make decisions, source data and
              make things happen in the real-world, on other chains and web2.
            </div>
            {isMobile && (
              <img
                src="/images/dapp/meme.jpg"
                alt="DAPP meme"
                className="full-width"
              />
            )}
            <div className="description-l-4">
              What does that mean though? Apps on our platform can do
              fundamentally new things, and do existing things at much higher
              levels of efficiency. For the end user, this passes on new
              opportunities, functionality and above all, radically simpler user
              experiences.
            </div>
          </div>
        </Col>

        {!isMobile && (
          <Col xs={24} md={14} className="column column-2">
            <div className="column column-2">
              <img
                // src={`/images/dapp/logo${isMobile ? '-mobile' : ''}.png`}
                src="/images/dapp/meme-border.png"
                alt="DAPP meme"
                className="full-width"
              />
            </div>
          </Col>
        )}
      </Row>

      <div className="row-3">
        <div className="column column-1">
          <div className="content">
            <div className="description-l-4">Want to learn more?</div>
            <Button
              type="primary"
              title="Join #product-and-apps"
              onClick={() => window.open('https://discord.gg/RsBbdh3G3f')}
            />
          </div>
        </div>

        <div className="column column-2">
          <div className="content">
            <div className="description-l-4">
              DeFi private alpha scheduled for Q1 ‘22
            </div>
            <Button type="primary" title="apply as an early tester" />
          </div>
        </div>
      </div>
    </SectionEight>
  );
};

export default PhaseShiftInDapp;
