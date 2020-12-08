const {merge} = require("webpack-merge");
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');


/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: path.resolve(__dirname,'dist'),//根目录
        progress:true,//显示进度条
        compress: true,//自动gzip压缩
        port: 9000,
        hot: true,
        // hotOnly:true,
        proxy: {
            '/api': {
                target: 'https://api.github.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            API_BASE_URL: JSON.stringify('https://api.example.com')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
module.exports = merge(common, config)