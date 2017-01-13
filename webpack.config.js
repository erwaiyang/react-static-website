const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    homepage: [
      './src/components/homepage/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name]-bundle.js',
  },
  devtool: '#cheap-module-eval-source-map',
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
      ]
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-bundle.js',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss() {
    return [
      require('autoprefixer')({ browsers: [
        'Android 2.3',
        'Android >= 4',
        'iOS >= 7',
        'Safari >= 7.1',
      ]}),
    ]
  },
}

module.exports = config
