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

const getAnchor = (title, href, otherProps) => {
  const { isLink, isExternal = true } = otherProps || {};

  return isLink ? (
    <Link href={href} passHref>
      <a>{title}</a>
    </Link>
  ) : (
    <a
      href={href}
      target={isExternal ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

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
                {getAnchor('EDUCATION', '/education-articles', {
                  isExternal: false,
                })}
              </div>
            </td>

            <td>
              <div className="footer-title">BUILD</div>
              <div className="links">
                {getAnchor('DOCS', 'https://docs.autonolas.network/', {
                  isExternal: true,
                })}
                {getAnchor('ACADEMY', '/academy', { isExternal: false })}
                {getAnchor('COMMISSION US', 'mailto:bd@valory.xyz')}
                {getAnchor('PROTOCOL REGISTRY', 'https://protocol.autonolas.network/', {
                  isExternal: true,
                })}
                {/* {getAnchor('IDEAS', '/ideas')} */}
              </div>
            </td>

            <td>
              <div className="footer-title">ABOUT</div>
              <div className="links">
                {getAnchor('BLOG', `/${PATHS.BLOG}`, { isExternal: false })}
                {getAnchor('PRESS', `/${PATHS.PRESS}`, { isExternal: false })}
                {getAnchor('TWITTER', 'https://twitter.com/autonolas')}
                {getAnchor('DISCORD', 'https://discord.com/invite/z2PT65jKqQ')}
                {getAnchor('GITHUB', 'https://github.com/valory-xyz')}
                {getAnchor('PRIVACY POLICY', `/${PATHS.PRIVACY_POLICY}`, { isExternal: false })}
                {getAnchor('COOKIES POLICY', `/${PATHS.COOKIES_POLICY}`, { isExternal: false })}
              </div>
            </td>
          </tr>

          <tr>
            <td className="copyright">{footerCopyright}</td>

            <td>
              <div className="footer-title">JOIN</div>
              <div className="links">
                {getAnchor('TEAM', '/team', { isExternal: false })}
                {getAnchor(
                  'CAREERS',
                  'https://angel.co/company/valory-3',
                  true,
                )}
                {getAnchor(
                  'DISCORD',
                  'https://discord.com/invite/z2PT65jKqQ/',
                  true,
                )}
              </div>
            </td>

            <td>
              <div className="footer-title">EXPERIENCE</div>
              <div className="links">
                {getAnchor('ALTER ORBIS', 'https://www.autonolas.world/')}
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
