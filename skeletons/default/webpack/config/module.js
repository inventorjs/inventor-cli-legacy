/**
 * webpack 打包配置
 *
 * @author : sunkeysun
 */

import path from 'path'

export const app = {
    common: {
        name: '通用应用模块',
    },
    index: {
        name: '首页应用模块',
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

export const vendor = {
    name: '第三方库模块',
    expose: {
        React: 'react',
        ReactDOM: 'react-dom',
        _: 'lodash',
        InventorWeb: 'inventor/web',
        InventorShared: 'inventor/shared',
    },
}
