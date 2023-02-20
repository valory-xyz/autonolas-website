import glob from 'glob';
import { chain } from 'lodash';
import { SITE_URL } from 'util/constants/site';

export const getStaticPaths = async baseDir => {
  const pagesPaths = await glob.sync(baseDir);

  const filteredPaths = pagesPaths
    .filter(e => e.includes('pages'))
    .filter(
      path => !path.includes('/_')
        && !path.includes('/[')
        && !path.includes('api')
        && !path.includes('sitemap'),
    );

  /**
   * replacedPaths is an array of all the paths in the pages directory
   * eg: dev:  ['/pages/index.jsx', '/pages/academy/index.jsx']
   * eg: prod: ['./.next/server/index.js', './.next/server/academy/index.js']
   * Hence we need to replace the `pages`, `/index.jsx` or `.jsx`
   */
  const replacedPaths = chain(filteredPaths)
    .map(path => path
      .replace('pages', '')
      .replace('./.next/server/', '')
      .replace('/index.jsx', '')
      .replace('/index.js', '')
      .replace('.jsx', '')
      .replace('.js', ''))
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

  return paths;
};
