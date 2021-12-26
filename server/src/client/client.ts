// Startup point fo the client side application

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

ReactDOM.hydrate(React.createElement(Home), document.querySelector('#root'))
