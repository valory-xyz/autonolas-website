import { get } from 'lodash';
import PropTypes from 'prop-types';
import Hero from 'common-util/FunnelLandingPage/Hero';

/**
 * Funnel number indicates `id` in cms-backend
 * 1. Autonomous Infra
 * 2. Smart Products
 * 3. DAO Autonomy
 * 4. Autonomous Contributors
 * 5. Autonomous Developers
 */
const FunnelLandingPage = ({ funnel, imgUrl }) => {
  const {
    tagline, lead, cta_href, cta_btn_text,
  } = get(funnel, 'attributes') || {};
  return (
    <Hero
      title={tagline}
      subtitle={lead}
      href={cta_href}
      btnText={cta_btn_text}
      imgUrl={imgUrl}
    />
  );
};

FunnelLandingPage.propTypes = {
  funnel: PropTypes.instanceOf(Object).isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default FunnelLandingPage;
