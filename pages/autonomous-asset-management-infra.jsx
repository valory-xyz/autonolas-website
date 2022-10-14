import FunnelLandingPage from 'common-util/FunnelLandingPage';
import AssetManagement from 'common-util/FunnelLandingPage/6AssetManagement';
import { getFunnel } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const funnel = await getFunnel(6);

  if (!funnel) {
    return serverRedirectToError();
  }

  return {
    props: {
      funnel,
      name: 'dao-autonomy',
    },
  };
}

const AssetManagementInfra = props => (
  <>
    <FunnelLandingPage {...props} />
    <AssetManagement />
  </>
);

export default AssetManagementInfra;
