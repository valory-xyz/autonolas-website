import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = () => (
  <CookieConsent
    enableDeclineButton
    setDeclineCookie
    declineButtonText="Decline"
  >
    We use cookies to operate our website, enhance your browsing experience,
    to serve personalised ads or content, and to analyze our traffic. By clicking
    “Accept All”, you consent to our use of cookies. Read more.
  </CookieConsent>
);

export default CookieConsentBanner;
