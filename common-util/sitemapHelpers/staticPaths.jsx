import glob from 'glob';
import { chain } from 'lodash';
import { SITE_URL } from 'util/constants/site';

export const getStaticPaths = async () => {
  const BASE_DIR = process.env.NODE_ENV === 'production' ? './' : 'pages/';
  const pagesDir = `${BASE_DIR}**/*.jsx`;
  const pagesPaths = await glob.sync(pagesDir);

  console.log(pagesPaths);

  const filteredPaths = pagesPaths.filter(
    path => !path.includes('/_')
      && !path.includes('/[')
      && !path.includes('api')
      && !path.includes('sitemap'),
  );

  console.log(filteredPaths);

  /**
   * replacedPaths is an array of all the paths in the pages directory
   * eg: ['/pages/index.jsx', '/pages/academy/index.jsx'].
   * Hence we need to replace the `pages`, `/index.jsx` or `.jsx`
   */
  const replacedPaths = chain(filteredPaths)
    .map(path => path.replace('pages', '').replace('/index.jsx', '').replace('.jsx', ''))
    .value();

  console.log(replacedPaths);

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

  console.log(paths);

  return paths;
};
