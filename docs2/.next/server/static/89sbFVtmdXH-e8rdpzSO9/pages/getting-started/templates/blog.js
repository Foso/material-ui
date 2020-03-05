module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 234);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+e5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jssPreset; });
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xP/R");
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("74b0");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XsBU");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3hEz");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("D/6r");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iM6+");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("on4p");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__);






 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0___default()(), jss_plugin_global__WEBPACK_IMPORTED_MODULE_1___default()(), jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2___default()(), jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3___default()(), jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4___default()(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    true ? null : undefined, jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6___default()()]
  };
}

/***/ }),

/***/ "+rSm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForkRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kCiw");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(refA, refValue);
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "/GhD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), 'Facebook'));

/***/ }),

/***/ "06W4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["a"] = (indigo);

/***/ }),

/***/ "0L7K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export html */
/* unused harmony export body */
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XpU0");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



const html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
const body = theme => Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  color: theme.palette.text.primary
}, theme.typography.body2, {
  backgroundColor: theme.palette.background.default,
  '@media print': {
    // Save printer ink.
    backgroundColor: theme.palette.common.white
  }
});
const styles = theme => ({
  '@global': {
    html,
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold
    },
    body: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      margin: 0
    }, body(theme), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      '&::backdrop': {
        backgroundColor: theme.palette.background.default
      }
    })
  }
});
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  const {
    children = null,
    classes
  } = props;
  /* eslint-enable no-unused-vars */

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children);
}

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));

/***/ }),

/***/ "0TPh":
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "0Zz2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSvgIcon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_src_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6dYU");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function createSvgIcon(path, displayName) {
  const Component = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => __jsx(_material_ui_src_SvgIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, props), path)));

  if (false) {}

  Component.muiName = _material_ui_src_SvgIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].muiName;
  return Component;
}

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7PpV");


/***/ }),

/***/ "2Fjn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("s4hn");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "3O2h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__("q1C7");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/mergeClasses/mergeClasses.js
var mergeClasses = __webpack_require__("AO+R");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/map.js
var map = __webpack_require__("6mFX");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ../packages/material-ui-styles/src/makeStyles/multiKeyStore.js

// Used https://github.com/thinkloop/multi-key-cache as inspiration
const multiKeyStore = {
  set: (cache, key1, key2, value) => {
    let subCache = cache.get(key1);

    if (!subCache) {
      subCache = new map_default.a();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ var makeStyles_multiKeyStore = (multiKeyStore);
// EXTERNAL MODULE: ../packages/material-ui-styles/src/useTheme/useTheme.js
var useTheme = __webpack_require__("mii5");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/StylesProvider/StylesProvider.js
var StylesProvider = __webpack_require__("IOrS");

// CONCATENATED MODULE: ../packages/material-ui-styles/src/makeStyles/indexCounter.js
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
let indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (false) {}

  return indexCounter;
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../packages/material-ui-utils/src/deepmerge.js
var deepmerge = __webpack_require__("mbNV");

// CONCATENATED MODULE: ../packages/material-ui-styles/src/getStylesCreator/getStylesCreator.js




function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === 'function';

  if (false) {}

  return {
    create: (theme, name) => {
      let styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (false) {}

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      const overrides = theme.overrides[name];

      const stylesWithOverrides = Object(objectSpread2["a" /* default */])({}, styles);

      keys_default()(overrides).forEach(key => {
        if (false) {}

        stylesWithOverrides[key] = Object(deepmerge["a" /* default */])(stylesWithOverrides[key], overrides[key]);
      });

      return stylesWithOverrides;
    },
    options: {}
  };
}
// CONCATENATED MODULE: ../packages/material-ui-styles/src/getStylesCreator/noopTheme.js
// We use the same empty object to ref count the styles that don't need a theme object.
const noopTheme = {};
/* harmony default export */ var getStylesCreator_noopTheme = (noopTheme);
// CONCATENATED MODULE: ../packages/material-ui-styles/src/makeStyles/makeStyles.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeStyles; });












function getClasses({
  state,
  stylesOptions
}, classes, Component) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  let generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = Object(mergeClasses["a" /* default */])({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }

  return state.cacheClasses.value;
}

function attach({
  state,
  theme,
  stylesOptions,
  stylesCreator,
  name
}, props) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  let sheetManager = makeStyles_multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    makeStyles_multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  const options = Object(objectSpread2["a" /* default */])({}, stylesCreator.options, {}, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    let staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = makeStyles_multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    const styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, Object(objectSpread2["a" /* default */])({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        makeStyles_multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = Object(external_jss_["getDynamicStyles"])(styles);
  }

  if (sheetManager.dynamicStyles) {
    const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, Object(objectSpread2["a" /* default */])({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = Object(mergeClasses["a" /* default */])({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update({
  state
}, props) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach({
  state,
  theme,
  stylesOptions,
  stylesCreator
}) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  const sheetManager = makeStyles_multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    makeStyles_multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  const key = external_react_default.a.useRef([]);
  let output; // Store "generation" key. Just returns a new object every time

  const currentKey = external_react_default.a.useMemo(() => ({}), values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  external_react_default.a.useEffect(() => () => {
    if (output) {
      output();
    }
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator, options = {}) {
  const {
    // alias for classNamePrefix, if provided will listen to theme (required for theme.overrides)
    name,
    // Help with debuggability.
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = getStylesCreator_noopTheme
  } = options,
        stylesOptions2 = Object(objectWithoutProperties["a" /* default */])(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  const stylesCreator = getStylesCreator(stylesOrCreator);
  const classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  return (props = {}) => {
    const theme = Object(useTheme["a" /* default */])() || defaultTheme;

    const stylesOptions = Object(objectSpread2["a" /* default */])({}, external_react_default.a.useContext(StylesProvider["a" /* StylesContext */]), {}, stylesOptions2);

    const instance = external_react_default.a.useRef();
    const shouldUpdate = external_react_default.a.useRef();
    useSynchronousEffect(() => {
      const current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return () => {
        detach(current);
      };
    }, [theme, stylesCreator]);
    external_react_default.a.useEffect(() => {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    return getClasses(instance.current, props.classes, Component);
  };
}

/***/ }),

/***/ "3hEz":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-camel-case");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4VR2":
/***/ (function(module, exports) {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ "6JSk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_for__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XeVE");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_for__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_for__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XzKa");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);


const hasSymbol = typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === 'function' && _babel_runtime_corejs2_core_js_symbol_for__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["a"] = (hasSymbol ? _babel_runtime_corejs2_core_js_symbol_for__WEBPACK_IMPORTED_MODULE_0___default()('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "6dYU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rKPb");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(24),
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    })
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },

  /* Styles applied to the root element if `color="action"`. */
  colorAction: {
    color: theme.palette.action.active
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main
  },

  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    color: theme.palette.action.disabled
  },

  /* Styles applied to the root element if `fontSize="inherit"`. */
  fontSizeInherit: {
    fontSize: 'inherit'
  },

  /* Styles applied to the root element if `fontSize="small"`. */
  fontSizeSmall: {
    fontSize: theme.typography.pxToRem(20)
  },

  /* Styles applied to the root element if `fontSize="large"`. */
  fontSizeLarge: {
    fontSize: theme.typography.pxToRem(35)
  }
});
const SvgIcon = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SvgIcon(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'inherit',
    component: Component = 'svg',
    fontSize = 'default',
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, color !== 'inherit' && classes[`color${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color)}`], fontSize !== 'default' && classes[`fontSize${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(fontSize)}`]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : 'true',
    role: titleAccess ? 'img' : 'presentation',
    ref: ref
  }, other), children, titleAccess ? __jsx("title", null, titleAccess) : null);
});
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon));

/***/ }),

/***/ "6mFX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "6xHO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isWidthUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isWidthDown; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("T4GM");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0TPh");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LMpM");
/* harmony import */ var _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZQQV");
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LHO+");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






 // By default, returns true if screen width is the same or greater than the given breakpoint.

const isWidthUp = (breakpoint, width, inclusive = true) => {
  if (inclusive) {
    return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(breakpoint) <= _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(width);
  }

  return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(breakpoint) < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

const isWidthDown = (breakpoint, width, inclusive = true) => {
  if (inclusive) {
    return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(width) <= _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(breakpoint);
  }

  return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(width) < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_6__[/* keys */ "b"].indexOf(breakpoint);
};
const useEnhancedEffect = true ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : undefined;

const withWidth = (options = {}) => Component => {
  const {
    withTheme: withThemeOption = false,
    noSSR = false,
    initialWidth: initialWidthOption
  } = options;

  function WithWidth(props) {
    const contextTheme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
    const theme = props.theme || contextTheme;

    const _getThemeProps = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
      theme,
      name: 'MuiWithWidth',
      props: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props)
    }),
          {
      initialWidth,
      width
    } = _getThemeProps,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_getThemeProps, ["initialWidth", "width"]);

    const [mountedState, setMountedState] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
    useEnhancedEffect(() => {
      setMountedState(true);
    }, []);
    /**
     * innerWidth |xs      sm      md      lg      xl
     *            |-------|-------|-------|-------|------>
     * width      |  xs   |  sm   |  md   |  lg   |  xl
     */

    const keys = [...theme.breakpoints.keys].reverse();
    const widthComputed = keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = Object(_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null);

    const more = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      width: width || (mountedState || noSSR ? widthComputed : undefined) || initialWidth || initialWidthOption
    }, withThemeOption ? {
      theme
    } : {}, {}, other); // When rendering the component on the server,
    // we have no idea about the client browser screen width.
    // In order to prevent blinks and help the reconciliation of the React tree
    // we are not rendering the child component.
    //
    // An alternative is to use the `initialWidth` property.


    if (more.width === undefined) {
      return null;
    }

    return __jsx(Component, more);
  }

  if (false) {}

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithWidth, Component);
  return WithWidth;
};

