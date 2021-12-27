import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from '../client/AppRoutes';
import { Request } from 'express';
import { Provider } from 'react-redux';
import createStore from './createStore';


const renderer = (req: Request, store: ReturnType<typeof createStore>) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <AppRoutes />
      </StaticRouter>
    </Provider>,
  );

  return `
  <html>
    <head>
    </head>

    <body>
      <div id="root">${content}</div>

      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};

export default renderer;
