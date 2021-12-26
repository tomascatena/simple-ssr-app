import React, { FC } from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from '../client/AppRoutes';
import { Request } from 'express';

const renderer = (req: Request) => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.path}>
      <AppRoutes />
    </StaticRouter>,
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
