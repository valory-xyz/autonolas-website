import { get } from 'lodash';
import PropTypes from 'prop-types';
import Hero from 'common-util/FunnelLandingPage/Hero';

const FunnelLandingPage = ({ funnel }) => {
  const {
    tagline, lead, cta_href, cta_btn_text,
  } = get(funnel, 'attributes') || {};
  return (
    <Hero
      title={tagline}
      subtitle={lead}
      href={cta_href}
      btnText={cta_btn_text}
    />
  );
};

FunnelLandingPage.propTypes = {
  funnel: PropTypes.instanceOf(Object).isRequired,
};

export default FunnelLandingPage;
