/**
 * webpack 配置类
 *
 * @author : sunkeysun
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

export default class WebpackConfigure {
    _basePath = ''
    _buildMode = ''
    _publicPath = ''

    constructor({ basePath, publicPath, buildMode='release' }) {
        this._basePath = basePath
        this._buildMode = buildMode
        this._publicPath = publicPath
    }

    get viewsPath() {
        return `${this._basePath}server/views/`
    }

    get webPath() {
        return `${this._basePath}web/`
    }

    get buildPath() {
        return `${this._basePath}build/`
    }

    get configPath() {
        return `${this.webPath}config/`
    }

    _template(appConfig) {
        const appName = appConfig.appName

        let webpackConfig = {
            name: `${appName}`,
            entry: {
                [appName]: path.resolve(this.webPath, `startup/${appName}.js`),
            },
            output: {
                filename: `${appName}.js`,
                path: path.join(this.buildPath, `web/debug/${appName}/`),
                publicPath: this._publicPath,
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
                }),
                new HtmlWebpackPlugin({
                    filename: path.resolve(this.viewsPath, `apps/${appName}/addon/assets.jsx`),
                    template: path.resolve(__dirname, 'assets.tpl'),
                    inject: false,
                }),
            ],
            resolve: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.json',
                ]
            },
        }

        if (this.buildMode === 'release') {
            webpackConfig.output = {
                filename: '[name].[chunkhash].js',
                path: path.join(this.buildPath, `web/release/${appName}/`),
                publicPath: this._publicPath,
            }
            webpackConfig.plugins.push(
                new webpack.DefinePlugin({
                    'process.env': 'production',
                }),
                new CleanWebpackPlugin([`${appName}`], {
                    root: path.resolve(this.buildPath, '/web/release/'),
                }),
                new webpack.optimize.UglifyJsPlugin()
            )
        }

        return webpackConfig
    }

    getTemplate() {
        const appsConfig = require(`${this.configPath}apps`).default
        const templates = []
        for (let appName in appsConfig) {
            if (!!appsConfig[appName].build) {
                templates.push(this._template({ appName, ...appsConfig[appName]}))
            }
        }

        return templates
    }
}
