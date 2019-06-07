var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => {
  return {
    mode: 'development',
    devtool: 'eval-source-map',
    // The entry file. All your app roots from here.
    entry: [
      path.join(__dirname, 'src/index.js')
    ],
    entry: {
      main: path.resolve(__dirname, 'src/index.js'),
      ProductList: path.resolve(__dirname, 'src/components/contact.component.js'),
      ProductPage: path.resolve(__dirname, 'src/components/print.js'),
      // Icon: path.resolve(__dirname, 'src/components/logo.svg'),
    },
    // Where you want the output to go
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    plugins: [
      // handles creating an index.html file and injecting assets. necessary because assets
      // change name because the hash part changes. We want hash name changes to bust cache
      // on client browsers.
      new HtmlWebpackPlugin({
        title: 'Development',
        template: 'src/index.tpl.html',
        filename: 'index.html',
        inject: 'body',
        chunksSortMode: 'dependency',
      }),
      // so that file hashes don't change unexpectedly
      new webpack.HashedModuleIdsPlugin(),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
      // loader: [{ test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }],
    },
  }
}