/* harmony default export */ __webpack_exports__["a"] = (withWidth);

/***/ }),

/***/ "74b0":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-global");

/***/ }),

/***/ "76W3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["a"] = (grey);

/***/ }),

/***/ "7PpV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/modules/components/AppTheme.js
var AppTheme = __webpack_require__("uFO+");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/makeStyles.js
var makeStyles = __webpack_require__("yZEQ");

// EXTERNAL MODULE: ../packages/material-ui/src/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__("0L7K");

// EXTERNAL MODULE: ../packages/material-ui/src/Grid/Grid.js
var Grid = __webpack_require__("pQ8Y");

// EXTERNAL MODULE: ../packages/material-ui/src/Container/Container.js
var Container = __webpack_require__("Uoj6");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/GitHub.js
var GitHub = __webpack_require__("Oqza");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Facebook.js
var Facebook = __webpack_require__("/GhD");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Twitter.js
var Twitter = __webpack_require__("dvVm");

// EXTERNAL MODULE: ../packages/material-ui/src/Toolbar/Toolbar.js
var Toolbar = __webpack_require__("Gwih");

// EXTERNAL MODULE: ../packages/material-ui/src/Button/Button.js
var Button = __webpack_require__("O8uh");

// EXTERNAL MODULE: ../packages/material-ui/src/IconButton/IconButton.js
var IconButton = __webpack_require__("l/nz");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Search.js
var Search = __webpack_require__("woQm");

// EXTERNAL MODULE: ../packages/material-ui/src/Typography/Typography.js
var Typography = __webpack_require__("Oy88");

// EXTERNAL MODULE: ../packages/material-ui/src/Link/Link.js
var Link = __webpack_require__("r6IM");

// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/Header.js
var __jsx = external_react_default.a.createElement;








const useStyles = Object(makeStyles["a" /* default */])(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

var Header_ref = __jsx(Button["a" /* default */], {
  size: "small"
}, "Subscribe");

var _ref2 = __jsx(IconButton["a" /* default */], null, __jsx(Search["a" /* default */], null));

var _ref3 = __jsx(Button["a" /* default */], {
  variant: "outlined",
  size: "small"
}, "Sign up");

function Header(props) {
  const classes = useStyles();
  const {
    sections,
    title
  } = props;
  return __jsx(external_react_default.a.Fragment, null, __jsx(Toolbar["a" /* default */], {
    className: classes.toolbar
  }, Header_ref, __jsx(Typography["a" /* default */], {
    component: "h2",
    variant: "h5",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle
  }, title), _ref2, _ref3), __jsx(Toolbar["a" /* default */], {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary
  }, sections.map(section => __jsx(Link["a" /* default */], {
    color: "inherit",
    noWrap: true,
    key: section.title,
    variant: "body2",
    href: section.url,
    className: classes.toolbarLink
  }, section.title))));
}
// EXTERNAL MODULE: ../packages/material-ui/src/Paper/Paper.js
var Paper = __webpack_require__("VPks");

// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/MainFeaturedPost.js
var MainFeaturedPost_jsx = external_react_default.a.createElement;






const MainFeaturedPost_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));
function MainFeaturedPost(props) {
  const classes = MainFeaturedPost_useStyles();
  const {
    post
  } = props;
  return MainFeaturedPost_jsx(Paper["a" /* default */], {
    className: classes.mainFeaturedPost,
    style: {
      backgroundImage: `url(${post.image})`
    }
  }, MainFeaturedPost_jsx("img", {
    style: {
      display: 'none'
    },
    src: post.image,
    alt: post.imageText
  }), MainFeaturedPost_jsx("div", {
    className: classes.overlay
  }), MainFeaturedPost_jsx(Grid["a" /* default */], {
    container: true
  }, MainFeaturedPost_jsx(Grid["a" /* default */], {
    item: true,
    md: 6
  }, MainFeaturedPost_jsx("div", {
    className: classes.mainFeaturedPostContent
  }, MainFeaturedPost_jsx(Typography["a" /* default */], {
    component: "h1",
    variant: "h3",
    color: "inherit",
    gutterBottom: true
  }, post.title), MainFeaturedPost_jsx(Typography["a" /* default */], {
    variant: "h5",
    color: "inherit",
    paragraph: true
  }, post.description), MainFeaturedPost_jsx(Link["a" /* default */], {
    variant: "subtitle1",
    href: "#"
  }, post.linkText)))));
}
// EXTERNAL MODULE: ../packages/material-ui/src/Card/Card.js
var Card = __webpack_require__("MznO");

// EXTERNAL MODULE: ../packages/material-ui/src/CardActionArea/CardActionArea.js
var CardActionArea = __webpack_require__("H6vb");

// EXTERNAL MODULE: ../packages/material-ui/src/CardContent/CardContent.js
var CardContent = __webpack_require__("QG8U");

// EXTERNAL MODULE: ../packages/material-ui/src/CardMedia/CardMedia.js
var CardMedia = __webpack_require__("8OZD");

// EXTERNAL MODULE: ../packages/material-ui/src/Hidden/Hidden.js + 2 modules
var Hidden = __webpack_require__("t9tc");

// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/FeaturedPost.js
var FeaturedPost_jsx = external_react_default.a.createElement;









const FeaturedPost_useStyles = Object(makeStyles["a" /* default */])({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

var FeaturedPost_ref = FeaturedPost_jsx(Typography["a" /* default */], {
  variant: "subtitle1",
  color: "primary"
}, "Continue reading...");

function FeaturedPost(props) {
  const classes = FeaturedPost_useStyles();
  const {
    post
  } = props;
  return FeaturedPost_jsx(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 6
  }, FeaturedPost_jsx(CardActionArea["a" /* default */], {
    component: "a",
    href: "#"
  }, FeaturedPost_jsx(Card["a" /* default */], {
    className: classes.card
  }, FeaturedPost_jsx("div", {
    className: classes.cardDetails
  }, FeaturedPost_jsx(CardContent["a" /* default */], null, FeaturedPost_jsx(Typography["a" /* default */], {
    component: "h2",
    variant: "h5"
  }, post.title), FeaturedPost_jsx(Typography["a" /* default */], {
    variant: "subtitle1",
    color: "textSecondary"
  }, post.date), FeaturedPost_jsx(Typography["a" /* default */], {
    variant: "subtitle1",
    paragraph: true
  }, post.description), FeaturedPost_ref)), FeaturedPost_jsx(Hidden["a" /* default */], {
    xsDown: true
  }, FeaturedPost_jsx(CardMedia["a" /* default */], {
    className: classes.cardMedia,
    image: post.image,
    title: post.imageTitle
  })))));
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: ../packages/material-ui/src/Divider/Divider.js
var Divider = __webpack_require__("FAXT");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__("4VR2");
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/Markdown.js


var Markdown_jsx = external_react_default.a.createElement;






const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
});

const options = {
  overrides: {
    h1: {
      component: Typography["a" /* default */],
      props: {
        gutterBottom: true,
        variant: 'h5'
      }
    },
    h2: {
      component: Typography["a" /* default */],
      props: {
        gutterBottom: true,
        variant: 'h6'
      }
    },
    h3: {
      component: Typography["a" /* default */],
      props: {
        gutterBottom: true,
        variant: 'subtitle1'
      }
    },
    h4: {
      component: Typography["a" /* default */],
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true
      }
    },
    p: {
      component: Typography["a" /* default */],
      props: {
        paragraph: true
      }
    },
    a: {
      component: Link["a" /* default */]
    },
    li: {
      component: Object(withStyles["default"])(styles)(_ref => {
        let {
          classes
        } = _ref,
            props = Object(objectWithoutProperties["a" /* default */])(_ref, ["classes"]);

        return Markdown_jsx("li", {
          className: classes.listItem
        }, Markdown_jsx(Typography["a" /* default */], Object(esm_extends["a" /* default */])({
          component: "span"
        }, props)));
      })
    }
  }
};
function Markdown(props) {
  return Markdown_jsx(external_markdown_to_jsx_default.a, Object(esm_extends["a" /* default */])({
    options: options
  }, props));
}
// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/Main.js

var Main_jsx = external_react_default.a.createElement;






const Main_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  markdown: Object(objectSpread2["a" /* default */])({}, theme.typography.body2, {
    padding: theme.spacing(3, 0)
  })
}));

var Main_ref = Main_jsx(Divider["a" /* default */], null);

function Main(props) {
  const classes = Main_useStyles();
  const {
    posts,
    title
  } = props;
  return Main_jsx(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 8
  }, Main_jsx(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, title), Main_ref, posts.map(post => Main_jsx(Markdown, {
    className: classes.markdown,
    key: post.substring(0, 40)
  }, post)));
}
// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;






