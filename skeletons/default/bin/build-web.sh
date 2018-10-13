#! /bin/bash

export NODE_ENV=production
export BABEL_ENV=web

BUILD_MODULES=''

if [ $# != 0 ]; then
    for MODULE in $*
        do
            if [ ! $BUILD_MODULES ]; then
                BUILD_MODULES="$MODULE"
            else
                BUILD_MODULES="$BUILD_MODULES&${MODULE}"
            fi
        done
fi

export BUILD_MODULES

webpack-cli --config webpack/webpack.config.js


export BABEL_ENV=server

if [ $# != 0 ]; then
    for MODULE in $*
        do
            babel "shared/${MODULE}" -d "build/shared/${MODULE}" -D
        done
else
    babel shared -d build/shared -D
fi
