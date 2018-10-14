/**
 * 应用入口
 *
 * @author : sunkeysun
 */

import Kernel from 'inventor/web'
import App from '/Volumes/Projects/Github/inventor-cli/skeletons/default/shared/app/common/App'
import Store from '/Volumes/Projects/Github/inventor-cli/skeletons/default/shared/app/common/store'
import webpackConfig from '/Volumes/Projects/Github/inventor-cli/skeletons/default/webpack/config/common'
import appConfig from '/Volumes/Projects/Github/inventor-cli/skeletons/default/shared/app/common/config/app'

const kernel = new Kernel({ webpackConfig, appConfig, App, Store })
kernel.run()
