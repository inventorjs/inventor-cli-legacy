"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 模块入口
 *
 * $author sunkeysun
 */

var initialState = {
    error: {}
};

exports.default = {
    error: function error() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        return state;
    }
};