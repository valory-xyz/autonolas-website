import React from 'react';
import Header from 'common-util/Header';
import { Anchor } from 'antd';
import Twitter from '../../../public/images/common/twitter.svg';
import Discord from '../../../public/images/common/discord.svg';
import {
  FooterContainer,
  FooterTop,
  SocialConnect,
  FooterBottom,
} from './styles';

const { Link } = Anchor;

const getAnchor = (title, href) => (
  <Link href={href} title={title} target="_blank" rel="noopener noreferrer" />
);

const Footer = () => (
  <FooterContainer className="section-footer" id="footer">
    <FooterTop>
      <Header className="header" title="Keep up with Autonolas" />

      <div className="row-socials">
        <SocialConnect className="follow-us">
          <div className="logo">
            <Twitter />
          </div>
          <div className="text">Follow us</div>
        </SocialConnect>

        <SocialConnect className="join-discord">
          <div className="logo">
            <Discord />
          </div>
          <div className="text">Join Discord</div>
        </SocialConnect>
      </div>
    </FooterTop>

    <FooterBottom>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src="images/common/autonolas-logo.png"
                alt=" "
                loading="lazy"
              />
            </td>

            <td>
              <div className="footer-title">LEARN</div>
              <div className="links">
                <Anchor affix={false}>
                  {getAnchor('EDUCATION', 'https://autonolas.medium.com/')}
                  {getAnchor(
                    'WHITEPAPAER (COMING SOON)',
                    'https://autonolas.medium.com/',
                  )}
                </Anchor>
              </div>
            </td>

            <td>
              <div className="footer-title">BUILD</div>
              <div className="links">
                <Anchor affix={false}>
                  {getAnchor('DOCS', 'https://autonolas.medium.com/')}
                  {getAnchor('ACADEMY', 'https://autonolas.medium.com/')}
                  {getAnchor('CONSULTING', 'https://autonolas.medium.com/')}
                </Anchor>
              </div>
            </td>

            <td>
              <div className="footer-title">FOLLOW</div>
              <div className="links">
                <Anchor affix={false}>
                  {getAnchor('TWITTER', 'https://autonolas.medium.com/')}
                </Anchor>
              </div>
            </td>
          </tr>

          <tr>
            <td className="copyright">
              <span>{`COPYRIGHT ${new Date().getFullYear()}`}</span>
              <span>VALORY AG</span>
            </td>

            <td>
              <div className="footer-title">USE</div>
              <div className="links">
                <Anchor affix={false}>
                  {getAnchor(
                    'ECOSYSTEM SERVICES',
                    'https://autonolas.medium.com/',
                  )}
                </Anchor>
              </div>
            </td>

            <td>
              <div className="footer-title">JOIN</div>
              <div className="links">
                <Anchor affix={false}>
                  {getAnchor(
                    'CONTRIBUTION OPPORTUNITIES',
                    'https://autonolas.medium.com/',
                  )}
                  {getAnchor('ABOUT', 'https://autonolas.medium.com/')}
                  {getAnchor('CAREERS', 'https://autonolas.medium.com/')}
                  {getAnchor('DISCORD', 'https://autonolas.medium.com/')}
                </Anchor>
              </div>
            </td>

            <td>
              <div className="footer-title">EXPERIENCE</div>
              <div className="links">
                <Anchor affix={false}>
                  {getAnchor('ALTER ORBIS', '#experience')}
                </Anchor>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </FooterBottom>
  </FooterContainer>
);

export default Footer;
