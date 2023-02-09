// import { SITE_URL } from 'util/constants/site';
import { staticPaths } from './readingfile';

const Sitemap = () => {
  const allPaths = [...staticPaths];
  // const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
    .map(
      url => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `,
    )
    .join('')}
    </urlset>
`;

  return sitemap;
};

export const getServerSideProps = async ({ res }) => {
  // const BASE_URL = 'http://localhost:3000';

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // our URL's will go here
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
