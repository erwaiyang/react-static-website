/* eslint-disable global-require, import/no-extraneous-dependencies */
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import Homepage from './homepage'

const appRoot = document.getElementById('app')

render(<AppContainer><Homepage /></AppContainer>, appRoot)

if (module.hot) {
  module.hot.accept('./homepage', () => {
    const NextApp = require('./homepage').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      appRoot,
    )
  })
}
