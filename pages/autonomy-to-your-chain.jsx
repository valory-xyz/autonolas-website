import FunnelLandingPage from 'common-util/FunnelLandingPage';
import AutonomyToYourChain from 'common-util/FunnelLandingPage/7AutonomyToYourChain';
import { getEducationArticles, getFunnel } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

// TODO: replace 7AutonomyToYourChain
// TODO: replace autonomy-to-your-chain
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
      name: 'autonomy-to-your-chain',
    },
  };
}

const AutonomyToYourChainComponent = props => (
  <>
    <FunnelLandingPage {...props} />
    <AutonomyToYourChain {...props} />
  </>
);

export default AutonomyToYourChainComponent;
