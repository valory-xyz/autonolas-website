import React from 'react';
import { Row, Col } from 'antd';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks';
import { SectionEight, RowThree } from './styles';

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
            <Description
              type={4}
              title="With us, smart contract apps ‘own’ their off-chain components.
              These components do things like make decisions, source data and
              make things happen in the real-world, on other chains and web2."
            />
            {isMobile && (
              <img
                src="/images/dapp/meme.jpg"
                alt="DAPP meme"
                className="full-width"
                loading="lazy"
              />
            )}
            <Description
              type={4}
              title="What does that mean though? Apps on our platform can do
              fundamentally new things, and do existing things at much higher
              levels of efficiency. For the end user, this passes on new
              opportunities, functionality and above all, radically simpler user
              experiences."
            />
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
                loading="lazy"
              />
            </div>
          </Col>
        )}
      </Row>

      <RowThree>
        <div className="column column-1">
          <div className="content">
            <Description type={4} title="Want to learn more?" />
            <Button
              type="primary"
              title="Join #product-and-apps"
              onClick={() => window.open('https://discord.gg/RsBbdh3G3f')}
            />
          </div>
        </div>

        <div className="column column-2">
          <div className="content">
            <Description type={4} title="DeFi private alpha scheduled for Q1 ‘22" />
            <Button
              type="primary"
              title="apply as an early tester"
              onClick={() => window.open('http://eepurl.com/hOfsr5')}
            />
          </div>
        </div>
      </RowThree>
    </SectionEight>
  );
};

export default PhaseShiftInDapp;
