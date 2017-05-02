var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
//}).listen(3000, 'localhost', function (err) { // for hosting in local server
}).listen(3000, '0.0.0.0', function (err) { // for hosting inside a docker, more detail: http://stackoverflow.com/questions/39632038/cannot-run-webpack-dev-server-inside-docker
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:3000');
});