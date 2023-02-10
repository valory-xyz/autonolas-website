import {
  // getStaticPaths,

  staticPathsOther,
} from 'common-util/sitemapHelpers/staticPaths';
import { getDynamicPaths } from 'common-util/sitemapHelpers/dynamicPaths';
import path from 'path';


export const triedPathForConfig = [
  './**/*.jsx',
  './pages/**/*.jsx',
  '/**/*.jsx',
  '**/*.jsx',
];

// write a function getStaticSideProps to fetch all the file names inside "pages" folder
// and return them as an array of strings
export const getStaticProps = async ({ res }) => {
  // fetch files from vercel production
  const dynamicPaths = await getDynamicPaths();

  // TRY
  const staticPaths = await staticPathsOther(
    process.env.NODE_ENV.toLowerCase() === 'production' ? path.join(process.cwd(), './next') : 'pages',
  );

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


// export const getServerSideProps = async ({ res }) => {
//   // const BASE_DIR = process.env.NODE_ENV.toLowerCase() === 'production'
//   //   ? '**/*.jsx'
//   //   : 'pages/**/*.jsx';

//   // const BASE_DIR = `${process.cwd()}/pages/**/*.jsx`;

//   // const staticPaths = await getStaticPaths(BASE_DIR);
//   const dynamicPaths = await getDynamicPaths();

//   // TRY
//   const staticPaths = await staticPathsOther(
//     process.env.NODE_ENV.toLowerCase() === 'production' ?
// path.join(process.cwd(), './') : 'pages',
//   );

//   const allPaths = [...staticPaths, ...dynamicPaths];

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
//     ${allPaths
//     .map(
//       url => `
//         <url>
//           <loc>${url}</loc>
//           <lastmod>${new Date().toISOString()}</lastmod>
//           <priority>1.0</priority>
//         </url>
//       `,
//     )
//     .join('')}
//     </urlset>
//   `;

//   res.setHeader('Content-Type', 'text/xml');
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// };

const Sitemap = () => null;

export default Sitemap;
