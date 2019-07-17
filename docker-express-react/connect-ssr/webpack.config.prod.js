var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => {
  return {
    mode: 'production',
    // The entry file. All your app roots from here.
    entry: [
      path.join(__dirname, 'src/index.js'),
      // main: path.resolve(__dirname, 'src/index.js'),
      // cssrContact: path.resolve(__dirname, 'src/components/trial/contact.js'),
      // cssrLoading: path.resolve(__dirname, 'src/components/trial/loading.js'),
      // Icon: path.resolve(__dirname, 'src/components/logo.svg'),
    ],
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
        template: 'src/index.tpl.html',
        filename: 'index.html',
        inject: 'body',
        chunksSortMode: 'dependency',
      }),
      // so that file hashes don't change unexpectedly
      new webpack.HashedModuleIdsPlugin(),
      // // handles react-loadable mapping of modules and bundles
      // new ReactLoadablePlugin({
      //   filename: './dist/react-loadable.json',
      // }),
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