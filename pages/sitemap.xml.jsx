import { getStaticPaths } from 'common-util/sitemapHelpers/staticPaths';
import { getDynamicPaths } from 'common-util/sitemapHelpers/dynamicPaths';

export const triedPathForConfig = ['./**/*.jsx'];

export const getServerSideProps = async ({ res }) => {
  const BASE_DIR = process.env.NODE_ENV.toLowerCase() === 'production'
    ? './**/*.jsx'
    : 'pages/**/*.jsx';

  // const BASE_DIR = `${process.cwd()}/pages/**/*.jsx`;

  const staticPaths = await getStaticPaths(BASE_DIR);
  const dynamicPaths = await getDynamicPaths();

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"> 
    ${allPaths
    .map(
      url => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>1.0</priority>
        </url>
      `,
    )
    .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const Sitemap = () => null;

export default Sitemap;