const Sidebar_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  }
}));
function Sidebar(props) {
  const classes = Sidebar_useStyles();
  const {
    archives,
    description,
    social,
    title
  } = props;
  return Sidebar_jsx(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 4
  }, Sidebar_jsx(Paper["a" /* default */], {
    elevation: 0,
    className: classes.sidebarAboutBox
  }, Sidebar_jsx(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, title), Sidebar_jsx(Typography["a" /* default */], null, description)), Sidebar_jsx(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true,
    className: classes.sidebarSection
  }, "Archives"), archives.map(archive => Sidebar_jsx(Link["a" /* default */], {
    display: "block",
    variant: "body1",
    href: archive.url,
    key: archive.title
  }, archive.title)), Sidebar_jsx(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true,
    className: classes.sidebarSection
  }, "Social"), social.map(network => Sidebar_jsx(Link["a" /* default */], {
    display: "block",
    variant: "body1",
    href: "#",
    key: network
  }, Sidebar_jsx(Grid["a" /* default */], {
    container: true,
    direction: "row",
    spacing: 1,
    alignItems: "center"
  }, Sidebar_jsx(Grid["a" /* default */], {
    item: true
  }, Sidebar_jsx(network.icon, null)), Sidebar_jsx(Grid["a" /* default */], {
    item: true
  }, network.name)))));
}
// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/Footer.js
var Footer_jsx = external_react_default.a.createElement;






var Footer_ref = Footer_jsx(Link["a" /* default */], {
  color: "inherit",
  href: "https://material-ui.com/"
}, "Your Website");

function Copyright() {
  return Footer_jsx(Typography["a" /* default */], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', Footer_ref, ' ', new Date().getFullYear(), '.');
}

const Footer_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

var Footer_ref2 = Footer_jsx(Copyright, null);

function Footer(props) {
  const classes = Footer_useStyles();
  const {
    description,
    title
  } = props;
  return Footer_jsx("footer", {
    className: classes.footer
  }, Footer_jsx(Container["a" /* default */], {
    maxWidth: "lg"
  }, Footer_jsx(Typography["a" /* default */], {
    variant: "h6",
    align: "center",
    gutterBottom: true
  }, title), Footer_jsx(Typography["a" /* default */], {
    variant: "subtitle1",
    align: "center",
    color: "textSecondary",
    component: "p"
  }, description), Footer_ref2));
}
// EXTERNAL MODULE: ./src/pages/getting-started/templates/blog/blog-post.1.md
var blog_post_1 = __webpack_require__("hHq4");
var blog_post_1_default = /*#__PURE__*/__webpack_require__.n(blog_post_1);

// EXTERNAL MODULE: ./src/pages/getting-started/templates/blog/blog-post.2.md
var blog_post_2 = __webpack_require__("Q00E");
var blog_post_2_default = /*#__PURE__*/__webpack_require__.n(blog_post_2);

// EXTERNAL MODULE: ./src/pages/getting-started/templates/blog/blog-post.3.md
var blog_post_3 = __webpack_require__("bjLr");
var blog_post_3_default = /*#__PURE__*/__webpack_require__.n(blog_post_3);

// CONCATENATED MODULE: ./src/pages/getting-started/templates/blog/Blog.js
var Blog_jsx = external_react_default.a.createElement;

















const Blog_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));
const Blog_sections = [{
  title: 'Technology',
  url: '#'
}, {
  title: 'Design',
  url: '#'
}, {
  title: 'Culture',
  url: '#'
}, {
  title: 'Business',
  url: '#'
}, {
  title: 'Politics',
  url: '#'
}, {
  title: 'Opinion',
  url: '#'
}, {
  title: 'Science',
  url: '#'
}, {
  title: 'Health',
  url: '#'
}, {
  title: 'Style',
  url: '#'
}, {
  title: 'Travel',
  url: '#'
}];
const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…'
};
const featuredPosts = [{
  title: 'Featured post',
  date: 'Nov 12',
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text'
}, {
  title: 'Post title',
  date: 'Nov 11',
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text'
}];
const Blog_posts = [blog_post_1_default.a, blog_post_2_default.a, blog_post_3_default.a];
const sidebar = {
  title: 'About',
  description: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [{
    title: 'March 2020',
    url: '#'
  }, {
    title: 'February 2020',
    url: '#'
  }, {
    title: 'January 2020',
    url: '#'
  }, {
    title: 'November 1999',
    url: '#'
  }, {
    title: 'October 1999',
    url: '#'
  }, {
    title: 'September 1999',
    url: '#'
  }, {
    title: 'August 1999',
    url: '#'
  }, {
    title: 'July 1999',
    url: '#'
  }, {
    title: 'June 1999',
    url: '#'
  }, {
    title: 'May 1999',
    url: '#'
  }, {
    title: 'April 1999',
    url: '#'
  }],
  social: [{
    name: 'GitHub',
    icon: GitHub["a" /* default */]
  }, {
    name: 'Twitter',
    icon: Twitter["a" /* default */]
  }, {
    name: 'Facebook',
    icon: Facebook["a" /* default */]
  }]
};

var Blog_ref = Blog_jsx(CssBaseline["a" /* default */], null);

var Blog_ref2 = Blog_jsx(Header, {
  title: "Blog",
  sections: Blog_sections
});

var Blog_ref3 = Blog_jsx(MainFeaturedPost, {
  post: mainFeaturedPost
});

var _ref4 = Blog_jsx(Main, {
  title: "From the firehose",
  posts: Blog_posts
});

var _ref5 = Blog_jsx(Footer, {
  title: "Footer",
  description: "Something here to give the footer a purpose!"
});

function Blog() {
  const classes = Blog_useStyles();
  return Blog_jsx(external_react_default.a.Fragment, null, Blog_ref, Blog_jsx(Container["a" /* default */], {
    maxWidth: "lg"
  }, Blog_ref2, Blog_jsx("main", null, Blog_ref3, Blog_jsx(Grid["a" /* default */], {
    container: true,
    spacing: 4
  }, featuredPosts.map(post => Blog_jsx(FeaturedPost, {
    key: post.title,
    post: post
  }))), Blog_jsx(Grid["a" /* default */], {
    container: true,
    spacing: 5,
    className: classes.mainGrid
  }, _ref4, Blog_jsx(Sidebar, {
    title: sidebar.title,
    description: sidebar.description,
    archives: sidebar.archives,
    social: sidebar.social
  })))), _ref5);
}
// CONCATENATED MODULE: ./pages/getting-started/templates/blog.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
var blog_jsx = external_react_default.a.createElement;




var blog_ref = blog_jsx(AppTheme["a" /* default */], null, blog_jsx(Blog, null));

function Page() {
  return blog_ref;
}

/***/ }),

/***/ "7QLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ../packages/material-ui/src/utils/useForkRef.js
var useForkRef = __webpack_require__("+rSm");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/useEventCallback.js
var useEventCallback = __webpack_require__("wFh9");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: ../packages/material-ui/src/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("WKBU");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/focusVisible.js
var utils_focusVisible = __webpack_require__("mspF");

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// CONCATENATED MODULE: ../packages/material-ui/src/ButtonBase/Ripple.js
var __jsx = external_react_["createElement"];



const useEnhancedEffect = true ? external_react_["useEffect"] : undefined;
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  const {
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited = () => {},
    timeout
  } = props;
  const [leaving, setLeaving] = external_react_["useState"](false);
  const rippleClassName = external_clsx_default()(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = external_clsx_default()(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  const handleExited = Object(useEventCallback["a" /* default */])(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect(() => {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      const timeoutId = setTimeout(handleExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return __jsx("span", {
    className: rippleClassName,
    style: rippleStyles
  }, __jsx("span", {
    className: childClassName
  }));
}

/* harmony default export */ var ButtonBase_Ripple = (Ripple);
// CONCATENATED MODULE: ../packages/material-ui/src/ButtonBase/TouchRipple.js


var TouchRipple_jsx = external_react_["createElement"];





const DURATION = 550;
const DELAY_RIPPLE = 80;
const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  },

  /* Styles applied to the internal `Ripple` components `ripple` class. */
  ripple: {
    opacity: 0,
    position: 'absolute'
  },

  /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
  rippleVisible: {
    opacity: 0.3,
    transform: 'scale(1)',
    animation: `$enter ${DURATION}ms ${theme.transitions.easing.easeInOut}`
  },

  /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
  ripplePulsate: {
    animationDuration: `${theme.transitions.duration.shorter}ms`
  },

  /* Styles applied to the internal `Ripple` components `child` class. */
  child: {
    opacity: 1,
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },

  /* Styles applied to the internal `Ripple` components `childLeaving` class. */
  childLeaving: {
    opacity: 0,
    animation: `$exit ${DURATION}ms ${theme.transitions.easing.easeInOut}`
  },

  /* Styles applied to the internal `Ripple` components `childPulsate` class. */
  childPulsate: {
    position: 'absolute',
    left: 0,
    top: 0,
    animation: `$pulsate 2500ms ${theme.transitions.easing.easeInOut} 200ms infinite`
  },
  '@keyframes enter': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0.1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.3
    }
  },
  '@keyframes exit': {
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  },
  '@keyframes pulsate': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(0.92)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  }
});
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

