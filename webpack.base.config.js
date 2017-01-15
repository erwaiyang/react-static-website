/* eslint-disable global-require, import/no-extraneous-dependencies */
const path = require('path')

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name]-bundle.js',
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
    },
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: path.resolve(__dirname, 'node_modules/'),
    }, {
      test: /\.css$/,
      loaders: [
        'style',
        'css',
        'postcss',
      ],
    }, {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'url?limit=1000',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }],
  },
  postcss() {
    return [
      require('postcss-import')(),
      require('postcss-cssnext'),
    ]
  },
}

module.exports = config
