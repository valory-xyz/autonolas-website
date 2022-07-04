import React from 'react';
import Header from 'common-util/Header';
import Link from 'next/link';
import PATHS from 'util/paths';
import Twitter from '../../../public/images/common/twitter.svg';
import Discord from '../../../public/images/common/discord.svg';
import {
  FooterContainer,
  FooterTop,
  SocialConnect,
  FooterBottom,
} from './styles';

const getAnchor = (title, href, isLink) => (isLink ? (
  <Link href={href} passHref>
    <a>{title}</a>
  </Link>
) : (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {title}
  </a>
));

const footerLogo = (
  <img
    src="/images/common/autonolas-logo.png"
    alt=" "
    loading="lazy"
    className="footer-logo"
  />
);

const footerCopyright = (
  <div className="copyright">
    <span>{`COPYRIGHT ${new Date().getFullYear()}`}</span>
    <span>VALORY AG</span>
  </div>
);

const Footer = () => (
  <FooterContainer className="section-footer" id="footer">
    <FooterTop>
      <Header className="header center" title="Keep up with Autonolas" />

      <div className="row-socials">
        <SocialConnect
          className="follow-us"
          onClick={() => window.open('https://twitter.com/autonolas')}
        >
          <div className="logo">
            <Twitter />
          </div>
          <div className="text">Follow us</div>
        </SocialConnect>

        <SocialConnect
          className="join-discord"
          onClick={() => window.open('https://discord.com/invite/z2PT65jKqQ')}
        >
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
            <td>{footerLogo}</td>

            <td>
              <div className="footer-title">LEARN</div>
              <div className="links">
                {getAnchor('EDUCATION', '/education-articles')}
              </div>
            </td>

            <td>
              <div className="footer-title">BUILD</div>
              <div className="links">
                {getAnchor('DOCS', 'https://docs.autonolas.network/', true)}
                {getAnchor('ACADEMY', '/academy')}
                {getAnchor('COMMISSION US', 'mailto:bd@valory.xyz')}
                {/* {getAnchor('IDEAS', '/ideas')} */}
              </div>
            </td>

            <td>
              <div className="footer-title">FOLLOW</div>
              <div className="links">
                {getAnchor('BLOG', `/${PATHS.BLOG}`, true)}
                {getAnchor('PRESS', `/${PATHS.PRESS}`, true)}
                {getAnchor('TWITTER', 'https://twitter.com/autonolas')}
                {getAnchor('DISCORD', 'https://discord.com/invite/z2PT65jKqQ')}
              </div>
            </td>
          </tr>

          <tr>
            <td className="copyright">{footerCopyright}</td>

            <td>
              <div className="footer-title">JOIN</div>
              <div className="links">
                {getAnchor('TEAM', '/team')}
                {getAnchor('CAREERS', 'https://angel.co/company/valory-3', true)}
                {getAnchor('DISCORD', 'https://discord.com/invite/z2PT65jKqQ/', true)}
              </div>
            </td>

            <td>
              <div className="footer-title">EXPERIENCE</div>
              <div className="links">
                {getAnchor('ALTER ORBIS', 'https://www.autonolas.world/', true)}
              </div>
            </td>

            <td />
          </tr>
        </tbody>
      </table>

      <div className="xs-footer">
        <div>{footerLogo}</div>
        {footerCopyright}
      </div>
    </FooterBottom>
  </FooterContainer>
);

export default Footer;
