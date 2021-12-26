import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from '../client/components/Home'

const renderer = () => {
  const content = ReactDOMServer.renderToString(React.createElement(Home))

  return `
  <html>
    <head>
    </head>

    <body>
      <div id="root">${content}</div>

      <script src="bundle.js"></script>
    </body>
  </html>
  `
}

export default renderer
