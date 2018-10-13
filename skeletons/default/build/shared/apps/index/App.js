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
                   * 应用入口
                   *
                   * @author : sunkeysun
                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = require('react-hot-loader');

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _common = require('../../common');

var common = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'handleClick',
        value: function handleClick() {
            console.log(common);
            alert(1);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: 500,
                height: 200,
                lineHeight: '200px',
                color: '#666',
                background: '#eee',
                textAlign: 'center',
                fontSize: 40,
                border: '1px solid #ccc',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: -250,
                marginTop: -100
            };
            return _react2.default.createElement(
                'div',
                { style: style, onClick: this.handleClick.bind(this) },
                'Welcome, Inventor!'
            );
        }
    }]);
    return App;
}(_react.Component)) || _class);
exports.default = App;