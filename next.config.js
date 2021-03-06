const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const nextConfig={
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  target: 'serverless'//,
  // webpack:(config, {webpack,...options}) =>{
  //   // Further custom configuration here
  //   config.plugins.push(new webpack.IgnorePlugin(/fs/));    
  //   return config;
  // }
};

module.exports = withBundleAnalyzer(nextConfig);