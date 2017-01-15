/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack')
const R = require('ramda')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base.config')

const config = R.merge(baseConfig, {
  module: {
    loaders: R.append({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
    }, baseConfig.module.loaders),
  },
  entry: {
    homepage: [
      './src/components/static.js',
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        unused: true,
        dead_code: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('styles.css'),
  ],
  target: 'node',
  externals: nodeExternals(),
})

module.exports = config
