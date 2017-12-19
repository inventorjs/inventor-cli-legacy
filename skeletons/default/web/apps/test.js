/**
 * 应用启动文件
 *
 * @author :sunkeysun
 */

import Kernel from 'inventor/web'
import App from '@shared/apps/test/App.jsx'
import rootReducer from '@shared/apps/test/reducers'
import rootSaga from '@shared/apps/test/sagas'
import 'antd/dist/antd.less'

Kernel.run({ App, rootReducer, rootSaga })
