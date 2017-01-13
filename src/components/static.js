import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Homepage from './homepage'

const html = ReactDOMServer.renderToStaticMarkup(<Homepage />)
export default html
