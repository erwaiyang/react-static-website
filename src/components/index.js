import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Homepage from './Homepage'

console.warn(ReactDOMServer.renderToStaticMarkup(<Homepage />))
