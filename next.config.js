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
        source: '/autonomous-asset-management-infra',
        destination: 'product/smpkit',
        permanent: true,
      },
    ];
  },
});
