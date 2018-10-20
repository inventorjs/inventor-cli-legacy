'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Common = require('./states/Common');

var _Common2 = _interopRequireDefault(_Common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = function () {
    function Store() {
        var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, Store);

        this.common = new _Common2.default(initialState.common);
    }

    (0, _createClass3.default)(Store, [{
        key: 'init',
        value: function init(stateName) {
            if (!!stateName && this[stateName]) {}
        }
    }]);
    return Store;
}();

exports.default = Store;