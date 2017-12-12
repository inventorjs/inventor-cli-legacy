/**
 * app 打包配置
 *
 * @author : sunkeysun
 */

module.export = {
    test: {
        open: true,
        entry: '@web/startup/app.js',
        view: '@server/views/apps/test/addon/js.jsx',
    }
}
