module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 261);
/******/ })
/************************************************************************/
/******/ ({

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Yx5q");


/***/ }),

/***/ "8ET1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "WKBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const useEnhancedEffect =  false ? undefined : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */

function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, mountedState ? children : fallback);
}

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (NoSsr);

/***/ }),

/***/ "Yx5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8ET1");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_material_ui_src_NoSsr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WKBU");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const data = {
  name: 'Frozen yoghurt',
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0
};

const rows = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(new Array(100)).map(() => data);

var _ref = __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Dessert (100g serving)"), __jsx("th", null, "Calories"), __jsx("th", null, "Fat\xA0(g)"), __jsx("th", null, "Carbs\xA0(g)"), __jsx("th", null, "Protein\xA0(g)")));

function TableRaw() {
  return __jsx(_packages_material_ui_src_NoSsr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    defer: true
  }, __jsx("table", null, _ref, __jsx("tbody", null, rows.map((row, index) => __jsx("tr", {
    key: index
  }, __jsx("th", {
    scope: "row"
  }, row.name), __jsx("td", null, row.calories), __jsx("td", null, row.fat), __jsx("td", null, row.carbs), __jsx("td", null, row.protein))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TableRaw);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ })

/******/ });