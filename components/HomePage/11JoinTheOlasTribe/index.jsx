import React from 'react';
import { Row, Col, Anchor } from 'antd';
import Button from 'common-util/Button';
import { handleJoinDiscord, getSocials } from 'common-util/functions';
import { SectionEleven } from '../styles';

const { Link } = Anchor;

const bePartList = [
  {
    id: 'join-ola-tribe-twitter',
    type: 'twitter',
    url: 'https://twitter.com/valoryag',
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

const JoinTheOlasTribe = () => (
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
            <Anchor affix={false}>
              <Link href="#why-autonolas" title="Why Autonolas" />
              <Link href="#what-is-autonolas" title="What is Autonolas" />
              <Link href="#developers" title="Developers" />
              <Link href="#community" title="Community" />
              <Link href="#product" title="Product" />
              <Link href="#lore" title="Lore" />
              <Link href="#about" title="About" />
            </Anchor>
            <div className="copyright">
              Copyright&nbsp;
              {new Date().getFullYear()}
              &nbsp;valory AG
            </div>
          </div>

          <div className="footer-anchor-2">
            <div className="logo">
              <img src="/images/footer/autonolas-logo.png" alt="" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </SectionEleven>
);

export default JoinTheOlasTribe;
// https://discord.com/invite/z2PT65jKqQ
/**
<div className="footer-anchor-2">
  <Anchor affix={false}>
    <Link href="#privacy-policy" title="Privacy Policy" />
    <Link href="#cookies" title="Cookies" />
    <Link href="#legal" title="Legal" />
  </Anchor>

  <div className="copyright">
    Copyright&nbsp;
    {new Date().getFullYear()}
    &nbsp;valory AG
  </div>
</div>
 */
