#!/usr/bin/env node
/// <reference path="../typings/webpack-ext-reloader.d.ts" />
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("minimist"), require("webpack"), require("lodash"), require("useragent"), require("ws"), require("webpack-sources"));
	else if(typeof define === 'function' && define.amd)
		define(["minimist", "webpack", "lodash", "useragent", "ws", "webpack-sources"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("minimist"), require("webpack"), require("lodash"), require("useragent"), require("ws"), require("webpack-sources")) : factory(root["minimist"], root["webpack"], root["lodash"], root["useragent"], root["ws"], root["webpack-sources"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__3476__, __WEBPACK_EXTERNAL_MODULE__9582__, __WEBPACK_EXTERNAL_MODULE__467__, __WEBPACK_EXTERNAL_MODULE__6884__, __WEBPACK_EXTERNAL_MODULE__7836__, __WEBPACK_EXTERNAL_MODULE__5327__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var util_1 = __webpack_require__(3837);

var webpack = __webpack_require__(9582);

var ExtensionReloader_1 = __webpack_require__(6048);

var logger_1 = __webpack_require__(6373);

var ExtensionCompiler = /*#__PURE__*/function () {
  function ExtensionCompiler(config, pluginOptions) {
    _classCallCheck(this, ExtensionCompiler);

    this.compiler = webpack(config);
    new ExtensionReloader_1["default"](pluginOptions).apply(this.compiler);
  }

  _createClass(ExtensionCompiler, [{
    key: "watch",
    value: function watch() {
      // eslint-disable-next-line consistent-return
      this.compiler.watch({}, function (err, stats) {
        if (err) {
          return ExtensionCompiler.treatErrors(err);
        }

        (0, logger_1.info)(stats.toString({
          colors: true
        }));
      });
    }
  }], [{
    key: "treatErrors",
    value: function treatErrors(err) {
      (0, util_1.log)(err.stack || err);

      if (err.details) {
        (0, util_1.log)(err.details);
      }
    }
  }]);

  return ExtensionCompiler;
}();

exports["default"] = ExtensionCompiler;

/***/ }),

/***/ 5106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable no-throw-literal */

var path_1 = __webpack_require__(1017);

var process_1 = __webpack_require__(7282);

var util_1 = __webpack_require__(3837);

var options_constants_1 = __webpack_require__(8804);

var args_constant_1 = __webpack_require__(2205);

var events_constants_1 = __webpack_require__(3443);

var manual_1 = __webpack_require__(3128);

exports["default"] = function (args) {
  if (args[args_constant_1.HELP]) {
    (0, util_1.log)((0, manual_1["default"])());
    throw {
      type: events_constants_1.SIG_EXIT,
      payload: 0
    };
  }

  var config = args[args_constant_1.CONFIG] || options_constants_1.DEFAULT_CONFIG;
  var port = args[args_constant_1.PORT] || options_constants_1.DEFAULT_PORT;
  var manifest = args[args_constant_1.MANIFEST] || null;
  var pluginOptions = {
    manifest: manifest,
    port: port,
    reloadPage: !args[args_constant_1.NO_PAGE_RELOAD]
  };
  var optPath = (0, path_1.resolve)((0, process_1.cwd)(), config);

  try {
    // eslint-disable-next-line no-eval
    var webpackConfig = eval("require")(optPath);
    return {
      webpackConfig: webpackConfig,
      pluginOptions: pluginOptions
    };
  } catch (err) {
    (0, util_1.log)("[Error] Couldn't require the file: ".concat(optPath));
    (0, util_1.log)(err);
    throw {
      type: events_constants_1.SIG_EXIT,
      payload: 1
    };
  }
};

/***/ }),

/***/ 2205:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MANIFEST = exports.NO_PAGE_RELOAD = exports.PORT = exports.CONFIG = exports.HELP = void 0;
exports.HELP = "help";
exports.CONFIG = "config";
exports.PORT = "port";
exports.NO_PAGE_RELOAD = "no-page-reload";
exports.MANIFEST = "manifest";

/***/ }),

/***/ 3443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SIG_EXIT = void 0;
exports.SIG_EXIT = "SIG_EXIT";

/***/ }),

/***/ 8777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var minimist = __webpack_require__(3476);

var source_map_support_1 = __webpack_require__(6252);

var util_1 = __webpack_require__(3837);

var args_parser_1 = __webpack_require__(5106);

var events_constants_1 = __webpack_require__(3443);

var ExtensionCompiler_1 = __webpack_require__(5658);

(0, source_map_support_1.install)();

var _a = minimist(process.argv.slice(2)),
    _ = _a._,
    args = __rest(_a, ["_"]);

try {
  var _ref = (0, args_parser_1["default"])(args),
      webpackConfig = _ref.webpackConfig,
      pluginOptions = _ref.pluginOptions;

  var compiler = new ExtensionCompiler_1["default"](webpackConfig, pluginOptions);
  compiler.watch();
} catch (err) {
  if (err.type === events_constants_1.SIG_EXIT) {
    process.exit(err.payload);
  } else {
    (0, util_1.log)(err);
    process.exit(err.code);
  }
}

/***/ }),

/***/ 3128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable no-useless-escape */

var options_constants_1 = __webpack_require__(8804);

exports["default"] = function () {
  return "\nUsage:\n    wer [--config <config_path>] [--port <port_number>] [--no-page-reload] [--content-script <content_script_paths>] [--background <bg_script_path>] [--extension-page <extension_page_paths>]\n\nComplete API:\n+------------------------------------------------------------------------------------------------------------+\n|        name        |    default        |                               description                         |\n|--------------------|-------------------|-------------------------------------------------------------------|\n| --help             |                   | Show this help\n| --config           | ".concat(options_constants_1.DEFAULT_CONFIG, " | The webpack configuration file path                               |\n| --port             | ").concat(options_constants_1.DEFAULT_PORT, "   | The port to run the server                                        |\n| --content-script   | ").concat(options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY, "    | The **entry/entries** name(s) for the content script(s)           |\n| --background       | ").concat(options_constants_1.DEFAULT_BACKGROUND_ENTRY, "        | The **entry** name for the background script                      |\n| --extension-page   | ").concat(options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY, "             | The **entry/entries** name(s) for the extension pages(s)          |\n| --manifest         |        null       | The **manifest.json** path                                        |\n| --no-page-reload   |                   | Disable the auto reloading of all **pages** which runs the plugin |\n+------------------------------------------------------------------------------------------------------------+\n");
};

/***/ }),

/***/ 6048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var webpack_1 = __webpack_require__(9582);

var hot_reload_1 = __webpack_require__(3009);

var warnings_1 = __webpack_require__(2436);

var middleware_1 = __webpack_require__(6392);

var default_options_1 = __webpack_require__(6961);

var logger_1 = __webpack_require__(6373);

var manifest_1 = __webpack_require__(6005);

var AbstractExtensionReloader_1 = __webpack_require__(4257);

var CompilerEventsFacade_1 = __webpack_require__(8675);

var ExtensionReloaderImpl = /*#__PURE__*/function (_AbstractExtensionRel) {
  _inherits(ExtensionReloaderImpl, _AbstractExtensionRel);

  var _super = _createSuper(ExtensionReloaderImpl);

  function ExtensionReloaderImpl(options) {
    var _this;

    _classCallCheck(this, ExtensionReloaderImpl);

    _this = _super.call(this);
    _this._opts = options;
    _this._chunkVersions = {};
    return _this;
  }

  _createClass(ExtensionReloaderImpl, [{
    key: "_isWebpackGToEV5",
    value: function _isWebpackGToEV5() {
      if (webpack_1.version) {
        var _webpack_1$version$sp = webpack_1.version.split("."),
            _webpack_1$version$sp2 = _slicedToArray(_webpack_1$version$sp, 1),
            major = _webpack_1$version$sp2[0];

        if (parseInt(major, 10) >= 5) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_whatChanged",
    value: function _whatChanged(chunks, _ref) {
      var background = _ref.background,
          contentScript = _ref.contentScript,
          extensionPage = _ref.extensionPage;
      var changedChunks = []; // eslint-disable-next-line no-restricted-syntax

      var _iterator = _createForOfIteratorHelper(chunks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var chunk = _step.value;
          var oldVersion = this._chunkVersions[chunk.name];
          this._chunkVersions[chunk.name] = chunk.hash;

          if (chunk.hash !== oldVersion) {
            changedChunks.push(chunk);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var contentOrBgChanged = changedChunks.some(function (_ref2) {
        var name = _ref2.name;
        var contentChanged = false;
        var bgChanged = name === background;

        if (Array.isArray(contentScript)) {
          contentChanged = contentScript.some(function (script) {
            return script === name;
          });
        } else {
          contentChanged = name === contentScript;
        }

        return contentChanged || bgChanged;
      }); //

      var onlyPageChanged = !contentOrBgChanged && changedChunks.some(function (_ref3) {
        var name = _ref3.name;
        var pageChanged = false;

        if (Array.isArray(extensionPage)) {
          pageChanged = extensionPage.some(function (script) {
            return script === name;
          });
        } else {
          pageChanged = name === extensionPage;
        } //


        return pageChanged;
      });
      return {
        contentOrBgChanged: contentOrBgChanged,
        onlyPageChanged: onlyPageChanged
      };
    }
  }, {
    key: "_registerPlugin",
    value: function _registerPlugin(compiler) {
      var _this2 = this;

      var _ref4 = (0, lodash_1.merge)(default_options_1["default"], this._opts),
          reloadPage = _ref4.reloadPage,
          port = _ref4.port,
          entries = _ref4.entries,
          manifest = _ref4.manifest;

      var parsedEntries = manifest ? (0, manifest_1.extractEntries)(compiler.options.entry, manifest, compiler.options.output) : entries;
      this._eventAPI = new CompilerEventsFacade_1["default"](compiler);
      this._injector = (0, middleware_1.middlewareInjector)(parsedEntries, {
        port: port,
        reloadPage: reloadPage
      });
      this._triggerer = (0, hot_reload_1.changesTriggerer)(port, reloadPage);

      this._eventAPI.afterOptimizeChunks(function (comp, chunks) {
        comp.assets = Object.assign(Object.assign({}, comp.assets), _this2._injector(comp.assets, chunks));
      });

      this._eventAPI.afterEmit(function (comp) {
        var _this2$_whatChanged = _this2._whatChanged(comp.chunks, parsedEntries),
            contentOrBgChanged = _this2$_whatChanged.contentOrBgChanged,
            onlyPageChanged = _this2$_whatChanged.onlyPageChanged;

        if (contentOrBgChanged || onlyPageChanged) {
          _this2._triggerer(onlyPageChanged);
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(compiler) {
      if ((this._isWebpackGToEV5() ? compiler.options.mode : process.env.NODE_ENV) === "development") {
        this._registerPlugin(compiler);
      } else {
        (0, logger_1.warn)(warnings_1.onlyOnDevelopmentMsg.get());
      }
    }
  }]);

  return ExtensionReloaderImpl;
}(AbstractExtensionReloader_1["default"]);

exports["default"] = ExtensionReloaderImpl;

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NEW_FAST_RELOAD_CALLS = exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = exports.NEW_FAST_RELOAD_CHROME_VERSION = exports.FAST_RELOAD_WAIT = exports.FAST_RELOAD_CALLS = exports.FAST_RELOAD_DEBOUNCING_FRAME = void 0;
/**
 * Chrome lets only a max number of calls in a time frame
 * before block the plugin for be reloading itself to much
 * @see https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader/issues/2
 */

exports.FAST_RELOAD_DEBOUNCING_FRAME = 2000;
exports.FAST_RELOAD_CALLS = 6;
exports.FAST_RELOAD_WAIT = 10 * 1000; // ================================================================================================================= //

/**
 * A new reloading rate was created after opening a bug ticket on
 * Chromium, and the revision was merged to master
 * @see https://chromium-review.googlesource.com/c/chromium/src/+/1340272
 */

/**
 * The Chrome/Chromium version number that includes the new rates
 * @see https://storage.googleapis.com/chromium-find-releases-static/d3b.html#d3b25e1380984b2f1f23d0e8dc1a337743c6caaf
 */

exports.NEW_FAST_RELOAD_CHROME_VERSION = [73, 0, 3637];
exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = 1000;
exports.NEW_FAST_RELOAD_CALLS = 30;

/***/ }),

/***/ 1918:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEBUG = exports.ERROR = exports.WARN = exports.INFO = exports.LOG = exports.NONE = void 0;
exports.NONE = 0;
exports.LOG = 1;
exports.INFO = 2;
exports.WARN = 3;
exports.ERROR = 4;
exports.DEBUG = 5;

/***/ }),

/***/ 5934:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SOCKET_ERR_CODE_REF = exports.RECONNECT_ATTEMPT = exports.RECONNECT_INTERVAL = void 0;
exports.RECONNECT_INTERVAL = 2000;
exports.RECONNECT_ATTEMPT = 50;
exports.SOCKET_ERR_CODE_REF = "https://tools.ietf.org/html/rfc6455#section-7.4.1";

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_EXTENSION_PAGE_ENTRY = exports.DEFAULT_BACKGROUND_ENTRY = exports.DEFAULT_CONTENT_SCRIPT_ENTRY = exports.DEFAULT_RELOAD_PAGE = exports.DEFAULT_CONFIG = exports.DEFAULT_PORT = void 0;
exports.DEFAULT_PORT = 9090;
exports.DEFAULT_CONFIG = "webpack.config.js";
exports.DEFAULT_RELOAD_PAGE = true;
exports.DEFAULT_CONTENT_SCRIPT_ENTRY = "content-script";
exports.DEFAULT_BACKGROUND_ENTRY = "background";
exports.DEFAULT_EXTENSION_PAGE_ENTRY = "popup";

/***/ }),

/***/ 6578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.REF_URL = void 0;
exports.REF_URL = "https://github.com/rubenspgcavalcante/webpack-extension-reloader/wiki/General-Information";

/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var useragent_1 = __webpack_require__(6884);

var ws_1 = __webpack_require__(7836);

var logger_1 = __webpack_require__(6373);

var SignEmitter_1 = __webpack_require__(7574);

var HotReloaderServer = /*#__PURE__*/function () {
  function HotReloaderServer(port) {
    _classCallCheck(this, HotReloaderServer);

    this._server = new ws_1.Server({
      port: port
    });
  }

  _createClass(HotReloaderServer, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      this._server.on("connection", function (ws, msg) {
        var userAgent = (0, useragent_1.parse)(msg.headers["user-agent"]);
        _this._signEmitter = new SignEmitter_1["default"](_this._server, userAgent);
        ws.on("message", function (data) {
          return (0, logger_1.info)("Message from ".concat(userAgent.family, ": ").concat(JSON.parse(data).payload));
        });
        ws.on("error", function () {// NOOP - swallow socket errors due to http://git.io/vbhSN
        });
      });
    }
  }, {
    key: "signChange",
    value: function signChange(reloadPage, onlyPageChanged) {
      if (this._signEmitter) {
        return this._signEmitter.safeSignChange(reloadPage, onlyPageChanged);
      }

      return Promise.resolve(null);
    }
  }]);

  return HotReloaderServer;
}();

exports["default"] = HotReloaderServer;

/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var ws_1 = __webpack_require__(7836);

var fast_reloading_constants_1 = __webpack_require__(9871);

var block_protection_1 = __webpack_require__(9832);

var signals_1 = __webpack_require__(1873);

var SignEmitter = /*#__PURE__*/function () {
  function SignEmitter(server, _ref) {
    var family = _ref.family,
        major = _ref.major,
        minor = _ref.minor,
        patch = _ref.patch;

    _classCallCheck(this, SignEmitter);

    this._server = server;

    if (family === "Chrome") {
      var _ref2 = this._satisfies([parseInt(major, 10), parseInt(minor, 10), parseInt(patch, 10)], fast_reloading_constants_1.NEW_FAST_RELOAD_CHROME_VERSION) ? [fast_reloading_constants_1.NEW_FAST_RELOAD_CALLS, fast_reloading_constants_1.NEW_FAST_RELOAD_DEBOUNCING_FRAME] : [fast_reloading_constants_1.FAST_RELOAD_CALLS, fast_reloading_constants_1.FAST_RELOAD_DEBOUNCING_FRAME],
          _ref3 = _slicedToArray(_ref2, 2),
          reloadCalls = _ref3[0],
          reloadDeboucingFrame = _ref3[1];

      var debouncer = (0, block_protection_1.debounceSignal)(reloadDeboucingFrame, this);
      var blocker = (0, block_protection_1.fastReloadBlocker)(reloadCalls, fast_reloading_constants_1.FAST_RELOAD_WAIT, this);
      this._safeSignChange = debouncer(blocker(this._setupSafeSignChange()));
    } else {
      this._safeSignChange = this._setupSafeSignChange();
    }
  }

  _createClass(SignEmitter, [{
    key: "safeSignChange",
    value: function safeSignChange(reloadPage, onlyPageChanged) {
      var _this = this;

      return new Promise(function (res, rej) {
        _this._safeSignChange(reloadPage, onlyPageChanged, res, rej);
      });
    }
  }, {
    key: "_setupSafeSignChange",
    value: function _setupSafeSignChange() {
      var _this2 = this;

      return function (reloadPage, onlyPageChanged, onSuccess, onError) {
        try {
          _this2._sendMsg((0, signals_1.signChange)({
            reloadPage: reloadPage,
            onlyPageChanged: onlyPageChanged
          }));

          onSuccess();
        } catch (err) {
          onError(err);
        }
      };
    }
  }, {
    key: "_sendMsg",
    value: function _sendMsg(msg) {
      this._server.clients.forEach(function (client) {
        if (client.readyState === ws_1.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    }
  }, {
    key: "_satisfies",
    value: function _satisfies(browserVersion, targetVersion) {
      var versionPairs = (0, lodash_1.zip)(browserVersion, targetVersion); // eslint-disable-next-line no-restricted-syntax

      var _iterator = _createForOfIteratorHelper(versionPairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              _step$value$ = _step$value[0],
              version = _step$value$ === void 0 ? 0 : _step$value$,
              _step$value$2 = _step$value[1],
              target = _step$value$2 === void 0 ? 0 : _step$value$2;

          if (version !== target) {
            return version > target;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }]);

  return SignEmitter;
}();

exports["default"] = SignEmitter;

/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var logger_1 = __webpack_require__(6373);

var HotReloaderServer_1 = __webpack_require__(1692);

var changesTriggerer = function changesTriggerer(port, reloadPage) {
  var server = new HotReloaderServer_1["default"](port);
  (0, logger_1.info)("[ Starting the Web Extension Hot Reload Server... ]");
  server.listen();
  return function (onlyPageChanged) {
    return server.signChange(reloadPage, onlyPageChanged);
  };
};

exports["default"] = changesTriggerer;

/***/ }),

/***/ 3009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changesTriggerer = void 0;

var changes_triggerer_1 = __webpack_require__(3362);

exports.changesTriggerer = changes_triggerer_1["default"];

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var safe_1 = __webpack_require__(4431);

var lodash_1 = __webpack_require__(467);

var log_constants_1 = __webpack_require__(1918);

var reference_docs_constants_1 = __webpack_require__(6578);

var Message = /*#__PURE__*/function () {
  function Message(type, referenceNumber, message) {
    _classCallCheck(this, Message);

    this.type = type;
    this.referenceNumber = referenceNumber;
    this.message = message;
  }

  _createClass(Message, [{
    key: "get",
    value: function get() {
      var additionalData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var code = "WER-".concat(this.getPrefix()).concat(this.referenceNumber);
      var refLink = (0, safe_1.bold)((0, safe_1.white)("".concat(reference_docs_constants_1.REF_URL, "#").concat(code)));
      return "[".concat(code, "] ").concat((0, lodash_1.template)(this.message, additionalData), ".\nVisit ").concat(refLink, " for complete details\n");
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.get();
    }
  }, {
    key: "getPrefix",
    value: function getPrefix() {
      switch (this.type) {
        case log_constants_1.INFO:
          return "I";

        case log_constants_1.WARN:
          return "W";

        case log_constants_1.ERROR:
          return "E";

        default:
          return "";
      }
    }
  }]);

  return Message;
}();

exports["default"] = Message;

/***/ }),

/***/ 1049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bgScriptManifestRequiredMsg = exports.bgScriptEntryErrorMsg = void 0;
/* eslint-disable no-multi-str */

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.bgScriptEntryErrorMsg = new Message_1["default"](log_constants_1.ERROR, 1, "Background script webpack entry not found/match \
the provided on 'manifest.json' or 'entry.background' \
option of the plugin");
exports.bgScriptManifestRequiredMsg = new Message_1["default"](log_constants_1.ERROR, 2, "Background script on manifest is required");

/***/ }),

/***/ 2436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.onlyOnDevelopmentMsg = void 0;
/* eslint-disable no-multi-str */

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.onlyOnDevelopmentMsg = new Message_1["default"](log_constants_1.WARN, 1, "Warning, Extension Reloader Plugin was not enabled! \
It runs only on webpack --mode=development (v5 or more) \
or with NODE_ENV=development (lower versions)");

/***/ }),

/***/ 6392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.middlewareInjector = void 0;

var middleware_injector_1 = __webpack_require__(91);

exports.middlewareInjector = middleware_injector_1["default"];

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_sources_1 = __webpack_require__(5327);

var middleware_source_builder_1 = __webpack_require__(6271);

var middlewareInjector = function middlewareInjector(_ref, _ref2) {
  var background = _ref.background,
      contentScript = _ref.contentScript,
      extensionPage = _ref.extensionPage;
  var port = _ref2.port,
      reloadPage = _ref2.reloadPage;
  var source = (0, middleware_source_builder_1["default"])({
    port: port,
    reloadPage: reloadPage
  });

  var sourceFactory = function sourceFactory() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    return _construct(webpack_sources_1.ConcatSource, sources);
  };

  var matchBgOrContentOrPage = function matchBgOrContentOrPage(name) {
    return name === background || name === contentScript || contentScript && contentScript.includes(name) || name === extensionPage || extensionPage && extensionPage.includes(name);
  };

  return function (assets, chunks) {
    return Array.from(chunks).reduce(function (prev, _ref3) {
      var name = _ref3.name,
          files = _ref3.files;

      if (matchBgOrContentOrPage(name)) {
        files.forEach(function (entryPoint) {
          if (/\.js$/.test(entryPoint)) {
            var finalSrc = sourceFactory(source, assets[entryPoint]);
            prev[entryPoint] = finalSrc;
          }
        });
      }

      return prev;
    }, {});
  };
};

exports["default"] = middlewareInjector;

/***/ }),

/***/ 6271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var wer_middleware_raw_1 = __webpack_require__(3653);

var raw_loader_webextension_polyfill_1 = __webpack_require__(2634);

var webpack_sources_1 = __webpack_require__(5327);

var middleware_config_constants_1 = __webpack_require__(5934);

var signals = __webpack_require__(1873);

function middleWareSourceBuilder(_ref) {
  var port = _ref.port,
      reloadPage = _ref.reloadPage;
  var tmpl = (0, lodash_1.template)(wer_middleware_raw_1["default"]);
  return new webpack_sources_1.RawSource(tmpl({
    WSHost: "ws://localhost:".concat(port),
    config: JSON.stringify({
      RECONNECT_INTERVAL: middleware_config_constants_1.RECONNECT_INTERVAL,
      RECONNECT_ATTEMPT: middleware_config_constants_1.RECONNECT_ATTEMPT,
      SOCKET_ERR_CODE_REF: middleware_config_constants_1.SOCKET_ERR_CODE_REF
    }),
    polyfillSource: "\"||".concat(raw_loader_webextension_polyfill_1["default"], "\""),
    reloadPage: "".concat(reloadPage),
    signals: JSON.stringify(signals)
  }));
}

exports["default"] = middleWareSourceBuilder;

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fastReloadBlocker = exports.debounceSignal = void 0;

var lodash_1 = __webpack_require__(467);

var logger_1 = __webpack_require__(6373);

var debounceSignal = function debounceSignal(deboucingFrame, context) {
  return function (func) {
    if (context) {
      (0, lodash_1.runInContext)(context);
    }

    return (0, lodash_1.debounce)(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return func.apply(context, args);
    }, deboucingFrame);
  };
};

exports.debounceSignal = debounceSignal;

var fastReloadBlocker = function fastReloadBlocker(maxCalls, wait, context) {
  return function (func) {
    var calls = 0;
    var inWait = false; // eslint-disable-next-line consistent-return

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (inWait) {
        /* do nothing */
      } else if (calls === maxCalls) {
        calls = 0;
        inWait = true;
        var interval = wait / 1000;
        (0, logger_1.warn)("Please wait ".concat(interval, " secs. for next reload to prevent your extension being blocked"));
        var logInterval = setInterval(function () {
          return (0, logger_1.warn)("".concat(--interval, " ..."));
        }, 1000);
        setTimeout(function () {
          clearInterval(logInterval);
          (0, logger_1.info)("Signing for reload now");
          func.apply(context, args);
          inWait = false;
        }, wait);
      } else {
        calls++;
        return func.apply(context, args);
      }
    };
  };
};

exports.fastReloadBlocker = fastReloadBlocker;

/***/ }),

/***/ 6961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var options_constants_1 = __webpack_require__(8804);

exports["default"] = {
  entries: {
    background: options_constants_1.DEFAULT_BACKGROUND_ENTRY,
    contentScript: options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY,
    extensionPage: options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY
  },
  port: options_constants_1.DEFAULT_PORT,
  reloadPage: options_constants_1.DEFAULT_RELOAD_PAGE
};

/***/ }),

/***/ 6373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.debug = exports.error = exports.warn = exports.info = exports.log = exports.setLogLevel = void 0;

var safe_1 = __webpack_require__(4431);

var log_constants_1 = __webpack_require__(1918);

var logLevel; // eslint-disable-next-line no-return-assign

var setLogLevel = function setLogLevel(level) {
  return logLevel = level;
};

exports.setLogLevel = setLogLevel;

var log = function log(message) {
  return logLevel >= log_constants_1.LOG && console.log(message);
};

exports.log = log;

var info = function info(message) {
  return logLevel >= log_constants_1.INFO && console.info((0, safe_1.green)(message));
};

exports.info = info;

var warn = function warn(message) {
  return logLevel >= log_constants_1.WARN && console.warn((0, safe_1.yellow)(message));
};

exports.warn = warn;

var error = function error(message) {
  return logLevel >= log_constants_1.ERROR && console.error((0, safe_1.red)(message));
};

exports.error = error;

var debug = function debug(message) {
  return logLevel >= log_constants_1.DEBUG && console.debug((0, safe_1.white)((0, exports.debug)(message)));
};

exports.debug = debug;

/***/ }),

/***/ 6005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractEntries = void 0;

var fs_1 = __webpack_require__(7147);

var lodash_1 = __webpack_require__(467);

var errors_1 = __webpack_require__(1049);

function extractEntries(webpackEntry, manifestPath) {
  var webpackOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var manifestJson = JSON.parse((0, fs_1.readFileSync)(manifestPath).toString());
  var background = manifestJson.background,
      content_scripts = manifestJson.content_scripts;
  var filename = webpackOutput.filename;

  if (!filename) {
    throw new Error("Please specify the `output.filename` in your webpack config.");
  }

  if (!(background === null || background === void 0 ? void 0 : background.scripts)) {
    throw new TypeError(errors_1.bgScriptManifestRequiredMsg.get());
  }

  var bgScriptFileNames = background.scripts;
  var toRemove = filename.replace("[name]", "");
  var bgWebpackEntry = Object.keys(webpackEntry).find(function (entryName) {
    return bgScriptFileNames.some(function (bgManifest) {
      return bgManifest.replace(toRemove, "") === entryName;
    });
  });

  if (!bgWebpackEntry) {
    throw new TypeError(errors_1.bgScriptEntryErrorMsg.get());
  }

  var contentEntries = content_scripts ? (0, lodash_1.flatMapDeep)(Object.keys(webpackEntry), function (entryName) {
    return content_scripts.map(function (_ref) {
      var js = _ref.js;
      return js.map(function (contentItem) {
        return contentItem.replace(toRemove, "");
      }).filter(function (contentItem) {
        return contentItem === entryName;
      });
    });
  }) : null;
  return {
    background: bgWebpackEntry,
    contentScript: contentEntries,
    extensionPage: null
  };
}

exports.extractEntries = extractEntries;

/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.signLog = exports.signReloaded = exports.signReload = exports.signChange = exports.SIGN_CONNECT = exports.SIGN_LOG = exports.SIGN_RELOADED = exports.SIGN_RELOAD = exports.SIGN_CHANGE = void 0;
exports.SIGN_CHANGE = "SIGN_CHANGE";
exports.SIGN_RELOAD = "SIGN_RELOAD";
exports.SIGN_RELOADED = "SIGN_RELOADED";
exports.SIGN_LOG = "SIGN_LOG";
exports.SIGN_CONNECT = "SIGN_CONNECT";

var signChange = function signChange(_ref) {
  var _ref$reloadPage = _ref.reloadPage,
      reloadPage = _ref$reloadPage === void 0 ? true : _ref$reloadPage,
      _ref$onlyPageChanged = _ref.onlyPageChanged,
      onlyPageChanged = _ref$onlyPageChanged === void 0 ? false : _ref$onlyPageChanged;
  return {
    payload: {
      reloadPage: reloadPage,
      onlyPageChanged: onlyPageChanged
    },
    type: exports.SIGN_CHANGE
  };
};

exports.signChange = signChange;

var signReload = function signReload() {
  return {
    type: exports.SIGN_RELOAD
  };
};

exports.signReload = signReload;

var signReloaded = function signReloaded(msg) {
  return {
    payload: msg,
    type: exports.SIGN_RELOADED
  };
};

exports.signReloaded = signReloaded;

var signLog = function signLog(msg) {
  return {
    payload: msg,
    type: exports.SIGN_LOG
  };
};

exports.signLog = signLog;

/***/ }),

/***/ 4257:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var AbstractExtensionReloader = /*#__PURE__*/_createClass(function AbstractExtensionReloader() {
  _classCallCheck(this, AbstractExtensionReloader);
});

exports["default"] = AbstractExtensionReloader;

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_1 = __webpack_require__(9582);

var CompilerEventsFacade = /*#__PURE__*/function () {
  function CompilerEventsFacade(compiler) {
    _classCallCheck(this, CompilerEventsFacade);

    this._compiler = compiler;
  }

  _createClass(CompilerEventsFacade, [{
    key: "afterOptimizeChunks",
    value: function afterOptimizeChunks(call) {
      return this._compiler.hooks.compilation.tap(CompilerEventsFacade.extensionName, function (comp) {
        var chunks = new Set();

        var afterOptimizeChunkAssets = function afterOptimizeChunkAssets(chunksAfterOptimization) {
          call(comp, chunksAfterOptimization);
        };

        comp.hooks.processAssets.tap({
          name: CompilerEventsFacade.extensionName,
          stage: webpack_1.Compilation.PROCESS_ASSETS_STAGE_ANALYSE
        }, function () {
          comp.chunks.forEach(function (chunk) {
            chunks.add(chunk);
          });
          afterOptimizeChunkAssets(chunks);
        });
      });
    }
  }, {
    key: "afterEmit",
    value: function afterEmit(call) {
      return this._compiler.hooks.afterEmit.tap(CompilerEventsFacade.extensionName, call);
    }
  }]);

  return CompilerEventsFacade;
}();

exports["default"] = CompilerEventsFacade;
CompilerEventsFacade.extensionName = "webpack-ext-reloader";

/***/ }),

/***/ 5420:
/***/ ((module) => {

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ 2517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __webpack_require__(3837);
var ansiStyles = colors.styles = __webpack_require__(5784);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = (__webpack_require__(6561).supportsColor);

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if(!styleMap && style in colors){
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __webpack_require__(5117);
colors.zalgo = __webpack_require__(1492);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(6260)(colors);
colors.maps.zebra = __webpack_require__(3270)(colors);
colors.maps.rainbow = __webpack_require__(5920)(colors);
colors.maps.random = __webpack_require__(2449)(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),

/***/ 5117:
/***/ ((module) => {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),

/***/ 1492:
/***/ ((module) => {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),

/***/ 6260:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),

/***/ 5920:
/***/ ((module) => {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),

/***/ 2449:
/***/ ((module) => {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),

/***/ 3270:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),

/***/ 5784:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),

/***/ 4340:
/***/ ((module) => {

"use strict";
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 6561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __webpack_require__(2037);
var hasFlag = __webpack_require__(4340);

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};


/***/ }),

/***/ 4431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//
// Remark: Requiring this file will use the "safe" colors API,
// which will not touch String.prototype.
//
//   var colors = require('colors/safe');
//   colors.red("foo")
//
//
var colors = __webpack_require__(2517);
module['exports'] = colors;


/***/ }),

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable */\n\n/* -------------------------------------------------- */\n\n/*      Start of Webpack Hot Extension Middleware     */\n\n/* ================================================== */\n\n/*  This will be converted into a lodash templ., any  */\n\n/*  external argument must be provided using it       */\n\n/* -------------------------------------------------- */\n(function () {\n  try {\n    window;\n  } catch (_a) {\n    var window;\n  }\n\n  ;\n  var injectionContext = this || window || chrome ? {\n    browser: chrome\n  } : {\n    browser: null\n  };\n\n  (function () {\n    \"<%= polyfillSource %>\";\n  })();\n\n  var _ref = injectionContext || {},\n      browser = _ref.browser;\n\n  var signals = JSON.parse('<%= signals %>');\n  var config = JSON.parse('<%= config %>');\n  var reloadPage = \"<%= reloadPage %>\" === \"true\";\n  var wsHost = \"<%= WSHost %>\";\n  var SIGN_CHANGE = signals.SIGN_CHANGE,\n      SIGN_RELOAD = signals.SIGN_RELOAD,\n      SIGN_RELOADED = signals.SIGN_RELOADED,\n      SIGN_LOG = signals.SIGN_LOG,\n      SIGN_CONNECT = signals.SIGN_CONNECT;\n  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,\n      RECONNECT_ATTEMPT = config.RECONNECT_ATTEMPT,\n      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;\n  var runtime = browser.runtime,\n      tabs = browser.tabs;\n  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //\n\n  var formatter = function formatter(msg) {\n    return \"[ WER: \".concat(msg, \" ]\");\n  };\n\n  var logger = function logger(msg) {\n    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n    return console[level](formatter(msg));\n  };\n\n  var timeFormatter = function timeFormatter(date) {\n    return date.toTimeString().replace(/.*(\\d{2}:\\d{2}:\\d{2}).*/, \"$1\");\n  }; // ========================== Called only on content scripts ============================== //\n\n\n  function contentScriptWorker() {\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref2) {\n      var type = _ref2.type,\n          payload = _ref2.payload;\n\n      switch (type) {\n        case SIGN_RELOAD:\n          logger(\"Detected Changes. Reloading...\"); // eslint-disable-next-line no-var,vars-on-top,block-scoped-var\n\n          reloadPage && (window === null || window === void 0 ? void 0 : window.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n\n        default:\n          break;\n      }\n    });\n  } // ======================== Called only on background scripts ============================= //\n\n\n  function backgroundWorker(socket) {\n    runtime.onMessage.addListener(function (action, sender) {\n      if (action.type === SIGN_CONNECT) {\n        return Promise.resolve(formatter(\"Connected to Web Extension Hot Reloader\"));\n      }\n\n      return true;\n    });\n    socket.addEventListener(\"message\", function (_ref3) {\n      var data = _ref3.data;\n\n      var _JSON$parse = JSON.parse(data),\n          type = _JSON$parse.type,\n          payload = _JSON$parse.payload;\n\n      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {\n        tabs.query({\n          status: \"complete\"\n        }).then(function (loadedTabs) {\n          loadedTabs.forEach(function (tab) {\n            return tab.id && tabs.sendMessage(tab.id, {\n              type: SIGN_RELOAD\n            });\n          });\n          socket.send(JSON.stringify({\n            type: SIGN_RELOADED,\n            payload: formatter(\"\".concat(timeFormatter(new Date()), \" - \").concat(manifest.name, \" successfully reloaded\"))\n          }));\n          runtime.reload();\n        });\n      } else {\n        runtime.sendMessage({\n          type: type,\n          payload: payload\n        });\n      }\n    });\n    socket.addEventListener(\"close\", function (_ref4) {\n      var code = _ref4.code;\n      logger(\"Socket connection closed. Code \".concat(code, \". See more in \").concat(SOCKET_ERR_CODE_REF), \"warn\");\n      var reconnectAttempts = 0;\n      var intId = setInterval(function () {\n        logger(\"Attempting to reconnect (tip: Check if Webpack is running)\");\n        var ws = new WebSocket(wsHost);\n\n        ws.onerror = function () {\n          if (reconnectAttempts >= RECONNECT_ATTEMPT) {\n            logger(\"Could not reconnect after \".concat(RECONNECT_ATTEMPT, \" attempts. Stopping automatic retry. To restart reload the extension manually.\"), \"warn\");\n            clearInterval(intId);\n          } else {\n            logger(\"Error trying to re-connect. Reattempting in \".concat(RECONNECT_INTERVAL / 1000, \"s\"), \"warn\");\n          }\n\n          reconnectAttempts++;\n        };\n\n        ws.addEventListener(\"open\", function () {\n          clearInterval(intId);\n          logger(\"Reconnected. Reloading plugin\");\n          runtime.reload();\n        });\n      }, RECONNECT_INTERVAL);\n    });\n  } // ======================== Called only on extension pages that are not the background ============================= //\n\n\n  function extensionPageWorker() {\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref5) {\n      var type = _ref5.type,\n          payload = _ref5.payload;\n\n      switch (type) {\n        case SIGN_CHANGE:\n          logger(\"Detected Changes. Reloading...\");\n          reloadPage && (window === null || window === void 0 ? void 0 : window.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n\n        default:\n          break;\n      }\n    });\n  } // ======================= Bootstraps the middleware =========================== //\n\n\n  runtime.reload ? !window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();\n})();\n/* eslint-disable */\n\n/* ----------------------------------------------- */\n\n/* End of Webpack Hot Extension Middleware  */\n\n/* ----------------------------------------------- */");

/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("(function (global, factory) {\n  if (typeof define === \"function\" && define.amd) {\n    define(\"webextension-polyfill\", [\"module\"], factory);\n  } else if (typeof exports !== \"undefined\") {\n    factory(module);\n  } else {\n    var mod = {\n      exports: {}\n    };\n    factory(mod);\n    global.browser = mod.exports;\n  }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (module) {\n  /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */\n\n  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */\n\n  /* vim: set sts=2 sw=2 et tw=80: */\n\n  /* This Source Code Form is subject to the terms of the Mozilla Public\n   * License, v. 2.0. If a copy of the MPL was not distributed with this\n   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n  \"use strict\";\n\n  if (typeof browser === \"undefined\" || Object.getPrototypeOf(browser) !== Object.prototype) {\n    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = \"The message port closed before a response was received.\";\n    const SEND_RESPONSE_DEPRECATION_WARNING = \"Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)\"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor\n    // optimization for Firefox. Since Spidermonkey does not fully parse the\n    // contents of a function until the first time it's called, and since it will\n    // never actually need to be called, this allows the polyfill to be included\n    // in Firefox nearly for free.\n\n    const wrapAPIs = extensionAPIs => {\n      // NOTE: apiMetadata is associated to the content of the api-metadata.json file\n      // at build time by replacing the following \"include\" with the content of the\n      // JSON file.\n      const apiMetadata = {\n        \"alarms\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"clearAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"bookmarks\": {\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getChildren\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getRecent\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getSubTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTree\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"browserAction\": {\n          \"disable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"enable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"getBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"openPopup\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"browsingData\": {\n          \"remove\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"removeCache\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCookies\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeDownloads\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFormData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeHistory\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeLocalStorage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePasswords\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePluginData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"settings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"commands\": {\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"contextMenus\": {\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"cookies\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAllCookieStores\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"devtools\": {\n          \"inspectedWindow\": {\n            \"eval\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 2,\n              \"singleCallbackArg\": false\n            }\n          },\n          \"panels\": {\n            \"create\": {\n              \"minArgs\": 3,\n              \"maxArgs\": 3,\n              \"singleCallbackArg\": true\n            },\n            \"elements\": {\n              \"createSidebarPane\": {\n                \"minArgs\": 1,\n                \"maxArgs\": 1\n              }\n            }\n          }\n        },\n        \"downloads\": {\n          \"cancel\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"download\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"erase\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFileIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"open\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"pause\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFile\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"resume\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"extension\": {\n          \"isAllowedFileSchemeAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"isAllowedIncognitoAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"history\": {\n          \"addUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"deleteRange\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getVisits\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"i18n\": {\n          \"detectLanguage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAcceptLanguages\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"identity\": {\n          \"launchWebAuthFlow\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"idle\": {\n          \"queryState\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"management\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setEnabled\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"uninstallSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"notifications\": {\n          \"clear\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPermissionLevel\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"pageAction\": {\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"hide\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"permissions\": {\n          \"contains\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"request\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"runtime\": {\n          \"getBackgroundPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPlatformInfo\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"openOptionsPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"requestUpdateCheck\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"sendMessage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 3\n          },\n          \"sendNativeMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"setUninstallURL\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"sessions\": {\n          \"getDevices\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getRecentlyClosed\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"restore\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"storage\": {\n          \"local\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          },\n          \"managed\": {\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            }\n          },\n          \"sync\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          }\n        },\n        \"tabs\": {\n          \"captureVisibleTab\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"detectLanguage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"discard\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"duplicate\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"executeScript\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getZoom\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getZoomSettings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"goBack\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"goForward\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"highlight\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"insertCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"query\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"reload\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"sendMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 3\n          },\n          \"setZoom\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"setZoomSettings\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"update\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          }\n        },\n        \"topSites\": {\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"webNavigation\": {\n          \"getAllFrames\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFrame\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"webRequest\": {\n          \"handlerBehaviorChanged\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"windows\": {\n          \"create\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getLastFocused\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        }\n      };\n\n      if (Object.keys(apiMetadata).length === 0) {\n        throw new Error(\"api-metadata.json has not been included in browser-polyfill\");\n      }\n      /**\n       * A WeakMap subclass which creates and stores a value for any key which does\n       * not exist when accessed, but behaves exactly as an ordinary WeakMap\n       * otherwise.\n       *\n       * @param {function} createItem\n       *        A function which will be called in order to create the value for any\n       *        key which does not exist, the first time it is accessed. The\n       *        function receives, as its only argument, the key being created.\n       */\n\n\n      class DefaultWeakMap extends WeakMap {\n        constructor(createItem, items = undefined) {\n          super(items);\n          this.createItem = createItem;\n        }\n\n        get(key) {\n          if (!this.has(key)) {\n            this.set(key, this.createItem(key));\n          }\n\n          return super.get(key);\n        }\n\n      }\n      /**\n       * Returns true if the given object is an object with a `then` method, and can\n       * therefore be assumed to behave as a Promise.\n       *\n       * @param {*} value The value to test.\n       * @returns {boolean} True if the value is thenable.\n       */\n\n\n      const isThenable = value => {\n        return value && typeof value === \"object\" && typeof value.then === \"function\";\n      };\n      /**\n       * Creates and returns a function which, when called, will resolve or reject\n       * the given promise based on how it is called:\n       *\n       * - If, when called, `chrome.runtime.lastError` contains a non-null object,\n       *   the promise is rejected with that value.\n       * - If the function is called with exactly one argument, the promise is\n       *   resolved to that value.\n       * - Otherwise, the promise is resolved to an array containing all of the\n       *   function's arguments.\n       *\n       * @param {object} promise\n       *        An object containing the resolution and rejection functions of a\n       *        promise.\n       * @param {function} promise.resolve\n       *        The promise's resolution function.\n       * @param {function} promise.reject\n       *        The promise's rejection function.\n       * @param {object} metadata\n       *        Metadata about the wrapped method which has created the callback.\n       * @param {boolean} metadata.singleCallbackArg\n       *        Whether or not the promise is resolved with only the first\n       *        argument of the callback, alternatively an array of all the\n       *        callback arguments is resolved. By default, if the callback\n       *        function is invoked with only a single argument, that will be\n       *        resolved to the promise, while all arguments will be resolved as\n       *        an array if multiple are given.\n       *\n       * @returns {function}\n       *        The generated callback function.\n       */\n\n\n      const makeCallback = (promise, metadata) => {\n        return (...callbackArgs) => {\n          if (extensionAPIs.runtime.lastError) {\n            promise.reject(new Error(extensionAPIs.runtime.lastError.message));\n          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {\n            promise.resolve(callbackArgs[0]);\n          } else {\n            promise.resolve(callbackArgs);\n          }\n        };\n      };\n\n      const pluralizeArguments = numArgs => numArgs == 1 ? \"argument\" : \"arguments\";\n      /**\n       * Creates a wrapper function for a method with the given name and metadata.\n       *\n       * @param {string} name\n       *        The name of the method which is being wrapped.\n       * @param {object} metadata\n       *        Metadata about the method being wrapped.\n       * @param {integer} metadata.minArgs\n       *        The minimum number of arguments which must be passed to the\n       *        function. If called with fewer than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxArgs\n       *        The maximum number of arguments which may be passed to the\n       *        function. If called with more than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {boolean} metadata.singleCallbackArg\n       *        Whether or not the promise is resolved with only the first\n       *        argument of the callback, alternatively an array of all the\n       *        callback arguments is resolved. By default, if the callback\n       *        function is invoked with only a single argument, that will be\n       *        resolved to the promise, while all arguments will be resolved as\n       *        an array if multiple are given.\n       *\n       * @returns {function(object, ...*)}\n       *       The generated wrapper function.\n       */\n\n\n      const wrapAsyncFunction = (name, metadata) => {\n        return function asyncFunctionWrapper(target, ...args) {\n          if (args.length < metadata.minArgs) {\n            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          if (args.length > metadata.maxArgs) {\n            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          return new Promise((resolve, reject) => {\n            if (metadata.fallbackToNoCallback) {\n              // This API method has currently no callback on Chrome, but it return a promise on Firefox,\n              // and so the polyfill will try to call it with a callback first, and it will fallback\n              // to not passing the callback if the first call fails.\n              try {\n                target[name](...args, makeCallback({\n                  resolve,\n                  reject\n                }, metadata));\n              } catch (cbError) {\n                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + \"falling back to call it without a callback: \", cbError);\n                target[name](...args); // Update the API method metadata, so that the next API calls will not try to\n                // use the unsupported callback anymore.\n\n                metadata.fallbackToNoCallback = false;\n                metadata.noCallback = true;\n                resolve();\n              }\n            } else if (metadata.noCallback) {\n              target[name](...args);\n              resolve();\n            } else {\n              target[name](...args, makeCallback({\n                resolve,\n                reject\n              }, metadata));\n            }\n          });\n        };\n      };\n      /**\n       * Wraps an existing method of the target object, so that calls to it are\n       * intercepted by the given wrapper function. The wrapper function receives,\n       * as its first argument, the original `target` object, followed by each of\n       * the arguments passed to the original method.\n       *\n       * @param {object} target\n       *        The original target object that the wrapped method belongs to.\n       * @param {function} method\n       *        The method being wrapped. This is used as the target of the Proxy\n       *        object which is created to wrap the method.\n       * @param {function} wrapper\n       *        The wrapper function which is called in place of a direct invocation\n       *        of the wrapped method.\n       *\n       * @returns {Proxy<function>}\n       *        A Proxy object for the given method, which invokes the given wrapper\n       *        method in its place.\n       */\n\n\n      const wrapMethod = (target, method, wrapper) => {\n        return new Proxy(method, {\n          apply(targetMethod, thisObj, args) {\n            return wrapper.call(thisObj, target, ...args);\n          }\n\n        });\n      };\n\n      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n      /**\n       * Wraps an object in a Proxy which intercepts and wraps certain methods\n       * based on the given `wrappers` and `metadata` objects.\n       *\n       * @param {object} target\n       *        The target object to wrap.\n       *\n       * @param {object} [wrappers = {}]\n       *        An object tree containing wrapper functions for special cases. Any\n       *        function present in this object tree is called in place of the\n       *        method in the same location in the `target` object tree. These\n       *        wrapper methods are invoked as described in {@see wrapMethod}.\n       *\n       * @param {object} [metadata = {}]\n       *        An object tree containing metadata used to automatically generate\n       *        Promise-based wrapper functions for asynchronous. Any function in\n       *        the `target` object tree which has a corresponding metadata object\n       *        in the same location in the `metadata` tree is replaced with an\n       *        automatically-generated wrapper function, as described in\n       *        {@see wrapAsyncFunction}\n       *\n       * @returns {Proxy<object>}\n       */\n\n      const wrapObject = (target, wrappers = {}, metadata = {}) => {\n        let cache = Object.create(null);\n        let handlers = {\n          has(proxyTarget, prop) {\n            return prop in target || prop in cache;\n          },\n\n          get(proxyTarget, prop, receiver) {\n            if (prop in cache) {\n              return cache[prop];\n            }\n\n            if (!(prop in target)) {\n              return undefined;\n            }\n\n            let value = target[prop];\n\n            if (typeof value === \"function\") {\n              // This is a method on the underlying object. Check if we need to do\n              // any wrapping.\n              if (typeof wrappers[prop] === \"function\") {\n                // We have a special-case wrapper for this method.\n                value = wrapMethod(target, target[prop], wrappers[prop]);\n              } else if (hasOwnProperty(metadata, prop)) {\n                // This is an async method that we have metadata for. Create a\n                // Promise wrapper for it.\n                let wrapper = wrapAsyncFunction(prop, metadata[prop]);\n                value = wrapMethod(target, target[prop], wrapper);\n              } else {\n                // This is a method that we don't know or care about. Return the\n                // original method, bound to the underlying object.\n                value = value.bind(target);\n              }\n            } else if (typeof value === \"object\" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {\n              // This is an object that we need to do some wrapping for the children\n              // of. Create a sub-object wrapper for it with the appropriate child\n              // metadata.\n              value = wrapObject(value, wrappers[prop], metadata[prop]);\n            } else if (hasOwnProperty(metadata, \"*\")) {\n              // Wrap all properties in * namespace.\n              value = wrapObject(value, wrappers[prop], metadata[\"*\"]);\n            } else {\n              // We don't need to do any wrapping for this property,\n              // so just forward all access to the underlying object.\n              Object.defineProperty(cache, prop, {\n                configurable: true,\n                enumerable: true,\n\n                get() {\n                  return target[prop];\n                },\n\n                set(value) {\n                  target[prop] = value;\n                }\n\n              });\n              return value;\n            }\n\n            cache[prop] = value;\n            return value;\n          },\n\n          set(proxyTarget, prop, value, receiver) {\n            if (prop in cache) {\n              cache[prop] = value;\n            } else {\n              target[prop] = value;\n            }\n\n            return true;\n          },\n\n          defineProperty(proxyTarget, prop, desc) {\n            return Reflect.defineProperty(cache, prop, desc);\n          },\n\n          deleteProperty(proxyTarget, prop) {\n            return Reflect.deleteProperty(cache, prop);\n          }\n\n        }; // Per contract of the Proxy API, the \"get\" proxy handler must return the\n        // original value of the target if that value is declared read-only and\n        // non-configurable. For this reason, we create an object with the\n        // prototype set to `target` instead of using `target` directly.\n        // Otherwise we cannot return a custom object for APIs that\n        // are declared read-only and non-configurable, such as `chrome.devtools`.\n        //\n        // The proxy handlers themselves will still use the original `target`\n        // instead of the `proxyTarget`, so that the methods and properties are\n        // dereferenced via the original targets.\n\n        let proxyTarget = Object.create(target);\n        return new Proxy(proxyTarget, handlers);\n      };\n      /**\n       * Creates a set of wrapper functions for an event object, which handles\n       * wrapping of listener functions that those messages are passed.\n       *\n       * A single wrapper is created for each listener function, and stored in a\n       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`\n       * retrieve the original wrapper, so that  attempts to remove a\n       * previously-added listener work as expected.\n       *\n       * @param {DefaultWeakMap<function, function>} wrapperMap\n       *        A DefaultWeakMap object which will create the appropriate wrapper\n       *        for a given listener function when one does not exist, and retrieve\n       *        an existing one when it does.\n       *\n       * @returns {object}\n       */\n\n\n      const wrapEvent = wrapperMap => ({\n        addListener(target, listener, ...args) {\n          target.addListener(wrapperMap.get(listener), ...args);\n        },\n\n        hasListener(target, listener) {\n          return target.hasListener(wrapperMap.get(listener));\n        },\n\n        removeListener(target, listener) {\n          target.removeListener(wrapperMap.get(listener));\n        }\n\n      });\n\n      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n        /**\n         * Wraps an onRequestFinished listener function so that it will return a\n         * `getContent()` property which returns a `Promise` rather than using a\n         * callback API.\n         *\n         * @param {object} req\n         *        The HAR entry object representing the network request.\n         */\n\n\n        return function onRequestFinished(req) {\n          const wrappedReq = wrapObject(req, {}\n          /* wrappers */\n          , {\n            getContent: {\n              minArgs: 0,\n              maxArgs: 0\n            }\n          });\n          listener(wrappedReq);\n        };\n      }); // Keep track if the deprecation warning has been logged at least once.\n\n      let loggedSendResponseDeprecationWarning = false;\n      const onMessageWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n        /**\n         * Wraps a message listener function so that it may send responses based on\n         * its return value, rather than by returning a sentinel value and calling a\n         * callback. If the listener function returns a Promise, the response is\n         * sent when the promise either resolves or rejects.\n         *\n         * @param {*} message\n         *        The message sent by the other end of the channel.\n         * @param {object} sender\n         *        Details about the sender of the message.\n         * @param {function(*)} sendResponse\n         *        A callback which, when called with an arbitrary argument, sends\n         *        that value as a response.\n         * @returns {boolean}\n         *        True if the wrapped listener returned a Promise, which will later\n         *        yield a response. False otherwise.\n         */\n\n\n        return function onMessage(message, sender, sendResponse) {\n          let didCallSendResponse = false;\n          let wrappedSendResponse;\n          let sendResponsePromise = new Promise(resolve => {\n            wrappedSendResponse = function (response) {\n              if (!loggedSendResponseDeprecationWarning) {\n                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);\n                loggedSendResponseDeprecationWarning = true;\n              }\n\n              didCallSendResponse = true;\n              resolve(response);\n            };\n          });\n          let result;\n\n          try {\n            result = listener(message, sender, wrappedSendResponse);\n          } catch (err) {\n            result = Promise.reject(err);\n          }\n\n          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called\n          // wrappedSendResponse synchronously, we can exit earlier\n          // because there will be no response sent from this listener.\n\n          if (result !== true && !isResultThenable && !didCallSendResponse) {\n            return false;\n          } // A small helper to send the message if the promise resolves\n          // and an error if the promise rejects (a wrapped sendMessage has\n          // to translate the message into a resolved promise or a rejected\n          // promise).\n\n\n          const sendPromisedResult = promise => {\n            promise.then(msg => {\n              // send the message value.\n              sendResponse(msg);\n            }, error => {\n              // Send a JSON representation of the error if the rejected value\n              // is an instance of error, or the object itself otherwise.\n              let message;\n\n              if (error && (error instanceof Error || typeof error.message === \"string\")) {\n                message = error.message;\n              } else {\n                message = \"An unexpected error occurred\";\n              }\n\n              sendResponse({\n                __mozWebExtensionPolyfillReject__: true,\n                message\n              });\n            }).catch(err => {\n              // Print an error on the console if unable to send the response.\n              console.error(\"Failed to send onMessage rejected reply\", err);\n            });\n          }; // If the listener returned a Promise, send the resolved value as a\n          // result, otherwise wait the promise related to the wrappedSendResponse\n          // callback to resolve and send it as a response.\n\n\n          if (isResultThenable) {\n            sendPromisedResult(result);\n          } else {\n            sendPromisedResult(sendResponsePromise);\n          } // Let Chrome know that the listener is replying.\n\n\n          return true;\n        };\n      });\n\n      const wrappedSendMessageCallback = ({\n        reject,\n        resolve\n      }, reply) => {\n        if (extensionAPIs.runtime.lastError) {\n          // Detect when none of the listeners replied to the sendMessage call and resolve\n          // the promise to undefined as in Firefox.\n          // See https://github.com/mozilla/webextension-polyfill/issues/130\n          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {\n            resolve();\n          } else {\n            reject(new Error(extensionAPIs.runtime.lastError.message));\n          }\n        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {\n          // Convert back the JSON representation of the error into\n          // an Error instance.\n          reject(new Error(reply.message));\n        } else {\n          resolve(reply);\n        }\n      };\n\n      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {\n        if (args.length < metadata.minArgs) {\n          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        if (args.length > metadata.maxArgs) {\n          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        return new Promise((resolve, reject) => {\n          const wrappedCb = wrappedSendMessageCallback.bind(null, {\n            resolve,\n            reject\n          });\n          args.push(wrappedCb);\n          apiNamespaceObj.sendMessage(...args);\n        });\n      };\n\n      const staticWrappers = {\n        devtools: {\n          network: {\n            onRequestFinished: wrapEvent(onRequestFinishedWrappers)\n          }\n        },\n        runtime: {\n          onMessage: wrapEvent(onMessageWrappers),\n          onMessageExternal: wrapEvent(onMessageWrappers),\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", {\n            minArgs: 1,\n            maxArgs: 3\n          })\n        },\n        tabs: {\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", {\n            minArgs: 2,\n            maxArgs: 3\n          })\n        }\n      };\n      const settingMetadata = {\n        clear: {\n          minArgs: 1,\n          maxArgs: 1\n        },\n        get: {\n          minArgs: 1,\n          maxArgs: 1\n        },\n        set: {\n          minArgs: 1,\n          maxArgs: 1\n        }\n      };\n      apiMetadata.privacy = {\n        network: {\n          \"*\": settingMetadata\n        },\n        services: {\n          \"*\": settingMetadata\n        },\n        websites: {\n          \"*\": settingMetadata\n        }\n      };\n      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);\n    };\n\n    if (typeof chrome != \"object\" || !chrome || !chrome.runtime || !chrome.runtime.id) {\n      throw new Error(\"This script should only be loaded in a browser extension.\");\n    } // The build process adds a UMD wrapper around this file, which makes the\n    // `module` variable available.\n\n\n    module.exports = wrapAPIs(chrome);\n  } else {\n    module.exports = browser;\n  }\n});\n//# sourceMappingURL=browser-polyfill.js.map\n");

/***/ }),

/***/ 2937:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(5454);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.I = ArraySet;


/***/ }),

/***/ 1503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(8256);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ 8256:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ 9240:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ 7524:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(5454);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.H = MappingList;


/***/ }),

/***/ 7094:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.U = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ 6913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(5454);
var binarySearch = __webpack_require__(9240);
var ArraySet = (__webpack_require__(2937)/* .ArraySet */ .I);
var base64VLQ = __webpack_require__(1503);
var quickSort = (__webpack_require__(7094)/* .quickSort */ .U);

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

__webpack_unused_export__ = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

__webpack_unused_export__ = IndexedSourceMapConsumer;


/***/ }),

/***/ 1880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(1503);
var util = __webpack_require__(5454);
var ArraySet = (__webpack_require__(2937)/* .ArraySet */ .I);
var MappingList = (__webpack_require__(7524)/* .MappingList */ .H);

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.h = SourceMapGenerator;


/***/ }),

/***/ 5121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = (__webpack_require__(1880)/* .SourceMapGenerator */ .h);
var util = __webpack_require__(5454);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

__webpack_unused_export__ = SourceNode;


/***/ }),

/***/ 5454:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ 9745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
/* unused reexport */ __webpack_require__(1880)/* .SourceMapGenerator */ .h;
exports.SourceMapConsumer = __webpack_require__(6913).SourceMapConsumer;
/* unused reexport */ __webpack_require__(5121);


/***/ }),

/***/ 6252:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var SourceMapConsumer = (__webpack_require__(9745).SourceMapConsumer);
var path = __webpack_require__(1017);

var fs;
try {
  fs = __webpack_require__(7147);
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(5420);

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function globalProcessVersion() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.version;
  } else {
    return '';
  }
}

function globalProcessStderr() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.stderr;
  }
}

function globalProcessExit(code) {
  if ((typeof process === 'object') && (process !== null) && (typeof process.exit === 'function')) {
    return process.exit(code);
  }
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  var stderr = globalProcessStderr();
  if (stderr && stderr._handle && stderr._handle.setBlocking) {
    stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  globalProcessExit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 467:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__467__;

/***/ }),

/***/ 3476:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3476__;

/***/ }),

/***/ 6884:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6884__;

/***/ }),

/***/ 9582:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9582__;

/***/ }),

/***/ 5327:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5327__;

/***/ }),

/***/ 7836:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7836__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(8777);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztBQzlGRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0NBQWtDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RCxZQUFZO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLElBQVE7QUFDM0IsZUFBZSw2Q0FBK0I7QUFDOUMsa0JBQWtCLGdEQUFxQzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUEwQjs7Ozs7Ozs7O0FDeGExQixpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHVEQUFvRDtBQUM3RSxXQUFXLG1CQUFPLENBQUMsSUFBUTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXO0FBQ1g7O0FBRUEseUJBQWtCOzs7Ozs7OztBQzVabEIsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVosa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNobkJBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFSkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL2NsaWVudC9FeHRlbnNpb25Db21waWxlci50cyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9jbGllbnQvYXJncy1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vY2xpZW50L2FyZ3MuY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vY2xpZW50L2V2ZW50cy5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vY2xpZW50L2luZGV4LnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL2NsaWVudC9tYW51YWwudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL0V4dGVuc2lvblJlbG9hZGVyLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvZmFzdC1yZWxvYWRpbmcuY29uc3RhbnRzLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbG9nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvY29uc3RhbnRzL21pZGRsZXdhcmUtY29uZmlnLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvY29uc3RhbnRzL29wdGlvbnMuY29uc3RhbnRzLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvcmVmZXJlbmNlLWRvY3MuY29uc3RhbnRzLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL0hvdFJlbG9hZGVyU2VydmVyLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL1NpZ25FbWl0dGVyLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL2NoYW5nZXMtdHJpZ2dlcmVyLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL2luZGV4LnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9tZXNzYWdlcy9NZXNzYWdlLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9tZXNzYWdlcy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL21lc3NhZ2VzL3dhcm5pbmdzLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9taWRkbGV3YXJlL2luZGV4LnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9taWRkbGV3YXJlL21pZGRsZXdhcmUtaW5qZWN0b3IudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL21pZGRsZXdhcmUvbWlkZGxld2FyZS1zb3VyY2UtYnVpbGRlci50cyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvdXRpbHMvYmxvY2stcHJvdGVjdGlvbi50cyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvdXRpbHMvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy91dGlscy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL3V0aWxzL21hbmlmZXN0LnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy91dGlscy9zaWduYWxzLnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy93ZWJwYWNrL0Fic3RyYWN0RXh0ZW5zaW9uUmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL3dlYnBhY2svQ29tcGlsZXJFdmVudHNGYWNhZGUudHMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci1mcm9tL2luZGV4LmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vdHJhcC5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vemFsZ28uanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvbWFwcy9hbWVyaWNhLmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3plYnJhLmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vaGFzLWZsYWcuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvc3lzdGVtL3N1cHBvcnRzLWNvbG9ycy5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL3NhZmUuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL21pZGRsZXdhcmUvd2VyLW1pZGRsZXdhcmUucmF3LnRzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL2FycmF5LXNldC5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9iYXNlNjQtdmxxLmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL2Jhc2U2NC5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9iaW5hcnktc2VhcmNoLmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL21hcHBpbmctbGlzdC5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9xdWljay1zb3J0LmpzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1tYXAtY29uc3VtZXIuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvc291cmNlLW1hcC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvc291cmNlLW5vZGUuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL3NvdXJjZS1tYXAuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9zb3VyY2UtbWFwLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwib3NcIiIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInByb2Nlc3NcIiIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInV0aWxcIiIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgdW1kIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIm1pbmltaXN0XCIiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcInVzZXJhZ2VudFwiIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci9leHRlcm5hbCB1bWQgXCJ3ZWJwYWNrXCIiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIndlYnBhY2stc291cmNlc1wiIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci9leHRlcm5hbCB1bWQgXCJ3c1wiIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Adm95YWdlLWZpbmFuY2Uvd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0B2b3lhZ2UtZmluYW5jZS93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHZveWFnZS1maW5hbmNlL3dlYnBhY2stZXh0LXJlbG9hZGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW5pbWlzdFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW5pbWlzdFwiLCBcIndlYnBhY2tcIiwgXCJsb2Rhc2hcIiwgXCJ1c2VyYWdlbnRcIiwgXCJ3c1wiLCBcIndlYnBhY2stc291cmNlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWluaW1pc3RcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrXCIpLCByZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwidXNlcmFnZW50XCIpLCByZXF1aXJlKFwid3NcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLXNvdXJjZXNcIikpIDogZmFjdG9yeShyb290W1wibWluaW1pc3RcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1wibG9kYXNoXCJdLCByb290W1widXNlcmFnZW50XCJdLCByb290W1wid3NcIl0sIHJvb3RbXCJ3ZWJwYWNrLXNvdXJjZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zNDc2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzk1ODJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNDY3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzY4ODRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzgzNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX181MzI3X18pIHtcbnJldHVybiAiLCJpbXBvcnQgeyBsb2cgfSBmcm9tIFwidXRpbFwiO1xyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJ3ZWJwYWNrXCI7XHJcbmltcG9ydCBFeHRlbnNpb25SZWxvYWRlckltcGwgZnJvbSBcIi4uL3NyYy9FeHRlbnNpb25SZWxvYWRlclwiO1xyXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4uL3NyYy91dGlscy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgSVBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiLi4vdHlwaW5ncy93ZWJwYWNrLWV4dC1yZWxvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uQ29tcGlsZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIHRyZWF0RXJyb3JzKGVycikge1xyXG4gICAgbG9nKGVyci5zdGFjayB8fCBlcnIpO1xyXG4gICAgaWYgKGVyci5kZXRhaWxzKSB7XHJcbiAgICAgIGxvZyhlcnIuZGV0YWlscyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBpbGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IHdlYnBhY2suQ29uZmlndXJhdGlvbiwgcGx1Z2luT3B0aW9uczogSVBsdWdpbk9wdGlvbnMpIHtcclxuICAgIHRoaXMuY29tcGlsZXIgPSB3ZWJwYWNrKGNvbmZpZyk7XHJcbiAgICBuZXcgRXh0ZW5zaW9uUmVsb2FkZXJJbXBsKHBsdWdpbk9wdGlvbnMpLmFwcGx5KHRoaXMuY29tcGlsZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdhdGNoKCkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgICB0aGlzLmNvbXBpbGVyLndhdGNoKHt9LCAoZXJyLCBzdGF0cykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIEV4dGVuc2lvbkNvbXBpbGVyLnRyZWF0RXJyb3JzKGVycik7XHJcbiAgICAgIH1cclxuICAgICAgaW5mbyhzdGF0cy50b1N0cmluZyh7IGNvbG9yczogdHJ1ZSB9KSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdGhyb3ctbGl0ZXJhbCAqL1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY3dkIH0gZnJvbSBcInByb2Nlc3NcIjtcclxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHsgREVGQVVMVF9DT05GSUcsIERFRkFVTFRfUE9SVCB9IGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL29wdGlvbnMuY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHQtcmVsb2FkZXJcIjtcclxuaW1wb3J0IHsgQ09ORklHLCBIRUxQLCBNQU5JRkVTVCwgTk9fUEFHRV9SRUxPQUQsIFBPUlQgfSBmcm9tIFwiLi9hcmdzLmNvbnN0YW50XCI7XHJcbmltcG9ydCB7IFNJR19FWElUIH0gZnJvbSBcIi4vZXZlbnRzLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgbWFudWFsIGZyb20gXCIuL21hbnVhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGFyZ3M6IG9iamVjdCkgPT4ge1xyXG4gIGlmIChhcmdzW0hFTFBdKSB7XHJcbiAgICBsb2cobWFudWFsKCkpO1xyXG4gICAgdGhyb3cgeyB0eXBlOiBTSUdfRVhJVCwgcGF5bG9hZDogMCB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29uZmlnID0gYXJnc1tDT05GSUddIHx8IERFRkFVTFRfQ09ORklHO1xyXG4gIGNvbnN0IHBvcnQgPSBhcmdzW1BPUlRdIHx8IERFRkFVTFRfUE9SVDtcclxuICBjb25zdCBtYW5pZmVzdCA9IGFyZ3NbTUFOSUZFU1RdIHx8IG51bGw7XHJcblxyXG4gIGNvbnN0IHBsdWdpbk9wdGlvbnM6IElQbHVnaW5PcHRpb25zID0ge1xyXG4gICAgbWFuaWZlc3QsXHJcbiAgICBwb3J0LFxyXG4gICAgcmVsb2FkUGFnZTogIWFyZ3NbTk9fUEFHRV9SRUxPQURdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdFBhdGggPSByZXNvbHZlKGN3ZCgpLCBjb25maWcpO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcclxuICAgIGNvbnN0IHdlYnBhY2tDb25maWcgPSBldmFsKFwicmVxdWlyZVwiKShvcHRQYXRoKTtcclxuICAgIHJldHVybiB7IHdlYnBhY2tDb25maWcsIHBsdWdpbk9wdGlvbnMgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGxvZyhgW0Vycm9yXSBDb3VsZG4ndCByZXF1aXJlIHRoZSBmaWxlOiAke29wdFBhdGh9YCk7XHJcbiAgICBsb2coZXJyKTtcclxuICAgIHRocm93IHsgdHlwZTogU0lHX0VYSVQsIHBheWxvYWQ6IDEgfTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBIRUxQID0gXCJoZWxwXCI7XHJcbmV4cG9ydCBjb25zdCBDT05GSUcgPSBcImNvbmZpZ1wiO1xyXG5leHBvcnQgY29uc3QgUE9SVCA9IFwicG9ydFwiO1xyXG5leHBvcnQgY29uc3QgTk9fUEFHRV9SRUxPQUQgPSBcIm5vLXBhZ2UtcmVsb2FkXCI7XHJcbmV4cG9ydCBjb25zdCBNQU5JRkVTVCA9IFwibWFuaWZlc3RcIjtcclxuIiwiZXhwb3J0IGNvbnN0IFNJR19FWElUID0gXCJTSUdfRVhJVFwiO1xyXG4iLCJpbXBvcnQgKiBhcyBtaW5pbWlzdCBmcm9tIFwibWluaW1pc3RcIjtcclxuaW1wb3J0IHsgaW5zdGFsbCB9IGZyb20gXCJzb3VyY2UtbWFwLXN1cHBvcnRcIjtcclxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IGFyZ3NQYXJzZXIgZnJvbSBcIi4vYXJncy1wYXJzZXJcIjtcclxuaW1wb3J0IHsgU0lHX0VYSVQgfSBmcm9tIFwiLi9ldmVudHMuY29uc3RhbnRzXCI7XHJcbmltcG9ydCBFeHRlbnNpb25Db21waWxlciBmcm9tIFwiLi9FeHRlbnNpb25Db21waWxlclwiO1xyXG5cclxuaW5zdGFsbCgpO1xyXG5jb25zdCB7IF8sIC4uLmFyZ3MgfSA9IG1pbmltaXN0KHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XHJcblxyXG50cnkge1xyXG4gIGNvbnN0IHsgd2VicGFja0NvbmZpZywgcGx1Z2luT3B0aW9ucyB9ID0gYXJnc1BhcnNlcihhcmdzKTtcclxuICBjb25zdCBjb21waWxlciA9IG5ldyBFeHRlbnNpb25Db21waWxlcih3ZWJwYWNrQ29uZmlnLCBwbHVnaW5PcHRpb25zKTtcclxuICBjb21waWxlci53YXRjaCgpO1xyXG59IGNhdGNoIChlcnIpIHtcclxuICBpZiAoZXJyLnR5cGUgPT09IFNJR19FWElUKSB7XHJcbiAgICBwcm9jZXNzLmV4aXQoZXJyLnBheWxvYWQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2coZXJyKTtcclxuICAgIHByb2Nlc3MuZXhpdChlcnIuY29kZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovXHJcbmltcG9ydCB7XHJcbiAgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxyXG4gIERFRkFVTFRfQ09ORklHLFxyXG4gIERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlksXHJcbiAgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcclxuICBERUZBVUxUX1BPUlQsXHJcbn0gZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvb3B0aW9ucy5jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IGBcclxuVXNhZ2U6XHJcbiAgICB3ZXIgWy0tY29uZmlnIDxjb25maWdfcGF0aD5dIFstLXBvcnQgPHBvcnRfbnVtYmVyPl0gWy0tbm8tcGFnZS1yZWxvYWRdIFstLWNvbnRlbnQtc2NyaXB0IDxjb250ZW50X3NjcmlwdF9wYXRocz5dIFstLWJhY2tncm91bmQgPGJnX3NjcmlwdF9wYXRoPl0gWy0tZXh0ZW5zaW9uLXBhZ2UgPGV4dGVuc2lvbl9wYWdlX3BhdGhzPl1cclxuXHJcbkNvbXBsZXRlIEFQSTpcclxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxufCAgICAgICAgbmFtZSAgICAgICAgfCAgICBkZWZhdWx0ICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcclxufCAtLWhlbHAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8IFNob3cgdGhpcyBoZWxwXHJcbnwgLS1jb25maWcgICAgICAgICAgIHwgJHtERUZBVUxUX0NPTkZJR30gXFx8IFRoZSB3ZWJwYWNrIGNvbmZpZ3VyYXRpb24gZmlsZSBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxufCAtLXBvcnQgICAgICAgICAgICAgfCAke0RFRkFVTFRfUE9SVH0gICB8IFRoZSBwb3J0IHRvIHJ1biB0aGUgc2VydmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxufCAtLWNvbnRlbnQtc2NyaXB0ICAgfCAke0RFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUll9ICAgIHwgVGhlICoqZW50cnkvZW50cmllcyoqIG5hbWUocykgZm9yIHRoZSBjb250ZW50IHNjcmlwdChzKSAgICAgICAgICAgfFxyXG58IC0tYmFja2dyb3VuZCAgICAgICB8ICR7REVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZfSAgICAgICAgfCBUaGUgKiplbnRyeSoqIG5hbWUgZm9yIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCAgICAgICAgICAgICAgICAgICAgICB8XHJcbnwgLS1leHRlbnNpb24tcGFnZSAgIHwgJHtERUZBVUxUX0VYVEVOU0lPTl9QQUdFX0VOVFJZfSAgICAgICAgICAgICB8IFRoZSAqKmVudHJ5L2VudHJpZXMqKiBuYW1lKHMpIGZvciB0aGUgZXh0ZW5zaW9uIHBhZ2VzKHMpICAgICAgICAgIHxcclxufCAtLW1hbmlmZXN0ICAgICAgICAgfCAgICAgICAgbnVsbCAgICAgICB8IFRoZSAqKm1hbmlmZXN0Lmpzb24qKiBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxufCAtLW5vLXBhZ2UtcmVsb2FkICAgfCAgICAgICAgICAgICAgICAgICB8IERpc2FibGUgdGhlIGF1dG8gcmVsb2FkaW5nIG9mIGFsbCAqKnBhZ2VzKiogd2hpY2ggcnVucyB0aGUgcGx1Z2luIHxcclxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuYDtcclxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IENodW5rLCBDb21waWxhdGlvbiwgQ29tcGlsZXIsIEVudHJ5LCB2ZXJzaW9uIH0gZnJvbSBcIndlYnBhY2tcIjtcclxuaW1wb3J0IHsgY2hhbmdlc1RyaWdnZXJlciB9IGZyb20gXCIuL2hvdC1yZWxvYWRcIjtcclxuaW1wb3J0IHsgb25seU9uRGV2ZWxvcG1lbnRNc2cgfSBmcm9tIFwiLi9tZXNzYWdlcy93YXJuaW5nc1wiO1xyXG5pbXBvcnQgeyBtaWRkbGV3YXJlSW5qZWN0b3IgfSBmcm9tIFwiLi9taWRkbGV3YXJlXCI7XHJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi91dGlscy9kZWZhdWx0LW9wdGlvbnNcIjtcclxuaW1wb3J0IHsgd2FybiB9IGZyb20gXCIuL3V0aWxzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBleHRyYWN0RW50cmllcyB9IGZyb20gXCIuL3V0aWxzL21hbmlmZXN0XCI7XHJcbmltcG9ydCBBYnN0cmFjdFBsdWdpblJlbG9hZGVyIGZyb20gXCIuL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlclwiO1xyXG5pbXBvcnQgQ29tcGlsZXJFdmVudHNGYWNhZGUgZnJvbSBcIi4vd2VicGFjay9Db21waWxlckV2ZW50c0ZhY2FkZVwiO1xyXG5cclxuaW1wb3J0IHsgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2UsIElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHQtcmVsb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dGVuc2lvblJlbG9hZGVySW1wbCBleHRlbmRzIEFic3RyYWN0UGx1Z2luUmVsb2FkZXIgaW1wbGVtZW50cyBJRXh0ZW5zaW9uUmVsb2FkZXJJbnN0YW5jZSB7XHJcbiAgcHJpdmF0ZSBfb3B0cz86IElQbHVnaW5PcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zPzogSVBsdWdpbk9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9vcHRzID0gb3B0aW9ucztcclxuICAgIHRoaXMuX2NodW5rVmVyc2lvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfaXNXZWJwYWNrR1RvRVY1KCkge1xyXG4gICAgaWYgKHZlcnNpb24pIHtcclxuICAgICAgY29uc3QgW21ham9yXSA9IHZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgICBpZiAocGFyc2VJbnQobWFqb3IsIDEwKSA+PSA1KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfd2hhdENoYW5nZWQoY2h1bmtzOiBDb21waWxhdGlvbltcImNodW5rc1wiXSwgeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH06IElFbnRyaWVzT3B0aW9uKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VkQ2h1bmtzID0gW10gYXMgQ2h1bmtbXTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XHJcbiAgICAgIGNvbnN0IG9sZFZlcnNpb24gPSB0aGlzLl9jaHVua1ZlcnNpb25zW2NodW5rLm5hbWVdO1xyXG4gICAgICB0aGlzLl9jaHVua1ZlcnNpb25zW2NodW5rLm5hbWVdID0gY2h1bmsuaGFzaDtcclxuICAgICAgaWYgKGNodW5rLmhhc2ggIT09IG9sZFZlcnNpb24pIHtcclxuICAgICAgICBjaGFuZ2VkQ2h1bmtzLnB1c2goY2h1bmspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGVudE9yQmdDaGFuZ2VkID0gY2hhbmdlZENodW5rcy5zb21lKCh7IG5hbWUgfSkgPT4ge1xyXG4gICAgICBsZXQgY29udGVudENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgY29uc3QgYmdDaGFuZ2VkID0gbmFtZSA9PT0gYmFja2dyb3VuZDtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnRTY3JpcHQpKSB7XHJcbiAgICAgICAgY29udGVudENoYW5nZWQgPSBjb250ZW50U2NyaXB0LnNvbWUoKHNjcmlwdCkgPT4gc2NyaXB0ID09PSBuYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW50Q2hhbmdlZCA9IG5hbWUgPT09IGNvbnRlbnRTY3JpcHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb250ZW50Q2hhbmdlZCB8fCBiZ0NoYW5nZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1xyXG4gICAgY29uc3Qgb25seVBhZ2VDaGFuZ2VkID1cclxuICAgICAgIWNvbnRlbnRPckJnQ2hhbmdlZCAmJlxyXG4gICAgICBjaGFuZ2VkQ2h1bmtzLnNvbWUoKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZ2VDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVuc2lvblBhZ2UpKSB7XHJcbiAgICAgICAgICBwYWdlQ2hhbmdlZCA9IGV4dGVuc2lvblBhZ2Uuc29tZSgoc2NyaXB0KSA9PiBzY3JpcHQgPT09IG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYWdlQ2hhbmdlZCA9IG5hbWUgPT09IGV4dGVuc2lvblBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIHJldHVybiBwYWdlQ2hhbmdlZDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgY29udGVudE9yQmdDaGFuZ2VkLCBvbmx5UGFnZUNoYW5nZWQgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfcmVnaXN0ZXJQbHVnaW4oY29tcGlsZXI6IENvbXBpbGVyKSB7XHJcbiAgICBjb25zdCB7IHJlbG9hZFBhZ2UsIHBvcnQsIGVudHJpZXMsIG1hbmlmZXN0IH0gPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgdGhpcy5fb3B0cyk7XHJcblxyXG4gICAgY29uc3QgcGFyc2VkRW50cmllczogSUVudHJpZXNPcHRpb24gPSBtYW5pZmVzdFxyXG4gICAgICA/IGV4dHJhY3RFbnRyaWVzKFxyXG4gICAgICAgICAgY29tcGlsZXIub3B0aW9ucy5lbnRyeSBhcyBFbnRyeSxcclxuICAgICAgICAgIG1hbmlmZXN0LFxyXG4gICAgICAgICAgY29tcGlsZXIub3B0aW9ucy5vdXRwdXQgYXMgQ29tcGlsZXJbXCJvcHRpb25zXCJdW1wib3V0cHV0XCJdLFxyXG4gICAgICAgIClcclxuICAgICAgOiBlbnRyaWVzO1xyXG5cclxuICAgIHRoaXMuX2V2ZW50QVBJID0gbmV3IENvbXBpbGVyRXZlbnRzRmFjYWRlKGNvbXBpbGVyKTtcclxuICAgIHRoaXMuX2luamVjdG9yID0gbWlkZGxld2FyZUluamVjdG9yKHBhcnNlZEVudHJpZXMsIHsgcG9ydCwgcmVsb2FkUGFnZSB9KTtcclxuICAgIHRoaXMuX3RyaWdnZXJlciA9IGNoYW5nZXNUcmlnZ2VyZXIocG9ydCwgcmVsb2FkUGFnZSk7XHJcbiAgICB0aGlzLl9ldmVudEFQSS5hZnRlck9wdGltaXplQ2h1bmtzKChjb21wLCBjaHVua3MpID0+IHtcclxuICAgICAgY29tcC5hc3NldHMgPSB7XHJcbiAgICAgICAgLi4uY29tcC5hc3NldHMsXHJcbiAgICAgICAgLi4udGhpcy5faW5qZWN0b3IoY29tcC5hc3NldHMsIGNodW5rcyksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9ldmVudEFQSS5hZnRlckVtaXQoKGNvbXApID0+IHtcclxuICAgICAgY29uc3QgeyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9ID0gdGhpcy5fd2hhdENoYW5nZWQoY29tcC5jaHVua3MsIHBhcnNlZEVudHJpZXMpO1xyXG5cclxuICAgICAgaWYgKGNvbnRlbnRPckJnQ2hhbmdlZCB8fCBvbmx5UGFnZUNoYW5nZWQpIHtcclxuICAgICAgICB0aGlzLl90cmlnZ2VyZXIob25seVBhZ2VDaGFuZ2VkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKSB7XHJcbiAgICBpZiAoKHRoaXMuX2lzV2VicGFja0dUb0VWNSgpID8gY29tcGlsZXIub3B0aW9ucy5tb2RlIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYpID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgICAgdGhpcy5fcmVnaXN0ZXJQbHVnaW4oY29tcGlsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2Fybihvbmx5T25EZXZlbG9wbWVudE1zZy5nZXQoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDaHJvbWUgbGV0cyBvbmx5IGEgbWF4IG51bWJlciBvZiBjYWxscyBpbiBhIHRpbWUgZnJhbWVcclxuICogYmVmb3JlIGJsb2NrIHRoZSBwbHVnaW4gZm9yIGJlIHJlbG9hZGluZyBpdHNlbGYgdG8gbXVjaFxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ydWJlbnNwZ2NhdmFsY2FudGUvd2VicGFjay1jaHJvbWUtZXh0ZW5zaW9uLXJlbG9hZGVyL2lzc3Vlcy8yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSA9IDIwMDA7XHJcblxyXG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfQ0FMTFMgPSA2O1xyXG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfV0FJVCA9IDEwICogMTAwMDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcblxyXG4vKipcclxuICogQSBuZXcgcmVsb2FkaW5nIHJhdGUgd2FzIGNyZWF0ZWQgYWZ0ZXIgb3BlbmluZyBhIGJ1ZyB0aWNrZXQgb25cclxuICogQ2hyb21pdW0sIGFuZCB0aGUgcmV2aXNpb24gd2FzIG1lcmdlZCB0byBtYXN0ZXJcclxuICogQHNlZSBodHRwczovL2Nocm9taXVtLXJldmlldy5nb29nbGVzb3VyY2UuY29tL2MvY2hyb21pdW0vc3JjLysvMTM0MDI3MlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2hyb21lL0Nocm9taXVtIHZlcnNpb24gbnVtYmVyIHRoYXQgaW5jbHVkZXMgdGhlIG5ldyByYXRlc1xyXG4gKiBAc2VlIGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jaHJvbWl1bS1maW5kLXJlbGVhc2VzLXN0YXRpYy9kM2IuaHRtbCNkM2IyNWUxMzgwOTg0YjJmMWYyM2QwZThkYzFhMzM3NzQzYzZjYWFmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0NIUk9NRV9WRVJTSU9OOiBCcm93c2VyVmVyc2lvbiA9IFs3MywgMCwgMzYzN107XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUgPSAxMDAwO1xyXG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0NBTExTID0gMzA7XHJcbiIsImV4cG9ydCBjb25zdCBOT05FOiBMT0dfTk9ORSA9IDA7XHJcbmV4cG9ydCBjb25zdCBMT0c6IExPR19MT0cgPSAxO1xyXG5leHBvcnQgY29uc3QgSU5GTzogTE9HX0lORk8gPSAyO1xyXG5leHBvcnQgY29uc3QgV0FSTjogTE9HX1dBUk4gPSAzO1xyXG5leHBvcnQgY29uc3QgRVJST1I6IExPR19FUlJPUiA9IDQ7XHJcbmV4cG9ydCBjb25zdCBERUJVRzogTE9HX0RFQlVHID0gNTtcclxuIiwiZXhwb3J0IGNvbnN0IFJFQ09OTkVDVF9JTlRFUlZBTCA9IDIwMDA7XHJcbmV4cG9ydCBjb25zdCBSRUNPTk5FQ1RfQVRURU1QVCA9IDUwO1xyXG5leHBvcnQgY29uc3QgU09DS0VUX0VSUl9DT0RFX1JFRiA9IFwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY0NTUjc2VjdGlvbi03LjQuMVwiO1xyXG4iLCJleHBvcnQgY29uc3QgREVGQVVMVF9QT1JUID0gOTA5MDtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHID0gXCJ3ZWJwYWNrLmNvbmZpZy5qc1wiO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRUxPQURfUEFHRSA9IHRydWU7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTlRFTlRfU0NSSVBUX0VOVFJZID0gXCJjb250ZW50LXNjcmlwdFwiO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZID0gXCJiYWNrZ3JvdW5kXCI7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYVEVOU0lPTl9QQUdFX0VOVFJZID0gXCJwb3B1cFwiO1xyXG4iLCJleHBvcnQgY29uc3QgUkVGX1VSTCA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3J1YmVuc3BnY2F2YWxjYW50ZS93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93aWtpL0dlbmVyYWwtSW5mb3JtYXRpb25cIjtcclxuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwidXNlcmFnZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJ3c1wiO1xyXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4uL3V0aWxzL2xvZ2dlclwiO1xyXG5pbXBvcnQgU2lnbkVtaXR0ZXIgZnJvbSBcIi4vU2lnbkVtaXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdFJlbG9hZGVyU2VydmVyIHtcclxuICBwcml2YXRlIF9zZXJ2ZXI6IFNlcnZlcjtcclxuXHJcbiAgcHJpdmF0ZSBfc2lnbkVtaXR0ZXI6IFNpZ25FbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3J0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlcnZlciA9IG5ldyBTZXJ2ZXIoeyBwb3J0IH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuX3NlcnZlci5vbihcImNvbm5lY3Rpb25cIiwgKHdzLCBtc2cpID0+IHtcclxuICAgICAgY29uc3QgdXNlckFnZW50ID0gcGFyc2UobXNnLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdKTtcclxuICAgICAgdGhpcy5fc2lnbkVtaXR0ZXIgPSBuZXcgU2lnbkVtaXR0ZXIodGhpcy5fc2VydmVyLCB1c2VyQWdlbnQpO1xyXG5cclxuICAgICAgd3Mub24oXCJtZXNzYWdlXCIsIChkYXRhOiBzdHJpbmcpID0+IGluZm8oYE1lc3NhZ2UgZnJvbSAke3VzZXJBZ2VudC5mYW1pbHl9OiAke0pTT04ucGFyc2UoZGF0YSkucGF5bG9hZH1gKSk7XHJcbiAgICAgIHdzLm9uKFwiZXJyb3JcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIE5PT1AgLSBzd2FsbG93IHNvY2tldCBlcnJvcnMgZHVlIHRvIGh0dHA6Ly9naXQuaW8vdmJoU05cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaWduQ2hhbmdlKHJlbG9hZFBhZ2U6IGJvb2xlYW4sIG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAodGhpcy5fc2lnbkVtaXR0ZXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25FbWl0dGVyLnNhZmVTaWduQ2hhbmdlKHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB6aXAgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IEFnZW50IH0gZnJvbSBcInVzZXJhZ2VudFwiO1xyXG5pbXBvcnQgeyBPUEVOLCBTZXJ2ZXIgfSBmcm9tIFwid3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgRkFTVF9SRUxPQURfQ0FMTFMsXHJcbiAgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSxcclxuICBGQVNUX1JFTE9BRF9XQUlULFxyXG4gIE5FV19GQVNUX1JFTE9BRF9DQUxMUyxcclxuICBORVdfRkFTVF9SRUxPQURfQ0hST01FX1ZFUlNJT04sXHJcbiAgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9mYXN0LXJlbG9hZGluZy5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZGVib3VuY2VTaWduYWwsIGZhc3RSZWxvYWRCbG9ja2VyIH0gZnJvbSBcIi4uL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb25cIjtcclxuaW1wb3J0IHsgc2lnbkNoYW5nZSB9IGZyb20gXCIuLi91dGlscy9zaWduYWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRW1pdHRlciB7XHJcbiAgcHJpdmF0ZSBfc2FmZVNpZ25DaGFuZ2U6IChcclxuICAgIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXHJcbiAgICBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sXHJcbiAgICBvblN1Y2Nlc3M6ICh2YWw/OiBhbnkpID0+IHZvaWQsXHJcbiAgICBvbkVycm9yOiAoZXJyOiBFcnJvcikgPT4gdm9pZCxcclxuICApID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgX3NlcnZlcjogU2VydmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZXJ2ZXI6IFNlcnZlciwgeyBmYW1pbHksIG1ham9yLCBtaW5vciwgcGF0Y2ggfTogQWdlbnQpIHtcclxuICAgIHRoaXMuX3NlcnZlciA9IHNlcnZlcjtcclxuICAgIGlmIChmYW1pbHkgPT09IFwiQ2hyb21lXCIpIHtcclxuICAgICAgY29uc3QgW3JlbG9hZENhbGxzLCByZWxvYWREZWJvdWNpbmdGcmFtZV0gPSB0aGlzLl9zYXRpc2ZpZXMoXHJcbiAgICAgICAgW3BhcnNlSW50KG1ham9yLCAxMCksIHBhcnNlSW50KG1pbm9yLCAxMCksIHBhcnNlSW50KHBhdGNoLCAxMCldLFxyXG4gICAgICAgIE5FV19GQVNUX1JFTE9BRF9DSFJPTUVfVkVSU0lPTixcclxuICAgICAgKVxyXG4gICAgICAgID8gW05FV19GQVNUX1JFTE9BRF9DQUxMUywgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUVdXHJcbiAgICAgICAgOiBbRkFTVF9SRUxPQURfQ0FMTFMsIEZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUVdO1xyXG5cclxuICAgICAgY29uc3QgZGVib3VuY2VyID0gZGVib3VuY2VTaWduYWwocmVsb2FkRGVib3VjaW5nRnJhbWUsIHRoaXMpO1xyXG4gICAgICBjb25zdCBibG9ja2VyID0gZmFzdFJlbG9hZEJsb2NrZXIocmVsb2FkQ2FsbHMsIEZBU1RfUkVMT0FEX1dBSVQsIHRoaXMpO1xyXG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZSA9IGRlYm91bmNlcihibG9ja2VyKHRoaXMuX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2FmZVNpZ25DaGFuZ2UgPSB0aGlzLl9zZXR1cFNhZmVTaWduQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2FmZVNpZ25DaGFuZ2UocmVsb2FkUGFnZTogYm9vbGVhbiwgb25seVBhZ2VDaGFuZ2VkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgdGhpcy5fc2FmZVNpZ25DaGFuZ2UocmVsb2FkUGFnZSwgb25seVBhZ2VDaGFuZ2VkLCByZXMsIHJlaik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gKHJlbG9hZFBhZ2U6IGJvb2xlYW4sIG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbiwgb25TdWNjZXNzOiAoKSA9PiB2b2lkLCBvbkVycm9yOiAoZXJyOiBFcnJvcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuX3NlbmRNc2coc2lnbkNoYW5nZSh7IHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCB9KSk7XHJcbiAgICAgICAgb25TdWNjZXNzKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIG9uRXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NlbmRNc2cobXNnOiBhbnkpIHtcclxuICAgIHRoaXMuX3NlcnZlci5jbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xyXG4gICAgICBpZiAoY2xpZW50LnJlYWR5U3RhdGUgPT09IE9QRU4pIHtcclxuICAgICAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zYXRpc2ZpZXMoYnJvd3NlclZlcnNpb246IEJyb3dzZXJWZXJzaW9uLCB0YXJnZXRWZXJzaW9uOiBCcm93c2VyVmVyc2lvbikge1xyXG4gICAgY29uc3QgdmVyc2lvblBhaXJzOiBWZXJzaW9uUGFpcltdID0gemlwKGJyb3dzZXJWZXJzaW9uLCB0YXJnZXRWZXJzaW9uKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIGZvciAoY29uc3QgW3ZlcnNpb24gPSAwLCB0YXJnZXQgPSAwXSBvZiB2ZXJzaW9uUGFpcnMpIHtcclxuICAgICAgaWYgKHZlcnNpb24gIT09IHRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiB2ZXJzaW9uID4gdGFyZ2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuLi91dGlscy9sb2dnZXJcIjtcclxuaW1wb3J0IEhvdFJlbG9hZGVyU2VydmVyIGZyb20gXCIuL0hvdFJlbG9hZGVyU2VydmVyXCI7XHJcblxyXG5jb25zdCBjaGFuZ2VzVHJpZ2dlcmVyOiBUcmlnZ2VyZXJGYWN0b3J5ID0gKHBvcnQ6IG51bWJlciwgcmVsb2FkUGFnZTogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IHNlcnZlciA9IG5ldyBIb3RSZWxvYWRlclNlcnZlcihwb3J0KTtcclxuXHJcbiAgaW5mbyhcIlsgU3RhcnRpbmcgdGhlIFdlYiBFeHRlbnNpb24gSG90IFJlbG9hZCBTZXJ2ZXIuLi4gXVwiKTtcclxuICBzZXJ2ZXIubGlzdGVuKCk7XHJcblxyXG4gIHJldHVybiAob25seVBhZ2VDaGFuZ2VkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+ID0+IHNlcnZlci5zaWduQ2hhbmdlKHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VzVHJpZ2dlcmVyO1xyXG4iLCJpbXBvcnQgX2NoYW5nZXNUcmlnZ2VyZXIgZnJvbSBcIi4vY2hhbmdlcy10cmlnZ2VyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VzVHJpZ2dlcmVyID0gX2NoYW5nZXNUcmlnZ2VyZXI7XHJcbiIsImltcG9ydCB7IGJvbGQsIHdoaXRlIH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XHJcbmltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBFUlJPUiwgSU5GTywgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBSRUZfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9yZWZlcmVuY2UtZG9jcy5jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIHByaXZhdGUgcmVmZXJlbmNlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgdHlwZTogTE9HX0lORk8gfCBMT0dfV0FSTiB8IExPR19FUlJPUjtcclxuXHJcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZmVyZW5jZU51bWJlciwgbWVzc2FnZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMucmVmZXJlbmNlTnVtYmVyID0gcmVmZXJlbmNlTnVtYmVyO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQoYWRkaXRpb25hbERhdGE6IG9iamVjdCA9IHt9KSB7XHJcbiAgICBjb25zdCBjb2RlID0gYFdFUi0ke3RoaXMuZ2V0UHJlZml4KCl9JHt0aGlzLnJlZmVyZW5jZU51bWJlcn1gO1xyXG4gICAgY29uc3QgcmVmTGluayA9IGJvbGQod2hpdGUoYCR7UkVGX1VSTH0jJHtjb2RlfWApKTtcclxuICAgIHJldHVybiBgWyR7Y29kZX1dICR7dGVtcGxhdGUodGhpcy5tZXNzYWdlLCBhZGRpdGlvbmFsRGF0YSl9LlxcblZpc2l0ICR7cmVmTGlua30gZm9yIGNvbXBsZXRlIGRldGFpbHNcXG5gO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFByZWZpeCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgSU5GTzpcclxuICAgICAgICByZXR1cm4gXCJJXCI7XHJcbiAgICAgIGNhc2UgV0FSTjpcclxuICAgICAgICByZXR1cm4gXCJXXCI7XHJcbiAgICAgIGNhc2UgRVJST1I6XHJcbiAgICAgICAgcmV0dXJuIFwiRVwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1zdHIgKi9cclxuaW1wb3J0IHsgRVJST1IgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2xvZy5jb25zdGFudHNcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJnU2NyaXB0RW50cnlFcnJvck1zZyA9IG5ldyBNZXNzYWdlKFxyXG4gIEVSUk9SLFxyXG4gIDEsXHJcbiAgXCJCYWNrZ3JvdW5kIHNjcmlwdCB3ZWJwYWNrIGVudHJ5IG5vdCBmb3VuZC9tYXRjaCBcXFxyXG50aGUgcHJvdmlkZWQgb24gJ21hbmlmZXN0Lmpzb24nIG9yICdlbnRyeS5iYWNrZ3JvdW5kJyBcXFxyXG5vcHRpb24gb2YgdGhlIHBsdWdpblwiLFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJnU2NyaXB0TWFuaWZlc3RSZXF1aXJlZE1zZyA9IG5ldyBNZXNzYWdlKEVSUk9SLCAyLCBcIkJhY2tncm91bmQgc2NyaXB0IG9uIG1hbmlmZXN0IGlzIHJlcXVpcmVkXCIpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1zdHIgKi9cclxuaW1wb3J0IHsgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb25seU9uRGV2ZWxvcG1lbnRNc2cgPSBuZXcgTWVzc2FnZShcclxuICBXQVJOLFxyXG4gIDEsXHJcbiAgXCJXYXJuaW5nLCBFeHRlbnNpb24gUmVsb2FkZXIgUGx1Z2luIHdhcyBub3QgZW5hYmxlZCEgXFxcclxuSXQgcnVucyBvbmx5IG9uIHdlYnBhY2sgLS1tb2RlPWRldmVsb3BtZW50ICh2NSBvciBtb3JlKSBcXFxyXG5vciB3aXRoIE5PREVfRU5WPWRldmVsb3BtZW50IChsb3dlciB2ZXJzaW9ucylcIixcclxuKTtcclxuIiwiaW1wb3J0IF9taWRkbGV3YXJlSW5qZWN0b3IgZnJvbSBcIi4vbWlkZGxld2FyZS1pbmplY3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pZGRsZXdhcmVJbmplY3RvciA9IF9taWRkbGV3YXJlSW5qZWN0b3I7XHJcbiIsImltcG9ydCB7IENvbXBpbGF0aW9uIH0gZnJvbSBcIndlYnBhY2tcIjtcclxuaW1wb3J0IHsgQ29uY2F0U291cmNlLCBTb3VyY2UgfSBmcm9tIFwid2VicGFjay1zb3VyY2VzXCI7XHJcbmltcG9ydCB7IFNvdXJjZUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5pbXBvcnQgbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIgZnJvbSBcIi4vbWlkZGxld2FyZS1zb3VyY2UtYnVpbGRlclwiO1xyXG5cclxuY29uc3QgbWlkZGxld2FyZUluamVjdG9yOiBNaWRkbGV3YXJlSW5qZWN0b3IgPSAoeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH0sIHsgcG9ydCwgcmVsb2FkUGFnZSB9KSA9PiB7XHJcbiAgY29uc3Qgc291cmNlOiBTb3VyY2UgPSBtaWRkbGVXYXJlU291cmNlQnVpbGRlcih7IHBvcnQsIHJlbG9hZFBhZ2UgfSk7XHJcbiAgY29uc3Qgc291cmNlRmFjdG9yeTogU291cmNlRmFjdG9yeSA9ICguLi5zb3VyY2VzKTogU291cmNlID0+IG5ldyBDb25jYXRTb3VyY2UoLi4uc291cmNlcyk7XHJcblxyXG4gIGNvbnN0IG1hdGNoQmdPckNvbnRlbnRPclBhZ2UgPSAobmFtZTogc3RyaW5nKSA9PlxyXG4gICAgbmFtZSA9PT0gYmFja2dyb3VuZCB8fFxyXG4gICAgbmFtZSA9PT0gY29udGVudFNjcmlwdCB8fFxyXG4gICAgKGNvbnRlbnRTY3JpcHQgJiYgY29udGVudFNjcmlwdC5pbmNsdWRlcyhuYW1lKSkgfHxcclxuICAgIG5hbWUgPT09IGV4dGVuc2lvblBhZ2UgfHxcclxuICAgIChleHRlbnNpb25QYWdlICYmIGV4dGVuc2lvblBhZ2UuaW5jbHVkZXMobmFtZSkpO1xyXG5cclxuICByZXR1cm4gKGFzc2V0cywgY2h1bmtzOiBDb21waWxhdGlvbltcImNodW5rc1wiXSkgPT5cclxuICAgIEFycmF5LmZyb20oY2h1bmtzKS5yZWR1Y2UoKHByZXYsIHsgbmFtZSwgZmlsZXMgfSkgPT4ge1xyXG4gICAgICBpZiAobWF0Y2hCZ09yQ29udGVudE9yUGFnZShuYW1lKSkge1xyXG4gICAgICAgIGZpbGVzLmZvckVhY2goKGVudHJ5UG9pbnQpID0+IHtcclxuICAgICAgICAgIGlmICgvXFwuanMkLy50ZXN0KGVudHJ5UG9pbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsU3JjID0gc291cmNlRmFjdG9yeShzb3VyY2UsIGFzc2V0c1tlbnRyeVBvaW50XSk7XHJcbiAgICAgICAgICAgIHByZXZbZW50cnlQb2ludF0gPSBmaW5hbFNyYztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJldjtcclxuICAgIH0sIHt9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmVJbmplY3RvcjtcclxuIiwiaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCByYXdTb3VyY2UgZnJvbSBcInJhdy1sb2FkZXIhLi93ZXItbWlkZGxld2FyZS5yYXdcIjtcclxuaW1wb3J0IHBvbHlmaWxsU291cmNlIGZyb20gXCJyYXctbG9hZGVyIXdlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgeyBSYXdTb3VyY2UsIFNvdXJjZSB9IGZyb20gXCJ3ZWJwYWNrLXNvdXJjZXNcIjtcclxuXHJcbmltcG9ydCB7IFJFQ09OTkVDVF9JTlRFUlZBTCwgUkVDT05ORUNUX0FUVEVNUFQsIFNPQ0tFVF9FUlJfQ09ERV9SRUYgfSBmcm9tIFwiLi4vY29uc3RhbnRzL21pZGRsZXdhcmUtY29uZmlnLmNvbnN0YW50c1wiO1xyXG5pbXBvcnQgKiBhcyBzaWduYWxzIGZyb20gXCIuLi91dGlscy9zaWduYWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGVXYXJlU291cmNlQnVpbGRlcih7IHBvcnQsIHJlbG9hZFBhZ2UgfTogSU1pZGRsZXdhcmVUZW1wbGF0ZVBhcmFtcyk6IFNvdXJjZSB7XHJcbiAgY29uc3QgdG1wbCA9IHRlbXBsYXRlKHJhd1NvdXJjZSk7XHJcblxyXG4gIHJldHVybiBuZXcgUmF3U291cmNlKFxyXG4gICAgdG1wbCh7XHJcbiAgICAgIFdTSG9zdDogYHdzOi8vbG9jYWxob3N0OiR7cG9ydH1gLFxyXG4gICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KHsgUkVDT05ORUNUX0lOVEVSVkFMLCBSRUNPTk5FQ1RfQVRURU1QVCwgU09DS0VUX0VSUl9DT0RFX1JFRiB9KSxcclxuICAgICAgcG9seWZpbGxTb3VyY2U6IGBcInx8JHtwb2x5ZmlsbFNvdXJjZX1cImAsXHJcbiAgICAgIHJlbG9hZFBhZ2U6IGAke3JlbG9hZFBhZ2V9YCxcclxuICAgICAgc2lnbmFsczogSlNPTi5zdHJpbmdpZnkoc2lnbmFscyksXHJcbiAgICB9KSxcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGRlYm91bmNlLCBydW5JbkNvbnRleHQgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGluZm8sIHdhcm4gfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZVNpZ25hbCA9IChkZWJvdWNpbmdGcmFtZTogbnVtYmVyLCBjb250ZXh0Pzogb2JqZWN0KSA9PiAoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID0+IHtcclxuICBpZiAoY29udGV4dCkge1xyXG4gICAgcnVuSW5Db250ZXh0KGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlYm91bmNlKCguLi5hcmdzKSA9PiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpLCBkZWJvdWNpbmdGcmFtZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFzdFJlbG9hZEJsb2NrZXIgPSAobWF4Q2FsbHM6IG51bWJlciwgd2FpdDogbnVtYmVyLCBjb250ZXh0KSA9PiAoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID0+IHtcclxuICBsZXQgY2FsbHMgPSAwO1xyXG4gIGxldCBpbldhaXQgPSBmYWxzZTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICBpZiAoaW5XYWl0KSB7XHJcbiAgICAgIC8qIGRvIG5vdGhpbmcgKi9cclxuICAgIH0gZWxzZSBpZiAoY2FsbHMgPT09IG1heENhbGxzKSB7XHJcbiAgICAgIGNhbGxzID0gMDtcclxuICAgICAgaW5XYWl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBpbnRlcnZhbCA9IHdhaXQgLyAxMDAwO1xyXG4gICAgICB3YXJuKGBQbGVhc2Ugd2FpdCAke2ludGVydmFsfSBzZWNzLiBmb3IgbmV4dCByZWxvYWQgdG8gcHJldmVudCB5b3VyIGV4dGVuc2lvbiBiZWluZyBibG9ja2VkYCk7XHJcbiAgICAgIGNvbnN0IGxvZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gd2FybihgJHstLWludGVydmFsfSAuLi5gKSwgMTAwMCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGxvZ0ludGVydmFsKTtcclxuICAgICAgICBpbmZvKFwiU2lnbmluZyBmb3IgcmVsb2FkIG5vd1wiKTtcclxuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIGluV2FpdCA9IGZhbHNlO1xyXG4gICAgICB9LCB3YWl0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxzKys7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxyXG4gIERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlksXHJcbiAgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcclxuICBERUZBVUxUX1BPUlQsXHJcbiAgREVGQVVMVF9SRUxPQURfUEFHRSxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL29wdGlvbnMuY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZW50cmllczoge1xyXG4gICAgYmFja2dyb3VuZDogREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxyXG4gICAgY29udGVudFNjcmlwdDogREVGQVVMVF9DT05URU5UX1NDUklQVF9FTlRSWSxcclxuICAgIGV4dGVuc2lvblBhZ2U6IERFRkFVTFRfRVhURU5TSU9OX1BBR0VfRU5UUlksXHJcbiAgfSxcclxuICBwb3J0OiBERUZBVUxUX1BPUlQsXHJcbiAgcmVsb2FkUGFnZTogREVGQVVMVF9SRUxPQURfUEFHRSxcclxufTtcclxuIiwiaW1wb3J0IHsgZ3JlZW4sIHJlZCwgd2hpdGUsIHllbGxvdyB9IGZyb20gXCJjb2xvcnMvc2FmZVwiO1xyXG5pbXBvcnQgeyBERUJVRywgRVJST1IsIElORk8sIExPRywgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xyXG5cclxubGV0IGxvZ0xldmVsO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWFzc2lnblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nTGV2ZWwgPSAobGV2ZWw6IExPR19MRVZFTCkgPT4gKGxvZ0xldmVsID0gbGV2ZWwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZyA9IChtZXNzYWdlOiBzdHJpbmcpID0+IGxvZ0xldmVsID49IExPRyAmJiBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuZXhwb3J0IGNvbnN0IGluZm8gPSAobWVzc2FnZTogc3RyaW5nKSA9PiBsb2dMZXZlbCA+PSBJTkZPICYmIGNvbnNvbGUuaW5mbyhncmVlbihtZXNzYWdlKSk7XHJcbmV4cG9ydCBjb25zdCB3YXJuID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gV0FSTiAmJiBjb25zb2xlLndhcm4oeWVsbG93KG1lc3NhZ2UpKTtcclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gRVJST1IgJiYgY29uc29sZS5lcnJvcihyZWQobWVzc2FnZSkpO1xyXG5leHBvcnQgY29uc3QgZGVidWcgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBsb2dMZXZlbCA+PSBERUJVRyAmJiBjb25zb2xlLmRlYnVnKHdoaXRlKGRlYnVnKG1lc3NhZ2UpKSk7XHJcbiIsImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBmbGF0TWFwRGVlcCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgQ29tcGlsZXIsIEVudHJ5IH0gZnJvbSBcIndlYnBhY2tcIjtcclxuaW1wb3J0IHsgYmdTY3JpcHRFbnRyeUVycm9yTXNnLCBiZ1NjcmlwdE1hbmlmZXN0UmVxdWlyZWRNc2cgfSBmcm9tIFwiLi4vbWVzc2FnZXMvZXJyb3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEVudHJpZXMoXHJcbiAgd2VicGFja0VudHJ5OiBFbnRyeSxcclxuICBtYW5pZmVzdFBhdGg6IHN0cmluZyxcclxuICB3ZWJwYWNrT3V0cHV0OiBDb21waWxlcltcIm9wdGlvbnNcIl1bXCJvdXRwdXRcIl0gPSB7fSxcclxuKTogSUVudHJpZXNPcHRpb24ge1xyXG4gIGNvbnN0IG1hbmlmZXN0SnNvbiA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKG1hbmlmZXN0UGF0aCkudG9TdHJpbmcoKSkgYXMgSUV4dGVuc2lvbk1hbmlmZXN0O1xyXG4gIGNvbnN0IHsgYmFja2dyb3VuZCwgY29udGVudF9zY3JpcHRzIH0gPSBtYW5pZmVzdEpzb247XHJcbiAgY29uc3QgeyBmaWxlbmFtZSB9ID0gd2VicGFja091dHB1dDtcclxuXHJcbiAgaWYgKCFmaWxlbmFtZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHNwZWNpZnkgdGhlIGBvdXRwdXQuZmlsZW5hbWVgIGluIHlvdXIgd2VicGFjayBjb25maWcuXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFiYWNrZ3JvdW5kPy5zY3JpcHRzKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGJnU2NyaXB0TWFuaWZlc3RSZXF1aXJlZE1zZy5nZXQoKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiZ1NjcmlwdEZpbGVOYW1lcyA9IGJhY2tncm91bmQuc2NyaXB0cztcclxuICBjb25zdCB0b1JlbW92ZSA9IChmaWxlbmFtZSBhcyBzdHJpbmcpLnJlcGxhY2UoXCJbbmFtZV1cIiwgXCJcIik7XHJcblxyXG4gIGNvbnN0IGJnV2VicGFja0VudHJ5ID0gT2JqZWN0LmtleXMod2VicGFja0VudHJ5KS5maW5kKChlbnRyeU5hbWUpID0+XHJcbiAgICBiZ1NjcmlwdEZpbGVOYW1lcy5zb21lKChiZ01hbmlmZXN0KSA9PiBiZ01hbmlmZXN0LnJlcGxhY2UodG9SZW1vdmUsIFwiXCIpID09PSBlbnRyeU5hbWUpLFxyXG4gICk7XHJcblxyXG4gIGlmICghYmdXZWJwYWNrRW50cnkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYmdTY3JpcHRFbnRyeUVycm9yTXNnLmdldCgpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRlbnRFbnRyaWVzOiB1bmtub3duID0gY29udGVudF9zY3JpcHRzXHJcbiAgICA/IGZsYXRNYXBEZWVwKE9iamVjdC5rZXlzKHdlYnBhY2tFbnRyeSksIChlbnRyeU5hbWUpID0+XHJcbiAgICAgICAgY29udGVudF9zY3JpcHRzLm1hcCgoeyBqcyB9KSA9PlxyXG4gICAgICAgICAganMubWFwKChjb250ZW50SXRlbSkgPT4gY29udGVudEl0ZW0ucmVwbGFjZSh0b1JlbW92ZSwgXCJcIikpLmZpbHRlcigoY29udGVudEl0ZW0pID0+IGNvbnRlbnRJdGVtID09PSBlbnRyeU5hbWUpLFxyXG4gICAgICAgICksXHJcbiAgICAgIClcclxuICAgIDogbnVsbDtcclxuICByZXR1cm4ge1xyXG4gICAgYmFja2dyb3VuZDogYmdXZWJwYWNrRW50cnksXHJcbiAgICBjb250ZW50U2NyaXB0OiBjb250ZW50RW50cmllcyBhcyBzdHJpbmdbXSxcclxuICAgIGV4dGVuc2lvblBhZ2U6IG51bGwsXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgU0lHTl9DSEFOR0U6IEFjdGlvblR5cGUgPSBcIlNJR05fQ0hBTkdFXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1JFTE9BRDogQWN0aW9uVHlwZSA9IFwiU0lHTl9SRUxPQURcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fUkVMT0FERUQ6IEFjdGlvblR5cGUgPSBcIlNJR05fUkVMT0FERURcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fTE9HOiBBY3Rpb25UeXBlID0gXCJTSUdOX0xPR1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9DT05ORUNUOiBBY3Rpb25UeXBlID0gXCJTSUdOX0NPTk5FQ1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduQ2hhbmdlOiBBY3Rpb25GYWN0b3J5ID0gKHsgcmVsb2FkUGFnZSA9IHRydWUsIG9ubHlQYWdlQ2hhbmdlZCA9IGZhbHNlIH0pID0+ICh7XHJcbiAgcGF5bG9hZDogeyByZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQgfSxcclxuICB0eXBlOiBTSUdOX0NIQU5HRSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzaWduUmVsb2FkOiBBY3Rpb25GYWN0b3J5ID0gKCkgPT4gKHsgdHlwZTogU0lHTl9SRUxPQUQgfSk7XHJcbmV4cG9ydCBjb25zdCBzaWduUmVsb2FkZWQ6IEFjdGlvbkZhY3RvcnkgPSAobXNnOiBzdHJpbmcpID0+ICh7XHJcbiAgcGF5bG9hZDogbXNnLFxyXG4gIHR5cGU6IFNJR05fUkVMT0FERUQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2lnbkxvZzogQWN0aW9uRmFjdG9yeSA9IChtc2c6IHN0cmluZykgPT4gKHtcclxuICBwYXlsb2FkOiBtc2csXHJcbiAgdHlwZTogU0lHTl9MT0csXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBDb21waWxlciB9IGZyb20gXCJ3ZWJwYWNrXCI7XHJcbmltcG9ydCBDb21waWxlckV2ZW50c0ZhY2FkZSBmcm9tIFwiLi9Db21waWxlckV2ZW50c0ZhY2FkZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlciB7XHJcbiAgcHVibGljIGNvbnRleHQ6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIF9pbmplY3RvcjogSW5qZWN0TWlkZGxld2FyZTtcclxuXHJcbiAgcHJvdGVjdGVkIF90cmlnZ2VyZXI6IFRyaWdnZXJlcjtcclxuXHJcbiAgcHJvdGVjdGVkIF9ldmVudEFQSTogQ29tcGlsZXJFdmVudHNGYWNhZGU7XHJcblxyXG4gIHByb3RlY3RlZCBfY2h1bmtWZXJzaW9uczogUmVjb3JkPHN0cmluZywgYW55PjtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGFwcGx5KGNvbXBpbGVyOiBDb21waWxlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcGlsYXRpb24sIENvbXBpbGVyIH0gZnJvbSBcIndlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGVyRXZlbnRzRmFjYWRlIHtcclxuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbk5hbWUgPSBcIndlYnBhY2stZXh0LXJlbG9hZGVyXCI7XHJcblxyXG4gIHByaXZhdGUgX2NvbXBpbGVyOiBDb21waWxlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29tcGlsZXI6IENvbXBpbGVyKSB7XHJcbiAgICB0aGlzLl9jb21waWxlciA9IGNvbXBpbGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFmdGVyT3B0aW1pemVDaHVua3MoY2FsbDogKGNvbXBpbGF0aW9uOiBDb21waWxhdGlvbiwgY2h1bmtzOiBDb21waWxhdGlvbltcImNodW5rc1wiXSkgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcChDb21waWxlckV2ZW50c0ZhY2FkZS5leHRlbnNpb25OYW1lLCAoY29tcCkgPT4ge1xyXG4gICAgICBjb25zdCBjaHVua3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgIGNvbnN0IGFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cyA9IChjaHVua3NBZnRlck9wdGltaXphdGlvbikgPT4ge1xyXG4gICAgICAgIGNhbGwoY29tcCwgY2h1bmtzQWZ0ZXJPcHRpbWl6YXRpb24pO1xyXG4gICAgICB9O1xyXG4gICAgICBjb21wLmhvb2tzLnByb2Nlc3NBc3NldHMudGFwKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXHJcbiAgICAgICAgICBzdGFnZTogQ29tcGlsYXRpb24uUFJPQ0VTU19BU1NFVFNfU1RBR0VfQU5BTFlTRSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbXAuY2h1bmtzLmZvckVhY2goKGNodW5rKSA9PiB7XHJcbiAgICAgICAgICAgIGNodW5rcy5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhZnRlck9wdGltaXplQ2h1bmtBc3NldHMoY2h1bmtzKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWZ0ZXJFbWl0KGNhbGw6IChjb21waWxhdGlvbjogQ29tcGlsYXRpb24pID0+IHZvaWQpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5ob29rcy5hZnRlckVtaXQudGFwKENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsIGNhbGwpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxudmFyIGlzTW9kZXJuID0gKFxuICB0eXBlb2YgQnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgQnVmZmVyLmFsbG9jID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBCdWZmZXIuYWxsb2NVbnNhZmUgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIEJ1ZmZlci5mcm9tID09PSAnZnVuY3Rpb24nXG4pXG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIgKGlucHV0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGlucHV0KS5zbGljZSg4LCAtMSkgPT09ICdBcnJheUJ1ZmZlcidcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyIChvYmosIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBieXRlT2Zmc2V0ID4+Pj0gMFxuXG4gIHZhciBtYXhMZW5ndGggPSBvYmouYnl0ZUxlbmd0aCAtIGJ5dGVPZmZzZXRcblxuICBpZiAobWF4TGVuZ3RoIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiJ29mZnNldCcgaXMgb3V0IG9mIGJvdW5kc1wiKVxuICB9XG5cbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gbWF4TGVuZ3RoXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID4+Pj0gMFxuXG4gICAgaWYgKGxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInbGVuZ3RoJyBpcyBvdXQgb2YgYm91bmRzXCIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzTW9kZXJuXG4gICAgPyBCdWZmZXIuZnJvbShvYmouc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGxlbmd0aCkpXG4gICAgOiBuZXcgQnVmZmVyKG5ldyBVaW50OEFycmF5KG9iai5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgbGVuZ3RoKSkpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgcmV0dXJuIGlzTW9kZXJuXG4gICAgPyBCdWZmZXIuZnJvbShzdHJpbmcsIGVuY29kaW5nKVxuICAgIDogbmV3IEJ1ZmZlcihzdHJpbmcsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBidWZmZXJGcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmIChpc0FycmF5QnVmZmVyKHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKHZhbHVlKVxuICAgIDogbmV3IEJ1ZmZlcih2YWx1ZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJGcm9tXG4iLCIvKlxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuT3JpZ2luYWwgTGlicmFyeVxuICAtIENvcHlyaWdodCAoYykgTWFyYWsgU3F1aXJlc1xuXG5BZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHlcbiAtIENvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxudmFyIGNvbG9ycyA9IHt9O1xubW9kdWxlWydleHBvcnRzJ10gPSBjb2xvcnM7XG5cbmNvbG9ycy50aGVtZXMgPSB7fTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgYW5zaVN0eWxlcyA9IGNvbG9ycy5zdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xudmFyIGRlZmluZVByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgbmV3TGluZVJlZ2V4ID0gbmV3IFJlZ0V4cCgvW1xcclxcbl0rL2cpO1xuXG5jb2xvcnMuc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJy4vc3lzdGVtL3N1cHBvcnRzLWNvbG9ycycpLnN1cHBvcnRzQ29sb3I7XG5cbmlmICh0eXBlb2YgY29sb3JzLmVuYWJsZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbG9ycy5lbmFibGVkID0gY29sb3JzLnN1cHBvcnRzQ29sb3IoKSAhPT0gZmFsc2U7XG59XG5cbmNvbG9ycy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSB0cnVlO1xufTtcblxuY29sb3JzLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSBmYWxzZTtcbn07XG5cbmNvbG9ycy5zdHJpcENvbG9ycyA9IGNvbG9ycy5zdHJpcCA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gKCcnICsgc3RyKS5yZXBsYWNlKC9cXHgxQlxcW1xcZCttL2csICcnKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xudmFyIHN0eWxpemUgPSBjb2xvcnMuc3R5bGl6ZSA9IGZ1bmN0aW9uIHN0eWxpemUoc3RyLCBzdHlsZSkge1xuICBpZiAoIWNvbG9ycy5lbmFibGVkKSB7XG4gICAgcmV0dXJuIHN0cisnJztcbiAgfVxuXG4gIHZhciBzdHlsZU1hcCA9IGFuc2lTdHlsZXNbc3R5bGVdO1xuXG4gIC8vIFN0eWxpemUgc2hvdWxkIHdvcmsgZm9yIG5vbi1BTlNJIHN0eWxlcywgdG9vXG4gIGlmKCFzdHlsZU1hcCAmJiBzdHlsZSBpbiBjb2xvcnMpe1xuICAgIC8vIFN0eWxlIG1hcHMgbGlrZSB0cmFwIG9wZXJhdGUgYXMgZnVuY3Rpb25zIG9uIHN0cmluZ3M7XG4gICAgLy8gdGhleSBkb24ndCBoYXZlIHByb3BlcnRpZXMgbGlrZSBvcGVuIG9yIGNsb3NlLlxuICAgIHJldHVybiBjb2xvcnNbc3R5bGVdKHN0cik7XG4gIH1cblxuICByZXR1cm4gc3R5bGVNYXAub3BlbiArIHN0ciArIHN0eWxlTWFwLmNsb3NlO1xufTtcblxudmFyIG1hdGNoT3BlcmF0b3JzUmUgPSAvW3xcXFxce30oKVtcXF1eJCsqPy5dL2c7XG52YXIgZXNjYXBlU3RyaW5nUmVnZXhwID0gZnVuY3Rpb24oc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIH1cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG1hdGNoT3BlcmF0b3JzUmUsICdcXFxcJCYnKTtcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKF9zdHlsZXMpIHtcbiAgdmFyIGJ1aWxkZXIgPSBmdW5jdGlvbiBidWlsZGVyKCkge1xuICAgIHJldHVybiBhcHBseVN0eWxlLmFwcGx5KGJ1aWxkZXIsIGFyZ3VtZW50cyk7XG4gIH07XG4gIGJ1aWxkZXIuX3N0eWxlcyA9IF9zdHlsZXM7XG4gIC8vIF9fcHJvdG9fXyBpcyB1c2VkIGJlY2F1c2Ugd2UgbXVzdCByZXR1cm4gYSBmdW5jdGlvbiwgYnV0IHRoZXJlIGlzXG4gIC8vIG5vIHdheSB0byBjcmVhdGUgYSBmdW5jdGlvbiB3aXRoIGEgZGlmZmVyZW50IHByb3RvdHlwZS5cbiAgYnVpbGRlci5fX3Byb3RvX18gPSBwcm90bztcbiAgcmV0dXJuIGJ1aWxkZXI7XG59XG5cbnZhciBzdHlsZXMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgYW5zaVN0eWxlcy5ncmV5ID0gYW5zaVN0eWxlcy5ncmF5O1xuICBPYmplY3Qua2V5cyhhbnNpU3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGFuc2lTdHlsZXNba2V5XS5jbG9zZVJlID1cbiAgICAgIG5ldyBSZWdFeHAoZXNjYXBlU3RyaW5nUmVnZXhwKGFuc2lTdHlsZXNba2V5XS5jbG9zZSksICdnJyk7XG4gICAgcmV0W2tleV0gPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYnVpbGQodGhpcy5fc3R5bGVzLmNvbmNhdChrZXkpKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59KSgpO1xuXG52YXIgcHJvdG8gPSBkZWZpbmVQcm9wcyhmdW5jdGlvbiBjb2xvcnMoKSB7fSwgc3R5bGVzKTtcblxuZnVuY3Rpb24gYXBwbHlTdHlsZSgpIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gIHZhciBzdHIgPSBhcmdzLm1hcChmdW5jdGlvbihhcmcpIHtcbiAgICAvLyBVc2Ugd2VhayBlcXVhbGl0eSBjaGVjayBzbyB3ZSBjYW4gY29sb3JpemUgbnVsbC91bmRlZmluZWQgaW4gc2FmZSBtb2RlXG4gICAgaWYgKGFyZyAhPSBudWxsICYmIGFyZy5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXRpbC5pbnNwZWN0KGFyZyk7XG4gICAgfVxuICB9KS5qb2luKCcgJyk7XG5cbiAgaWYgKCFjb2xvcnMuZW5hYmxlZCB8fCAhc3RyKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBuZXdMaW5lc1ByZXNlbnQgPSBzdHIuaW5kZXhPZignXFxuJykgIT0gLTE7XG5cbiAgdmFyIG5lc3RlZFN0eWxlcyA9IHRoaXMuX3N0eWxlcztcblxuICB2YXIgaSA9IG5lc3RlZFN0eWxlcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgY29kZSA9IGFuc2lTdHlsZXNbbmVzdGVkU3R5bGVzW2ldXTtcbiAgICBzdHIgPSBjb2RlLm9wZW4gKyBzdHIucmVwbGFjZShjb2RlLmNsb3NlUmUsIGNvZGUub3BlbikgKyBjb2RlLmNsb3NlO1xuICAgIGlmIChuZXdMaW5lc1ByZXNlbnQpIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ld0xpbmVSZWdleCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGNvZGUuY2xvc2UgKyBtYXRjaCArIGNvZGUub3BlbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmNvbG9ycy5zZXRUaGVtZSA9IGZ1bmN0aW9uKHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbG9ycy5zZXRUaGVtZSBub3cgb25seSBhY2NlcHRzIGFuIG9iamVjdCwgbm90IGEgc3RyaW5nLiAgJyArXG4gICAgICAnSWYgeW91IGFyZSB0cnlpbmcgdG8gc2V0IGEgdGhlbWUgZnJvbSBhIGZpbGUsIGl0IGlzIG5vdyB5b3VyICh0aGUgJyArXG4gICAgICAnY2FsbGVyXFwncykgcmVzcG9uc2liaWxpdHkgdG8gcmVxdWlyZSB0aGUgZmlsZS4gIFRoZSBvbGQgc3ludGF4ICcgK1xuICAgICAgJ2xvb2tlZCBsaWtlIGNvbG9ycy5zZXRUaGVtZShfX2Rpcm5hbWUgKyAnICtcbiAgICAgICdcXCcvLi4vdGhlbWVzL2dlbmVyaWMtbG9nZ2luZy5qc1xcJyk7IFRoZSBuZXcgc3ludGF4IGxvb2tzIGxpa2UgJytcbiAgICAgICdjb2xvcnMuc2V0VGhlbWUocmVxdWlyZShfX2Rpcm5hbWUgKyAnICtcbiAgICAgICdcXCcvLi4vdGhlbWVzL2dlbmVyaWMtbG9nZ2luZy5qc1xcJykpOycpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBzdHlsZSBpbiB0aGVtZSkge1xuICAgIChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgY29sb3JzW3N0eWxlXSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBpZiAodHlwZW9mIHRoZW1lW3N0eWxlXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgb3V0ID0gc3RyO1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhlbWVbc3R5bGVdKSB7XG4gICAgICAgICAgICBvdXQgPSBjb2xvcnNbdGhlbWVbc3R5bGVdW2ldXShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcnNbdGhlbWVbc3R5bGVdXShzdHIpO1xuICAgICAgfTtcbiAgICB9KShzdHlsZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXRbbmFtZV0gPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYnVpbGQoW25hbWVdKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbnZhciBzZXF1ZW5jZXIgPSBmdW5jdGlvbiBzZXF1ZW5jZXIobWFwLCBzdHIpIHtcbiAgdmFyIGV4cGxvZGVkID0gc3RyLnNwbGl0KCcnKTtcbiAgZXhwbG9kZWQgPSBleHBsb2RlZC5tYXAobWFwKTtcbiAgcmV0dXJuIGV4cGxvZGVkLmpvaW4oJycpO1xufTtcblxuLy8gY3VzdG9tIGZvcm1hdHRlciBtZXRob2RzXG5jb2xvcnMudHJhcCA9IHJlcXVpcmUoJy4vY3VzdG9tL3RyYXAnKTtcbmNvbG9ycy56YWxnbyA9IHJlcXVpcmUoJy4vY3VzdG9tL3phbGdvJyk7XG5cbi8vIG1hcHNcbmNvbG9ycy5tYXBzID0ge307XG5jb2xvcnMubWFwcy5hbWVyaWNhID0gcmVxdWlyZSgnLi9tYXBzL2FtZXJpY2EnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMuemVicmEgPSByZXF1aXJlKCcuL21hcHMvemVicmEnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMucmFpbmJvdyA9IHJlcXVpcmUoJy4vbWFwcy9yYWluYm93JykoY29sb3JzKTtcbmNvbG9ycy5tYXBzLnJhbmRvbSA9IHJlcXVpcmUoJy4vbWFwcy9yYW5kb20nKShjb2xvcnMpO1xuXG5mb3IgKHZhciBtYXAgaW4gY29sb3JzLm1hcHMpIHtcbiAgKGZ1bmN0aW9uKG1hcCkge1xuICAgIGNvbG9yc1ttYXBdID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gc2VxdWVuY2VyKGNvbG9ycy5tYXBzW21hcF0sIHN0cik7XG4gICAgfTtcbiAgfSkobWFwKTtcbn1cblxuZGVmaW5lUHJvcHMoY29sb3JzLCBpbml0KCkpO1xuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbiBydW5UaGVUcmFwKHRleHQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB0ZXh0ID0gdGV4dCB8fCAnUnVuIHRoZSB0cmFwLCBkcm9wIHRoZSBiYXNzJztcbiAgdGV4dCA9IHRleHQuc3BsaXQoJycpO1xuICB2YXIgdHJhcCA9IHtcbiAgICBhOiBbJ1xcdTAwNDAnLCAnXFx1MDEwNCcsICdcXHUwMjNhJywgJ1xcdTAyNDUnLCAnXFx1MDM5NCcsICdcXHUwMzliJywgJ1xcdTA0MTQnXSxcbiAgICBiOiBbJ1xcdTAwZGYnLCAnXFx1MDE4MScsICdcXHUwMjQzJywgJ1xcdTAyNmUnLCAnXFx1MDNiMicsICdcXHUwZTNmJ10sXG4gICAgYzogWydcXHUwMGE5JywgJ1xcdTAyM2InLCAnXFx1MDNmZSddLFxuICAgIGQ6IFsnXFx1MDBkMCcsICdcXHUwMThhJywgJ1xcdTA1MDAnLCAnXFx1MDUwMScsICdcXHUwNTAyJywgJ1xcdTA1MDMnXSxcbiAgICBlOiBbJ1xcdTAwY2InLCAnXFx1MDExNScsICdcXHUwMThlJywgJ1xcdTAyNTgnLCAnXFx1MDNhMycsICdcXHUwM2JlJywgJ1xcdTA0YmMnLFxuICAgICAgJ1xcdTBhNmMnXSxcbiAgICBmOiBbJ1xcdTA0ZmEnXSxcbiAgICBnOiBbJ1xcdTAyNjInXSxcbiAgICBoOiBbJ1xcdTAxMjYnLCAnXFx1MDE5NScsICdcXHUwNGEyJywgJ1xcdTA0YmEnLCAnXFx1MDRjNycsICdcXHUwNTBhJ10sXG4gICAgaTogWydcXHUwZjBmJ10sXG4gICAgajogWydcXHUwMTM0J10sXG4gICAgazogWydcXHUwMTM4JywgJ1xcdTA0YTAnLCAnXFx1MDRjMycsICdcXHUwNTFlJ10sXG4gICAgbDogWydcXHUwMTM5J10sXG4gICAgbTogWydcXHUwMjhkJywgJ1xcdTA0Y2QnLCAnXFx1MDRjZScsICdcXHUwNTIwJywgJ1xcdTA1MjEnLCAnXFx1MGQ2OSddLFxuICAgIG46IFsnXFx1MDBkMScsICdcXHUwMTRiJywgJ1xcdTAxOWQnLCAnXFx1MDM3NicsICdcXHUwM2EwJywgJ1xcdTA0OGEnXSxcbiAgICBvOiBbJ1xcdTAwZDgnLCAnXFx1MDBmNScsICdcXHUwMGY4JywgJ1xcdTAxZmUnLCAnXFx1MDI5OCcsICdcXHUwNDdhJywgJ1xcdTA1ZGQnLFxuICAgICAgJ1xcdTA2ZGQnLCAnXFx1MGU0ZiddLFxuICAgIHA6IFsnXFx1MDFmNycsICdcXHUwNDhlJ10sXG4gICAgcTogWydcXHUwOWNkJ10sXG4gICAgcjogWydcXHUwMGFlJywgJ1xcdTAxYTYnLCAnXFx1MDIxMCcsICdcXHUwMjRjJywgJ1xcdTAyODAnLCAnXFx1MDQyZiddLFxuICAgIHM6IFsnXFx1MDBhNycsICdcXHUwM2RlJywgJ1xcdTAzZGYnLCAnXFx1MDNlOCddLFxuICAgIHQ6IFsnXFx1MDE0MScsICdcXHUwMTY2JywgJ1xcdTAzNzMnXSxcbiAgICB1OiBbJ1xcdTAxYjEnLCAnXFx1MDU0ZCddLFxuICAgIHY6IFsnXFx1MDVkOCddLFxuICAgIHc6IFsnXFx1MDQyOCcsICdcXHUwNDYwJywgJ1xcdTA0N2MnLCAnXFx1MGQ3MCddLFxuICAgIHg6IFsnXFx1MDRiMicsICdcXHUwNGZlJywgJ1xcdTA0ZmMnLCAnXFx1MDRmZCddLFxuICAgIHk6IFsnXFx1MDBhNScsICdcXHUwNGIwJywgJ1xcdTA0Y2InXSxcbiAgICB6OiBbJ1xcdTAxYjUnLCAnXFx1MDI0MCddLFxuICB9O1xuICB0ZXh0LmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgIGMgPSBjLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGNoYXJzID0gdHJhcFtjXSB8fCBbJyAnXTtcbiAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCk7XG4gICAgaWYgKHR5cGVvZiB0cmFwW2NdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ICs9IHRyYXBbY11bcmFuZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBjO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gcGxlYXNlIG5vXG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uIHphbGdvKHRleHQsIG9wdGlvbnMpIHtcbiAgdGV4dCA9IHRleHQgfHwgJyAgIGhlIGlzIGhlcmUgICAnO1xuICB2YXIgc291bCA9IHtcbiAgICAndXAnOiBbXG4gICAgICAnzI0nLCAnzI4nLCAnzIQnLCAnzIUnLFxuICAgICAgJ8y/JywgJ8yRJywgJ8yGJywgJ8yQJyxcbiAgICAgICfNkicsICfNlycsICfNkScsICfMhycsXG4gICAgICAnzIgnLCAnzIonLCAnzYInLCAnzJMnLFxuICAgICAgJ8yIJywgJ82KJywgJ82LJywgJ82MJyxcbiAgICAgICfMgycsICfMgicsICfMjCcsICfNkCcsXG4gICAgICAnzIAnLCAnzIEnLCAnzIsnLCAnzI8nLFxuICAgICAgJ8ySJywgJ8yTJywgJ8yUJywgJ8y9JyxcbiAgICAgICfMiScsICfNoycsICfNpCcsICfNpScsXG4gICAgICAnzaYnLCAnzacnLCAnzagnLCAnzaknLFxuICAgICAgJ82qJywgJ82rJywgJ82sJywgJ82tJyxcbiAgICAgICfNricsICfNrycsICfMvicsICfNmycsXG4gICAgICAnzYYnLCAnzJonLFxuICAgIF0sXG4gICAgJ2Rvd24nOiBbXG4gICAgICAnzJYnLCAnzJcnLCAnzJgnLCAnzJknLFxuICAgICAgJ8ycJywgJ8ydJywgJ8yeJywgJ8yfJyxcbiAgICAgICfMoCcsICfMpCcsICfMpScsICfMpicsXG4gICAgICAnzKknLCAnzKonLCAnzKsnLCAnzKwnLFxuICAgICAgJ8ytJywgJ8yuJywgJ8yvJywgJ8ywJyxcbiAgICAgICfMsScsICfMsicsICfMsycsICfMuScsXG4gICAgICAnzLonLCAnzLsnLCAnzLwnLCAnzYUnLFxuICAgICAgJ82HJywgJ82IJywgJ82JJywgJ82NJyxcbiAgICAgICfNjicsICfNkycsICfNlCcsICfNlScsXG4gICAgICAnzZYnLCAnzZknLCAnzZonLCAnzKMnLFxuICAgIF0sXG4gICAgJ21pZCc6IFtcbiAgICAgICfMlScsICfMmycsICfMgCcsICfMgScsXG4gICAgICAnzZgnLCAnzKEnLCAnzKInLCAnzKcnLFxuICAgICAgJ8yoJywgJ8y0JywgJ8y1JywgJ8y2JyxcbiAgICAgICfNnCcsICfNnScsICfNnicsXG4gICAgICAnzZ8nLCAnzaAnLCAnzaInLCAnzLgnLFxuICAgICAgJ8y3JywgJ82hJywgJyDSiScsXG4gICAgXSxcbiAgfTtcbiAgdmFyIGFsbCA9IFtdLmNvbmNhdChzb3VsLnVwLCBzb3VsLmRvd24sIHNvdWwubWlkKTtcblxuICBmdW5jdGlvbiByYW5kb21OdW1iZXIocmFuZ2UpIHtcbiAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2hhcihjaGFyYWN0ZXIpIHtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGFsbC5maWx0ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgYm9vbCA9IChpID09PSBjaGFyYWN0ZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBib29sO1xuICB9XG5cblxuICBmdW5jdGlvbiBoZUNvbWVzKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNvdW50cztcbiAgICB2YXIgbDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zWyd1cCddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWyd1cCddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3VwJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ21pZCddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydtaWQnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydtaWQnXSA6IHRydWU7XG4gICAgb3B0aW9uc1snZG93biddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydkb3duJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snZG93biddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydzaXplJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ3NpemUnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydzaXplJ10gOiAnbWF4aSc7XG4gICAgdGV4dCA9IHRleHQuc3BsaXQoJycpO1xuICAgIGZvciAobCBpbiB0ZXh0KSB7XG4gICAgICBpZiAoaXNDaGFyKGwpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGV4dFtsXTtcbiAgICAgIGNvdW50cyA9IHsndXAnOiAwLCAnZG93bic6IDAsICdtaWQnOiAwfTtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ21pbmknOlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcig4KTtcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDIpO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXhpJzpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoMTYpICsgMztcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDQpICsgMTtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig2NCkgKyAzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcig4KSArIDE7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcig2KSAvIDI7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoOCkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyID0gWyd1cCcsICdtaWQnLCAnZG93biddO1xuICAgICAgZm9yICh2YXIgZCBpbiBhcnIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyW2RdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBjb3VudHNbaW5kZXhdOyBpKyspIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHNvdWxbaW5kZXhdW3JhbmRvbU51bWJlcihzb3VsW2luZGV4XS5sZW5ndGgpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvLyBkb24ndCBzdW1tb24gaGltXG4gIHJldHVybiBoZUNvbWVzKHRleHQsIG9wdGlvbnMpO1xufTtcblxuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICBpZiAobGV0dGVyID09PSAnICcpIHJldHVybiBsZXR0ZXI7XG4gICAgc3dpdGNoIChpJTMpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGNvbG9ycy5yZWQobGV0dGVyKTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGNvbG9ycy53aGl0ZShsZXR0ZXIpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gY29sb3JzLmJsdWUobGV0dGVyKTtcbiAgICB9XG4gIH07XG59O1xuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgLy8gUm9ZIEcgQmlWXG4gIHZhciByYWluYm93Q29sb3JzID0gWydyZWQnLCAneWVsbG93JywgJ2dyZWVuJywgJ2JsdWUnLCAnbWFnZW50YSddO1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICcgJykge1xuICAgICAgcmV0dXJuIGxldHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbG9yc1tyYWluYm93Q29sb3JzW2krKyAlIHJhaW5ib3dDb2xvcnMubGVuZ3RoXV0obGV0dGVyKTtcbiAgICB9XG4gIH07XG59O1xuXG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICB2YXIgYXZhaWxhYmxlID0gWyd1bmRlcmxpbmUnLCAnaW52ZXJzZScsICdncmV5JywgJ3llbGxvdycsICdyZWQnLCAnZ3JlZW4nLFxuICAgICdibHVlJywgJ3doaXRlJywgJ2N5YW4nLCAnbWFnZW50YScsICdicmlnaHRZZWxsb3cnLCAnYnJpZ2h0UmVkJyxcbiAgICAnYnJpZ2h0R3JlZW4nLCAnYnJpZ2h0Qmx1ZScsICdicmlnaHRXaGl0ZScsICdicmlnaHRDeWFuJywgJ2JyaWdodE1hZ2VudGEnXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICByZXR1cm4gbGV0dGVyID09PSAnICcgPyBsZXR0ZXIgOlxuICAgICAgY29sb3JzW1xuICAgICAgICAgIGF2YWlsYWJsZVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoYXZhaWxhYmxlLmxlbmd0aCAtIDIpKV1cbiAgICAgIF0obGV0dGVyKTtcbiAgfTtcbn07XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIHJldHVybiBpICUgMiA9PT0gMCA/IGxldHRlciA6IGNvbG9ycy5pbnZlcnNlKGxldHRlcik7XG4gIH07XG59O1xuIiwiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG5cbnZhciBzdHlsZXMgPSB7fTtcbm1vZHVsZVsnZXhwb3J0cyddID0gc3R5bGVzO1xuXG52YXIgY29kZXMgPSB7XG4gIHJlc2V0OiBbMCwgMF0sXG5cbiAgYm9sZDogWzEsIDIyXSxcbiAgZGltOiBbMiwgMjJdLFxuICBpdGFsaWM6IFszLCAyM10sXG4gIHVuZGVybGluZTogWzQsIDI0XSxcbiAgaW52ZXJzZTogWzcsIDI3XSxcbiAgaGlkZGVuOiBbOCwgMjhdLFxuICBzdHJpa2V0aHJvdWdoOiBbOSwgMjldLFxuXG4gIGJsYWNrOiBbMzAsIDM5XSxcbiAgcmVkOiBbMzEsIDM5XSxcbiAgZ3JlZW46IFszMiwgMzldLFxuICB5ZWxsb3c6IFszMywgMzldLFxuICBibHVlOiBbMzQsIDM5XSxcbiAgbWFnZW50YTogWzM1LCAzOV0sXG4gIGN5YW46IFszNiwgMzldLFxuICB3aGl0ZTogWzM3LCAzOV0sXG4gIGdyYXk6IFs5MCwgMzldLFxuICBncmV5OiBbOTAsIDM5XSxcblxuICBicmlnaHRSZWQ6IFs5MSwgMzldLFxuICBicmlnaHRHcmVlbjogWzkyLCAzOV0sXG4gIGJyaWdodFllbGxvdzogWzkzLCAzOV0sXG4gIGJyaWdodEJsdWU6IFs5NCwgMzldLFxuICBicmlnaHRNYWdlbnRhOiBbOTUsIDM5XSxcbiAgYnJpZ2h0Q3lhbjogWzk2LCAzOV0sXG4gIGJyaWdodFdoaXRlOiBbOTcsIDM5XSxcblxuICBiZ0JsYWNrOiBbNDAsIDQ5XSxcbiAgYmdSZWQ6IFs0MSwgNDldLFxuICBiZ0dyZWVuOiBbNDIsIDQ5XSxcbiAgYmdZZWxsb3c6IFs0MywgNDldLFxuICBiZ0JsdWU6IFs0NCwgNDldLFxuICBiZ01hZ2VudGE6IFs0NSwgNDldLFxuICBiZ0N5YW46IFs0NiwgNDldLFxuICBiZ1doaXRlOiBbNDcsIDQ5XSxcbiAgYmdHcmF5OiBbMTAwLCA0OV0sXG4gIGJnR3JleTogWzEwMCwgNDldLFxuXG4gIGJnQnJpZ2h0UmVkOiBbMTAxLCA0OV0sXG4gIGJnQnJpZ2h0R3JlZW46IFsxMDIsIDQ5XSxcbiAgYmdCcmlnaHRZZWxsb3c6IFsxMDMsIDQ5XSxcbiAgYmdCcmlnaHRCbHVlOiBbMTA0LCA0OV0sXG4gIGJnQnJpZ2h0TWFnZW50YTogWzEwNSwgNDldLFxuICBiZ0JyaWdodEN5YW46IFsxMDYsIDQ5XSxcbiAgYmdCcmlnaHRXaGl0ZTogWzEwNywgNDldLFxuXG4gIC8vIGxlZ2FjeSBzdHlsZXMgZm9yIGNvbG9ycyBwcmUgdjEuMC4wXG4gIGJsYWNrQkc6IFs0MCwgNDldLFxuICByZWRCRzogWzQxLCA0OV0sXG4gIGdyZWVuQkc6IFs0MiwgNDldLFxuICB5ZWxsb3dCRzogWzQzLCA0OV0sXG4gIGJsdWVCRzogWzQ0LCA0OV0sXG4gIG1hZ2VudGFCRzogWzQ1LCA0OV0sXG4gIGN5YW5CRzogWzQ2LCA0OV0sXG4gIHdoaXRlQkc6IFs0NywgNDldLFxuXG59O1xuXG5PYmplY3Qua2V5cyhjb2RlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgdmFyIHZhbCA9IGNvZGVzW2tleV07XG4gIHZhciBzdHlsZSA9IHN0eWxlc1trZXldID0gW107XG4gIHN0eWxlLm9wZW4gPSAnXFx1MDAxYlsnICsgdmFsWzBdICsgJ20nO1xuICBzdHlsZS5jbG9zZSA9ICdcXHUwMDFiWycgKyB2YWxbMV0gKyAnbSc7XG59KTtcbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG50aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllc1xub2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvXG5zbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuU09GVFdBUkUuXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZmxhZywgYXJndikge1xuICBhcmd2ID0gYXJndiB8fCBwcm9jZXNzLmFyZ3Y7XG5cbiAgdmFyIHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG4gIHZhciBwcmVmaXggPSAvXi17MSwyfS8udGVzdChmbGFnKSA/ICcnIDogJy0tJztcbiAgdmFyIHBvcyA9IGFyZ3YuaW5kZXhPZihwcmVmaXggKyBmbGFnKTtcblxuICByZXR1cm4gcG9zICE9PSAtMSAmJiAodGVybWluYXRvclBvcyA9PT0gLTEgPyB0cnVlIDogcG9zIDwgdGVybWluYXRvclBvcyk7XG59O1xuIiwiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG9zID0gcmVxdWlyZSgnb3MnKTtcbnZhciBoYXNGbGFnID0gcmVxdWlyZSgnLi9oYXMtZmxhZy5qcycpO1xuXG52YXIgZW52ID0gcHJvY2Vzcy5lbnY7XG5cbnZhciBmb3JjZUNvbG9yID0gdm9pZCAwO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHwgaGFzRmxhZygnbm8tY29sb3JzJykgfHwgaGFzRmxhZygnY29sb3I9ZmFsc2UnKSkge1xuICBmb3JjZUNvbG9yID0gZmFsc2U7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHwgaGFzRmxhZygnY29sb3JzJykgfHwgaGFzRmxhZygnY29sb3I9dHJ1ZScpXG4gICAgICAgICAgIHx8IGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG4gIGZvcmNlQ29sb3IgPSB0cnVlO1xufVxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG4gIGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwXG4gICAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG4gIGlmIChsZXZlbCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGV2ZWw6IGxldmVsLFxuICAgIGhhc0Jhc2ljOiB0cnVlLFxuICAgIGhhczI1NjogbGV2ZWwgPj0gMixcbiAgICBoYXMxNm06IGxldmVsID49IDMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3Ioc3RyZWFtKSB7XG4gIGlmIChmb3JjZUNvbG9yID09PSBmYWxzZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8IGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKVxuICAgICAgfHwgaGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgaWYgKHN0cmVhbSAmJiAhc3RyZWFtLmlzVFRZICYmIGZvcmNlQ29sb3IgIT09IHRydWUpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG4gICAgLy8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcbiAgICAvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcbiAgICAvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3RcbiAgICAvLyBXaW5kb3dzIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZVxuICAgIC8vIGZpcnN0IHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuICAgIHZhciBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcbiAgICBpZiAoTnVtYmVyKHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpWzBdKSA+PSA4XG4gICAgICAgICYmIE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2KSB7XG4gICAgICByZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICgnQ0knIGluIGVudikge1xuICAgIGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKGZ1bmN0aW9uKHNpZ24pIHtcbiAgICAgIHJldHVybiBzaWduIGluIGVudjtcbiAgICB9KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG4gICAgcmV0dXJuICgvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMFxuICAgICk7XG4gIH1cblxuICBpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG4gICAgdmFyIHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cbiAgICBzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcbiAgICAgIGNhc2UgJ2lUZXJtLmFwcCc6XG4gICAgICAgIHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcbiAgICAgIGNhc2UgJ0h5cGVyJzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgLy8gTm8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuICAgIHJldHVybiBtaW47XG4gIH1cblxuICByZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG4gIHZhciBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcbiAgcmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcbiAgc3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuICBzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVyciksXG59O1xuIiwiLy9cbi8vIFJlbWFyazogUmVxdWlyaW5nIHRoaXMgZmlsZSB3aWxsIHVzZSB0aGUgXCJzYWZlXCIgY29sb3JzIEFQSSxcbi8vIHdoaWNoIHdpbGwgbm90IHRvdWNoIFN0cmluZy5wcm90b3R5cGUuXG4vL1xuLy8gICB2YXIgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzL3NhZmUnKTtcbi8vICAgY29sb3JzLnJlZChcImZvb1wiKVxuLy9cbi8vXG52YXIgY29sb3JzID0gcmVxdWlyZSgnLi9saWIvY29sb3JzJyk7XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGNvbG9ycztcbiIsImV4cG9ydCBkZWZhdWx0IFwiLyogZXNsaW50LWRpc2FibGUgKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qICAgICAgU3RhcnQgb2YgV2VicGFjayBIb3QgRXh0ZW5zaW9uIE1pZGRsZXdhcmUgICAgICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAgVGhpcyB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvIGEgbG9kYXNoIHRlbXBsLiwgYW55ICAqL1xcblxcbi8qICBleHRlcm5hbCBhcmd1bWVudCBtdXN0IGJlIHByb3ZpZGVkIHVzaW5nIGl0ICAgICAgICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4oZnVuY3Rpb24gKCkge1xcbiAgdHJ5IHtcXG4gICAgd2luZG93O1xcbiAgfSBjYXRjaCAoX2EpIHtcXG4gICAgdmFyIHdpbmRvdztcXG4gIH1cXG5cXG4gIDtcXG4gIHZhciBpbmplY3Rpb25Db250ZXh0ID0gdGhpcyB8fCB3aW5kb3cgfHwgY2hyb21lID8ge1xcbiAgICBicm93c2VyOiBjaHJvbWVcXG4gIH0gOiB7XFxuICAgIGJyb3dzZXI6IG51bGxcXG4gIH07XFxuXFxuICAoZnVuY3Rpb24gKCkge1xcbiAgICBcXFwiPCU9IHBvbHlmaWxsU291cmNlICU+XFxcIjtcXG4gIH0pKCk7XFxuXFxuICB2YXIgX3JlZiA9IGluamVjdGlvbkNvbnRleHQgfHwge30sXFxuICAgICAgYnJvd3NlciA9IF9yZWYuYnJvd3NlcjtcXG5cXG4gIHZhciBzaWduYWxzID0gSlNPTi5wYXJzZSgnPCU9IHNpZ25hbHMgJT4nKTtcXG4gIHZhciBjb25maWcgPSBKU09OLnBhcnNlKCc8JT0gY29uZmlnICU+Jyk7XFxuICB2YXIgcmVsb2FkUGFnZSA9IFxcXCI8JT0gcmVsb2FkUGFnZSAlPlxcXCIgPT09IFxcXCJ0cnVlXFxcIjtcXG4gIHZhciB3c0hvc3QgPSBcXFwiPCU9IFdTSG9zdCAlPlxcXCI7XFxuICB2YXIgU0lHTl9DSEFOR0UgPSBzaWduYWxzLlNJR05fQ0hBTkdFLFxcbiAgICAgIFNJR05fUkVMT0FEID0gc2lnbmFscy5TSUdOX1JFTE9BRCxcXG4gICAgICBTSUdOX1JFTE9BREVEID0gc2lnbmFscy5TSUdOX1JFTE9BREVELFxcbiAgICAgIFNJR05fTE9HID0gc2lnbmFscy5TSUdOX0xPRyxcXG4gICAgICBTSUdOX0NPTk5FQ1QgPSBzaWduYWxzLlNJR05fQ09OTkVDVDtcXG4gIHZhciBSRUNPTk5FQ1RfSU5URVJWQUwgPSBjb25maWcuUkVDT05ORUNUX0lOVEVSVkFMLFxcbiAgICAgIFJFQ09OTkVDVF9BVFRFTVBUID0gY29uZmlnLlJFQ09OTkVDVF9BVFRFTVBULFxcbiAgICAgIFNPQ0tFVF9FUlJfQ09ERV9SRUYgPSBjb25maWcuU09DS0VUX0VSUl9DT0RFX1JFRjtcXG4gIHZhciBydW50aW1lID0gYnJvd3Nlci5ydW50aW1lLFxcbiAgICAgIHRhYnMgPSBicm93c2VyLnRhYnM7XFxuICB2YXIgbWFuaWZlc3QgPSBydW50aW1lLmdldE1hbmlmZXN0KCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVscGVyIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG4gIHZhciBmb3JtYXR0ZXIgPSBmdW5jdGlvbiBmb3JtYXR0ZXIobXNnKSB7XFxuICAgIHJldHVybiBcXFwiWyBXRVI6IFxcXCIuY29uY2F0KG1zZywgXFxcIiBdXFxcIik7XFxuICB9O1xcblxcbiAgdmFyIGxvZ2dlciA9IGZ1bmN0aW9uIGxvZ2dlcihtc2cpIHtcXG4gICAgdmFyIGxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcXFwiaW5mb1xcXCI7XFxuICAgIHJldHVybiBjb25zb2xlW2xldmVsXShmb3JtYXR0ZXIobXNnKSk7XFxuICB9O1xcblxcbiAgdmFyIHRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lRm9ybWF0dGVyKGRhdGUpIHtcXG4gICAgcmV0dXJuIGRhdGUudG9UaW1lU3RyaW5nKCkucmVwbGFjZSgvLiooXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn0pLiovLCBcXFwiJDFcXFwiKTtcXG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENhbGxlZCBvbmx5IG9uIGNvbnRlbnQgc2NyaXB0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGNvbnRlbnRTY3JpcHRXb3JrZXIoKSB7XFxuICAgIHJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xcbiAgICAgIHR5cGU6IFNJR05fQ09OTkVDVFxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChtc2cpIHtcXG4gICAgICByZXR1cm4gY29uc29sZS5pbmZvKG1zZyk7XFxuICAgIH0pO1xcbiAgICBydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX3JlZjIpIHtcXG4gICAgICB2YXIgdHlwZSA9IF9yZWYyLnR5cGUsXFxuICAgICAgICAgIHBheWxvYWQgPSBfcmVmMi5wYXlsb2FkO1xcblxcbiAgICAgIHN3aXRjaCAodHlwZSkge1xcbiAgICAgICAgY2FzZSBTSUdOX1JFTE9BRDpcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJEZXRlY3RlZCBDaGFuZ2VzLiBSZWxvYWRpbmcuLi5cXFwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhcix2YXJzLW9uLXRvcCxibG9jay1zY29wZWQtdmFyXFxuXFxuICAgICAgICAgIHJlbG9hZFBhZ2UgJiYgKHdpbmRvdyA9PT0gbnVsbCB8fCB3aW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XFxuICAgICAgICAgIGJyZWFrO1xcblxcbiAgICAgICAgY2FzZSBTSUdOX0xPRzpcXG4gICAgICAgICAgY29uc29sZS5pbmZvKHBheWxvYWQpO1xcbiAgICAgICAgICBicmVhaztcXG5cXG4gICAgICAgIGRlZmF1bHQ6XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBDYWxsZWQgb25seSBvbiBiYWNrZ3JvdW5kIHNjcmlwdHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGJhY2tncm91bmRXb3JrZXIoc29ja2V0KSB7XFxuICAgIHJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChhY3Rpb24sIHNlbmRlcikge1xcbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gU0lHTl9DT05ORUNUKSB7XFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvcm1hdHRlcihcXFwiQ29ubmVjdGVkIHRvIFdlYiBFeHRlbnNpb24gSG90IFJlbG9hZGVyXFxcIikpO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgfSk7XFxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFxcXCJtZXNzYWdlXFxcIiwgZnVuY3Rpb24gKF9yZWYzKSB7XFxuICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhO1xcblxcbiAgICAgIHZhciBfSlNPTiRwYXJzZSA9IEpTT04ucGFyc2UoZGF0YSksXFxuICAgICAgICAgIHR5cGUgPSBfSlNPTiRwYXJzZS50eXBlLFxcbiAgICAgICAgICBwYXlsb2FkID0gX0pTT04kcGFyc2UucGF5bG9hZDtcXG5cXG4gICAgICBpZiAodHlwZSA9PT0gU0lHTl9DSEFOR0UgJiYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLm9ubHlQYWdlQ2hhbmdlZCkpIHtcXG4gICAgICAgIHRhYnMucXVlcnkoe1xcbiAgICAgICAgICBzdGF0dXM6IFxcXCJjb21wbGV0ZVxcXCJcXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGxvYWRlZFRhYnMpIHtcXG4gICAgICAgICAgbG9hZGVkVGFicy5mb3JFYWNoKGZ1bmN0aW9uICh0YWIpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGFiLmlkICYmIHRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XFxuICAgICAgICAgICAgICB0eXBlOiBTSUdOX1JFTE9BRFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xcbiAgICAgICAgICAgIHR5cGU6IFNJR05fUkVMT0FERUQsXFxuICAgICAgICAgICAgcGF5bG9hZDogZm9ybWF0dGVyKFxcXCJcXFwiLmNvbmNhdCh0aW1lRm9ybWF0dGVyKG5ldyBEYXRlKCkpLCBcXFwiIC0gXFxcIikuY29uY2F0KG1hbmlmZXN0Lm5hbWUsIFxcXCIgc3VjY2Vzc2Z1bGx5IHJlbG9hZGVkXFxcIikpXFxuICAgICAgICAgIH0pKTtcXG4gICAgICAgICAgcnVudGltZS5yZWxvYWQoKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBydW50aW1lLnNlbmRNZXNzYWdlKHtcXG4gICAgICAgICAgdHlwZTogdHlwZSxcXG4gICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXFxcImNsb3NlXFxcIiwgZnVuY3Rpb24gKF9yZWY0KSB7XFxuICAgICAgdmFyIGNvZGUgPSBfcmVmNC5jb2RlO1xcbiAgICAgIGxvZ2dlcihcXFwiU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkLiBDb2RlIFxcXCIuY29uY2F0KGNvZGUsIFxcXCIuIFNlZSBtb3JlIGluIFxcXCIpLmNvbmNhdChTT0NLRVRfRVJSX0NPREVfUkVGKSwgXFxcIndhcm5cXFwiKTtcXG4gICAgICB2YXIgcmVjb25uZWN0QXR0ZW1wdHMgPSAwO1xcbiAgICAgIHZhciBpbnRJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIGxvZ2dlcihcXFwiQXR0ZW1wdGluZyB0byByZWNvbm5lY3QgKHRpcDogQ2hlY2sgaWYgV2VicGFjayBpcyBydW5uaW5nKVxcXCIpO1xcbiAgICAgICAgdmFyIHdzID0gbmV3IFdlYlNvY2tldCh3c0hvc3QpO1xcblxcbiAgICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgaWYgKHJlY29ubmVjdEF0dGVtcHRzID49IFJFQ09OTkVDVF9BVFRFTVBUKSB7XFxuICAgICAgICAgICAgbG9nZ2VyKFxcXCJDb3VsZCBub3QgcmVjb25uZWN0IGFmdGVyIFxcXCIuY29uY2F0KFJFQ09OTkVDVF9BVFRFTVBULCBcXFwiIGF0dGVtcHRzLiBTdG9wcGluZyBhdXRvbWF0aWMgcmV0cnkuIFRvIHJlc3RhcnQgcmVsb2FkIHRoZSBleHRlbnNpb24gbWFudWFsbHkuXFxcIiksIFxcXCJ3YXJuXFxcIik7XFxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRJZCk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgbG9nZ2VyKFxcXCJFcnJvciB0cnlpbmcgdG8gcmUtY29ubmVjdC4gUmVhdHRlbXB0aW5nIGluIFxcXCIuY29uY2F0KFJFQ09OTkVDVF9JTlRFUlZBTCAvIDEwMDAsIFxcXCJzXFxcIiksIFxcXCJ3YXJuXFxcIik7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgcmVjb25uZWN0QXR0ZW1wdHMrKztcXG4gICAgICAgIH07XFxuXFxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFxcXCJvcGVuXFxcIiwgZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBjbGVhckludGVydmFsKGludElkKTtcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJSZWNvbm5lY3RlZC4gUmVsb2FkaW5nIHBsdWdpblxcXCIpO1xcbiAgICAgICAgICBydW50aW1lLnJlbG9hZCgpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSwgUkVDT05ORUNUX0lOVEVSVkFMKTtcXG4gICAgfSk7XFxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBDYWxsZWQgb25seSBvbiBleHRlbnNpb24gcGFnZXMgdGhhdCBhcmUgbm90IHRoZSBiYWNrZ3JvdW5kID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXFxuXFxuXFxuICBmdW5jdGlvbiBleHRlbnNpb25QYWdlV29ya2VyKCkge1xcbiAgICBydW50aW1lLnNlbmRNZXNzYWdlKHtcXG4gICAgICB0eXBlOiBTSUdOX0NPTk5FQ1RcXG4gICAgfSkudGhlbihmdW5jdGlvbiAobXNnKSB7XFxuICAgICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhtc2cpO1xcbiAgICB9KTtcXG4gICAgcnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKF9yZWY1KSB7XFxuICAgICAgdmFyIHR5cGUgPSBfcmVmNS50eXBlLFxcbiAgICAgICAgICBwYXlsb2FkID0gX3JlZjUucGF5bG9hZDtcXG5cXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcXG4gICAgICAgIGNhc2UgU0lHTl9DSEFOR0U6XFxuICAgICAgICAgIGxvZ2dlcihcXFwiRGV0ZWN0ZWQgQ2hhbmdlcy4gUmVsb2FkaW5nLi4uXFxcIik7XFxuICAgICAgICAgIHJlbG9hZFBhZ2UgJiYgKHdpbmRvdyA9PT0gbnVsbCB8fCB3aW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XFxuICAgICAgICAgIGJyZWFrO1xcblxcbiAgICAgICAgY2FzZSBTSUdOX0xPRzpcXG4gICAgICAgICAgY29uc29sZS5pbmZvKHBheWxvYWQpO1xcbiAgICAgICAgICBicmVhaztcXG5cXG4gICAgICAgIGRlZmF1bHQ6XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09IEJvb3RzdHJhcHMgdGhlIG1pZGRsZXdhcmUgPT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXFxuXFxuXFxuICBydW50aW1lLnJlbG9hZCA/ICF3aW5kb3cgPyBiYWNrZ3JvdW5kV29ya2VyKG5ldyBXZWJTb2NrZXQod3NIb3N0KSkgOiBleHRlbnNpb25QYWdlV29ya2VyKCkgOiBjb250ZW50U2NyaXB0V29ya2VyKCk7XFxufSkoKTtcXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogRW5kIG9mIFdlYnBhY2sgSG90IEV4dGVuc2lvbiBNaWRkbGV3YXJlICAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFxcXCJmdW5jdGlvblxcXCIgJiYgZGVmaW5lLmFtZCkge1xcbiAgICBkZWZpbmUoXFxcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFxcXCIsIFtcXFwibW9kdWxlXFxcIl0sIGZhY3RvcnkpO1xcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXFxcInVuZGVmaW5lZFxcXCIpIHtcXG4gICAgZmFjdG9yeShtb2R1bGUpO1xcbiAgfSBlbHNlIHtcXG4gICAgdmFyIG1vZCA9IHtcXG4gICAgICBleHBvcnRzOiB7fVxcbiAgICB9O1xcbiAgICBmYWN0b3J5KG1vZCk7XFxuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XFxuICB9XFxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFxcXCJ1bmRlZmluZWRcXFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcXFwidW5kZWZpbmVkXFxcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XFxuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC44LjAgLSBUdWUgQXByIDIwIDIwMjEgMTE6Mjc6MzggKi9cXG5cXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cXG5cXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXFxuXFxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXFxuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXFxuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xcbiAgXFxcInVzZSBzdHJpY3RcXFwiO1xcblxcbiAgaWYgKHR5cGVvZiBicm93c2VyID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcXG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXFxcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cXFwiO1xcbiAgICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcXFwiUmV0dXJuaW5nIGEgUHJvbWlzZSBpcyB0aGUgcHJlZmVycmVkIHdheSB0byBzZW5kIGEgcmVwbHkgZnJvbSBhbiBvbk1lc3NhZ2Uvb25NZXNzYWdlRXh0ZXJuYWwgbGlzdGVuZXIsIGFzIHRoZSBzZW5kUmVzcG9uc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHNwZWNzIChTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvcnVudGltZS9vbk1lc3NhZ2UpXFxcIjsgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXFxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxcblxcbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFxcXCJpbmNsdWRlXFxcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxcbiAgICAgIC8vIEpTT04gZmlsZS5cXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcXG4gICAgICAgIFxcXCJhbGFybXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJjbGVhckFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJib29rbWFya3NcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldENoaWxkcmVuXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFJlY2VudFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRTdWJUcmVlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFRyZWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwibW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlVHJlZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZWFyY2hcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJicm93c2VyQWN0aW9uXFxcIjoge1xcbiAgICAgICAgICBcXFwiZGlzYWJsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImVuYWJsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEJhZGdlVGV4dFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJvcGVuUG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRCYWRnZVRleHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRJY29uXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0VGl0bGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiYnJvd3NpbmdEYXRhXFxcIjoge1xcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUNhY2hlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUNvb2tpZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlRG93bmxvYWRzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUZvcm1EYXRhXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUhpc3RvcnlcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlTG9jYWxTdG9yYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVBhc3N3b3Jkc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVQbHVnaW5EYXRhXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldHRpbmdzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJjb21tYW5kc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiY29udGV4dE1lbnVzXFxcIjoge1xcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImNvb2tpZXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbENvb2tpZVN0b3Jlc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJkZXZ0b29sc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImluc3BlY3RlZFdpbmRvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwiZXZhbFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMixcXG4gICAgICAgICAgICAgIFxcXCJzaW5nbGVDYWxsYmFja0FyZ1xcXCI6IGZhbHNlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicGFuZWxzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDMsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDMsXFxuICAgICAgICAgICAgICBcXFwic2luZ2xlQ2FsbGJhY2tBcmdcXFwiOiB0cnVlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZWxlbWVudHNcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwiY3JlYXRlU2lkZWJhclBhbmVcXFwiOiB7XFxuICAgICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImRvd25sb2Fkc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNhbmNlbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkb3dubG9hZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJlcmFzZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRGaWxlSWNvblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJvcGVuXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicGF1c2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlRmlsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXN1bWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VhcmNoXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNob3dcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiZXh0ZW5zaW9uXFxcIjoge1xcbiAgICAgICAgICBcXFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImhpc3RvcnlcXFwiOiB7XFxuICAgICAgICAgIFxcXCJhZGRVcmxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGVsZXRlQWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRlbGV0ZVJhbmdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRlbGV0ZVVybFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRWaXNpdHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VhcmNoXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJpMThuXFxcIjoge1xcbiAgICAgICAgICBcXFwiZGV0ZWN0TGFuZ3VhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJpZGVudGl0eVxcXCI6IHtcXG4gICAgICAgICAgXFxcImxhdW5jaFdlYkF1dGhGbG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJpZGxlXFxcIjoge1xcbiAgICAgICAgICBcXFwicXVlcnlTdGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwibWFuYWdlbWVudFxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0U2VsZlxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRFbmFibGVkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVuaW5zdGFsbFNlbGZcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIm5vdGlmaWNhdGlvbnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFBlcm1pc3Npb25MZXZlbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInBhZ2VBY3Rpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJoaWRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0SWNvblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2hvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJwZXJtaXNzaW9uc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNvbnRhaW5zXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVxdWVzdFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwicnVudGltZVxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldEJhY2tncm91bmRQYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFBsYXRmb3JtSW5mb1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJvcGVuT3B0aW9uc1BhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVxdWVzdFVwZGF0ZUNoZWNrXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlbmRNZXNzYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDNcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlbmROYXRpdmVNZXNzYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFVuaW5zdGFsbFVSTFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwic2Vzc2lvbnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXREZXZpY2VzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFJlY2VudGx5Q2xvc2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlc3RvcmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInN0b3JhZ2VcXFwiOiB7XFxuICAgICAgICAgIFxcXCJsb2NhbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiY2xlYXJcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRCeXRlc0luVXNlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwic2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwibWFuYWdlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0Qnl0ZXNJblVzZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInN5bmNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0Qnl0ZXNJblVzZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcInNldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ0YWJzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY2FwdHVyZVZpc2libGVUYWJcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRldGVjdExhbmd1YWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRpc2NhcmRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZHVwbGljYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImV4ZWN1dGVTY3JpcHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEN1cnJlbnRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Wm9vbVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRab29tU2V0dGluZ3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ29CYWNrXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdvRm9yd2FyZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJoaWdobGlnaHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaW5zZXJ0Q1NTXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicXVlcnlcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVsb2FkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVDU1NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VuZE1lc3NhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogM1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0Wm9vbVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRab29tU2V0dGluZ3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ0b3BTaXRlc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwid2ViTmF2aWdhdGlvblxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldEFsbEZyYW1lc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRGcmFtZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwid2ViUmVxdWVzdFxcXCI6IHtcXG4gICAgICAgICAgXFxcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIndpbmRvd3NcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRDdXJyZW50XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldExhc3RGb2N1c2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfTtcXG5cXG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxcXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFxcXCIpO1xcbiAgICAgIH1cXG4gICAgICAvKipcXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcXG4gICAgICAgKiBvdGhlcndpc2UuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXFxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XFxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgZ2V0KGtleSkge1xcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcXG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgfVxcbiAgICAgIC8qKlxcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxcbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxcbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXFxcIm9iamVjdFxcXCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFxcXCJmdW5jdGlvblxcXCI7XFxuICAgICAgfTtcXG4gICAgICAvKipcXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcXG4gICAgICAgKlxcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXFxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXFxuICAgICAgICogICAgICAgIHByb21pc2UuXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXFxuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcXG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXFxuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cXG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcXG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XFxuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcXG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfTtcXG4gICAgICB9O1xcblxcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXFxcImFyZ3VtZW50XFxcIiA6IFxcXCJhcmd1bWVudHNcXFwiO1xcbiAgICAgIC8qKlxcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXFxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxcbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxcbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXFxuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcXG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXFxuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxcbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XFxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XFxuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxcbiAgICAgICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XFxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcXG4gICAgICAgICAgICAgICAgICByZWplY3RcXG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFxcXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFxcXCIsIGNiRXJyb3IpO1xcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7IC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXFxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cXG5cXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XFxuICAgICAgICAgICAgICAgIHJlc29sdmUsXFxuICAgICAgICAgICAgICAgIHJlamVjdFxcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgfTtcXG4gICAgICB9O1xcbiAgICAgIC8qKlxcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXFxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcXG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcXG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cXG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XFxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcXG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xcbiAgICAgIC8qKlxcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXFxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxcbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcXG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXFxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxcbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxcbiAgICAgICAqL1xcblxcbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XFxuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcXG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XFxuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xcblxcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXFxuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXFxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcXFwiZnVuY3Rpb25cXFwiKSB7XFxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXFxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XFxuICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXFxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXFxcIm9iamVjdFxcXCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XFxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXFxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXFxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XFxuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXFxcIipcXFwiKSkge1xcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1xcXCIqXFxcIl0pO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXFxuXFxuICAgICAgICAgICAgICAgIGdldCgpIHtcXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XFxuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XFxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgfTsgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcXFwiZ2V0XFxcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcXG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXFxuICAgICAgICAvL1xcbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cXG5cXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcXG4gICAgICB9O1xcbiAgICAgIC8qKlxcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXFxuICAgICAgICpcXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXFxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXFxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XFxuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XFxuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIH0pO1xcblxcbiAgICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXFxcImZ1bmN0aW9uXFxcIikge1xcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XFxuICAgICAgICB9XFxuICAgICAgICAvKipcXG4gICAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXFxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXFxuICAgICAgICAgKlxcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxcbiAgICAgICAgICovXFxuXFxuXFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XFxuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cXG4gICAgICAgICAgLyogd3JhcHBlcnMgKi9cXG4gICAgICAgICAgLCB7XFxuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcXG4gICAgICAgICAgICAgIG1heEFyZ3M6IDBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcXG4gICAgICAgIH07XFxuICAgICAgfSk7IC8vIEtlZXAgdHJhY2sgaWYgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgaGFzIGJlZW4gbG9nZ2VkIGF0IGxlYXN0IG9uY2UuXFxuXFxuICAgICAgbGV0IGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IGZhbHNlO1xcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcXG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLyoqXFxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxcbiAgICAgICAgICpcXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXFxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cXG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cXG4gICAgICAgICAqL1xcblxcblxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcXG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcXG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgICBpZiAoIWxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZykge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XFxuICAgICAgICAgICAgICAgIGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xcbiAgICAgICAgICAgIH07XFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgICBsZXQgcmVzdWx0O1xcblxcbiAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XFxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7IC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxcblxcbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICB9IC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXFxuXFxuXFxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcXG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXFxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcXG5cXG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXFxcInN0cmluZ1xcXCIpKSB7XFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xcbiAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFxcXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXFxcIjtcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XFxuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxcbiAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXFxcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVxcXCIsIGVycik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXFxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cXG5cXG5cXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcXG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XFxuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxcblxcblxcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH07XFxuICAgICAgfSk7XFxuXFxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xcbiAgICAgICAgcmVqZWN0LFxcbiAgICAgICAgcmVzb2x2ZVxcbiAgICAgIH0sIHJlcGx5KSA9PiB7XFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xcbiAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXFxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XFxuICAgICAgICB9XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcXG4gICAgICAgICAgICByZXNvbHZlLFxcbiAgICAgICAgICAgIHJlamVjdFxcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XFxuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XFxuICAgICAgICBkZXZ0b29sczoge1xcbiAgICAgICAgICBuZXR3b3JrOiB7XFxuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgcnVudGltZToge1xcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXFxcInNlbmRNZXNzYWdlXFxcIiwge1xcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXFxuICAgICAgICAgICAgbWF4QXJnczogM1xcbiAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHRhYnM6IHtcXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFxcXCJzZW5kTWVzc2FnZVxcXCIsIHtcXG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH1cXG4gICAgICB9O1xcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcXG4gICAgICAgIGNsZWFyOiB7XFxuICAgICAgICAgIG1pbkFyZ3M6IDEsXFxuICAgICAgICAgIG1heEFyZ3M6IDFcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXQ6IHtcXG4gICAgICAgICAgbWluQXJnczogMSxcXG4gICAgICAgICAgbWF4QXJnczogMVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldDoge1xcbiAgICAgICAgICBtaW5BcmdzOiAxLFxcbiAgICAgICAgICBtYXhBcmdzOiAxXFxuICAgICAgICB9XFxuICAgICAgfTtcXG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xcbiAgICAgICAgbmV0d29yazoge1xcbiAgICAgICAgICBcXFwiKlxcXCI6IHNldHRpbmdNZXRhZGF0YVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNlcnZpY2VzOiB7XFxuICAgICAgICAgIFxcXCIqXFxcIjogc2V0dGluZ01ldGFkYXRhXFxuICAgICAgICB9LFxcbiAgICAgICAgd2Vic2l0ZXM6IHtcXG4gICAgICAgICAgXFxcIipcXFwiOiBzZXR0aW5nTWV0YWRhdGFcXG4gICAgICAgIH1cXG4gICAgICB9O1xcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XFxuICAgIH07XFxuXFxuICAgIGlmICh0eXBlb2YgY2hyb21lICE9IFxcXCJvYmplY3RcXFwiIHx8ICFjaHJvbWUgfHwgIWNocm9tZS5ydW50aW1lIHx8ICFjaHJvbWUucnVudGltZS5pZCkge1xcbiAgICAgIHRocm93IG5ldyBFcnJvcihcXFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXFxcIik7XFxuICAgIH0gLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXFxuXFxuXFxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcXG4gIH0gZWxzZSB7XFxuICAgIG1vZHVsZS5leHBvcnRzID0gYnJvd3NlcjtcXG4gIH1cXG59KTtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxcblwiOyIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc05hdGl2ZU1hcCA9IHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBkYXRhIHN0cnVjdHVyZSB3aGljaCBpcyBhIGNvbWJpbmF0aW9uIG9mIGFuIGFycmF5IGFuZCBhIHNldC4gQWRkaW5nIGEgbmV3XG4gKiBtZW1iZXIgaXMgTygxKSwgdGVzdGluZyBmb3IgbWVtYmVyc2hpcCBpcyBPKDEpLCBhbmQgZmluZGluZyB0aGUgaW5kZXggb2YgYW5cbiAqIGVsZW1lbnQgaXMgTygxKS4gUmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgc2V0IGlzIG5vdCBzdXBwb3J0ZWQuIE9ubHlcbiAqIHN0cmluZ3MgYXJlIHN1cHBvcnRlZCBmb3IgbWVtYmVyc2hpcC5cbiAqL1xuZnVuY3Rpb24gQXJyYXlTZXQoKSB7XG4gIHRoaXMuX2FycmF5ID0gW107XG4gIHRoaXMuX3NldCA9IGhhc05hdGl2ZU1hcCA/IG5ldyBNYXAoKSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogU3RhdGljIG1ldGhvZCBmb3IgY3JlYXRpbmcgQXJyYXlTZXQgaW5zdGFuY2VzIGZyb20gYW4gZXhpc3RpbmcgYXJyYXkuXG4gKi9cbkFycmF5U2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIEFycmF5U2V0X2Zyb21BcnJheShhQXJyYXksIGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgdmFyIHNldCA9IG5ldyBBcnJheVNldCgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYUFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2V0LmFkZChhQXJyYXlbaV0sIGFBbGxvd0R1cGxpY2F0ZXMpO1xuICB9XG4gIHJldHVybiBzZXQ7XG59O1xuXG4vKipcbiAqIFJldHVybiBob3cgbWFueSB1bmlxdWUgaXRlbXMgYXJlIGluIHRoaXMgQXJyYXlTZXQuIElmIGR1cGxpY2F0ZXMgaGF2ZSBiZWVuXG4gKiBhZGRlZCwgdGhhbiB0aG9zZSBkbyBub3QgY291bnQgdG93YXJkcyB0aGUgc2l6ZS5cbiAqXG4gKiBAcmV0dXJucyBOdW1iZXJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiBBcnJheVNldF9zaXplKCkge1xuICByZXR1cm4gaGFzTmF0aXZlTWFwID8gdGhpcy5fc2V0LnNpemUgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9zZXQpLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQWRkIHRoZSBnaXZlbiBzdHJpbmcgdG8gdGhpcyBzZXQuXG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBBcnJheVNldF9hZGQoYVN0ciwgYUFsbG93RHVwbGljYXRlcykge1xuICB2YXIgc1N0ciA9IGhhc05hdGl2ZU1hcCA/IGFTdHIgOiB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICB2YXIgaXNEdXBsaWNhdGUgPSBoYXNOYXRpdmVNYXAgPyB0aGlzLmhhcyhhU3RyKSA6IGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cik7XG4gIHZhciBpZHggPSB0aGlzLl9hcnJheS5sZW5ndGg7XG4gIGlmICghaXNEdXBsaWNhdGUgfHwgYUFsbG93RHVwbGljYXRlcykge1xuICAgIHRoaXMuX2FycmF5LnB1c2goYVN0cik7XG4gIH1cbiAgaWYgKCFpc0R1cGxpY2F0ZSkge1xuICAgIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICAgIHRoaXMuX3NldC5zZXQoYVN0ciwgaWR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0W3NTdHJdID0gaWR4O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBJcyB0aGUgZ2l2ZW4gc3RyaW5nIGEgbWVtYmVyIG9mIHRoaXMgc2V0P1xuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gQXJyYXlTZXRfaGFzKGFTdHIpIHtcbiAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgIHJldHVybiB0aGlzLl9zZXQuaGFzKGFTdHIpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgICByZXR1cm4gaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXaGF0IGlzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gc3RyaW5nIGluIHRoZSBhcnJheT9cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBBcnJheVNldF9pbmRleE9mKGFTdHIpIHtcbiAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgIHZhciBpZHggPSB0aGlzLl9zZXQuZ2V0KGFTdHIpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc1N0ciA9IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cikpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXRbc1N0cl07XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU3RyICsgJ1wiIGlzIG5vdCBpbiB0aGUgc2V0LicpO1xufTtcblxuLyoqXG4gKiBXaGF0IGlzIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleD9cbiAqXG4gKiBAcGFyYW0gTnVtYmVyIGFJZHhcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gQXJyYXlTZXRfYXQoYUlkeCkge1xuICBpZiAoYUlkeCA+PSAwICYmIGFJZHggPCB0aGlzLl9hcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXlbYUlkeF07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IGluZGV4ZWQgYnkgJyArIGFJZHgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNldCAod2hpY2ggaGFzIHRoZSBwcm9wZXIgaW5kaWNlc1xuICogaW5kaWNhdGVkIGJ5IGluZGV4T2YpLiBOb3RlIHRoYXQgdGhpcyBpcyBhIGNvcHkgb2YgdGhlIGludGVybmFsIGFycmF5IHVzZWRcbiAqIGZvciBzdG9yaW5nIHRoZSBtZW1iZXJzIHNvIHRoYXQgbm8gb25lIGNhbiBtZXNzIHdpdGggaW50ZXJuYWwgc3RhdGUuXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfdG9BcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKCk7XG59O1xuXG5leHBvcnRzLkFycmF5U2V0ID0gQXJyYXlTZXQ7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICpcbiAqIEJhc2VkIG9uIHRoZSBCYXNlIDY0IFZMUSBpbXBsZW1lbnRhdGlvbiBpbiBDbG9zdXJlIENvbXBpbGVyOlxuICogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jbG9zdXJlLWNvbXBpbGVyL3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL2NvbS9nb29nbGUvZGVidWdnaW5nL3NvdXJjZW1hcC9CYXNlNjRWTFEuamF2YVxuICpcbiAqIENvcHlyaWdodCAyMDExIFRoZSBDbG9zdXJlIENvbXBpbGVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogICAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqICAgIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZFxuICogICAgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogICAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXG4gKiAgICBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCcuL2Jhc2U2NCcpO1xuXG4vLyBBIHNpbmdsZSBiYXNlIDY0IGRpZ2l0IGNhbiBjb250YWluIDYgYml0cyBvZiBkYXRhLiBGb3IgdGhlIGJhc2UgNjQgdmFyaWFibGVcbi8vIGxlbmd0aCBxdWFudGl0aWVzIHdlIHVzZSBpbiB0aGUgc291cmNlIG1hcCBzcGVjLCB0aGUgZmlyc3QgYml0IGlzIHRoZSBzaWduLFxuLy8gdGhlIG5leHQgZm91ciBiaXRzIGFyZSB0aGUgYWN0dWFsIHZhbHVlLCBhbmQgdGhlIDZ0aCBiaXQgaXMgdGhlXG4vLyBjb250aW51YXRpb24gYml0LiBUaGUgY29udGludWF0aW9uIGJpdCB0ZWxscyB1cyB3aGV0aGVyIHRoZXJlIGFyZSBtb3JlXG4vLyBkaWdpdHMgaW4gdGhpcyB2YWx1ZSBmb2xsb3dpbmcgdGhpcyBkaWdpdC5cbi8vXG4vLyAgIENvbnRpbnVhdGlvblxuLy8gICB8ICAgIFNpZ25cbi8vICAgfCAgICB8XG4vLyAgIFYgICAgVlxuLy8gICAxMDEwMTFcblxudmFyIFZMUV9CQVNFX1NISUZUID0gNTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQkFTRSA9IDEgPDwgVkxRX0JBU0VfU0hJRlQ7XG5cbi8vIGJpbmFyeTogMDExMTExXG52YXIgVkxRX0JBU0VfTUFTSyA9IFZMUV9CQVNFIC0gMTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQ09OVElOVUFUSU9OX0JJVCA9IFZMUV9CQVNFO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gYSB0d28tY29tcGxlbWVudCB2YWx1ZSB0byBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDEgYmVjb21lcyAyICgxMCBiaW5hcnkpLCAtMSBiZWNvbWVzIDMgKDExIGJpbmFyeSlcbiAqICAgMiBiZWNvbWVzIDQgKDEwMCBiaW5hcnkpLCAtMiBiZWNvbWVzIDUgKDEwMSBiaW5hcnkpXG4gKi9cbmZ1bmN0aW9uIHRvVkxRU2lnbmVkKGFWYWx1ZSkge1xuICByZXR1cm4gYVZhbHVlIDwgMFxuICAgID8gKCgtYVZhbHVlKSA8PCAxKSArIDFcbiAgICA6IChhVmFsdWUgPDwgMSkgKyAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRvIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgZnJvbSBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDIgKDEwIGJpbmFyeSkgYmVjb21lcyAxLCAzICgxMSBiaW5hcnkpIGJlY29tZXMgLTFcbiAqICAgNCAoMTAwIGJpbmFyeSkgYmVjb21lcyAyLCA1ICgxMDEgYmluYXJ5KSBiZWNvbWVzIC0yXG4gKi9cbmZ1bmN0aW9uIGZyb21WTFFTaWduZWQoYVZhbHVlKSB7XG4gIHZhciBpc05lZ2F0aXZlID0gKGFWYWx1ZSAmIDEpID09PSAxO1xuICB2YXIgc2hpZnRlZCA9IGFWYWx1ZSA+PiAxO1xuICByZXR1cm4gaXNOZWdhdGl2ZVxuICAgID8gLXNoaWZ0ZWRcbiAgICA6IHNoaWZ0ZWQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmFzZSA2NCBWTFEgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiBiYXNlNjRWTFFfZW5jb2RlKGFWYWx1ZSkge1xuICB2YXIgZW5jb2RlZCA9IFwiXCI7XG4gIHZhciBkaWdpdDtcblxuICB2YXIgdmxxID0gdG9WTFFTaWduZWQoYVZhbHVlKTtcblxuICBkbyB7XG4gICAgZGlnaXQgPSB2bHEgJiBWTFFfQkFTRV9NQVNLO1xuICAgIHZscSA+Pj49IFZMUV9CQVNFX1NISUZUO1xuICAgIGlmICh2bHEgPiAwKSB7XG4gICAgICAvLyBUaGVyZSBhcmUgc3RpbGwgbW9yZSBkaWdpdHMgaW4gdGhpcyB2YWx1ZSwgc28gd2UgbXVzdCBtYWtlIHN1cmUgdGhlXG4gICAgICAvLyBjb250aW51YXRpb24gYml0IGlzIG1hcmtlZC5cbiAgICAgIGRpZ2l0IHw9IFZMUV9DT05USU5VQVRJT05fQklUO1xuICAgIH1cbiAgICBlbmNvZGVkICs9IGJhc2U2NC5lbmNvZGUoZGlnaXQpO1xuICB9IHdoaWxlICh2bHEgPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn07XG5cbi8qKlxuICogRGVjb2RlcyB0aGUgbmV4dCBiYXNlIDY0IFZMUSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgYW5kIHJldHVybnMgdGhlXG4gKiB2YWx1ZSBhbmQgdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB2aWEgdGhlIG91dCBwYXJhbWV0ZXIuXG4gKi9cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2RlY29kZShhU3RyLCBhSW5kZXgsIGFPdXRQYXJhbSkge1xuICB2YXIgc3RyTGVuID0gYVN0ci5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSAwO1xuICB2YXIgc2hpZnQgPSAwO1xuICB2YXIgY29udGludWF0aW9uLCBkaWdpdDtcblxuICBkbyB7XG4gICAgaWYgKGFJbmRleCA+PSBzdHJMZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG1vcmUgZGlnaXRzIGluIGJhc2UgNjQgVkxRIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICBkaWdpdCA9IGJhc2U2NC5kZWNvZGUoYVN0ci5jaGFyQ29kZUF0KGFJbmRleCsrKSk7XG4gICAgaWYgKGRpZ2l0ID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgZGlnaXQ6IFwiICsgYVN0ci5jaGFyQXQoYUluZGV4IC0gMSkpO1xuICAgIH1cblxuICAgIGNvbnRpbnVhdGlvbiA9ICEhKGRpZ2l0ICYgVkxRX0NPTlRJTlVBVElPTl9CSVQpO1xuICAgIGRpZ2l0ICY9IFZMUV9CQVNFX01BU0s7XG4gICAgcmVzdWx0ID0gcmVzdWx0ICsgKGRpZ2l0IDw8IHNoaWZ0KTtcbiAgICBzaGlmdCArPSBWTFFfQkFTRV9TSElGVDtcbiAgfSB3aGlsZSAoY29udGludWF0aW9uKTtcblxuICBhT3V0UGFyYW0udmFsdWUgPSBmcm9tVkxRU2lnbmVkKHJlc3VsdCk7XG4gIGFPdXRQYXJhbS5yZXN0ID0gYUluZGV4O1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGludFRvQ2hhck1hcCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XG5cbi8qKlxuICogRW5jb2RlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDAgdG8gNjMgdG8gYSBzaW5nbGUgYmFzZSA2NCBkaWdpdC5cbiAqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIGlmICgwIDw9IG51bWJlciAmJiBudW1iZXIgPCBpbnRUb0NoYXJNYXAubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGludFRvQ2hhck1hcFtudW1iZXJdO1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNdXN0IGJlIGJldHdlZW4gMCBhbmQgNjM6IFwiICsgbnVtYmVyKTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGEgc2luZ2xlIGJhc2UgNjQgY2hhcmFjdGVyIGNvZGUgZGlnaXQgdG8gYW4gaW50ZWdlci4gUmV0dXJucyAtMSBvblxuICogZmFpbHVyZS5cbiAqL1xuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgdmFyIGJpZ0EgPSA2NTsgICAgIC8vICdBJ1xuICB2YXIgYmlnWiA9IDkwOyAgICAgLy8gJ1onXG5cbiAgdmFyIGxpdHRsZUEgPSA5NzsgIC8vICdhJ1xuICB2YXIgbGl0dGxlWiA9IDEyMjsgLy8gJ3onXG5cbiAgdmFyIHplcm8gPSA0ODsgICAgIC8vICcwJ1xuICB2YXIgbmluZSA9IDU3OyAgICAgLy8gJzknXG5cbiAgdmFyIHBsdXMgPSA0MzsgICAgIC8vICcrJ1xuICB2YXIgc2xhc2ggPSA0NzsgICAgLy8gJy8nXG5cbiAgdmFyIGxpdHRsZU9mZnNldCA9IDI2O1xuICB2YXIgbnVtYmVyT2Zmc2V0ID0gNTI7XG5cbiAgLy8gMCAtIDI1OiBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlxuICBpZiAoYmlnQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBiaWdaKSB7XG4gICAgcmV0dXJuIChjaGFyQ29kZSAtIGJpZ0EpO1xuICB9XG5cbiAgLy8gMjYgLSA1MTogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcbiAgaWYgKGxpdHRsZUEgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGl0dGxlWikge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSBsaXR0bGVBICsgbGl0dGxlT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDUyIC0gNjE6IDAxMjM0NTY3ODlcbiAgaWYgKHplcm8gPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbmluZSkge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSB6ZXJvICsgbnVtYmVyT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDYyOiArXG4gIGlmIChjaGFyQ29kZSA9PSBwbHVzKSB7XG4gICAgcmV0dXJuIDYyO1xuICB9XG5cbiAgLy8gNjM6IC9cbiAgaWYgKGNoYXJDb2RlID09IHNsYXNoKSB7XG4gICAgcmV0dXJuIDYzO1xuICB9XG5cbiAgLy8gSW52YWxpZCBiYXNlNjQgZGlnaXQuXG4gIHJldHVybiAtMTtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbmV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogUmVjdXJzaXZlIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2guXG4gKlxuICogQHBhcmFtIGFMb3cgSW5kaWNlcyBoZXJlIGFuZCBsb3dlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuICogQHBhcmFtIGFIaWdoIEluZGljZXMgaGVyZSBhbmQgaGlnaGVyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG4gKiBAcGFyYW0gYU5lZWRsZSBUaGUgZWxlbWVudCBiZWluZyBzZWFyY2hlZCBmb3IuXG4gKiBAcGFyYW0gYUhheXN0YWNrIFRoZSBub24tZW1wdHkgYXJyYXkgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgRnVuY3Rpb24gd2hpY2ggdGFrZXMgdHdvIGVsZW1lbnRzIGFuZCByZXR1cm5zIC0xLCAwLCBvciAxLlxuICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICovXG5mdW5jdGlvbiByZWN1cnNpdmVTZWFyY2goYUxvdywgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlcyB3aGVuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XG4gIC8vXG4gIC8vICAgMS4gV2UgZmluZCB0aGUgZXhhY3QgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gIC8vXG4gIC8vICAgMi4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBidXQgd2UgY2FuIHJldHVybiB0aGUgaW5kZXggb2ZcbiAgLy8gICAgICB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQuXG4gIC8vXG4gIC8vICAgMy4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBhbmQgdGhlcmUgaXMgbm8gbmV4dC1jbG9zZXN0XG4gIC8vICAgICAgZWxlbWVudCB0aGFuIHRoZSBvbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IsIHNvIHdlIHJldHVybiAtMS5cbiAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGFIaWdoIC0gYUxvdykgLyAyKSArIGFMb3c7XG4gIHZhciBjbXAgPSBhQ29tcGFyZShhTmVlZGxlLCBhSGF5c3RhY2tbbWlkXSwgdHJ1ZSk7XG4gIGlmIChjbXAgPT09IDApIHtcbiAgICAvLyBGb3VuZCB0aGUgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gICAgcmV0dXJuIG1pZDtcbiAgfVxuICBlbHNlIGlmIChjbXAgPiAwKSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBncmVhdGVyIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKGFIaWdoIC0gbWlkID4gMSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIHVwcGVyIGhhbGYuXG4gICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG1pZCwgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZXhhY3QgbmVlZGxlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCBpbiB0aGlzIGhheXN0YWNrLiBEZXRlcm1pbmUgaWZcbiAgICAvLyB3ZSBhcmUgaW4gdGVybWluYXRpb24gY2FzZSAoMykgb3IgKDIpIGFuZCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHRoaW5nLlxuICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG4gICAgICByZXR1cm4gYUhpZ2ggPCBhSGF5c3RhY2subGVuZ3RoID8gYUhpZ2ggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBsZXNzIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKG1pZCAtIGFMb3cgPiAxKSB7XG4gICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgbG93ZXIgaGFsZi5cbiAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goYUxvdywgbWlkLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cbiAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFMb3cgPCAwID8gLTEgOiBhTG93O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYmluYXJ5IHNlYXJjaCB3aGljaCB3aWxsIGFsd2F5cyB0cnkgYW5kIHJldHVyblxuICogdGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IGVsZW1lbnQgaWYgdGhlcmUgaXMgbm8gZXhhY3QgaGl0LiBUaGlzIGlzIGJlY2F1c2VcbiAqIG1hcHBpbmdzIGJldHdlZW4gb3JpZ2luYWwgYW5kIGdlbmVyYXRlZCBsaW5lL2NvbCBwYWlycyBhcmUgc2luZ2xlIHBvaW50cyxcbiAqIGFuZCB0aGVyZSBpcyBhbiBpbXBsaWNpdCByZWdpb24gYmV0d2VlbiBlYWNoIG9mIHRoZW0sIHNvIGEgbWlzcyBqdXN0IG1lYW5zXG4gKiB0aGF0IHlvdSBhcmVuJ3Qgb24gdGhlIHZlcnkgc3RhcnQgb2YgYSByZWdpb24uXG4gKlxuICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgeW91IGFyZSBsb29raW5nIGZvci5cbiAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIGFycmF5IHRoYXQgaXMgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgQSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgbmVlZGxlIGFuZCBhbiBlbGVtZW50IGluIHRoZVxuICogICAgIGFycmF5IGFuZCByZXR1cm5zIC0xLCAwLCBvciAxIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZWVkbGUgaXMgbGVzc1xuICogICAgIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIGVsZW1lbnQsIHJlc3BlY3RpdmVseS5cbiAqIEBwYXJhbSBhQmlhcyBFaXRoZXIgJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqICAgICBEZWZhdWx0cyB0byAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqL1xuZXhwb3J0cy5zZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpIHtcbiAgaWYgKGFIYXlzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICB2YXIgaW5kZXggPSByZWN1cnNpdmVTZWFyY2goLTEsIGFIYXlzdGFjay5sZW5ndGgsIGFOZWVkbGUsIGFIYXlzdGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb21wYXJlLCBhQmlhcyB8fCBleHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EKTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIFdlIGhhdmUgZm91bmQgZWl0aGVyIHRoZSBleGFjdCBlbGVtZW50LCBvciB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQgdGhhblxuICAvLyB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSBzdWNoXG4gIC8vIGVsZW1lbnQuIE1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIHRoZSBzbWFsbGVzdCBvZiB0aGVzZS5cbiAgd2hpbGUgKGluZGV4IC0gMSA+PSAwKSB7XG4gICAgaWYgKGFDb21wYXJlKGFIYXlzdGFja1tpbmRleF0sIGFIYXlzdGFja1tpbmRleCAtIDFdLCB0cnVlKSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC0taW5kZXg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDE0IE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG1hcHBpbmdCIGlzIGFmdGVyIG1hcHBpbmdBIHdpdGggcmVzcGVjdCB0byBnZW5lcmF0ZWRcbiAqIHBvc2l0aW9uLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZWRQb3NpdGlvbkFmdGVyKG1hcHBpbmdBLCBtYXBwaW5nQikge1xuICAvLyBPcHRpbWl6ZWQgZm9yIG1vc3QgY29tbW9uIGNhc2VcbiAgdmFyIGxpbmVBID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZTtcbiAgdmFyIGxpbmVCID0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgdmFyIGNvbHVtbkEgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW47XG4gIHZhciBjb2x1bW5CID0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICByZXR1cm4gbGluZUIgPiBsaW5lQSB8fCBsaW5lQiA9PSBsaW5lQSAmJiBjb2x1bW5CID49IGNvbHVtbkEgfHxcbiAgICAgICAgIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCKSA8PSAwO1xufVxuXG4vKipcbiAqIEEgZGF0YSBzdHJ1Y3R1cmUgdG8gcHJvdmlkZSBhIHNvcnRlZCB2aWV3IG9mIGFjY3VtdWxhdGVkIG1hcHBpbmdzIGluIGFcbiAqIHBlcmZvcm1hbmNlIGNvbnNjaW91cyBtYW5uZXIuIEl0IHRyYWRlcyBhIG5lZ2xpYmFibGUgb3ZlcmhlYWQgaW4gZ2VuZXJhbFxuICogY2FzZSBmb3IgYSBsYXJnZSBzcGVlZHVwIGluIGNhc2Ugb2YgbWFwcGluZ3MgYmVpbmcgYWRkZWQgaW4gb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIE1hcHBpbmdMaXN0KCkge1xuICB0aGlzLl9hcnJheSA9IFtdO1xuICB0aGlzLl9zb3J0ZWQgPSB0cnVlO1xuICAvLyBTZXJ2ZXMgYXMgaW5maW11bVxuICB0aGlzLl9sYXN0ID0ge2dlbmVyYXRlZExpbmU6IC0xLCBnZW5lcmF0ZWRDb2x1bW46IDB9O1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgdGhyb3VnaCBpbnRlcm5hbCBpdGVtcy4gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHNhbWUgYXJndW1lbnRzIHRoYXRcbiAqIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgdGFrZXMuXG4gKlxuICogTk9URTogVGhlIG9yZGVyIG9mIHRoZSBtYXBwaW5ncyBpcyBOT1QgZ3VhcmFudGVlZC5cbiAqL1xuTWFwcGluZ0xpc3QucHJvdG90eXBlLnVuc29ydGVkRm9yRWFjaCA9XG4gIGZ1bmN0aW9uIE1hcHBpbmdMaXN0X2ZvckVhY2goYUNhbGxiYWNrLCBhVGhpc0FyZykge1xuICAgIHRoaXMuX2FycmF5LmZvckVhY2goYUNhbGxiYWNrLCBhVGhpc0FyZyk7XG4gIH07XG5cbi8qKlxuICogQWRkIHRoZSBnaXZlbiBzb3VyY2UgbWFwcGluZy5cbiAqXG4gKiBAcGFyYW0gT2JqZWN0IGFNYXBwaW5nXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBNYXBwaW5nTGlzdF9hZGQoYU1hcHBpbmcpIHtcbiAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uQWZ0ZXIodGhpcy5fbGFzdCwgYU1hcHBpbmcpKSB7XG4gICAgdGhpcy5fbGFzdCA9IGFNYXBwaW5nO1xuICAgIHRoaXMuX2FycmF5LnB1c2goYU1hcHBpbmcpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3NvcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2FycmF5LnB1c2goYU1hcHBpbmcpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZsYXQsIHNvcnRlZCBhcnJheSBvZiBtYXBwaW5ncy4gVGhlIG1hcHBpbmdzIGFyZSBzb3J0ZWQgYnlcbiAqIGdlbmVyYXRlZCBwb3NpdGlvbi5cbiAqXG4gKiBXQVJOSU5HOiBUaGlzIG1ldGhvZCByZXR1cm5zIGludGVybmFsIGRhdGEgd2l0aG91dCBjb3B5aW5nLCBmb3JcbiAqIHBlcmZvcm1hbmNlLiBUaGUgcmV0dXJuIHZhbHVlIG11c3QgTk9UIGJlIG11dGF0ZWQsIGFuZCBzaG91bGQgYmUgdHJlYXRlZCBhc1xuICogYW4gaW1tdXRhYmxlIGJvcnJvdy4gSWYgeW91IHdhbnQgdG8gdGFrZSBvd25lcnNoaXAsIHlvdSBtdXN0IG1ha2UgeW91ciBvd25cbiAqIGNvcHkuXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gTWFwcGluZ0xpc3RfdG9BcnJheSgpIHtcbiAgaWYgKCF0aGlzLl9zb3J0ZWQpIHtcbiAgICB0aGlzLl9hcnJheS5zb3J0KHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQpO1xuICAgIHRoaXMuX3NvcnRlZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2FycmF5O1xufTtcblxuZXhwb3J0cy5NYXBwaW5nTGlzdCA9IE1hcHBpbmdMaXN0O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG4vLyBJdCB0dXJucyBvdXQgdGhhdCBzb21lIChtb3N0PykgSmF2YVNjcmlwdCBlbmdpbmVzIGRvbid0IHNlbGYtaG9zdFxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YC4gVGhpcyBtYWtlcyBzZW5zZSBiZWNhdXNlIEMrKyB3aWxsIGxpa2VseSByZW1haW5cbi8vIGZhc3RlciB0aGFuIEpTIHdoZW4gZG9pbmcgcmF3IENQVS1pbnRlbnNpdmUgc29ydGluZy4gSG93ZXZlciwgd2hlbiB1c2luZyBhXG4vLyBjdXN0b20gY29tcGFyYXRvciBmdW5jdGlvbiwgY2FsbGluZyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHRoZSBWTSdzIEMrKyBhbmRcbi8vIEpJVCdkIEpTIGlzIHJhdGhlciBzbG93ICphbmQqIGxvc2VzIEpJVCB0eXBlIGluZm9ybWF0aW9uLCByZXN1bHRpbmcgaW5cbi8vIHdvcnNlIGdlbmVyYXRlZCBjb2RlIGZvciB0aGUgY29tcGFyYXRvciBmdW5jdGlvbiB0aGFuIHdvdWxkIGJlIG9wdGltYWwuIEluXG4vLyBmYWN0LCB3aGVuIHNvcnRpbmcgd2l0aCBhIGNvbXBhcmF0b3IsIHRoZXNlIGNvc3RzIG91dHdlaWdoIHRoZSBiZW5lZml0cyBvZlxuLy8gc29ydGluZyBpbiBDKysuIEJ5IHVzaW5nIG91ciBvd24gSlMtaW1wbGVtZW50ZWQgUXVpY2sgU29ydCAoYmVsb3cpLCB3ZSBnZXRcbi8vIGEgfjM1MDBtcyBtZWFuIHNwZWVkLXVwIGluIGBiZW5jaC9iZW5jaC5odG1sYC5cblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50cyBpbmRleGVkIGJ5IGB4YCBhbmQgYHlgIGluIHRoZSBhcnJheSBgYXJ5YC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBUaGUgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogICAgICAgIFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiAgICAgICAgVGhlIGluZGV4IG9mIHRoZSBzZWNvbmQgaXRlbS5cbiAqL1xuZnVuY3Rpb24gc3dhcChhcnksIHgsIHkpIHtcbiAgdmFyIHRlbXAgPSBhcnlbeF07XG4gIGFyeVt4XSA9IGFyeVt5XTtcbiAgYXJ5W3ldID0gdGVtcDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZSBgbG93IC4uIGhpZ2hgIGluY2x1c2l2ZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbG93XG4gKiAgICAgICAgVGhlIGxvd2VyIGJvdW5kIG9uIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBoaWdoXG4gKiAgICAgICAgVGhlIHVwcGVyIGJvdW5kIG9uIHRoZSByYW5nZS5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50SW5SYW5nZShsb3csIGhpZ2gpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQobG93ICsgKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykpKTtcbn1cblxuLyoqXG4gKiBUaGUgUXVpY2sgU29ydCBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgQW4gYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3JcbiAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG4gKiBAcGFyYW0ge051bWJlcn0gcFxuICogICAgICAgIFN0YXJ0IGluZGV4IG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IHJcbiAqICAgICAgICBFbmQgaW5kZXggb2YgdGhlIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcikge1xuICAvLyBJZiBvdXIgbG93ZXIgYm91bmQgaXMgbGVzcyB0aGFuIG91ciB1cHBlciBib3VuZCwgd2UgKDEpIHBhcnRpdGlvbiB0aGVcbiAgLy8gYXJyYXkgaW50byB0d28gcGllY2VzIGFuZCAoMikgcmVjdXJzZSBvbiBlYWNoIGhhbGYuIElmIGl0IGlzIG5vdCwgdGhpcyBpc1xuICAvLyB0aGUgZW1wdHkgYXJyYXkgYW5kIG91ciBiYXNlIGNhc2UuXG5cbiAgaWYgKHAgPCByKSB7XG4gICAgLy8gKDEpIFBhcnRpdGlvbmluZy5cbiAgICAvL1xuICAgIC8vIFRoZSBwYXJ0aXRpb25pbmcgY2hvb3NlcyBhIHBpdm90IGJldHdlZW4gYHBgIGFuZCBgcmAgYW5kIG1vdmVzIGFsbFxuICAgIC8vIGVsZW1lbnRzIHRoYXQgYXJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QgdG8gdGhlIGJlZm9yZSBpdCwgYW5kXG4gICAgLy8gYWxsIHRoZSBlbGVtZW50cyB0aGF0IGFyZSBncmVhdGVyIHRoYW4gaXQgYWZ0ZXIgaXQuIFRoZSBlZmZlY3QgaXMgdGhhdFxuICAgIC8vIG9uY2UgcGFydGl0aW9uIGlzIGRvbmUsIHRoZSBwaXZvdCBpcyBpbiB0aGUgZXhhY3QgcGxhY2UgaXQgd2lsbCBiZSB3aGVuXG4gICAgLy8gdGhlIGFycmF5IGlzIHB1dCBpbiBzb3J0ZWQgb3JkZXIsIGFuZCBpdCB3aWxsIG5vdCBuZWVkIHRvIGJlIG1vdmVkXG4gICAgLy8gYWdhaW4uIFRoaXMgcnVucyBpbiBPKG4pIHRpbWUuXG5cbiAgICAvLyBBbHdheXMgY2hvb3NlIGEgcmFuZG9tIHBpdm90IHNvIHRoYXQgYW4gaW5wdXQgYXJyYXkgd2hpY2ggaXMgcmV2ZXJzZVxuICAgIC8vIHNvcnRlZCBkb2VzIG5vdCBjYXVzZSBPKG5eMikgcnVubmluZyB0aW1lLlxuICAgIHZhciBwaXZvdEluZGV4ID0gcmFuZG9tSW50SW5SYW5nZShwLCByKTtcbiAgICB2YXIgaSA9IHAgLSAxO1xuXG4gICAgc3dhcChhcnksIHBpdm90SW5kZXgsIHIpO1xuICAgIHZhciBwaXZvdCA9IGFyeVtyXTtcblxuICAgIC8vIEltbWVkaWF0ZWx5IGFmdGVyIGBqYCBpcyBpbmNyZW1lbnRlZCBpbiB0aGlzIGxvb3AsIHRoZSBmb2xsb3dpbmcgaG9sZFxuICAgIC8vIHRydWU6XG4gICAgLy9cbiAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W3AgLi4gaV1gIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QuXG4gICAgLy9cbiAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W2krMSAuLiBqLTFdYCBpcyBncmVhdGVyIHRoYW4gdGhlIHBpdm90LlxuICAgIGZvciAodmFyIGogPSBwOyBqIDwgcjsgaisrKSB7XG4gICAgICBpZiAoY29tcGFyYXRvcihhcnlbal0sIHBpdm90KSA8PSAwKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgc3dhcChhcnksIGksIGopO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3YXAoYXJ5LCBpICsgMSwgaik7XG4gICAgdmFyIHEgPSBpICsgMTtcblxuICAgIC8vICgyKSBSZWN1cnNlIG9uIGVhY2ggaGFsZi5cblxuICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcSAtIDEpO1xuICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcSArIDEsIHIpO1xuICB9XG59XG5cbi8qKlxuICogU29ydCB0aGUgZ2l2ZW4gYXJyYXkgaW4tcGxhY2Ugd2l0aCB0aGUgZ2l2ZW4gY29tcGFyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBBbiBhcnJheSB0byBzb3J0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyYXRvclxuICogICAgICAgIEZ1bmN0aW9uIHRvIHVzZSB0byBjb21wYXJlIHR3byBpdGVtcy5cbiAqL1xuZXhwb3J0cy5xdWlja1NvcnQgPSBmdW5jdGlvbiAoYXJ5LCBjb21wYXJhdG9yKSB7XG4gIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgMCwgYXJ5Lmxlbmd0aCAtIDEpO1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBiaW5hcnlTZWFyY2ggPSByZXF1aXJlKCcuL2JpbmFyeS1zZWFyY2gnKTtcbnZhciBBcnJheVNldCA9IHJlcXVpcmUoJy4vYXJyYXktc2V0JykuQXJyYXlTZXQ7XG52YXIgYmFzZTY0VkxRID0gcmVxdWlyZSgnLi9iYXNlNjQtdmxxJyk7XG52YXIgcXVpY2tTb3J0ID0gcmVxdWlyZSgnLi9xdWljay1zb3J0JykucXVpY2tTb3J0O1xuXG5mdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZU1hcC5zZWN0aW9ucyAhPSBudWxsXG4gICAgPyBuZXcgSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTClcbiAgICA6IG5ldyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cblNvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAgPSBmdW5jdGlvbihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHJldHVybiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cbi8qKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vLyBgX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kIGBfX29yaWdpbmFsTWFwcGluZ3NgIGFyZSBhcnJheXMgdGhhdCBob2xkIHRoZVxuLy8gcGFyc2VkIG1hcHBpbmcgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlIG1hcCdzIFwibWFwcGluZ3NcIiBhdHRyaWJ1dGUuIFRoZXlcbi8vIGFyZSBsYXppbHkgaW5zdGFudGlhdGVkLCBhY2Nlc3NlZCB2aWEgdGhlIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuLy8gYF9vcmlnaW5hbE1hcHBpbmdzYCBnZXR0ZXJzIHJlc3BlY3RpdmVseSwgYW5kIHdlIG9ubHkgcGFyc2UgdGhlIG1hcHBpbmdzXG4vLyBhbmQgY3JlYXRlIHRoZXNlIGFycmF5cyBvbmNlIHF1ZXJpZWQgZm9yIGEgc291cmNlIGxvY2F0aW9uLiBXZSBqdW1wIHRocm91Z2hcbi8vIHRoZXNlIGhvb3BzIGJlY2F1c2UgdGhlcmUgY2FuIGJlIG1hbnkgdGhvdXNhbmRzIG9mIG1hcHBpbmdzLCBhbmQgcGFyc2luZ1xuLy8gdGhlbSBpcyBleHBlbnNpdmUsIHNvIHdlIG9ubHkgd2FudCB0byBkbyBpdCBpZiB3ZSBtdXN0LlxuLy9cbi8vIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheXMgaXMgb2YgdGhlIGZvcm06XG4vL1xuLy8gICAgIHtcbi8vICAgICAgIGdlbmVyYXRlZExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBnZW5lcmF0ZWRDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIHNvdXJjZTogVGhlIHBhdGggdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlIHRoYXQgZ2VuZXJhdGVkIHRoaXNcbi8vICAgICAgICAgICAgICAgY2h1bmsgb2YgY29kZSxcbi8vICAgICAgIG9yaWdpbmFsTGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuLy8gICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kcyB0byB0aGlzIGNodW5rIG9mIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgb3JpZ2luYWxDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuLy8gICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRzIHRvIHRoaXMgY2h1bmsgb2YgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgb3JpZ2luYWwgc3ltYm9sIHdoaWNoIGdlbmVyYXRlZCB0aGlzIGNodW5rIG9mXG4vLyAgICAgICAgICAgICBjb2RlLlxuLy8gICAgIH1cbi8vXG4vLyBBbGwgcHJvcGVydGllcyBleGNlcHQgZm9yIGBnZW5lcmF0ZWRMaW5lYCBhbmQgYGdlbmVyYXRlZENvbHVtbmAgY2FuIGJlXG4vLyBgbnVsbGAuXG4vL1xuLy8gYF9nZW5lcmF0ZWRNYXBwaW5nc2AgaXMgb3JkZXJlZCBieSB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucy5cbi8vXG4vLyBgX29yaWdpbmFsTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIG9yaWdpbmFsIHBvc2l0aW9ucy5cblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19nZW5lcmF0ZWRNYXBwaW5ncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncykge1xuICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzO1xuICB9XG59KTtcblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fb3JpZ2luYWxNYXBwaW5ncyA9IG51bGw7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnX29yaWdpbmFsTWFwcGluZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncykge1xuICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX29yaWdpbmFsTWFwcGluZ3M7XG4gIH1cbn0pO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yKGFTdHIsIGluZGV4KSB7XG4gICAgdmFyIGMgPSBhU3RyLmNoYXJBdChpbmRleCk7XG4gICAgcmV0dXJuIGMgPT09IFwiO1wiIHx8IGMgPT09IFwiLFwiO1xuICB9O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcbiAqIHF1ZXJ5ICh0aGUgb3JkZXJlZCBhcnJheXMgaW4gdGhlIGB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN1YmNsYXNzZXMgbXVzdCBpbXBsZW1lbnQgX3BhcnNlTWFwcGluZ3NcIik7XG4gIH07XG5cblNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUiA9IDE7XG5Tb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUiA9IDI7XG5cblNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EID0gMTtcblNvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EID0gMjtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZWFjaCBtYXBwaW5nIGJldHdlZW4gYW4gb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uIGFuZCBhXG4gKiBnZW5lcmF0ZWQgbGluZS9jb2x1bW4gaW4gdGhpcyBzb3VyY2UgbWFwLlxuICpcbiAqIEBwYXJhbSBGdW5jdGlvbiBhQ2FsbGJhY2tcbiAqICAgICAgICBUaGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBlYWNoIG1hcHBpbmcuXG4gKiBAcGFyYW0gT2JqZWN0IGFDb250ZXh0XG4gKiAgICAgICAgT3B0aW9uYWwuIElmIHNwZWNpZmllZCwgdGhpcyBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgYHRoaXNgIGV2ZXJ5XG4gKiAgICAgICAgdGltZSB0aGF0IGBhQ2FsbGJhY2tgIGlzIGNhbGxlZC5cbiAqIEBwYXJhbSBhT3JkZXJcbiAqICAgICAgICBFaXRoZXIgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAgb3JcbiAqICAgICAgICBgU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVJgLiBTcGVjaWZpZXMgd2hldGhlciB5b3Ugd2FudCB0b1xuICogICAgICAgIGl0ZXJhdGUgb3ZlciB0aGUgbWFwcGluZ3Mgc29ydGVkIGJ5IHRoZSBnZW5lcmF0ZWQgZmlsZSdzIGxpbmUvY29sdW1uXG4gKiAgICAgICAgb3JkZXIgb3IgdGhlIG9yaWdpbmFsJ3Mgc291cmNlL2xpbmUvY29sdW1uIG9yZGVyLCByZXNwZWN0aXZlbHkuIERlZmF1bHRzIHRvXG4gKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5lYWNoTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2VhY2hNYXBwaW5nKGFDYWxsYmFjaywgYUNvbnRleHQsIGFPcmRlcikge1xuICAgIHZhciBjb250ZXh0ID0gYUNvbnRleHQgfHwgbnVsbDtcbiAgICB2YXIgb3JkZXIgPSBhT3JkZXIgfHwgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSO1xuXG4gICAgdmFyIG1hcHBpbmdzO1xuICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICBjYXNlIFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjpcbiAgICAgIG1hcHBpbmdzID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3M7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSOlxuICAgICAgbWFwcGluZ3MgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3JkZXIgb2YgaXRlcmF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlUm9vdCA9IHRoaXMuc291cmNlUm9vdDtcbiAgICBtYXBwaW5ncy5tYXAoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBtYXBwaW5nLnNvdXJjZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzb3VyY2UsIHRoaXMuX3NvdXJjZU1hcFVSTCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgZ2VuZXJhdGVkTGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lLFxuICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uLFxuICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICBvcmlnaW5hbENvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgbmFtZTogbWFwcGluZy5uYW1lID09PSBudWxsID8gbnVsbCA6IHRoaXMuX25hbWVzLmF0KG1hcHBpbmcubmFtZSlcbiAgICAgIH07XG4gICAgfSwgdGhpcykuZm9yRWFjaChhQ2FsbGJhY2ssIGNvbnRleHQpO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgYWxsIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG4gKiBsaW5lLCBhbmQgY29sdW1uIHByb3ZpZGVkLiBJZiBubyBjb2x1bW4gaXMgcHJvdmlkZWQsIHJldHVybnMgYWxsIG1hcHBpbmdzXG4gKiBjb3JyZXNwb25kaW5nIHRvIGEgZWl0aGVyIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yIG9yIHRoZSBuZXh0XG4gKiBjbG9zZXN0IGxpbmUgdGhhdCBoYXMgYW55IG1hcHBpbmdzLiBPdGhlcndpc2UsIHJldHVybnMgYWxsIG1hcHBpbmdzXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBsaW5lIGFuZCBlaXRoZXIgdGhlIGNvbHVtbiB3ZSBhcmUgc2VhcmNoaW5nIGZvclxuICogb3IgdGhlIG5leHQgY2xvc2VzdCBjb2x1bW4gdGhhdCBoYXMgYW55IG9mZnNldHMuXG4gKlxuICogVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBPcHRpb25hbC4gdGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIGFycmF5IG9mIG9iamVjdHMgaXMgcmV0dXJuZWQsIGVhY2ggd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmFsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2FsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvcihhQXJncykge1xuICAgIHZhciBsaW5lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyk7XG5cbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIGV4YWN0IG1hdGNoLCBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZE1hcHBpbmdcbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY2xvc2VzdCBtYXBwaW5nIGxlc3MgdGhhbiB0aGUgbmVlZGxlLiBCeVxuICAgIC8vIHNldHRpbmcgbmVlZGxlLm9yaWdpbmFsQ29sdW1uIHRvIDAsIHdlIHRodXMgZmluZCB0aGUgbGFzdCBtYXBwaW5nIGZvclxuICAgIC8vIHRoZSBnaXZlbiBsaW5lLCBwcm92aWRlZCBzdWNoIGEgbWFwcGluZyBleGlzdHMuXG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIHNvdXJjZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKSxcbiAgICAgIG9yaWdpbmFsTGluZTogbGluZSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicsIDApXG4gICAgfTtcblxuICAgIG5lZWRsZS5zb3VyY2UgPSB0aGlzLl9maW5kU291cmNlSW5kZXgobmVlZGxlLnNvdXJjZSk7XG4gICAgaWYgKG5lZWRsZS5zb3VyY2UgPCAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG1hcHBpbmdzID0gW107XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhuZWVkbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsTGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luYWxDb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChhQXJncy5jb2x1bW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmU7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cbiAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSBmb3VuZC4gU2luY2VcbiAgICAgICAgLy8gbWFwcGluZ3MgYXJlIHNvcnRlZCwgdGhpcyBpcyBndWFyYW50ZWVkIHRvIGZpbmQgYWxsIG1hcHBpbmdzIGZvclxuICAgICAgICAvLyB0aGUgbGluZSB3ZSBmb3VuZC5cbiAgICAgICAgd2hpbGUgKG1hcHBpbmcgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IG9yaWdpbmFsTGluZSkge1xuICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cbiAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSB3ZXJlIHNlYXJjaGluZyBmb3IuXG4gICAgICAgIC8vIFNpbmNlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3JcbiAgICAgICAgLy8gdGhlIGxpbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IuXG4gICAgICAgIHdoaWxlIChtYXBwaW5nICYmXG4gICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gbGluZSAmJlxuICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9PSBvcmlnaW5hbENvbHVtbikge1xuICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFwcGluZ3M7XG4gIH07XG5cbmV4cG9ydHMuU291cmNlTWFwQ29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBBIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoIHdlIGNhblxuICogcXVlcnkgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBvcmlnaW5hbCBmaWxlIHBvc2l0aW9ucyBieSBnaXZpbmcgaXQgYSBmaWxlXG4gKiBwb3NpdGlvbiBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS5cbiAqXG4gKiBUaGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yXG4gKiBhbHJlYWR5IHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNvdXJjZSBtYXBzIGhhdmUgdGhlXG4gKiBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqXG4gKiAgIC0gdmVyc2lvbjogV2hpY2ggdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcCBzcGVjIHRoaXMgbWFwIGlzIGZvbGxvd2luZy5cbiAqICAgLSBzb3VyY2VzOiBBbiBhcnJheSBvZiBVUkxzIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG4gKiAgIC0gbmFtZXM6IEFuIGFycmF5IG9mIGlkZW50aWZpZXJzIHdoaWNoIGNhbiBiZSByZWZlcnJlbmNlZCBieSBpbmRpdmlkdWFsIG1hcHBpbmdzLlxuICogICAtIHNvdXJjZVJvb3Q6IE9wdGlvbmFsLiBUaGUgVVJMIHJvb3QgZnJvbSB3aGljaCBhbGwgc291cmNlcyBhcmUgcmVsYXRpdmUuXG4gKiAgIC0gc291cmNlc0NvbnRlbnQ6IE9wdGlvbmFsLiBBbiBhcnJheSBvZiBjb250ZW50cyBvZiB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGVzLlxuICogICAtIG1hcHBpbmdzOiBBIHN0cmluZyBvZiBiYXNlNjQgVkxRcyB3aGljaCBjb250YWluIHRoZSBhY3R1YWwgbWFwcGluZ3MuXG4gKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICpcbiAqIEhlcmUgaXMgYW4gZXhhbXBsZSBzb3VyY2UgbWFwLCB0YWtlbiBmcm9tIHRoZSBzb3VyY2UgbWFwIHNwZWNbMF06XG4gKlxuICogICAgIHtcbiAqICAgICAgIHZlcnNpb24gOiAzLFxuICogICAgICAgZmlsZTogXCJvdXQuanNcIixcbiAqICAgICAgIHNvdXJjZVJvb3QgOiBcIlwiLFxuICogICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuICogICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG4gKiAgICAgICBtYXBwaW5nczogXCJBQSxBQjs7QUJDREU7XCJcbiAqICAgICB9XG4gKlxuICogVGhlIHNlY29uZCBwYXJhbWV0ZXIsIGlmIGdpdmVuLCBpcyBhIHN0cmluZyB3aG9zZSB2YWx1ZSBpcyB0aGUgVVJMXG4gKiBhdCB3aGljaCB0aGUgc291cmNlIG1hcCB3YXMgZm91bmQuICBUaGlzIFVSTCBpcyB1c2VkIHRvIGNvbXB1dGUgdGhlXG4gKiBzb3VyY2VzIGFycmF5LlxuICpcbiAqIFswXTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xVTFSR0FlaFF3UnlwVVRvdkYxS1JscGlPRnplMGItXzJnYzZmQUgwS1kway9lZGl0P3BsaT0xI1xuICovXG5mdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG4gIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICBzb3VyY2VNYXAgPSB1dGlsLnBhcnNlU291cmNlTWFwSW5wdXQoYVNvdXJjZU1hcCk7XG4gIH1cblxuICB2YXIgdmVyc2lvbiA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3ZlcnNpb24nKTtcbiAgdmFyIHNvdXJjZXMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzJyk7XG4gIC8vIFNhc3MgMy4zIGxlYXZlcyBvdXQgdGhlICduYW1lcycgYXJyYXksIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgc3BlYyAod2hpY2hcbiAgLy8gcmVxdWlyZXMgdGhlIGFycmF5KSB0byBwbGF5IG5pY2UgaGVyZS5cbiAgdmFyIG5hbWVzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbmFtZXMnLCBbXSk7XG4gIHZhciBzb3VyY2VSb290ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlUm9vdCcsIG51bGwpO1xuICB2YXIgc291cmNlc0NvbnRlbnQgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzQ29udGVudCcsIG51bGwpO1xuICB2YXIgbWFwcGluZ3MgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdtYXBwaW5ncycpO1xuICB2YXIgZmlsZSA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ2ZpbGUnLCBudWxsKTtcblxuICAvLyBPbmNlIGFnYWluLCBTYXNzIGRldmlhdGVzIGZyb20gdGhlIHNwZWMgYW5kIHN1cHBsaWVzIHRoZSB2ZXJzaW9uIGFzIGFcbiAgLy8gc3RyaW5nIHJhdGhlciB0aGFuIGEgbnVtYmVyLCBzbyB3ZSB1c2UgbG9vc2UgZXF1YWxpdHkgY2hlY2tpbmcgaGVyZS5cbiAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHNvdXJjZVJvb3QpIHtcbiAgICBzb3VyY2VSb290ID0gdXRpbC5ub3JtYWxpemUoc291cmNlUm9vdCk7XG4gIH1cblxuICBzb3VyY2VzID0gc291cmNlc1xuICAgIC5tYXAoU3RyaW5nKVxuICAgIC8vIFNvbWUgc291cmNlIG1hcHMgcHJvZHVjZSByZWxhdGl2ZSBzb3VyY2UgcGF0aHMgbGlrZSBcIi4vZm9vLmpzXCIgaW5zdGVhZCBvZlxuICAgIC8vIFwiZm9vLmpzXCIuICBOb3JtYWxpemUgdGhlc2UgZmlyc3Qgc28gdGhhdCBmdXR1cmUgY29tcGFyaXNvbnMgd2lsbCBzdWNjZWVkLlxuICAgIC8vIFNlZSBidWd6aWwubGEvMTA5MDc2OC5cbiAgICAubWFwKHV0aWwubm9ybWFsaXplKVxuICAgIC8vIEFsd2F5cyBlbnN1cmUgdGhhdCBhYnNvbHV0ZSBzb3VyY2VzIGFyZSBpbnRlcm5hbGx5IHN0b3JlZCByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSBzb3VyY2Ugcm9vdCwgaWYgdGhlIHNvdXJjZSByb290IGlzIGFic29sdXRlLiBOb3QgZG9pbmcgdGhpcyB3b3VsZFxuICAgIC8vIGJlIHBhcnRpY3VsYXJseSBwcm9ibGVtYXRpYyB3aGVuIHRoZSBzb3VyY2Ugcm9vdCBpcyBhIHByZWZpeCBvZiB0aGVcbiAgICAvLyBzb3VyY2UgKHZhbGlkLCBidXQgd2h5Pz8pLiBTZWUgZ2l0aHViIGlzc3VlICMxOTkgYW5kIGJ1Z3ppbC5sYS8xMTg4OTgyLlxuICAgIC5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHNvdXJjZVJvb3QgJiYgdXRpbC5pc0Fic29sdXRlKHNvdXJjZVJvb3QpICYmIHV0aWwuaXNBYnNvbHV0ZShzb3VyY2UpXG4gICAgICAgID8gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2UpXG4gICAgICAgIDogc291cmNlO1xuICAgIH0pO1xuXG4gIC8vIFBhc3MgYHRydWVgIGJlbG93IHRvIGFsbG93IGR1cGxpY2F0ZSBuYW1lcyBhbmQgc291cmNlcy4gV2hpbGUgc291cmNlIG1hcHNcbiAgLy8gYXJlIGludGVuZGVkIHRvIGJlIGNvbXByZXNzZWQgYW5kIGRlZHVwbGljYXRlZCwgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXJcbiAgLy8gc29tZXRpbWVzIGdlbmVyYXRlcyBzb3VyY2UgbWFwcyB3aXRoIGR1cGxpY2F0ZXMgaW4gdGhlbS4gU2VlIEdpdGh1YiBpc3N1ZVxuICAvLyAjNzIgYW5kIGJ1Z3ppbC5sYS84ODk0OTIuXG4gIHRoaXMuX25hbWVzID0gQXJyYXlTZXQuZnJvbUFycmF5KG5hbWVzLm1hcChTdHJpbmcpLCB0cnVlKTtcbiAgdGhpcy5fc291cmNlcyA9IEFycmF5U2V0LmZyb21BcnJheShzb3VyY2VzLCB0cnVlKTtcblxuICB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMgPSB0aGlzLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdXRpbC5jb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICB9KTtcblxuICB0aGlzLnNvdXJjZVJvb3QgPSBzb3VyY2VSb290O1xuICB0aGlzLnNvdXJjZXNDb250ZW50ID0gc291cmNlc0NvbnRlbnQ7XG4gIHRoaXMuX21hcHBpbmdzID0gbWFwcGluZ3M7XG4gIHRoaXMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gIHRoaXMuZmlsZSA9IGZpbGU7XG59XG5cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGZpbmQgdGhlIGluZGV4IG9mIGEgc291cmNlLiAgUmV0dXJucyAtMSBpZiBub3RcbiAqIGZvdW5kLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZFNvdXJjZUluZGV4ID0gZnVuY3Rpb24oYVNvdXJjZSkge1xuICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICByZWxhdGl2ZVNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCByZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICBpZiAodGhpcy5fc291cmNlcy5oYXMocmVsYXRpdmVTb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZXMuaW5kZXhPZihyZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICAvLyBNYXliZSBhU291cmNlIGlzIGFuIGFic29sdXRlIFVSTCBhcyByZXR1cm5lZCBieSB8c291cmNlc3wuICBJblxuICAvLyB0aGlzIGNhc2Ugd2UgY2FuJ3Qgc2ltcGx5IHVuZG8gdGhlIHRyYW5zZm9ybS5cbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcy5fYWJzb2x1dGVTb3VyY2VzW2ldID09IGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBmcm9tIGEgU291cmNlTWFwR2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSBTb3VyY2VNYXBHZW5lcmF0b3IgYVNvdXJjZU1hcFxuICogICAgICAgIFRoZSBzb3VyY2UgbWFwIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbiAqIEBwYXJhbSBTdHJpbmcgYVNvdXJjZU1hcFVSTFxuICogICAgICAgIFRoZSBVUkwgYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgY2FuIGJlIGZvdW5kIChvcHRpb25hbClcbiAqIEByZXR1cm5zIEJhc2ljU291cmNlTWFwQ29uc3VtZXJcbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZnJvbVNvdXJjZU1hcChhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gICAgdmFyIHNtYyA9IE9iamVjdC5jcmVhdGUoQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuXG4gICAgdmFyIG5hbWVzID0gc21jLl9uYW1lcyA9IEFycmF5U2V0LmZyb21BcnJheShhU291cmNlTWFwLl9uYW1lcy50b0FycmF5KCksIHRydWUpO1xuICAgIHZhciBzb3VyY2VzID0gc21jLl9zb3VyY2VzID0gQXJyYXlTZXQuZnJvbUFycmF5KGFTb3VyY2VNYXAuX3NvdXJjZXMudG9BcnJheSgpLCB0cnVlKTtcbiAgICBzbWMuc291cmNlUm9vdCA9IGFTb3VyY2VNYXAuX3NvdXJjZVJvb3Q7XG4gICAgc21jLnNvdXJjZXNDb250ZW50ID0gYVNvdXJjZU1hcC5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudChzbWMuX3NvdXJjZXMudG9BcnJheSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21jLnNvdXJjZVJvb3QpO1xuICAgIHNtYy5maWxlID0gYVNvdXJjZU1hcC5fZmlsZTtcbiAgICBzbWMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gICAgc21jLl9hYnNvbHV0ZVNvdXJjZXMgPSBzbWMuX3NvdXJjZXMudG9BcnJheSgpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzbWMuc291cmNlUm9vdCwgcywgYVNvdXJjZU1hcFVSTCk7XG4gICAgfSk7XG5cbiAgICAvLyBCZWNhdXNlIHdlIGFyZSBtb2RpZnlpbmcgdGhlIGVudHJpZXMgKGJ5IGNvbnZlcnRpbmcgc3RyaW5nIHNvdXJjZXMgYW5kXG4gICAgLy8gbmFtZXMgdG8gaW5kaWNlcyBpbnRvIHRoZSBzb3VyY2VzIGFuZCBuYW1lcyBBcnJheVNldHMpLCB3ZSBoYXZlIHRvIG1ha2VcbiAgICAvLyBhIGNvcHkgb2YgdGhlIGVudHJ5IG9yIGVsc2UgYmFkIHRoaW5ncyBoYXBwZW4uIFNoYXJlZCBtdXRhYmxlIHN0YXRlXG4gICAgLy8gc3RyaWtlcyBhZ2FpbiEgU2VlIGdpdGh1YiBpc3N1ZSAjMTkxLlxuXG4gICAgdmFyIGdlbmVyYXRlZE1hcHBpbmdzID0gYVNvdXJjZU1hcC5fbWFwcGluZ3MudG9BcnJheSgpLnNsaWNlKCk7XG4gICAgdmFyIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncyA9IHNtYy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gW107XG4gICAgdmFyIGRlc3RPcmlnaW5hbE1hcHBpbmdzID0gc21jLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3JjTWFwcGluZyA9IGdlbmVyYXRlZE1hcHBpbmdzW2ldO1xuICAgICAgdmFyIGRlc3RNYXBwaW5nID0gbmV3IE1hcHBpbmc7XG4gICAgICBkZXN0TWFwcGluZy5nZW5lcmF0ZWRMaW5lID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRMaW5lO1xuICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgIGlmIChzcmNNYXBwaW5nLnNvdXJjZSkge1xuICAgICAgICBkZXN0TWFwcGluZy5zb3VyY2UgPSBzb3VyY2VzLmluZGV4T2Yoc3JjTWFwcGluZy5zb3VyY2UpO1xuICAgICAgICBkZXN0TWFwcGluZy5vcmlnaW5hbExpbmUgPSBzcmNNYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBzcmNNYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIGlmIChzcmNNYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBkZXN0TWFwcGluZy5uYW1lID0gbmFtZXMuaW5kZXhPZihzcmNNYXBwaW5nLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdE9yaWdpbmFsTWFwcGluZ3MucHVzaChkZXN0TWFwcGluZyk7XG4gICAgICB9XG5cbiAgICAgIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGRlc3RNYXBwaW5nKTtcbiAgICB9XG5cbiAgICBxdWlja1NvcnQoc21jLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gc21jO1xuICB9O1xuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMuc2xpY2UoKTtcbiAgfVxufSk7XG5cbi8qKlxuICogUHJvdmlkZSB0aGUgSklUIHdpdGggYSBuaWNlIHNoYXBlIC8gaGlkZGVuIGNsYXNzLlxuICovXG5mdW5jdGlvbiBNYXBwaW5nKCkge1xuICB0aGlzLmdlbmVyYXRlZExpbmUgPSAwO1xuICB0aGlzLmdlbmVyYXRlZENvbHVtbiA9IDA7XG4gIHRoaXMuc291cmNlID0gbnVsbDtcbiAgdGhpcy5vcmlnaW5hbExpbmUgPSBudWxsO1xuICB0aGlzLm9yaWdpbmFsQ29sdW1uID0gbnVsbDtcbiAgdGhpcy5uYW1lID0gbnVsbDtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHZhciBnZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c1NvdXJjZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGFTdHIubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNhY2hlZFNlZ21lbnRzID0ge307XG4gICAgdmFyIHRlbXAgPSB7fTtcbiAgICB2YXIgb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBtYXBwaW5nLCBzdHIsIHNlZ21lbnQsIGVuZCwgdmFsdWU7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICc7Jykge1xuICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJywnKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbWFwcGluZyA9IG5ldyBNYXBwaW5nKCk7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IGdlbmVyYXRlZExpbmU7XG5cbiAgICAgICAgLy8gQmVjYXVzZSBlYWNoIG9mZnNldCBpcyBlbmNvZGVkIHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBvbmUsXG4gICAgICAgIC8vIG1hbnkgc2VnbWVudHMgb2Z0ZW4gaGF2ZSB0aGUgc2FtZSBlbmNvZGluZy4gV2UgY2FuIGV4cGxvaXQgdGhpc1xuICAgICAgICAvLyBmYWN0IGJ5IGNhY2hpbmcgdGhlIHBhcnNlZCB2YXJpYWJsZSBsZW5ndGggZmllbGRzIG9mIGVhY2ggc2VnbWVudCxcbiAgICAgICAgLy8gYWxsb3dpbmcgdXMgdG8gYXZvaWQgYSBzZWNvbmQgcGFyc2UgaWYgd2UgZW5jb3VudGVyIHRoZSBzYW1lXG4gICAgICAgIC8vIHNlZ21lbnQgYWdhaW4uXG4gICAgICAgIGZvciAoZW5kID0gaW5kZXg7IGVuZCA8IGxlbmd0aDsgZW5kKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBlbmQpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gYVN0ci5zbGljZShpbmRleCwgZW5kKTtcblxuICAgICAgICBzZWdtZW50ID0gY2FjaGVkU2VnbWVudHNbc3RyXTtcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAgICBpbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGJhc2U2NFZMUS5kZWNvZGUoYVN0ciwgaW5kZXgsIHRlbXApO1xuICAgICAgICAgICAgdmFsdWUgPSB0ZW1wLnZhbHVlO1xuICAgICAgICAgICAgaW5kZXggPSB0ZW1wLnJlc3Q7XG4gICAgICAgICAgICBzZWdtZW50LnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSwgYnV0IG5vIGxpbmUgYW5kIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSBhbmQgbGluZSwgYnV0IG5vIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlZFNlZ21lbnRzW3N0cl0gPSBzZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGVkIGNvbHVtbi5cbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gPSBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiArIHNlZ21lbnRbMF07XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIC8vIE9yaWdpbmFsIHNvdXJjZS5cbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHByZXZpb3VzU291cmNlICsgc2VnbWVudFsxXTtcbiAgICAgICAgICBwcmV2aW91c1NvdXJjZSArPSBzZWdtZW50WzFdO1xuXG4gICAgICAgICAgLy8gT3JpZ2luYWwgbGluZS5cbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9IHByZXZpb3VzT3JpZ2luYWxMaW5lICsgc2VnbWVudFsyXTtcbiAgICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICAgIC8vIExpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZFxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lICs9IDE7XG5cbiAgICAgICAgICAvLyBPcmlnaW5hbCBjb2x1bW4uXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gKyBzZWdtZW50WzNdO1xuICAgICAgICAgIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgLy8gT3JpZ2luYWwgbmFtZS5cbiAgICAgICAgICAgIG1hcHBpbmcubmFtZSA9IHByZXZpb3VzTmFtZSArIHNlZ21lbnRbNF07XG4gICAgICAgICAgICBwcmV2aW91c05hbWUgKz0gc2VnbWVudFs0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuICAgICAgICBpZiAodHlwZW9mIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG9yaWdpbmFsTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHF1aWNrU29ydChnZW5lcmF0ZWRNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCk7XG4gICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gZ2VuZXJhdGVkTWFwcGluZ3M7XG5cbiAgICBxdWlja1NvcnQob3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG4gICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MgPSBvcmlnaW5hbE1hcHBpbmdzO1xuICB9O1xuXG4vKipcbiAqIEZpbmQgdGhlIG1hcHBpbmcgdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGh5cG90aGV0aWNhbCBcIm5lZWRsZVwiIG1hcHBpbmcgdGhhdFxuICogd2UgYXJlIHNlYXJjaGluZyBmb3IgaW4gdGhlIGdpdmVuIFwiaGF5c3RhY2tcIiBvZiBtYXBwaW5ncy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZmluZE1hcHBpbmcoYU5lZWRsZSwgYU1hcHBpbmdzLCBhTGluZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb2x1bW5OYW1lLCBhQ29tcGFyYXRvciwgYUJpYXMpIHtcbiAgICAvLyBUbyByZXR1cm4gdGhlIHBvc2l0aW9uIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCB3ZSBtdXN0IGZpcnN0IGZpbmQgdGhlXG4gICAgLy8gbWFwcGluZyBmb3IgdGhlIGdpdmVuIHBvc2l0aW9uIGFuZCB0aGVuIHJldHVybiB0aGUgb3Bwb3NpdGUgcG9zaXRpb24gaXRcbiAgICAvLyBwb2ludHMgdG8uIEJlY2F1c2UgdGhlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHdlIGNhbiB1c2UgYmluYXJ5IHNlYXJjaCB0b1xuICAgIC8vIGZpbmQgdGhlIGJlc3QgbWFwcGluZy5cblxuICAgIGlmIChhTmVlZGxlW2FMaW5lTmFtZV0gPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTGluZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxLCBnb3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUxpbmVOYW1lXSk7XG4gICAgfVxuICAgIGlmIChhTmVlZGxlW2FDb2x1bW5OYW1lXSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbHVtbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLCBnb3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUNvbHVtbk5hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoLnNlYXJjaChhTmVlZGxlLCBhTWFwcGluZ3MsIGFDb21wYXJhdG9yLCBhQmlhcyk7XG4gIH07XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgbGFzdCBjb2x1bW4gZm9yIGVhY2ggZ2VuZXJhdGVkIG1hcHBpbmcuIFRoZSBsYXN0IGNvbHVtbiBpc1xuICogaW5jbHVzaXZlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5jb21wdXRlQ29sdW1uU3BhbnMgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jb21wdXRlQ29sdW1uU3BhbnMoKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIC8vIE1hcHBpbmdzIGRvIG5vdCBjb250YWluIGEgZmllbGQgZm9yIHRoZSBsYXN0IGdlbmVyYXRlZCBjb2x1bW50LiBXZVxuICAgICAgLy8gY2FuIGNvbWUgdXAgd2l0aCBhbiBvcHRpbWlzdGljIGVzdGltYXRlLCBob3dldmVyLCBieSBhc3N1bWluZyB0aGF0XG4gICAgICAvLyBtYXBwaW5ncyBhcmUgY29udGlndW91cyAoaS5lLiBnaXZlbiB0d28gY29uc2VjdXRpdmUgbWFwcGluZ3MsIHRoZVxuICAgICAgLy8gZmlyc3QgbWFwcGluZyBlbmRzIHdoZXJlIHRoZSBzZWNvbmQgb25lIHN0YXJ0cykuXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0TWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4ICsgMV07XG5cbiAgICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9PT0gbmV4dE1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IG5leHRNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGxhc3QgbWFwcGluZyBmb3IgZWFjaCBsaW5lIHNwYW5zIHRoZSBlbnRpcmUgbGluZS5cbiAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IEluZmluaXR5O1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UsIGxpbmUsIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdFxuICogd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlclxuICogICAgIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSwgb3IgbnVsbC5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICogICAtIG5hbWU6IFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLCBvciBudWxsLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfb3JpZ2luYWxQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBnZW5lcmF0ZWRMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIGdlbmVyYXRlZENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhcbiAgICAgIG5lZWRsZSxcbiAgICAgIHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLFxuICAgICAgXCJnZW5lcmF0ZWRMaW5lXCIsXG4gICAgICBcImdlbmVyYXRlZENvbHVtblwiLFxuICAgICAgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCxcbiAgICAgIHV0aWwuZ2V0QXJnKGFBcmdzLCAnYmlhcycsIFNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EKVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhtYXBwaW5nLCAnc291cmNlJywgbnVsbCk7XG4gICAgICAgIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmF0KHNvdXJjZSk7XG4gICAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHRoaXMuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ25hbWUnLCBudWxsKTtcbiAgICAgICAgaWYgKG5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBuYW1lID0gdGhpcy5fbmFtZXMuYXQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxMaW5lJywgbnVsbCksXG4gICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGwsXG4gICAgICBuYW1lOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB3ZSBoYXZlIHRoZSBzb3VyY2UgY29udGVudCBmb3IgZXZlcnkgc291cmNlIGluIHRoZSBzb3VyY2VcbiAqIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50Lmxlbmd0aCA+PSB0aGlzLl9zb3VyY2VzLnNpemUoKSAmJlxuICAgICAgIXRoaXMuc291cmNlc0NvbnRlbnQuc29tZShmdW5jdGlvbiAoc2MpIHsgcmV0dXJuIHNjID09IG51bGw7IH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuICogYXZhaWxhYmxlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfc291cmNlQ29udGVudEZvcihhU291cmNlLCBudWxsT25NaXNzaW5nKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kU291cmNlSW5kZXgoYVNvdXJjZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W2luZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgcmVsYXRpdmVTb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgcmVsYXRpdmVTb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciB1cmw7XG4gICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsXG4gICAgICAgICYmICh1cmwgPSB1dGlsLnVybFBhcnNlKHRoaXMuc291cmNlUm9vdCkpKSB7XG4gICAgICAvLyBYWFg6IGZpbGU6Ly8gVVJJcyBhbmQgYWJzb2x1dGUgcGF0aHMgbGVhZCB0byB1bmV4cGVjdGVkIGJlaGF2aW9yIGZvclxuICAgICAgLy8gbWFueSB1c2Vycy4gV2UgY2FuIGhlbHAgdGhlbSBvdXQgd2hlbiB0aGV5IGV4cGVjdCBmaWxlOi8vIFVSSXMgdG9cbiAgICAgIC8vIGJlaGF2ZSBsaWtlIGl0IHdvdWxkIGlmIHRoZXkgd2VyZSBydW5uaW5nIGEgbG9jYWwgSFRUUCBzZXJ2ZXIuIFNlZVxuICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg1NTk3LlxuICAgICAgdmFyIGZpbGVVcmlBYnNQYXRoID0gcmVsYXRpdmVTb3VyY2UucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgXCJcIik7XG4gICAgICBpZiAodXJsLnNjaGVtZSA9PSBcImZpbGVcIlxuICAgICAgICAgICYmIHRoaXMuX3NvdXJjZXMuaGFzKGZpbGVVcmlBYnNQYXRoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoZmlsZVVyaUFic1BhdGgpXVxuICAgICAgfVxuXG4gICAgICBpZiAoKCF1cmwucGF0aCB8fCB1cmwucGF0aCA9PSBcIi9cIilcbiAgICAgICAgICAmJiB0aGlzLl9zb3VyY2VzLmhhcyhcIi9cIiArIHJlbGF0aXZlU291cmNlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoXCIvXCIgKyByZWxhdGl2ZVNvdXJjZSldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCByZWN1cnNpdmVseSBmcm9tXG4gICAgLy8gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yLiBJbiB0aGF0IGNhc2UsIHdlXG4gICAgLy8gZG9uJ3Qgd2FudCB0byB0aHJvdyBpZiB3ZSBjYW4ndCBmaW5kIHRoZSBzb3VyY2UgLSB3ZSBqdXN0IHdhbnQgdG9cbiAgICAvLyByZXR1cm4gbnVsbCwgc28gd2UgcHJvdmlkZSBhIGZsYWcgdG8gZXhpdCBncmFjZWZ1bGx5LlxuICAgIGlmIChudWxsT25NaXNzaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIHJlbGF0aXZlU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG4gKiAgICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9nZW5lcmF0ZWRQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpO1xuICAgIHNvdXJjZSA9IHRoaXMuX2ZpbmRTb3VyY2VJbmRleChzb3VyY2UpO1xuICAgIGlmIChzb3VyY2UgPCAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lOiBudWxsLFxuICAgICAgICBjb2x1bW46IG51bGwsXG4gICAgICAgIGxhc3RDb2x1bW46IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgb3JpZ2luYWxMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicpXG4gICAgfTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKFxuICAgICAgbmVlZGxlLFxuICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcbiAgICAgIFwib3JpZ2luYWxMaW5lXCIsXG4gICAgICBcIm9yaWdpbmFsQ29sdW1uXCIsXG4gICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuICAgICAgdXRpbC5nZXRBcmcoYUFyZ3MsICdiaWFzJywgU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQpXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgPT09IG5lZWRsZS5zb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgIGxhc3RDb2x1bW46IG51bGxcbiAgICB9O1xuICB9O1xuXG5leHBvcnRzLkJhc2ljU291cmNlTWFwQ29uc3VtZXIgPSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIEFuIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciBpbnN0YW5jZSByZXByZXNlbnRzIGEgcGFyc2VkIHNvdXJjZSBtYXAgd2hpY2hcbiAqIHdlIGNhbiBxdWVyeSBmb3IgaW5mb3JtYXRpb24uIEl0IGRpZmZlcnMgZnJvbSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluXG4gKiB0aGF0IGl0IHRha2VzIFwiaW5kZXhlZFwiIHNvdXJjZSBtYXBzIChpLmUuIG9uZXMgd2l0aCBhIFwic2VjdGlvbnNcIiBmaWVsZCkgYXNcbiAqIGlucHV0LlxuICpcbiAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yIGFscmVhZHlcbiAqIHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMgZm9yIGluZGV4ZWQgc291cmNlIG1hcHMsIHRoZXlcbiAqIGhhdmUgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICpcbiAqICAgLSB2ZXJzaW9uOiBXaGljaCB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwIHNwZWMgdGhpcyBtYXAgaXMgZm9sbG93aW5nLlxuICogICAtIGZpbGU6IE9wdGlvbmFsLiBUaGUgZ2VuZXJhdGVkIGZpbGUgdGhpcyBzb3VyY2UgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAqICAgLSBzZWN0aW9uczogQSBsaXN0IG9mIHNlY3Rpb24gZGVmaW5pdGlvbnMuXG4gKlxuICogRWFjaCB2YWx1ZSB1bmRlciB0aGUgXCJzZWN0aW9uc1wiIGZpZWxkIGhhcyB0d28gZmllbGRzOlxuICogICAtIG9mZnNldDogVGhlIG9mZnNldCBpbnRvIHRoZSBvcmlnaW5hbCBzcGVjaWZpZWQgYXQgd2hpY2ggdGhpcyBzZWN0aW9uXG4gKiAgICAgICBiZWdpbnMgdG8gYXBwbHksIGRlZmluZWQgYXMgYW4gb2JqZWN0IHdpdGggYSBcImxpbmVcIiBhbmQgXCJjb2x1bW5cIlxuICogICAgICAgZmllbGQuXG4gKiAgIC0gbWFwOiBBIHNvdXJjZSBtYXAgZGVmaW5pdGlvbi4gVGhpcyBzb3VyY2UgbWFwIGNvdWxkIGFsc28gYmUgaW5kZXhlZCxcbiAqICAgICAgIGJ1dCBkb2Vzbid0IGhhdmUgdG8gYmUuXG4gKlxuICogSW5zdGVhZCBvZiB0aGUgXCJtYXBcIiBmaWVsZCwgaXQncyBhbHNvIHBvc3NpYmxlIHRvIGhhdmUgYSBcInVybFwiIGZpZWxkXG4gKiBzcGVjaWZ5aW5nIGEgVVJMIHRvIHJldHJpZXZlIGEgc291cmNlIG1hcCBmcm9tLCBidXQgdGhhdCdzIGN1cnJlbnRseVxuICogdW5zdXBwb3J0ZWQuXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdLCBidXRcbiAqIG1vZGlmaWVkIHRvIG9taXQgYSBzZWN0aW9uIHdoaWNoIHVzZXMgdGhlIFwidXJsXCIgZmllbGQuXG4gKlxuICogIHtcbiAqICAgIHZlcnNpb24gOiAzLFxuICogICAgZmlsZTogXCJhcHAuanNcIixcbiAqICAgIHNlY3Rpb25zOiBbe1xuICogICAgICBvZmZzZXQ6IHtsaW5lOjEwMCwgY29sdW1uOjEwfSxcbiAqICAgICAgbWFwOiB7XG4gKiAgICAgICAgdmVyc2lvbiA6IDMsXG4gKiAgICAgICAgZmlsZTogXCJzZWN0aW9uLmpzXCIsXG4gKiAgICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuICogICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuICogICAgICAgIG1hcHBpbmdzOiBcIkFBQUEsRTs7QUJDREU7XCJcbiAqICAgICAgfVxuICogICAgfV0sXG4gKiAgfVxuICpcbiAqIFRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpZiBnaXZlbiwgaXMgYSBzdHJpbmcgd2hvc2UgdmFsdWUgaXMgdGhlIFVSTFxuICogYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgd2FzIGZvdW5kLiAgVGhpcyBVUkwgaXMgdXNlZCB0byBjb21wdXRlIHRoZVxuICogc291cmNlcyBhcnJheS5cbiAqXG4gKiBbMF06IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdCNoZWFkaW5nPWguNTM1ZXMzeGVwcmd0XG4gKi9cbmZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICd2ZXJzaW9uJyk7XG4gIHZhciBzZWN0aW9ucyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NlY3Rpb25zJyk7XG5cbiAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgdGhpcy5fc291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9uYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuXG4gIHZhciBsYXN0T2Zmc2V0ID0ge1xuICAgIGxpbmU6IC0xLFxuICAgIGNvbHVtbjogMFxuICB9O1xuICB0aGlzLl9zZWN0aW9ucyA9IHNlY3Rpb25zLm1hcChmdW5jdGlvbiAocykge1xuICAgIGlmIChzLnVybCkge1xuICAgICAgLy8gVGhlIHVybCBmaWVsZCB3aWxsIHJlcXVpcmUgc3VwcG9ydCBmb3IgYXN5bmNocm9uaWNpdHkuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMTZcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3VwcG9ydCBmb3IgdXJsIGZpZWxkIGluIHNlY3Rpb25zIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IHV0aWwuZ2V0QXJnKHMsICdvZmZzZXQnKTtcbiAgICB2YXIgb2Zmc2V0TGluZSA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2xpbmUnKTtcbiAgICB2YXIgb2Zmc2V0Q29sdW1uID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnY29sdW1uJyk7XG5cbiAgICBpZiAob2Zmc2V0TGluZSA8IGxhc3RPZmZzZXQubGluZSB8fFxuICAgICAgICAob2Zmc2V0TGluZSA9PT0gbGFzdE9mZnNldC5saW5lICYmIG9mZnNldENvbHVtbiA8IGxhc3RPZmZzZXQuY29sdW1uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWN0aW9uIG9mZnNldHMgbXVzdCBiZSBvcmRlcmVkIGFuZCBub24tb3ZlcmxhcHBpbmcuJyk7XG4gICAgfVxuICAgIGxhc3RPZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2VuZXJhdGVkT2Zmc2V0OiB7XG4gICAgICAgIC8vIFRoZSBvZmZzZXQgZmllbGRzIGFyZSAwLWJhc2VkLCBidXQgd2UgdXNlIDEtYmFzZWQgaW5kaWNlcyB3aGVuXG4gICAgICAgIC8vIGVuY29kaW5nL2RlY29kaW5nIGZyb20gVkxRLlxuICAgICAgICBnZW5lcmF0ZWRMaW5lOiBvZmZzZXRMaW5lICsgMSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBvZmZzZXRDb2x1bW4gKyAxXG4gICAgICB9LFxuICAgICAgY29uc3VtZXI6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1dGlsLmdldEFyZyhzLCAnbWFwJyksIGFTb3VyY2VNYXBVUkwpXG4gICAgfVxuICB9KTtcbn1cblxuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnc291cmNlcycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgc291cmNlcy5wdXNoKHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgLy8gRmluZCB0aGUgc2VjdGlvbiBjb250YWluaW5nIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24gd2UncmUgdHJ5aW5nIHRvIG1hcFxuICAgIC8vIHRvIGFuIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIHZhciBzZWN0aW9uSW5kZXggPSBiaW5hcnlTZWFyY2guc2VhcmNoKG5lZWRsZSwgdGhpcy5fc2VjdGlvbnMsXG4gICAgICBmdW5jdGlvbihuZWVkbGUsIHNlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNtcCA9IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC0gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgaWYgKGNtcCkge1xuICAgICAgICAgIHJldHVybiBjbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5lZWRsZS5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbik7XG4gICAgICB9KTtcbiAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW3NlY3Rpb25JbmRleF07XG5cbiAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uLmNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgbGluZTogbmVlZGxlLmdlbmVyYXRlZExpbmUgLVxuICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgY29sdW1uOiBuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lXG4gICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcbiAgICAgICAgIDogMCksXG4gICAgICBiaWFzOiBhQXJncy5iaWFzXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzLmNvbnN1bWVyLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCk7XG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIHRoZSB1cmwgb2YgdGhlXG4gKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG4gKiBhdmFpbGFibGUuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICB2YXIgY29udGVudCA9IHNlY3Rpb24uY29uc3VtZXIuc291cmNlQ29udGVudEZvcihhU291cmNlLCB0cnVlKTtcbiAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLiBcbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICAvLyBPbmx5IGNvbnNpZGVyIHRoaXMgc2VjdGlvbiBpZiB0aGUgcmVxdWVzdGVkIHNvdXJjZSBpcyBpbiB0aGUgbGlzdCBvZlxuICAgICAgLy8gc291cmNlcyBvZiB0aGUgY29uc3VtZXIuXG4gICAgICBpZiAoc2VjdGlvbi5jb25zdW1lci5fZmluZFNvdXJjZUluZGV4KHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJykpID09PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBnZW5lcmF0ZWRQb3NpdGlvbiA9IHNlY3Rpb24uY29uc3VtZXIuZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpO1xuICAgICAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgbGluZTogZ2VuZXJhdGVkUG9zaXRpb24ubGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkUG9zaXRpb24uY29sdW1uICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBnZW5lcmF0ZWRQb3NpdGlvbi5saW5lXG4gICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICAgOiAwKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcbiAgICAgIHZhciBzZWN0aW9uTWFwcGluZ3MgPSBzZWN0aW9uLmNvbnN1bWVyLl9nZW5lcmF0ZWRNYXBwaW5ncztcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VjdGlvbk1hcHBpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBtYXBwaW5nID0gc2VjdGlvbk1hcHBpbmdzW2pdO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWN0aW9uLmNvbnN1bWVyLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHNlY3Rpb24uY29uc3VtZXIuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB0aGlzLl9zb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmluZGV4T2Yoc291cmNlKTtcblxuICAgICAgICB2YXIgbmFtZSA9IG51bGw7XG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBuYW1lID0gc2VjdGlvbi5jb25zdW1lci5fbmFtZXMuYXQobWFwcGluZy5uYW1lKTtcbiAgICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbWFwcGluZ3MgY29taW5nIGZyb20gdGhlIGNvbnN1bWVyIGZvciB0aGUgc2VjdGlvbiBoYXZlXG4gICAgICAgIC8vIGdlbmVyYXRlZCBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZWN0aW9uLCBzbyB3ZVxuICAgICAgICAvLyBuZWVkIHRvIG9mZnNldCB0aGVtIHRvIGJlIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgY29uY2F0ZW5hdGVkXG4gICAgICAgIC8vIGdlbmVyYXRlZCBmaWxlLlxuICAgICAgICB2YXIgYWRqdXN0ZWRNYXBwaW5nID0ge1xuICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGdlbmVyYXRlZENvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG1hcHBpbmcuZ2VuZXJhdGVkTGluZVxuICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICA6IDApLFxuICAgICAgICAgIG9yaWdpbmFsTGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIGlmICh0eXBlb2YgYWRqdXN0ZWRNYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWlja1NvcnQodGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKTtcbiAgICBxdWlja1NvcnQodGhpcy5fX29yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuICB9O1xuXG5leHBvcnRzLkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciA9IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcjtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGJhc2U2NFZMUSA9IHJlcXVpcmUoJy4vYmFzZTY0LXZscScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBBcnJheVNldCA9IHJlcXVpcmUoJy4vYXJyYXktc2V0JykuQXJyYXlTZXQ7XG52YXIgTWFwcGluZ0xpc3QgPSByZXF1aXJlKCcuL21hcHBpbmctbGlzdCcpLk1hcHBpbmdMaXN0O1xuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3IgcmVwcmVzZW50cyBhIHNvdXJjZSBtYXAgd2hpY2ggaXNcbiAqIGJlaW5nIGJ1aWx0IGluY3JlbWVudGFsbHkuIFlvdSBtYXkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nXG4gKiBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBmaWxlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG4gKiAgIC0gc291cmNlUm9vdDogQSByb290IGZvciBhbGwgcmVsYXRpdmUgVVJMcyBpbiB0aGlzIHNvdXJjZSBtYXAuXG4gKi9cbmZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcihhQXJncykge1xuICBpZiAoIWFBcmdzKSB7XG4gICAgYUFyZ3MgPSB7fTtcbiAgfVxuICB0aGlzLl9maWxlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdmaWxlJywgbnVsbCk7XG4gIHRoaXMuX3NvdXJjZVJvb3QgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZVJvb3QnLCBudWxsKTtcbiAgdGhpcy5fc2tpcFZhbGlkYXRpb24gPSB1dGlsLmdldEFyZyhhQXJncywgJ3NraXBWYWxpZGF0aW9uJywgZmFsc2UpO1xuICB0aGlzLl9zb3VyY2VzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX25hbWVzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX21hcHBpbmdzID0gbmV3IE1hcHBpbmdMaXN0KCk7XG4gIHRoaXMuX3NvdXJjZXNDb250ZW50cyA9IG51bGw7XG59XG5cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgU291cmNlTWFwR2VuZXJhdG9yIGJhc2VkIG9uIGEgU291cmNlTWFwQ29uc3VtZXJcbiAqXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBTb3VyY2VNYXAuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2Zyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcENvbnN1bWVyKSB7XG4gICAgdmFyIHNvdXJjZVJvb3QgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlUm9vdDtcbiAgICB2YXIgZ2VuZXJhdG9yID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICBmaWxlOiBhU291cmNlTWFwQ29uc3VtZXIuZmlsZSxcbiAgICAgIHNvdXJjZVJvb3Q6IHNvdXJjZVJvb3RcbiAgICB9KTtcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuZWFjaE1hcHBpbmcoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBuZXdNYXBwaW5nID0ge1xuICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICBsaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtblxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICBuZXdNYXBwaW5nLnNvdXJjZSA9IG1hcHBpbmcuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3TWFwcGluZy5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIG5ld01hcHBpbmcuc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld01hcHBpbmcub3JpZ2luYWwgPSB7XG4gICAgICAgICAgbGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1hcHBpbmcubmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3TWFwcGluZy5uYW1lID0gbWFwcGluZy5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdlbmVyYXRvci5hZGRNYXBwaW5nKG5ld01hcHBpbmcpO1xuICAgIH0pO1xuICAgIGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUZpbGUpIHtcbiAgICAgIHZhciBzb3VyY2VSZWxhdGl2ZSA9IHNvdXJjZUZpbGU7XG4gICAgICBpZiAoc291cmNlUm9vdCAhPT0gbnVsbCkge1xuICAgICAgICBzb3VyY2VSZWxhdGl2ZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlRmlsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2VuZXJhdG9yLl9zb3VyY2VzLmhhcyhzb3VyY2VSZWxhdGl2ZSkpIHtcbiAgICAgICAgZ2VuZXJhdG9yLl9zb3VyY2VzLmFkZChzb3VyY2VSZWxhdGl2ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZW50ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3Ioc291cmNlRmlsZSk7XG4gICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgIGdlbmVyYXRvci5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH07XG5cbi8qKlxuICogQWRkIGEgc2luZ2xlIG1hcHBpbmcgZnJvbSBvcmlnaW5hbCBzb3VyY2UgbGluZSBhbmQgY29sdW1uIHRvIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBmb3IgdGhpcyBzb3VyY2UgbWFwIGJlaW5nIGNyZWF0ZWQuIFRoZSBtYXBwaW5nXG4gKiBvYmplY3Qgc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBnZW5lcmF0ZWQ6IEFuIG9iamVjdCB3aXRoIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucy5cbiAqICAgLSBvcmlnaW5hbDogQW4gb2JqZWN0IHdpdGggdGhlIG9yaWdpbmFsIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMuXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUgKHJlbGF0aXZlIHRvIHRoZSBzb3VyY2VSb290KS5cbiAqICAgLSBuYW1lOiBBbiBvcHRpb25hbCBvcmlnaW5hbCB0b2tlbiBuYW1lIGZvciB0aGlzIG1hcHBpbmcuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYWRkTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9hZGRNYXBwaW5nKGFBcmdzKSB7XG4gICAgdmFyIGdlbmVyYXRlZCA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnZ2VuZXJhdGVkJyk7XG4gICAgdmFyIG9yaWdpbmFsID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdvcmlnaW5hbCcsIG51bGwpO1xuICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScsIG51bGwpO1xuICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICduYW1lJywgbnVsbCk7XG5cbiAgICBpZiAoIXRoaXMuX3NraXBWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLl92YWxpZGF0ZU1hcHBpbmcoZ2VuZXJhdGVkLCBvcmlnaW5hbCwgc291cmNlLCBuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZSA9IFN0cmluZyhzb3VyY2UpO1xuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICAgIGlmICghdGhpcy5fbmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuX25hbWVzLmFkZChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYXBwaW5ncy5hZGQoe1xuICAgICAgZ2VuZXJhdGVkTGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IGdlbmVyYXRlZC5jb2x1bW4sXG4gICAgICBvcmlnaW5hbExpbmU6IG9yaWdpbmFsICE9IG51bGwgJiYgb3JpZ2luYWwubGluZSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiBvcmlnaW5hbCAhPSBudWxsICYmIG9yaWdpbmFsLmNvbHVtbixcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgbmFtZTogbmFtZVxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFNldCB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGEgc291cmNlIGZpbGUuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuc2V0U291cmNlQ29udGVudCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9zZXRTb3VyY2VDb250ZW50KGFTb3VyY2VGaWxlLCBhU291cmNlQ29udGVudCkge1xuICAgIHZhciBzb3VyY2UgPSBhU291cmNlRmlsZTtcbiAgICBpZiAodGhpcy5fc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICBzb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuX3NvdXJjZVJvb3QsIHNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKGFTb3VyY2VDb250ZW50ICE9IG51bGwpIHtcbiAgICAgIC8vIEFkZCB0aGUgc291cmNlIGNvbnRlbnQgdG8gdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwLlxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IF9zb3VyY2VzQ29udGVudHMgbWFwIGlmIHRoZSBwcm9wZXJ0eSBpcyBudWxsLlxuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgICAgdGhpcy5fc291cmNlc0NvbnRlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NvdXJjZXNDb250ZW50c1t1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSldID0gYVNvdXJjZUNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlIGZpbGUgZnJvbSB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAuXG4gICAgICAvLyBJZiB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAgaXMgZW1wdHksIHNldCB0aGUgcHJvcGVydHkgdG8gbnVsbC5cbiAgICAgIGRlbGV0ZSB0aGlzLl9zb3VyY2VzQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhzb3VyY2UpXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9zb3VyY2VzQ29udGVudHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9zb3VyY2VzQ29udGVudHMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBtYXBwaW5ncyBvZiBhIHN1Yi1zb3VyY2UtbWFwIGZvciBhIHNwZWNpZmljIHNvdXJjZSBmaWxlIHRvIHRoZVxuICogc291cmNlIG1hcCBiZWluZyBnZW5lcmF0ZWQuIEVhY2ggbWFwcGluZyB0byB0aGUgc3VwcGxpZWQgc291cmNlIGZpbGUgaXNcbiAqIHJld3JpdHRlbiB1c2luZyB0aGUgc3VwcGxpZWQgc291cmNlIG1hcC4gTm90ZTogVGhlIHJlc29sdXRpb24gZm9yIHRoZVxuICogcmVzdWx0aW5nIG1hcHBpbmdzIGlzIHRoZSBtaW5pbWl1bSBvZiB0aGlzIG1hcCBhbmQgdGhlIHN1cHBsaWVkIG1hcC5cbiAqXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBzb3VyY2UgbWFwIHRvIGJlIGFwcGxpZWQuXG4gKiBAcGFyYW0gYVNvdXJjZUZpbGUgT3B0aW9uYWwuIFRoZSBmaWxlbmFtZSBvZiB0aGUgc291cmNlIGZpbGUuXG4gKiAgICAgICAgSWYgb21pdHRlZCwgU291cmNlTWFwQ29uc3VtZXIncyBmaWxlIHByb3BlcnR5IHdpbGwgYmUgdXNlZC5cbiAqIEBwYXJhbSBhU291cmNlTWFwUGF0aCBPcHRpb25hbC4gVGhlIGRpcm5hbWUgb2YgdGhlIHBhdGggdG8gdGhlIHNvdXJjZSBtYXBcbiAqICAgICAgICB0byBiZSBhcHBsaWVkLiBJZiByZWxhdGl2ZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIFNvdXJjZU1hcENvbnN1bWVyLlxuICogICAgICAgIFRoaXMgcGFyYW1ldGVyIGlzIG5lZWRlZCB3aGVuIHRoZSB0d28gc291cmNlIG1hcHMgYXJlbid0IGluIHRoZSBzYW1lXG4gKiAgICAgICAgZGlyZWN0b3J5LCBhbmQgdGhlIHNvdXJjZSBtYXAgdG8gYmUgYXBwbGllZCBjb250YWlucyByZWxhdGl2ZSBzb3VyY2VcbiAqICAgICAgICBwYXRocy4gSWYgc28sIHRob3NlIHJlbGF0aXZlIHNvdXJjZSBwYXRocyBuZWVkIHRvIGJlIHJld3JpdHRlblxuICogICAgICAgIHJlbGF0aXZlIHRvIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3IuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYXBwbHlTb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfYXBwbHlTb3VyY2VNYXAoYVNvdXJjZU1hcENvbnN1bWVyLCBhU291cmNlRmlsZSwgYVNvdXJjZU1hcFBhdGgpIHtcbiAgICB2YXIgc291cmNlRmlsZSA9IGFTb3VyY2VGaWxlO1xuICAgIC8vIElmIGFTb3VyY2VGaWxlIGlzIG9taXR0ZWQsIHdlIHdpbGwgdXNlIHRoZSBmaWxlIHByb3BlcnR5IG9mIHRoZSBTb3VyY2VNYXBcbiAgICBpZiAoYVNvdXJjZUZpbGUgPT0gbnVsbCkge1xuICAgICAgaWYgKGFTb3VyY2VNYXBDb25zdW1lci5maWxlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdTb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFwcGx5U291cmNlTWFwIHJlcXVpcmVzIGVpdGhlciBhbiBleHBsaWNpdCBzb3VyY2UgZmlsZSwgJyArXG4gICAgICAgICAgJ29yIHRoZSBzb3VyY2UgbWFwXFwncyBcImZpbGVcIiBwcm9wZXJ0eS4gQm90aCB3ZXJlIG9taXR0ZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc291cmNlRmlsZSA9IGFTb3VyY2VNYXBDb25zdW1lci5maWxlO1xuICAgIH1cbiAgICB2YXIgc291cmNlUm9vdCA9IHRoaXMuX3NvdXJjZVJvb3Q7XG4gICAgLy8gTWFrZSBcInNvdXJjZUZpbGVcIiByZWxhdGl2ZSBpZiBhbiBhYnNvbHV0ZSBVcmwgaXMgcGFzc2VkLlxuICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZUZpbGUpO1xuICAgIH1cbiAgICAvLyBBcHBseWluZyB0aGUgU291cmNlTWFwIGNhbiBhZGQgYW5kIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzb3VyY2VzIGFuZFxuICAgIC8vIHRoZSBuYW1lcyBhcnJheS5cbiAgICB2YXIgbmV3U291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICAgIHZhciBuZXdOYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuXG4gICAgLy8gRmluZCBtYXBwaW5ncyBmb3IgdGhlIFwic291cmNlRmlsZVwiXG4gICAgdGhpcy5fbWFwcGluZ3MudW5zb3J0ZWRGb3JFYWNoKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgPT09IHNvdXJjZUZpbGUgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgIT0gbnVsbCkge1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBjYW4gYmUgbWFwcGVkIGJ5IHRoZSBzb3VyY2UgbWFwLCB0aGVuIHVwZGF0ZSB0aGUgbWFwcGluZy5cbiAgICAgICAgdmFyIG9yaWdpbmFsID0gYVNvdXJjZU1hcENvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgICAgIGxpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9yaWdpbmFsLnNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gQ29weSBtYXBwaW5nXG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBvcmlnaW5hbC5zb3VyY2U7XG4gICAgICAgICAgaWYgKGFTb3VyY2VNYXBQYXRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdXRpbC5qb2luKGFTb3VyY2VNYXBQYXRoLCBtYXBwaW5nLnNvdXJjZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPSBvcmlnaW5hbC5saW5lO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBvcmlnaW5hbC5jb2x1bW47XG4gICAgICAgICAgaWYgKG9yaWdpbmFsLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5uYW1lID0gb3JpZ2luYWwubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZSA9IG1hcHBpbmcuc291cmNlO1xuICAgICAgaWYgKHNvdXJjZSAhPSBudWxsICYmICFuZXdTb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIG5ld1NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gbWFwcGluZy5uYW1lO1xuICAgICAgaWYgKG5hbWUgIT0gbnVsbCAmJiAhbmV3TmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIG5ld05hbWVzLmFkZChuYW1lKTtcbiAgICAgIH1cblxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBuZXdTb3VyY2VzO1xuICAgIHRoaXMuX25hbWVzID0gbmV3TmFtZXM7XG5cbiAgICAvLyBDb3B5IHNvdXJjZXNDb250ZW50cyBvZiBhcHBsaWVkIG1hcC5cbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYVNvdXJjZU1hcFBhdGggIT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLmpvaW4oYVNvdXJjZU1hcFBhdGgsIHNvdXJjZUZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2VGaWxlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbi8qKlxuICogQSBtYXBwaW5nIGNhbiBoYXZlIG9uZSBvZiB0aGUgdGhyZWUgbGV2ZWxzIG9mIGRhdGE6XG4gKlxuICogICAxLiBKdXN0IHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24uXG4gKiAgIDIuIFRoZSBHZW5lcmF0ZWQgcG9zaXRpb24sIG9yaWdpbmFsIHBvc2l0aW9uLCBhbmQgb3JpZ2luYWwgc291cmNlLlxuICogICAzLiBHZW5lcmF0ZWQgYW5kIG9yaWdpbmFsIHBvc2l0aW9uLCBvcmlnaW5hbCBzb3VyY2UsIGFzIHdlbGwgYXMgYSBuYW1lXG4gKiAgICAgIHRva2VuLlxuICpcbiAqIFRvIG1haW50YWluIGNvbnNpc3RlbmN5LCB3ZSB2YWxpZGF0ZSB0aGF0IGFueSBuZXcgbWFwcGluZyBiZWluZyBhZGRlZCBmYWxsc1xuICogaW4gdG8gb25lIG9mIHRoZXNlIGNhdGVnb3JpZXMuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl92YWxpZGF0ZU1hcHBpbmcoYUdlbmVyYXRlZCwgYU9yaWdpbmFsLCBhU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOYW1lKSB7XG4gICAgLy8gV2hlbiBhT3JpZ2luYWwgaXMgdHJ1dGh5IGJ1dCBoYXMgZW1wdHkgdmFsdWVzIGZvciAubGluZSBhbmQgLmNvbHVtbixcbiAgICAvLyBpdCBpcyBtb3N0IGxpa2VseSBhIHByb2dyYW1tZXIgZXJyb3IuIEluIHRoaXMgY2FzZSB3ZSB0aHJvdyBhIHZlcnlcbiAgICAvLyBzcGVjaWZpYyBlcnJvciBtZXNzYWdlIHRvIHRyeSB0byBndWlkZSB0aGVtIHRoZSByaWdodCB3YXkuXG4gICAgLy8gRm9yIGV4YW1wbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL3BvbHltZXItYnVuZGxlci9wdWxsLzUxOVxuICAgIGlmIChhT3JpZ2luYWwgJiYgdHlwZW9mIGFPcmlnaW5hbC5saW5lICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgYU9yaWdpbmFsLmNvbHVtbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ29yaWdpbmFsLmxpbmUgYW5kIG9yaWdpbmFsLmNvbHVtbiBhcmUgbm90IG51bWJlcnMgLS0geW91IHByb2JhYmx5IG1lYW50IHRvIG9taXQgJyArXG4gICAgICAgICAgICAndGhlIG9yaWdpbmFsIG1hcHBpbmcgZW50aXJlbHkgYW5kIG9ubHkgbWFwIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24uIElmIHNvLCBwYXNzICcgK1xuICAgICAgICAgICAgJ251bGwgZm9yIHRoZSBvcmlnaW5hbCBtYXBwaW5nIGluc3RlYWQgb2YgYW4gb2JqZWN0IHdpdGggZW1wdHkgb3IgbnVsbCB2YWx1ZXMuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChhR2VuZXJhdGVkICYmICdsaW5lJyBpbiBhR2VuZXJhdGVkICYmICdjb2x1bW4nIGluIGFHZW5lcmF0ZWRcbiAgICAgICAgJiYgYUdlbmVyYXRlZC5saW5lID4gMCAmJiBhR2VuZXJhdGVkLmNvbHVtbiA+PSAwXG4gICAgICAgICYmICFhT3JpZ2luYWwgJiYgIWFTb3VyY2UgJiYgIWFOYW1lKSB7XG4gICAgICAvLyBDYXNlIDEuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGFHZW5lcmF0ZWQgJiYgJ2xpbmUnIGluIGFHZW5lcmF0ZWQgJiYgJ2NvbHVtbicgaW4gYUdlbmVyYXRlZFxuICAgICAgICAgICAgICYmIGFPcmlnaW5hbCAmJiAnbGluZScgaW4gYU9yaWdpbmFsICYmICdjb2x1bW4nIGluIGFPcmlnaW5hbFxuICAgICAgICAgICAgICYmIGFHZW5lcmF0ZWQubGluZSA+IDAgJiYgYUdlbmVyYXRlZC5jb2x1bW4gPj0gMFxuICAgICAgICAgICAgICYmIGFPcmlnaW5hbC5saW5lID4gMCAmJiBhT3JpZ2luYWwuY29sdW1uID49IDBcbiAgICAgICAgICAgICAmJiBhU291cmNlKSB7XG4gICAgICAvLyBDYXNlcyAyIGFuZCAzLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXBwaW5nOiAnICsgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBnZW5lcmF0ZWQ6IGFHZW5lcmF0ZWQsXG4gICAgICAgIHNvdXJjZTogYVNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWw6IGFPcmlnaW5hbCxcbiAgICAgICAgbmFtZTogYU5hbWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBhY2N1bXVsYXRlZCBtYXBwaW5ncyBpbiB0byB0aGUgc3RyZWFtIG9mIGJhc2UgNjQgVkxRc1xuICogc3BlY2lmaWVkIGJ5IHRoZSBzb3VyY2UgbWFwIGZvcm1hdC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5fc2VyaWFsaXplTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3Jfc2VyaWFsaXplTWFwcGluZ3MoKSB7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gMDtcbiAgICB2YXIgcHJldmlvdXNOYW1lID0gMDtcbiAgICB2YXIgcHJldmlvdXNTb3VyY2UgPSAwO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgbmV4dDtcbiAgICB2YXIgbWFwcGluZztcbiAgICB2YXIgbmFtZUlkeDtcbiAgICB2YXIgc291cmNlSWR4O1xuXG4gICAgdmFyIG1hcHBpbmdzID0gdGhpcy5fbWFwcGluZ3MudG9BcnJheSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xuICAgICAgbmV4dCA9ICcnXG5cbiAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgIT09IHByZXZpb3VzR2VuZXJhdGVkTGluZSkge1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgIHdoaWxlIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgIT09IHByZXZpb3VzR2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIG5leHQgKz0gJzsnO1xuICAgICAgICAgIHByZXZpb3VzR2VuZXJhdGVkTGluZSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgaWYgKCF1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmcsIG1hcHBpbmdzW2kgLSAxXSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0ICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlSWR4ID0gdGhpcy5fc291cmNlcy5pbmRleE9mKG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKHNvdXJjZUlkeCAtIHByZXZpb3VzU291cmNlKTtcbiAgICAgICAgcHJldmlvdXNTb3VyY2UgPSBzb3VyY2VJZHg7XG5cbiAgICAgICAgLy8gbGluZXMgYXJlIHN0b3JlZCAwLWJhc2VkIGluIFNvdXJjZU1hcCBzcGVjIHZlcnNpb24gM1xuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5vcmlnaW5hbExpbmUgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNPcmlnaW5hbExpbmUpO1xuICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gMTtcblxuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4pO1xuICAgICAgICBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICBpZiAobWFwcGluZy5uYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBuYW1lSWR4ID0gdGhpcy5fbmFtZXMuaW5kZXhPZihtYXBwaW5nLm5hbWUpO1xuICAgICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShuYW1lSWR4IC0gcHJldmlvdXNOYW1lKTtcbiAgICAgICAgICBwcmV2aW91c05hbWUgPSBuYW1lSWR4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCArPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfZ2VuZXJhdGVTb3VyY2VzQ29udGVudChhU291cmNlcywgYVNvdXJjZVJvb3QpIHtcbiAgICByZXR1cm4gYVNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGlmICghdGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFTb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlID0gdXRpbC5yZWxhdGl2ZShhU291cmNlUm9vdCwgc291cmNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX3NvdXJjZXNDb250ZW50cywga2V5KVxuICAgICAgICA/IHRoaXMuX3NvdXJjZXNDb250ZW50c1trZXldXG4gICAgICAgIDogbnVsbDtcbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuLyoqXG4gKiBFeHRlcm5hbGl6ZSB0aGUgc291cmNlIG1hcC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS50b0pTT04gPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfdG9KU09OKCkge1xuICAgIHZhciBtYXAgPSB7XG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgc291cmNlczogdGhpcy5fc291cmNlcy50b0FycmF5KCksXG4gICAgICBuYW1lczogdGhpcy5fbmFtZXMudG9BcnJheSgpLFxuICAgICAgbWFwcGluZ3M6IHRoaXMuX3NlcmlhbGl6ZU1hcHBpbmdzKClcbiAgICB9O1xuICAgIGlmICh0aGlzLl9maWxlICE9IG51bGwpIHtcbiAgICAgIG1hcC5maWxlID0gdGhpcy5fZmlsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgbWFwLnNvdXJjZVJvb3QgPSB0aGlzLl9zb3VyY2VSb290O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICBtYXAuc291cmNlc0NvbnRlbnQgPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50KG1hcC5zb3VyY2VzLCBtYXAuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIHNvdXJjZSBtYXAgYmVpbmcgZ2VuZXJhdGVkIHRvIGEgc3RyaW5nLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3RvU3RyaW5nKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcbiAgfTtcblxuZXhwb3J0cy5Tb3VyY2VNYXBHZW5lcmF0b3IgPSBTb3VyY2VNYXBHZW5lcmF0b3I7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBTb3VyY2VNYXBHZW5lcmF0b3IgPSByZXF1aXJlKCcuL3NvdXJjZS1tYXAtZ2VuZXJhdG9yJykuU291cmNlTWFwR2VuZXJhdG9yO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLy8gTWF0Y2hlcyBhIFdpbmRvd3Mtc3R5bGUgYFxcclxcbmAgbmV3bGluZSBvciBhIGBcXG5gIG5ld2xpbmUgdXNlZCBieSBhbGwgb3RoZXJcbi8vIG9wZXJhdGluZyBzeXN0ZW1zIHRoZXNlIGRheXMgKGNhcHR1cmluZyB0aGUgcmVzdWx0KS5cbnZhciBSRUdFWF9ORVdMSU5FID0gLyhcXHI/XFxuKS87XG5cbi8vIE5ld2xpbmUgY2hhcmFjdGVyIGNvZGUgZm9yIGNoYXJDb2RlQXQoKSBjb21wYXJpc29uc1xudmFyIE5FV0xJTkVfQ09ERSA9IDEwO1xuXG4vLyBQcml2YXRlIHN5bWJvbCBmb3IgaWRlbnRpZnlpbmcgYFNvdXJjZU5vZGVgcyB3aGVuIG11bHRpcGxlIHZlcnNpb25zIG9mXG4vLyB0aGUgc291cmNlLW1hcCBsaWJyYXJ5IGFyZSBsb2FkZWQuIFRoaXMgTVVTVCBOT1QgQ0hBTkdFIGFjcm9zc1xuLy8gdmVyc2lvbnMhXG52YXIgaXNTb3VyY2VOb2RlID0gXCIkJCRpc1NvdXJjZU5vZGUkJCRcIjtcblxuLyoqXG4gKiBTb3VyY2VOb2RlcyBwcm92aWRlIGEgd2F5IHRvIGFic3RyYWN0IG92ZXIgaW50ZXJwb2xhdGluZy9jb25jYXRlbmF0aW5nXG4gKiBzbmlwcGV0cyBvZiBnZW5lcmF0ZWQgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSB3aGlsZSBtYWludGFpbmluZyB0aGUgbGluZSBhbmRcbiAqIGNvbHVtbiBpbmZvcm1hdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwYXJhbSBhTGluZSBUaGUgb3JpZ2luYWwgbGluZSBudW1iZXIuXG4gKiBAcGFyYW0gYUNvbHVtbiBUaGUgb3JpZ2luYWwgY29sdW1uIG51bWJlci5cbiAqIEBwYXJhbSBhU291cmNlIFRoZSBvcmlnaW5hbCBzb3VyY2UncyBmaWxlbmFtZS5cbiAqIEBwYXJhbSBhQ2h1bmtzIE9wdGlvbmFsLiBBbiBhcnJheSBvZiBzdHJpbmdzIHdoaWNoIGFyZSBzbmlwcGV0cyBvZlxuICogICAgICAgIGdlbmVyYXRlZCBKUywgb3Igb3RoZXIgU291cmNlTm9kZXMuXG4gKiBAcGFyYW0gYU5hbWUgVGhlIG9yaWdpbmFsIGlkZW50aWZpZXIuXG4gKi9cbmZ1bmN0aW9uIFNvdXJjZU5vZGUoYUxpbmUsIGFDb2x1bW4sIGFTb3VyY2UsIGFDaHVua3MsIGFOYW1lKSB7XG4gIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgdGhpcy5zb3VyY2VDb250ZW50cyA9IHt9O1xuICB0aGlzLmxpbmUgPSBhTGluZSA9PSBudWxsID8gbnVsbCA6IGFMaW5lO1xuICB0aGlzLmNvbHVtbiA9IGFDb2x1bW4gPT0gbnVsbCA/IG51bGwgOiBhQ29sdW1uO1xuICB0aGlzLnNvdXJjZSA9IGFTb3VyY2UgPT0gbnVsbCA/IG51bGwgOiBhU291cmNlO1xuICB0aGlzLm5hbWUgPSBhTmFtZSA9PSBudWxsID8gbnVsbCA6IGFOYW1lO1xuICB0aGlzW2lzU291cmNlTm9kZV0gPSB0cnVlO1xuICBpZiAoYUNodW5rcyAhPSBudWxsKSB0aGlzLmFkZChhQ2h1bmtzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgU291cmNlTm9kZSBmcm9tIGdlbmVyYXRlZCBjb2RlIGFuZCBhIFNvdXJjZU1hcENvbnN1bWVyLlxuICpcbiAqIEBwYXJhbSBhR2VuZXJhdGVkQ29kZSBUaGUgZ2VuZXJhdGVkIGNvZGVcbiAqIEBwYXJhbSBhU291cmNlTWFwQ29uc3VtZXIgVGhlIFNvdXJjZU1hcCBmb3IgdGhlIGdlbmVyYXRlZCBjb2RlXG4gKiBAcGFyYW0gYVJlbGF0aXZlUGF0aCBPcHRpb25hbC4gVGhlIHBhdGggdGhhdCByZWxhdGl2ZSBzb3VyY2VzIGluIHRoZVxuICogICAgICAgIFNvdXJjZU1hcENvbnN1bWVyIHNob3VsZCBiZSByZWxhdGl2ZSB0by5cbiAqL1xuU291cmNlTm9kZS5mcm9tU3RyaW5nV2l0aFNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfZnJvbVN0cmluZ1dpdGhTb3VyY2VNYXAoYUdlbmVyYXRlZENvZGUsIGFTb3VyY2VNYXBDb25zdW1lciwgYVJlbGF0aXZlUGF0aCkge1xuICAgIC8vIFRoZSBTb3VyY2VOb2RlIHdlIHdhbnQgdG8gZmlsbCB3aXRoIHRoZSBnZW5lcmF0ZWQgY29kZVxuICAgIC8vIGFuZCB0aGUgU291cmNlTWFwXG4gICAgdmFyIG5vZGUgPSBuZXcgU291cmNlTm9kZSgpO1xuXG4gICAgLy8gQWxsIGV2ZW4gaW5kaWNlcyBvZiB0aGlzIGFycmF5IGFyZSBvbmUgbGluZSBvZiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4gICAgLy8gd2hpbGUgYWxsIG9kZCBpbmRpY2VzIGFyZSB0aGUgbmV3bGluZXMgYmV0d2VlbiB0d28gYWRqYWNlbnQgbGluZXNcbiAgICAvLyAoc2luY2UgYFJFR0VYX05FV0xJTkVgIGNhcHR1cmVzIGl0cyBtYXRjaCkuXG4gICAgLy8gUHJvY2Vzc2VkIGZyYWdtZW50cyBhcmUgYWNjZXNzZWQgYnkgY2FsbGluZyBgc2hpZnROZXh0TGluZWAuXG4gICAgdmFyIHJlbWFpbmluZ0xpbmVzID0gYUdlbmVyYXRlZENvZGUuc3BsaXQoUkVHRVhfTkVXTElORSk7XG4gICAgdmFyIHJlbWFpbmluZ0xpbmVzSW5kZXggPSAwO1xuICAgIHZhciBzaGlmdE5leHRMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGluZUNvbnRlbnRzID0gZ2V0TmV4dExpbmUoKTtcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgb2YgYSBmaWxlIG1pZ2h0IG5vdCBoYXZlIGEgbmV3bGluZS5cbiAgICAgIHZhciBuZXdMaW5lID0gZ2V0TmV4dExpbmUoKSB8fCBcIlwiO1xuICAgICAgcmV0dXJuIGxpbmVDb250ZW50cyArIG5ld0xpbmU7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5leHRMaW5lKCkge1xuICAgICAgICByZXR1cm4gcmVtYWluaW5nTGluZXNJbmRleCA8IHJlbWFpbmluZ0xpbmVzLmxlbmd0aCA/XG4gICAgICAgICAgICByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlbWVtYmVyIHRoZSBwb3NpdGlvbiBvZiBcInJlbWFpbmluZ0xpbmVzXCJcbiAgICB2YXIgbGFzdEdlbmVyYXRlZExpbmUgPSAxLCBsYXN0R2VuZXJhdGVkQ29sdW1uID0gMDtcblxuICAgIC8vIFRoZSBnZW5lcmF0ZSBTb3VyY2VOb2RlcyB3ZSBuZWVkIGEgY29kZSByYW5nZS5cbiAgICAvLyBUbyBleHRyYWN0IGl0IGN1cnJlbnQgYW5kIGxhc3QgbWFwcGluZyBpcyB1c2VkLlxuICAgIC8vIEhlcmUgd2Ugc3RvcmUgdGhlIGxhc3QgbWFwcGluZy5cbiAgICB2YXIgbGFzdE1hcHBpbmcgPSBudWxsO1xuXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLmVhY2hNYXBwaW5nKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICBpZiAobGFzdE1hcHBpbmcgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UgYWRkIHRoZSBjb2RlIGZyb20gXCJsYXN0TWFwcGluZ1wiIHRvIFwibWFwcGluZ1wiOlxuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIG5ldyBsaW5lIGluIGJldHdlZW4uXG4gICAgICAgIGlmIChsYXN0R2VuZXJhdGVkTGluZSA8IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIC8vIEFzc29jaWF0ZSBmaXJzdCBsaW5lIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBzaGlmdE5leHRMaW5lKCkpO1xuICAgICAgICAgIGxhc3RHZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgICAgLy8gVGhlIHJlbWFpbmluZyBjb2RlIGlzIGFkZGVkIHdpdGhvdXQgbWFwcGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIG5ldyBsaW5lIGluIGJldHdlZW4uXG4gICAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSBjb2RlIGJldHdlZW4gXCJsYXN0R2VuZXJhdGVkQ29sdW1uXCIgYW5kXG4gICAgICAgICAgLy8gXCJtYXBwaW5nLmdlbmVyYXRlZENvbHVtblwiIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgICAgdmFyIG5leHRMaW5lID0gcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gfHwgJyc7XG4gICAgICAgICAgdmFyIGNvZGUgPSBuZXh0TGluZS5zdWJzdHIoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICAgIHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdID0gbmV4dExpbmUuc3Vic3RyKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBjb2RlKTtcbiAgICAgICAgICAvLyBObyBtb3JlIHJlbWFpbmluZyBjb2RlLCBjb250aW51ZVxuICAgICAgICAgIGxhc3RNYXBwaW5nID0gbWFwcGluZztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFdlIGFkZCB0aGUgZ2VuZXJhdGVkIGNvZGUgdW50aWwgdGhlIGZpcnN0IG1hcHBpbmdcbiAgICAgIC8vIHRvIHRoZSBTb3VyY2VOb2RlIHdpdGhvdXQgYW55IG1hcHBpbmcuXG4gICAgICAvLyBFYWNoIGxpbmUgaXMgYWRkZWQgYXMgc2VwYXJhdGUgc3RyaW5nLlxuICAgICAgd2hpbGUgKGxhc3RHZW5lcmF0ZWRMaW5lIDwgbWFwcGluZy5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIG5vZGUuYWRkKHNoaWZ0TmV4dExpbmUoKSk7XG4gICAgICAgIGxhc3RHZW5lcmF0ZWRMaW5lKys7XG4gICAgICB9XG4gICAgICBpZiAobGFzdEdlbmVyYXRlZENvbHVtbiA8IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKSB7XG4gICAgICAgIHZhciBuZXh0TGluZSA9IHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdIHx8ICcnO1xuICAgICAgICBub2RlLmFkZChuZXh0TGluZS5zdWJzdHIoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pKTtcbiAgICAgICAgcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gPSBuZXh0TGluZS5zdWJzdHIobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICB9XG4gICAgICBsYXN0TWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfSwgdGhpcyk7XG4gICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG1hcHBpbmdzLlxuICAgIGlmIChyZW1haW5pbmdMaW5lc0luZGV4IDwgcmVtYWluaW5nTGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAobGFzdE1hcHBpbmcpIHtcbiAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSByZW1haW5pbmcgY29kZSBpbiB0aGUgY3VycmVudCBsaW5lIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgc2hpZnROZXh0TGluZSgpKTtcbiAgICAgIH1cbiAgICAgIC8vIGFuZCBhZGQgdGhlIHJlbWFpbmluZyBsaW5lcyB3aXRob3V0IGFueSBtYXBwaW5nXG4gICAgICBub2RlLmFkZChyZW1haW5pbmdMaW5lcy5zcGxpY2UocmVtYWluaW5nTGluZXNJbmRleCkuam9pbihcIlwiKSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzb3VyY2VzQ29udGVudCBpbnRvIFNvdXJjZU5vZGVcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYVJlbGF0aXZlUGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgc291cmNlRmlsZSA9IHV0aWwuam9pbihhUmVsYXRpdmVQYXRoLCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcblxuICAgIGZ1bmN0aW9uIGFkZE1hcHBpbmdXaXRoQ29kZShtYXBwaW5nLCBjb2RlKSB7XG4gICAgICBpZiAobWFwcGluZyA9PT0gbnVsbCB8fCBtYXBwaW5nLnNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUuYWRkKGNvZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFSZWxhdGl2ZVBhdGhcbiAgICAgICAgICA/IHV0aWwuam9pbihhUmVsYXRpdmVQYXRoLCBtYXBwaW5nLnNvdXJjZSlcbiAgICAgICAgICA6IG1hcHBpbmcuc291cmNlO1xuICAgICAgICBub2RlLmFkZChuZXcgU291cmNlTm9kZShtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nLm5hbWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogQWRkIGEgY2h1bmsgb2YgZ2VuZXJhdGVkIEpTIHRvIHRoaXMgc291cmNlIG5vZGUuXG4gKlxuICogQHBhcmFtIGFDaHVuayBBIHN0cmluZyBzbmlwcGV0IG9mIGdlbmVyYXRlZCBKUyBjb2RlLCBhbm90aGVyIGluc3RhbmNlIG9mXG4gKiAgICAgICAgU291cmNlTm9kZSwgb3IgYW4gYXJyYXkgd2hlcmUgZWFjaCBtZW1iZXIgaXMgb25lIG9mIHRob3NlIHRoaW5ncy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gU291cmNlTm9kZV9hZGQoYUNodW5rKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFDaHVuaykpIHtcbiAgICBhQ2h1bmsuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgIHRoaXMuYWRkKGNodW5rKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuICBlbHNlIGlmIChhQ2h1bmtbaXNTb3VyY2VOb2RlXSB8fCB0eXBlb2YgYUNodW5rID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKGFDaHVuaykge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGFDaHVuayk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBcIkV4cGVjdGVkIGEgU291cmNlTm9kZSwgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBTb3VyY2VOb2RlcyBhbmQgc3RyaW5ncy4gR290IFwiICsgYUNodW5rXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgY2h1bmsgb2YgZ2VuZXJhdGVkIEpTIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhpcyBzb3VyY2Ugbm9kZS5cbiAqXG4gKiBAcGFyYW0gYUNodW5rIEEgc3RyaW5nIHNuaXBwZXQgb2YgZ2VuZXJhdGVkIEpTIGNvZGUsIGFub3RoZXIgaW5zdGFuY2Ugb2ZcbiAqICAgICAgICBTb3VyY2VOb2RlLCBvciBhbiBhcnJheSB3aGVyZSBlYWNoIG1lbWJlciBpcyBvbmUgb2YgdGhvc2UgdGhpbmdzLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gU291cmNlTm9kZV9wcmVwZW5kKGFDaHVuaykge1xuICBpZiAoQXJyYXkuaXNBcnJheShhQ2h1bmspKSB7XG4gICAgZm9yICh2YXIgaSA9IGFDaHVuay5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMucHJlcGVuZChhQ2h1bmtbaV0pO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChhQ2h1bmtbaXNTb3VyY2VOb2RlXSB8fCB0eXBlb2YgYUNodW5rID09PSBcInN0cmluZ1wiKSB7XG4gICAgdGhpcy5jaGlsZHJlbi51bnNoaWZ0KGFDaHVuayk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIFwiRXhwZWN0ZWQgYSBTb3VyY2VOb2RlLCBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIFNvdXJjZU5vZGVzIGFuZCBzdHJpbmdzLiBHb3QgXCIgKyBhQ2h1bmtcbiAgICApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXYWxrIG92ZXIgdGhlIHRyZWUgb2YgSlMgc25pcHBldHMgaW4gdGhpcyBub2RlIGFuZCBpdHMgY2hpbGRyZW4uIFRoZVxuICogd2Fsa2luZyBmdW5jdGlvbiBpcyBjYWxsZWQgb25jZSBmb3IgZWFjaCBzbmlwcGV0IG9mIEpTIGFuZCBpcyBwYXNzZWQgdGhhdFxuICogc25pcHBldCBhbmQgdGhlIGl0cyBvcmlnaW5hbCBhc3NvY2lhdGVkIHNvdXJjZSdzIGxpbmUvY29sdW1uIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSBhRm4gVGhlIHRyYXZlcnNhbCBmdW5jdGlvbi5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfd2FsayhhRm4pIHtcbiAgdmFyIGNodW5rO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNodW5rID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICBpZiAoY2h1bmtbaXNTb3VyY2VOb2RlXSkge1xuICAgICAgY2h1bmsud2FsayhhRm4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgYUZuKGNodW5rLCB7IHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBMaWtlIGBTdHJpbmcucHJvdG90eXBlLmpvaW5gIGV4Y2VwdCBmb3IgU291cmNlTm9kZXMuIEluc2VydHMgYGFTdHJgIGJldHdlZW5cbiAqIGVhY2ggb2YgYHRoaXMuY2hpbGRyZW5gLlxuICpcbiAqIEBwYXJhbSBhU2VwIFRoZSBzZXBhcmF0b3IuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiBTb3VyY2VOb2RlX2pvaW4oYVNlcCkge1xuICB2YXIgbmV3Q2hpbGRyZW47XG4gIHZhciBpO1xuICB2YXIgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuLTE7IGkrKykge1xuICAgICAgbmV3Q2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICAgIG5ld0NoaWxkcmVuLnB1c2goYVNlcCk7XG4gICAgfVxuICAgIG5ld0NoaWxkcmVuLnB1c2godGhpcy5jaGlsZHJlbltpXSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ld0NoaWxkcmVuO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSBvbiB0aGUgdmVyeSByaWdodC1tb3N0IHNvdXJjZSBzbmlwcGV0LiBVc2VmdWxcbiAqIGZvciB0cmltbWluZyB3aGl0ZXNwYWNlIGZyb20gdGhlIGVuZCBvZiBhIHNvdXJjZSBub2RlLCBldGMuXG4gKlxuICogQHBhcmFtIGFQYXR0ZXJuIFRoZSBwYXR0ZXJuIHRvIHJlcGxhY2UuXG4gKiBAcGFyYW0gYVJlcGxhY2VtZW50IFRoZSB0aGluZyB0byByZXBsYWNlIHRoZSBwYXR0ZXJuIHdpdGguXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnJlcGxhY2VSaWdodCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfcmVwbGFjZVJpZ2h0KGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpIHtcbiAgdmFyIGxhc3RDaGlsZCA9IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgaWYgKGxhc3RDaGlsZFtpc1NvdXJjZU5vZGVdKSB7XG4gICAgbGFzdENoaWxkLnJlcGxhY2VSaWdodChhUGF0dGVybiwgYVJlcGxhY2VtZW50KTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgbGFzdENoaWxkID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IGxhc3RDaGlsZC5yZXBsYWNlKGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCgnJy5yZXBsYWNlKGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBzb3VyY2UgY29udGVudCBmb3IgYSBzb3VyY2UgZmlsZS4gVGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3JcbiAqIGluIHRoZSBzb3VyY2VzQ29udGVudCBmaWVsZC5cbiAqXG4gKiBAcGFyYW0gYVNvdXJjZUZpbGUgVGhlIGZpbGVuYW1lIG9mIHRoZSBzb3VyY2UgZmlsZVxuICogQHBhcmFtIGFTb3VyY2VDb250ZW50IFRoZSBjb250ZW50IG9mIHRoZSBzb3VyY2UgZmlsZVxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5zZXRTb3VyY2VDb250ZW50ID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV9zZXRTb3VyY2VDb250ZW50KGFTb3VyY2VGaWxlLCBhU291cmNlQ29udGVudCkge1xuICAgIHRoaXMuc291cmNlQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhhU291cmNlRmlsZSldID0gYVNvdXJjZUNvbnRlbnQ7XG4gIH07XG5cbi8qKlxuICogV2FsayBvdmVyIHRoZSB0cmVlIG9mIFNvdXJjZU5vZGVzLiBUaGUgd2Fsa2luZyBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIGVhY2hcbiAqIHNvdXJjZSBmaWxlIGNvbnRlbnQgYW5kIGlzIHBhc3NlZCB0aGUgZmlsZW5hbWUgYW5kIHNvdXJjZSBjb250ZW50LlxuICpcbiAqIEBwYXJhbSBhRm4gVGhlIHRyYXZlcnNhbCBmdW5jdGlvbi5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUud2Fsa1NvdXJjZUNvbnRlbnRzID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV93YWxrU291cmNlQ29udGVudHMoYUZuKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldW2lzU291cmNlTm9kZV0pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS53YWxrU291cmNlQ29udGVudHMoYUZuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc291cmNlcyA9IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQ29udGVudHMpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhRm4odXRpbC5mcm9tU2V0U3RyaW5nKHNvdXJjZXNbaV0pLCB0aGlzLnNvdXJjZUNvbnRlbnRzW3NvdXJjZXNbaV1dKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzb3VyY2Ugbm9kZS4gV2Fsa3Mgb3ZlciB0aGUgdHJlZVxuICogYW5kIGNvbmNhdGVuYXRlcyBhbGwgdGhlIHZhcmlvdXMgc25pcHBldHMgdG9nZXRoZXIgdG8gb25lIHN0cmluZy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3RvU3RyaW5nKCkge1xuICB2YXIgc3RyID0gXCJcIjtcbiAgdGhpcy53YWxrKGZ1bmN0aW9uIChjaHVuaykge1xuICAgIHN0ciArPSBjaHVuaztcbiAgfSk7XG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNvdXJjZSBub2RlIGFsb25nIHdpdGggYSBzb3VyY2VcbiAqIG1hcC5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUudG9TdHJpbmdXaXRoU291cmNlTWFwID0gZnVuY3Rpb24gU291cmNlTm9kZV90b1N0cmluZ1dpdGhTb3VyY2VNYXAoYUFyZ3MpIHtcbiAgdmFyIGdlbmVyYXRlZCA9IHtcbiAgICBjb2RlOiBcIlwiLFxuICAgIGxpbmU6IDEsXG4gICAgY29sdW1uOiAwXG4gIH07XG4gIHZhciBtYXAgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKGFBcmdzKTtcbiAgdmFyIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxMaW5lID0gbnVsbDtcbiAgdmFyIGxhc3RPcmlnaW5hbENvbHVtbiA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxOYW1lID0gbnVsbDtcbiAgdGhpcy53YWxrKGZ1bmN0aW9uIChjaHVuaywgb3JpZ2luYWwpIHtcbiAgICBnZW5lcmF0ZWQuY29kZSArPSBjaHVuaztcbiAgICBpZiAob3JpZ2luYWwuc291cmNlICE9PSBudWxsXG4gICAgICAgICYmIG9yaWdpbmFsLmxpbmUgIT09IG51bGxcbiAgICAgICAgJiYgb3JpZ2luYWwuY29sdW1uICE9PSBudWxsKSB7XG4gICAgICBpZihsYXN0T3JpZ2luYWxTb3VyY2UgIT09IG9yaWdpbmFsLnNvdXJjZVxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsTGluZSAhPT0gb3JpZ2luYWwubGluZVxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsQ29sdW1uICE9PSBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbE5hbWUgIT09IG9yaWdpbmFsLm5hbWUpIHtcbiAgICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgIHNvdXJjZTogb3JpZ2luYWwuc291cmNlLFxuICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICBsaW5lOiBvcmlnaW5hbC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgICAgbGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZC5jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IG9yaWdpbmFsLm5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBvcmlnaW5hbC5zb3VyY2U7XG4gICAgICBsYXN0T3JpZ2luYWxMaW5lID0gb3JpZ2luYWwubGluZTtcbiAgICAgIGxhc3RPcmlnaW5hbENvbHVtbiA9IG9yaWdpbmFsLmNvbHVtbjtcbiAgICAgIGxhc3RPcmlnaW5hbE5hbWUgPSBvcmlnaW5hbC5uYW1lO1xuICAgICAgc291cmNlTWFwcGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VNYXBwaW5nQWN0aXZlKSB7XG4gICAgICBtYXAuYWRkTWFwcGluZyh7XG4gICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkLmNvbHVtblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gICAgICBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDAsIGxlbmd0aCA9IGNodW5rLmxlbmd0aDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgaWYgKGNodW5rLmNoYXJDb2RlQXQoaWR4KSA9PT0gTkVXTElORV9DT0RFKSB7XG4gICAgICAgIGdlbmVyYXRlZC5saW5lKys7XG4gICAgICAgIGdlbmVyYXRlZC5jb2x1bW4gPSAwO1xuICAgICAgICAvLyBNYXBwaW5ncyBlbmQgYXQgZW9sXG4gICAgICAgIGlmIChpZHggKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICAgICAgICAgIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VNYXBwaW5nQWN0aXZlKSB7XG4gICAgICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgICAgc291cmNlOiBvcmlnaW5hbC5zb3VyY2UsXG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICBsaW5lOiBvcmlnaW5hbC5saW5lLFxuICAgICAgICAgICAgICBjb2x1bW46IG9yaWdpbmFsLmNvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogb3JpZ2luYWwubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW5lcmF0ZWQuY29sdW1uKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdGhpcy53YWxrU291cmNlQ29udGVudHMoZnVuY3Rpb24gKHNvdXJjZUZpbGUsIHNvdXJjZUNvbnRlbnQpIHtcbiAgICBtYXAuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBzb3VyY2VDb250ZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgY29kZTogZ2VuZXJhdGVkLmNvZGUsIG1hcDogbWFwIH07XG59O1xuXG5leHBvcnRzLlNvdXJjZU5vZGUgPSBTb3VyY2VOb2RlO1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIGdldHRpbmcgdmFsdWVzIGZyb20gcGFyYW1ldGVyL29wdGlvbnNcbiAqIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIGFyZ3MgVGhlIG9iamVjdCB3ZSBhcmUgZXh0cmFjdGluZyB2YWx1ZXMgZnJvbVxuICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdlIGFyZSBnZXR0aW5nLlxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBBbiBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmdcbiAqIGZyb20gdGhlIG9iamVjdC4gSWYgdGhpcyBpcyBub3Qgc3BlY2lmaWVkIGFuZCB0aGUgcHJvcGVydHkgaXMgbWlzc2luZywgYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICovXG5mdW5jdGlvbiBnZXRBcmcoYUFyZ3MsIGFOYW1lLCBhRGVmYXVsdFZhbHVlKSB7XG4gIGlmIChhTmFtZSBpbiBhQXJncykge1xuICAgIHJldHVybiBhQXJnc1thTmFtZV07XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBhRGVmYXVsdFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignXCInICsgYU5hbWUgKyAnXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudC4nKTtcbiAgfVxufVxuZXhwb3J0cy5nZXRBcmcgPSBnZXRBcmc7XG5cbnZhciB1cmxSZWdleHAgPSAvXig/OihbXFx3K1xcLS5dKyk6KT9cXC9cXC8oPzooXFx3KzpcXHcrKUApPyhbXFx3Li1dKikoPzo6KFxcZCspKT8oLiopJC87XG52YXIgZGF0YVVybFJlZ2V4cCA9IC9eZGF0YTouK1xcLC4rJC87XG5cbmZ1bmN0aW9uIHVybFBhcnNlKGFVcmwpIHtcbiAgdmFyIG1hdGNoID0gYVVybC5tYXRjaCh1cmxSZWdleHApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY2hlbWU6IG1hdGNoWzFdLFxuICAgIGF1dGg6IG1hdGNoWzJdLFxuICAgIGhvc3Q6IG1hdGNoWzNdLFxuICAgIHBvcnQ6IG1hdGNoWzRdLFxuICAgIHBhdGg6IG1hdGNoWzVdXG4gIH07XG59XG5leHBvcnRzLnVybFBhcnNlID0gdXJsUGFyc2U7XG5cbmZ1bmN0aW9uIHVybEdlbmVyYXRlKGFQYXJzZWRVcmwpIHtcbiAgdmFyIHVybCA9ICcnO1xuICBpZiAoYVBhcnNlZFVybC5zY2hlbWUpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5zY2hlbWUgKyAnOic7XG4gIH1cbiAgdXJsICs9ICcvLyc7XG4gIGlmIChhUGFyc2VkVXJsLmF1dGgpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5hdXRoICsgJ0AnO1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLmhvc3QpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5ob3N0O1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLnBvcnQpIHtcbiAgICB1cmwgKz0gXCI6XCIgKyBhUGFyc2VkVXJsLnBvcnRcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5wYXRoKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwucGF0aDtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuZXhwb3J0cy51cmxHZW5lcmF0ZSA9IHVybEdlbmVyYXRlO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYSBwYXRoLCBvciB0aGUgcGF0aCBwb3J0aW9uIG9mIGEgVVJMOlxuICpcbiAqIC0gUmVwbGFjZXMgY29uc2VjdXRpdmUgc2xhc2hlcyB3aXRoIG9uZSBzbGFzaC5cbiAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnLicgcGFydHMuXG4gKiAtIFJlbW92ZXMgdW5uZWNlc3NhcnkgJzxkaXI+Ly4uJyBwYXJ0cy5cbiAqXG4gKiBCYXNlZCBvbiBjb2RlIGluIHRoZSBOb2RlLmpzICdwYXRoJyBjb3JlIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgdXJsIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKGFQYXRoKSB7XG4gIHZhciBwYXRoID0gYVBhdGg7XG4gIHZhciB1cmwgPSB1cmxQYXJzZShhUGF0aCk7XG4gIGlmICh1cmwpIHtcbiAgICBpZiAoIXVybC5wYXRoKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuICAgIHBhdGggPSB1cmwucGF0aDtcbiAgfVxuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKTtcblxuICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KC9cXC8rLyk7XG4gIGZvciAodmFyIHBhcnQsIHVwID0gMCwgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcGFydCA9IHBhcnRzW2ldO1xuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCA+IDApIHtcbiAgICAgIGlmIChwYXJ0ID09PSAnJykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgcGFydCBpcyBibGFuayBpZiB0aGUgcGF0aCBpcyBhYnNvbHV0ZS4gVHJ5aW5nIHRvIGdvXG4gICAgICAgIC8vIGFib3ZlIHRoZSByb290IGlzIGEgbm8tb3AuIFRoZXJlZm9yZSB3ZSBjYW4gcmVtb3ZlIGFsbCAnLi4nIHBhcnRzXG4gICAgICAgIC8vIGRpcmVjdGx5IGFmdGVyIHRoZSByb290LlxuICAgICAgICBwYXJ0cy5zcGxpY2UoaSArIDEsIHVwKTtcbiAgICAgICAgdXAgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMuc3BsaWNlKGksIDIpO1xuICAgICAgICB1cC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXRoID0gcGFydHMuam9pbignLycpO1xuXG4gIGlmIChwYXRoID09PSAnJykge1xuICAgIHBhdGggPSBpc0Fic29sdXRlID8gJy8nIDogJy4nO1xuICB9XG5cbiAgaWYgKHVybCkge1xuICAgIHVybC5wYXRoID0gcGF0aDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUodXJsKTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplO1xuXG4vKipcbiAqIEpvaW5zIHR3byBwYXRocy9VUkxzLlxuICpcbiAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgam9pbmVkIHdpdGggdGhlIHJvb3QuXG4gKlxuICogLSBJZiBhUGF0aCBpcyBhIFVSTCBvciBhIGRhdGEgVVJJLCBhUGF0aCBpcyByZXR1cm5lZCwgdW5sZXNzIGFQYXRoIGlzIGFcbiAqICAgc2NoZW1lLXJlbGF0aXZlIFVSTDogVGhlbiB0aGUgc2NoZW1lIG9mIGFSb290LCBpZiBhbnksIGlzIHByZXBlbmRlZFxuICogICBmaXJzdC5cbiAqIC0gT3RoZXJ3aXNlIGFQYXRoIGlzIGEgcGF0aC4gSWYgYVJvb3QgaXMgYSBVUkwsIHRoZW4gaXRzIHBhdGggcG9ydGlvblxuICogICBpcyB1cGRhdGVkIHdpdGggdGhlIHJlc3VsdCBhbmQgYVJvb3QgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSB0aGUgcmVzdWx0XG4gKiAgIGlzIHJldHVybmVkLlxuICogICAtIElmIGFQYXRoIGlzIGFic29sdXRlLCB0aGUgcmVzdWx0IGlzIGFQYXRoLlxuICogICAtIE90aGVyd2lzZSB0aGUgdHdvIHBhdGhzIGFyZSBqb2luZWQgd2l0aCBhIHNsYXNoLlxuICogLSBKb2luaW5nIGZvciBleGFtcGxlICdodHRwOi8vJyBhbmQgJ3d3dy5leGFtcGxlLmNvbScgaXMgYWxzbyBzdXBwb3J0ZWQuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oYVJvb3QsIGFQYXRoKSB7XG4gIGlmIChhUm9vdCA9PT0gXCJcIikge1xuICAgIGFSb290ID0gXCIuXCI7XG4gIH1cbiAgaWYgKGFQYXRoID09PSBcIlwiKSB7XG4gICAgYVBhdGggPSBcIi5cIjtcbiAgfVxuICB2YXIgYVBhdGhVcmwgPSB1cmxQYXJzZShhUGF0aCk7XG4gIHZhciBhUm9vdFVybCA9IHVybFBhcnNlKGFSb290KTtcbiAgaWYgKGFSb290VXJsKSB7XG4gICAgYVJvb3QgPSBhUm9vdFVybC5wYXRoIHx8ICcvJztcbiAgfVxuXG4gIC8vIGBqb2luKGZvbywgJy8vd3d3LmV4YW1wbGUub3JnJylgXG4gIGlmIChhUGF0aFVybCAmJiAhYVBhdGhVcmwuc2NoZW1lKSB7XG4gICAgaWYgKGFSb290VXJsKSB7XG4gICAgICBhUGF0aFVybC5zY2hlbWUgPSBhUm9vdFVybC5zY2hlbWU7XG4gICAgfVxuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUGF0aFVybCk7XG4gIH1cblxuICBpZiAoYVBhdGhVcmwgfHwgYVBhdGgubWF0Y2goZGF0YVVybFJlZ2V4cCkpIHtcbiAgICByZXR1cm4gYVBhdGg7XG4gIH1cblxuICAvLyBgam9pbignaHR0cDovLycsICd3d3cuZXhhbXBsZS5jb20nKWBcbiAgaWYgKGFSb290VXJsICYmICFhUm9vdFVybC5ob3N0ICYmICFhUm9vdFVybC5wYXRoKSB7XG4gICAgYVJvb3RVcmwuaG9zdCA9IGFQYXRoO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG4gIH1cblxuICB2YXIgam9pbmVkID0gYVBhdGguY2hhckF0KDApID09PSAnLydcbiAgICA/IGFQYXRoXG4gICAgOiBub3JtYWxpemUoYVJvb3QucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyBhUGF0aCk7XG5cbiAgaWYgKGFSb290VXJsKSB7XG4gICAgYVJvb3RVcmwucGF0aCA9IGpvaW5lZDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuICB9XG4gIHJldHVybiBqb2luZWQ7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbiAoYVBhdGgpIHtcbiAgcmV0dXJuIGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nIHx8IHVybFJlZ2V4cC50ZXN0KGFQYXRoKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIHBhdGggcmVsYXRpdmUgdG8gYSBVUkwgb3IgYW5vdGhlciBwYXRoLlxuICpcbiAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgbWFkZSByZWxhdGl2ZSB0byBhUm9vdC5cbiAqL1xuZnVuY3Rpb24gcmVsYXRpdmUoYVJvb3QsIGFQYXRoKSB7XG4gIGlmIChhUm9vdCA9PT0gXCJcIikge1xuICAgIGFSb290ID0gXCIuXCI7XG4gIH1cblxuICBhUm9vdCA9IGFSb290LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgLy8gSXQgaXMgcG9zc2libGUgZm9yIHRoZSBwYXRoIHRvIGJlIGFib3ZlIHRoZSByb290LiBJbiB0aGlzIGNhc2UsIHNpbXBseVxuICAvLyBjaGVja2luZyB3aGV0aGVyIHRoZSByb290IGlzIGEgcHJlZml4IG9mIHRoZSBwYXRoIHdvbid0IHdvcmsuIEluc3RlYWQsIHdlXG4gIC8vIG5lZWQgdG8gcmVtb3ZlIGNvbXBvbmVudHMgZnJvbSB0aGUgcm9vdCBvbmUgYnkgb25lLCB1bnRpbCBlaXRoZXIgd2UgZmluZFxuICAvLyBhIHByZWZpeCB0aGF0IGZpdHMsIG9yIHdlIHJ1biBvdXQgb2YgY29tcG9uZW50cyB0byByZW1vdmUuXG4gIHZhciBsZXZlbCA9IDA7XG4gIHdoaWxlIChhUGF0aC5pbmRleE9mKGFSb290ICsgJy8nKSAhPT0gMCkge1xuICAgIHZhciBpbmRleCA9IGFSb290Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG9ubHkgcGFydCBvZiB0aGUgcm9vdCB0aGF0IGlzIGxlZnQgaXMgdGhlIHNjaGVtZSAoaS5lLiBodHRwOi8vLFxuICAgIC8vIGZpbGU6Ly8vLCBldGMuKSwgb25lIG9yIG1vcmUgc2xhc2hlcyAoLyksIG9yIHNpbXBseSBub3RoaW5nIGF0IGFsbCwgd2VcbiAgICAvLyBoYXZlIGV4aGF1c3RlZCBhbGwgY29tcG9uZW50cywgc28gdGhlIHBhdGggaXMgbm90IHJlbGF0aXZlIHRvIHRoZSByb290LlxuICAgIGFSb290ID0gYVJvb3Quc2xpY2UoMCwgaW5kZXgpO1xuICAgIGlmIChhUm9vdC5tYXRjaCgvXihbXlxcL10rOlxcLyk/XFwvKiQvKSkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cblxuICAgICsrbGV2ZWw7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2UgYWRkIGEgXCIuLi9cIiBmb3IgZWFjaCBjb21wb25lbnQgd2UgcmVtb3ZlZCBmcm9tIHRoZSByb290LlxuICByZXR1cm4gQXJyYXkobGV2ZWwgKyAxKS5qb2luKFwiLi4vXCIpICsgYVBhdGguc3Vic3RyKGFSb290Lmxlbmd0aCArIDEpO1xufVxuZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlO1xuXG52YXIgc3VwcG9ydHNOdWxsUHJvdG8gPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuICEoJ19fcHJvdG9fXycgaW4gb2JqKTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGlkZW50aXR5IChzKSB7XG4gIHJldHVybiBzO1xufVxuXG4vKipcbiAqIEJlY2F1c2UgYmVoYXZpb3IgZ29lcyB3YWNreSB3aGVuIHlvdSBzZXQgYF9fcHJvdG9fX2Agb24gb2JqZWN0cywgd2VcbiAqIGhhdmUgdG8gcHJlZml4IGFsbCB0aGUgc3RyaW5ncyBpbiBvdXIgc2V0IHdpdGggYW4gYXJiaXRyYXJ5IGNoYXJhY3Rlci5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9wdWxsLzMxIGFuZFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMzBcbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuZnVuY3Rpb24gdG9TZXRTdHJpbmcoYVN0cikge1xuICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuICAgIHJldHVybiAnJCcgKyBhU3RyO1xuICB9XG5cbiAgcmV0dXJuIGFTdHI7XG59XG5leHBvcnRzLnRvU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IHRvU2V0U3RyaW5nO1xuXG5mdW5jdGlvbiBmcm9tU2V0U3RyaW5nKGFTdHIpIHtcbiAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcbiAgICByZXR1cm4gYVN0ci5zbGljZSgxKTtcbiAgfVxuXG4gIHJldHVybiBhU3RyO1xufVxuZXhwb3J0cy5mcm9tU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IGZyb21TZXRTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzUHJvdG9TdHJpbmcocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCA8IDkgLyogXCJfX3Byb3RvX19cIi5sZW5ndGggKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocy5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMikgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSAzKSAhPT0gMTExIC8qICdvJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDQpICE9PSAxMTYgLyogJ3QnICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNSkgIT09IDExMSAvKiAnbycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA2KSAhPT0gMTE0IC8qICdyJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDcpICE9PSAxMTIgLyogJ3AnICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOCkgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA5KSAhPT0gOTUgIC8qICdfJyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBsZW5ndGggLSAxMDsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocy5jaGFyQ29kZUF0KGkpICE9PSAzNiAvKiAnJCcgKi8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdoZXJlIHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cbiAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uLCBidXQgZGlmZmVyZW50IGdlbmVyYXRlZFxuICogbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGEgbWFwcGluZyB3aXRoIGFcbiAqIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVPcmlnaW5hbCkge1xuICB2YXIgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyA9IGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zO1xuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBkZWZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgaW5kaWNlcyB3aGVyZVxuICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cbiAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiwgYnV0IGRpZmZlcmVudFxuICogc291cmNlL25hbWUvb3JpZ2luYWwgbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGFcbiAqIG1hcHBpbmcgd2l0aCBhIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVHZW5lcmF0ZWQpIHtcbiAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkID0gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQ7XG5cbmZ1bmN0aW9uIHN0cmNtcChhU3RyMSwgYVN0cjIpIHtcbiAgaWYgKGFTdHIxID09PSBhU3RyMikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGFTdHIxID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDE7IC8vIGFTdHIyICE9PSBudWxsXG4gIH1cblxuICBpZiAoYVN0cjIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gLTE7IC8vIGFTdHIxICE9PSBudWxsXG4gIH1cblxuICBpZiAoYVN0cjEgPiBhU3RyMikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBpbmZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgc3RyaW5ncyB3aGVyZVxuICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IpIHtcbiAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkID0gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQ7XG5cbi8qKlxuICogU3RyaXAgYW55IEpTT04gWFNTSSBhdm9pZGFuY2UgcHJlZml4IGZyb20gdGhlIHN0cmluZyAoYXMgZG9jdW1lbnRlZFxuICogaW4gdGhlIHNvdXJjZSBtYXBzIHNwZWNpZmljYXRpb24pLCBhbmQgdGhlbiBwYXJzZSB0aGUgc3RyaW5nIGFzXG4gKiBKU09OLlxuICovXG5mdW5jdGlvbiBwYXJzZVNvdXJjZU1hcElucHV0KHN0cikge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIucmVwbGFjZSgvXlxcKV19J1teXFxuXSpcXG4vLCAnJykpO1xufVxuZXhwb3J0cy5wYXJzZVNvdXJjZU1hcElucHV0ID0gcGFyc2VTb3VyY2VNYXBJbnB1dDtcblxuLyoqXG4gKiBDb21wdXRlIHRoZSBVUkwgb2YgYSBzb3VyY2UgZ2l2ZW4gdGhlIHRoZSBzb3VyY2Ugcm9vdCwgdGhlIHNvdXJjZSdzXG4gKiBVUkwsIGFuZCB0aGUgc291cmNlIG1hcCdzIFVSTC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzb3VyY2VVUkwsIHNvdXJjZU1hcFVSTCkge1xuICBzb3VyY2VVUkwgPSBzb3VyY2VVUkwgfHwgJyc7XG5cbiAgaWYgKHNvdXJjZVJvb3QpIHtcbiAgICAvLyBUaGlzIGZvbGxvd3Mgd2hhdCBDaHJvbWUgZG9lcy5cbiAgICBpZiAoc291cmNlUm9vdFtzb3VyY2VSb290Lmxlbmd0aCAtIDFdICE9PSAnLycgJiYgc291cmNlVVJMWzBdICE9PSAnLycpIHtcbiAgICAgIHNvdXJjZVJvb3QgKz0gJy8nO1xuICAgIH1cbiAgICAvLyBUaGUgc3BlYyBzYXlzOlxuICAgIC8vICAgTGluZSA0OiBBbiBvcHRpb25hbCBzb3VyY2Ugcm9vdCwgdXNlZnVsIGZvciByZWxvY2F0aW5nIHNvdXJjZVxuICAgIC8vICAgZmlsZXMgb24gYSBzZXJ2ZXIgb3IgcmVtb3ZpbmcgcmVwZWF0ZWQgdmFsdWVzIGluIHRoZVxuICAgIC8vICAg4oCcc291cmNlc+KAnSBlbnRyeS4gIFRoaXMgdmFsdWUgaXMgcHJlcGVuZGVkIHRvIHRoZSBpbmRpdmlkdWFsXG4gICAgLy8gICBlbnRyaWVzIGluIHRoZSDigJxzb3VyY2XigJ0gZmllbGQuXG4gICAgc291cmNlVVJMID0gc291cmNlUm9vdCArIHNvdXJjZVVSTDtcbiAgfVxuXG4gIC8vIEhpc3RvcmljYWxseSwgU291cmNlTWFwQ29uc3VtZXIgZGlkIG5vdCB0YWtlIHRoZSBzb3VyY2VNYXBVUkwgYXNcbiAgLy8gYSBwYXJhbWV0ZXIuICBUaGlzIG1vZGUgaXMgc3RpbGwgc29tZXdoYXQgc3VwcG9ydGVkLCB3aGljaCBpcyB3aHlcbiAgLy8gdGhpcyBjb2RlIGJsb2NrIGlzIGNvbmRpdGlvbmFsLiAgSG93ZXZlciwgaXQncyBwcmVmZXJhYmxlIHRvIHBhc3NcbiAgLy8gdGhlIHNvdXJjZSBtYXAgVVJMIHRvIFNvdXJjZU1hcENvbnN1bWVyLCBzbyB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gY2FuIGltcGxlbWVudCB0aGUgc291cmNlIFVSTCByZXNvbHV0aW9uIGFsZ29yaXRobSBhcyBvdXRsaW5lZCBpblxuICAvLyB0aGUgc3BlYy4gIFRoaXMgYmxvY2sgaXMgYmFzaWNhbGx5IHRoZSBlcXVpdmFsZW50IG9mOlxuICAvLyAgICBuZXcgVVJMKHNvdXJjZVVSTCwgc291cmNlTWFwVVJMKS50b1N0cmluZygpXG4gIC8vIC4uLiBleGNlcHQgaXQgYXZvaWRzIHVzaW5nIFVSTCwgd2hpY2ggd2Fzbid0IGF2YWlsYWJsZSBpbiB0aGVcbiAgLy8gb2xkZXIgcmVsZWFzZXMgb2Ygbm9kZSBzdGlsbCBzdXBwb3J0ZWQgYnkgdGhpcyBsaWJyYXJ5LlxuICAvL1xuICAvLyBUaGUgc3BlYyBzYXlzOlxuICAvLyAgIElmIHRoZSBzb3VyY2VzIGFyZSBub3QgYWJzb2x1dGUgVVJMcyBhZnRlciBwcmVwZW5kaW5nIG9mIHRoZVxuICAvLyAgIOKAnHNvdXJjZVJvb3TigJ0sIHRoZSBzb3VyY2VzIGFyZSByZXNvbHZlZCByZWxhdGl2ZSB0byB0aGVcbiAgLy8gICBTb3VyY2VNYXAgKGxpa2UgcmVzb2x2aW5nIHNjcmlwdCBzcmMgaW4gYSBodG1sIGRvY3VtZW50KS5cbiAgaWYgKHNvdXJjZU1hcFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1cmxQYXJzZShzb3VyY2VNYXBVUkwpO1xuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb3VyY2VNYXBVUkwgY291bGQgbm90IGJlIHBhcnNlZFwiKTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5wYXRoKSB7XG4gICAgICAvLyBTdHJpcCB0aGUgbGFzdCBwYXRoIGNvbXBvbmVudCwgYnV0IGtlZXAgdGhlIFwiL1wiLlxuICAgICAgdmFyIGluZGV4ID0gcGFyc2VkLnBhdGgubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHBhcnNlZC5wYXRoID0gcGFyc2VkLnBhdGguc3Vic3RyaW5nKDAsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZVVSTCA9IGpvaW4odXJsR2VuZXJhdGUocGFyc2VkKSwgc291cmNlVVJMKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemUoc291cmNlVVJMKTtcbn1cbmV4cG9ydHMuY29tcHV0ZVNvdXJjZVVSTCA9IGNvbXB1dGVTb3VyY2VVUkw7XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDktMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0UudHh0IG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5leHBvcnRzLlNvdXJjZU1hcEdlbmVyYXRvciA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yJykuU291cmNlTWFwR2VuZXJhdG9yO1xuZXhwb3J0cy5Tb3VyY2VNYXBDb25zdW1lciA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1tYXAtY29uc3VtZXInKS5Tb3VyY2VNYXBDb25zdW1lcjtcbmV4cG9ydHMuU291cmNlTm9kZSA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1ub2RlJykuU291cmNlTm9kZTtcbiIsInZhciBTb3VyY2VNYXBDb25zdW1lciA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKS5Tb3VyY2VNYXBDb25zdW1lcjtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG52YXIgZnM7XG50cnkge1xuICBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gIGlmICghZnMuZXhpc3RzU3luYyB8fCAhZnMucmVhZEZpbGVTeW5jKSB7XG4gICAgLy8gZnMgZG9lc24ndCBoYXZlIGFsbCBtZXRob2RzIHdlIG5lZWRcbiAgICBmcyA9IG51bGw7XG4gIH1cbn0gY2F0Y2ggKGVycikge1xuICAvKiBub3AgKi9cbn1cblxudmFyIGJ1ZmZlckZyb20gPSByZXF1aXJlKCdidWZmZXItZnJvbScpO1xuXG4vKipcbiAqIFJlcXVpcmVzIGEgbW9kdWxlIHdoaWNoIGlzIHByb3RlY3RlZCBhZ2FpbnN0IGJ1bmRsZXIgbWluaWZpY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7Tm9kZU1vZHVsZX0gbW9kXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFxuICovXG5mdW5jdGlvbiBkeW5hbWljUmVxdWlyZShtb2QsIHJlcXVlc3QpIHtcbiAgcmV0dXJuIG1vZC5yZXF1aXJlKHJlcXVlc3QpO1xufVxuXG4vLyBPbmx5IGluc3RhbGwgb25jZSBpZiBjYWxsZWQgbXVsdGlwbGUgdGltZXNcbnZhciBlcnJvckZvcm1hdHRlckluc3RhbGxlZCA9IGZhbHNlO1xudmFyIHVuY2F1Z2h0U2hpbUluc3RhbGxlZCA9IGZhbHNlO1xuXG4vLyBJZiB0cnVlLCB0aGUgY2FjaGVzIGFyZSByZXNldCBiZWZvcmUgYSBzdGFjayB0cmFjZSBmb3JtYXR0aW5nIG9wZXJhdGlvblxudmFyIGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA9IGZhbHNlO1xuXG4vLyBTdXBwb3J0cyB7YnJvd3Nlciwgbm9kZSwgYXV0b31cbnZhciBlbnZpcm9ubWVudCA9IFwiYXV0b1wiO1xuXG4vLyBNYXBzIGEgZmlsZSBwYXRoIHRvIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGZpbGUgY29udGVudHNcbnZhciBmaWxlQ29udGVudHNDYWNoZSA9IHt9O1xuXG4vLyBNYXBzIGEgZmlsZSBwYXRoIHRvIGEgc291cmNlIG1hcCBmb3IgdGhhdCBmaWxlXG52YXIgc291cmNlTWFwQ2FjaGUgPSB7fTtcblxuLy8gUmVnZXggZm9yIGRldGVjdGluZyBzb3VyY2UgbWFwc1xudmFyIHJlU291cmNlTWFwID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvblteLF0rYmFzZTY0LC87XG5cbi8vIFByaW9yaXR5IGxpc3Qgb2YgcmV0cmlldmUgaGFuZGxlcnNcbnZhciByZXRyaWV2ZUZpbGVIYW5kbGVycyA9IFtdO1xudmFyIHJldHJpZXZlTWFwSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gaXNJbkJyb3dzZXIoKSB7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJicm93c2VyXCIpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJub2RlXCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJykgJiYgISh3aW5kb3cucmVxdWlyZSAmJiB3aW5kb3cubW9kdWxlICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09IFwicmVuZGVyZXJcIikpO1xufVxuXG5mdW5jdGlvbiBoYXNHbG9iYWxQcm9jZXNzRXZlbnRFbWl0dGVyKCkge1xuICByZXR1cm4gKCh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpICYmIChwcm9jZXNzICE9PSBudWxsKSAmJiAodHlwZW9mIHByb2Nlc3Mub24gPT09ICdmdW5jdGlvbicpKTtcbn1cblxuZnVuY3Rpb24gZ2xvYmFsUHJvY2Vzc1ZlcnNpb24oKSB7XG4gIGlmICgodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSAmJiAocHJvY2VzcyAhPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy52ZXJzaW9uO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnbG9iYWxQcm9jZXNzU3RkZXJyKCkge1xuICBpZiAoKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgJiYgKHByb2Nlc3MgIT09IG51bGwpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3Muc3RkZXJyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdsb2JhbFByb2Nlc3NFeGl0KGNvZGUpIHtcbiAgaWYgKCh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpICYmIChwcm9jZXNzICE9PSBudWxsKSAmJiAodHlwZW9mIHByb2Nlc3MuZXhpdCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5leGl0KGNvZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZXJFeGVjKGxpc3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJldCA9IGxpc3RbaV0oYXJnKTtcbiAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbnZhciByZXRyaWV2ZUZpbGUgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZUZpbGVIYW5kbGVycyk7XG5cbnJldHJpZXZlRmlsZUhhbmRsZXJzLnB1c2goZnVuY3Rpb24ocGF0aCkge1xuICAvLyBUcmltIHRoZSBwYXRoIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBubyBleHRyYSB3aGl0ZXNwYWNlLlxuICBwYXRoID0gcGF0aC50cmltKCk7XG4gIGlmICgvXmZpbGU6Ly50ZXN0KHBhdGgpKSB7XG4gICAgLy8gZXhpc3RzU3luYy9yZWFkRmlsZVN5bmMgY2FuJ3QgaGFuZGxlIGZpbGUgcHJvdG9jb2wsIGJ1dCBvbmNlIHN0cmlwcGVkLCBpdCB3b3Jrc1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL2ZpbGU6XFwvXFwvXFwvKFxcdzopPy8sIGZ1bmN0aW9uKHByb3RvY29sLCBkcml2ZSkge1xuICAgICAgcmV0dXJuIGRyaXZlID9cbiAgICAgICAgJycgOiAvLyBmaWxlOi8vL0M6L2Rpci9maWxlIC0+IEM6L2Rpci9maWxlXG4gICAgICAgICcvJzsgLy8gZmlsZTovLy9yb290LWRpci9maWxlIC0+IC9yb290LWRpci9maWxlXG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhdGggaW4gZmlsZUNvbnRlbnRzQ2FjaGUpIHtcbiAgICByZXR1cm4gZmlsZUNvbnRlbnRzQ2FjaGVbcGF0aF07XG4gIH1cblxuICB2YXIgY29udGVudHMgPSAnJztcbiAgdHJ5IHtcbiAgICBpZiAoIWZzKSB7XG4gICAgICAvLyBVc2UgU0pBWCBpZiB3ZSBhcmUgaW4gdGhlIGJyb3dzZXJcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoLCAvKiogYXN5bmMgKi8gZmFsc2UpO1xuICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnRlbnRzID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgdXNlIHRoZSBmaWxlc3lzdGVtXG4gICAgICBjb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCAndXRmOCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXIpIHtcbiAgICAvKiBpZ25vcmUgYW55IGVycm9ycyAqL1xuICB9XG5cbiAgcmV0dXJuIGZpbGVDb250ZW50c0NhY2hlW3BhdGhdID0gY29udGVudHM7XG59KTtcblxuLy8gU3VwcG9ydCBVUkxzIHJlbGF0aXZlIHRvIGEgZGlyZWN0b3J5LCBidXQgYmUgY2FyZWZ1bCBhYm91dCBhIHByb3RvY29sIHByZWZpeFxuLy8gaW4gY2FzZSB3ZSBhcmUgaW4gdGhlIGJyb3dzZXIgKGkuZS4gZGlyZWN0b3JpZXMgbWF5IHN0YXJ0IHdpdGggXCJodHRwOi8vXCIgb3IgXCJmaWxlOi8vL1wiKVxuZnVuY3Rpb24gc3VwcG9ydFJlbGF0aXZlVVJMKGZpbGUsIHVybCkge1xuICBpZiAoIWZpbGUpIHJldHVybiB1cmw7XG4gIHZhciBkaXIgPSBwYXRoLmRpcm5hbWUoZmlsZSk7XG4gIHZhciBtYXRjaCA9IC9eXFx3KzpcXC9cXC9bXlxcL10qLy5leGVjKGRpcik7XG4gIHZhciBwcm90b2NvbCA9IG1hdGNoID8gbWF0Y2hbMF0gOiAnJztcbiAgdmFyIHN0YXJ0UGF0aCA9IGRpci5zbGljZShwcm90b2NvbC5sZW5ndGgpO1xuICBpZiAocHJvdG9jb2wgJiYgL15cXC9cXHdcXDovLnRlc3Qoc3RhcnRQYXRoKSkge1xuICAgIC8vIGhhbmRsZSBmaWxlOi8vL0M6LyBwYXRoc1xuICAgIHByb3RvY29sICs9ICcvJztcbiAgICByZXR1cm4gcHJvdG9jb2wgKyBwYXRoLnJlc29sdmUoZGlyLnNsaWNlKHByb3RvY29sLmxlbmd0aCksIHVybCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICB9XG4gIHJldHVybiBwcm90b2NvbCArIHBhdGgucmVzb2x2ZShkaXIuc2xpY2UocHJvdG9jb2wubGVuZ3RoKSwgdXJsKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTb3VyY2VNYXBVUkwoc291cmNlKSB7XG4gIHZhciBmaWxlRGF0YTtcblxuICBpZiAoaXNJbkJyb3dzZXIoKSkge1xuICAgICB0cnkge1xuICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICB4aHIub3BlbignR0VUJywgc291cmNlLCBmYWxzZSk7XG4gICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgICAgZmlsZURhdGEgPSB4aHIucmVhZHlTdGF0ZSA9PT0gNCA/IHhoci5yZXNwb25zZVRleHQgOiBudWxsO1xuXG4gICAgICAgLy8gU3VwcG9ydCBwcm92aWRpbmcgYSBzb3VyY2VNYXBwaW5nVVJMIHZpYSB0aGUgU291cmNlTWFwIGhlYWRlclxuICAgICAgIHZhciBzb3VyY2VNYXBIZWFkZXIgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJTb3VyY2VNYXBcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiWC1Tb3VyY2VNYXBcIik7XG4gICAgICAgaWYgKHNvdXJjZU1hcEhlYWRlcikge1xuICAgICAgICAgcmV0dXJuIHNvdXJjZU1hcEhlYWRlcjtcbiAgICAgICB9XG4gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgfVxuICB9XG5cbiAgLy8gR2V0IHRoZSBVUkwgb2YgdGhlIHNvdXJjZSBtYXBcbiAgZmlsZURhdGEgPSByZXRyaWV2ZUZpbGUoc291cmNlKTtcbiAgdmFyIHJlID0gLyg/OlxcL1xcL1tAI11bXFxzXSpzb3VyY2VNYXBwaW5nVVJMPShbXlxccydcIl0rKVtcXHNdKiQpfCg/OlxcL1xcKltAI11bXFxzXSpzb3VyY2VNYXBwaW5nVVJMPShbXlxccyonXCJdKylbXFxzXSooPzpcXCpcXC8pW1xcc10qJCkvbWc7XG4gIC8vIEtlZXAgZXhlY3V0aW5nIHRoZSBzZWFyY2ggdG8gZmluZCB0aGUgKmxhc3QqIHNvdXJjZU1hcHBpbmdVUkwgdG8gYXZvaWRcbiAgLy8gcGlja2luZyB1cCBzb3VyY2VNYXBwaW5nVVJMcyBmcm9tIGNvbW1lbnRzLCBzdHJpbmdzLCBldGMuXG4gIHZhciBsYXN0TWF0Y2gsIG1hdGNoO1xuICB3aGlsZSAobWF0Y2ggPSByZS5leGVjKGZpbGVEYXRhKSkgbGFzdE1hdGNoID0gbWF0Y2g7XG4gIGlmICghbGFzdE1hdGNoKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGxhc3RNYXRjaFsxXTtcbn07XG5cbi8vIENhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSByZXRyaWV2ZVNvdXJjZU1hcCBvcHRpb24gdG8gaW5zdGFsbC4gVGFrZXMgYVxuLy8gZ2VuZXJhdGVkIHNvdXJjZSBmaWxlbmFtZTsgcmV0dXJucyBhIHttYXAsIG9wdGlvbmFsIHVybH0gb2JqZWN0LCBvciBudWxsIGlmXG4vLyB0aGVyZSBpcyBubyBzb3VyY2UgbWFwLiAgVGhlIG1hcCBmaWVsZCBtYXkgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIHRoZSBwYXJzZWRcbi8vIEpTT04gb2JqZWN0IChpZSwgaXQgbXVzdCBiZSBhIHZhbGlkIGFyZ3VtZW50IHRvIHRoZSBTb3VyY2VNYXBDb25zdW1lclxuLy8gY29uc3RydWN0b3IpLlxudmFyIHJldHJpZXZlU291cmNlTWFwID0gaGFuZGxlckV4ZWMocmV0cmlldmVNYXBIYW5kbGVycyk7XG5yZXRyaWV2ZU1hcEhhbmRsZXJzLnB1c2goZnVuY3Rpb24oc291cmNlKSB7XG4gIHZhciBzb3VyY2VNYXBwaW5nVVJMID0gcmV0cmlldmVTb3VyY2VNYXBVUkwoc291cmNlKTtcbiAgaWYgKCFzb3VyY2VNYXBwaW5nVVJMKSByZXR1cm4gbnVsbDtcblxuICAvLyBSZWFkIHRoZSBjb250ZW50cyBvZiB0aGUgc291cmNlIG1hcFxuICB2YXIgc291cmNlTWFwRGF0YTtcbiAgaWYgKHJlU291cmNlTWFwLnRlc3Qoc291cmNlTWFwcGluZ1VSTCkpIHtcbiAgICAvLyBTdXBwb3J0IHNvdXJjZSBtYXAgVVJMIGFzIGEgZGF0YSB1cmxcbiAgICB2YXIgcmF3RGF0YSA9IHNvdXJjZU1hcHBpbmdVUkwuc2xpY2Uoc291cmNlTWFwcGluZ1VSTC5pbmRleE9mKCcsJykgKyAxKTtcbiAgICBzb3VyY2VNYXBEYXRhID0gYnVmZmVyRnJvbShyYXdEYXRhLCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICAgIHNvdXJjZU1hcHBpbmdVUkwgPSBzb3VyY2U7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3VwcG9ydCBzb3VyY2UgbWFwIFVSTHMgcmVsYXRpdmUgdG8gdGhlIHNvdXJjZSBVUkxcbiAgICBzb3VyY2VNYXBwaW5nVVJMID0gc3VwcG9ydFJlbGF0aXZlVVJMKHNvdXJjZSwgc291cmNlTWFwcGluZ1VSTCk7XG4gICAgc291cmNlTWFwRGF0YSA9IHJldHJpZXZlRmlsZShzb3VyY2VNYXBwaW5nVVJMKTtcbiAgfVxuXG4gIGlmICghc291cmNlTWFwRGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHNvdXJjZU1hcHBpbmdVUkwsXG4gICAgbWFwOiBzb3VyY2VNYXBEYXRhXG4gIH07XG59KTtcblxuZnVuY3Rpb24gbWFwU291cmNlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgdmFyIHNvdXJjZU1hcCA9IHNvdXJjZU1hcENhY2hlW3Bvc2l0aW9uLnNvdXJjZV07XG4gIGlmICghc291cmNlTWFwKSB7XG4gICAgLy8gQ2FsbCB0aGUgKG92ZXJyaWRlYWJsZSkgcmV0cmlldmVTb3VyY2VNYXAgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzb3VyY2UgbWFwLlxuICAgIHZhciB1cmxBbmRNYXAgPSByZXRyaWV2ZVNvdXJjZU1hcChwb3NpdGlvbi5zb3VyY2UpO1xuICAgIGlmICh1cmxBbmRNYXApIHtcbiAgICAgIHNvdXJjZU1hcCA9IHNvdXJjZU1hcENhY2hlW3Bvc2l0aW9uLnNvdXJjZV0gPSB7XG4gICAgICAgIHVybDogdXJsQW5kTWFwLnVybCxcbiAgICAgICAgbWFwOiBuZXcgU291cmNlTWFwQ29uc3VtZXIodXJsQW5kTWFwLm1hcClcbiAgICAgIH07XG5cbiAgICAgIC8vIExvYWQgYWxsIHNvdXJjZXMgc3RvcmVkIGlubGluZSB3aXRoIHRoZSBzb3VyY2UgbWFwIGludG8gdGhlIGZpbGUgY2FjaGVcbiAgICAgIC8vIHRvIHByZXRlbmQgbGlrZSB0aGV5IGFyZSBhbHJlYWR5IGxvYWRlZC4gVGhleSBtYXkgbm90IGV4aXN0IG9uIGRpc2suXG4gICAgICBpZiAoc291cmNlTWFwLm1hcC5zb3VyY2VzQ29udGVudCkge1xuICAgICAgICBzb3VyY2VNYXAubWFwLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2UsIGkpIHtcbiAgICAgICAgICB2YXIgY29udGVudHMgPSBzb3VyY2VNYXAubWFwLnNvdXJjZXNDb250ZW50W2ldO1xuICAgICAgICAgIGlmIChjb250ZW50cykge1xuICAgICAgICAgICAgdmFyIHVybCA9IHN1cHBvcnRSZWxhdGl2ZVVSTChzb3VyY2VNYXAudXJsLCBzb3VyY2UpO1xuICAgICAgICAgICAgZmlsZUNvbnRlbnRzQ2FjaGVbdXJsXSA9IGNvbnRlbnRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZU1hcCA9IHNvdXJjZU1hcENhY2hlW3Bvc2l0aW9uLnNvdXJjZV0gPSB7XG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgbWFwOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc29sdmUgdGhlIHNvdXJjZSBVUkwgcmVsYXRpdmUgdG8gdGhlIFVSTCBvZiB0aGUgc291cmNlIG1hcFxuICBpZiAoc291cmNlTWFwICYmIHNvdXJjZU1hcC5tYXAgJiYgdHlwZW9mIHNvdXJjZU1hcC5tYXAub3JpZ2luYWxQb3NpdGlvbkZvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBvcmlnaW5hbFBvc2l0aW9uID0gc291cmNlTWFwLm1hcC5vcmlnaW5hbFBvc2l0aW9uRm9yKHBvc2l0aW9uKTtcblxuICAgIC8vIE9ubHkgcmV0dXJuIHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBpZiBhIG1hdGNoaW5nIGxpbmUgd2FzIGZvdW5kLiBJZiBub1xuICAgIC8vIG1hdGNoaW5nIGxpbmUgaXMgZm91bmQgdGhlbiB3ZSByZXR1cm4gcG9zaXRpb24gaW5zdGVhZCwgd2hpY2ggd2lsbCBjYXVzZVxuICAgIC8vIHRoZSBzdGFjayB0cmFjZSB0byBwcmludCB0aGUgcGF0aCBhbmQgbGluZSBmb3IgdGhlIGNvbXBpbGVkIGZpbGUuIEl0IGlzXG4gICAgLy8gYmV0dGVyIHRvIGdpdmUgYSBwcmVjaXNlIGxvY2F0aW9uIGluIHRoZSBjb21waWxlZCBmaWxlIHRoYW4gYSB2YWd1ZVxuICAgIC8vIGxvY2F0aW9uIGluIHRoZSBvcmlnaW5hbCBmaWxlLlxuICAgIGlmIChvcmlnaW5hbFBvc2l0aW9uLnNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgb3JpZ2luYWxQb3NpdGlvbi5zb3VyY2UgPSBzdXBwb3J0UmVsYXRpdmVVUkwoXG4gICAgICAgIHNvdXJjZU1hcC51cmwsIG9yaWdpbmFsUG9zaXRpb24uc291cmNlKTtcbiAgICAgIHJldHVybiBvcmlnaW5hbFBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxuLy8gUGFyc2VzIGNvZGUgZ2VuZXJhdGVkIGJ5IEZvcm1hdEV2YWxPcmlnaW4oKSwgYSBmdW5jdGlvbiBpbnNpZGUgVjg6XG4vLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL21lc3NhZ2VzLmpzXG5mdW5jdGlvbiBtYXBFdmFsT3JpZ2luKG9yaWdpbikge1xuICAvLyBNb3N0IGV2YWwoKSBjYWxscyBhcmUgaW4gdGhpcyBmb3JtYXRcbiAgdmFyIG1hdGNoID0gL15ldmFsIGF0IChbXihdKykgXFwoKC4rKTooXFxkKyk6KFxcZCspXFwpJC8uZXhlYyhvcmlnaW4pO1xuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBtYXBTb3VyY2VQb3NpdGlvbih7XG4gICAgICBzb3VyY2U6IG1hdGNoWzJdLFxuICAgICAgbGluZTogK21hdGNoWzNdLFxuICAgICAgY29sdW1uOiBtYXRjaFs0XSAtIDFcbiAgICB9KTtcbiAgICByZXR1cm4gJ2V2YWwgYXQgJyArIG1hdGNoWzFdICsgJyAoJyArIHBvc2l0aW9uLnNvdXJjZSArICc6JyArXG4gICAgICBwb3NpdGlvbi5saW5lICsgJzonICsgKHBvc2l0aW9uLmNvbHVtbiArIDEpICsgJyknO1xuICB9XG5cbiAgLy8gUGFyc2UgbmVzdGVkIGV2YWwoKSBjYWxscyB1c2luZyByZWN1cnNpb25cbiAgbWF0Y2ggPSAvXmV2YWwgYXQgKFteKF0rKSBcXCgoLispXFwpJC8uZXhlYyhvcmlnaW4pO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gJ2V2YWwgYXQgJyArIG1hdGNoWzFdICsgJyAoJyArIG1hcEV2YWxPcmlnaW4obWF0Y2hbMl0pICsgJyknO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHdlIHN0aWxsIHJldHVybiB1c2VmdWwgaW5mb3JtYXRpb24gaWYgd2UgZGlkbid0IGZpbmQgYW55dGhpbmdcbiAgcmV0dXJuIG9yaWdpbjtcbn1cblxuLy8gVGhpcyBpcyBjb3BpZWQgYWxtb3N0IHZlcmJhdGltIGZyb20gdGhlIFY4IHNvdXJjZSBjb2RlIGF0XG4vLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL21lc3NhZ2VzLmpzLiBUaGVcbi8vIGltcGxlbWVudGF0aW9uIG9mIHdyYXBDYWxsU2l0ZSgpIHVzZWQgdG8ganVzdCBmb3J3YXJkIHRvIHRoZSBhY3R1YWwgc291cmNlXG4vLyBjb2RlIG9mIENhbGxTaXRlLnByb3RvdHlwZS50b1N0cmluZyBidXQgdW5mb3J0dW5hdGVseSBhIG5ldyByZWxlYXNlIG9mIFY4XG4vLyBkaWQgc29tZXRoaW5nIHRvIHRoZSBwcm90b3R5cGUgY2hhaW4gYW5kIGJyb2tlIHRoZSBzaGltLiBUaGUgb25seSBmaXggSVxuLy8gY291bGQgZmluZCB3YXMgY29weS9wYXN0ZS5cbmZ1bmN0aW9uIENhbGxTaXRlVG9TdHJpbmcoKSB7XG4gIHZhciBmaWxlTmFtZTtcbiAgdmFyIGZpbGVMb2NhdGlvbiA9IFwiXCI7XG4gIGlmICh0aGlzLmlzTmF0aXZlKCkpIHtcbiAgICBmaWxlTG9jYXRpb24gPSBcIm5hdGl2ZVwiO1xuICB9IGVsc2Uge1xuICAgIGZpbGVOYW1lID0gdGhpcy5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwoKTtcbiAgICBpZiAoIWZpbGVOYW1lICYmIHRoaXMuaXNFdmFsKCkpIHtcbiAgICAgIGZpbGVMb2NhdGlvbiA9IHRoaXMuZ2V0RXZhbE9yaWdpbigpO1xuICAgICAgZmlsZUxvY2F0aW9uICs9IFwiLCBcIjsgIC8vIEV4cGVjdGluZyBzb3VyY2UgcG9zaXRpb24gdG8gZm9sbG93LlxuICAgIH1cblxuICAgIGlmIChmaWxlTmFtZSkge1xuICAgICAgZmlsZUxvY2F0aW9uICs9IGZpbGVOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb3VyY2UgY29kZSBkb2VzIG5vdCBvcmlnaW5hdGUgZnJvbSBhIGZpbGUgYW5kIGlzIG5vdCBuYXRpdmUsIGJ1dCB3ZVxuICAgICAgLy8gY2FuIHN0aWxsIGdldCB0aGUgc291cmNlIHBvc2l0aW9uIGluc2lkZSB0aGUgc291cmNlIHN0cmluZywgZS5nLiBpblxuICAgICAgLy8gYW4gZXZhbCBzdHJpbmcuXG4gICAgICBmaWxlTG9jYXRpb24gKz0gXCI8YW5vbnltb3VzPlwiO1xuICAgIH1cbiAgICB2YXIgbGluZU51bWJlciA9IHRoaXMuZ2V0TGluZU51bWJlcigpO1xuICAgIGlmIChsaW5lTnVtYmVyICE9IG51bGwpIHtcbiAgICAgIGZpbGVMb2NhdGlvbiArPSBcIjpcIiArIGxpbmVOdW1iZXI7XG4gICAgICB2YXIgY29sdW1uTnVtYmVyID0gdGhpcy5nZXRDb2x1bW5OdW1iZXIoKTtcbiAgICAgIGlmIChjb2x1bW5OdW1iZXIpIHtcbiAgICAgICAgZmlsZUxvY2F0aW9uICs9IFwiOlwiICsgY29sdW1uTnVtYmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBsaW5lID0gXCJcIjtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRoaXMuZ2V0RnVuY3Rpb25OYW1lKCk7XG4gIHZhciBhZGRTdWZmaXggPSB0cnVlO1xuICB2YXIgaXNDb25zdHJ1Y3RvciA9IHRoaXMuaXNDb25zdHJ1Y3RvcigpO1xuICB2YXIgaXNNZXRob2RDYWxsID0gISh0aGlzLmlzVG9wbGV2ZWwoKSB8fCBpc0NvbnN0cnVjdG9yKTtcbiAgaWYgKGlzTWV0aG9kQ2FsbCkge1xuICAgIHZhciB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUoKTtcbiAgICAvLyBGaXhlcyBzaGltIHRvIGJlIGJhY2t3YXJkIGNvbXBhdGFibGUgd2l0aCBOb2RlIHYwIHRvIHY0XG4gICAgaWYgKHR5cGVOYW1lID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICB0eXBlTmFtZSA9IFwibnVsbFwiO1xuICAgIH1cbiAgICB2YXIgbWV0aG9kTmFtZSA9IHRoaXMuZ2V0TWV0aG9kTmFtZSgpO1xuICAgIGlmIChmdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmICh0eXBlTmFtZSAmJiBmdW5jdGlvbk5hbWUuaW5kZXhPZih0eXBlTmFtZSkgIT0gMCkge1xuICAgICAgICBsaW5lICs9IHR5cGVOYW1lICsgXCIuXCI7XG4gICAgICB9XG4gICAgICBsaW5lICs9IGZ1bmN0aW9uTmFtZTtcbiAgICAgIGlmIChtZXRob2ROYW1lICYmIGZ1bmN0aW9uTmFtZS5pbmRleE9mKFwiLlwiICsgbWV0aG9kTmFtZSkgIT0gZnVuY3Rpb25OYW1lLmxlbmd0aCAtIG1ldGhvZE5hbWUubGVuZ3RoIC0gMSkge1xuICAgICAgICBsaW5lICs9IFwiIFthcyBcIiArIG1ldGhvZE5hbWUgKyBcIl1cIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSArPSB0eXBlTmFtZSArIFwiLlwiICsgKG1ldGhvZE5hbWUgfHwgXCI8YW5vbnltb3VzPlwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNDb25zdHJ1Y3Rvcikge1xuICAgIGxpbmUgKz0gXCJuZXcgXCIgKyAoZnVuY3Rpb25OYW1lIHx8IFwiPGFub255bW91cz5cIik7XG4gIH0gZWxzZSBpZiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgbGluZSArPSBmdW5jdGlvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGluZSArPSBmaWxlTG9jYXRpb247XG4gICAgYWRkU3VmZml4ID0gZmFsc2U7XG4gIH1cbiAgaWYgKGFkZFN1ZmZpeCkge1xuICAgIGxpbmUgKz0gXCIgKFwiICsgZmlsZUxvY2F0aW9uICsgXCIpXCI7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2FsbFNpdGUoZnJhbWUpIHtcbiAgdmFyIG9iamVjdCA9IHt9O1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnJhbWUpKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBvYmplY3RbbmFtZV0gPSAvXig/OmlzfGdldCkvLnRlc3QobmFtZSkgPyBmdW5jdGlvbigpIHsgcmV0dXJuIGZyYW1lW25hbWVdLmNhbGwoZnJhbWUpOyB9IDogZnJhbWVbbmFtZV07XG4gIH0pO1xuICBvYmplY3QudG9TdHJpbmcgPSBDYWxsU2l0ZVRvU3RyaW5nO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiB3cmFwQ2FsbFNpdGUoZnJhbWUsIHN0YXRlKSB7XG4gIC8vIHByb3ZpZGVzIGludGVyZmFjZSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhdGUgPSB7IG5leHRQb3NpdGlvbjogbnVsbCwgY3VyUG9zaXRpb246IG51bGwgfVxuICB9XG4gIGlmKGZyYW1lLmlzTmF0aXZlKCkpIHtcbiAgICBzdGF0ZS5jdXJQb3NpdGlvbiA9IG51bGw7XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLy8gTW9zdCBjYWxsIHNpdGVzIHdpbGwgcmV0dXJuIHRoZSBzb3VyY2UgZmlsZSBmcm9tIGdldEZpbGVOYW1lKCksIGJ1dCBjb2RlXG4gIC8vIHBhc3NlZCB0byBldmFsKCkgZW5kaW5nIGluIFwiLy8jIHNvdXJjZVVSTD0uLi5cIiB3aWxsIHJldHVybiB0aGUgc291cmNlIGZpbGVcbiAgLy8gZnJvbSBnZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwoKSBpbnN0ZWFkXG4gIHZhciBzb3VyY2UgPSBmcmFtZS5nZXRGaWxlTmFtZSgpIHx8IGZyYW1lLmdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCgpO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIGxpbmUgPSBmcmFtZS5nZXRMaW5lTnVtYmVyKCk7XG4gICAgdmFyIGNvbHVtbiA9IGZyYW1lLmdldENvbHVtbk51bWJlcigpIC0gMTtcblxuICAgIC8vIEZpeCBwb3NpdGlvbiBpbiBOb2RlIHdoZXJlIHNvbWUgKGludGVybmFsKSBjb2RlIGlzIHByZXBlbmRlZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L25vZGUtc291cmNlLW1hcC1zdXBwb3J0L2lzc3Vlcy8zNlxuICAgIC8vIEhlYWRlciByZW1vdmVkIGluIG5vZGUgYXQgXjEwLjE2IHx8ID49MTEuMTEuMFxuICAgIC8vIHYxMSBpcyBub3QgYW4gTFRTIGNhbmRpZGF0ZSwgd2UgY2FuIGp1c3QgdGVzdCB0aGUgb25lIHZlcnNpb24gd2l0aCBpdC5cbiAgICAvLyBUZXN0IG5vZGUgdmVyc2lvbnMgZm9yOiAxMC4xNi0xOSwgMTAuMjArLCAxMi0xOSwgMjAtOTksIDEwMCssIG9yIDExLjExXG4gICAgdmFyIG5vSGVhZGVyID0gL152KDEwXFwuMVs2LTldfDEwXFwuWzItOV1bMC05XXwxMFxcLlswLTldezMsfXwxWzItOV1cXGQqfFsyLTldXFxkfFxcZHszLH18MTFcXC4xMSkvO1xuICAgIHZhciBoZWFkZXJMZW5ndGggPSBub0hlYWRlci50ZXN0KGdsb2JhbFByb2Nlc3NWZXJzaW9uKCkpID8gMCA6IDYyO1xuICAgIGlmIChsaW5lID09PSAxICYmIGNvbHVtbiA+IGhlYWRlckxlbmd0aCAmJiAhaXNJbkJyb3dzZXIoKSAmJiAhZnJhbWUuaXNFdmFsKCkpIHtcbiAgICAgIGNvbHVtbiAtPSBoZWFkZXJMZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb24oe1xuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICBsaW5lOiBsaW5lLFxuICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICB9KTtcbiAgICBzdGF0ZS5jdXJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIGZyYW1lID0gY2xvbmVDYWxsU2l0ZShmcmFtZSk7XG4gICAgdmFyIG9yaWdpbmFsRnVuY3Rpb25OYW1lID0gZnJhbWUuZ2V0RnVuY3Rpb25OYW1lO1xuICAgIGZyYW1lLmdldEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHN0YXRlLm5leHRQb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uTmFtZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlLm5leHRQb3NpdGlvbi5uYW1lIHx8IG9yaWdpbmFsRnVuY3Rpb25OYW1lKCk7XG4gICAgfTtcbiAgICBmcmFtZS5nZXRGaWxlTmFtZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24uc291cmNlOyB9O1xuICAgIGZyYW1lLmdldExpbmVOdW1iZXIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLmxpbmU7IH07XG4gICAgZnJhbWUuZ2V0Q29sdW1uTnVtYmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5jb2x1bW4gKyAxOyB9O1xuICAgIGZyYW1lLmdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24uc291cmNlOyB9O1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIENvZGUgY2FsbGVkIHVzaW5nIGV2YWwoKSBuZWVkcyBzcGVjaWFsIGhhbmRsaW5nXG4gIHZhciBvcmlnaW4gPSBmcmFtZS5pc0V2YWwoKSAmJiBmcmFtZS5nZXRFdmFsT3JpZ2luKCk7XG4gIGlmIChvcmlnaW4pIHtcbiAgICBvcmlnaW4gPSBtYXBFdmFsT3JpZ2luKG9yaWdpbik7XG4gICAgZnJhbWUgPSBjbG9uZUNhbGxTaXRlKGZyYW1lKTtcbiAgICBmcmFtZS5nZXRFdmFsT3JpZ2luID0gZnVuY3Rpb24oKSB7IHJldHVybiBvcmlnaW47IH07XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLy8gSWYgd2UgZ2V0IGhlcmUgdGhlbiB3ZSB3ZXJlIHVuYWJsZSB0byBjaGFuZ2UgdGhlIHNvdXJjZSBwb3NpdGlvblxuICByZXR1cm4gZnJhbWU7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFydCBvZiB0aGUgVjggc3RhY2sgdHJhY2UgQVBJLCBmb3IgbW9yZSBpbmZvIHNlZTpcbi8vIGh0dHBzOi8vdjguZGV2L2RvY3Mvc3RhY2stdHJhY2UtYXBpXG5mdW5jdGlvbiBwcmVwYXJlU3RhY2tUcmFjZShlcnJvciwgc3RhY2spIHtcbiAgaWYgKGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucykge1xuICAgIGZpbGVDb250ZW50c0NhY2hlID0ge307XG4gICAgc291cmNlTWFwQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBuYW1lID0gZXJyb3IubmFtZSB8fCAnRXJyb3InO1xuICB2YXIgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgJyc7XG4gIHZhciBlcnJvclN0cmluZyA9IG5hbWUgKyBcIjogXCIgKyBtZXNzYWdlO1xuXG4gIHZhciBzdGF0ZSA9IHsgbmV4dFBvc2l0aW9uOiBudWxsLCBjdXJQb3NpdGlvbjogbnVsbCB9O1xuICB2YXIgcHJvY2Vzc2VkU3RhY2sgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcHJvY2Vzc2VkU3RhY2sucHVzaCgnXFxuICAgIGF0ICcgKyB3cmFwQ2FsbFNpdGUoc3RhY2tbaV0sIHN0YXRlKSk7XG4gICAgc3RhdGUubmV4dFBvc2l0aW9uID0gc3RhdGUuY3VyUG9zaXRpb247XG4gIH1cbiAgc3RhdGUuY3VyUG9zaXRpb24gPSBzdGF0ZS5uZXh0UG9zaXRpb24gPSBudWxsO1xuICByZXR1cm4gZXJyb3JTdHJpbmcgKyBwcm9jZXNzZWRTdGFjay5yZXZlcnNlKCkuam9pbignJyk7XG59XG5cbi8vIEdlbmVyYXRlIHBvc2l0aW9uIGFuZCBzbmlwcGV0IG9mIG9yaWdpbmFsIHNvdXJjZSB3aXRoIHBvaW50ZXJcbmZ1bmN0aW9uIGdldEVycm9yU291cmNlKGVycm9yKSB7XG4gIHZhciBtYXRjaCA9IC9cXG4gICAgYXQgW14oXSsgXFwoKC4qKTooXFxkKyk6KFxcZCspXFwpLy5leGVjKGVycm9yLnN0YWNrKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHNvdXJjZSA9IG1hdGNoWzFdO1xuICAgIHZhciBsaW5lID0gK21hdGNoWzJdO1xuICAgIHZhciBjb2x1bW4gPSArbWF0Y2hbM107XG5cbiAgICAvLyBTdXBwb3J0IHRoZSBpbmxpbmUgc291cmNlQ29udGVudHMgaW5zaWRlIHRoZSBzb3VyY2UgbWFwXG4gICAgdmFyIGNvbnRlbnRzID0gZmlsZUNvbnRlbnRzQ2FjaGVbc291cmNlXTtcblxuICAgIC8vIFN1cHBvcnQgZmlsZXMgb24gZGlza1xuICAgIGlmICghY29udGVudHMgJiYgZnMgJiYgZnMuZXhpc3RzU3luYyhzb3VyY2UpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhzb3VyY2UsICd1dGY4Jyk7XG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICBjb250ZW50cyA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvcm1hdCB0aGUgbGluZSBmcm9tIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29kZSBsaWtlIG5vZGUgZG9lc1xuICAgIGlmIChjb250ZW50cykge1xuICAgICAgdmFyIGNvZGUgPSBjb250ZW50cy5zcGxpdCgvKD86XFxyXFxufFxccnxcXG4pLylbbGluZSAtIDFdO1xuICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSArICc6JyArIGxpbmUgKyAnXFxuJyArIGNvZGUgKyAnXFxuJyArXG4gICAgICAgICAgbmV3IEFycmF5KGNvbHVtbikuam9pbignICcpICsgJ14nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcHJpbnRFcnJvckFuZEV4aXQgKGVycm9yKSB7XG4gIHZhciBzb3VyY2UgPSBnZXRFcnJvclNvdXJjZShlcnJvcik7XG5cbiAgLy8gRW5zdXJlIGVycm9yIGlzIHByaW50ZWQgc3luY2hyb25vdXNseSBhbmQgbm90IHRydW5jYXRlZFxuICB2YXIgc3RkZXJyID0gZ2xvYmFsUHJvY2Vzc1N0ZGVycigpO1xuICBpZiAoc3RkZXJyICYmIHN0ZGVyci5faGFuZGxlICYmIHN0ZGVyci5faGFuZGxlLnNldEJsb2NraW5nKSB7XG4gICAgc3RkZXJyLl9oYW5kbGUuc2V0QmxvY2tpbmcodHJ1ZSk7XG4gIH1cblxuICBpZiAoc291cmNlKSB7XG4gICAgY29uc29sZS5lcnJvcigpO1xuICAgIGNvbnNvbGUuZXJyb3Ioc291cmNlKTtcbiAgfVxuXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xuICBnbG9iYWxQcm9jZXNzRXhpdCgxKTtcbn1cblxuZnVuY3Rpb24gc2hpbUVtaXRVbmNhdWdodEV4Y2VwdGlvbiAoKSB7XG4gIHZhciBvcmlnRW1pdCA9IHByb2Nlc3MuZW1pdDtcblxuICBwcm9jZXNzLmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAndW5jYXVnaHRFeGNlcHRpb24nKSB7XG4gICAgICB2YXIgaGFzU3RhY2sgPSAoYXJndW1lbnRzWzFdICYmIGFyZ3VtZW50c1sxXS5zdGFjayk7XG4gICAgICB2YXIgaGFzTGlzdGVuZXJzID0gKHRoaXMubGlzdGVuZXJzKHR5cGUpLmxlbmd0aCA+IDApO1xuXG4gICAgICBpZiAoaGFzU3RhY2sgJiYgIWhhc0xpc3RlbmVycykge1xuICAgICAgICByZXR1cm4gcHJpbnRFcnJvckFuZEV4aXQoYXJndW1lbnRzWzFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3JpZ0VtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIG9yaWdpbmFsUmV0cmlldmVGaWxlSGFuZGxlcnMgPSByZXRyaWV2ZUZpbGVIYW5kbGVycy5zbGljZSgwKTtcbnZhciBvcmlnaW5hbFJldHJpZXZlTWFwSGFuZGxlcnMgPSByZXRyaWV2ZU1hcEhhbmRsZXJzLnNsaWNlKDApO1xuXG5leHBvcnRzLndyYXBDYWxsU2l0ZSA9IHdyYXBDYWxsU2l0ZTtcbmV4cG9ydHMuZ2V0RXJyb3JTb3VyY2UgPSBnZXRFcnJvclNvdXJjZTtcbmV4cG9ydHMubWFwU291cmNlUG9zaXRpb24gPSBtYXBTb3VyY2VQb3NpdGlvbjtcbmV4cG9ydHMucmV0cmlldmVTb3VyY2VNYXAgPSByZXRyaWV2ZVNvdXJjZU1hcDtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAob3B0aW9ucy5lbnZpcm9ubWVudCkge1xuICAgIGVudmlyb25tZW50ID0gb3B0aW9ucy5lbnZpcm9ubWVudDtcbiAgICBpZiAoW1wibm9kZVwiLCBcImJyb3dzZXJcIiwgXCJhdXRvXCJdLmluZGV4T2YoZW52aXJvbm1lbnQpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW52aXJvbm1lbnQgXCIgKyBlbnZpcm9ubWVudCArIFwiIHdhcyB1bmtub3duLiBBdmFpbGFibGUgb3B0aW9ucyBhcmUge2F1dG8sIGJyb3dzZXIsIG5vZGV9XCIpXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgc291cmNlcyB0byBiZSBmb3VuZCBieSBtZXRob2RzIG90aGVyIHRoYW4gcmVhZGluZyB0aGUgZmlsZXNcbiAgLy8gZGlyZWN0bHkgZnJvbSBkaXNrLlxuICBpZiAob3B0aW9ucy5yZXRyaWV2ZUZpbGUpIHtcbiAgICBpZiAob3B0aW9ucy5vdmVycmlkZVJldHJpZXZlRmlsZSkge1xuICAgICAgcmV0cmlldmVGaWxlSGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXRyaWV2ZUZpbGVIYW5kbGVycy51bnNoaWZ0KG9wdGlvbnMucmV0cmlldmVGaWxlKTtcbiAgfVxuXG4gIC8vIEFsbG93IHNvdXJjZSBtYXBzIHRvIGJlIGZvdW5kIGJ5IG1ldGhvZHMgb3RoZXIgdGhhbiByZWFkaW5nIHRoZSBmaWxlc1xuICAvLyBkaXJlY3RseSBmcm9tIGRpc2suXG4gIGlmIChvcHRpb25zLnJldHJpZXZlU291cmNlTWFwKSB7XG4gICAgaWYgKG9wdGlvbnMub3ZlcnJpZGVSZXRyaWV2ZVNvdXJjZU1hcCkge1xuICAgICAgcmV0cmlldmVNYXBIYW5kbGVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHJldHJpZXZlTWFwSGFuZGxlcnMudW5zaGlmdChvcHRpb25zLnJldHJpZXZlU291cmNlTWFwKTtcbiAgfVxuXG4gIC8vIFN1cHBvcnQgcnVudGltZSB0cmFuc3BpbGVycyB0aGF0IGluY2x1ZGUgaW5saW5lIHNvdXJjZSBtYXBzXG4gIGlmIChvcHRpb25zLmhvb2tSZXF1aXJlICYmICFpc0luQnJvd3NlcigpKSB7XG4gICAgLy8gVXNlIGR5bmFtaWNSZXF1aXJlIHRvIGF2b2lkIGluY2x1ZGluZyBpbiBicm93c2VyIGJ1bmRsZXNcbiAgICB2YXIgTW9kdWxlID0gZHluYW1pY1JlcXVpcmUobW9kdWxlLCAnbW9kdWxlJyk7XG4gICAgdmFyICRjb21waWxlID0gTW9kdWxlLnByb3RvdHlwZS5fY29tcGlsZTtcblxuICAgIGlmICghJGNvbXBpbGUuX19zb3VyY2VNYXBTdXBwb3J0KSB7XG4gICAgICBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlID0gZnVuY3Rpb24oY29udGVudCwgZmlsZW5hbWUpIHtcbiAgICAgICAgZmlsZUNvbnRlbnRzQ2FjaGVbZmlsZW5hbWVdID0gY29udGVudDtcbiAgICAgICAgc291cmNlTWFwQ2FjaGVbZmlsZW5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gJGNvbXBpbGUuY2FsbCh0aGlzLCBjb250ZW50LCBmaWxlbmFtZSk7XG4gICAgICB9O1xuXG4gICAgICBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlLl9fc291cmNlTWFwU3VwcG9ydCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29uZmlndXJlIG9wdGlvbnNcbiAgaWYgKCFlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMpIHtcbiAgICBlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMgPSAnZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zJyBpbiBvcHRpb25zID9cbiAgICAgIG9wdGlvbnMuZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zIDogZmFsc2U7XG4gIH1cblxuICAvLyBJbnN0YWxsIHRoZSBlcnJvciByZWZvcm1hdHRlclxuICBpZiAoIWVycm9yRm9ybWF0dGVySW5zdGFsbGVkKSB7XG4gICAgZXJyb3JGb3JtYXR0ZXJJbnN0YWxsZWQgPSB0cnVlO1xuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcGFyZVN0YWNrVHJhY2U7XG4gIH1cblxuICBpZiAoIXVuY2F1Z2h0U2hpbUluc3RhbGxlZCkge1xuICAgIHZhciBpbnN0YWxsSGFuZGxlciA9ICdoYW5kbGVVbmNhdWdodEV4Y2VwdGlvbnMnIGluIG9wdGlvbnMgP1xuICAgICAgb3B0aW9ucy5oYW5kbGVVbmNhdWdodEV4Y2VwdGlvbnMgOiB0cnVlO1xuXG4gICAgLy8gRG8gbm90IG92ZXJyaWRlICd1bmNhdWdodEV4Y2VwdGlvbicgd2l0aCBvdXIgb3duIGhhbmRsZXIgaW4gTm9kZS5qc1xuICAgIC8vIFdvcmtlciB0aHJlYWRzLiBXb3JrZXJzIHBhc3MgdGhlIGVycm9yIHRvIHRoZSBtYWluIHRocmVhZCBhcyBhbiBldmVudCxcbiAgICAvLyByYXRoZXIgdGhhbiBwcmludGluZyBzb21ldGhpbmcgdG8gc3RkZXJyIGFuZCBleGl0aW5nLlxuICAgIHRyeSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHVzZSBgZHluYW1pY1JlcXVpcmVgIGJlY2F1c2UgYHJlcXVpcmVgIG9uIGl0J3Mgb3duIHdpbGwgYmUgb3B0aW1pemVkIGJ5IFdlYlBhY2svQnJvd3NlcmlmeS5cbiAgICAgIHZhciB3b3JrZXJfdGhyZWFkcyA9IGR5bmFtaWNSZXF1aXJlKG1vZHVsZSwgJ3dvcmtlcl90aHJlYWRzJyk7XG4gICAgICBpZiAod29ya2VyX3RocmVhZHMuaXNNYWluVGhyZWFkID09PSBmYWxzZSkge1xuICAgICAgICBpbnN0YWxsSGFuZGxlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge31cblxuICAgIC8vIFByb3ZpZGUgdGhlIG9wdGlvbiB0byBub3QgaW5zdGFsbCB0aGUgdW5jYXVnaHQgZXhjZXB0aW9uIGhhbmRsZXIuIFRoaXMgaXNcbiAgICAvLyB0byBzdXBwb3J0IG90aGVyIHVuY2F1Z2h0IGV4Y2VwdGlvbiBoYW5kbGVycyAoaW4gdGVzdCBmcmFtZXdvcmtzLCBmb3JcbiAgICAvLyBleGFtcGxlKS4gSWYgdGhpcyBoYW5kbGVyIGlzIG5vdCBpbnN0YWxsZWQgYW5kIHRoZXJlIGFyZSBubyBvdGhlciB1bmNhdWdodFxuICAgIC8vIGV4Y2VwdGlvbiBoYW5kbGVycywgdW5jYXVnaHQgZXhjZXB0aW9ucyB3aWxsIGJlIGNhdWdodCBieSBub2RlJ3MgYnVpbHQtaW5cbiAgICAvLyBleGNlcHRpb24gaGFuZGxlciBhbmQgdGhlIHByb2Nlc3Mgd2lsbCBzdGlsbCBiZSB0ZXJtaW5hdGVkLiBIb3dldmVyLCB0aGVcbiAgICAvLyBnZW5lcmF0ZWQgSmF2YVNjcmlwdCBjb2RlIHdpbGwgYmUgc2hvd24gYWJvdmUgdGhlIHN0YWNrIHRyYWNlIGluc3RlYWQgb2ZcbiAgICAvLyB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUuXG4gICAgaWYgKGluc3RhbGxIYW5kbGVyICYmIGhhc0dsb2JhbFByb2Nlc3NFdmVudEVtaXR0ZXIoKSkge1xuICAgICAgdW5jYXVnaHRTaGltSW5zdGFsbGVkID0gdHJ1ZTtcbiAgICAgIHNoaW1FbWl0VW5jYXVnaHRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMucmVzZXRSZXRyaWV2ZUhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gIHJldHJpZXZlRmlsZUhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gIHJldHJpZXZlTWFwSGFuZGxlcnMubGVuZ3RoID0gMDtcblxuICByZXRyaWV2ZUZpbGVIYW5kbGVycyA9IG9yaWdpbmFsUmV0cmlldmVGaWxlSGFuZGxlcnMuc2xpY2UoMCk7XG4gIHJldHJpZXZlTWFwSGFuZGxlcnMgPSBvcmlnaW5hbFJldHJpZXZlTWFwSGFuZGxlcnMuc2xpY2UoMCk7XG5cbiAgcmV0cmlldmVTb3VyY2VNYXAgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZU1hcEhhbmRsZXJzKTtcbiAgcmV0cmlldmVGaWxlID0gaGFuZGxlckV4ZWMocmV0cmlldmVGaWxlSGFuZGxlcnMpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9jZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX180NjdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM0NzZfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzY4ODRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzk1ODJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzUzMjdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzc4MzZfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4Nzc3KTtcbiIsIiJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db21waWxlciIsImNvbmZpZyIsInBsdWdpbk9wdGlvbnMiLCJjb21waWxlciIsIndlYnBhY2siLCJFeHRlbnNpb25SZWxvYWRlcl8xIiwiYXBwbHkiLCJ3YXRjaCIsImVyciIsInN0YXRzIiwidHJlYXRFcnJvcnMiLCJ0b1N0cmluZyIsImNvbG9ycyIsInN0YWNrIiwiZGV0YWlscyIsImV4cG9ydHMiLCJhcmdzIiwiYXJnc19jb25zdGFudF8xIiwidHlwZSIsImV2ZW50c19jb25zdGFudHNfMSIsInBheWxvYWQiLCJvcHRpb25zX2NvbnN0YW50c18xIiwicG9ydCIsIm1hbmlmZXN0IiwicmVsb2FkUGFnZSIsIm9wdFBhdGgiLCJ3ZWJwYWNrQ29uZmlnIiwiZXZhbCIsIm1pbmltaXN0IiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsIl8iLCJfYSIsIl9fcmVzdCIsIkV4dGVuc2lvbkNvbXBpbGVyXzEiLCJleGl0IiwiY29kZSIsIkV4dGVuc2lvblJlbG9hZGVySW1wbCIsIm9wdGlvbnMiLCJfb3B0cyIsIl9jaHVua1ZlcnNpb25zIiwid2VicGFja18xIiwic3BsaXQiLCJtYWpvciIsInBhcnNlSW50IiwiY2h1bmtzIiwiYmFja2dyb3VuZCIsImNvbnRlbnRTY3JpcHQiLCJleHRlbnNpb25QYWdlIiwiY2hhbmdlZENodW5rcyIsImNodW5rIiwib2xkVmVyc2lvbiIsIm5hbWUiLCJoYXNoIiwicHVzaCIsImNvbnRlbnRPckJnQ2hhbmdlZCIsInNvbWUiLCJjb250ZW50Q2hhbmdlZCIsImJnQ2hhbmdlZCIsIkFycmF5IiwiaXNBcnJheSIsInNjcmlwdCIsIm9ubHlQYWdlQ2hhbmdlZCIsInBhZ2VDaGFuZ2VkIiwiZGVmYXVsdF9vcHRpb25zXzEiLCJlbnRyaWVzIiwicGFyc2VkRW50cmllcyIsImVudHJ5Iiwib3V0cHV0IiwiX2V2ZW50QVBJIiwiQ29tcGlsZXJFdmVudHNGYWNhZGVfMSIsIl9pbmplY3RvciIsIl90cmlnZ2VyZXIiLCJhZnRlck9wdGltaXplQ2h1bmtzIiwiY29tcCIsImFzc2V0cyIsIk9iamVjdCIsImFmdGVyRW1pdCIsIl93aGF0Q2hhbmdlZCIsIl9pc1dlYnBhY2tHVG9FVjUiLCJtb2RlIiwiZW52IiwiTk9ERV9FTlYiLCJfcmVnaXN0ZXJQbHVnaW4iLCJ3YXJuaW5nc18xIiwiZ2V0IiwiQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlcl8xIiwiSG90UmVsb2FkZXJTZXJ2ZXIiLCJfc2VydmVyIiwid3NfMSIsIm9uIiwid3MiLCJtc2ciLCJ1c2VyQWdlbnQiLCJoZWFkZXJzIiwiX3NpZ25FbWl0dGVyIiwiU2lnbkVtaXR0ZXJfMSIsImRhdGEiLCJmYW1pbHkiLCJKU09OIiwicGFyc2UiLCJzYWZlU2lnbkNoYW5nZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiU2lnbkVtaXR0ZXIiLCJzZXJ2ZXIiLCJtaW5vciIsInBhdGNoIiwiX3NhdGlzZmllcyIsImZhc3RfcmVsb2FkaW5nX2NvbnN0YW50c18xIiwicmVsb2FkQ2FsbHMiLCJyZWxvYWREZWJvdWNpbmdGcmFtZSIsImRlYm91bmNlciIsImJsb2NrZXIiLCJfc2FmZVNpZ25DaGFuZ2UiLCJfc2V0dXBTYWZlU2lnbkNoYW5nZSIsInJlcyIsInJlaiIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJfc2VuZE1zZyIsImNsaWVudHMiLCJmb3JFYWNoIiwiY2xpZW50IiwicmVhZHlTdGF0ZSIsInNlbmQiLCJzdHJpbmdpZnkiLCJicm93c2VyVmVyc2lvbiIsInRhcmdldFZlcnNpb24iLCJ2ZXJzaW9uUGFpcnMiLCJ2ZXJzaW9uIiwidGFyZ2V0IiwiY2hhbmdlc1RyaWdnZXJlciIsIkhvdFJlbG9hZGVyU2VydmVyXzEiLCJsaXN0ZW4iLCJzaWduQ2hhbmdlIiwiY2hhbmdlc190cmlnZ2VyZXJfMSIsIk1lc3NhZ2UiLCJyZWZlcmVuY2VOdW1iZXIiLCJtZXNzYWdlIiwiYWRkaXRpb25hbERhdGEiLCJnZXRQcmVmaXgiLCJyZWZMaW5rIiwicmVmZXJlbmNlX2RvY3NfY29uc3RhbnRzXzEiLCJsb2dfY29uc3RhbnRzXzEiLCJNZXNzYWdlXzEiLCJtaWRkbGV3YXJlX2luamVjdG9yXzEiLCJtaWRkbGV3YXJlSW5qZWN0b3IiLCJzb3VyY2UiLCJzb3VyY2VGYWN0b3J5Iiwic291cmNlcyIsIndlYnBhY2tfc291cmNlc18xIiwibWF0Y2hCZ09yQ29udGVudE9yUGFnZSIsImluY2x1ZGVzIiwiZnJvbSIsInJlZHVjZSIsInByZXYiLCJmaWxlcyIsImVudHJ5UG9pbnQiLCJ0ZXN0IiwiZmluYWxTcmMiLCJtaWRkbGVXYXJlU291cmNlQnVpbGRlciIsInRtcGwiLCJ3ZXJfbWlkZGxld2FyZV9yYXdfMSIsIldTSG9zdCIsIlJFQ09OTkVDVF9JTlRFUlZBTCIsIm1pZGRsZXdhcmVfY29uZmlnX2NvbnN0YW50c18xIiwiUkVDT05ORUNUX0FUVEVNUFQiLCJTT0NLRVRfRVJSX0NPREVfUkVGIiwicG9seWZpbGxTb3VyY2UiLCJyYXdfbG9hZGVyX3dlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xIiwic2lnbmFscyIsImRlYm91bmNlU2lnbmFsIiwiZGVib3VjaW5nRnJhbWUiLCJjb250ZXh0IiwiZnVuYyIsImZhc3RSZWxvYWRCbG9ja2VyIiwibWF4Q2FsbHMiLCJ3YWl0IiwiY2FsbHMiLCJpbldhaXQiLCJpbnRlcnZhbCIsImxvZ0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImxvZ0xldmVsIiwic2V0TG9nTGV2ZWwiLCJsZXZlbCIsImxvZyIsImNvbnNvbGUiLCJpbmZvIiwid2FybiIsImVycm9yIiwiZGVidWciLCJleHRyYWN0RW50cmllcyIsIndlYnBhY2tFbnRyeSIsIm1hbmlmZXN0UGF0aCIsIndlYnBhY2tPdXRwdXQiLCJtYW5pZmVzdEpzb24iLCJjb250ZW50X3NjcmlwdHMiLCJmaWxlbmFtZSIsIkVycm9yIiwic2NyaXB0cyIsIlR5cGVFcnJvciIsImVycm9yc18xIiwiYmdTY3JpcHRGaWxlTmFtZXMiLCJ0b1JlbW92ZSIsInJlcGxhY2UiLCJiZ1dlYnBhY2tFbnRyeSIsImtleXMiLCJmaW5kIiwiZW50cnlOYW1lIiwiYmdNYW5pZmVzdCIsImNvbnRlbnRFbnRyaWVzIiwibWFwIiwianMiLCJjb250ZW50SXRlbSIsImZpbHRlciIsInNpZ25SZWxvYWQiLCJzaWduUmVsb2FkZWQiLCJzaWduTG9nIiwiQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlciIsIkNvbXBpbGVyRXZlbnRzRmFjYWRlIiwiX2NvbXBpbGVyIiwiY2FsbCIsImhvb2tzIiwiY29tcGlsYXRpb24iLCJ0YXAiLCJleHRlbnNpb25OYW1lIiwiU2V0IiwiYWZ0ZXJPcHRpbWl6ZUNodW5rQXNzZXRzIiwiY2h1bmtzQWZ0ZXJPcHRpbWl6YXRpb24iLCJwcm9jZXNzQXNzZXRzIiwic3RhZ2UiLCJQUk9DRVNTX0FTU0VUU19TVEFHRV9BTkFMWVNFIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==