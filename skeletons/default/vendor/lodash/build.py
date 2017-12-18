#!/usr/bin/python3
# lodash 构建脚本 @author : sunkeysun

import os
import subprocess

functions=(
    'get',
    'range',
    'partial',
    'mapValues',
    'uniq'
)

functions = ','.join(functions)
output = os.path.dirname(__file__) + '/lodash.custom.js'
cmd = 'lodash core plus={0} -o {1}'.format(functions, output)

subprocess.run(cmd, shell=True, check=True)
