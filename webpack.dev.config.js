/* eslint-disable  import/no-extraneous-dependencies */
const webpack = require('webpack')
const R = require('ramda')
const baseConfig = require('./webpack.base.config')

const config = R.merge(baseConfig, {
  module: {
    loaders: R.append({
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
    }, baseConfig.module.loaders),
  },
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    homepage: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/styles/index.css',
      './src/components/hot.js',
    ],
  },
  devtool: '#cheap-module-eval-source-map',
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-bundle.js',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = config
