/**
 * 应用启动文件
 *
 * @author :sunkeysun
 */

import path from 'path'
import WebKernel from 'inventor/web'
import App from '@shared/apps/test/App.jsx'
import rootReducer from '@shared/apps/test/reducers'
import rootSaga from '@shared/apps/test/sagas'
import 'antd/dist/antd.less'

WebKernel.run({ App, rootReducer, rootSaga })
