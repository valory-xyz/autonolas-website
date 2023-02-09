import * as fs from 'fs';
import { SITE_URL } from 'util/constants/site';

export const staticPaths = fs
  .readdirSync('pages')
  .filter(staticPage => ![
    'api',
    '_app.js',
    '_document.js',
    '404.js',
    'sitemap.xml.js',
  ].includes(staticPage))
  .map(staticPagePath => `${SITE_URL}/${staticPagePath}`);
