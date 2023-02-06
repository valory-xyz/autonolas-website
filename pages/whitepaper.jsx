import { SITE_URL } from 'util/constants/site';
import { getHostName } from 'common-util/functions';
import Meta from 'common-util/meta';
import Whitepaper from 'components/Whitepaper';

const pageSettings = {
  pathname: '/whitepaper',
  title: 'Whitepaper',
  description:
    "Do a deep-dive into Autonolas' vision for autonomy, technical architecture, tokenomics, use cases and governance.",
  imagePath: `${getHostName()}/images/whitepaper/autonolas-whitepaper-metatag.png`,
};

const WhitepaperPage = () => (
  <>
    <Meta
      meta={{
        siteUrl: `${SITE_URL}${pageSettings.pathname}`,
        title: `${pageSettings.title} | Autonolas`,
        description: pageSettings.description,
        image: pageSettings.imagePath,
      }}
    />
    <Whitepaper />
  </>
);

export default WhitepaperPage;
