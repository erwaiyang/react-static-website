/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack')
const R = require('ramda')
const baseConfig = require('./webpack.base.config')

const config = R.merge(baseConfig, {
  devServer: {
    publicPath: baseConfig.output.publicPath,
    historyApiFallback: true,
    compress: true,
    stats: {
      colors: true,
      chunks: false,
    },
    host: '0.0.0.0',
  },
  plugins: R.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ], baseConfig.plugins),
})

module.exports = config
