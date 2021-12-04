const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true, // gzip compression
    historyApiFallback: true, // to enable React Router
    port: 9000
  },
});
