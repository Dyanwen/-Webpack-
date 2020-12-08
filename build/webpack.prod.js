const {merge} = require("webpack-merge");
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const RemoveCommentsPlugin = require('../plugins/remove-comments-plugin.js')
const common = require('./webpack.common');

// 速度分析
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
// 体积分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


const smp = new SpeedMeasureWebpackPlugin();


/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: 'production',
    devtool:'none',
    output:{
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader:'cache-loader'
                },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader'
                ],
            },
        ]
    },
    plugins:[

        new MiniCssExtractPlugin({
            filename:'css/[name][hash:8].css',
            chunkFilename:'[id].css'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve('dist', 'dll', 'manifest.json')
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] //不删除dll目录
        }),
        // new RemoveCommentsPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'public',
                to: 'static'
            }],
            options: {
                concurrency: 100,
            }
        }),
        new webpack.DefinePlugin({
            API_BASE_URL:JSON.stringify('https://api.example.com')
        }),
        // new BundleAnalyzerPlugin(),

        new HardSourceWebpackPlugin()
    ],
    optimization: {
        sideEffects: true,
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true,
        concatenateModules: true,
        minimize: true
    }
}
module.exports = smp.wrap(merge(common, config));



