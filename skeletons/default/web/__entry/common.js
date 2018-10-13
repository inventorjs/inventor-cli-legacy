/**
 * 应用入口
 *
 * @author : sunkeysun
 */

import Kernel from 'inventor/web'
import App from '/Volumes/Projects/Github/inventor-cli/templates/default/shared/apps/common/App'
import reducers from '/Volumes/Projects/Github/inventor-cli/templates/default/shared/apps/common/redux'
import webpackConfig from '/Volumes/Projects/Github/inventor-cli/templates/default/webpack/config'
import appConfig from '/Volumes/Projects/Github/inventor-cli/templates/default/shared/common/config/app'

const kernel = new Kernel({ webpackConfig, appConfig, App, reducers })
kernel.run()
