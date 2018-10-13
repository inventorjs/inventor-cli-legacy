/**
 * webpack 打包配置
 *
 * @author : sunkeysun
 */

import path from 'path'

export const vendor = {
    name: '第三方库模块',
    expose: {
        React: { name: 'react', entry: 'react' },
        ReactDOM: { name: 'react-dom', entry: 'react-dom' },
        _: { name: 'lodash', entry: 'lodash' },
        Redux: { name: 'redux', entry: 'redux' },
        ReactRedux: { name: 'react-redux', entry: 'react-redux' },
        InventorWeb: { name: 'inventor/web', entry: 'inventor/shared' },
        InventorShared: { name: 'inventor/web', entry: 'inventor/shared' },
        ReactHotLoader: { name: 'react-hot-loader', entry: 'react-hot-loader' },
    },
}

export const common = {
    name: '内部公用代码模块',
    expose: {
        Index: {
            name: '#shared/common',
            entry: path.resolve(__dirname, '../../shared/common'),
        },
    },
}

export const app = {
    common: {
        name: '通用应用模块',
    },
    index: {
        name: '首页应用模块',
    },
}
