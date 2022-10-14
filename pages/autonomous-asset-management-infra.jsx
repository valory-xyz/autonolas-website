import FunnelLandingPage from 'common-util/FunnelLandingPage';
import AssetManagement from 'common-util/FunnelLandingPage/6AssetManagement';
import { getEducationArticles, getFunnel } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const educationArticles = await getEducationArticles();
  const funnel = await getFunnel(6);

  if (!funnel) {
    return serverRedirectToError();
  }

  return {
    props: {
      funnel,
      educationArticles: educationArticles.slice(0, 3) /* only 3 items */,
      name: 'autonomous-asset-management-infra',
    },
  };
}

const AssetManagementInfra = props => (
  <>
    <FunnelLandingPage {...props} />
    <AssetManagement {...props} />
  </>
);

export default AssetManagementInfra;
