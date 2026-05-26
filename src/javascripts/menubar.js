import React from 'react'
const ReactDOMServer = require('react-dom/server')

import { props } from './menubarData.js'
import C_HeaderLinks from '../components/C_HeaderLinks.jsx'

const menubar = ReactDOMServer.renderToString(
  React.createElement(C_HeaderLinks, props)
)

export { menubar }
