import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Anchor } from 'antd';
import Button from 'common-util/Button';
import { useCheckMobileScreen } from 'common-util/hooks';
import { handleJoinDiscord, getSocials } from 'common-util/functions';
import { AutonolasLogoWithoutWording } from 'common-util/svg';
import { SectionEleven } from './styles';

const { Link } = Anchor;

const bePartList = [
  {
    id: 'join-ola-tribe-twitter',
    type: 'twitter',
    url: 'https://twitter.com/autonolas',
  },
  {
    id: 'join-ola-tribe-discord',
    type: 'discord',
    url: 'https://discord.com/invite/z2PT65jKqQ',
  },
];

const constributeList = [
  {
    id: 'join-ola-tribe-github',
    type: 'github',
    url: 'https://github.com/valory-xyz',
    iconSize: 'small',
  },
];

const Copyright = ({ device = 'desktop' }) => (
  <div className={`copyright ${device}`}>
    Copyright&nbsp;
    {new Date().getFullYear()}
    &nbsp;valory AG
  </div>
);

Copyright.propTypes = {
  device: PropTypes.string.isRequired,
};

// Main component
const JoinTheOlasTribe = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionEleven className="section section-11">
      <Row>
        <Col xs={24} md={12} className="column column-1">
          <div className="footer-header">Join the Olas Tribe</div>
          <Button
            type="primary"
            title="Join Discord"
            onClick={handleJoinDiscord}
          />
          <div className="be-part-and-contribute">
            <div className="be-part">
              <div className="text">Be part of the story.</div>
              {getSocials(bePartList)}
            </div>
            <div className="contribute">
              <div className="text">Want to contribute?</div>
              {getSocials(constributeList)}
            </div>
          </div>
        </Col>

        <Col xs={24} md={12} className="column column-2">
          <div className="footer-anchors">
            <div className="footer-anchor-1">
              {/* TODO: import NAV_2 from navigation */}
              <Anchor affix={false}>
                <Link href="#why-autonolas" title="Why Autonolas" />
                <Link href="#what-is-autonolas" title="What is Autonolas" />
                <Link href="#developers" title="Developers" />
                <Link href="#community" title="Community" />
                <Link href="#product" title="Product" />
                <Link href="#lore" title="Lore" />
                <Link href="#about" title="About" />
                <Link
                  href="https://autonolas.medium.com/"
                  title="Blog"
                  target="_blank"
                />
              </Anchor>
              {!isMobile && <Copyright device="desktop" />}
            </div>

            <div className="footer-anchor-2">
              <div className="logo">
                <AutonolasLogoWithoutWording width={125} height={125} />
              </div>
              {isMobile && <Copyright device="mobile" />}
            </div>
          </div>
        </Col>
      </Row>
    </SectionEleven>
  );
};

// JoinTheOlasTribe.propTypes = {
//   isNavigationOpen: PropTypes.bool.isRequired,
// };

export default JoinTheOlasTribe;
