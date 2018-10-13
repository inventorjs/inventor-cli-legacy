'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Error = require('./containers/Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$connect(function (state) {
    return state;
}); /**
     * 应用入口
     *
     * $author : sunkeysun
     */

var _default = function (_Component) {
    (0, _inherits3.default)(_default, _Component);

    function _default() {
        (0, _classCallCheck3.default)(this, _default);
        return (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    (0, _createClass3.default)(_default, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                routing = _props.routing,
                common = _props.common,
                variables = _props.variables,
                error = _props.error;


            return _react2.default.createElement(_Error2.default, error);
        }
    }]);
    return _default;
}(_react.Component);

exports.default = _default;