import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import Container from './styles';

const CookieConsentBanner = () => (
  <Container>
    <CookieConsent
      debug
      buttonText="Accept All"
      disableStyles
      containerClasses="banner-container"
      contentClasses="banner-content"
      buttonClasses="banner-btn"
    >
      We use cookies to operate our website, enhance your browsing experience,
      to serve personalised ads or content, and to analyze our traffic. By clicking
      “Accept All”, you consent to our use of cookies.
      {' '}
      <Link href="/cookies-policy">Read more</Link>
      . To browse without cookies,
      {' '}
      <a href="https://www.hotjar.com/policies/do-not-track/">follow instructions</a>
      {' '}
      to enable &quot;Do Not Track&quot;.
    </CookieConsent>
  </Container>
);

export default CookieConsentBanner;
