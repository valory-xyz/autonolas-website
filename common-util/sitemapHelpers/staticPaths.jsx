import glob from 'glob';
import { chain } from 'lodash';
import { SITE_URL } from 'util/constants/site';

export const getStaticPaths = async () => {
  const pagesDir = 'pages/**/*.jsx';
  const pagesPaths = await glob.sync(pagesDir);

  const filteredPaths = pagesPaths.filter(
    path => !path.includes('/_')
      && !path.includes('/[')
      && !path.includes('api')
      && !path.includes('sitemap'),
  );

  /**
   * replacedPaths is an array of all the paths in the pages directory
   * eg: ['/pages/index.jsx', '/pages/academy/index.jsx'].
   * Hence we need to replace the `pages`, `/index.jsx` or `.jsx`
   */
  const replacedPaths = chain(filteredPaths)
    .map(path => path.replace('pages', '').replace('/index.jsx', '').replace('.jsx', ''))
    .value();

  /**
   * paths is an array of all the paths in the pages directory
   * eg: [
   *  'https://autonolas.network',
   *  'https://autonolas.network/academy',
   *  'https://autonolas.network/dao-autonomy',
   * ]
   */
  const paths = replacedPaths.map(
    staticPagePath => `${SITE_URL}${staticPagePath}`,
  );

  // TODO: fix it
  return ['https://autonolas.network'] || paths;
};