const TouchRipple_TouchRipple = external_react_["forwardRef"](function TouchRipple(props, ref) {
  const {
    center: centerProp = false,
    classes,
    className
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["center", "classes", "className"]);

  const [ripples, setRipples] = external_react_["useState"]([]);
  const nextKey = external_react_["useRef"](0);
  const rippleCallback = external_react_["useRef"](null);
  external_react_["useEffect"](() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  const ignoringMouseDown = external_react_["useRef"](false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  const startTimer = external_react_["useRef"](null); // This is the hook called once the previous timeout is ready.

  const startTimerCommit = external_react_["useRef"](null);
  const container = external_react_["useRef"](null);
  external_react_["useEffect"](() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = external_react_["useCallback"](params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, TouchRipple_jsx(ButtonBase_Ripple, {
      key: nextKey.current,
      classes: classes,
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    })]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = external_react_["useCallback"]((event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes

    } = options;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    let rippleX;
    let rippleY;
    let rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
      const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = external_react_["useCallback"](() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = external_react_["useCallback"]((event, cb) => {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  external_react_["useImperativeHandle"](ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return TouchRipple_jsx("span", Object(esm_extends["a" /* default */])({
    className: external_clsx_default()(classes.root, className),
    ref: container
  }, other), TouchRipple_jsx(external_react_transition_group_["TransitionGroup"], {
    component: null,
    exit: true
  }, ripples));
});
/* harmony default export */ var ButtonBase_TouchRipple = (Object(withStyles["default"])(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})(external_react_["memo"](TouchRipple_TouchRipple)));
// CONCATENATED MODULE: ../packages/material-ui/src/ButtonBase/ButtonBase.js
/* unused harmony export styles */


var ButtonBase_jsx = external_react_["createElement"];










const ButtonBase_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

const ButtonBase_ButtonBase = external_react_["forwardRef"](function ButtonBase(props, ref) {
  const {
    action,
    buttonRef: buttonRefProp,
    centerRipple = false,
    children,
    classes,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    onBlur,
    onClick,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    onDragLeave,
    tabIndex = 0,
    TouchRippleProps,
    type = 'button'
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  const buttonRef = external_react_["useRef"](null);

  function getButtonNode() {
    // #StrictMode ready
    return external_react_dom_["findDOMNode"](buttonRef.current);
  }

  const rippleRef = external_react_["useRef"](null);
  const [focusVisible, setFocusVisible] = external_react_["useState"](false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  const {
    isFocusVisible,
    onBlurVisible,
    ref: focusVisibleRef
  } = Object(utils_focusVisible["a" /* useIsFocusVisible */])();
  external_react_["useImperativeHandle"](action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  external_react_["useEffect"](() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return Object(useEventCallback["a" /* default */])(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = Object(useEventCallback["a" /* default */])(event => {
    if (disabled) {
      return;
    } // Fix for https://github.com/facebook/react/issues/7769


    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  const keydownRef = external_react_["useRef"](false);
  const handleKeyDown = Object(useEventCallback["a" /* default */])(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter') {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = Object(useEventCallback["a" /* default */])(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  const buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  const handleUserRef = Object(useForkRef["a" /* default */])(buttonRefProp, ref);
  const handleOwnRef = Object(useForkRef["a" /* default */])(focusVisibleRef, buttonRef);
  const handleRef = Object(useForkRef["a" /* default */])(handleUserRef, handleOwnRef);
  return ButtonBase_jsx(ComponentProp, Object(esm_extends["a" /* default */])({
    className: external_clsx_default()(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, ButtonBase_jsx(NoSsr["a" /* default */], null, !disableRipple && !disabled ?
  /* TouchRipple is only needed client-side, x2 boost on the server. */
  ButtonBase_jsx(ButtonBase_TouchRipple, Object(esm_extends["a" /* default */])({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null));
});
/* harmony default export */ var src_ButtonBase_ButtonBase = __webpack_exports__["a"] = (Object(withStyles["default"])(ButtonBase_styles, {
  name: 'MuiButtonBase'
})(ButtonBase_ButtonBase));

/***/ }),

/***/ "8OZD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XpU0");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];




const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const CardMedia = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function CardMedia(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'div',
    image,
    src,
    style
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  const composedStyle = !isMediaComponent && image ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    backgroundImage: `url("${image}")`
  }, style) : style;
  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

/***/ }),

/***/ "9yTn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["a"] = (orange);

/***/ }),

/***/ "AO+R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeClasses; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");



function mergeClasses(options = {}) {
  const {
    baseClasses,
    newClasses,
    Component
  } = options;

  if (!newClasses) {
    return baseClasses;
  }

  const nextClasses = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, baseClasses);

  if (false) {}

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(newClasses).forEach(key => {
    if (false) {}

    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });

  return nextClasses;
}

/***/ }),

/***/ "B+1N":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/for");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "D/34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["a"] = (zIndex);

/***/ }),

/***/ "D/6r":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-default-unit");

/***/ }),

/***/ "EWRx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Head; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var _ref = __jsx("meta", {
  name: "viewport",
  content: "minimum-scale=1, initial-scale=1, width=device-width"
});

var _ref2 = __jsx("meta", {
  name: "twitter:card",
  content: "summary"
});

var _ref3 = __jsx("meta", {
  name: "twitter:site",
  content: "@MaterialUI"
});

var _ref4 = __jsx("meta", {
  name: "twitter:image",
  content: "https://material-ui.com/static/logo.png"
});

var _ref5 = __jsx("meta", {
  property: "og:type",
  content: "website"
});

var _ref6 = __jsx("meta", {
  property: "og:image",
  content: "https://material-ui.com/static/logo.png"
});

var _ref7 = __jsx("meta", {
  property: "og:ttl",
  content: "604800"
});

var _ref8 = __jsx("meta", {
  name: "docsearch:version",
  content: "master"
});

function Head(props) {
  const t = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options.t);
  const {
    description = t('strapline'),
    title = t('headTitle'),
    children
  } = props;
  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options.userLanguage);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, _ref, __jsx("title", null, title), __jsx("meta", {
    name: "description",
    content: description
  }), _ref2, _ref3, __jsx("meta", {
    name: "twitter:title",
    content: title
  }), __jsx("meta", {
    name: "twitter:description",
    content: description
  }), _ref4, _ref5, __jsx("meta", {
    property: "og:title",
    content: title
  }), __jsx("meta", {
    property: "og:url",
    content: `https://material-ui.com${next_router__WEBPACK_IMPORTED_MODULE_2__["Router"]._rewriteUrlForNextExport(router.asPath)}`
  }), __jsx("meta", {
    property: "og:description",
    content: description
  }), _ref6, _ref7, __jsx("meta", {
    name: "docsearch:language",
    content: userLanguage
  }), _ref8, children);
}

/***/ }),

/***/ "FAXT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cYeA");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    height: 1,
    margin: 0,
    // Reset browser default style.
    border: 'none',
    flexShrink: 0,
    backgroundColor: theme.palette.divider
  },

  /* Styles applied to the root element if `absolute={true}`. */
  absolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },

  /* Styles applied to the root element if `variant="inset"`. */
  inset: {
    marginLeft: 72
  },

  /* Styles applied to the root element if `light={true}`. */
  light: {
    backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.divider, 0.08)
  },

  /* Styles applied to the root element if `variant="middle"`. */
  middle: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    height: '100%',
    width: 1
  },

  /* Styles applied to the root element if `flexItem={true}`. */
  flexItem: {
    alignSelf: 'stretch',
    height: 'auto'
  }
});
const Divider = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Divider(props, ref) {
  const {
    absolute = false,
    classes,
    className,
    component: Component = 'hr',
    flexItem = false,
    light = false,
    orientation = 'horizontal',
    role = Component !== 'hr' ? 'separator' : undefined,
    variant = 'fullWidth'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);

  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiDivider'
})(Divider));

/***/ }),

/***/ "FJkE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["a"] = (green);

/***/ }),

/***/ "FdmI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "GeB9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["a"] = (blue);

/***/ }),

/***/ "Gwih":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `disableGutters={false}`. */
  gutters: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },

  /* Styles applied to the root element if `variant="regular"`. */
  regular: theme.mixins.toolbar,

  /* Styles applied to the root element if `variant="dense"`. */
  dense: {
    minHeight: 48
  }
});
const Toolbar = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Toolbar(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div',
    disableGutters = false,
    variant = 'regular'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component", "disableGutters", "variant"]);

  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, classes[variant], className, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiToolbar'
})(Toolbar));

/***/ }),

/***/ "H6vb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7QLS");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    textAlign: 'inherit',
    width: '100%',
    '&:hover $focusHighlight': {
      opacity: theme.palette.action.hoverOpacity
    },
    '&$focusVisible $focusHighlight': {
      opacity: 0.12
    }
  },

  /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
  focusVisible: {},

  /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
  focusHighlight: {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    opacity: 0,
    backgroundColor: 'currentcolor',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.short
    })
  }
});
const CardActionArea = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardActionArea(props, ref) {
  const {
    children,
    classes,
    className,
    focusVisibleClassName
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "focusVisibleClassName"]);

  return __jsx(_ButtonBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className),
    focusVisibleClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()(focusVisibleClassName, classes.focusVisible),
    ref: ref
  }, other), children, __jsx("span", {
    className: classes.focusHighlight
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiCardActionArea'
})(CardActionArea));

/***/ }),

/***/ "IOrS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sheetsManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StylesProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6mFX");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IR3T");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q1C7");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+e5d");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




 // Default JSS instance.

