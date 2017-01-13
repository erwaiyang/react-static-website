/* eslint-disable import/no-extraneous-dependencies, no-console, consistent-return */
const path = require('path')
const webpack = require('webpack')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    chunks: false,
  },
  host: '0.0.0.0',
}))

app.use(hotMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(4000, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log('Hot server listening at http://localhost:4000/')
})
