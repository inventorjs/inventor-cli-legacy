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

var _dec, _class; /**
                   * 通用模块入口
                   *
                   * @author : sunkeysun
                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = require('react-hot-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Com = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = function (_Component) {
    (0, _inherits3.default)(Com, _Component);

    function Com() {
        (0, _classCallCheck3.default)(this, Com);
        return (0, _possibleConstructorReturn3.default)(this, (Com.__proto__ || Object.getPrototypeOf(Com)).apply(this, arguments));
    }

    (0, _createClass3.default)(Com, [{
        key: 'handleClick',
        value: function handleClick() {
            alert('xxxo');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { onClick: this.handleClick.bind(this) },
                'coxxxon'
            );
        }
    }]);
    return Com;
}(_react.Component)) || _class);
exports.default = Com;