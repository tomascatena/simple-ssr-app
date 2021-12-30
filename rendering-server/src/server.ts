import express from 'express';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';
import { matchRoutes, RouteConfig } from 'react-router-config';
import { AppRoutes } from './client/AppRoutes';
import proxy from 'express-http-proxy';

export type LoadData = (
  store: ReturnType<typeof createStore>
) => Promise<unknown>;

interface RouteObjectWithLoadData extends RouteConfig {
  loadData?: LoadData;
}

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      if (opts.headers) {
        opts.headers['x-forward-host'] = 'localhost:3000';
      }

      return opts;
    },
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(AppRoutes, req.path)?.map((match) => {
    const route: RouteObjectWithLoadData = match.route;

    return route.loadData ? route.loadData(store) : null;
  });

  if (promises) {
    Promise.all<typeof promises>(promises).then(() => {
      res.send(renderer(req, store));
    });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
