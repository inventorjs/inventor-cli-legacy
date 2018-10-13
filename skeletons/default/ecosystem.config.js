/**
 * pm2 配置文件
 *
 * @author: sunkeysun
 */

const DEPLOY_ENV = 'production'

module.exports = {
    apps: [
        {
            name: 'project',
            cwd: '/data/release/project',
            script: 'build/server/startup/app.js',
            interpreter: 'node',
            exec_mode: 'cluster',
            instances: -1,
            autorestart: true,
            watch: false,
            max_memory_restart: '4G',
            merge_logs: true,
            output: 'logs/pm2-project-info.log',
            error: 'logs/pm2-project-error.log',
            env: {
                NODE_ENV: DEPLOY_ENV,
                SERVER_PORT: 9199,
            },
        },
        {
            name: 'project-local',
            script: 'server/startup/app.js',
            interpreter: 'babel-node',
            autorestart: true,
            watch: ['server/'],
            max_memory_restart: '4G',
            env: {
                NODE_ENV: 'local',
                BABEL_ENV: 'server',
                SERVER_PORT: 9199,
                LOCALHOST: '127.0.0.1',
                WEB_PORT: 9099,
            },
        },
    ],
}