const jss = Object(jss__WEBPACK_IMPORTED_MODULE_5__["create"])(Object(_jssPreset__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

const generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(); // Exported for test purposes

const sheetsManager = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a();
const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
const StylesContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(defaultOptions);

if (false) {}

let injectFirstNode;
function StylesProvider(props) {
  const {
    children,
    injectFirst = false,
    disableGeneration = false
  } = props,
        localOptions = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "injectFirst", "disableGeneration"]);

  const outerOptions = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(StylesContext);

  const context = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, outerOptions, {
    disableGeneration
  }, localOptions);

  if (false) {}

  if (false) {}

  if (false) {}

  if (!context.jss.options.insertionPoint && injectFirst && false) {
    if (!injectFirstNode) {
      const head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = Object(jss__WEBPACK_IMPORTED_MODULE_5__["create"])({
      plugins: Object(_jssPreset__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return __jsx(StylesContext.Provider, {
    value: context
  }, children);
}

if (false) {}

/***/ }),

/***/ "IR3T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createGenerateClassName; });
/* harmony import */ var _ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6JSk");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

const pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName(options = {}) {
  const {
    disableGlobal = false,
    productionPrefix = 'jss',
    seed = ''
  } = options;
  const seedPrefix = seed === '' ? '' : `${seed}-`;
  let ruleCounter = 0;
  return (rule, styleSheet) => {
    ruleCounter += 1;

    if (false) {}

    const name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}`;
      }

      const prefix = `${seedPrefix}${name}-${rule.key}`;

      if (!styleSheet.options.theme[_ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] || seed !== '') {
        return prefix;
      }

      return `${prefix}-${ruleCounter}`;
    }

    if (true) {
      return `${seedPrefix}${productionPrefix}${ruleCounter}`;
    }

    const suffix = `${rule.key}-${ruleCounter}`; // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}`;
    }

    return `${seedPrefix}${suffix}`;
  };
}

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Kjv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["a"] = (common);

/***/ }),

/***/ "LHO+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMediaQuery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mii5");
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("T4GM");



function useMediaQuery(queryInput, options = {}) {
  const theme = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  const props = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (false) {}

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  const supportMatchMedia =  false && false;

  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    noSsr = false,
    ssrMatchMedia = null
  } = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {}, options);

  const [match, setMatch] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  });
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia(query);

    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/Foso/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);
  return match;
}

/***/ }),

/***/ "LMpM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTheme; });
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mii5");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qHc8");


function useTheme() {
  return Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
}

/***/ }),

/***/ "MznO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VPks");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XpU0");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
const Card = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Card(props, ref) {
  const {
    classes,
    className,
    raised = false
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "raised"]);

  return __jsx(_Paper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiCard'
})(Card));

/***/ }),

/***/ "O8uh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XpU0");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cYeA");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7QLS");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rKPb");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];






const styles = theme => ({
  /* Styles applied to the root element. */
  root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.button, {
    boxSizing: 'border-box',
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      '&$disabled': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  }),

  /* Styles applied to the span element that wraps the children. */
  label: {
    width: '100%',
    // Ensure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },

  /* Styles applied to the root element if `variant="text"`. */
  text: {
    padding: '6px 8px'
  },

  /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    padding: '5px 15px',
    border: `1px solid ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabledBackground}`
    }
  },

  /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.secondary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`
    }
  },

  /* Styles applied to the root element if `variant="contained"`. */
  contained: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: theme.palette.grey.A100,
      boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: theme.shadows[2],
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    '&$focusVisible': {
      boxShadow: theme.shadows[6]
    },
    '&:active': {
      boxShadow: theme.shadows[8]
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    }
  },

  /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main
      }
    }
  },

  /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  },

  /* Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    '&$focusVisible': {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    '&$disabled': {
      boxShadow: 'none'
    }
  },

  /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit',
    borderColor: 'currentColor'
  },

  /* Styles applied to the root element if `size="small"` and `variant="text"`. */
  textSizeSmall: {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the root element if `size="large"` and `variant="text"`. */
  textSizeLarge: {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15)
  },

  /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
  outlinedSizeSmall: {
    padding: '3px 9px',
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
  outlinedSizeLarge: {
    padding: '7px 21px',
    fontSize: theme.typography.pxToRem(15)
  },

  /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
  containedSizeSmall: {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
  containedSizeLarge: {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15)
  },

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {},

  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {},

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  },

  /* Styles applied to the startIcon element if supplied. */
  startIcon: {
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    '&$iconSizeSmall': {
      marginLeft: -2
    }
  },

  /* Styles applied to the endIcon element if supplied. */
  endIcon: {
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    '&$iconSizeSmall': {
      marginRight: -2
    }
  },

  /* Styles applied to the icon element if supplied and `size="small"`. */
  iconSizeSmall: {
    '& > *:first-child': {
      fontSize: 18
    }
  },

  /* Styles applied to the icon element if supplied and `size="medium"`. */
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: 20
    }
  },

  /* Styles applied to the icon element if supplied and `size="large"`. */
  iconSizeLarge: {
    '& > *:first-child': {
      fontSize: 22
    }
  }
});
const Button = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Button(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'default',
    component = 'button',
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = 'medium',
    startIcon: startIconProp,
    type = 'button',
    variant = 'text'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  const startIcon = startIconProp && __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.startIcon, classes[`iconSize${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size)}`])
  }, startIconProp);

  const endIcon = endIconProp && __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.endIcon, classes[`iconSize${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size)}`])
  }, endIconProp);

  return __jsx(_ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes[`${variant}${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(color)}`], size !== 'medium' && [classes[`${variant}Size${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size)}`], classes[`size${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size)}`]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), __jsx("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ "Oqza":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
}), 'GitHub'));

/***/ }),

/***/ "Oy88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rKPb");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    margin: 0
  },

  /* Styles applied to the root element if `variant="body2"`. */
  body2: theme.typography.body2,

  /* Styles applied to the root element if `variant="body1"`. */
  body1: theme.typography.body1,

  /* Styles applied to the root element if `variant="caption"`. */
  caption: theme.typography.caption,

  /* Styles applied to the root element if `variant="button"`. */
  button: theme.typography.button,

  /* Styles applied to the root element if `variant="h1"`. */
  h1: theme.typography.h1,

  /* Styles applied to the root element if `variant="h2"`. */
  h2: theme.typography.h2,

  /* Styles applied to the root element if `variant="h3"`. */
  h3: theme.typography.h3,

  /* Styles applied to the root element if `variant="h4"`. */
  h4: theme.typography.h4,

  /* Styles applied to the root element if `variant="h5"`. */
  h5: theme.typography.h5,

  /* Styles applied to the root element if `variant="h6"`. */
  h6: theme.typography.h6,

  /* Styles applied to the root element if `variant="subtitle1"`. */
  subtitle1: theme.typography.subtitle1,

  /* Styles applied to the root element if `variant="subtitle2"`. */
  subtitle2: theme.typography.subtitle2,

  /* Styles applied to the root element if `variant="overline"`. */
  overline: theme.typography.overline,

  /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
  srOnly: {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden'
  },

  /* Styles applied to the root element if `align="left"`. */
  alignLeft: {
    textAlign: 'left'
  },

  /* Styles applied to the root element if `align="center"`. */
  alignCenter: {
    textAlign: 'center'
  },

  /* Styles applied to the root element if `align="right"`. */
  alignRight: {
    textAlign: 'right'
  },

  /* Styles applied to the root element if `align="justify"`. */
  alignJustify: {
    textAlign: 'justify'
  },

  /* Styles applied to the root element if `nowrap={true}`. */
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `gutterBottom={true}`. */
  gutterBottom: {
    marginBottom: '0.35em'
  },

  /* Styles applied to the root element if `paragraph={true}`. */
  paragraph: {
    marginBottom: 16
  },

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit'
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },

  /* Styles applied to the root element if `color="textPrimary"`. */
  colorTextPrimary: {
    color: theme.palette.text.primary
  },

  /* Styles applied to the root element if `color="textSecondary"`. */
  colorTextSecondary: {
    color: theme.palette.text.secondary
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main
  },

  /* Styles applied to the root element if `display="inline"`. */
  displayInline: {
    display: 'inline'
  },

  /* Styles applied to the root element if `display="block"`. */
  displayBlock: {
    display: 'block'
  }
});
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
const Typography = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Typography(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    color = 'initial',
    component,
    display = 'initial',
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes[`color${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color)}`], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes[`align${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(align)}`], display !== 'initial' && classes[`display${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(display)}`]),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ "PZTq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleBreakpoints; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("s20r");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Txzd");




 // The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (false) {}

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(propValue)) {
    const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(propValue).reduce((acc, breakpoint) => {
      acc[themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  const newStyleFunction = props => {
    const base = styleFunction(props);
    const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          theme: props.theme
        }, props[key]));
      }

      return acc;
    }, null);
    return Object(_merge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(base, extended);
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["a"] = (breakpoints);

/***/ }),

/***/ "Px1Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["a"] = (red);

/***/ }),

/***/ "Q00E":
/***/ (function(module, exports) {

module.exports = "# Another blog post\n\n#### March 23, 2020 by [Matt](/)\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\nNullam id dolor id nibh ultricies vehicula ut id elit.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\n"

/***/ }),

/***/ "QG8U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



const styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
const CardContent = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardContent(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component"]);

  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiCardContent'
})(CardContent));

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "T4GM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getThemeProps; });
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.props[name];
  let propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Txzd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mbNV");


function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

/* harmony default export */ __webpack_exports__["a"] = (merge);

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Uoj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rKPb");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];




const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'block',
    // Fix IE 11 layout when used with main.
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },

  /* Styles applied to the root element if `disableGutters={true}`. */
  disableGutters: {
    paddingLeft: 0,
    paddingRight: 0
  },

  /* Styles applied to the root element if `fixed={true}`. */
  fixed: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(theme.breakpoints.values).reduce((acc, breakpoint) => {
    const value = theme.breakpoints.values[breakpoint];

    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: value
      };
    }

    return acc;
  }, {}),

  /* Styles applied to the root element if `maxWidth="xs"`. */
  maxWidthXs: {
    [theme.breakpoints.up('xs')]: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  },

  /* Styles applied to the root element if `maxWidth="sm"`. */
  maxWidthSm: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm
    }
  },

  /* Styles applied to the root element if `maxWidth="md"`. */
  maxWidthMd: {
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md
    }
  },

  /* Styles applied to the root element if `maxWidth="lg"`. */
  maxWidthLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    }
  },

  /* Styles applied to the root element if `maxWidth="xl"`. */
  maxWidthXl: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.xl
    }
  }
});
const Container = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Container(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div',
    disableGutters = false,
    fixed = false,
    maxWidth = 'lg'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes[`maxWidth${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(String(maxWidth))}`]),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiContainer'
})(Container));

/***/ }),

/***/ "UthY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "VPks":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XpU0");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];



const styles = theme => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow
    };
  });
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"` */
    outlined: {
      border: `1px solid ${theme.palette.divider}`
    }
  }, elevations);
};
const Paper = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Paper(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div',
    square = false,
    elevation = 1,
    variant = 'elevation'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  if (false) {}

  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant === 'outlined' ? classes.outlined : classes[`elevation${elevation}`], !square && classes.rounded),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "VQPw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["a"] = (pink);

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

