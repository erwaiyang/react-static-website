import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Homepage from './homepage'

import '../styles/index.css'

const html = ReactDOMServer.renderToStaticMarkup(<Homepage />)
export default html

process.stdout.write(html)
