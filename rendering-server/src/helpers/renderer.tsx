import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';
import { Provider } from 'react-redux';
import createStore from './createStore';
import serialize from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';
import { AppRoutes } from '../client/AppRoutes';

const renderer = (req: Request, store: ReturnType<typeof createStore>) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>{renderRoutes(AppRoutes)}</StaticRouter>
    </Provider>
  );

  return `
  <html>
    <head>
    </head>

    <body>
      <div id="root">${content}</div>

      <script id="redux-preload-state">
        window.__PRELOADED_STATE__ = ${serialize(store.getState())}
      </script>

      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};

export default renderer;
