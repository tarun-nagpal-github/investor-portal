var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');												   
var path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    images:path.join(__dirname,'src/assets/'),
    build: path.join(__dirname, 'dist')
  };
  var baseHref = process.env.WP_BASE_HREF ? process.env.WP_BASE_HREF : '/';
    module.exports = {
             entry: path.join(__dirname, "/src/index.js"),
            module: 
                {
                    rules:[ 
                        {
                            test: /\.js$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel-loader',
                            query: {
                                presets: [ "@babel/react","@babel/env" ]
                            }
                        },
                        { 
                            test: /\.css$/, 
                            include: PATHS.app, 
                            use: extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })  
                        },
                        { 
                            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
                            , loader: 'url-loader?limit=100000&name=[name].[ext]'
                        },
                        { 
                            test: /\.less$/, loader: 'style-loader!css-loader!less-loader' 
                        },

                    
                        {
                            test: /\.scss$/,
                            use: [
                                "style-loader", // creates style nodes from JS strings
                                "css-loader", // translates CSS into CommonJS
                                "sass-loader" // compiles Sass to CSS
                            ]
                        
                        }
                    ]
                },
                plugins: [
                        new extractTextPlugin('[name].css'),
                        new HtmlWebpackPlugin({
                            template: 'src/index.html',
                            baseUrl: baseHref
                        }),
                        new CopyWebpackPlugin([
                            {from:'src/assets',to:'assets'} 
                        ]),		   							
                        new webpack.ProvidePlugin({
                            $: 'jquery',
                            jQuery: 'jquery'
                        }),
                        new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
                        new webpack.DefinePlugin({
                            WP_BASE_HREF: JSON.stringify(baseHref),
                            "require.specified": "require.resolve"
                        })
                    ]
};