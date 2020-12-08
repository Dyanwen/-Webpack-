const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },
    mode: 'production',
    output: {
        filename: '[name].dll.js',
        publicPath: '/',
        path: path.resolve('dist', 'dll'),
        library: '[name]_dll' //暴露给外部使用
        //libraryTarget 指定如何暴露内容，缺省时就是 var
    },
    plugins: [
        new webpack.DllPlugin({
            //name和library一致
            name: '[name]_dll',
            context: __dirname,
            path: path.resolve('dist', 'dll', 'manifest.json') //manifest.json的生成路径
        })
    ]
}