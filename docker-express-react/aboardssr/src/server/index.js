import React from 'react';
import { Provider } from 'react-redux';
import express from 'express';
import { renderToString } from 'react-dom/server';
import qs from 'qs';
import serialize from 'serialize-javascript';
import App from '../common/components/App';
import configureStore from '../common/store/configureStore';
import { fetchCounter } from '../common/api/counter';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
      // Create a new Redux store instance
      const StoreInstance = configureStore();

      // Render the component to a string
      const markup = renderToString(
        <Provider store={StoreInstance}>
          <App />
        </Provider>
      );

      // Grab the initial state from our Redux store
      const finalState = StoreInstance.getState();

      res.send(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle Redux Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
          ${process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`);

    });

export default server;
