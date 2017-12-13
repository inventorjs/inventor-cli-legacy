/**
 * webpack 配置文件
 *
 * @author : sunkeysun
 */

var path = require('path')
var webpack = require('webpack')

var webpackConfig = {
    name: 'app',
    context: path.resolve(__dirname, '../'),
    entry: {
        test: './startup/test.js',
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'test.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __APP_NAME__: 'test',
        }),
    ],
    resolve: {
        extensions: [
            ".js",
            ".jsx",
        ],
        alias: {
            "inventor": path.resolve(__dirname, '../../server/inventor'),
            "@server": path.resolve(__dirname, '../../server'),
            "@shared": path.resolve(__dirname, '../../shared'),
        }
    },
}

console.log(webpackConfig)

module.exports = webpackConfig
