const withAntdLess = require('next-plugin-antd-less');

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
    return [
      {
        source: '/whitepaper/autonolas-whitepaper.pdf',
        destination: '/documents/whitepaper/Whitepaper v1.0.pdf',
        permanent: true,
      },
      {
        source: '/whitepaper/autonolas-whitepaper-summary.pdf',
        destination: '/documents/whitepaper/Whitepaper Summary v1.0.pdf',
        permanent: true,
      },
    ];
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
});