/***/ "WNP9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memoize; });
function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

/***/ }),

/***/ "XeVE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B+1N");

/***/ }),

/***/ "XpU0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "hoist-non-react-statics"
var external_hoist_non_react_statics_ = __webpack_require__("0TPh");
var external_hoist_non_react_statics_default = /*#__PURE__*/__webpack_require__.n(external_hoist_non_react_statics_);

// EXTERNAL MODULE: ../packages/material-ui-styles/src/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__("3O2h");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__("T4GM");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/useTheme/useTheme.js
var useTheme = __webpack_require__("mii5");

// CONCATENATED MODULE: ../packages/material-ui-styles/src/withStyles/withStyles.js



var __jsx = external_react_default.a.createElement;





 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

const withStyles = (stylesOrCreator, options = {}) => Component => {
  const {
    defaultTheme,
    withTheme = false,
    name
  } = options,
        stylesOptions = Object(objectWithoutProperties["a" /* default */])(options, ["defaultTheme", "withTheme", "name"]);

  if (false) {}

  let classNamePrefix = name;

  if (false) {}

  const useStyles = Object(makeStyles["a" /* default */])(stylesOrCreator, Object(objectSpread2["a" /* default */])({
    defaultTheme,
    Component,
    name: name || Component.displayName,
    classNamePrefix
  }, stylesOptions));
  const WithStyles = external_react_default.a.forwardRef(function WithStyles(props, ref) {
    const {
      classes: classesProp,
      innerRef
    } = props,
          other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "innerRef"]);

    const classes = useStyles(props);
    let theme;
    let more = other;

    if (typeof name === 'string' || withTheme) {
      // name and withTheme are invariant in the outer scope
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = Object(useTheme["a" /* default */])() || defaultTheme;

      if (name) {
        more = Object(getThemeProps["a" /* default */])({
          theme,
          name,
          props: other
        });
      } // Provide the theme to the wrapped component.
      // So we don't have to use the `withTheme()` Higher-order Component.


      if (withTheme && !more.theme) {
        more.theme = theme;
      }
    }

    return __jsx(Component, Object(esm_extends["a" /* default */])({
      ref: innerRef || ref,
      classes: classes
    }, more));
  });
  // The wrapper receives only user supplied props, which could be a subset of
  // the actual props Component might receive due to merging with defaultProps.
  // So copying it here would give us the same result in the wrapper as well.
  WithStyles.defaultProps = Component.defaultProps;

  if (false) {}

  external_hoist_non_react_statics_default()(WithStyles, Component);

  if (false) {}

  return WithStyles;
};

/* harmony default export */ var withStyles_withStyles = (withStyles);
// EXTERNAL MODULE: ../packages/material-ui/src/styles/defaultTheme.js
var styles_defaultTheme = __webpack_require__("qHc8");

// CONCATENATED MODULE: ../packages/material-ui/src/styles/withStyles.js




function styles_withStyles_withStyles(stylesOrCreator, options) {
  return withStyles_withStyles(stylesOrCreator, Object(objectSpread2["a" /* default */])({
    defaultTheme: styles_defaultTheme["a" /* default */]
  }, options));
}

/* harmony default export */ var styles_withStyles = __webpack_exports__["default"] = (styles_withStyles_withStyles);

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "XsBU":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-nested");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZQQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBreakpoints; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    keys,
    values,
    up,
    down,
    between,
    only,
    width
  }, other);
}

/***/ }),

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "bZJ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wuQJ");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UthY");
/* harmony import */ var _core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tvLF");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("s4hn");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1qCV");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("azxR");








function ownKeys(object, enumerableOnly) {
  var keys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object);

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) {
    var symbols = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object);

    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) {
      _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "bjLr":
/***/ (function(module, exports) {

module.exports = "# New feature\n\n#### March 14, 2020 by [Tom](/)\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\nut fermentum massa justo sit amet risus.\n\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n- Donec id elit non mi porta gravida at eget metus.\n- Nulla vitae elit libero, a pharetra augue.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n"

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cYeA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return decomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return recomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yLsn");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FdmI");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {
  if (false) {}

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb(${colors.map(n => _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(n, 16)).join(', ')})` : '';
}

function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const {
    values
  } = decomposeColor(color);
  return `#${values.map(n => intToHex(n)).join('')}`;
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error([`Material-UI: unsupported \`${color}\` color.`, 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
  }

  let values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(value => _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(value));
  return {
    type,
    values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  return `${type}(${values.join(', ')})`;
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dvVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), 'Twitter'));

/***/ }),

/***/ "ef48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUnarySpacing; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JYC+");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("s20r");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PZTq");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Txzd");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WNP9");







const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = Object(_memoize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
function createUnarySpacing(theme) {
  const themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (false) {}

      return themeSpacing * abs;
    };
  }

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(themeSpacing)) {
    return abs => {
      if (false) {}

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (false) {}

  return () => undefined;
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}

function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}

function spacing(props) {
  const theme = props.theme;
  const transformer = createUnarySpacing(theme);
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props).map(prop => {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_3__[/* handleBreakpoints */ "b"])(props, propValue, styleFromPropValue);
  }).reduce(_merge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {});
}

spacing.propTypes =  false ? undefined : {};
spacing.filterProps = spacingKeys;
/* harmony default export */ __webpack_exports__["b"] = (spacing);

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hHq4":
/***/ (function(module, exports) {

module.exports = "# Sample blog post\n\n#### April 1, 2020 by [Olivier](/)\n\nThis blog post shows a few different types of content that are supported and styled with\nMaterial styles. Basic typography, images, and code are all supported.\nYou can extend these by modifying `Markdown.js`.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\nNullam id dolor id nibh ultricies vehicula ut id elit.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\n## Heading\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\n### Sub-heading\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n### Sub-heading\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\nsit amet risus.\n\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n- Donec id elit non mi porta gravida at eget metus.\n- Nulla vitae elit libero, a pharetra augue.\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n1.  Vestibulum id ligula porta felis euismod semper.\n2.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n3.  Maecenas sed diam eget risus varius blandit sit amet non magna.\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.\n"

/***/ }),

/***/ "iM6+":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-vendor-prefixer");

/***/ }),

/***/ "iYoT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (ThemeContext);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kCiw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setRef; });
// TODO v5: make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "l/nz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XpU0");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cYeA");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7QLS");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("rKPb");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];







const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 12,
    borderRadius: '50%',
    overflow: 'visible',
    // Explicitly set the default value to solve a bug on IE 11.
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the root element if `edge="start"`. */
  edgeStart: {
    marginLeft: -12,
    '$sizeSmall&': {
      marginLeft: -3
    }
  },

  /* Styles applied to the root element if `edge="end"`. */
  edgeEnd: {
    marginRight: -12,
    '$sizeSmall&': {
      marginRight: -3
    }
  },

  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit'
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: 3,
    fontSize: theme.typography.pxToRem(18)
  },

  /* Styles applied to the children container element. */
  label: {
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  }
});
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function IconButton(props, ref) {
  const {
    edge = false,
    children,
    classes,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

  return __jsx(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, color !== 'default' && classes[`color${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(color)}`], disabled && classes.disabled, size === "small" && classes[`size${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(size)}`], {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), __jsx("span", {
    className: classes.label
  }, children));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiIconButton'
})(IconButton));

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "mKyP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("JYC+");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../packages/material-ui-utils/src/deepmerge.js
var deepmerge = __webpack_require__("mbNV");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/createBreakpoints.js
var createBreakpoints = __webpack_require__("ZQQV");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// CONCATENATED MODULE: ../packages/material-ui/src/styles/createMixins.js

