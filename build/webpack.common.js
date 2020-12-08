const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const Happypack = require('happypack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


/**
 * @type {import('webpack').Configuration}
 */
const config = {

    devtool: 'none',
    entry: './src/index.js',
    output: {
        filename: 'js/[hash].js',
        chunkLoadTimeout: 30000,
        chunkFilename: 'js/[name]/[name].js',
    },
    module: {
        // noParse: /jquery|lodash/,
        // resolve: {
        //     '@': [path.resolve(__dirname, 'src')],
        //     'extensions': ['.js', '.json'],
        // },
        // externals: {
        //     //jquery通过script引入之后，全局中即有了 jQuery 变量
        //     'jquery': 'jQuery'
        // },
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { modules: false }]
                            ],

                            plugins: ['lodash']
                        },
                    }]
            },
            {
                test: /\.md$/,
                use: './loaders/markdown-loader',
            }
        ]
    },

    plugins: [
        new LodashModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "welcome webpack",
            meta: {},
            template: './index.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        // new Happypack({
        //     id: 'file', //和rule中的id=file对应
        //     use: [{
        //         loader: 'url-loader',
        //         options: {
        //             limit: 10240 //10K
        //         }
        //     }],
        // }),

    ],
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin(),

        ]
    }
};
module.exports = config;