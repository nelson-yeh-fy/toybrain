'use strict';

// used to resolve absolute path to project's root directory (where web pack.config.js should be located)
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //context: __dirname + "/",
    devtool: 'eval-source-map',
    entry: [
        // 'webpack-dev-server/client?http://localhost:3000',  // for hosting in local server
        'webpack-dev-server/client?http://0.0.0.0:3000',    // for hosting inside a docker 
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],  
    output: {        
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },

    module: {
        preLoaders: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint'
            // }
        ],
        loaders: [
            {   test: /\.css$/, loader: "style!css" },
            {   test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, 
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                //include: path.join(__dirname, 'app')
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
            },
            { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
