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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 错误展示组件
 *
 * $author : sunkeysun
 */

var styles = {
    'errorWrapper': 'index__errorWrapper',
    'errorDetail': 'index__errorDetail'
};

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
                code = _props.code,
                _props$msg = _props.msg,
                msg = _props$msg === undefined ? '' : _props$msg,
                _props$detail = _props.detail,
                detail = _props$detail === undefined ? '' : _props$detail;


            return _react2.default.createElement(
                'div',
                { className: styles.errorWrapper },
                _react2.default.createElement(
                    'p',
                    null,
                    code
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    msg
                ),
                _react2.default.createElement('p', { className: styles.errorDetail, dangerouslySetInnerHTML: { __html: detail } })
            );
        }
    }]);
    return _default;
}(_react.Component);

exports.default = _default;