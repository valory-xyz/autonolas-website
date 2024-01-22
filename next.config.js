const withAntdLess = require('next-plugin-antd-less');

const OLAS_URL = 'https://olas.network';
const WHITEPAPER_DOC_PATH = '/documents/whitepaper';
const OLAS_WHITEPAPER_DOC_URL = `${OLAS_URL}${WHITEPAPER_DOC_PATH}`;
const WHITEPAPER_FILE_PATH = '/Whitepaper v1.0.pdf';
const WHITEPAPER_SUMMARY_FILE_PATH = '/Whitepaper Summary v1.0.pdf';
const TOKENOMICS_PAPER_FILE_PATH = '/Autonolas_Tokenomics_Core_Technical_Document.pdf';

const redirects = [
  {
    source: `${WHITEPAPER_DOC_PATH}${WHITEPAPER_FILE_PATH}`,
    destination: `${OLAS_WHITEPAPER_DOC_URL}${WHITEPAPER_FILE_PATH}`,
    permanent: true,
  },
  {
    source: `${WHITEPAPER_DOC_PATH}${WHITEPAPER_SUMMARY_FILE_PATH}`,
    destination: `${OLAS_WHITEPAPER_DOC_URL}${WHITEPAPER_SUMMARY_FILE_PATH}`,
    permanent: true,
  },
  {
    source: `${WHITEPAPER_DOC_PATH}${TOKENOMICS_PAPER_FILE_PATH}`,
    destination: `${OLAS_WHITEPAPER_DOC_URL}${TOKENOMICS_PAPER_FILE_PATH}`,
    permanent: true,
  },
  {
    source: '/whitepaper',
    destination: `${OLAS_URL}/whitepaper`,
    permanent: true,
  },
];

module.exports = withAntdLess({
  cssLoaderOptions: {
    importLoaders: 1,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  // lessVarsFilePath: '../pages/styles.less',
  productionBrowserSourceMaps: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  async redirects() {
    return redirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        /**
         * fetch the hostname from the url
         * example: https://api.autonolas.com => api.autonolas.com
         */
        hostname: process.env.NEXT_PUBLIC_API_URL.match(/([^//]+$)/)[0],
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
});
