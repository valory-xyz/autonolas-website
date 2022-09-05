import { get } from 'lodash';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { SITE_URL } from 'util/constants/site';
import Hero from 'common-util/FunnelLandingPage/Hero';
import Meta from 'common-util/meta';

/**
 * Funnel number indicates `id` in cms-backend
 * 1. Autonomous Infra
 * 2. Smart Products
 * 3. DAO Autonomy
 * 4. Autonomous Contributors
 * 5. Autonomous Developers
 */
const FunnelLandingPage = ({ funnel, name }) => {
  const router = useRouter();
  const { pathname } = router;
  const {
    tagline, lead, cta_href, cta_btn_text,
  } = get(funnel, 'attributes') || {};

  return (
    <>
      <Meta
        meta={{
          siteUrl: `${SITE_URL}${pathname}`,
          title: tagline,
          description: lead,
          image: `${SITE_URL}/images/funnels/${name}.png`,
        }}
      />
      <Hero
        title={tagline}
        subtitle={lead}
        href={cta_href}
        btnText={cta_btn_text}
        imgUrl={`/images/funnels/${name}.jpg`}
      />
    </>
  );
};

FunnelLandingPage.propTypes = {
  funnel: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
};

export default FunnelLandingPage;
