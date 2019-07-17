var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => {
  return {
    mode: 'development',
    devtool: 'eval-source-map',
    // The entry file. All your app roots from here.
    entry: {
      main: path.resolve(__dirname, 'src/index.js'),
      // cssrContact: path.resolve(__dirname, 'src/components/trial/contact.js'),
      // cssrLoading: path.resolve(__dirname, 'src/components/trial/loading.js'),
      // Icon: path.resolve(__dirname, 'src/components/logo.svg'),
    },
    // Where you want the output to go
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:8].js',
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
            {
              loader: 'eslint-loader',
            }
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'assets/'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            noquotes: true
          }
        },
      ],
    },
  }
}