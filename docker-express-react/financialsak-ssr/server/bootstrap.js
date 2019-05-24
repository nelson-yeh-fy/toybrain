require('ignore-styles');
require('url-loader');
require('file-loader');
require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ["@babel/preset-react"],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node',
        'react-loadable/babel'
    ]
});
require('./index');


// require("@babel/core").transform("code", {
//     presets: ["@babel/preset-react"],
//   });
//     presets: ['es2015', 'react-app'],