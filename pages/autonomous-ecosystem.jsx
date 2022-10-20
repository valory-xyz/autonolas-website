import FunnelLandingPage from 'common-util/FunnelLandingPage';
import AutonomousEcosystem from 'common-util/FunnelLandingPage/7AutonomousEcosystem ';
import { getEducationArticles, getFunnel } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const educationArticles = await getEducationArticles();
  const funnel = await getFunnel(7);

  if (!funnel) {
    return serverRedirectToError();
  }

  return {
    props: {
      funnel,
      educationArticles: educationArticles.slice(0, 3) /* only 3 items */,
      name: 'autonomous-ecosystem',
    },
  };
}

const AutonomousEcosystemComponent = props => (
  <>
    <FunnelLandingPage {...props} />
    <AutonomousEcosystem {...props} />
  </>
);

export default AutonomousEcosystemComponent;
