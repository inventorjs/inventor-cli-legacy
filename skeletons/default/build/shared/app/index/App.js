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

var _dec, _dec2, _class; /**
                          * 应用入口
                          *
                          * @author : sunkeysun
                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _reactHotLoader = require('react-hot-loader');

var _reactRouterDom = require('react-router-dom');

var _reactRouterConfig = require('react-router-config');

var _common = require('../../common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _common2.default
}, {
    path: '/about',
    exact: true,
    component: function component(props) {
        console.log(props);
        return _react2.default.createElement(
            'div',
            null,
            'about'
        );
    }
}];

var App = (_dec = (0, _reactHotLoader.hot)(module), _dec2 = (0, _mobxReact.inject)('store'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'handleClick',
        value: function handleClick() {
            alert(1);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'handlePlus',
        value: function handlePlus() {
            this.props.store.common.addName('x');
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
                { style: style },
                (0, _reactRouterConfig.renderRoutes)(routes),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/about' },
                    'about'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: {
                            pathname: '/?a=1',
                            state: { isLink: true }
                        } },
                    'index'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.store.common.staffname
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.handlePlus.bind(this) },
                    '\u52A0'
                )
            );
        }
    }]);
    return App;
}(_react.Component)) || _class) || _class) || _class);
exports.default = App;