import PropTypes from 'prop-types';
import Hero from 'common-util/FunnelLandingPage/Hero';

const FunnelLandingPage = ({
  title, subtitle, href, btnText,
}) => (
  <>
    <Hero title={title} subtitle={subtitle} href={href} btnText={btnText} />
  </>
);

FunnelLandingPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default FunnelLandingPage;
