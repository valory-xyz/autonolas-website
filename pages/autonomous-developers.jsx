import FunnelLandingPage from 'common-util/FunnelLandingPage';
import { getFunnel } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const funnel = await getFunnel(5);

  if (!funnel) {
    return serverRedirectToError();
  }

  return {
    props: {
      funnel,
      imgUrl: '/images/funnels/5.jpg',
    },
  };
}

export default FunnelLandingPage;