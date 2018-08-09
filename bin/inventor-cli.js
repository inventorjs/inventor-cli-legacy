#! /usr/bin/env node

/**
 * inventor 命令行入口
 *
 * @author: sunkeysun
 */

const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const program = require('commander')
const packageJson = require('../package.json')

program
    .version(packageJson.version)
    .command('new <project>')
    .description('create a inventor [project]')
    .option('-t, --template <template>', 'project skeleton template[default]', 'default')
    .action(function(project, options) {
        const template = options.template
        const templateDir = path.resolve(__dirname, `../templates/${template}`)
        const projectDir = `${process.cwd()}/${project}`
        try {
            if (!!fse.pathExistsSync(projectDir)
            && !!fs.lstatSync(projectDir).isDirectory()) {
                console.error(`Project directory ${project} has exists, can't create project`)
            } else {
                fse.copySync(templateDir, projectDir)
            }
            console.log(`Project ${project} has been created successfully.`)
        } catch (e) {
            console.error(e)
        }
    })

program.parse(process.argv)

