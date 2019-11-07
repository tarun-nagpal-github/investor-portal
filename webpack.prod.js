var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var commonConfig = require('./webpack.config.js');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
   //  devtool: 'source-map',
    mode: 'production',
    output: {
        path: path.join(process.cwd(), '/dist'),
        publicPath: 'http://themes.potenzaglobalsolutions.com/html/webmin-react-js-admin-dashboard-template/light/',
        filename: 'index_bundle.js'
    },
   
    optimization: {
        minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: {
                    keep_fnames: true,
                    },
            },
          })
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].css'),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                safe: true,
                discardUnused: false, // no remove @font-face
                reduceIdents: false, // no change on @keyframes names
                zindex: false // no change z-index
            },
            canPrint: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],

});