function createMixins(breakpoints, spacing, mixins) {
  return Object(objectSpread2["a" /* default */])({
    gutters: (styles = {}) => {
      // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );
      return Object(objectSpread2["a" /* default */])({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, {
        [breakpoints.up('sm')]: Object(objectSpread2["a" /* default */])({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])
      });
    },
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}
// EXTERNAL MODULE: ../packages/material-ui/src/colors/common.js
var common = __webpack_require__("Kjv/");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/grey.js
var grey = __webpack_require__("76W3");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/indigo.js
var indigo = __webpack_require__("06W4");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/pink.js
var pink = __webpack_require__("VQPw");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/red.js
var red = __webpack_require__("Px1Q");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/orange.js
var orange = __webpack_require__("9yTn");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/blue.js
var blue = __webpack_require__("GeB9");

// EXTERNAL MODULE: ../packages/material-ui/src/colors/green.js
var green = __webpack_require__("FJkE");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/colorManipulator.js
var colorManipulator = __webpack_require__("cYeA");

// CONCATENATED MODULE: ../packages/material-ui/src/styles/createPalette.js












const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common["a" /* default */].white,
    default: grey["a" /* default */][50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common["a" /* default */].white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey["a" /* default */][800],
    default: '#303030'
  },
  action: {
    active: common["a" /* default */].white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = Object(colorManipulator["lighten"])(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = Object(colorManipulator["darken"])(intent.main, tonalOffset * 1.5);
    }
  }
}

function createPalette(palette) {
  const {
    primary = {
      light: indigo["a" /* default */][300],
      main: indigo["a" /* default */][500],
      dark: indigo["a" /* default */][700]
    },
    secondary = {
      light: pink["a" /* default */].A200,
      main: pink["a" /* default */].A400,
      dark: pink["a" /* default */].A700
    },
    error = {
      light: red["a" /* default */][300],
      main: red["a" /* default */][500],
      dark: red["a" /* default */][700]
    },
    warning = {
      light: orange["a" /* default */][300],
      main: orange["a" /* default */][500],
      dark: orange["a" /* default */][700]
    },
    info = {
      light: blue["a" /* default */][300],
      main: blue["a" /* default */][500],
      dark: blue["a" /* default */][700]
    },
    success = {
      light: green["a" /* default */][300],
      main: green["a" /* default */][500],
      dark: green["a" /* default */][700]
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = Object(objectWithoutProperties["a" /* default */])(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    if (!background) {
      throw new TypeError(`Material-UI: missing background argument in getContrastText(${background}).`);
    }

    const contrastText = Object(colorManipulator["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (false) {}

    return contrastText;
  }

  function augmentColor(color, mainShade = 500, lightShade = 300, darkShade = 700) {
    color = Object(objectSpread2["a" /* default */])({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (false) {}

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  }

  const types = {
    dark,
    light
  };

  if (false) {}

  const paletteOutput = Object(deepmerge["a" /* default */])(Object(objectSpread2["a" /* default */])({
    // A collection of common colors.
    common: common["a" /* default */],
    // The palette type, can be light or dark.
    type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: grey["a" /* default */],
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, types[type]), other);
  return paletteOutput;
}
// CONCATENATED MODULE: ../packages/material-ui/src/styles/createTypography.js




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = Object(objectWithoutProperties["a" /* default */])(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (false) {}

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => Object(objectSpread2["a" /* default */])({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, {}, casing, {}, allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return Object(deepmerge["a" /* default */])(Object(objectSpread2["a" /* default */])({
    htmlFontSize,
    pxToRem,
    round,
    // TODO v5: remove
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}
// CONCATENATED MODULE: ../packages/material-ui/src/styles/shadows.js
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ var styles_shadows = (shadows);
// CONCATENATED MODULE: ../packages/material-ui/src/styles/shape.js
const shape = {
  borderRadius: 4
};
/* harmony default export */ var styles_shape = (shape);
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hHgk");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ../packages/material-ui-system/src/spacing.js
var src_spacing = __webpack_require__("ef48");

// CONCATENATED MODULE: ../packages/material-ui/src/styles/createSpacing.js


let warnOnce;
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = Object(src_spacing["a" /* createUnarySpacing */])({
    spacing: spacingInput
  });

  const spacing = (...args) => {
    if (false) {}

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(factor => {
      const output = transform(factor);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  define_property_default()(spacing, 'unit', {
    get: () => {
      if (false) {}

      return spacingInput;
    }
  });

  spacing.mui = true;
  return spacing;
}
// EXTERNAL MODULE: ../packages/material-ui/src/styles/transitions.js
var transitions = __webpack_require__("tqcJ");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/zIndex.js
var zIndex = __webpack_require__("D/34");

// CONCATENATED MODULE: ../packages/material-ui/src/styles/createMuiTheme.js














function createMuiTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {}
  } = options,
        other = Object(objectWithoutProperties["a" /* default */])(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  const palette = createPalette(paletteInput);
  const breakpoints = Object(createBreakpoints["a" /* default */])(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = Object(deepmerge["a" /* default */])({
    breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette,
    props: {},
    // Provide default props
    shadows: styles_shadows,
    typography: createTypography(palette, typographyInput),
    spacing,
    shape: styles_shape,
    transitions: transitions["a" /* default */],
    zIndex: zIndex["a" /* default */]
  }, other);
  muiTheme = args.reduce((acc, argument) => Object(deepmerge["a" /* default */])(acc, argument), muiTheme);

  if (false) {}

  return muiTheme;
}

/* harmony default export */ var styles_createMuiTheme = __webpack_exports__["a"] = (createMuiTheme);

/***/ }),

/***/ "mbNV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepmerge; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("s20r");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);



function isObject(item) {
  return item && typeof item === 'object' && !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(item);
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, target) : target;

  if (isObject(target) && isObject(source)) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "mii5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("iYoT");


function useTheme() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
}

/***/ }),

/***/ "mspF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export teardown */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsFocusVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const {
    target
  } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
  // we use our own heuristic for those browsers
  // rethrow might be better if it's not the expected error but do we really
  // want to crash if focus-visible malfunctioned?
  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](instance => {
    const node = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  return {
    isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref
  };
}

/***/ }),

/***/ "on4p":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-props-sort");

/***/ }),

/***/ "pQ8Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yLsn");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z3IF");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XpU0");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/




const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {};
  GRID_SIZES.forEach(size => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    const width = `${Math.round(size / 12 * 10e7) / 10e5}%`; // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val, div = 1) {
  const parse = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(val);

  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`;
}

function generateGutter(theme, breakpoint) {
  const styles = {};
  SPACINGS.forEach(spacing => {
    const themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: `-${getOffset(themeSpacing, 2)}`,
      width: `calc(100% + ${getOffset(themeSpacing)})`,
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


const styles = theme => Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
  /* Styles applied to the root element */
  root: {},

  /* Styles applied to the root element if `container={true}`. */
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },

  /* Styles applied to the root element if `item={true}`. */
  item: {
    boxSizing: 'border-box',
    margin: '0' // For instance, it's useful when used with a `figure` element.

  },

  /* Styles applied to the root element if `zeroMinWidth={true}`. */
  zeroMinWidth: {
    minWidth: 0
  },

  /* Styles applied to the root element if `direction="column"`. */
  'direction-xs-column': {
    flexDirection: 'column'
  },

  /* Styles applied to the root element if `direction="column-reverse"`. */
  'direction-xs-column-reverse': {
    flexDirection: 'column-reverse'
  },

  /* Styles applied to the root element if `direction="rwo-reverse"`. */
  'direction-xs-row-reverse': {
    flexDirection: 'row-reverse'
  },

  /* Styles applied to the root element if `wrap="nowrap"`. */
  'wrap-xs-nowrap': {
    flexWrap: 'nowrap'
  },

  /* Styles applied to the root element if `wrap="reverse"`. */
  'wrap-xs-wrap-reverse': {
    flexWrap: 'wrap-reverse'
  },

  /* Styles applied to the root element if `alignItems="center"`. */
  'align-items-xs-center': {
    alignItems: 'center'
  },

  /* Styles applied to the root element if `alignItems="flex-start"`. */
  'align-items-xs-flex-start': {
    alignItems: 'flex-start'
  },

  /* Styles applied to the root element if `alignItems="flex-end"`. */
  'align-items-xs-flex-end': {
    alignItems: 'flex-end'
  },

  /* Styles applied to the root element if `alignItems="baseline"`. */
  'align-items-xs-baseline': {
    alignItems: 'baseline'
  },

  /* Styles applied to the root element if `alignContent="center"`. */
  'align-content-xs-center': {
    alignContent: 'center'
  },

  /* Styles applied to the root element if `alignContent="flex-start"`. */
  'align-content-xs-flex-start': {
    alignContent: 'flex-start'
  },

  /* Styles applied to the root element if `alignContent="flex-end"`. */
  'align-content-xs-flex-end': {
    alignContent: 'flex-end'
  },

  /* Styles applied to the root element if `alignContent="space-between"`. */
  'align-content-xs-space-between': {
    alignContent: 'space-between'
  },

  /* Styles applied to the root element if `alignContent="space-around"`. */
  'align-content-xs-space-around': {
    alignContent: 'space-around'
  },

  /* Styles applied to the root element if `justify="center"`. */
  'justify-xs-center': {
    justifyContent: 'center'
  },

  /* Styles applied to the root element if `justify="flex-end"`. */
  'justify-xs-flex-end': {
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `justify="space-between"`. */
  'justify-xs-space-between': {
    justifyContent: 'space-between'
  },

  /* Styles applied to the root element if `justify="space-around"`. */
  'justify-xs-space-around': {
    justifyContent: 'space-around'
  },

  /* Styles applied to the root element if `justify="space-evenly"`. */
  'justify-xs-space-evenly': {
    justifyContent: 'space-evenly'
  }
}, generateGutter(theme, 'xs'), {}, theme.breakpoints.keys.reduce((accumulator, key) => {
  // Use side effect over immutability for better performance.
  generateGrid(accumulator, theme, key);
  return accumulator;
}, {}));
const Grid = react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function Grid(props, ref) {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    classes,
    className: classNameProp,
    component: Component = 'div',
    container = false,
    direction = 'row',
    item = false,
    justify = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  const className = clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes[`spacing-xs-${String(spacing)}`]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes[`direction-xs-${String(direction)}`], wrap !== 'wrap' && classes[`wrap-xs-${String(wrap)}`], alignItems !== 'stretch' && classes[`align-items-xs-${String(alignItems)}`], alignContent !== 'stretch' && classes[`align-content-xs-${String(alignContent)}`], justify !== 'flex-start' && classes[`justify-xs-${String(justify)}`], xs !== false && classes[`grid-xs-${String(xs)}`], sm !== false && classes[`grid-sm-${String(sm)}`], md !== false && classes[`grid-md-${String(md)}`], lg !== false && classes[`grid-lg-${String(lg)}`], xl !== false && classes[`grid-xl-${String(xl)}`]);
  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    className: className,
    ref: ref
  }, other));
});
const StyledGrid = Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiGrid'
})(Grid);

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (StyledGrid);

/***/ }),

/***/ "q1C7":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "qHc8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mKyP");

const defaultTheme = Object(_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["a"] = (defaultTheme);

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r6IM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rKPb");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_focusVisible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mspF");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+rSm");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Oy88");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];








const styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `underline="none"`. */
  underlineNone: {
    textDecoration: 'none'
  },

  /* Styles applied to the root element if `underline="hover"`. */
  underlineHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  /* Styles applied to the root element if `underline="always"`. */
  underlineAlways: {
    textDecoration: 'underline'
  },
  // Same reset as ButtonBase.root

  /* Styles applied to the root element if `component="button"`. */
  button: {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$focusVisible': {
      outline: 'auto'
    }
  },

  /* Pseudo-class applied to the root element if the link is keyboard focused. */
  focusVisible: {}
};
const Link = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Link(props, ref) {
  const {
    classes,
    className,
    color = 'primary',
    component = 'a',
    onBlur,
    onFocus,
    TypographyClasses,
    underline = 'hover',
    variant = 'inherit'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"]);

  const {
    isFocusVisible,
    onBlurVisible,
    ref: focusVisibleRef
  } = Object(_utils_focusVisible__WEBPACK_IMPORTED_MODULE_6__[/* useIsFocusVisible */ "a"])();
  const [focusVisible, setFocusVisible] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
  const handlerRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ref, focusVisibleRef);

  const handleBlur = event => {
    if (focusVisible) {
      onBlurVisible();
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = event => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return __jsx(_Typography__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, classes[`underline${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(underline)}`], className, focusVisible && classes.focusVisible, component === 'button' && classes.button),
    classes: TypographyClasses,
    color: color,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    variant: variant
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiLink'
})(Link));

/***/ }),

/***/ "rKPb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (false) {}

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "t9tc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ../packages/material-ui/src/withWidth/withWidth.js
var withWidth = __webpack_require__("6xHO");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/useTheme.js
var useTheme = __webpack_require__("LMpM");

// CONCATENATED MODULE: ../packages/material-ui/src/Hidden/HiddenJs.js





/**
 * @ignore - internal component.
 */

function HiddenJs(props) {
  const {
    children,
    only,
    width
  } = props;
  const theme = Object(useTheme["a" /* default */])();
  let visible = true; // `only` check is faster to get out sooner if used.

  if (only) {
    if (is_array_default()(only)) {
      for (let i = 0; i < only.length; i += 1) {
        const breakpoint = only[i];

        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  } // Allow `only` to be combined with other props. If already hidden, no need to check others.


  if (visible) {
    // determine visibility based on the smallest size up
    for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
      const breakpoint = theme.breakpoints.keys[i];
      const breakpointUp = props[`${breakpoint}Up`];
      const breakpointDown = props[`${breakpoint}Down`];

      if (breakpointUp && Object(withWidth["c" /* isWidthUp */])(breakpoint, width) || breakpointDown && Object(withWidth["b" /* isWidthDown */])(breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
}

HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: external_prop_types_default.a.node,

  /**
   * @ignore
   */
  className: external_prop_types_default.a.string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: external_prop_types_default.a.oneOf(['js', 'css']),

  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use an heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: external_prop_types_default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * If `true`, screens this size and down will be hidden.
   */
  lgDown: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  lgUp: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and down will be hidden.
   */
  mdDown: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  mdUp: external_prop_types_default.a.bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: external_prop_types_default.a.oneOfType([external_prop_types_default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), external_prop_types_default.a.arrayOf(external_prop_types_default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If `true`, screens this size and down will be hidden.
   */
  smDown: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  smUp: external_prop_types_default.a.bool,

  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: external_prop_types_default.a.string.isRequired,

  /**
   * If `true`, screens this size and down will be hidden.
   */
  xlDown: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  xlUp: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and down will be hidden.
   */
  xsDown: external_prop_types_default.a.bool,

  /**
   * If `true`, screens this size and up will be hidden.
   */
  xsUp: external_prop_types_default.a.bool
};

if (false) {}

/* harmony default export */ var Hidden_HiddenJs = (Object(withWidth["a" /* default */])()(HiddenJs));
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/capitalize.js
var capitalize = __webpack_require__("rKPb");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// CONCATENATED MODULE: ../packages/material-ui/src/Hidden/HiddenCss.js



var __jsx = external_react_["createElement"];





const styles = theme => {
  const hidden = {
    display: 'none'
  };
  return theme.breakpoints.keys.reduce((acc, key) => {
    acc[`only${Object(capitalize["a" /* default */])(key)}`] = {
      [theme.breakpoints.only(key)]: hidden
    };
    acc[`${key}Up`] = {
      [theme.breakpoints.up(key)]: hidden
    };
    acc[`${key}Down`] = {
      [theme.breakpoints.down(key)]: hidden
    };
    return acc;
  }, {});
};
/**
 * @ignore - internal component.
 */


function HiddenCss(props) {
  const {
    children,
    classes,
    className,
    only
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "only"]);

  const theme = Object(useTheme["a" /* default */])();

  if (false) {}

  const clsx = [];

  if (className) {
    clsx.push(className);
  }

  for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
    const breakpoint = theme.breakpoints.keys[i];
    const breakpointUp = props[`${breakpoint}Up`];
    const breakpointDown = props[`${breakpoint}Down`];

    if (breakpointUp) {
      clsx.push(classes[`${breakpoint}Up`]);
    }

    if (breakpointDown) {
      clsx.push(classes[`${breakpoint}Down`]);
    }
  }

  if (only) {
    const onlyBreakpoints = is_array_default()(only) ? only : [only];
    onlyBreakpoints.forEach(breakpoint => {
      clsx.push(classes[`only${Object(capitalize["a" /* default */])(breakpoint)}`]);
    });
  }

  return __jsx("div", {
    className: clsx.join(' ')
  }, children);
}

/* harmony default export */ var Hidden_HiddenCss = (Object(withStyles["default"])(styles, {
  name: 'PrivateHiddenCss'
})(HiddenCss));
// CONCATENATED MODULE: ../packages/material-ui/src/Hidden/Hidden.js


var Hidden_jsx = external_react_["createElement"];



/**
 * Responsively hides children based on the selected implementation.
 */

function Hidden(props) {
  const {
    implementation = 'js',
    lgDown = false,
    lgUp = false,
    mdDown = false,
    mdUp = false,
    smDown = false,
    smUp = false,
    xlDown = false,
    xlUp = false,
    xsDown = false,
    xsUp = false
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["implementation", "lgDown", "lgUp", "mdDown", "mdUp", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"]);

  if (implementation === 'js') {
    return Hidden_jsx(Hidden_HiddenJs, Object(esm_extends["a" /* default */])({
      lgDown: lgDown,
      lgUp: lgUp,
      mdDown: mdDown,
      mdUp: mdUp,
      smDown: smDown,
      smUp: smUp,
      xlDown: xlDown,
      xlUp: xlUp,
      xsDown: xsDown,
      xsUp: xsUp
    }, other));
  }

  return Hidden_jsx(Hidden_HiddenCss, Object(esm_extends["a" /* default */])({
    lgDown: lgDown,
    lgUp: lgUp,
    mdDown: mdDown,
    mdUp: mdUp,
    smDown: smDown,
    smUp: smUp,
    xlDown: xlDown,
    xlUp: xlUp,
    xsDown: xsDown,
    xsUp: xsUp
  }, other));
}

/* harmony default export */ var Hidden_Hidden = __webpack_exports__["a"] = (Hidden);

/***/ }),

/***/ "tqcJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return duration; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s20r");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yLsn");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Fjn");




// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["a"] = ({
  easing,
  duration,
  create: (props = ['all'], options = {}) => {
    const {
      duration: durationOption = duration.standard,
      easing: easingOption = easing.easeInOut,
      delay = 0
    } = options,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(options, ["duration", "easing", "delay"]);

    if (false) {}

    return (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  },

  getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }

});

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "uFO+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EWRx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var _ref = __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx("meta", {
  name: "robots",
  content: "noindex,nofollow"
}));

function AppTheme(props) {
  const {
    children
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _ref, children);
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wFh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useEnhancedEffect = false ? undefined : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((...args) => (0, ref.current)(...args), []);
}

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "woQm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search'));

/***/ }),

/***/ "wuQJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "xP/R":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-rule-value-function");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLsn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "yZEQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3O2h");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qHc8");




function makeStyles(stylesOrCreator, options = {}) {
  return Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(stylesOrCreator, Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }, options));
}

/* harmony default export */ __webpack_exports__["a"] = (makeStyles);

/***/ }),

/***/ "z3IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8Yc");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ });