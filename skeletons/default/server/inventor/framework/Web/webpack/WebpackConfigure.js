/**
 * webpack 配置类
 *
 * @author : sunkeysun
 */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import _ from 'lodash'
import autoprefixer from 'autoprefixer'

export default class WebpackConfigure {
    _basePath = ''
    _buildMode = ''
    _publicPath = ''

    _defaultVendor = [
        'lodash',
        'react',
        'react-dom',
        'react-router',
        'redux',
        'redux-saga',
    ]

    constructor({ basePath, publicPath, buildMode='release' }) {
        this._basePath = basePath
        this._buildMode = buildMode === 'release' ? 'release' : 'debug'
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

    get sharedPath() {
        return `${this._basePath}shared/`
    }

    get configPath() {
        return `${this.webPath}config/`
    }

    _template(name, entry, plugins=[]) {
        let webpackConfig = {
            name: name,
            entry: entry,
            output: {
                filename: '[name].js',
                path: '/',
                publicPath: this._publicPath,
            },
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        use: 'babel-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.less$/,
                        use: [
                            { loader: 'style-loader' },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true
                                },
                            },
                            {
                                loader: 'less-loader',
                            },
                        ],
                    },
                ],
            },
            plugins: [
                new webpack.DefinePlugin({
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: [
                        path.resolve(this.buildPath, `web/${this._buildMode}/common/index`),
                        path.resolve(this.buildPath, `web/${this._buildMode}/vendor/index`),
                    ],
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

        webpackConfig.plugins = webpackConfig.plugins.concat(plugins)

        if (this._buildMode === 'release') {
            webpackConfig.output = {
                filename: '[name].[chunkhash].js',
                path: '/',
                publicPath: this._publicPath,
            }

            webpackConfig.plugins.push(
                new webpack.optimize.UglifyJsPlugin()
            )
        }

        return webpackConfig
    }

    _getAppsConfig() {
        const appsConfig = require(`${this.configPath}apps`).default
        let entry = {}
        let plugins = []
        let output = []
        for (let appName in appsConfig) {
            if (!!appsConfig[appName].build) {
                const outputPath = path.join(this.buildPath, `web/${this._buildMode}/apps/${appName}/`)
                const outputName = outputPath + 'index'
                const entryPath = path.resolve(this.webPath, `apps/${appName}.js`)
                entry[outputName] = entryPath

                plugins.push(
                    new HtmlWebpackPlugin({
                        chunks: [ outputName ],
                        filename: path.resolve(this.viewsPath, `apps/${appName}/assets/index.jsx`),
                        template: path.resolve(__dirname, 'assets.tpl'),
                        inject: false,
                    })
                )

                output.push(`apps/${appName}/*`)
            }
        }

        return {
            entry,
            plugins,
            output,
        }
    }

    _getCommonConfig() {
        const commonConfig = require(`${this.configPath}common`).default
        if (!commonConfig.build) {
            return {}
        }

        let entry = {}
        let plugins = []
        let output = []
        const outputName = path.resolve(this.buildPath, `web/${this._buildMode}/common/index`)
        const entryPath = path.resolve(`${this.sharedPath}common/index.js`)
        entry[outputName] = entryPath

        plugins.push(
            new HtmlWebpackPlugin({
                chunks: [ outputName ],
                filename: path.resolve(this.viewsPath, `common/assets/index.jsx`),
                template: path.resolve(__dirname, 'assets.tpl'),
                inject: false,
            })
        )

        output.push('common/*')

        return {
            entry,
            plugins,
            output
        }
    }

    _getVendorConfig() {
        const vendorConfig = require(`${this.configPath}vendor`).default
        if (!vendorConfig.build) {
            return {}
        }

        let entry = {}
        let plugins = []
        let output = []
        const outputName = path.join(this.buildPath, `web/${this._buildMode}/vendor/index`)
        const entryPath = _.uniq(this._defaultVendor.concat(vendorConfig.items))
        entry[outputName] = entryPath

        plugins.push(
            new HtmlWebpackPlugin({
                chunks: [ outputName ],
                filename: path.resolve(this.viewsPath, `vendor/assets/index.jsx`),
                template: path.resolve(__dirname, 'assets.tpl'),
                inject: false,
            })
        )

        output.push('vendor/*')

        return {
            entry,
            plugins,
            output,
        }
    }

    getTemplate() {
        const vendorConfig = this._getVendorConfig()
        const commonConfig = this._getCommonConfig()
        const appsConfig = this._getAppsConfig()

        const { plugins: vendorPlugins=[], output: vendorOutput=[] } = vendorConfig
        const { plugins: commonPlugins=[], output: commonOutput=[] } = commonConfig
        const { plugins: appsPlugins=[], output: appsOutput=[] } = appsConfig

        const entry = _.extend({}, vendorConfig.entry, commonConfig.entry, appsConfig.entry)
        const plugins = vendorPlugins.concat(commonPlugins).concat(appsPlugins)
        const output = vendorOutput.concat(commonOutput).concat(appsOutput)

        plugins.push(
            new CleanWebpackPlugin(output, {
                root: path.join(this.buildPath, `/web/${this._buildMode}/`),
            }),
        )

        const template = this._template('template', entry, plugins)

        return template
    }
}
