import express from 'express';
import Loadable from 'react-loadable';
import serverRenderer from './middleware/renderer';

const PORT = 8080;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
// router.use('^/$', serverRenderer);

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
app.use(router);

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
      if (error) {
          return console.log('something bad happened:', error);
      }

      console.log("listening on " + PORT + "...");
  });
});
