webpackJsonp([0],{

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1040);


/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _web = __webpack_require__(1041);

var _web2 = _interopRequireDefault(_web);

var _App = __webpack_require__(1046);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(1047);

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = __webpack_require__(1048);

var _sagas2 = _interopRequireDefault(_sagas);

__webpack_require__(1049);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_web2.default.run({ App: _App2.default, rootReducer: _reducers2.default, rootSaga: _sagas2.default }); /**
                                                                                                        * 应用启动文件
                                                                                                        *
                                                                                                        * @author :sunkeysun
                                                                                                        */

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Kernel = __webpack_require__(1042);

var _Kernel2 = _interopRequireDefault(_Kernel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Kernel2.default;

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * web 应用程序核心
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author : sunkeysun
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _lodash = __webpack_require__(185);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IException = __webpack_require__(1043);

var _IException2 = _interopRequireDefault(_IException);

var _webRoot = __webpack_require__(1044);

var _webRoot2 = _interopRequireDefault(_webRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Kernel = function () {
    function Kernel() {
        _classCallCheck(this, Kernel);
    }

    _createClass(Kernel, null, [{
        key: 'registerGlobal',
        value: function registerGlobal() {
            if (window.global) {
                return false;
            }

            window.global = window;

            _lodash2.default.extend(global, {
                IException: _IException2.default,
                _: _lodash2.default,
                __SIDE__: 'web'
            });
        }
    }, {
        key: 'run',
        value: function run(_ref) {
            var App = _ref.App,
                rootReducer = _ref.rootReducer,
                rootSaga = _ref.rootSaga;

            var initialState = global.__INITIAL_STATE__;
            var ssr = global.__SSR__;

            var RootComponent = (0, _webRoot2.default)({ App: App, rootReducer: rootReducer, rootSaga: rootSaga });

            var render = _reactDom2.default.render;
            if (!!ssr) {
                render = _reactDom2.default.hydrate;
            }

            return render(_react2.default.createElement(RootComponent, initialState), document.getElementById('__APP__'));
        }
    }, {
        key: 'DefaultVendor',
        get: function get() {
            return ['lodash', 'react', 'react-dom', 'react-router', 'react-router-config', 'react-router-dom', 'redux', 'react-redux', 'redux-saga'];
        }
    }]);

    return Kernel;
}();

exports.default = Kernel;


Kernel.registerGlobal();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 基础异常类
 *
 * @author : sunkeysun
 */

var IException = function (_Error) {
    _inherits(IException, _Error);

    function IException() {
        _classCallCheck(this, IException);

        var _this = _possibleConstructorReturn(this, (IException.__proto__ || Object.getPrototypeOf(IException)).call(this));

        _this.logger = app().logger('exception');
        return _this;
    }

    return IException;
}(Error);

exports.default = IException;

/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(210);

var _reactRouterDom = __webpack_require__(202);

var _configureStore = __webpack_require__(1045);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 应用入口
 *
 * @author : sunkeysun
 */

exports.default = function (_ref) {
    var App = _ref.App,
        _ref$rootReducer = _ref.rootReducer,
        rootReducer = _ref$rootReducer === undefined ? function () {} : _ref$rootReducer,
        _ref$rootSaga = _ref.rootSaga,
        rootSaga = _ref$rootSaga === undefined ? {} : _ref$rootSaga;

    return function (initialState) {
        var store = (0, _configureStore2.default)(rootReducer, rootSaga)(initialState);

        return _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(App, null)
            )
        );
    };
};

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(123);

var _reduxSaga = __webpack_require__(215);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * store 配置
 *
 * @author : sunkeysun
 */

exports.default = function (rootReducer, rootSaga) {
    var sagaMiddleware = (0, _reduxSaga2.default)();
    var middleware = (0, _redux.applyMiddleware)(sagaMiddleware);

    return function () {
        var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _redux.createStore)(rootReducer, initialState, middleware);

        sagaMiddleware.run(rootSaga);
    };
};

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 应用入口
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author : sunkeysun
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var SubMenu = _antd.Menu.SubMenu;
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Sider = _antd.Layout.Sider;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _antd.Layout,
        null,
        _react2.default.createElement(
          _antd.Layout,
          null,
          _react2.default.createElement(
            _antd.Layout,
            { style: { padding: '0 24px 24px' } },
            _react2.default.createElement(
              _antd.Breadcrumb,
              { style: { margin: '16px 0' } },
              _react2.default.createElement(
                _antd.Breadcrumb.Item,
                null,
                'List'
              ),
              _react2.default.createElement(
                _antd.Breadcrumb.Item,
                null,
                'Apxf'
              )
            ),
            _react2.default.createElement(
              Content,
              { style: { background: '#fff', padding: 24, margin: 0, minHeight: 280 } },
              'Content'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var test = function test() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];
};

exports.default = test;

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1049:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[1039]);