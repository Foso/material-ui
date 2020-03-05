module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		60: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + "." + {"288":"abee8e9a99da5c2f581e"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+AD9":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-css");

/***/ }),

/***/ "+bTD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s20r");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("PZTq");




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_1__[/* handleBreakpoints */ "b"])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? undefined : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ __webpack_exports__["a"] = (style);

/***/ }),

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

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "/6bg":
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
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LpUc");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
const Backdrop = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Backdrop(props, ref) {
  const {
    children,
    classes,
    className,
    invisible = false,
    open,
    transitionDuration
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "invisible", "open", "transitionDuration"]);

  return __jsx(_Fade__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    in: open,
    timeout: transitionDuration
  }, other), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiBackdrop'
})(Backdrop));

/***/ }),

/***/ "/FII":
/***/ (function(module, exports) {

module.exports = "---\nfilename: /packages/material-ui/src/InputBase/InputBase.js\n---\n\n<!--- This documentation is automatically generated, do not try to edit it. -->\n\n# InputBase API\n\n<p class=\"description\">The API documentation of the InputBase React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport InputBase from '@material-ui/core/InputBase';\n// or\nimport { InputBase } from '@material-ui/core';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n`InputBase` contains as few styles as possible.\nIt aims to be a simple building block for creating an input.\nIt contains a load of style reset and some state logic.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class=\"prop-name\">autoComplete</span> | <span class=\"prop-type\">string</span> |  | This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill). |\n| <span class=\"prop-name\">autoFocus</span> | <span class=\"prop-type\">bool</span> |  | If `true`, the `input` element will be focused during the first mount. |\n| <span class=\"prop-name\">classes</span> | <span class=\"prop-type\">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class=\"prop-name\">className</span> | <span class=\"prop-type\">string</span> |  | The CSS class name of the wrapper element. |\n| <span class=\"prop-name\">color</span> | <span class=\"prop-type\">'primary'<br>&#124;&nbsp;'secondary'</span> |  | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class=\"prop-name\">defaultValue</span> | <span class=\"prop-type\">any</span> |  | The default `input` element value. Use when the component is not controlled. |\n| <span class=\"prop-name\">disabled</span> | <span class=\"prop-type\">bool</span> |  | If `true`, the `input` element will be disabled. |\n| <span class=\"prop-name\">endAdornment</span> | <span class=\"prop-type\">node</span> |  | End `InputAdornment` for this component. |\n| <span class=\"prop-name\">error</span> | <span class=\"prop-type\">bool</span> |  | If `true`, the input will indicate an error. This is normally obtained via context from FormControl. |\n| <span class=\"prop-name\">fullWidth</span> | <span class=\"prop-type\">bool</span> | <span class=\"prop-default\">false</span> | If `true`, the input will take up the full width of its container. |\n| <span class=\"prop-name\">id</span> | <span class=\"prop-type\">string</span> |  | The id of the `input` element. |\n| <span class=\"prop-name\">inputComponent</span> | <span class=\"prop-type\">elementType</span> | <span class=\"prop-default\">'input'</span> | The component used for the `input` element. Either a string to use a DOM element or a component. |\n| <span class=\"prop-name\">inputProps</span> | <span class=\"prop-type\">object</span> | <span class=\"prop-default\">{}</span> | [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element. |\n| <span class=\"prop-name\">inputRef</span> | <span class=\"prop-type\">ref</span> |  | Pass a ref to the `input` element. |\n| <span class=\"prop-name\">margin</span> | <span class=\"prop-type\">'dense'<br>&#124;&nbsp;'none'</span> |  | If `dense`, will adjust vertical spacing. This is normally obtained via context from FormControl. |\n| <span class=\"prop-name\">multiline</span> | <span class=\"prop-type\">bool</span> | <span class=\"prop-default\">false</span> | If `true`, a textarea element will be rendered. |\n| <span class=\"prop-name\">name</span> | <span class=\"prop-type\">string</span> |  | Name attribute of the `input` element. |\n| <span class=\"prop-name\">onBlur</span> | <span class=\"prop-type\">func</span> |  | Callback fired when the input is blurred.<br>Notice that the first argument (event) might be undefined. |\n| <span class=\"prop-name\">onChange</span> | <span class=\"prop-type\">func</span> |  | Callback fired when the value is changed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). |\n| <span class=\"prop-name\">placeholder</span> | <span class=\"prop-type\">string</span> |  | The short hint displayed in the input before the user enters a value. |\n| <span class=\"prop-name\">readOnly</span> | <span class=\"prop-type\">bool</span> |  | It prevents the user from changing the value of the field (not from interacting with the field). |\n| <span class=\"prop-name\">required</span> | <span class=\"prop-type\">bool</span> |  | If `true`, the `input` element will be required. |\n| <span class=\"prop-name\">rows</span> | <span class=\"prop-type\">string<br>&#124;&nbsp;number</span> |  | Number of rows to display when multiline option is set to true. |\n| <span class=\"prop-name\">rowsMax</span> | <span class=\"prop-type\">string<br>&#124;&nbsp;number</span> |  | Maximum number of rows to display when multiline option is set to true. |\n| <span class=\"prop-name\">rowsMin</span> | <span class=\"prop-type\">string<br>&#124;&nbsp;number</span> |  | Minimum number of rows to display when multiline option is set to true. |\n| <span class=\"prop-name\">startAdornment</span> | <span class=\"prop-type\">node</span> |  | Start `InputAdornment` for this component. |\n| <span class=\"prop-name\">type</span> | <span class=\"prop-type\">string</span> | <span class=\"prop-default\">'text'</span> | Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types). |\n| <span class=\"prop-name\">value</span> | <span class=\"prop-type\">any</span> |  | The value of the `input` element, required for a controlled component. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiInputBase`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class=\"prop-name\">@global</span> | | Apply global styles.\n| <span class=\"prop-name\">root</span> | <span class=\"prop-name\">.MuiInputBase-root</span> | Styles applied to the root element.\n| <span class=\"prop-name\">formControl</span> | <span class=\"prop-name\">.MuiInputBase-formControl</span> | Styles applied to the root element if the component is a descendant of `FormControl`.\n| <span class=\"prop-name\">focused</span> | <span class=\"prop-name\">.Mui-focused</span> | Styles applied to the root element if the component is focused.\n| <span class=\"prop-name\">disabled</span> | <span class=\"prop-name\">.Mui-disabled</span> | Styles applied to the root element if `disabled={true}`.\n| <span class=\"prop-name\">adornedStart</span> | <span class=\"prop-name\">.MuiInputBase-adornedStart</span> | Styles applied to the root element if `startAdornment` is provided.\n| <span class=\"prop-name\">adornedEnd</span> | <span class=\"prop-name\">.MuiInputBase-adornedEnd</span> | Styles applied to the root element if `endAdornment` is provided.\n| <span class=\"prop-name\">error</span> | <span class=\"prop-name\">.Mui-error</span> | Pseudo-class applied to the root element if `error={true}`.\n| <span class=\"prop-name\">marginDense</span> | <span class=\"prop-name\">.MuiInputBase-marginDense</span> | Styles applied to the `input` element if `margin=\"dense\"`.\n| <span class=\"prop-name\">multiline</span> | <span class=\"prop-name\">.MuiInputBase-multiline</span> | Styles applied to the root element if `multiline={true}`.\n| <span class=\"prop-name\">colorSecondary</span> | <span class=\"prop-name\">.MuiInputBase-colorSecondary</span> | Styles applied to the root element if the color is secondary.\n| <span class=\"prop-name\">fullWidth</span> | <span class=\"prop-name\">.MuiInputBase-fullWidth</span> | Styles applied to the root element if `fullWidth={true}`.\n| <span class=\"prop-name\">input</span> | <span class=\"prop-name\">.MuiInputBase-input</span> | Styles applied to the `input` element.\n| <span class=\"prop-name\">inputMarginDense</span> | <span class=\"prop-name\">.MuiInputBase-inputMarginDense</span> | Styles applied to the `input` element if `margin=\"dense\"`.\n| <span class=\"prop-name\">inputMultiline</span> | <span class=\"prop-name\">.MuiInputBase-inputMultiline</span> | Styles applied to the `input` element if `multiline={true}`.\n| <span class=\"prop-name\">inputTypeSearch</span> | <span class=\"prop-name\">.MuiInputBase-inputTypeSearch</span> | Styles applied to the `input` element if `type=\"search\"`.\n| <span class=\"prop-name\">inputAdornedStart</span> | <span class=\"prop-name\">.MuiInputBase-inputAdornedStart</span> | Styles applied to the `input` element if `startAdornment` is provided.\n| <span class=\"prop-name\">inputAdornedEnd</span> | <span class=\"prop-name\">.MuiInputBase-inputAdornedEnd</span> | Styles applied to the `input` element if `endAdornment` is provided.\n| <span class=\"prop-name\">inputHiddenLabel</span> | <span class=\"prop-name\">.MuiInputBase-inputHiddenLabel</span> | Styles applied to the `input` element if `hiddenLabel={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that's not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/InputBase/InputBase.js) for more detail.\n\n## Demos\n\n- [Text Fields](/components/text-fields/)\n\n"

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

/***/ "0Nc6":
/***/ (function(module, exports) {

module.exports = require("react-frame-component");

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

/***/ "18I3":
/***/ (function(module, exports, __webpack_require__) {

var _extends = __webpack_require__("pzQc");

var _Object$keys = __webpack_require__("1qCV");

const upperFirst = __webpack_require__("mZPs");

const camelCase = __webpack_require__("gfrc");

const {
  CODE_VARIANTS,
  LANGUAGES
} = __webpack_require__("NLnA");

function titleize(string) {
  if (false) {}

  return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function pageToTitle(page) {
  if (page.title === false) {
    return null;
  }

  if (page.title) {
    return page.title;
  }

  const path = page.subheader || page.pathname;
  const name = path.replace(/.*\//, '');

  if (path.indexOf('/api/') !== -1) {
    return upperFirst(camelCase(name));
  }

  return titleize(name);
}

function pageToTitleI18n(page, t) {
  const path = page.subheader || page.pathname;
  return t(`pages.${path}`, {
    ignoreWarning: true
  }) || pageToTitle(page);
}
/**
 * @var
 * set of packages that ship their own typings instead of using @types/ namespace
 * Array because Set([iterable]) is not supported in IE11
 */


const packagesWithBundledTypes = ['@material-ui/core', '@material-ui/lab'];
/**
 * WARNING: Always uses `latest` typings.
 *
 * Adds dependencies to @types packages only for packages that are not listed
 * in packagesWithBundledTypes
 *
 * @see packagesWithBundledTypes in this module namespace
 *
 * @param {Record<string, string>} deps - list of dependency as `name => version`
 */

function addTypeDeps(deps) {
  const packagesWithDTPackage = _Object$keys(deps).filter(name => packagesWithBundledTypes.indexOf(name) === -1);

  packagesWithDTPackage.forEach(name => {
    let resolvedName = name; // scoped package?

    if (name.startsWith('@')) {
      // https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages
      resolvedName = name.slice(1).replace('/', '__');
    }

    deps[`@types/${resolvedName}`] = 'latest';
  });
}

function includePeerDependencies(deps, versions) {
  _extends(deps, {
    'react-dom': versions['react-dom'],
    react: versions.react
  });

  if (deps['@material-ui/lab'] && !deps['@material-ui/core']) {
    deps['@material-ui/core'] = versions['@material-ui/core'];
  }
}
/**
 * @param {string} raw - ES6 source with es module imports
 * @param {objects} options
 * @param {'JS' | 'TS'} options.codeLanguage
 * @param {'next' | 'latest'} options.reactVersion
 * @returns {Record<string, 'latest'>} map of packages with their required version
 */


function getDependencies(raw, options = {}) {
  const {
    codeLanguage = CODE_VARIANTS.JS,
    reactVersion = 'latest'
  } = options;
  const deps = {};
  const versions = {
    'react-dom': reactVersion,
    react: reactVersion,
    '@material-ui/core': 'latest',
    '@material-ui/icons': 'latest',
    '@material-ui/lab': 'latest',
    '@material-ui/styles': 'latest',
    '@material-ui/system': 'latest',
    '@material-ui/utils': 'latest',
    // TODO: remove once @material-ui/pickers v4 is released.
    '@date-io/date-fns': 'v1'
  };
  const re = /^import\s'([^']+)'|import\s[\s\S]*?\sfrom\s+'([^']+)/gm;
  let m; // eslint-disable-next-line no-cond-assign

  while (m = re.exec(raw)) {
    let name;

    if (m[2]) {
      // full import
      // handle scope names
      name = m[2].charAt(0) === '@' ? m[2].split('/', 2).join('/') : m[2].split('/', 1)[0];
    } else {
      name = m[1];
    }

    if (!deps[name]) {
      deps[name] = versions[name] ? versions[name] : 'latest';
    }
  }

  includePeerDependencies(deps, versions);

  if (codeLanguage === CODE_VARIANTS.TS) {
    addTypeDeps(deps);
    deps.typescript = 'latest';
  }

  return deps;
}

function getCookie(name) {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, '$1');
}

function pathnameToLanguage(pathname) {
  const userLanguage = pathname.substring(1, 3);

  if (LANGUAGES.indexOf(userLanguage) !== -1 && pathname.indexOf(`/${userLanguage}/`) === 0) {
    return {
      userLanguage,
      canonical: userLanguage === 'en' ? pathname : pathname.substring(3)
    };
  }

  return {
    userLanguage: 'en',
    canonical: pathname
  };
}

module.exports = {
  titleize,
  pageToTitle,
  pageToTitleI18n,
  getDependencies,
  getCookie,
  pathnameToLanguage
};

/***/ }),

/***/ "1pcZ":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-tsx");

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "25Ld":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;

  function debounced(...args) {
    // eslint-disable-next-line consistent-this
    const that = this;

    const later = () => {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "27z4":
/***/ (function(module, exports) {

module.exports = require("popper.js");

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

/***/ "2zfq":
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
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WSie");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];




const styles = theme => ({
  /* Styles applied to the root element. */
  root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body1, {
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: 'border-box',
    width: 'auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'auto'
    }
  }),
  // TODO v5: remove

  /* Styles applied to the root element if `disableGutters={false}`. */
  gutters: {},

  /* Styles applied to the root element if `selected={true}`. */
  selected: {},

  /* Styles applied to the root element if dense. */
  dense: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body2, {
    minHeight: 'auto'
  })
});
const MenuItem = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function MenuItem(props, ref) {
  const {
    classes,
    className,
    component = 'li',
    disableGutters = false,
    role = 'menuitem',
    selected,
    tabIndex: tabIndexProp
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component", "disableGutters", "role", "selected", "tabIndex"]);

  let tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: {
      dense: classes.dense
    },
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiMenuItem'
})(MenuItem));

/***/ }),

/***/ "3DJh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

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

/***/ "3RGy":
/***/ (function(module, exports) {

module.exports = require("clipboard-copy");

/***/ }),

/***/ "3hEz":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-camel-case");

/***/ }),

/***/ "3uJ1":
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
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Oy88");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("k+Qe");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];





const styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
const ListItemText = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListItemText(props, ref) {
  const {
    children,
    classes,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  const {
    dense
  } = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);
  let primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    primary = __jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span"
    }, primaryTypographyProps), primary);
  }

  let secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] && !disableTypography) {
    secondary = __jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary"
    }, secondaryTypographyProps), secondary);
  }

  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ "4AhO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kCiw");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+rSm");






function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](container);
}

const useEnhancedEffect = false ? undefined : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

const Portal = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function Portal(props, ref) {
  const {
    children,
    container,
    disablePortal = false,
    onRendered
  } = props;
  const [mountNode, setMountNode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](children) ? children.ref : null, ref);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ref, mountNode);
      return () => {
        Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(() => {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](children)) {
      return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"](children, mountNode) : mountNode;
});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5x7T");


/***/ }),

/***/ "5ZBS":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-diff");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "5x7T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_modules_components_MarkdownDocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e+1t");
/* harmony import */ var _input_base_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/FII");
/* harmony import */ var _input_base_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_input_base_md__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var _ref = __jsx(_src_modules_components_MarkdownDocs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  markdown: _input_base_md__WEBPACK_IMPORTED_MODULE_2___default.a
});

function Page() {
  return _ref;
}

/***/ }),

/***/ "6H0w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/useTheme/useTheme.js
var useTheme = __webpack_require__("mii5");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__("T4GM");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/ownerDocument.js
var ownerDocument = __webpack_require__("IsKj");

// EXTERNAL MODULE: ../packages/material-ui/src/Portal/Portal.js
var Portal = __webpack_require__("4AhO");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__("Njyx");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/useForkRef.js
var useForkRef = __webpack_require__("+rSm");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/useEventCallback.js
var useEventCallback = __webpack_require__("wFh9");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/zIndex.js
var zIndex = __webpack_require__("D/34");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("FdmI");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ../packages/material-ui/src/utils/getScrollbarSize.js
var getScrollbarSize = __webpack_require__("TlGy");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/ownerWindow.js
var ownerWindow = __webpack_require__("nEUa");

// CONCATENATED MODULE: ../packages/material-ui/src/Modal/ModalManager.js



 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  const doc = Object(ownerDocument["a" /* default */])(container);

  if (doc.body === container) {
    return Object(ownerWindow["a" /* default */])(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parse_int_default()(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode, nodesToExclude = [], show) {
  const blacklist = [mountNode, currentNode, ...nodesToExclude];
  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, node => {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  let idx = -1;
  containerInfo.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const restorePaddings = [];
  const container = containerInfo.container;
  let fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = Object(getScrollbarSize["a" /* default */])();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

      fixedNodes = Object(ownerDocument["a" /* default */])(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, node => {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = `${getPaddingRight(node) + scrollbarSize}px`;
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    const parent = container.parentElement;
    const scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, (node, i) => {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(({
      value,
      el,
      key
    }) => {
      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, node => {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


class ModalManager {
  constructor() {
    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblingNodes = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblingNodes
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }

}
// CONCATENATED MODULE: ../packages/material-ui/src/Modal/TrapFocus.js
var __jsx = external_react_["createElement"];

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */




/**
 * @ignore - internal component.
 */

function TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getDoc,
    isEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = external_react_["useRef"]();
  const sentinelStart = external_react_["useRef"](null);
  const sentinelEnd = external_react_["useRef"](null);
  const nodeToRestore = external_react_["useRef"]();
  const rootRef = external_react_["useRef"](null); // can be removed once we drop support for non ref forwarding class components

  const handleOwnRef = external_react_["useCallback"](instance => {
    // #StrictMode ready
    rootRef.current = external_react_dom_["findDOMNode"](instance);
  }, []);
  const handleRef = Object(useForkRef["a" /* default */])(children.ref, handleOwnRef); // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
  // https://reactjs.org/docs/hooks-reference.html#usememo

  external_react_["useMemo"](() => {
    if (!open || true) {
      return;
    }

    nodeToRestore.current = getDoc().activeElement;
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  external_react_["useEffect"](() => {
    if (!open) {
      return;
    }

    const doc = Object(ownerDocument["a" /* default */])(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    const contain = () => {
      if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    const loopFocus = event => {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      contain();
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return __jsx(external_react_["Fragment"], null, __jsx("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), external_react_["cloneElement"](children, {
    ref: handleRef
  }), __jsx("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

/*

In the future, we should be able to replace TrapFocus with:
https://github.com/facebook/react/blob/master/packages/react-events/docs/FocusScope.md

```jsx
import FocusScope from 'react-dom/FocusScope';

function TrapFocus(props) {
  const {
    children
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    open,
  } = props;

  if (!open) {
    return children;
  }

  return (
    <FocusScope
      autoFocus={!disableAutoFocus}
      contain={!disableEnforceFocus}
      restoreFocus={!disableRestoreFocus}
    >
      {children}
    </FocusScope>
  );
}
```

*/
/* harmony default export */ var Modal_TrapFocus = (TrapFocus);
// CONCATENATED MODULE: ../packages/material-ui/src/Modal/SimpleBackdrop.js



var SimpleBackdrop_jsx = external_react_["createElement"];

const styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

const SimpleBackdrop_SimpleBackdrop = external_react_["forwardRef"](function SimpleBackdrop(props, ref) {
  const {
    invisible = false,
    open
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["invisible", "open"]);

  return open ? SimpleBackdrop_jsx("div", Object(esm_extends["a" /* default */])({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: Object(objectSpread2["a" /* default */])({}, styles.root, {}, invisible ? styles.invisible : {}, {}, other.style)
  })) : null;
});
/* harmony default export */ var Modal_SimpleBackdrop = (SimpleBackdrop_SimpleBackdrop);
// CONCATENATED MODULE: ../packages/material-ui/src/Modal/Modal.js
/* unused harmony export styles */



var Modal_jsx = external_react_["createElement"];














function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return external_react_dom_["findDOMNode"](container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


const defaultManager = new ModalManager();
const Modal_styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  },

  /* Styles applied to the root element if the `Modal` has exited. */
  hidden: {
    visibility: 'hidden'
  }
});
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const Modal_Modal = external_react_["forwardRef"](function Modal(inProps, ref) {
  const theme = Object(useTheme["a" /* default */])();
  const props = Object(getThemeProps["a" /* default */])({
    name: 'MuiModal',
    props: Object(objectSpread2["a" /* default */])({}, inProps),
    theme
  });

  const {
    BackdropComponent = Modal_SimpleBackdrop,
    BackdropProps,
    children,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableBackdropClick = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onEscapeKeyDown,
    onRendered,
    open
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  const [exited, setExited] = external_react_["useState"](true);
  const modal = external_react_["useRef"]({});
  const mountNodeRef = external_react_["useRef"](null);
  const modalRef = external_react_["useRef"](null);
  const handleRef = Object(useForkRef["a" /* default */])(modalRef, ref);
  const hasTransition = getHasTransition(props);

  const getDoc = () => Object(ownerDocument["a" /* default */])(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = Object(useEventCallback["a" /* default */])(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = external_react_["useCallback"](() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = Object(useEventCallback["a" /* default */])(node => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  const handleClose = external_react_["useCallback"](() => {
    manager.remove(getModal());
  }, [manager]);
  external_react_["useEffect"](() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  external_react_["useEffect"](() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);
  };

  const handleExited = () => {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = event => {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    } // Swallow the event, in case someone is listening for the escape key on the body.


    event.stopPropagation();

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown && onClose) {
      onClose(event, 'escapeKeyDown');
    }
  };

  const inlineStyle = Modal_styles(theme || {
    zIndex: zIndex["a" /* default */]
  });
  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = Object(createChainedFunction["a" /* default */])(handleEnter, children.props.onEnter);
    childProps.onExited = Object(createChainedFunction["a" /* default */])(handleExited, children.props.onExited);
  }

  return Modal_jsx(Portal["a" /* default */], {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, Modal_jsx("div", Object(esm_extends["a" /* default */])({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: Object(objectSpread2["a" /* default */])({}, inlineStyle.root, {}, !open && exited ? inlineStyle.hidden : {}, {}, other.style)
  }), hideBackdrop ? null : Modal_jsx(BackdropComponent, Object(esm_extends["a" /* default */])({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), Modal_jsx(Modal_TrapFocus, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, external_react_["cloneElement"](children, childProps))));
});
/* harmony default export */ var src_Modal_Modal = __webpack_exports__["a"] = (Modal_Modal);

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

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "6a+p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__("T4GM");

// EXTERNAL MODULE: ../packages/material-ui/src/Drawer/Drawer.js
var Drawer = __webpack_require__("Odoa");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/ownerDocument.js
var ownerDocument = __webpack_require__("IsKj");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/useEventCallback.js
var useEventCallback = __webpack_require__("wFh9");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/transitions.js
var transitions = __webpack_require__("tqcJ");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/useTheme.js
var useTheme = __webpack_require__("LMpM");

// EXTERNAL MODULE: ../packages/material-ui/src/transitions/utils.js
var utils = __webpack_require__("xOSD");

// EXTERNAL MODULE: ../packages/material-ui/src/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("WKBU");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/capitalize.js
var capitalize = __webpack_require__("rKPb");

// CONCATENATED MODULE: ../packages/material-ui/src/SwipeableDrawer/SwipeArea.js


var __jsx = external_react_["createElement"];





const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: theme.zIndex.drawer - 1
  },
  anchorLeft: {
    right: 'auto'
  },
  anchorRight: {
    left: 'auto',
    right: 0
  },
  anchorTop: {
    bottom: 'auto',
    right: 0
  },
  anchorBottom: {
    top: 'auto',
    bottom: 0,
    right: 0
  }
});
/**
 * @ignore - internal component.
 */

const SwipeArea_SwipeArea = external_react_["forwardRef"](function SwipeArea(props, ref) {
  const {
    anchor,
    classes,
    className,
    width
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["anchor", "classes", "className", "width"]);

  return __jsx("div", Object(esm_extends["a" /* default */])({
    className: external_clsx_default()(classes.root, classes[`anchor${Object(capitalize["a" /* default */])(anchor)}`], className),
    ref: ref,
    style: {
      [Object(Drawer["c" /* isHorizontal */])(anchor) ? 'width' : 'height']: width
    }
  }, other));
});
/* harmony default export */ var SwipeableDrawer_SwipeArea = (Object(withStyles["default"])(styles, {
  name: 'PrivateSwipeArea'
})(SwipeArea_SwipeArea));
// CONCATENATED MODULE: ../packages/material-ui/src/SwipeableDrawer/SwipeableDrawer.js
/* unused harmony export reset */



var SwipeableDrawer_jsx = external_react_["createElement"];











 // This value is closed to what browsers are using internally to
// trigger a native scroll.

const UNCERTAINTY_THRESHOLD = 3; // px
// We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.

let nodeThatClaimedTheSwipe = null; // Exported for test purposes.

function SwipeableDrawer_reset() {
  nodeThatClaimedTheSwipe = null;
}

function calculateCurrentX(anchor, touches) {
  return anchor === 'right' ? document.body.offsetWidth - touches[0].pageX : touches[0].pageX;
}

function calculateCurrentY(anchor, touches) {
  return anchor === 'bottom' ? window.innerHeight - touches[0].clientY : touches[0].clientY;
}

function getMaxTranslate(horizontalSwipe, paperInstance) {
  return horizontalSwipe ? paperInstance.clientWidth : paperInstance.clientHeight;
}

function getTranslate(currentTranslate, startLocation, open, maxTranslate) {
  return Math.min(Math.max(open ? startLocation - currentTranslate : maxTranslate + startLocation - currentTranslate, 0), maxTranslate);
}

function getDomTreeShapes(element, rootNode) {
  // Adapted from https://github.com/oliviertassinari/react-swipeable-views/blob/7666de1dba253b896911adf2790ce51467670856/packages/react-swipeable-views/src/SwipeableViews.js#L129
  let domTreeShapes = [];

  while (element && element !== rootNode) {
    const style = window.getComputedStyle(element);

    if ( // Ignore the scroll children if the element is absolute positioned.
    style.getPropertyValue('position') === 'absolute' || // Ignore the scroll children if the element has an overflowX hidden
    style.getPropertyValue('overflow-x') === 'hidden') {
      domTreeShapes = [];
    } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      // Ignore the nodes that have no width.
      // Keep elements with a scroll
      domTreeShapes.push(element);
    }

    element = element.parentElement;
  }

  return domTreeShapes;
}

function findNativeHandler({
  domTreeShapes,
  start,
  current,
  anchor
}) {
  // Adapted from https://github.com/oliviertassinari/react-swipeable-views/blob/7666de1dba253b896911adf2790ce51467670856/packages/react-swipeable-views/src/SwipeableViews.js#L175
  const axisProperties = {
    scrollPosition: {
      x: 'scrollLeft',
      y: 'scrollTop'
    },
    scrollLength: {
      x: 'scrollWidth',
      y: 'scrollHeight'
    },
    clientLength: {
      x: 'clientWidth',
      y: 'clientHeight'
    }
  };
  return domTreeShapes.some(shape => {
    // Determine if we are going backward or forward.
    let goingForward = current >= start;

    if (anchor === 'top' || anchor === 'left') {
      goingForward = !goingForward;
    }

    const axis = anchor === 'left' || anchor === 'right' ? 'x' : 'y';
    const scrollPosition = shape[axisProperties.scrollPosition[axis]];
    const areNotAtStart = scrollPosition > 0;
    const areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];

    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      return shape;
    }

    return null;
  });
}

const disableSwipeToOpenDefault = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
const transitionDurationDefault = {
  enter: transitions["b" /* duration */].enteringScreen,
  exit: transitions["b" /* duration */].leavingScreen
};
const useEnhancedEffect = false ? undefined : external_react_["useEffect"];
const SwipeableDrawer_SwipeableDrawer = external_react_["forwardRef"](function SwipeableDrawer(inProps, ref) {
  const theme = Object(useTheme["a" /* default */])();
  const props = Object(getThemeProps["a" /* default */])({
    name: 'MuiSwipeableDrawer',
    props: Object(objectSpread2["a" /* default */])({}, inProps),
    theme
  });

  const {
    anchor = 'left',
    disableBackdropTransition = false,
    disableDiscovery = false,
    disableSwipeToOpen = disableSwipeToOpenDefault,
    hideBackdrop,
    hysteresis = 0.52,
    minFlingVelocity = 450,
    ModalProps: {
      BackdropProps
    } = {},
    onClose,
    onOpen,
    open,
    PaperProps = {},
    SwipeAreaProps,
    swipeAreaWidth = 20,
    transitionDuration = transitionDurationDefault,
    variant = 'temporary'
  } = props,
        ModalPropsProp = Object(objectWithoutProperties["a" /* default */])(props.ModalProps, ["BackdropProps"]),
        other = Object(objectWithoutProperties["a" /* default */])(props, ["anchor", "disableBackdropTransition", "disableDiscovery", "disableSwipeToOpen", "hideBackdrop", "hysteresis", "minFlingVelocity", "ModalProps", "onClose", "onOpen", "open", "PaperProps", "SwipeAreaProps", "swipeAreaWidth", "transitionDuration", "variant"]);

  const [maybeSwiping, setMaybeSwiping] = external_react_["useState"](false);
  const swipeInstance = external_react_["useRef"]({
    isSwiping: null
  });
  const swipeAreaRef = external_react_["useRef"]();
  const backdropRef = external_react_["useRef"]();
  const paperRef = external_react_["useRef"]();
  const touchDetected = external_react_["useRef"](false); // Ref for transition duration based on / to match swipe speed

  const calculatedDurationRef = external_react_["useRef"](); // Use a ref so the open value used is always up to date inside useCallback.

  useEnhancedEffect(() => {
    calculatedDurationRef.current = null;
  }, [open]);
  const setPosition = external_react_["useCallback"]((translate, options = {}) => {
    const {
      mode = null,
      changeTransition = true
    } = options;
    const anchorRtl = Object(Drawer["b" /* getAnchor */])(theme, anchor);
    const rtlTranslateMultiplier = ['right', 'bottom'].indexOf(anchorRtl) !== -1 ? 1 : -1;
    const horizontalSwipe = Object(Drawer["c" /* isHorizontal */])(anchor);
    const transform = horizontalSwipe ? `translate(${rtlTranslateMultiplier * translate}px, 0)` : `translate(0, ${rtlTranslateMultiplier * translate}px)`;
    const drawerStyle = paperRef.current.style;
    drawerStyle.webkitTransform = transform;
    drawerStyle.transform = transform;
    let transition = '';

    if (mode) {
      transition = theme.transitions.create('all', Object(utils["a" /* getTransitionProps */])({
        timeout: transitionDuration
      }, {
        mode
      }));
    }

    if (changeTransition) {
      drawerStyle.webkitTransition = transition;
      drawerStyle.transition = transition;
    }

    if (!disableBackdropTransition && !hideBackdrop) {
      const backdropStyle = backdropRef.current.style;
      backdropStyle.opacity = 1 - translate / getMaxTranslate(horizontalSwipe, paperRef.current);

      if (changeTransition) {
        backdropStyle.webkitTransition = transition;
        backdropStyle.transition = transition;
      }
    }
  }, [anchor, disableBackdropTransition, hideBackdrop, theme, transitionDuration]);
  const handleBodyTouchEnd = Object(useEventCallback["a" /* default */])(event => {
    if (!touchDetected.current) {
      return;
    }

    nodeThatClaimedTheSwipe = null;
    touchDetected.current = false;
    setMaybeSwiping(false); // The swipe wasn't started.

    if (!swipeInstance.current.isSwiping) {
      swipeInstance.current.isSwiping = null;
      return;
    }

    swipeInstance.current.isSwiping = null;
    const anchorRtl = Object(Drawer["b" /* getAnchor */])(theme, anchor);
    const horizontal = Object(Drawer["c" /* isHorizontal */])(anchor);
    let current;

    if (horizontal) {
      current = calculateCurrentX(anchorRtl, event.changedTouches);
    } else {
      current = calculateCurrentY(anchorRtl, event.changedTouches);
    }

    const startLocation = horizontal ? swipeInstance.current.startX : swipeInstance.current.startY;
    const maxTranslate = getMaxTranslate(horizontal, paperRef.current);
    const currentTranslate = getTranslate(current, startLocation, open, maxTranslate);
    const translateRatio = currentTranslate / maxTranslate;

    if (Math.abs(swipeInstance.current.velocity) > minFlingVelocity) {
      // Calculate transition duration to match swipe speed
      calculatedDurationRef.current = Math.abs((maxTranslate - currentTranslate) / swipeInstance.current.velocity) * 1000;
    }

    if (open) {
      if (swipeInstance.current.velocity > minFlingVelocity || translateRatio > hysteresis) {
        onClose();
      } else {
        // Reset the position, the swipe was aborted.
        setPosition(0, {
          mode: 'exit'
        });
      }

      return;
    }

    if (swipeInstance.current.velocity < -minFlingVelocity || 1 - translateRatio > hysteresis) {
      onOpen();
    } else {
      // Reset the position, the swipe was aborted.
      setPosition(getMaxTranslate(horizontal, paperRef.current), {
        mode: 'enter'
      });
    }
  });
  const handleBodyTouchMove = Object(useEventCallback["a" /* default */])(event => {
    // the ref may be null when a parent component updates while swiping
    if (!paperRef.current || !touchDetected.current) {
      return;
    } // We are not supposed to handle this touch move because the swipe was started in a scrollable container in the drawer


    if (nodeThatClaimedTheSwipe != null && nodeThatClaimedTheSwipe !== swipeInstance.current) {
      return;
    }

    const anchorRtl = Object(Drawer["b" /* getAnchor */])(theme, anchor);
    const horizontalSwipe = Object(Drawer["c" /* isHorizontal */])(anchor);
    const currentX = calculateCurrentX(anchorRtl, event.touches);
    const currentY = calculateCurrentY(anchorRtl, event.touches);

    if (open && paperRef.current.contains(event.target) && nodeThatClaimedTheSwipe == null) {
      const domTreeShapes = getDomTreeShapes(event.target, paperRef.current);
      const nativeHandler = findNativeHandler({
        domTreeShapes,
        start: horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY,
        current: horizontalSwipe ? currentX : currentY,
        anchor
      });

      if (nativeHandler) {
        nodeThatClaimedTheSwipe = nativeHandler;
        return;
      }

      nodeThatClaimedTheSwipe = swipeInstance.current;
    } // We don't know yet.


    if (swipeInstance.current.isSwiping == null) {
      const dx = Math.abs(currentX - swipeInstance.current.startX);
      const dy = Math.abs(currentY - swipeInstance.current.startY); // We are likely to be swiping, let's prevent the scroll event on iOS.

      if (dx > dy) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }

      const definitelySwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;

      if (definitelySwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
        swipeInstance.current.isSwiping = definitelySwiping;

        if (!definitelySwiping) {
          handleBodyTouchEnd(event);
          return;
        } // Shift the starting point.


        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY; // Compensate for the part of the drawer displayed on touch start.

        if (!disableDiscovery && !open) {
          if (horizontalSwipe) {
            swipeInstance.current.startX -= swipeAreaWidth;
          } else {
            swipeInstance.current.startY -= swipeAreaWidth;
          }
        }
      }
    }

    if (!swipeInstance.current.isSwiping) {
      return;
    }

    const maxTranslate = getMaxTranslate(horizontalSwipe, paperRef.current);
    let startLocation = horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY;

    if (open && !swipeInstance.current.paperHit) {
      startLocation = Math.min(startLocation, maxTranslate);
    }

    const translate = getTranslate(horizontalSwipe ? currentX : currentY, startLocation, open, maxTranslate);

    if (open) {
      if (!swipeInstance.current.paperHit) {
        const paperHit = horizontalSwipe ? currentX < maxTranslate : currentY < maxTranslate;

        if (paperHit) {
          swipeInstance.current.paperHit = true;
          swipeInstance.current.startX = currentX;
          swipeInstance.current.startY = currentY;
        } else {
          return;
        }
      } else if (translate === 0) {
        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY;
      }
    }

    if (swipeInstance.current.lastTranslate === null) {
      swipeInstance.current.lastTranslate = translate;
      swipeInstance.current.lastTime = performance.now() + 1;
    }

    const velocity = (translate - swipeInstance.current.lastTranslate) / (performance.now() - swipeInstance.current.lastTime) * 1e3; // Low Pass filter.

    swipeInstance.current.velocity = swipeInstance.current.velocity * 0.4 + velocity * 0.6;
    swipeInstance.current.lastTranslate = translate;
    swipeInstance.current.lastTime = performance.now(); // We are swiping, let's prevent the scroll event on iOS.

    if (event.cancelable) {
      event.preventDefault();
    }

    setPosition(translate);
  });
  const handleBodyTouchStart = Object(useEventCallback["a" /* default */])(event => {
    // We are not supposed to handle this touch move.
    // Example of use case: ignore the event if there is a Slider.
    if (event.defaultPrevented) {
      return;
    } // We can only have one node at the time claiming ownership for handling the swipe.


    if (event.muiHandled) {
      return;
    } // At least one element clogs the drawer interaction zone.


    if (open && !backdropRef.current.contains(event.target) && !paperRef.current.contains(event.target)) {
      return;
    }

    const anchorRtl = Object(Drawer["b" /* getAnchor */])(theme, anchor);
    const horizontalSwipe = Object(Drawer["c" /* isHorizontal */])(anchor);
    const currentX = calculateCurrentX(anchorRtl, event.touches);
    const currentY = calculateCurrentY(anchorRtl, event.touches);

    if (!open) {
      if (disableSwipeToOpen || event.target !== swipeAreaRef.current) {
        return;
      }

      if (horizontalSwipe) {
        if (currentX > swipeAreaWidth) {
          return;
        }
      } else if (currentY > swipeAreaWidth) {
        return;
      }
    }

    event.muiHandled = true;
    nodeThatClaimedTheSwipe = null;
    swipeInstance.current.startX = currentX;
    swipeInstance.current.startY = currentY;
    setMaybeSwiping(true);

    if (!open && paperRef.current) {
      // The ref may be null when a parent component updates while swiping.
      setPosition(getMaxTranslate(horizontalSwipe, paperRef.current) + (disableDiscovery ? 20 : -swipeAreaWidth), {
        changeTransition: false
      });
    }

    swipeInstance.current.velocity = 0;
    swipeInstance.current.lastTime = null;
    swipeInstance.current.lastTranslate = null;
    swipeInstance.current.paperHit = false;
    touchDetected.current = true;
  });
  external_react_["useEffect"](() => {
    if (variant === 'temporary') {
      const doc = Object(ownerDocument["a" /* default */])(paperRef.current);
      doc.addEventListener('touchstart', handleBodyTouchStart);
      doc.addEventListener('touchmove', handleBodyTouchMove, {
        passive: false
      });
      doc.addEventListener('touchend', handleBodyTouchEnd);
      return () => {
        doc.removeEventListener('touchstart', handleBodyTouchStart);
        doc.removeEventListener('touchmove', handleBodyTouchMove, {
          passive: false
        });
        doc.removeEventListener('touchend', handleBodyTouchEnd);
      };
    }

    return undefined;
  }, [variant, handleBodyTouchStart, handleBodyTouchMove, handleBodyTouchEnd]);
  external_react_["useEffect"](() => () => {
    // We need to release the lock.
    if (nodeThatClaimedTheSwipe === swipeInstance.current) {
      nodeThatClaimedTheSwipe = null;
    }
  }, []);
  external_react_["useEffect"](() => {
    if (!open) {
      setMaybeSwiping(false);
    }
  }, [open]);
  const handleBackdropRef = external_react_["useCallback"](instance => {
    // #StrictMode ready
    backdropRef.current = external_react_dom_["findDOMNode"](instance);
  }, []);
  return SwipeableDrawer_jsx(external_react_["Fragment"], null, SwipeableDrawer_jsx(Drawer["a" /* default */], Object(esm_extends["a" /* default */])({
    open: variant === 'temporary' && maybeSwiping ? true : open,
    variant: variant,
    ModalProps: Object(objectSpread2["a" /* default */])({
      BackdropProps: Object(objectSpread2["a" /* default */])({}, BackdropProps, {
        ref: handleBackdropRef
      })
    }, ModalPropsProp),
    PaperProps: Object(objectSpread2["a" /* default */])({}, PaperProps, {
      style: Object(objectSpread2["a" /* default */])({
        pointerEvents: variant === 'temporary' && !open ? 'none' : ''
      }, PaperProps.style),
      ref: paperRef
    }),
    anchor: anchor,
    transitionDuration: calculatedDurationRef.current || transitionDuration,
    onClose: onClose,
    ref: ref
  }, other)), !disableSwipeToOpen && variant === 'temporary' && SwipeableDrawer_jsx(NoSsr["a" /* default */], null, SwipeableDrawer_jsx(SwipeableDrawer_SwipeArea, Object(esm_extends["a" /* default */])({
    anchor: anchor,
    ref: swipeAreaRef,
    width: swipeAreaWidth
  }, SwipeAreaProps))));
});
/* harmony default export */ var src_SwipeableDrawer_SwipeableDrawer = __webpack_exports__["a"] = (SwipeableDrawer_SwipeableDrawer);

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

/***/ "7KoJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore'));

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

/***/ "7an5":
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "8GFl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fontFamily */
/* unused harmony export fontSize */
/* unused harmony export fontStyle */
/* unused harmony export fontWeight */
/* unused harmony export letterSpacing */
/* unused harmony export lineHeight */
/* unused harmony export textAlign */
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+bTD");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("p9jg");


const fontFamily = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'letterSpacing'
});
const lineHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'lineHeight'
});
const textAlign = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'textAlign'
});
const typography = Object(_compose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ __webpack_exports__["a"] = (typography);

/***/ }),

/***/ "95Dg":
/***/ (function(module, exports) {

module.exports = require("fg-loadcss/src/loadCSS");

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("k3h2");

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("6mFX"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("bBV7"));

var _rewriteUrlForExport = __webpack_require__("Z0wt");

var _utils = __webpack_require__("z4BS");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (true) {
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _rewriteUrlForExport.rewriteUrlForNextExport)(props.href);
      }
    }

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

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

/***/ "A++9":
/***/ (function(module, exports) {

module.exports = require("marked/lib/marked");

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

/***/ "AgvC":
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
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("k+Qe");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];




const styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
const List = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function List(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'ul',
    dense = false,
    disablePadding = false,
    subheader
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  const context = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](() => ({
    dense
  }), [dense]);
  return __jsx(_ListContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Provider, {
    value: context
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "Aqpb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code'));

/***/ }),

/***/ "B+1N":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/for");

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "C4Ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateValue */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FdmI");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("25Ld");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+rSm");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LMpM");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tqcJ");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("xOSD");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];








 // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `none`.`

function getTranslateValue(direction, node) {
  const rect = node.getBoundingClientRect();
  let transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(transformValues[4], 10);
    offsetY = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(transformValues[5], 10);
  }

  if (direction === 'left') {
    return `translateX(${window.innerWidth}px) translateX(-${rect.left - offsetX}px)`;
  }

  if (direction === 'right') {
    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }

  if (direction === 'up') {
    return `translateY(${window.innerHeight}px) translateY(-${rect.top - offsetY}px)`;
  } // direction === 'down'


  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}

function setTranslateValue(direction, node) {
  const transform = getTranslateValue(direction, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_10__[/* duration */ "b"].enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_10__[/* duration */ "b"].leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Slide = react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function Slide(props, ref) {
  const {
    children,
    direction = 'down',
    in: inProp,
    onEnter,
    onEntering,
    onExit,
    onExited,
    style,
    timeout = defaultTimeout
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["children", "direction", "in", "onEnter", "onEntering", "onExit", "onExited", "style", "timeout"]);

  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])();
  const childrenRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  /**
   * used in cloneElement(children, { ref: handleRef })
   */

  const handleOwnRef = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](instance => {
    // #StrictMode ready
    childrenRef.current = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](instance);
  }, []);
  const handleRefIntermediary = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(children.ref, handleOwnRef);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(handleRefIntermediary, ref);

  const handleEnter = (_, isAppearing) => {
    const node = childrenRef.current;
    setTranslateValue(direction, node);
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_11__[/* reflow */ "b"])(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleEntering = (_, isAppearing) => {
    const node = childrenRef.current;
    const transitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_11__[/* getTransitionProps */ "a"])({
      timeout,
      style
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create('transform', Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };

  const handleExit = () => {
    const node = childrenRef.current;
    const transitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_11__[/* getTransitionProps */ "a"])({
      timeout,
      style
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create('transform', Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);

    if (onExit) {
      onExit(node);
    }
  };

  const handleExited = () => {
    const node = childrenRef.current; // No need for transitions when the component is hidden

    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  };

  const updatePosition = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    const handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp]);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    onEnter: handleEnter,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    appear: true,
    in: inProp,
    timeout: timeout
  }, other), (state, childProps) => {
    return react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"](children, Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      ref: handleRef,
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, style, {}, children.props.style)
    }, childProps));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Slide);

/***/ }),

/***/ "CCqr":
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),

/***/ "CFQC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LMpM");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xOSD");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+rSm");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];






function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}

const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Grow = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Grow(props, ref) {
  const {
    children,
    in: inProp,
    onEnter,
    onExit,
    style,
    timeout = 'auto'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

  const timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(children.ref, ref);
  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();

  const handleEnter = (node, isAppearing) => {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_6__[/* reflow */ "b"])(node); // So the animation always start from the start.

    const {
      duration: transitionDuration,
      delay
    } = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_6__[/* getTransitionProps */ "a"])({
      style,
      timeout
    }, {
      mode: 'enter'
    });
    let duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleExit = node => {
    const {
      duration: transitionDuration,
      delay
    } = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_6__[/* getTransitionProps */ "a"])({
      style,
      timeout
    }, {
      mode: 'exit'
    });
    let duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  };

  const addEndListener = (_, next) => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["Transition"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    appear: true,
    in: inProp,
    onEnter: handleEnter,
    onExit: handleExit,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), (state, childProps) => {
    return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], {}, style, {}, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["a"] = (Grow);

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "CTgH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yZEQ");
/* harmony import */ var _packages_material_ui_src_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Uoj6");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const useStyles = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
  root: {
    paddingTop: 80 + 16
  }
});
function AppContainer(props) {
  const {
    className
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["className"]);

  const classes = useStyles();
  return __jsx(_packages_material_ui_src_Container__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    component: "main",
    id: "main-content",
    maxWidth: "md",
    tabIndex: -1,
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className)
  }, other));
}

/***/ }),

/***/ "CgSL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add'));

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

/***/ "DmyM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UWCm");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XpU0");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("IxJb");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("p9xL");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("kCiw");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("LMpM");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];









const RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
const LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
const styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
const Menu = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Menu(props, ref) {
  const {
    autoFocus = true,
    children,
    classes,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    onEntering,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = 'auto',
    variant = 'selectedMenu'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  const contentAnchorRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  const getContentAnchorEl = () => contentAnchorRef.current;

  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_3__["Children"].map(children, (child, index) => {
    if (!react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](child)) {
      return;
    }

    if (false) {}

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const items = react__WEBPACK_IMPORTED_MODULE_3__["Children"].map(children, (child, index) => {
    if (index === activeItemIndex) {
      return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](child, {
        ref: instance => {
          // #StrictMode ready
          contentAnchorRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"](instance);
          Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(child.ref, instance);
        }
      });
    }

    return child;
  });
  return __jsx(_Popover__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, PaperProps, {
      classes: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), __jsx(_MenuList__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.list, MenuListProps.className)
  }), items));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiMenu'
})(Menu));

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

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "HC9H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight'));

/***/ }),

/***/ "Hrpt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPrismTheme; });
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("N4Zu");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+AD9");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_diff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5ZBS");
/* harmony import */ var prismjs_components_prism_diff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_diff__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Y9oD");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nRKQ");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h0OK");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Yh2X");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1pcZ");
/* harmony import */ var prismjs_components_prism_tsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx__WEBPACK_IMPORTED_MODULE_7__);
/* eslint-disable import/no-mutable-exports, global-require */








let styleNode;
let darkTheme;

if (false) {}


function setPrismTheme(theme) {
  styleNode.textContent = theme;
}
/* harmony default export */ __webpack_exports__["b"] = (prismjs__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "IC7y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash/kebabCase"
var kebabCase_ = __webpack_require__("VlVZ");
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("JYC+");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "lz-string"
var external_lz_string_ = __webpack_require__("tGja");
var external_lz_string_default = /*#__PURE__*/__webpack_require__.n(external_lz_string_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "clipboard-copy"
var external_clipboard_copy_ = __webpack_require__("3RGy");
var external_clipboard_copy_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_copy_);

// EXTERNAL MODULE: ../packages/material-ui/src/styles/colorManipulator.js
var colorManipulator = __webpack_require__("cYeA");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: ../packages/material-ui/src/IconButton/IconButton.js
var IconButton = __webpack_require__("l/nz");

// EXTERNAL MODULE: ../packages/material-ui/src/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("LHO+");

// EXTERNAL MODULE: ../packages/material-ui/src/Collapse/Collapse.js
var Collapse = __webpack_require__("lyll");

// EXTERNAL MODULE: ../packages/material-ui/src/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("WKBU");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Edit.js
var Edit = __webpack_require__("ZOhp");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Code.js
var Code = __webpack_require__("Aqpb");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/FileCopy.js
var FileCopy = __webpack_require__("v4UQ");

// EXTERNAL MODULE: ../packages/material-ui/src/Snackbar/Snackbar.js
var Snackbar = __webpack_require__("zDFz");

// EXTERNAL MODULE: ../packages/material-ui/src/Menu/Menu.js
var Menu = __webpack_require__("DmyM");

// EXTERNAL MODULE: ../packages/material-ui/src/MenuItem/MenuItem.js
var MenuItem = __webpack_require__("2zfq");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/MoreVert.js
var MoreVert = __webpack_require__("sGfw");

// EXTERNAL MODULE: ../packages/material-ui/src/Tooltip/Tooltip.js
var Tooltip = __webpack_require__("zRBL");

// EXTERNAL MODULE: ./src/modules/components/MarkdownElement.js
var MarkdownElement = __webpack_require__("juyJ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/map.js
var map = __webpack_require__("6mFX");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__("q1C7");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/useTheme.js
var useTheme = __webpack_require__("LMpM");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/jssPreset/jssPreset.js
var jssPreset = __webpack_require__("+e5d");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/StylesProvider/StylesProvider.js
var StylesProvider = __webpack_require__("IOrS");

// EXTERNAL MODULE: external "jss-rtl"
var external_jss_rtl_ = __webpack_require__("7an5");
var external_jss_rtl_default = /*#__PURE__*/__webpack_require__.n(external_jss_rtl_);

// EXTERNAL MODULE: external "react-frame-component"
var external_react_frame_component_ = __webpack_require__("0Nc6");
var external_react_frame_component_default = /*#__PURE__*/__webpack_require__.n(external_react_frame_component_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: ../packages/material-ui/src/Typography/Typography.js
var Typography = __webpack_require__("Oy88");

// EXTERNAL MODULE: ../packages/material-ui/src/Link/Link.js
var Link = __webpack_require__("r6IM");

// CONCATENATED MODULE: ./src/modules/components/DemoErrorBoundary.js

var __jsx = external_react_default.a.createElement;




var _ref = __jsx(Typography["a" /* default */], {
  color: "error",
  component: "p",
  variant: "h5",
  gutterBottom: true
}, "This demo had a runtime error!");

var _ref2 = __jsx(Typography["a" /* default */], null, "We would appreciate it if you report this error directly to our", ' ', __jsx(Link["a" /* default */], {
  href: "https://github.com/Foso/material-ui/issues/new/choose",
  target: "_blank"
}, "issue tracker"), ".");

class DemoErrorBoundary_DemoErrorBoundary extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      error: null
    });
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  render() {
    const {
      children
    } = this.props;
    const {
      error
    } = this.state;

    if (error) {
      /* eslint-disable material-ui/no-hardcoded-labels */
      return __jsx("div", null, _ref, _ref2, __jsx("pre", null, error.toString()));
      /* eslint-enable material-ui/no-hardcoded-labels */
    }

    return children;
  }

}
// CONCATENATED MODULE: ./src/modules/components/DemoSandboxed.js




var DemoSandboxed_jsx = external_react_default.a.createElement;








const styles = theme => ({
  frame: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    height: 400,
    border: 'none',
    boxShadow: theme.shadows[1]
  }
});

var DemoSandboxed_ref = DemoSandboxed_jsx("div", {
  id: "demo-frame-jss"
});

function DemoFrame(props) {
  const {
    children,
    classes
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes"]);

  const theme = Object(useTheme["a" /* default */])();
  const [state, setState] = external_react_default.a.useState({
    ready: false
  });
  const instanceRef = external_react_default.a.useRef();
  const handleRef = external_react_default.a.useCallback(ref => {
    instanceRef.current = {
      contentDocument: ref ? ref.node.contentDocument : null,
      contentWindow: ref ? ref.node.contentWindow : null
    };
  }, []);

  const onContentDidMount = () => {
    setState({
      ready: true,
      jss: Object(external_jss_["create"])({
        plugins: [...Object(jssPreset["a" /* default */])().plugins, external_jss_rtl_default()()],
        insertionPoint: instanceRef.current.contentWindow['demo-frame-jss']
      }),
      sheetsManager: new map_default.a(),
      container: instanceRef.current.contentDocument.body,
      window: () => instanceRef.current.contentWindow
    });
  };

  const onContentDidUpdate = () => {
    instanceRef.current.contentDocument.body.dir = theme.direction;
  }; // NoSsr fixes a strange concurrency issue with iframe and quick React mount/unmount


  return DemoSandboxed_jsx(NoSsr["a" /* default */], null, DemoSandboxed_jsx(external_react_frame_component_default.a, Object(esm_extends["a" /* default */])({
    ref: handleRef,
    className: classes.frame,
    contentDidMount: onContentDidMount,
    contentDidUpdate: onContentDidUpdate
  }, other), DemoSandboxed_ref, state.ready ? DemoSandboxed_jsx(StylesProvider["b" /* default */], {
    jss: state.jss,
    sheetsManager: state.sheetsManager
  }, external_react_default.a.cloneElement(children, {
    container: state.container,
    window: state.window
  })) : null));
}

const StyledFrame = Object(withStyles["default"])(styles)(DemoFrame);
/**
 * Isolates the demo component as best as possible. Additional props are spread
 * to an `iframe` if `iframe={true}`.
 */

function DemoSandboxed(props) {
  const {
    component: Component,
    iframe,
    name
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["component", "iframe", "name"]);

  const Sandbox = iframe ? StyledFrame : external_react_default.a.Fragment;
  const sandboxProps = iframe ? Object(objectSpread2["a" /* default */])({
    title: `${name} demo`
  }, other) : {};
  return DemoSandboxed_jsx(DemoErrorBoundary_DemoErrorBoundary, null, DemoSandboxed_jsx(Sandbox, sandboxProps, DemoSandboxed_jsx(Component, null)));
}

/* harmony default export */ var components_DemoSandboxed = (external_react_default.a.memo(DemoSandboxed));
// EXTERNAL MODULE: ../packages/material-ui/src/Fade/Fade.js
var Fade = __webpack_require__("LpUc");

// EXTERNAL MODULE: ../packages/material-ui-lab/src/ToggleButton/ToggleButton.js
var ToggleButton = __webpack_require__("eou5");

// EXTERNAL MODULE: ../packages/material-ui-lab/src/ToggleButtonGroup/ToggleButtonGroup.js + 1 modules
var ToggleButtonGroup = __webpack_require__("THuk");

// EXTERNAL MODULE: ../packages/material-ui-docs/src/index.js + 3 modules
var src = __webpack_require__("y+v8");

// EXTERNAL MODULE: ./src/modules/constants.js
var constants = __webpack_require__("NLnA");

// CONCATENATED MODULE: ./src/modules/components/DemoLanguages.js
var DemoLanguages_jsx = external_react_default.a.createElement;








const DemoLanguages_styles = {
  toggleButtonGroup: {
    margin: '8px 0'
  },
  toggleButton: {
    height: 32
  }
};

var DemoLanguages_ref = DemoLanguages_jsx(src["b" /* JavaScript */], null);

var DemoLanguages_ref2 = DemoLanguages_jsx(src["c" /* TypeScript */], null);

function DemoLanguages(props) {
  const {
    classes,
    codeOpen,
    codeVariant,
    demo,
    gaEventLabel,
    onLanguageClick
  } = props;
  const hasTSVariant = demo.rawTS;
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);

  function renderedCodeVariant() {
    if (codeVariant === constants["CODE_VARIANTS"].TS && hasTSVariant) {
      return constants["CODE_VARIANTS"].TS;
    }

    return constants["CODE_VARIANTS"].JS;
  }

  return DemoLanguages_jsx(Fade["a" /* default */], {
    in: codeOpen
  }, DemoLanguages_jsx(ToggleButtonGroup["a" /* default */], {
    className: classes.toggleButtonGroup,
    exclusive: true,
    value: renderedCodeVariant(),
    onChange: onLanguageClick
  }, DemoLanguages_jsx(ToggleButton["a" /* default */], {
    className: classes.toggleButton,
    value: constants["CODE_VARIANTS"].JS,
    "aria-label": t('showJSSource'),
    "data-ga-event-category": "demo",
    "data-ga-event-action": "source-js",
    "data-ga-event-label": gaEventLabel
  }, DemoLanguages_ref), DemoLanguages_jsx(ToggleButton["a" /* default */], {
    className: classes.toggleButton,
    value: constants["CODE_VARIANTS"].TS,
    disabled: !hasTSVariant,
    "aria-label": t('showTSSource'),
    "data-ga-event-category": "demo",
    "data-ga-event-action": "source-ts",
    "data-ga-event-label": gaEventLabel
  }, DemoLanguages_ref2)));
}

/* harmony default export */ var components_DemoLanguages = (Object(withStyles["default"])(DemoLanguages_styles)(DemoLanguages));
// EXTERNAL MODULE: ./src/modules/utils/helpers.js
var helpers = __webpack_require__("18I3");

// CONCATENATED MODULE: ./src/modules/utils/getDemoConfig.js




function jsDemo(demoData) {
  return {
    dependencies: Object(helpers["getDependencies"])(demoData.raw),
    files: {
      'demo.js': demoData.raw,
      'index.js': `
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';

ReactDOM.render(<Demo />, document.querySelector('#root'));
    `
    }
  };
}

function tsDemo(demoData) {
  return {
    dependencies: Object(helpers["getDependencies"])(demoData.raw, {
      codeLanguage: constants["CODE_VARIANTS"].TS
    }),
    files: {
      'demo.tsx': demoData.raw,
      'index.tsx': `
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';

ReactDOM.render(<Demo />, document.querySelector('#root'));
    `,
      'tsconfig.json': `{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": [
    "src"
  ]
}
      `
    },
    main: 'index.tsx',
    scripts: {
      start: 'react-scripts start'
    }
  };
}

function getLanguageConfig(demoData) {
  switch (demoData.codeVariant) {
    case constants["CODE_VARIANTS"].TS:
      return tsDemo(demoData);

    case constants["CODE_VARIANTS"].JS:
      return jsDemo(demoData);

    default:
      throw new Error(`Unsupported codeVariant: ${demoData.codeVariant}`);
  }
}

function getDemo(demoData) {
  const baseConfig = {
    title: 'Material demo',
    description: demoData.githubLocation,
    files: {
      'index.html': `
<body>
  <!-- Fonts to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <!-- Icons to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <div id="root"></div>
</body>
      `
    }
  };
  const languageConfig = getLanguageConfig(demoData);
  return Object(objectSpread2["a" /* default */])({}, baseConfig, {}, languageConfig, {
    files: Object(objectSpread2["a" /* default */])({}, baseConfig.files, {}, languageConfig.files)
  });
}
// CONCATENATED MODULE: ./src/modules/utils/getJsxPreview.js
function getJsxPreview(code) {
  /* The regex matches the content of the return statement in the default export,
   * stripping any wrapper divs:
   *
   * `export default.*`
   * `\n  return (\n` or `\n  return `
   * `    <div.*>\n` (optional)
   *  everything until:
   * `\n    </div>` (optional)
   * `  );\n}` or `;\n}`
   */
  let jsx = code.match(/export default .*(?:\n {2}return \(\n|\n {2}return )(?: {4}<div.*?>\n)?(.*?)(\n {4}<\/div>)?(\n {2}\);\n}|;\n})/s); // Just the match, otherwise the full source if either no match or preview disabled,
  // so as not to break the Collapse transition.

  jsx = jsx ? jsx[1] : code; // Remove leading spaces from each line

  return jsx.split(/\n/).reduce((acc, line) => `${acc}${line.slice( // Number of leading spaces on the first line
  jsx.match(/^ */)[0].length)}\n`, '');
}
// CONCATENATED MODULE: ./src/modules/components/Demo.js



var Demo_jsx = external_react_default.a.createElement;


























function compress(object) {
  return external_lz_string_default.a.compressToBase64(stringify_default()(object)).replace(/\+/g, '-') // Convert '+' to '-'
  .replace(/\//g, '_') // Convert '/' to '_'
  .replace(/=+$/, ''); // Remove ending '='
}

function addHiddenInput(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

const Demo_styles = theme => ({
  root: {
    marginBottom: 40,
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 1),
      marginLeft: 0,
      marginRight: 0
    }
  },
  demo: {
    position: 'relative',
    outline: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius
    }
  },

  /* Isolate the demo with an outline. */
  demoBgOutlined: {
    padding: theme.spacing(3),
    border: `1px solid ${Object(colorManipulator["fade"])(theme.palette.action.active, 0.12)}`,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    [theme.breakpoints.up('sm')]: {
      borderLeftWidth: 1,
      borderRightWidth: 1
    }
  },

  /* Prepare the background to display an inner elevation. */
  demoBgTrue: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.level2
  },

  /* Make no difference between the demo and the markdown. */
  demoBgInline: {
    // Maintain alignment with the markdown text
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3)
    }
  },
  demoHiddenHeader: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3)
    }
  },
  header: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flip: false,
      top: 0,
      right: theme.spacing(1),
      height: theme.spacing(6)
    },
    justifyContent: 'space-between'
  },
  headerButtons: {
    margin: '2px 0'
  },
  code: {
    display: 'none',
    padding: 0,
    marginBottom: theme.spacing(1),
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    '& pre': {
      overflow: 'auto',
      lineHeight: 1.5,
      margin: '0px !important',
      maxHeight: 1000
    }
  },
  tooltip: {
    zIndex: theme.zIndex.appBar - 1
  },
  anchorLink: {
    marginTop: -64,
    // height of toolbar
    position: 'absolute'
  }
});

function getDemoName(location) {
  return location.replace(/(.+?)(\w+)\.\w+$$/, '$2');
}

function getDemoData(codeVariant, demo, githubLocation) {
  if (codeVariant === constants["CODE_VARIANTS"].TS && demo.rawTS) {
    return {
      codeVariant: constants["CODE_VARIANTS"].TS,
      githubLocation: githubLocation.replace(/\.js$/, '.tsx'),
      raw: demo.rawTS,
      Component: demo.tsx,
      sourceLanguage: 'tsx'
    };
  }

  return {
    codeVariant: constants["CODE_VARIANTS"].JS,
    githubLocation,
    raw: demo.raw,
    Component: demo.js,
    sourceLanguage: 'jsx'
  };
}

var Demo_ref = Demo_jsx(Code["a" /* default */], {
  fontSize: "small"
});

var Demo_ref2 = Demo_jsx(Edit["a" /* default */], {
  fontSize: "small"
});

var _ref3 = Demo_jsx(FileCopy["a" /* default */], {
  fontSize: "small"
});

var _ref4 = Demo_jsx(MoreVert["a" /* default */], {
  fontSize: "small"
});

function Demo(props) {
  const {
    classes,
    demo,
    demoOptions,
    githubLocation
  } = props;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  const codeVariant = Object(external_react_redux_["useSelector"])(state => state.options.codeVariant);
  const demoData = getDemoData(codeVariant, demo, githubLocation);
  const [sourceHintSeen, setSourceHintSeen] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    setSourceHintSeen(Object(helpers["getCookie"])('sourceHintSeen'));
  }, []);
  const [demoHovered, setDemoHovered] = external_react_default.a.useState(false);

  const handleDemoHover = event => {
    setDemoHovered(event.type === 'mouseenter');
  };

  const [snackbarOpen, setSnackbarOpen] = external_react_default.a.useState(false);
  const [snackbarMessage, setSnackbarMessage] = external_react_default.a.useState(undefined);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCodeLanguageClick = (event, clickedCodeVariant) => {
    if (codeVariant !== clickedCodeVariant) {
      dispatch({
        type: constants["ACTION_TYPES"].OPTIONS_CHANGE,
        payload: {
          codeVariant: clickedCodeVariant
        }
      });
    }
  };

  const handleCodeSandboxClick = () => {
    const demoConfig = getDemo(demoData);
    const parameters = compress({
      files: Object(objectSpread2["a" /* default */])({
        'package.json': {
          content: {
            title: demoConfig.title,
            description: demoConfig.description,
            dependencies: demoConfig.dependencies,
            devDependencies: Object(objectSpread2["a" /* default */])({
              'react-scripts': 'latest'
            }, demoConfig.devDependencies),
            main: demoConfig.main,
            scripts: demoConfig.scripts
          }
        }
      }, keys_default()(demoConfig.files).reduce((files, name) => {
        files[name] = {
          content: demoConfig.files[name]
        };
        return files;
      }, {}))
    });
    const form = document.createElement('form');
    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://codeSandbox.io/api/v1/sandboxes/define';
    addHiddenInput(form, 'parameters', parameters);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleMoreClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  const handleCopyClick = async () => {
    try {
      await external_clipboard_copy_default()(demoData.raw);
      setSnackbarMessage(t('copiedSource'));
      setSnackbarOpen(true);
    } finally {
      handleMoreClose();
    }
  };

  const handleStackBlitzClick = () => {
    const demoConfig = getDemo(demoData);
    const form = document.createElement('form');
    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://stackblitz.com/run';
    addHiddenInput(form, 'project[template]', 'javascript');
    addHiddenInput(form, 'project[title]', demoConfig.title);
    addHiddenInput(form, 'project[description]', demoConfig.description);
    addHiddenInput(form, 'project[dependencies]', stringify_default()(demoConfig.dependencies));
    addHiddenInput(form, 'project[devDependencies]', stringify_default()(demoConfig.devDependencies));

    keys_default()(demoConfig.files).forEach(key => {
      const value = demoConfig.files[key];
      addHiddenInput(form, `project[files][${key}]`, value);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    handleMoreClose();
  };

  const showSourceHint = demoHovered && !sourceHintSeen;
  const DemoComponent = demoData.Component;
  const demoName = getDemoName(demoData.githubLocation);
  const demoSandboxedStyle = external_react_default.a.useMemo(() => ({
    maxWidth: demoOptions.maxWidth,
    height: demoOptions.height
  }), [demoOptions.height, demoOptions.maxWidth]);

  if (demoOptions.bg == null) {
    demoOptions.bg = 'outlined';
  }

  if (demoOptions.iframe) {
    demoOptions.bg = true;
  }

  const createHandleCodeSourceLink = anchor => async () => {
    try {
      await external_clipboard_copy_default()(`${window.location.href.split('#')[0]}#${anchor}`);
      setSnackbarMessage(t('copiedSourceLink'));
      setSnackbarOpen(true);
    } finally {
      handleMoreClose();
    }
  };

  const [codeOpen, setCodeOpen] = external_react_default.a.useState(demoOptions.defaultCodeOpen || false);
  external_react_default.a.useEffect(() => {
    const navigatedDemoName = getDemoName(window.location.hash);

    if (demoName === navigatedDemoName) {
      setCodeOpen(true);
    }
  }, [demoName]);

  const handleCodeOpenClick = () => {
    document.cookie = `sourceHintSeen=true;path=/;max-age=31536000`;
    setCodeOpen(open => !open);
    setSourceHintSeen(setSourceHintSeen(true));
  };

  const match = Object(useMediaQuery["a" /* default */])(theme => theme.breakpoints.up('sm'));
  const jsx = getJsxPreview(demoData.raw || '');
  const showPreview = !demoOptions.hideHeader && demoOptions.defaultCodeOpen !== false && jsx !== demoData.raw && jsx.split(/\n/).length <= 17;
  let showCodeLabel;

  if (codeOpen) {
    showCodeLabel = showPreview ? t('hideFullSource') : t('hideSource');
  } else {
    showCodeLabel = showPreview ? t('showFullSource') : t('showSource');
  }

  return Demo_jsx("div", {
    className: classes.root
  }, Demo_jsx("div", {
    className: external_clsx_default()(classes.demo, {
      'outlined': classes.demoBgOutlined,
      'inline': classes.demoBgInline
    }[demoOptions.bg], demoOptions.hideHeader && classes.demoHiddenHeader, demoOptions.bg === true && classes.demoBgTrue),
    tabIndex: -1,
    onMouseEnter: handleDemoHover,
    onMouseLeave: handleDemoHover
  }, Demo_jsx(components_DemoSandboxed, {
    style: demoSandboxedStyle,
    component: DemoComponent,
    iframe: demoOptions.iframe,
    name: demoName
  })), Demo_jsx("div", {
    className: classes.anchorLink,
    id: `${demoName}.js`
  }), Demo_jsx("div", {
    className: classes.anchorLink,
    id: `${demoName}.tsx`
  }), demoOptions.hideHeader ? null : Demo_jsx("div", {
    className: classes.header
  }, Demo_jsx(NoSsr["a" /* default */], null, Demo_jsx(components_DemoLanguages, {
    demo: demo,
    codeOpen: codeOpen,
    codeVariant: codeVariant,
    gaEventLabel: demoOptions.demo,
    onLanguageClick: handleCodeLanguageClick
  }), Demo_jsx("div", {
    className: classes.headerButtons
  }, Demo_jsx(Tooltip["a" /* default */], {
    classes: {
      popper: classes.tooltip
    },
    key: showSourceHint,
    open: showSourceHint && match ? true : undefined,
    PopperProps: {
      disablePortal: true
    },
    title: showCodeLabel,
    placement: "top"
  }, Demo_jsx(IconButton["a" /* default */], {
    "aria-label": showCodeLabel,
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "expand",
    onClick: handleCodeOpenClick,
    color: demoHovered ? 'primary' : 'default'
  }, Demo_ref)), demoOptions.hideEditButton ? null : Demo_jsx(Tooltip["a" /* default */], {
    classes: {
      popper: classes.tooltip
    },
    title: t('codesandbox'),
    placement: "top"
  }, Demo_jsx(IconButton["a" /* default */], {
    "aria-label": t('codesandbox'),
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "codesandbox",
    onClick: handleCodeSandboxClick
  }, Demo_ref2)), Demo_jsx(Tooltip["a" /* default */], {
    classes: {
      popper: classes.tooltip
    },
    title: t('copySource'),
    placement: "top"
  }, Demo_jsx(IconButton["a" /* default */], {
    "aria-label": t('copySource'),
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "copy",
    onClick: handleCopyClick
  }, _ref3)), Demo_jsx(IconButton["a" /* default */], {
    onClick: handleMoreClick,
    "aria-owns": anchorEl ? 'demo-menu-more' : undefined,
    "aria-haspopup": "true",
    "aria-label": t('seeMore')
  }, _ref4), Demo_jsx(Menu["a" /* default */], {
    id: "demo-menu-more",
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleMoreClose,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, Demo_jsx(MenuItem["a" /* default */], {
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "github",
    component: "a",
    href: demoData.githubLocation,
    target: "_blank",
    rel: "noopener nofollow",
    onClick: handleMoreClose
  }, t('viewGitHub')), demoOptions.hideEditButton ? null : Demo_jsx(MenuItem["a" /* default */], {
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "stackblitz",
    onClick: handleStackBlitzClick
  }, t('stackblitz')), Demo_jsx(MenuItem["a" /* default */], {
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "copy-js-source-link",
    onClick: createHandleCodeSourceLink(`${demoName}.js`)
  }, t('copySourceLinkJS')), Demo_jsx(MenuItem["a" /* default */], {
    "data-ga-event-category": "demo",
    "data-ga-event-label": demoOptions.demo,
    "data-ga-event-action": "copy-ts-source-link",
    onClick: createHandleCodeSourceLink(`${demoName}.tsx`)
  }, t('copySourceLinkTS')))))), Demo_jsx(Collapse["a" /* default */], {
    in: codeOpen || showPreview,
    unmountOnExit: true
  }, Demo_jsx(MarkdownElement["a" /* default */], {
    className: classes.code,
    text: `\`\`\`${demoData.sourceLanguage}\n${codeOpen ? demoData.raw : jsx}\n\`\`\``
  })), Demo_jsx(Snackbar["a" /* default */], {
    open: snackbarOpen,
    autoHideDuration: 3000,
    onClose: handleSnackbarClose,
    message: snackbarMessage
  }));
}

/* harmony default export */ var components_Demo = (Object(withStyles["default"])(Demo_styles)(Demo));
// EXTERNAL MODULE: ./src/modules/utils/parseMarkdown.js
var parseMarkdown = __webpack_require__("kVtE");

// EXTERNAL MODULE: ./src/modules/components/PageContext.js
var PageContext = __webpack_require__("hAlb");

// CONCATENATED MODULE: ./src/modules/components/useMarkdownDocs.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMarkdownDocs; });


var useMarkdownDocs_jsx = external_react_default.a.createElement;










var useMarkdownDocs_ref = useMarkdownDocs_jsx("symbol", {
  id: "anchor-link-icon",
  viewBox: "0 0 16 16"
}, useMarkdownDocs_jsx("path", {
  d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
}));

function useMarkdownDocs(options) {
  const {
    markdownLocation: locationProp,
    markdown: markdownProp,
    req,
    reqPrefix,
    reqSource
  } = options;
  const userLanguage = Object(external_react_redux_["useSelector"])(state => state.options.userLanguage);
  let demos;
  let markdown = markdownProp;

  if (!markdown) {
    demos = {};
    const markdowns = {};
    req.keys().forEach(filename => {
      if (filename.indexOf('.md') !== -1) {
        const match = filename.match(/-([a-z]{2})\.md$/);

        if (match && constants["LANGUAGES_IN_PROGRESS"].indexOf(match[1]) !== -1) {
          markdowns[match[1]] = req(filename);
        } else {
          markdowns.en = req(filename);
        }
      } else if (filename.indexOf('.tsx') !== -1) {
        const demoName = `${reqPrefix}/${filename.replace(/\.\//g, '').replace(/\.tsx/g, '.js')}`;
        demos[demoName] = Object(objectSpread2["a" /* default */])({}, demos[demoName], {
          tsx: req(filename).default,
          rawTS: reqSource(filename)
        });
      } else {
        const demoName = `${reqPrefix}/${filename.replace(/\.\//g, '')}`;
        demos[demoName] = Object(objectSpread2["a" /* default */])({}, demos[demoName], {
          js: req(filename).default,
          raw: reqSource(filename)
        });
      }
    });
    markdown = markdowns[userLanguage] || markdowns.en;
  }

  const contents = Object(parseMarkdown["b" /* getContents */])(markdown);
  const headers = Object(parseMarkdown["d" /* getHeaders */])(markdown);
  const {
    activePage
  } = external_react_default.a.useContext(PageContext["a" /* default */]);
  let location = locationProp || activePage && activePage.pathname;
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);

  if (location && !locationProp) {
    const token = location.split('/');
    token.push(token[token.length - 1]);
    location = token.join('/');

    if (headers.filename) {
      location = headers.filename;
    } else {
      location = `/docs/src/pages${location}.md`;
    }
  }

  if (headers.components.length > 0) {
    const section = location.split('/')[4];
    contents.push(`
## API

${headers.components.map(component => `- [&lt;${component} /&gt;](${section === 'lab' ? '/lab/api' : '/api'}/${router_["Router"]._rewriteUrlForNextExport(kebabCase_default()(component))})`).join('\n')}
  `);
  } // eslint-disable-next-line no-underscore-dangle


  global.__MARKED_UNIQUE__ = {};

  const element = useMarkdownDocs_jsx(external_react_default.a.Fragment, null, useMarkdownDocs_jsx("svg", {
    style: {
      display: 'none'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, useMarkdownDocs_ref), contents.map((content, index) => {
    if (demos && parseMarkdown["a" /* demoRegexp */].test(content)) {
      let demoOptions;

      try {
        demoOptions = JSON.parse(`{${content}}`);
      } catch (err) {
        console.error('JSON.parse fails with: ', `{${content}}`);
        console.error(err);
        return null;
      }

      const name = demoOptions.demo;

      if (!demos || !demos[name]) {
        const errorMessage = [`Missing demo: ${name}. You can use one of the following:`, keys_default()(demos)].join('\n');

        if (userLanguage === 'en') {
          throw new Error(errorMessage);
        }

        if (false) {}

        const warnIcon = useMarkdownDocs_jsx("span", {
          role: "img",
          "aria-label": t('emojiWarning')
        }, "\u26A0\uFE0F");

        return useMarkdownDocs_jsx("div", {
          key: content
        }, warnIcon, " Missing demo `", name, "` ", warnIcon);
      }

      return useMarkdownDocs_jsx(components_Demo, {
        key: `${content}${index}`,
        demo: demos[name],
        demoOptions: demoOptions,
        githubLocation: `${constants["SOURCE_CODE_ROOT_URL"]}/docs/src/${name}`
      });
    }

    return useMarkdownDocs_jsx(MarkdownElement["a" /* default */], {
      className: "markdownElement",
      key: index,
      text: content
    });
  }));

  return {
    contents,
    location,
    element,
    markdown
  };
}

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

/***/ "IsKj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "IxJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getOffsetTop */
/* unused harmony export getOffsetLeft */
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("25Ld");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("IsKj");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nEUa");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Njyx");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("XpU0");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("6H0w");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("CFQC");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("VPks");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];












function getOffsetTop(rect, vertical) {
  let offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  let element = child;
  let scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const styles = {
  /* Styles applied to the root element */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
const Popover = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Popover(props, ref) {
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    anchorPosition,
    anchorReference = 'anchorEl',
    children,
    classes,
    className,
    container: containerProp,
    elevation = 8,
    getContentAnchorEl,
    marginThreshold = 16,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    open,
    PaperProps = {},
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    TransitionComponent = _Grow__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    transitionDuration: transitionDurationProp = 'auto',
    TransitionProps = {}
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  const paperRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  const getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](contentAnchorOffset => {
    if (anchorReference === 'anchorPosition') {
      if (false) {}

      return anchorPosition;
    }

    const resolvedAnchorEl = getAnchorEl(anchorEl);
    const containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(resolvedAnchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    const anchorElement = resolvedAnchorEl instanceof containerWindow.Element ? resolvedAnchorEl : Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();

    if (false) {}

    const anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  const getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](element => {
    let contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      const contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        const scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


      if (false) {}
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  const getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"]((elemRect, contentAnchorOffset = 0) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](element => {
    // Check if the parent has requested anchoring on an inner content node
    const contentAnchorOffset = getContentAnchorOffset(element);
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    const elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    const anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    const containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }

    if (false) {} // Check if the horizontal axis needs shifting


    if (left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }

    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  const setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](() => {
    const element = paperRef.current;

    if (!element) {
      return;
    }

    const positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  const handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](instance => {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"](instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](() => {
    if (open) {
      setPositioningStyles();
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](() => {
    if (!open) {
      return undefined;
    }

    const handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(() => {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      window.removeEventListener('rezise', handleResize);
    };
  }, [open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  const container = containerProp || (anchorEl ? Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(getAnchorEl(anchorEl)).body : undefined);
  return __jsx(_Modal__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className)
  }, other), __jsx(TransitionComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(handleEntering, TransitionProps.onEntering)
  }), __jsx(_Paper__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.paper, PaperProps.className)
  }), children)));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "JYGw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu'));

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("6Ndq");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "K6qZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textToHash; });
function makeUnique(hash, unique, i = 1) {
  const uniqueHash = i === 1 ? hash : `${hash}-${i}`;

  if (!unique[uniqueHash]) {
    unique[uniqueHash] = true;
    return uniqueHash;
  }

  return makeUnique(hash, unique, i + 1);
}

function textToHash(text, unique = {}) {
  return makeUnique(encodeURI(text.toLowerCase().replace(/<\/?[^>]+(>|$)/g, '') // remove HTML
  .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, '').replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g, '-').replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') // remove emojis
  .replace(/-+/g, '-').replace(/^-|-$/g, '')), unique);
}

/***/ }),

/***/ "KFoC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ../packages/material-ui/src/styles/useTheme.js
var useTheme = __webpack_require__("LMpM");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ../packages/material-ui/src/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__("0L7K");

// EXTERNAL MODULE: ../packages/material-ui/src/Link/Link.js
var Link = __webpack_require__("r6IM");

// EXTERNAL MODULE: ../packages/material-ui/src/AppBar/AppBar.js
var AppBar = __webpack_require__("an9u");

// EXTERNAL MODULE: ../packages/material-ui/src/Toolbar/Toolbar.js
var Toolbar = __webpack_require__("Gwih");

// EXTERNAL MODULE: ../packages/material-ui/src/IconButton/IconButton.js
var IconButton = __webpack_require__("l/nz");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Menu.js
var Menu = __webpack_require__("JYGw");

// EXTERNAL MODULE: ../packages/material-ui/src/Tooltip/Tooltip.js
var Tooltip = __webpack_require__("zRBL");

// EXTERNAL MODULE: ../packages/material-ui/src/Button/Button.js
var Button = __webpack_require__("O8uh");

// EXTERNAL MODULE: ../packages/material-ui/src/Box/Box.js + 7 modules
var Box = __webpack_require__("xWBm");

// EXTERNAL MODULE: ../packages/material-ui/src/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("WKBU");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Translate.js
var Translate = __webpack_require__("c0Ge");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/ExpandMore.js
var ExpandMore = __webpack_require__("7KoJ");

// EXTERNAL MODULE: ../packages/material-ui/src/Menu/Menu.js
var Menu_Menu = __webpack_require__("DmyM");

// EXTERNAL MODULE: ../packages/material-ui/src/MenuItem/MenuItem.js
var MenuItem = __webpack_require__("2zfq");

// EXTERNAL MODULE: ../packages/material-ui/src/Divider/Divider.js
var Divider = __webpack_require__("FAXT");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/InvertColors.js
var InvertColors = __webpack_require__("uI4l");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Brightness4.js
var Brightness4 = __webpack_require__("lhCM");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Brightness7.js
var Brightness7 = __webpack_require__("iYRC");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/GitHub.js
var GitHub = __webpack_require__("Oqza");

// EXTERNAL MODULE: ../packages/material-ui-docs/src/NProgressBar/index.js + 1 modules
var NProgressBar = __webpack_require__("Sl23");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/FormatTextdirectionLToR.js
var FormatTextdirectionLToR = __webpack_require__("vD8I");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/FormatTextdirectionRToL.js
var FormatTextdirectionRToL = __webpack_require__("LHZ+");

// EXTERNAL MODULE: ./src/modules/components/Link.js
var components_Link = __webpack_require__("OxvQ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ../packages/material-ui/src/List/List.js
var List = __webpack_require__("AgvC");

// EXTERNAL MODULE: ../packages/material-ui/src/Drawer/Drawer.js
var Drawer = __webpack_require__("Odoa");

// EXTERNAL MODULE: ../packages/material-ui/src/SwipeableDrawer/SwipeableDrawer.js + 1 modules
var SwipeableDrawer = __webpack_require__("6a+p");

// EXTERNAL MODULE: ../packages/material-ui/src/Hidden/Hidden.js + 2 modules
var Hidden = __webpack_require__("t9tc");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/makeStyles.js
var makeStyles = __webpack_require__("yZEQ");

// EXTERNAL MODULE: ../packages/material-ui/src/ListItem/ListItem.js
var ListItem = __webpack_require__("WSie");

// EXTERNAL MODULE: ../packages/material-ui/src/Collapse/Collapse.js
var Collapse = __webpack_require__("lyll");

// CONCATENATED MODULE: ./src/modules/components/AppDrawerNavItem.js


var __jsx = external_react_default.a.createElement;







const useStyles = Object(makeStyles["a" /* default */])(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%'
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  }
}));
function AppDrawerNavItem(props) {
  const {
    children,
    depth,
    href,
    onClick,
    openImmediately = false,
    topLevel = false,
    title,
    linkProps
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "depth", "href", "onClick", "openImmediately", "topLevel", "title", "linkProps"]);

  const classes = useStyles();
  const [open, setOpen] = external_react_default.a.useState(openImmediately);

  const handleClick = () => {
    setOpen(oldOpen => !oldOpen);
  };

  const style = {
    paddingLeft: 8 * (3 + 2 * depth)
  };

  if (href) {
    return __jsx(ListItem["a" /* default */], Object(esm_extends["a" /* default */])({
      className: classes.itemLeaf,
      disableGutters: true
    }, other), __jsx(Button["a" /* default */], Object(esm_extends["a" /* default */])({
      component: components_Link["a" /* default */],
      naked: true,
      activeClassName: `drawer-active ${classes.active}`,
      href: href,
      className: external_clsx_default()(classes.buttonLeaf, `depth-${depth}`),
      disableTouchRipple: true,
      onClick: onClick,
      style: style
    }, linkProps), title));
  }

  return __jsx(ListItem["a" /* default */], Object(esm_extends["a" /* default */])({
    className: classes.item,
    disableGutters: true
  }, other), __jsx(Button["a" /* default */], {
    classes: {
      root: classes.button,
      label: topLevel ? 'algolia-lvl0' : ''
    },
    onClick: handleClick,
    style: style
  }, title), __jsx(Collapse["a" /* default */], {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, children));
}
// EXTERNAL MODULE: ./src/modules/components/DiamondSponsors.js
var DiamondSponsors = __webpack_require__("aqbJ");

// EXTERNAL MODULE: ./src/modules/utils/helpers.js
var helpers = __webpack_require__("18I3");

// EXTERNAL MODULE: ./src/modules/components/PageContext.js
var PageContext = __webpack_require__("hAlb");

// CONCATENATED MODULE: ./src/modules/components/AppDrawer.js


var AppDrawer_jsx = external_react_default.a.createElement;















let savedScrollTop = null;

function PersistScroll(props) {
  const {
    children
  } = props;
  const rootRef = external_react_default.a.useRef();
  external_react_default.a.useEffect(() => {
    const parent = rootRef.current ? rootRef.current.parentElement : null;
    const activeElement = document.querySelector('.drawer-active');

    if (!parent || !activeElement || !activeElement.scrollIntoView) {
      return undefined;
    }

    const activeBox = activeElement.getBoundingClientRect();

    if (savedScrollTop === null || activeBox.top - savedScrollTop < 0) {
      // Center the selected item in the list container.
      activeElement.scrollIntoView(); // Fix a Chrome issue, reset the tabbable ring back to the top of the document.

      document.body.scrollIntoView();
    } else {
      parent.scrollTop = savedScrollTop;
    }

    return () => {
      savedScrollTop = parent.scrollTop;
    };
  }, []);
  return AppDrawer_jsx("div", {
    ref: rootRef
  }, children);
}

const styles = theme => ({
  paper: {
    width: 240,
    backgroundColor: theme.palette.background.level1
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex'
  },
  toolbar: Object(objectSpread2["a" /* default */])({}, theme.mixins.toolbar, {
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  })
});

function renderNavItems(options) {
  const {
    pages
  } = options,
        params = Object(objectWithoutProperties["a" /* default */])(options, ["pages"]);

  return AppDrawer_jsx(List["a" /* default */], null, pages.reduce( // eslint-disable-next-line no-use-before-define
  (items, page) => reduceChildRoutes(Object(objectSpread2["a" /* default */])({
    items,
    page
  }, params)), []));
}

function reduceChildRoutes({
  props,
  activePage,
  items,
  page,
  depth,
  t
}) {
  if (page.displayNav === false) {
    return items;
  }

  if (page.children && page.children.length > 1) {
    const title = Object(helpers["pageToTitleI18n"])(page, t);
    const topLevel = activePage ? activePage.pathname.indexOf(`${page.pathname}/`) === 0 : false;
    items.push(AppDrawer_jsx(AppDrawerNavItem, {
      linkProps: page.linkProps,
      depth: depth,
      key: title,
      topLevel: topLevel && !page.subheader,
      openImmediately: topLevel || Boolean(page.subheader),
      title: title
    }, renderNavItems({
      props,
      pages: page.children,
      activePage,
      depth: depth + 1,
      t
    })));
  } else {
    const title = Object(helpers["pageToTitleI18n"])(page, t);
    page = page.children && page.children.length === 1 ? page.children[0] : page;
    items.push(AppDrawer_jsx(AppDrawerNavItem, {
      linkProps: page.linkProps,
      depth: depth,
      key: title,
      title: title,
      href: page.pathname,
      onClick: props.onClose
    }));
  }

  return items;
} // iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />


const iOS =  false && false;

var _ref = AppDrawer_jsx(Divider["a" /* default */], null);

var _ref2 = AppDrawer_jsx(Box["a" /* default */], {
  mx: 3,
  my: 2
}, AppDrawer_jsx(DiamondSponsors["a" /* default */], null));

function AppDrawer(props) {
  const {
    classes,
    className,
    disablePermanent,
    mobileOpen,
    onClose,
    onOpen
  } = props;
  const {
    activePage,
    pages
  } = external_react_default.a.useContext(PageContext["a" /* default */]);
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);

  const drawer = AppDrawer_jsx(PersistScroll, null, AppDrawer_jsx("div", {
    className: classes.toolbarIe11
  }, AppDrawer_jsx("div", {
    className: classes.toolbar
  }, AppDrawer_jsx(components_Link["a" /* default */], {
    className: classes.title,
    href: "/",
    onClick: onClose,
    variant: "h6",
    color: "inherit"
  }, "Material-UI"),  true ? AppDrawer_jsx(components_Link["a" /* default */], {
    color: "textSecondary",
    variant: "caption",
    href: "https://material-ui.com/versions/",
    onClick: onClose
  }, `v${"4.9.5"}`) : undefined)), _ref, _ref2, renderNavItems({
    props,
    pages,
    activePage,
    depth: 0,
    t
  }));

  return AppDrawer_jsx("nav", {
    className: className,
    "aria-label": t('mainNavigation')
  }, AppDrawer_jsx(Hidden["a" /* default */], {
    lgUp: !disablePermanent,
    implementation: "js"
  }, AppDrawer_jsx(SwipeableDrawer["a" /* default */], {
    classes: {
      paper: external_clsx_default()(classes.paper, 'algolia-drawer')
    },
    disableBackdropTransition: !iOS,
    variant: "temporary",
    open: mobileOpen,
    onOpen: onOpen,
    onClose: onClose,
    ModalProps: {
      keepMounted: true
    }
  }, drawer)), disablePermanent ? null : AppDrawer_jsx(Hidden["a" /* default */], {
    mdDown: true,
    implementation: "css"
  }, AppDrawer_jsx(Drawer["a" /* default */], {
    classes: {
      paper: classes.paper
    },
    variant: "permanent",
    open: true
  }, drawer)));
}

/* harmony default export */ var components_AppDrawer = (Object(withStyles["default"])(styles)(AppDrawer));
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("FdmI");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "cross-fetch"
var external_cross_fetch_ = __webpack_require__("CCqr");
var external_cross_fetch_default = /*#__PURE__*/__webpack_require__.n(external_cross_fetch_);

// EXTERNAL MODULE: ../packages/material-ui-icons/src/Notifications.js
var Notifications = __webpack_require__("g1+M");

// EXTERNAL MODULE: ../packages/material-ui/src/Badge/Badge.js
var Badge = __webpack_require__("Ttr8");

// EXTERNAL MODULE: ../packages/material-ui/src/Popper/Popper.js
var Popper = __webpack_require__("oRPM");

// EXTERNAL MODULE: ../packages/material-ui/src/Grow/Grow.js
var Grow = __webpack_require__("CFQC");

// EXTERNAL MODULE: ../packages/material-ui/src/Paper/Paper.js
var Paper = __webpack_require__("VPks");

// EXTERNAL MODULE: ../packages/material-ui/src/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__("L5GG");

// EXTERNAL MODULE: ../packages/material-ui/src/ListItemText/ListItemText.js
var ListItemText = __webpack_require__("3uJ1");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("ZOIa");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ../modules/waterfall/sleep.js


function sleep(delay = 0) {
  return new promise_default.a(resolve => {
    setTimeout(resolve, delay);
  });
}

/* harmony default export */ var waterfall_sleep = (sleep);
// EXTERNAL MODULE: ./notifications.json
var notifications = __webpack_require__("p4Aa");

// CONCATENATED MODULE: ./src/modules/components/Notifications.js


var Notifications_jsx = external_react_default.a.createElement;
/* eslint-disable react/no-danger, react-hooks/exhaustive-deps */




















const Notifications_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  paper: {
    transformOrigin: 'top right'
  },
  list: {
    maxWidth: theme.spacing(40),
    maxHeight: theme.spacing(40),
    overflow: 'auto'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function getLastSeenNotification() {
  const seen = Object(helpers["getCookie"])('lastSeenNotification');
  return seen === '' ? 0 : parse_int_default()(seen, 10);
}

let messages = null;

if (false) {}

async function getMessages() {
  try {
    if (!messages) {
      await waterfall_sleep(1500); // Soften the pressure on the main thread.

      const result = await external_cross_fetch_default()('https://raw.githubusercontent.com/Foso/material-ui/master/docs/notifications.json');
      messages = await result.json();
    }
  } catch (err) {// Swallow the exceptions.
  }

  messages = messages || [];
}

var Notifications_ref = Notifications_jsx(Notifications["a" /* default */], null);

var Notifications_ref2 = Notifications_jsx(Divider["a" /* default */], {
  variant: "middle"
});

function Notifications_Notifications() {
  const classes = Notifications_useStyles();
  const [messageList, setMessageList] = external_react_default.a.useState([]);
  const [unseenNotificationsCount, setUnseenNotificationsCount] = external_react_default.a.useState(0);
  const [open, setOpen] = external_react_default.a.useState(false);
  const [tooltipOpen, setTooltipOpen] = external_react_default.a.useState(false);
  const anchorRef = external_react_default.a.useRef(null);
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  const userLanguage = Object(external_react_redux_["useSelector"])(state => state.options.userLanguage);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
    setTooltipOpen(false);
    setUnseenNotificationsCount(0);
    document.cookie = `lastSeenNotification=${messageList[0].id};path=/;max-age=31536000`;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(!open);
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleMessage = () => {
    const lastSeen = getLastSeenNotification();
    const userMessages = messages.filter(message => {
      if (message.userLanguage && message.userLanguage !== userLanguage && message.userLanguage !== navigator.language.substring(0, 2)) {
        return false;
      }

      return true;
    });
    const unseenCount = userMessages.reduce((count, message) => message.id > lastSeen ? count + 1 : count, 0);

    if (unseenCount > 0) {
      setUnseenNotificationsCount(unseenCount);
    }

    setMessageList(userMessages.reverse());
  };

  external_react_default.a.useEffect(() => {
    let active = true; // Prevent search engines from indexing the notification.

    if (/glebot/.test(navigator.userAgent)) {
      return undefined;
    }

    (async () => {
      await getMessages();

      if (active) {
        handleMessage();
      }
    })();

    return () => {
      active = false;
    };
  }, []);
  return Notifications_jsx(external_react_default.a.Fragment, null, Notifications_jsx(Tooltip["a" /* default */], {
    open: tooltipOpen,
    onOpen: handleTooltipOpen,
    onClose: handleTooltipClose,
    title: t('toggleNotifications'),
    enterDelay: 300
  }, Notifications_jsx(IconButton["a" /* default */], {
    color: "inherit",
    ref: anchorRef,
    "aria-controls": open ? 'notifications-popup' : undefined,
    "aria-haspopup": "true",
    "aria-label": t('toggleNotifications'),
    onClick: handleToggle,
    "data-ga-event-category": "AppBar",
    "data-ga-event-action": "toggleNotifications"
  }, Notifications_jsx(Badge["a" /* default */], {
    color: "secondary",
    badgeContent: unseenNotificationsCount
  }, Notifications_ref))), Notifications_jsx(Popper["a" /* default */], {
    id: "notifications-popup",
    anchorEl: anchorRef.current,
    open: open,
    placement: "bottom-end",
    transition: true,
    disablePortal: true,
    role: undefined
  }, ({
    TransitionProps
  }) => Notifications_jsx(ClickAwayListener["a" /* default */], {
    onClickAway: handleClose
  }, Notifications_jsx(Grow["a" /* default */], Object(esm_extends["a" /* default */])({
    in: open
  }, TransitionProps), Notifications_jsx(Paper["a" /* default */], {
    className: classes.paper
  }, Notifications_jsx(List["a" /* default */], {
    className: classes.list
  }, messageList.map((message, index) => Notifications_jsx(external_react_default.a.Fragment, {
    key: message.id
  }, Notifications_jsx(ListItem["a" /* default */], {
    alignItems: "flex-start",
    className: classes.listItem
  }, message.date && Notifications_jsx(ListItemText["a" /* default */], {
    secondary: new Date(message.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }), Notifications_jsx(ListItemText["a" /* default */], {
    primary: message.title,
    secondary: Notifications_jsx("span", {
      id: "notification-message",
      dangerouslySetInnerHTML: {
        __html: message.text
      }
    }),
    secondaryTypographyProps: {
      color: 'textPrimary'
    }
  })), index < messageList.length - 1 ? Notifications_ref2 : null))))))));
}
// EXTERNAL MODULE: ./src/modules/components/MarkdownLinks.js
var MarkdownLinks = __webpack_require__("RJzw");

// EXTERNAL MODULE: ./src/modules/constants.js
var constants = __webpack_require__("NLnA");

// EXTERNAL MODULE: ./src/modules/components/ThemeContext.js
var ThemeContext = __webpack_require__("ro6p");

// CONCATENATED MODULE: ./src/modules/components/AppFrame.js
var AppFrame_jsx = external_react_default.a.createElement;



































const LOCALES = {
  zh: 'zh-CN',
  pt: 'pt-BR',
  es: 'es-ES'
};
const CROWDIN_ROOT_URL = 'https://translate.material-ui.com/project/material-ui-docs/';

router_default.a.onRouteChangeStart = () => {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = () => {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = () => {
  external_nprogress_default.a.done();
};

const AppSearch = external_react_default.a.lazy(() => __webpack_require__.e(/* import() */ 288).then(__webpack_require__.bind(null, "PiP7")));

var AppFrame_ref = AppFrame_jsx("link", {
  rel: "preload",
  href: "https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css",
  as: "style"
});

var AppFrame_ref2 = AppFrame_jsx(AppSearch, null);

function DeferredAppSearch() {
  const fallback = null;
  const [mounted, setMounted] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    setMounted(true);
  }, []);
  return AppFrame_jsx(external_react_default.a.Fragment, null, AppFrame_ref, mounted && AppFrame_jsx(external_react_default.a.Suspense, {
    fallback: fallback
  }, AppFrame_ref2));
}

const AppFrame_styles = theme => ({
  '@global': {
    '#main-content': {
      outline: 0
    }
  },
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.level1
  },
  grow: {
    flex: '1 1 auto'
  },
  skipNav: {
    position: 'fixed',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create('top', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen
    }),
    left: theme.spacing(2),
    top: theme.spacing(-10),
    zIndex: theme.zIndex.tooltip + 1,
    '&:focus': {
      top: theme.spacing(2),
      transition: theme.transitions.create('top', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    '@media print': {
      display: 'none'
    }
  },
  appBar: {
    color: theme.palette.type === 'dark' ? '#fff' : null,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.background.level2 : null,
    transition: theme.transitions.create('width')
  },
  language: {
    margin: theme.spacing(0, 0.5, 0, 1),
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  appBarHome: {
    boxShadow: 'none'
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)'
    }
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: 240
    }
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  }
});

var _ref3 = AppFrame_jsx(NProgressBar["a" /* default */], null);

var _ref4 = AppFrame_jsx(CssBaseline["a" /* default */], null);

var _ref5 = AppFrame_jsx(MarkdownLinks["a" /* default */], null);

var _ref6 = AppFrame_jsx(Menu["a" /* default */], null);

var _ref7 = AppFrame_jsx(DeferredAppSearch, null);

var _ref8 = AppFrame_jsx(Translate["a" /* default */], null);

var _ref9 = AppFrame_jsx(ExpandMore["a" /* default */], {
  fontSize: "small"
});

var _ref10 = AppFrame_jsx(Box["a" /* default */], {
  my: 1
}, AppFrame_jsx(Divider["a" /* default */], null));

var _ref11 = AppFrame_jsx(InvertColors["a" /* default */], null);

var _ref12 = AppFrame_jsx(Brightness4["a" /* default */], null);

var _ref13 = AppFrame_jsx(Brightness7["a" /* default */], null);

var _ref14 = AppFrame_jsx(FormatTextdirectionLToR["a" /* default */], null);

var _ref15 = AppFrame_jsx(FormatTextdirectionRToL["a" /* default */], null);

var _ref16 = AppFrame_jsx(Notifications_Notifications, null);

var _ref17 = AppFrame_jsx(GitHub["a" /* default */], null);

function AppFrame(props) {
  const {
    children,
    classes
  } = props;
  const theme = Object(useTheme["a" /* default */])();
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  const userLanguage = Object(external_react_redux_["useSelector"])(state => state.options.userLanguage);
  const crowdInLocale = LOCALES[userLanguage] || userLanguage;
  const [languageMenu, setLanguageMenu] = external_react_default.a.useState(null);

  const handleLanguageIconClick = event => {
    setLanguageMenu(event.currentTarget);
  };

  const handleLanguageMenuClose = event => {
    if (event.currentTarget.nodeName === 'A') {
      document.cookie = `userLanguage=noDefault;path=/;max-age=31536000`;
    }

    setLanguageMenu(null);
  };

  const [mobileOpen, setMobileOpen] = external_react_default.a.useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const changeTheme = Object(ThemeContext["d" /* useChangeTheme */])();

  const handleTogglePaletteType = () => {
    const paletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    changeTheme({
      paletteType
    });
  };

  const handleToggleDirection = () => {
    changeTheme({
      direction: theme.direction === 'ltr' ? 'rtl' : 'ltr'
    });
  };

  const router = Object(router_["useRouter"])();
  const {
    canonical
  } = Object(helpers["pathnameToLanguage"])(router_["Router"]._rewriteUrlForNextExport(router.asPath));
  const {
    activePage
  } = external_react_default.a.useContext(PageContext["a" /* default */]);
  let disablePermanent = false;
  let navIconClassName = '';
  let appBarClassName = classes.appBar;

  if (!activePage || activePage.disableDrawer === true) {
    disablePermanent = true;
    appBarClassName += ` ${classes.appBarHome}`;
  } else {
    navIconClassName = classes.navIconHide;
    appBarClassName += ` ${classes.appBarShift}`;
  }

  return AppFrame_jsx("div", {
    className: classes.root
  }, _ref3, _ref4, AppFrame_jsx(Link["a" /* default */], {
    color: "secondary",
    className: classes.skipNav,
    href: "#main-content"
  }, t('skipToContent')), _ref5, AppFrame_jsx(AppBar["a" /* default */], {
    className: appBarClassName
  }, AppFrame_jsx(Toolbar["a" /* default */], null, AppFrame_jsx(IconButton["a" /* default */], {
    edge: "start",
    color: "inherit",
    "aria-label": t('openDrawer'),
    onClick: handleDrawerOpen,
    className: navIconClassName
  }, _ref6), AppFrame_jsx("div", {
    className: classes.grow
  }), _ref7, AppFrame_jsx(Tooltip["a" /* default */], {
    title: t('changeLanguage'),
    enterDelay: 300
  }, AppFrame_jsx(Button["a" /* default */], {
    color: "inherit",
    "aria-owns": languageMenu ? 'language-menu' : undefined,
    "aria-haspopup": "true",
    "aria-label": t('changeLanguage'),
    onClick: handleLanguageIconClick,
    "data-ga-event-category": "AppBar",
    "data-ga-event-action": "language"
  }, _ref8, AppFrame_jsx("span", {
    className: classes.language
  }, userLanguage === 'aa' ? 'Translating' : constants["LANGUAGES_LABEL"].filter(language => language.code === userLanguage)[0].text), _ref9)), AppFrame_jsx(NoSsr["a" /* default */], null, AppFrame_jsx(Menu_Menu["a" /* default */], {
    id: "language-menu",
    anchorEl: languageMenu,
    open: Boolean(languageMenu),
    onClose: handleLanguageMenuClose
  }, constants["LANGUAGES_LABEL"].map(language => AppFrame_jsx(MenuItem["a" /* default */], {
    component: "a",
    "data-no-link": "true",
    href: language.code === 'en' ? canonical : `/${language.code}${canonical}`,
    key: language.code,
    selected: userLanguage === language.code,
    onClick: handleLanguageMenuClose,
    lang: language.code,
    hrefLang: language.code
  }, language.text)), _ref10, AppFrame_jsx(MenuItem["a" /* default */], {
    component: "a",
    "data-no-link": "true",
    href: userLanguage === 'en' || userLanguage === 'aa' ? `${CROWDIN_ROOT_URL}` : `${CROWDIN_ROOT_URL}${crowdInLocale}#/staging`,
    rel: "noopener nofollow",
    target: "_blank",
    key: userLanguage,
    lang: userLanguage,
    hrefLang: "en",
    onClick: handleLanguageMenuClose
  }, `${t('helpToTranslate')}`))), AppFrame_jsx(Tooltip["a" /* default */], {
    title: t('editWebsiteColors'),
    enterDelay: 300
  }, AppFrame_jsx(IconButton["a" /* default */], {
    color: "inherit",
    "aria-label": t('editWebsiteColors'),
    component: components_Link["a" /* default */],
    naked: true,
    href: "/customization/color/#color-tool",
    "data-ga-event-category": "AppBar",
    "data-ga-event-action": "colors"
  }, _ref11)), AppFrame_jsx(Tooltip["a" /* default */], {
    title: t('toggleTheme'),
    enterDelay: 300
  }, AppFrame_jsx(IconButton["a" /* default */], {
    color: "inherit",
    onClick: handleTogglePaletteType,
    "aria-label": t('toggleTheme'),
    "data-ga-event-category": "AppBar",
    "data-ga-event-action": "dark"
  }, theme.palette.type === 'light' ? _ref12 : _ref13)), AppFrame_jsx(Tooltip["a" /* default */], {
    title: t('toggleRTL'),
    key: theme.direction,
    enterDelay: 300
  }, AppFrame_jsx(IconButton["a" /* default */], {
    color: "inherit",
    onClick: handleToggleDirection,
    "aria-label": t('toggleRTL'),
    "data-ga-event-category": "AppBar",
    "data-ga-event-action": "rtl"
  }, theme.direction === 'rtl' ? _ref14 : _ref15)), _ref16, AppFrame_jsx(Tooltip["a" /* default */], {
    title: t('github'),
    enterDelay: 300
  }, AppFrame_jsx(IconButton["a" /* default */], {
    edge: "end",
    component: "a",
    color: "inherit",
    href: "https://github.com/Foso/material-ui",
    "aria-label": t('github'),
    "data-ga-event-category": "AppBar",
    "data-ga-event-action": "github"
  }, _ref17)))), AppFrame_jsx(components_AppDrawer, {
    className: disablePermanent ? '' : classes.drawer,
    disablePermanent: disablePermanent,
    onClose: handleDrawerClose,
    onOpen: handleDrawerOpen,
    mobileOpen: mobileOpen
  }), children);
}

/* harmony default export */ var components_AppFrame = __webpack_exports__["a"] = (Object(withStyles["default"])(AppFrame_styles)(AppFrame));

/***/ }),

/***/ "KbJi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export color */
/* unused harmony export bgcolor */
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+bTD");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("p9jg");


const color = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = Object(_style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const palette = Object(_compose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(color, bgcolor);
/* harmony default export */ __webpack_exports__["a"] = (palette);

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

/***/ "L5GG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IsKj");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+rSm");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kCiw");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wFh9");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];








function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */


const ClickAwayListener = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function ClickAwayListener(props, ref) {
  const {
    children,
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',
    onClickAway
  } = props;
  const movedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const mountedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const handleNodeRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(nodeRef, ref); // can be removed once we drop support for non ref forwarding class components

  const handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](instance => {
    // #StrictMode ready
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(handleNodeRef, react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance));
  }, [handleNodeRef]);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(children.ref, handleOwnRef);
  const handleClickAway = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(event => {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    // IE 11 support, which trigger the handleClickAway even after the unbind
    if (!mountedRef.current) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    } // The child might render null.


    if (!nodeRef.current) {
      return;
    } // Multi window support


    const doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeRef.current);

    if (doc.documentElement && doc.documentElement.contains(event.target) && !nodeRef.current.contains(event.target)) {
      onClickAway(event);
    }
  });
  const handleTouchMove = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
    movedRef.current = true;
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeRef.current);
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, handleTouchMove, touchEvent]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, {
    ref: handleRef
  }));
});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (ClickAwayListener);

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

/***/ "LHZ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z"
}), 'FormatTextdirectionRToL'));

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

/***/ "LpUc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tqcJ");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LMpM");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xOSD");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+rSm");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];






const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__[/* duration */ "b"].enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__[/* duration */ "b"].leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Fade = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Fade(props, ref) {
  const {
    children,
    in: inProp,
    onEnter,
    onExit,
    style,
    timeout = defaultTimeout
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])();
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(children.ref, ref);

  const handleEnter = (node, isAppearing) => {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__[/* reflow */ "b"])(node); // So the animation always start from the start.

    const transitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__[/* getTransitionProps */ "a"])({
      style,
      timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleExit = node => {
    const transitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__[/* getTransitionProps */ "a"])({
      style,
      timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  };

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["Transition"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    appear: true,
    in: inProp,
    onEnter: handleEnter,
    onExit: handleExit,
    timeout: timeout
  }, other), (state, childProps) => {
    return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], {}, style, {}, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Fade);

/***/ }),

/***/ "N4Zu":
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "NLnA":
/***/ (function(module, exports) {

const CODE_VARIANTS = {
  JS: 'JS',
  TS: 'TS'
};
const ACTION_TYPES = {
  OPTIONS_CHANGE: 'OPTIONS_CHANGE'
}; // Valid languages to server-side render in production

const LANGUAGES = ['en', 'zh', 'ru', 'pt', 'es', 'fr', 'de', 'ja', 'aa']; // Server side rendered languages

const LANGUAGES_SSR = ['en', 'zh', 'ru', 'pt', 'es']; // Work in progress

const LANGUAGES_IN_PROGRESS = [...LANGUAGES]; // Valid languages to use in production

const LANGUAGES_LABEL = [{
  code: 'en',
  text: 'English'
}, {
  code: 'zh',
  text: '中文'
}, {
  code: 'ru',
  text: 'Русский'
}, {
  code: 'pt',
  text: 'Português'
}, {
  code: 'es',
  text: 'Español'
}, {
  code: 'fr',
  text: 'Français'
}, {
  code: 'de',
  text: 'Deutsch'
}, {
  code: 'ja',
  text: '日本語'
}];
const SOURCE_CODE_ROOT_URL = 'https://github.com/Foso/material-ui/blob/master';
module.exports = {
  CODE_VARIANTS,
  ACTION_TYPES,
  LANGUAGES,
  LANGUAGES_SSR,
  LANGUAGES_LABEL,
  LANGUAGES_IN_PROGRESS,
  SOURCE_CODE_ROOT_URL
};

/***/ }),

/***/ "Njyx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createChainedFunction; });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }

    if (false) {}

    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ }),

/***/ "NluH":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("t+lh");

var _Symbol = __webpack_require__("XzKa");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "Odoa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAnchor; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6H0w");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/6bg");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XpU0");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("C4Ea");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VPks");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("rKPb");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tqcJ");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("LMpM");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];










const styles = theme => ({
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `variant="permanent or persistent"`. */
  docked: {
    flex: '0 0 auto'
  },

  /* Styles applied to the `Paper` component. */
  paper: {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '1 0 auto',
    zIndex: theme.zIndex.drawer,
    WebkitOverflowScrolling: 'touch',
    // Add iOS momentum scrolling.
    // temporary style
    position: 'fixed',
    top: 0,
    // We disable the focus ring for mouse, touch and keyboard users.
    // At some point, it would be better to keep it for keyboard users.
    // :focus-ring CSS pseudo-class will help.
    outline: 0
  },

  /* Styles applied to the `Paper` component if `anchor="left"`. */
  paperAnchorLeft: {
    left: 0,
    right: 'auto'
  },

  /* Styles applied to the `Paper` component if `anchor="right"`. */
  paperAnchorRight: {
    left: 'auto',
    right: 0
  },

  /* Styles applied to the `Paper` component if `anchor="top"`. */
  paperAnchorTop: {
    top: 0,
    left: 0,
    bottom: 'auto',
    right: 0,
    height: 'auto',
    maxHeight: '100%'
  },

  /* Styles applied to the `Paper` component if `anchor="bottom"`. */
  paperAnchorBottom: {
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100%'
  },

  /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
  paperAnchorDockedLeft: {
    borderRight: `1px solid ${theme.palette.divider}`
  },

  /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
  paperAnchorDockedTop: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },

  /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
  paperAnchorDockedRight: {
    borderLeft: `1px solid ${theme.palette.divider}`
  },

  /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
  paperAnchorDockedBottom: {
    borderTop: `1px solid ${theme.palette.divider}`
  },

  /* Styles applied to the `Modal` component. */
  modal: {}
});
const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
const defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_11__[/* duration */ "b"].enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_11__[/* duration */ "b"].leavingScreen
};
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

const Drawer = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Drawer(props, ref) {
  const {
    anchor: anchorProp = 'left',
    BackdropProps,
    children,
    classes,
    className,
    elevation = 16,
    ModalProps: {
      BackdropProps: BackdropPropsProp
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    transitionDuration = defaultTransitionDuration,
    variant = 'temporary'
  } = props,
        ModalProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props.ModalProps, ["BackdropProps"]),
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "transitionDuration", "variant"]);

  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  const mounted = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    mounted.current = true;
  }, []);
  const anchor = getAnchor(theme, anchorProp);

  const drawer = __jsx(_Paper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true
  }, PaperProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.paper, classes[`paperAnchor${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(anchor)}`], PaperProps.className, variant !== 'temporary' && classes[`paperAnchorDocked${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(anchor)}`])
  }), children);

  if (variant === 'permanent') {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes.docked, className),
      ref: ref
    }, other), drawer);
  }

  const slidingDrawer = __jsx(_Slide__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);

  if (variant === 'persistent') {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes.docked, className),
      ref: ref
    }, other), slidingDrawer);
  } // variant === temporary


  return __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    BackdropProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, BackdropProps, {}, BackdropPropsProp, {
      transitionDuration
    }),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes.modal, className),
    open: open,
    onClose: onClose,
    ref: ref
  }, other, ModalProps), slidingDrawer);
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiDrawer',
  flip: false
})(Drawer));

/***/ }),

/***/ "Ol6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "hoist-non-react-statics"
var external_hoist_non_react_statics_ = __webpack_require__("0TPh");
var external_hoist_non_react_statics_default = /*#__PURE__*/__webpack_require__.n(external_hoist_non_react_statics_);

// EXTERNAL MODULE: ../packages/material-ui-styles/src/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__("3O2h");

// CONCATENATED MODULE: ../packages/material-ui-styles/src/styled/styled.js




var __jsx = external_react_default.a.createElement;






function omit(input, fields) {
  const output = {};

  keys_default()(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });

  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  const componentCreator = (style, options = {}) => {
    const {
      name
    } = options,
          stylesOptions = Object(objectWithoutProperties["a" /* default */])(options, ["name"]);

    if (false) {}

    let classNamePrefix = name;

    if (false) {}

    const stylesOrCreator = typeof style === 'function' ? theme => ({
      root: props => style(Object(objectSpread2["a" /* default */])({
        theme
      }, props))
    }) : {
      root: style
    };
    const useStyles = Object(makeStyles["a" /* default */])(stylesOrCreator, Object(objectSpread2["a" /* default */])({
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    let filterProps;
    let propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    const StyledComponent = external_react_default.a.forwardRef(function StyledComponent(props, ref) {
      const {
        children,
        className: classNameProp,
        clone,
        component: ComponentProp
      } = props,
            other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "className", "clone", "component"]);

      const classes = useStyles(props);
      const className = external_clsx_default()(classes.root, classNameProp);
      let spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return external_react_default.a.cloneElement(children, Object(objectSpread2["a" /* default */])({
          className: external_clsx_default()(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(objectSpread2["a" /* default */])({
          className
        }, spread));
      }

      const FinalComponent = ComponentProp || Component;
      return __jsx(FinalComponent, Object(esm_extends["a" /* default */])({
        ref: ref,
        className: className
      }, spread), children);
    });

    if (false) {}

    external_hoist_non_react_statics_default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}
// EXTERNAL MODULE: ../packages/material-ui/src/styles/defaultTheme.js
var defaultTheme = __webpack_require__("qHc8");

// CONCATENATED MODULE: ../packages/material-ui/src/styles/styled.js




const styled_styled = Component => {
  const componentCreator = styled(Component);
  return (style, options) => componentCreator(style, Object(objectSpread2["a" /* default */])({
    defaultTheme: defaultTheme["a" /* default */]
  }, options));
};

/* harmony default export */ var styles_styled = __webpack_exports__["a"] = (styled_styled);

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

/***/ "OxvQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _packages_material_ui_src_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("r6IM");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
/* eslint-disable jsx-a11y/anchor-has-content */







const NextComposed = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function NextComposed(props, ref) {
  const {
    as,
    href
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["as", "href"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: href,
    as: as
  }, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, other)));
}); // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    href: routerHref,
    innerRef,
    naked,
    role: roleProp
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["activeClassName", "className", "href", "innerRef", "naked", "role"]); // apply nextjs rewrites


  const href = routerHref.replace(/\/api-docs\/(.*)/, '/api/$1');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.options.userLanguage);
  const className = clsx__WEBPACK_IMPORTED_MODULE_3___default()(classNameProps, router.pathname === routerHref && activeClassName);

  if (userLanguage !== 'en' && href.indexOf('/') === 0 && href.indexOf('/blog') !== 0) {
    other.as = `/${userLanguage}${href}`;
  } // catch role passed from ButtonBase. This is definitely a link


  const role = roleProp === 'button' ? undefined : roleProp;
  const isExternal = href.indexOf('https:') === 0 || href.indexOf('mailto:') === 0;

  if (isExternal) {
    return __jsx(_packages_material_ui_src_Link__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: className,
      href: href,
      ref: innerRef,
      role: role
    }, other));
  }

  if (naked) {
    return __jsx(NextComposed, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: className,
      href: href,
      ref: innerRef,
      role: role
    }, other));
  }

  return __jsx(_packages_material_ui_src_Link__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    component: NextComposed,
    className: className,
    href: href,
    ref: innerRef,
    role: role
  }, other));
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef((props, ref) => __jsx(Link, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
  innerRef: ref
}))));

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

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "Q0ga":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Txzd");





function omit(input, fields) {
  const output = {};

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });

  return output;
}

function css(styleFunction) {
  const newStyleFunction = props => {
    const output = styleFunction(props);

    if (props.css) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(_merge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(output, styleFunction(Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        theme: props.theme
      }, props.css))), {}, omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['css', ...styleFunction.filterProps];
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["a"] = (css);

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RJzw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("18I3");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__);



async function handleEvent(event, as) {
  // Ignore click for new tab/new window behavior
  if (event.defaultPrevented || event.button !== 0 || // ignore everything but left-click
  event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
    return;
  }

  event.preventDefault();
  let pathname = as.replace(/#(.*)$/, ''); // Add support for leading / in development mode.

  if (pathname !== '/') {
    // The leading / is only added to support static hosting (resolve /index.html).
    // We remove it to normalize the pathname.
    // See `_rewriteUrlForNextExport` on Next.js side.
    pathname = pathname.replace(/\/$/, '');
  }

  pathname = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["pathnameToLanguage"])(pathname).canonical;
  const success = await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(pathname, as);

  if (!success) {
    return;
  }

  window.scrollTo(0, 0);
  document.body.focus();
}

function handleClick(event) {
  const activeElement = document.activeElement; // Ignore non link clicks

  if (activeElement.nodeName !== 'A' || activeElement.getAttribute('target') === '_blank' || activeElement.getAttribute('data-no-link') === 'true' || activeElement.getAttribute('href').indexOf('/') !== 0) {
    return;
  }

  handleEvent(event, document.activeElement.getAttribute('href'));
}

let bound = false;
function MarkdownLinks() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (bound) {
      return;
    }

    bound = true;
    document.addEventListener('click', handleClick);
  }, []);
  return null;
}

/***/ }),

/***/ "Sl23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: ../packages/material-ui/src/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("WKBU");

// CONCATENATED MODULE: ../packages/material-ui-docs/src/NProgressBar/NProgressBar.js
var __jsx = external_react_default.a.createElement;





external_nprogress_default.a.configure({
  template: `
    <div class="nprogress-bar" role="bar">
      <dt></dt>
      <dd></dd>
    </div>
  `
});

const styles = theme => {
  if (!theme.nprogress.color) {
    throw new Error('Material-UI: you need to provide a `theme.nprogress.color` property' + ' for using the `NProgressBar` component.');
  }

  return {
    '@global': {
      '#nprogress': {
        direction: 'ltr',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: theme.zIndex.tooltip,
        backgroundColor: '#e0e0e0',
        '& .nprogress-bar': {
          position: 'fixed',
          backgroundColor: theme.nprogress.color,
          top: 0,
          left: 0,
          right: 0,
          height: 2
        },
        '& dd, & dt': {
          position: 'absolute',
          top: 0,
          height: 2,
          boxShadow: `${theme.nprogress.color} 1px 0 6px 1px`,
          borderRadius: '100%',
          animation: 'mui-nprogress-pulse 2s ease-out 0s infinite'
        },
        '& dd': {
          opacity: 0.6,
          width: 20,
          right: 0,
          clip: 'rect(-6px,22px,14px,10px)'
        },
        '& dt': {
          opacity: 0.6,
          width: 180,
          right: -80,
          clip: 'rect(-6px,90px,14px,-6px)'
        }
      },
      '@keyframes mui-nprogress-pulse': {
        '30%': {
          opacity: 0.6
        },
        '60%': {
          opacity: 0
        },
        to: {
          opacity: 0.6
        }
      }
    }
  };
};

const GlobalStyles = Object(withStyles["default"])(styles, {
  flip: false,
  name: 'MuiNProgressBar'
})(() => null);
/**
 * Elegant and ready to use wrapper on top of https://github.com/rstacruz/nprogress/.
 * The implementation is highly inspired by the YouTube one.
 */

var _ref = __jsx(GlobalStyles, null);

function NProgressBar(props) {
  return __jsx(NoSsr["a" /* default */], null, props.children, _ref);
}

if (false) {}

/* harmony default export */ var NProgressBar_NProgressBar = (NProgressBar);
// CONCATENATED MODULE: ../packages/material-ui-docs/src/NProgressBar/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return NProgressBar_NProgressBar; });


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

/***/ "THuk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-is"
var external_react_is_ = __webpack_require__("UWCm");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../packages/material-ui-lab/src/ToggleButtonGroup/isValueSelected.js

// Determine if the toggle button value matches, or is contained in, the
// candidate group value.
function isValueSelected(value, candidate) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  if (is_array_default()(candidate)) {
    return candidate.indexOf(value) >= 0;
  }

  return value === candidate;
}
// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: ../packages/material-ui/src/utils/capitalize.js
var capitalize = __webpack_require__("rKPb");

// CONCATENATED MODULE: ../packages/material-ui-lab/src/ToggleButtonGroup/ToggleButtonGroup.js
/* unused harmony export styles */


var __jsx = external_react_["createElement"];






const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    display: 'inline-flex'
  },

  /* Styles applied to the children. */
  grouped: {
    padding: '0px 11px 0px 12px',
    '&:not(:first-child)': {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    '&:not(:last-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  },

  /* Styles applied to the children if `size="small"`. */
  groupedSizeSmall: {
    padding: '0px 7px 0px 8px'
  },

  /* Styles applied to the children if `size="large"`. */
  groupedSizeLarge: {
    padding: '0px 15px 0px 16px'
  }
});
const ToggleButtonGroup = external_react_["forwardRef"](function ToggleButton(props, ref) {
  const {
    children,
    classes,
    className,
    exclusive = false,
    onChange,
    size = 'medium',
    value
  } = props,
        other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "exclusive", "onChange", "size", "value"]);

  const handleChange = (event, buttonValue) => {
    if (!onChange) {
      return;
    }

    const index = value && value.indexOf(buttonValue);
    let newValue;

    if (value && index >= 0) {
      newValue = [...value];
      newValue.splice(index, 1);
    } else {
      newValue = value ? [...value, buttonValue] : [buttonValue];
    }

    onChange(event, newValue);
  };

  const handleExclusiveChange = (event, buttonValue) => {
    if (!onChange) {
      return;
    }

    onChange(event, value === buttonValue ? null : buttonValue);
  };

  return __jsx("div", Object(esm_extends["a" /* default */])({
    className: external_clsx_default()(classes.root, className),
    ref: ref,
    role: "group"
  }, other), external_react_["Children"].map(children, child => {
    if (!external_react_["isValidElement"](child)) {
      return null;
    }

    if (false) {}

    const {
      selected: buttonSelected,
      value: buttonValue
    } = child.props;
    const selected = buttonSelected === undefined ? isValueSelected(buttonValue, value) : buttonSelected;
    return external_react_["cloneElement"](child, {
      className: external_clsx_default()(classes.grouped, child.props.className, size !== 'medium' && classes[`groupedSize${Object(capitalize["a" /* default */])(size)}`]),
      selected,
      onChange: exclusive ? handleExclusiveChange : handleChange,
      size
    });
  }));
});
/* harmony default export */ var ToggleButtonGroup_ToggleButtonGroup = __webpack_exports__["a"] = (Object(withStyles["default"])(styles, {
  name: 'MuiToggleButtonGroup'
})(ToggleButtonGroup));

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TlGy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollbarSize; });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/***/ }),

/***/ "Ttr8":
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




const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;
const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    display: 'inline-flex',
    // For correct alignment with the text.
    verticalAlign: 'middle',
    flexShrink: 0
  },

  /* Styles applied to the badge `span` element. */
  badge: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    boxSizing: 'border-box',
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    minWidth: RADIUS_STANDARD * 2,
    lineHeight: 1,
    padding: '0 6px',
    height: RADIUS_STANDARD * 2,
    borderRadius: RADIUS_STANDARD,
    zIndex: 1,
    // Render the badge on top of potential ripples.
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },

  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },

  /* Styles applied to the root element if `variant="dot"`. */
  dot: {
    borderRadius: RADIUS_DOT,
    height: RADIUS_DOT * 2,
    minWidth: RADIUS_DOT * 2,
    padding: 0
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangle"`. */
  anchorOriginTopRightRectangle: {
    top: 0,
    right: 0,
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    '&$invisible': {
      transform: 'scale(0) translate(50%, -50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangle"`. */
  anchorOriginBottomRightRectangle: {
    bottom: 0,
    right: 0,
    transform: 'scale(1) translate(50%, 50%)',
    transformOrigin: '100% 100%',
    '&$invisible': {
      transform: 'scale(0) translate(50%, 50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangle"`. */
  anchorOriginTopLeftRectangle: {
    top: 0,
    left: 0,
    transform: 'scale(1) translate(-50%, -50%)',
    transformOrigin: '0% 0%',
    '&$invisible': {
      transform: 'scale(0) translate(-50%, -50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangle"`. */
  anchorOriginBottomLeftRectangle: {
    bottom: 0,
    left: 0,
    transform: 'scale(1) translate(-50%, 50%)',
    transformOrigin: '0% 100%',
    '&$invisible': {
      transform: 'scale(0) translate(-50%, 50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="circle"`. */
  anchorOriginTopRightCircle: {
    top: '14%',
    right: '14%',
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    '&$invisible': {
      transform: 'scale(0) translate(50%, -50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circle"`. */
  anchorOriginBottomRightCircle: {
    bottom: '14%',
    right: '14%',
    transform: 'scale(1) translate(50%, 50%)',
    transformOrigin: '100% 100%',
    '&$invisible': {
      transform: 'scale(0) translate(50%, 50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="circle"`. */
  anchorOriginTopLeftCircle: {
    top: '14%',
    left: '14%',
    transform: 'scale(1) translate(-50%, -50%)',
    transformOrigin: '0% 0%',
    '&$invisible': {
      transform: 'scale(0) translate(-50%, -50%)'
    }
  },

  /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circle"`. */
  anchorOriginBottomLeftCircle: {
    bottom: '14%',
    left: '14%',
    transform: 'scale(1) translate(-50%, 50%)',
    transformOrigin: '0% 100%',
    '&$invisible': {
      transform: 'scale(0) translate(-50%, 50%)'
    }
  },

  /* Pseudo-class to the badge `span` element if `invisible={true}`. */
  invisible: {
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});
const Badge = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Badge(props, ref) {
  const {
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right'
    },
    badgeContent,
    children,
    classes,
    className,
    color = 'default',
    component: ComponentProp = 'span',
    invisible: invisibleProp,
    max = 99,
    overlap = 'rectangle',
    showZero = false,
    variant = 'standard'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["anchorOrigin", "badgeContent", "children", "classes", "className", "color", "component", "invisible", "max", "overlap", "showZero", "variant"]);

  let invisible = invisibleProp;

  if (invisibleProp == null && (badgeContent === 0 && !showZero || badgeContent == null && variant !== 'dot')) {
    invisible = true;
  }

  let displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  return __jsx(ComponentProp, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className),
    ref: ref
  }, other), children, __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.badge, classes[`${anchorOrigin.horizontal}${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(anchorOrigin.vertical)}}`], classes[`anchorOrigin${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(anchorOrigin.vertical)}${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(anchorOrigin.horizontal)}${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(overlap)}`], color !== 'default' && classes[`color${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color)}`], invisible && classes.invisible, variant === 'dot' && classes.dot)
  }, displayValue));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiBadge'
})(Badge));

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

/***/ "UWCm":
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("1qCV");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

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

/***/ "VlVZ":
/***/ (function(module, exports) {

module.exports = require("lodash/kebabCase");

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

/***/ "WSie":
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
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7QLS");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Whlw");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+rSm");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("k+Qe");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];









const styles = theme => ({
  /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected
    },
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.action.selected
    },
    '&$disabled': {
      opacity: 0.5
    }
  },

  /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
  container: {
    position: 'relative'
  },

  /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
  focusVisible: {},

  /* Styles applied to the `component` element if dense. */
  dense: {
    paddingTop: 4,
    paddingBottom: 4
  },

  /* Styles applied to the `component` element if `alignItems="flex-start"`. */
  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },

  /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the inner `component` element if `divider={true}`. */
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box'
  },

  /* Styles applied to the inner `component` element if `disableGutters={false}`. */
  gutters: {
    paddingLeft: 16,
    paddingRight: 16
  },

  /* Styles applied to the inner `component` element if `button={true}`. */
  button: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
  secondaryAction: {
    // Add some space to avoid collision as `ListItemSecondaryAction`
    // is absolutely positioned.
    paddingRight: 48
  },

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {}
});
const useEnhancedEffect = true ? react__WEBPACK_IMPORTED_MODULE_3__["useEffect"] : undefined;
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

const ListItem = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function ListItem(props, ref) {
  const {
    alignItems = 'center',
    autoFocus = false,
    button = false,
    children: childrenProp,
    classes,
    className,
    component: componentProp,
    ContainerComponent = 'li',
    ContainerProps: {
      className: ContainerClassName
    } = {},
    dense = false,
    disabled = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false
  } = props,
        ContainerProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props.ContainerProps, ["className"]),
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  const context = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_List_ListContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
  const childContext = {
    dense: dense || context.dense || false,
    alignItems
  };
  const listItemRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const children = react__WEBPACK_IMPORTED_MODULE_3__["Children"].toArray(childrenProp);
  const hasSecondaryAction = children.length && Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(children[children.length - 1], ['ListItemSecondaryAction']);
  const handleOwnRef = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](instance => {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_10__["findDOMNode"](instance);
  }, []);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(handleOwnRef, ref);

  const componentProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled
  }, other);

  let Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return __jsx(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Provider, {
      value: childContext
    }, __jsx(ContainerComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), __jsx(Component, componentProps, children), children.pop()));
  }

  return __jsx(_List_ListContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Provider, {
    value: childContext
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef
  }, componentProps), children));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ "Whlw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMuiElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "XEXC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadScript; });
function loadScript(src, position) {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = src;
  position.appendChild(script);
  return script;
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

/***/ "Y9oD":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ "Yh2X":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ "Z0wt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "ZOhp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit'));

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

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("ZOIa");

var _extends = __webpack_require__("pzQc");

var _Object$defineProperty = __webpack_require__("hHgk");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("Jxiz"));

const utils_1 = __webpack_require__("z4BS");

const rewrite_url_for_export_1 = __webpack_require__("Z0wt");

const is_dynamic_1 = __webpack_require__("BCwt");

const route_matcher_1 = __webpack_require__("VOyh");

const route_regex_1 = __webpack_require__("BukW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _extends({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (true) {
        // @ts-ignore this is temporarily global (attached to window)
        if (__NEXT_DATA__.nextExport) {
          as = rewrite_url_for_export_1.rewriteUrlForNextExport(as);
        }
      }

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _extends(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _extends({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "an9u":
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
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VPks");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];





const styles = theme => {
  const backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static',
      transform: 'translateZ(0)' // Make sure we can see the elevation.

    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: 'transparent',
      color: 'inherit'
    }
  };
};
const AppBar = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AppBar(props, ref) {
  const {
    classes,
    className,
    color = 'primary',
    position = 'fixed'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "color", "position"]);

  return __jsx(_Paper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    square: true,
    component: "header",
    elevation: 4,
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, classes[`position${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(position)}`], classes[`color${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color)}`], className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'MuiAppBar'
})(AppBar));

/***/ }),

/***/ "aqbJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiamondSponsors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Oy88");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yZEQ");
/* harmony import */ var _packages_material_ui_icons_src_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CgSL");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(theme => ({
  root: {
    '& a': {
      display: 'block',
      marginTop: theme.spacing(1)
    },
    '& img': {
      width: 125
    }
  },
  placeholder: {
    width: 125,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.divider,
    border: `1px dashed ${theme.palette.divider}`,
    transition: theme.transitions.create(['color', 'border-color']),
    '&&': {
      display: 'flex'
    },
    '&:hover': {
      borderColor: 'currentColor',
      color: theme.palette.text.secondary
    }
  }
}));

var _ref = __jsx(_packages_material_ui_icons_src_Add__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null);

function DiamondSponsors() {
  const classes = useStyles();
  const t = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.options.t);
  return __jsx("div", {
    className: classes.root
  }, __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    variant: "caption",
    color: "textSecondary",
    display: "block"
  }, t('diamondSponsors')), __jsx("a", {
    "aria-label": t('diamondSponsors'),
    className: classes.placeholder,
    rel: "noopener noreferrer",
    target: "_blank",
    href: "/discover-more/backers/#diamond"
  }, _ref));
}

/***/ }),

/***/ "axex":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export azAZ */
/* unused harmony export bgBG */
/* unused harmony export caES */
/* unused harmony export csCZ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return esES; });
/* unused harmony export etEE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return faIR; });
/* unused harmony export fiFI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return frFR; });
/* unused harmony export heIL */
/* unused harmony export huHU */
/* unused harmony export hyAM */
/* unused harmony export idID */
/* unused harmony export isIS */
/* unused harmony export itIT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return jaJP; });
/* unused harmony export koKR */
/* unused harmony export nlNL */
/* unused harmony export plPL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ptBR; });
/* unused harmony export ptPT */
/* unused harmony export roRO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ruRU; });
/* unused harmony export skSK */
/* unused harmony export svSE */
/* unused harmony export trTR */
/* unused harmony export ukUA */
/* unused harmony export viVN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return zhCN; });
const azAZ = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Əvvəlki səhifə',
      labelRowsPerPage: 'Səhifəyə düşən sətrlər:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} dən ${count}`,
      nextIconButtonText: 'Növbəti səhifə'
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'Ulduz';
        const lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Ulduzlar';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Silmək',
      closeText: 'Bağlamaq',
      loadingText: 'Yüklənir…',
      noOptionsText: 'Seçimlər mövcud deyil',
      openText: 'Открыть'
    },
    MuiAlert: {
      closeText: 'Bağlamaq'
    }
  }
};
const bgBG = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Предишна страница',
      labelRowsPerPage: 'Редове на страница:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} от ${count}`,
      nextIconButtonText: 'Следваща страница'
    },
    MuiRating: {
      getLabelText: value => `${value} Звезд${value !== 1 ? 'и' : 'а'}`,
      emptyLabelText: 'Изчисти'
    },
    MuiAutocomplete: {
      clearText: 'Изчисти',
      closeText: 'Затвори',
      loadingText: 'Зареждане…',
      noOptionsText: 'Няма налични опции',
      openText: 'Отвори'
    },
    MuiAlert: {
      closeText: 'Затвори'
    }
  }
};
const caES = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Pàgina anterior',
      labelRowsPerPage: 'Files per pàgina:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} de ${count}`,
      nextIconButtonText: 'Següent pàgina'
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? 'Estrelles' : 'Estrella'}`,
      emptyLabelText: 'Buit'
    },
    MuiAutocomplete: {
      clearText: 'Netejar',
      closeText: 'Tancar',
      loadingText: 'Carregant…',
      noOptionsText: 'Sense opcions',
      openText: 'Obert'
    },
    MuiAlert: {
      closeText: 'Tancat'
    }
  }
};
const csCZ = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Předchozí stránka',
      labelRowsPerPage: 'Řádků na stránce:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} z ${count}`,
      nextIconButtonText: 'Další stránka'
    },
    MuiRating: {
      getLabelText: value => {
        if (value === 1) {
          return `${value} hvězdička`;
        }

        if (value >= 2 && value <= 4) {
          return `${value} hvězdičky`;
        }

        return `${value} hvězdiček`;
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Vymazat',
      closeText: 'Zavřít',
      loadingText: 'Načítání…',
      noOptionsText: 'Žádné možnosti',
      openText: 'Otevřít'
    },
    MuiAlert: {
      closeText: 'Zavřít'
    }
  }
};
const deDE = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Nächste Seite',
      labelRowsPerPage: 'Zeilen pro Seite:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} von ${count}`,
      nextIconButtonText: 'Nächste Seite'
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? 'Sterne' : 'Stern'}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Leeren',
      closeText: 'Schließen',
      loadingText: 'Wird geladen…',
      noOptionsText: 'Keine Optionen',
      openText: 'Öffnen'
    },
    MuiAlert: {
      closeText: 'Schließen'
    }
  }
}; // default

const enUS = {
  /**
  props: {
    MuiBreadcrumbs: {
      expandText: 'Show path',
    },
    MuiTablePagination: {
      backIconButtonText: 'Previous page',
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) => `${from}-${to === -1 ? count : to} of ${count}`,
      nextIconButtonText: 'Next page',
    },
    MuiRating: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    },
    MuiAutocomplete: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    },
    MuiAlert: {
      closeText: 'Close',
    },
    MuiPagination: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        if (type === 'previous') {
          return 'Go to previous page';
        }
        return undefined;
      },
    },
  },
  */
};
const esES = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Filas por página:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} de ${count}`,
      nextIconButtonText: 'Siguiente página'
    },
    MuiRating: {
      getLabelText: value => `${value} Estrella${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Limpiar',
      closeText: 'Cerrar',
      loadingText: 'Cargando…',
      noOptionsText: 'Sin opciones',
      openText: 'Abierto'
    },
    MuiAlert: {
      closeText: 'Cerrar'
    }
  }
};
const etEE = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Eelmine lehekülg',
      labelRowsPerPage: 'Ridu leheküljel:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} / ${count}`,
      nextIconButtonText: 'Järgmine lehekülg'
    },
    MuiRating: {
      getLabelText: value => `${value} Tärn${value !== 1 ? 'i' : ''}`,
      emptyLabelText: 'Tühi'
    },
    MuiAutocomplete: {
      clearText: 'Tühjenda',
      closeText: 'Sulge',
      loadingText: 'Laen…',
      noOptionsText: 'Valikuid ei ole',
      openText: 'Ava'
    },
    MuiAlert: {
      closeText: 'Sulge'
    },
    MuiPagination: {
      'aria-label': 'Lehekülgede valik',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Vali '}lehekülg ${page}`;
        }

        if (type === 'first') {
          return 'Vali esimene lehekülg';
        }

        if (type === 'last') {
          return 'Vali viimane lehekülg';
        }

        if (type === 'next') {
          return 'Vali järgmine lehekülg';
        }

        if (type === 'previous') {
          return 'Vali eelmine lehekülg';
        }

        return undefined;
      }
    }
  }
};
const faIR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'صفحهٔ قبل',
      labelRowsPerPage: 'تعداد سطرهای هر صفحه:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} از ${count}`,
      nextIconButtonText: 'صفحهٔ بعد'
    },
    MuiRating: {
      getLabelText: value => `${value} ستاره`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'پاک‌کردن',
      closeText: 'بستن',
      loadingText: 'در حال بارگذاری…',
      noOptionsText: 'بی‌نتیجه',
      openText: 'بازکردن'
    },
    MuiAlert: {
      closeText: 'بستن'
    }
  }
};
const fiFI = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Edellinen sivu',
      labelRowsPerPage: 'Rivejä per sivu:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} / ${count}`,
      nextIconButtonText: 'Seuraava sivu'
    },
    MuiRating: {
      getLabelText: value => `${value} Täht${value !== 1 ? 'eä' : 'i'}`,
      emptyLabelText: 'Tyhjä'
    },
    MuiAutocomplete: {
      clearText: 'Tyhjennä',
      closeText: 'Sulje',
      loadingText: 'Ladataan…',
      noOptionsText: 'Ei valintoja',
      openText: 'Avaa'
    },
    MuiAlert: {
      closeText: 'Sulje'
    }
  }
};
const frFR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Montrer le chemin'
    },
    MuiTablePagination: {
      backIconButtonText: 'Page précédente',
      labelRowsPerPage: 'Lignes par page :',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} sur ${count}`,
      nextIconButtonText: 'Page suivante'
    },
    MuiRating: {
      getLabelText: value => `${value} Etoile${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Vide'
    },
    MuiAutocomplete: {
      clearText: 'Vider',
      closeText: 'Fermer',
      loadingText: 'Chargement…',
      noOptionsText: 'Pas de résultats',
      openText: 'Ouvrir'
    },
    MuiAlert: {
      closeText: 'Fermer'
    },
    MuiPagination: {
      'aria-label': 'pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Aller à la '}page ${page}`;
        }

        if (type === 'first') {
          return 'Aller à la première page';
        }

        if (type === 'last') {
          return 'Aller à la dernière page';
        }

        if (type === 'next') {
          return 'Aller à la page suivante';
        }

        if (type === 'previous') {
          return 'Aller à la page précédente';
        }

        return undefined;
      }
    }
  }
};
const heIL = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'העמוד הקודם',
      labelRowsPerPage: 'שורות בעמוד:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} מתוך ${count}`,
      nextIconButtonText: 'העמוד הבא'
    },
    MuiRating: {
      getLabelText: value => `${value} כוכב${value !== 1 ? 'ים' : ''}`,
      emptyLabelText: 'ריק'
    },
    MuiAutocomplete: {
      clearText: 'נקה',
      closeText: 'סגור',
      loadingText: 'טוען…',
      noOptionsText: 'אין אופציות',
      openText: 'פתח'
    },
    MuiAlert: {
      closeText: 'סגור'
    }
  }
};
const huHU = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Előző oldal',
      labelRowsPerPage: 'Sorok száma:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} / ${count}`,
      nextIconButtonText: 'Következő oldal'
    },
    MuiRating: {
      getLabelText: value => `${value} Csillag`,
      emptyLabelText: 'Üres'
    },
    MuiAutocomplete: {
      clearText: 'Törlés',
      closeText: 'Bezárás',
      loadingText: 'Töltés…',
      noOptionsText: 'Nincs találat',
      openText: 'Megnyitás'
    },
    MuiAlert: {
      closeText: 'Bezárás'
    }
  }
};
const hyAM = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Նախորդը',
      labelRowsPerPage: 'Տողեր մեկ էջում`',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} / ${count}`,
      nextIconButtonText: 'Հաջորդը'
    },
    MuiRating: {
      getLabelText: value => `${value} Աստղ`,
      emptyLabelText: 'Դատարկ'
    },
    MuiAutocomplete: {
      clearText: 'Մաքրել',
      closeText: 'Փակել',
      loadingText: 'Բեռնում…',
      noOptionsText: 'Տարբերակներ չկան',
      openText: 'Բացել'
    },
    MuiAlert: {
      closeText: 'Փակել'
    }
  }
};
const idID = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Halaman sebelumnya',
      labelRowsPerPage: 'Baris per halaman:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} dari ${count}`,
      nextIconButtonText: 'Halaman selanjutnya'
    },
    MuiRating: {
      getLabelText: value => `${value} Bintang`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Hapus',
      closeText: 'Tutup',
      loadingText: 'Memuat…',
      noOptionsText: 'Tidak ada opsi',
      openText: 'Buka'
    },
    MuiAlert: {
      closeText: 'Tutup'
    }
  }
};
const isIS = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Fyrri síða',
      labelRowsPerPage: 'Raðir á síðu:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} af ${count}`,
      nextIconButtonText: 'Næsta síða'
    },
    MuiRating: {
      getLabelText: value => `${value} ${value === 1 ? 'Stjarna' : 'Stjörnur'}`,
      emptyLabelText: 'Tómt'
    },
    MuiAutocomplete: {
      clearText: 'Hreinsa',
      closeText: 'Loka',
      loadingText: 'Hlaða…',
      noOptionsText: 'Engar niðurstöður',
      openText: 'Opna'
    },
    MuiAlert: {
      closeText: 'Loka'
    }
  }
};
const itIT = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Pagina precedente',
      labelRowsPerPage: 'Righe per pagina:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} di ${count}`,
      nextIconButtonText: 'Pagina successiva'
    },
    MuiRating: {
      getLabelText: value => `${value} Stell${value !== 1 ? 'e' : 'a'}`,
      emptyLabelText: 'Vuoto'
    },
    MuiAutocomplete: {
      clearText: 'Svuota',
      closeText: 'Chiudi',
      loadingText: 'Caricamento in corso…',
      noOptionsText: 'Nessuna opzione',
      openText: 'Apri'
    },
    MuiAlert: {
      closeText: 'Chiudi'
    }
  }
};
const jaJP = {
  props: {
    MuiTablePagination: {
      backIconButtonText: '前のページ',
      labelRowsPerPage: 'ページごとの行:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} of ${count}`,
      nextIconButtonText: '次のページ'
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? '出演者' : '星'}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'クリア',
      closeText: '閉じる',
      loadingText: '積み込み…',
      noOptionsText: '結果がありません',
      openText: '開いた'
    },
    MuiAlert: {
      closeText: '閉じる'
    }
  }
};
const koKR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: '이전 페이지',
      labelRowsPerPage: '페이지 당 행:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} / ${count}`,
      nextIconButtonText: '다음 페이지'
    },
    MuiRating: {
      getLabelText: value => `${value} 점`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: '지우기',
      closeText: '닫기',
      loadingText: '불러오는 중…',
      noOptionsText: '옵션 없음',
      openText: '열기'
    }
  }
};
const nlNL = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Vorige pagina',
      labelRowsPerPage: 'Regels per pagina :',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} van ${count}`,
      nextIconButtonText: 'Volgende pagina'
    },
    MuiRating: {
      getLabelText: value => `${value} Ster${value !== 1 ? 'ren' : ''}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Wissen',
      closeText: 'Sluiten',
      loadingText: 'Laden…',
      noOptionsText: 'Geen opties',
      openText: 'Openen'
    },
    MuiAlert: {
      closeText: 'Sluiten'
    }
  }
};
const plPL = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Poprzednia strona',
      labelRowsPerPage: 'Wierszy na stronę:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} z ${count}`,
      nextIconButtonText: 'Następna strona'
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'gwiazdek';
        const lastDigit = value % 10;

        if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'gwiazdki';
        } else if (value === 1) {
          pluralForm = 'gwiazdka';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Wyczyść',
      closeText: 'Zamknij',
      loadingText: 'Ładowanie…',
      noOptionsText: 'Brak opcji',
      openText: 'Otwórz'
    },
    MuiAlert: {
      closeText: 'Zamknij'
    }
  }
};
const ptBR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} de ${count}`,
      nextIconButtonText: 'Próxima página'
    },
    MuiRating: {
      getLabelText: value => `${value} Estrela${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'Carregando…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    },
    MuiAlert: {
      closeText: 'Fechar'
    }
  }
};
const ptPT = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} de ${count}`,
      nextIconButtonText: 'Próxima página'
    },
    MuiRating: {
      getLabelText: value => `${value} Estrela${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'A carregar…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    }
  }
};
const roRO = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Pagina precedentă',
      labelRowsPerPage: 'Rânduri pe pagină:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} din ${count}`,
      nextIconButtonText: 'Pagina următoare'
    },
    MuiRating: {
      getLabelText: value => `${value} St${value !== 1 ? 'ele' : 'ea'}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Șterge',
      closeText: 'Închide',
      loadingText: 'Se încarcă…',
      noOptionsText: 'Nicio opțiune',
      openText: 'Deschide'
    },
    MuiAlert: {
      closeText: 'Închide'
    }
  }
};
const ruRU = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Предыдущая страница',
      labelRowsPerPage: 'Строк на странице:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} из ${count}`,
      nextIconButtonText: 'Следующая страница'
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'Звёзд';
        const lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Звезды';
        } else if (lastDigit === 1) {
          pluralForm = 'Звезда';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Очистить',
      closeText: 'Закрыть',
      loadingText: 'Загрузка…',
      noOptionsText: 'Нет доступных вариантов',
      openText: 'Открыть'
    },
    MuiAlert: {
      closeText: 'Закрыть'
    }
  }
};
const skSK = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Predchádzajúca stránka',
      labelRowsPerPage: 'Riadkov na stránke:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} z ${count}`,
      nextIconButtonText: 'Ďalšia stránka'
    },
    MuiRating: {
      getLabelText: value => {
        if (value === 1) {
          return `${value} hviezdička`;
        }

        if (value >= 2 && value <= 4) {
          return `${value} hviezdičky`;
        }

        return `${value} hviezdičiek`;
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Vymazať',
      closeText: 'Zavrieť',
      loadingText: 'Načítanie…',
      noOptionsText: 'Žiadne možnosti',
      openText: 'Otvoriť'
    },
    MuiAlert: {
      closeText: 'Zavrieť'
    }
  }
};
const svSE = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Föregående sida',
      labelRowsPerPage: 'Rader per sida:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} av ${count}`,
      nextIconButtonText: 'Nästa sida'
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? 'Stjärnor' : 'Stjärna'}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Rensa',
      closeText: 'Stäng',
      loadingText: 'Laddar…',
      noOptionsText: 'Inga alternativ',
      openText: 'Öppen'
    },
    MuiAlert: {
      closeText: 'Stäng'
    }
  }
};
const trTR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Önceki sayfa',
      labelRowsPerPage: 'Sayfa başına satır:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${count} tanesinden ${from}-${to === -1 ? count : to}`,
      nextIconButtonText: 'Sonraki sayfa'
    },
    MuiRating: {
      getLabelText: value => `${value} Yıldız`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Temizle',
      closeText: 'Kapat',
      loadingText: 'Yükleniyor…',
      noOptionsText: 'Seçenek yok',
      openText: 'Aç'
    },
    MuiAlert: {
      closeText: 'Kapat'
    }
  }
};
const ukUA = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Попередня сторінка',
      labelRowsPerPage: 'Рядків на сторінці:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} з ${count}`,
      nextIconButtonText: 'Наступна сторінка'
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'Зірок';
        const lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Зірки';
        } else if (lastDigit === 1) {
          pluralForm = 'Зірка';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Очистити',
      closeText: 'Згорнути',
      loadingText: 'Завантаження…',
      noOptionsText: 'Немає варіантів',
      openText: 'Розгорнути'
    },
    MuiAlert: {
      closeText: 'Згорнути'
    }
  }
};
const viVN = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Trang trước',
      labelRowsPerPage: 'Số hàng mỗi trang:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} trong ${count}`,
      nextIconButtonText: 'Trang sau'
    },
    MuiRating: {
      getLabelText: value => `${value} sao`,
      emptyLabelText: 'Trống'
    },
    MuiAutocomplete: {
      clearText: 'Xóa',
      closeText: 'Đóng',
      loadingText: 'Đang tải…',
      noOptionsText: 'Không có lựa chọn',
      openText: 'Mở'
    },
    MuiAlert: {
      closeText: 'Đóng'
    }
  }
};
const zhCN = {
  props: {
    MuiTablePagination: {
      backIconButtonText: '上一页',
      labelRowsPerPage: '每页行数:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} 的 ${count}`,
      nextIconButtonText: '下一页'
    },
    MuiRating: {
      getLabelText: value => `${value} 星${value !== 1 ? '星' : ''}`,
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: '明确',
      closeText: '关',
      loadingText: '载入中…',
      noOptionsText: '没有选择',
      openText: '打开'
    },
    MuiAlert: {
      closeText: '关'
    }
  }
};

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

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("k3h2");

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hHgk"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("e4Qu");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c0Ge":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
}), 'Translate'));

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

/***/ "e+1t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__("XpU0");

// EXTERNAL MODULE: ../packages/material-ui/src/Portal/Portal.js
var Portal = __webpack_require__("4AhO");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/ChevronRight.js
var ChevronRight = __webpack_require__("HC9H");

// EXTERNAL MODULE: ../packages/material-ui-icons/src/ChevronLeft.js
var ChevronLeft = __webpack_require__("jvG0");

// EXTERNAL MODULE: ../packages/material-ui/src/Button/Button.js
var Button = __webpack_require__("O8uh");

// EXTERNAL MODULE: ../packages/material-ui/src/Divider/Divider.js
var Divider = __webpack_require__("FAXT");

// EXTERNAL MODULE: ./src/modules/components/Head.js
var Head = __webpack_require__("EWRx");

// EXTERNAL MODULE: ./src/modules/components/useMarkdownDocs.js + 6 modules
var useMarkdownDocs = __webpack_require__("IC7y");

// EXTERNAL MODULE: ./src/modules/components/AppFrame.js + 4 modules
var AppFrame = __webpack_require__("KFoC");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("JYC+");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: external "marked/lib/marked"
var marked_ = __webpack_require__("A++9");
var marked_default = /*#__PURE__*/__webpack_require__.n(marked_);

// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__("p7dQ");
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// EXTERNAL MODULE: ../packages/material-ui/src/Box/Box.js + 7 modules
var Box = __webpack_require__("xWBm");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/makeStyles.js
var makeStyles = __webpack_require__("yZEQ");

// EXTERNAL MODULE: ../packages/material-ui/src/Typography/Typography.js
var Typography = __webpack_require__("Oy88");

// EXTERNAL MODULE: ./src/modules/utils/textToHash.js
var textToHash = __webpack_require__("K6qZ");

// EXTERNAL MODULE: ./src/modules/components/DiamondSponsors.js
var DiamondSponsors = __webpack_require__("aqbJ");

// EXTERNAL MODULE: ./src/modules/components/Link.js
var Link = __webpack_require__("OxvQ");

// EXTERNAL MODULE: ./src/modules/components/PageContext.js
var PageContext = __webpack_require__("hAlb");

// CONCATENATED MODULE: ./src/modules/components/AppTableOfContents.js


var __jsx = external_react_default.a.createElement;
/* eslint-disable react/no-danger */













const useStyles = Object(makeStyles["a" /* default */])(theme => ({
  root: {
    top: 70,
    // Fix IE 11 position sticky issue.
    marginTop: 70,
    width: 175,
    flexShrink: 0,
    position: 'sticky',
    height: 'calc(100vh - 70px)',
    overflowY: 'auto',
    padding: theme.spacing(2, 2, 2, 0),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  contents: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(1.5)
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  item: {
    fontSize: 13,
    padding: theme.spacing(0.5, 0, 0.5, 1),
    borderLeft: '4px solid transparent',
    boxSizing: 'content-box',
    '&:hover': {
      borderLeft: `4px solid ${theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]}`
    },
    '&$active,&:active': {
      borderLeft: `4px solid ${theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[800]}`
    }
  },
  secondaryItem: {
    paddingLeft: theme.spacing(2.5)
  },
  active: {}
}));
const renderer = new marked_default.a.Renderer();

function setRenderer(itemsCollector, unique) {
  renderer.heading = (text2, level) => {
    const text = text2.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') // remove emojis
    .replace(/<\/?[^>]+(>|$)/g, ''); // remove HTML

    if (level === 2) {
      itemsCollector.current.push({
        text,
        level,
        hash: Object(textToHash["a" /* default */])(text, unique),
        children: []
      });
    } else if (level === 3) {
      if (!itemsCollector.current[itemsCollector.current.length - 1]) {
        throw new Error(`Missing parent level for: ${text}`);
      }

      itemsCollector.current[itemsCollector.current.length - 1].children.push({
        text,
        level,
        hash: Object(textToHash["a" /* default */])(text, unique)
      });
    }
  };
}

function getItemsServer(contents, itemsCollector) {
  marked_default()(contents.join(''), {
    renderer
  });
  return itemsCollector.current;
}

function getItemsClient(items) {
  const itemsClient = [];
  items.forEach(item2 => {
    itemsClient.push(Object(objectSpread2["a" /* default */])({}, item2, {
      node: document.getElementById(item2.hash)
    }));

    if (item2.children.length > 0) {
      item2.children.forEach(item3 => {
        itemsClient.push(Object(objectSpread2["a" /* default */])({}, item3, {
          node: document.getElementById(item3.hash)
        }));
      });
    }
  });
  return itemsClient;
}

const noop = () => {};

function useThrottledOnScroll(callback, delay) {
  const throttledCallback = external_react_default.a.useMemo(() => callback ? throttle_default()(callback, delay) : noop, [callback, delay]);
  external_react_default.a.useEffect(() => {
    if (throttledCallback === noop) {
      return undefined;
    }

    window.addEventListener('scroll', throttledCallback);
    return () => {
      window.removeEventListener('scroll', throttledCallback);
      throttledCallback.cancel();
    };
  }, [throttledCallback]);
}

var _ref = __jsx(Box["a" /* default */], {
  mt: 3,
  mb: 2,
  mx: 1.5
}, __jsx(DiamondSponsors["a" /* default */], null));

function AppTableOfContents(props) {
  const {
    contents
  } = props;
  const classes = useStyles();
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  const itemsServer = external_react_default.a.useMemo(() => {
    const itemsCollectorRef = {
      current: []
    };
    setRenderer(itemsCollectorRef, {});
    return getItemsServer(contents, itemsCollectorRef);
  }, [contents]);
  const itemsClientRef = external_react_default.a.useRef([]);
  external_react_default.a.useEffect(() => {
    itemsClientRef.current = getItemsClient(itemsServer);
  }, [itemsServer]);
  const {
    activePage
  } = external_react_default.a.useContext(PageContext["a" /* default */]);
  const [activeState, setActiveState] = external_react_default.a.useState(null);
  const clickedRef = external_react_default.a.useRef(false);
  const unsetClickedRef = external_react_default.a.useRef(null);
  const findActiveIndex = external_react_default.a.useCallback(() => {
    // Don't set the active index based on scroll if a link was just clicked
    if (clickedRef.current) {
      return;
    }

    let active;

    for (let i = itemsClientRef.current.length - 1; i >= 0; i -= 1) {
      // No hash if we're near the top of the page
      if (document.documentElement.scrollTop < 200) {
        active = {
          hash: null
        };
        break;
      }

      const item = itemsClientRef.current[i];

      if (false) {}

      if (item.node && item.node.offsetTop < document.documentElement.scrollTop + document.documentElement.clientHeight / 8) {
        active = item;
        break;
      }
    }

    if (active && activeState !== active.hash) {
      setActiveState(active.hash);
    }
  }, [activeState]); // Corresponds to 10 frames at 60 Hz

  useThrottledOnScroll(itemsServer.length > 0 ? findActiveIndex : null, 166);

  const handleClick = hash => event => {
    // Ignore click for new tab/new window behavior
    if (event.defaultPrevented || event.button !== 0 || // ignore everything but left-click
    event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
      return;
    } // Used to disable findActiveIndex if the page scrolls due to a click


    clickedRef.current = true;
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false;
    }, 1000);

    if (activeState !== hash) {
      setActiveState(hash);
    }
  };

  external_react_default.a.useEffect(() => () => {
    clearTimeout(unsetClickedRef.current);
  }, []);

  const itemLink = (item, secondary) => __jsx(Link["a" /* default */], {
    display: "block",
    color: activeState === item.hash ? 'textPrimary' : 'textSecondary',
    href: `${activePage.pathname}#${item.hash}`,
    underline: "none",
    onClick: handleClick(item.hash),
    className: external_clsx_default()(classes.item, secondary && classes.secondaryItem, activeState === item.hash && classes.active)
  }, __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: item.text
    }
  }));

  return __jsx("nav", {
    className: classes.root,
    "aria-label": t('pageTOC')
  }, itemsServer.length > 0 ? __jsx(external_react_default.a.Fragment, null, __jsx(Typography["a" /* default */], {
    gutterBottom: true,
    className: classes.contents
  }, t('tableOfContents')), __jsx(Typography["a" /* default */], {
    component: "ul",
    className: classes.ul
  }, itemsServer.map(item2 => __jsx("li", {
    key: item2.text
  }, itemLink(item2), item2.children.length > 0 ? __jsx("ul", {
    className: classes.ul
  }, item2.children.map(item3 => __jsx("li", {
    key: item3.text
  }, itemLink(item3, true)))) : null)))) : null, _ref);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("z3IF");

// EXTERNAL MODULE: ../packages/material-ui/src/Paper/Paper.js
var Paper = __webpack_require__("VPks");

// EXTERNAL MODULE: ./src/modules/utils/loadScript.js
var loadScript = __webpack_require__("XEXC");

// CONCATENATED MODULE: ./src/modules/components/AdCodeFund.js

var AdCodeFund_jsx = external_react_default.a.createElement;




const styles = theme => ({
  '@global': {
    '#cf': {
      display: 'block',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.level2,
      padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1.5) + 130}px`,
      borderRadius: theme.shape.borderRadius,
      '& .cf-img-wrapper.cf-img-wrapper': {
        float: 'left',
        marginLeft: -130,
        width: 130,
        height: 100,
        marginRight: theme.spacing(1.5)
      },
      '& img': {
        verticalAlign: 'middle'
      },
      '& a, & a:hover': {
        color: theme.palette.text.primary,
        textDecoration: 'none'
      },
      '& .cf-text.cf-text': Object(objectSpread2["a" /* default */])({}, theme.typography.body2, {
        display: 'block'
      }),
      '& .cf-powered-by.cf-powered-by': Object(objectSpread2["a" /* default */])({}, theme.typography.caption, {
        color: theme.palette.text.secondary,
        display: 'block'
      })
    }
  }
});

var AdCodeFund_ref = AdCodeFund_jsx(external_react_default.a.Fragment, null, AdCodeFund_jsx("span", {
  id: "code-fund-script-slot"
}), AdCodeFund_jsx("span", {
  id: "codefund"
}));

function AdCodeFund() {
  external_react_default.a.useEffect(() => {
    const scriptSlot = document.querySelector('#code-fund-script-slot'); // Concurrence issues

    if (!scriptSlot) {
      return;
    }

    Object(loadScript["a" /* default */])('https://codefund.io/properties/137/funder.js?theme=unstyled', scriptSlot);
  }, []);
  return AdCodeFund_ref;
}

/* harmony default export */ var components_AdCodeFund = (Object(withStyles["default"])(styles)(AdCodeFund));
// CONCATENATED MODULE: ./src/modules/components/AdCarbon.js

var AdCarbon_jsx = external_react_default.a.createElement;




const AdCarbon_styles = theme => ({
  '@global': {
    '#carbonads': {
      display: 'block',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.level2,
      padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1.5) + 130}px`,
      borderRadius: theme.shape.borderRadius,
      '& .carbon-img': {
        float: 'left',
        marginLeft: -130,
        width: 130,
        height: 100,
        marginRight: theme.spacing(1.5)
      },
      '& img': {
        verticalAlign: 'middle'
      },
      '& a, & a:hover': {
        color: theme.palette.text.primary,
        textDecoration: 'none'
      },
      '& .carbon-text': Object(objectSpread2["a" /* default */])({}, theme.typography.body2, {
        display: 'block'
      }),
      '& .carbon-poweredby': Object(objectSpread2["a" /* default */])({}, theme.typography.caption, {
        color: theme.palette.text.secondary,
        display: 'block'
      })
    }
  }
});

var AdCarbon_ref = AdCarbon_jsx("span", {
  id: "carbon-ad"
});

function AdCarbon() {
  external_react_default.a.useEffect(() => {
    const scriptSlot = document.querySelector('#carbon-ad'); // Concurrence issues

    if (!scriptSlot) {
      return;
    }

    const script = Object(loadScript["a" /* default */])('https://cdn.carbonads.com/carbon.js?serve=CKYIL27L&placement=material-uicom', scriptSlot);
    script.id = '_carbonads_js';
  }, []);
  return AdCarbon_ref;
}

/* harmony default export */ var components_AdCarbon = (Object(withStyles["default"])(AdCarbon_styles)(AdCarbon));
// CONCATENATED MODULE: ./src/modules/components/AdInHouse.js

var AdInHouse_jsx = external_react_default.a.createElement;
/* eslint react/jsx-no-target-blank: ["error", { allowReferrer: true }] */



const AdInHouse_useStyles = Object(makeStyles["a" /* default */])(theme => ({
  root: {
    display: 'block',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.level2,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1.5) + 130}px`,
    borderRadius: theme.shape.borderRadius,
    '& $imageWrapper': {
      float: 'left',
      marginLeft: -130,
      width: 130,
      height: 100,
      marginRight: theme.spacing(1.5)
    },
    '& img': {
      verticalAlign: 'middle'
    },
    '& a, & a:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'none'
    },
    '& $description': Object(objectSpread2["a" /* default */])({}, theme.typography.body2, {
      display: 'block'
    }),
    '& $poweredby': Object(objectSpread2["a" /* default */])({}, theme.typography.caption, {
      color: theme.palette.text.secondary,
      display: 'block'
    })
  },
  imageWrapper: {},
  description: {},
  poweredby: {}
}));
function AdInHouse(props) {
  const {
    ad
  } = props;
  const classes = AdInHouse_useStyles();
  /* eslint-disable material-ui/no-hardcoded-labels, react/no-danger */

  return AdInHouse_jsx("span", {
    className: classes.root
  }, AdInHouse_jsx("a", {
    className: classes.link,
    href: ad.link,
    target: "_blank",
    rel: "noopener sponsored",
    "data-ga-event-category": "in-house-ad",
    "data-ga-event-action": "click",
    "data-ga-event-label": ad.name
  }, AdInHouse_jsx("span", {
    className: classes.imageWrapper
  }, AdInHouse_jsx("img", {
    height: "100",
    width: "130",
    className: classes.image,
    src: ad.img,
    alt: ad.name
  })), AdInHouse_jsx("span", {
    className: classes.description,
    dangerouslySetInnerHTML: {
      __html: ad.description
    }
  })), AdInHouse_jsx("a", {
    href: "/",
    className: classes.poweredby
  }, "ad by Material-UI"));
  /* eslint-enable material-ui/no-hardcoded-labels, react/no-danger */
}
// CONCATENATED MODULE: ./src/modules/components/Ad.js

var Ad_jsx = external_react_default.a.createElement;









const Ad_styles = theme => ({
  root: {
    position: 'relative',
    minHeight: 124,
    maxWidth: 345,
    display: 'block',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1.5),
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.level2,
    display: 'block'
  }
});

function Adblock(props) {
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  return Ad_jsx(Paper["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "span",
    elevation: 0
  }, props), Ad_jsx(Typography["a" /* default */], {
    variant: "body2",
    display: "block",
    component: "span",
    gutterBottom: true
  }, t('likeMui')), Ad_jsx(Typography["a" /* default */], {
    variant: "body2",
    display: "block",
    component: "span",
    gutterBottom: true
  }, t('adblock')), Ad_jsx(Typography["a" /* default */], {
    variant: "body2",
    display: "block",
    component: "span",
    gutterBottom: true
  }, t('thanks'), ' ', Ad_jsx("span", {
    role: "img",
    "aria-label": t('emojiLove')
  }, "\u2764\uFE0F")));
}

const disable =  false && false;
const inHouseAds = [{
  name: 'scaffoldhub',
  link: 'https://scaffoldhub.io/?partner=1',
  img: '/static/in-house/scaffoldhub.png',
  description: '<b>Scaffold</b><br />Automate building your full-stack Material-UI web-app.'
}, {
  name: 'themes-2',
  link: 'https://material-ui.com/store/?utm_source=material_ui&utm_medium=referral&utm_campaign=in-house-2',
  img: '/static/in-house/themes-2.jpg',
  description: '<b>Premium Templates</b><br />Start your project with the best themes for admins, dashboards and more.'
}, {
  name: 'themes',
  link: 'https://material-ui.com/store/?utm_source=material_ui&utm_medium=referral&utm_campaign=in-house',
  img: '/static/in-house/themes.png',
  description: '<b>Premium Themes</b><br />Kickstart your application development with a ready-made theme.'
}, {
  name: 'tidelift',
  link: 'https://tidelift.com/subscription/managed-open-source-survey?utm_source=material_ui&utm_medium=referral&utm_campaign=enterprise&utm_content=ad',
  img: '/static/in-house/tidelift.png',
  description: '<b>Material-UI for enterprise</b><br />Save time and reduce risk. Managed open source — backed by maintainers.'
}, {
  name: 'bonsaiilabs',
  link: 'https://bonsaiilabs.com/courseDetail/material-ui-with-react',
  img: '/static/in-house/bonsaiilabs.png',
  description: '<b>Learn Material‑UI</b><br />A course to learn Material-UI while developing a flight search/booking app.'
}, {
  name: 'sketch',
  link: 'https://material-ui.com/store/items/sketch-react/?utm_source=material_ui&utm_medium=referral&utm_campaign=in-house-sketch',
  img: '/static/in-house/sketch.png',
  description: '<b>Sketch</b><br />A large UI kit with over 1,500 handcrafted Material-UI symbols 💎.'
}];

var Ad_ref = Ad_jsx("span", null);

var _ref2 = Ad_jsx(components_AdCodeFund, null);

var _ref3 = Ad_jsx(components_AdCarbon, null);

function Ad(props) {
  const {
    classes
  } = props;
  const timerAdblock = external_react_default.a.useRef();
  const {
    current: randomSplit
  } = external_react_default.a.useRef(Math.random());
  const [adblock, setAdblock] = external_react_default.a.useState(null);
  const [carbonOut, setCarbonOut] = external_react_default.a.useState(null);
  const [codeFundOut, setCodeFundOut] = external_react_default.a.useState(null);
  const checkAdblock = external_react_default.a.useCallback((attempt = 1) => {
    if (document.querySelector('.cf-wrapper') || document.querySelector('#carbonads') || codeFundOut || carbonOut) {
      if (document.querySelector('#carbonads a') && document.querySelector('#carbonads a').getAttribute('href') === 'https://material-ui-next.com/discover-more/backers') {
        setCarbonOut(true);
      }

      setAdblock(false);
      return;
    }

    if (attempt < 30) {
      timerAdblock.current = setTimeout(() => {
        checkAdblock(attempt + 1);
      }, 500);
    }

    if (attempt > 6) {
      setAdblock(true);
    }
  }, [codeFundOut, carbonOut]);
  external_react_default.a.useEffect(() => {
    if (disable) {
      return undefined;
    }

    checkAdblock();
    return () => {
      clearTimeout(timerAdblock.current);
    };
  }, [checkAdblock]);
  external_react_default.a.useEffect(() => {
    const handler = event => {
      if (event.detail.status === 'no-advertiser') {
        setCodeFundOut(true);
      }
    };

    window.addEventListener('codefund', handler);
    return () => {
      window.removeEventListener('codefund', handler);
    };
  }, []);
  let children;
  let minHeight; // Hide the content to google bot.

  if (/Googlebot/.test(navigator.userAgent) || disable) {
    children = Ad_ref;
  }

  if (!children && adblock) {
    minHeight = 'auto';

    if (Math.random() < 0.2) {
      children = Ad_jsx(Adblock, {
        className: classes.paper
      });
    } else {
      children = Ad_jsx(AdInHouse, {
        ad: inHouseAds[Math.floor(inHouseAds.length * Math.random())]
      });
    }
  }

  if (!children) {
    if (carbonOut || codeFundOut) {
      children = Ad_jsx(AdInHouse, {
        ad: inHouseAds[Math.floor(inHouseAds.length * Math.random())]
      });
      minHeight = 'auto';
    } else if (randomSplit < 0.35) {
      children = _ref2;
    } else {
      children = _ref3;
    }
  }

  external_react_default.a.useEffect(() => {
    // Avoid a flood of events.
    if (Math.random() < 0.9) {
      return undefined;
    }

    const delay = setTimeout(() => {
      let type;

      if (children.type === components_AdCodeFund) {
        type = 'codefund';
      } else if (children.type === components_AdCarbon) {
        type = 'carbon';
      } else if (children.type === AdInHouse) {
        if (!adblock && codeFundOut) {
          type = 'in-house-codefund';
        } else if (!adblock && carbonOut) {
          type = 'in-house-carbon';
        } else {
          type = 'in-house';
        }
      } else if (children.type === Adblock) {
        type = 'in-house-adblock';
      } else {
        return;
      }

      window.ga('send', {
        hitType: 'event',
        eventCategory: 'ad',
        eventAction: 'display',
        eventLabel: type
      });

      if (type.indexOf('in-house') === 0) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'in-house-ad',
          eventAction: 'display',
          eventLabel: children.props.ad.name
        });
      }
    }, 2500);
    return () => {
      clearTimeout(delay);
    };
  }, [children.type, children.props.ad, codeFundOut, carbonOut, adblock]);
  return Ad_jsx("span", {
    className: classes.root,
    style: {
      minHeight
    }
  }, children);
}

/* harmony default export */ var components_Ad = (external_react_default.a.memo(Object(withStyles["default"])(Ad_styles)(Ad)));
// EXTERNAL MODULE: ./src/modules/constants.js
var constants = __webpack_require__("NLnA");

// CONCATENATED MODULE: ./src/modules/components/EditPage.js
var EditPage_jsx = external_react_default.a.createElement;




function EditPage(props) {
  const {
    markdownLocation
  } = props;
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  const userLanguage = Object(external_react_redux_["useSelector"])(state => state.options.userLanguage);
  const LOCALES = {
    zh: 'zh-CN',
    pt: 'pt-BR',
    es: 'es-ES'
  };
  const CROWDIN_ROOT_URL = 'https://translate.material-ui.com/project/material-ui-docs/';
  const crowdInLocale = LOCALES[userLanguage] || userLanguage;
  const crowdInPath = markdownLocation.substring(0, markdownLocation.lastIndexOf('/'));
  return EditPage_jsx(Button["a" /* default */], {
    component: "a",
    href: userLanguage === 'en' ? `${constants["SOURCE_CODE_ROOT_URL"]}${markdownLocation}` : `${CROWDIN_ROOT_URL}${crowdInLocale}#/staging${crowdInPath}`,
    target: "_blank",
    rel: "noopener nofollow",
    size: "small",
    "data-ga-event-category": userLanguage === 'en' ? undefined : 'l10n',
    "data-ga-event-action": userLanguage === 'en' ? undefined : 'edit-button',
    "data-ga-event-label": userLanguage === 'en' ? undefined : userLanguage
  }, t('editPage'));
}
// EXTERNAL MODULE: ./src/modules/components/AppContainer.js
var AppContainer = __webpack_require__("CTgH");

// EXTERNAL MODULE: ./src/modules/utils/parseMarkdown.js
var parseMarkdown = __webpack_require__("kVtE");

// EXTERNAL MODULE: ./src/modules/utils/helpers.js
var helpers = __webpack_require__("18I3");

// CONCATENATED MODULE: ./src/modules/components/MarkdownDocs.js
var MarkdownDocs_jsx = external_react_default.a.createElement;





















const MarkdownDocs_styles = theme => ({
  root: {
    width: '100%'
  },
  container: {
    position: 'relative'
  },
  actions: {
    position: 'absolute',
    right: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  ad: {
    '& .description': {
      marginBottom: 196
    },
    '& .description.ad': {
      marginBottom: 40
    }
  },
  toc: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 175px)'
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 175px - 240px)'
    }
  },
  footer: {
    marginTop: theme.spacing(12)
  },
  pagination: {
    margin: theme.spacing(3, 0, 4),
    display: 'flex',
    justifyContent: 'space-between'
  },
  pageLinkButton: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular
  }
});

function flattenPages(pages, current = []) {
  return pages.reduce((items, item) => {
    if (item.children && item.children.length > 1) {
      items = flattenPages(item.children, items);
    } else {
      items.push(item.children && item.children.length === 1 ? item.children[0] : item);
    }

    return items;
  }, current);
} // To replace with .findIndex() once we stop IE 11 support.


function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var MarkdownDocs_ref = MarkdownDocs_jsx(components_Ad, null);

var MarkdownDocs_ref2 = MarkdownDocs_jsx(Divider["a" /* default */], null);

var MarkdownDocs_ref3 = MarkdownDocs_jsx(ChevronLeft["a" /* default */], null);

var _ref4 = MarkdownDocs_jsx("div", null);

var _ref5 = MarkdownDocs_jsx(ChevronRight["a" /* default */], null);

function MarkdownDocs(props) {
  const {
    classes,
    disableAd = false,
    disableToc = false,
    markdown: markdownProp,
    markdownLocation: markdownLocationProp,
    req,
    reqPrefix,
    reqSource
  } = props;
  const t = Object(external_react_redux_["useSelector"])(state => state.options.t);
  const markdownDocs = Object(useMarkdownDocs["a" /* default */])({
    markdown: markdownProp,
    markdownLocation: markdownLocationProp,
    req,
    reqPrefix,
    reqSource
  });
  const headers = Object(parseMarkdown["d" /* getHeaders */])(markdownDocs.markdown);
  const {
    activePage,
    pages
  } = external_react_default.a.useContext(PageContext["a" /* default */]);
  const pageList = flattenPages(pages);
  const currentPageNum = findIndex(pageList, page => page.pathname === activePage.pathname);
  const currentPage = pageList[currentPageNum];
  const prevPage = pageList[currentPageNum - 1];
  const nextPage = pageList[currentPageNum + 1];
  return MarkdownDocs_jsx(AppFrame["a" /* default */], null, MarkdownDocs_jsx(Head["a" /* default */], {
    title: `${headers.title || Object(parseMarkdown["e" /* getTitle */])(markdownDocs.markdown)} - Material-UI`,
    description: headers.description || Object(parseMarkdown["c" /* getDescription */])(markdownDocs.markdown)
  }), disableAd ? null : MarkdownDocs_jsx(Portal["a" /* default */], {
    container: () => {
      const container = document.querySelector('.description');
      container.classList.add('ad');
      return container;
    }
  }, MarkdownDocs_ref), MarkdownDocs_jsx("div", {
    className: external_clsx_default()(classes.root, !disableAd && classes.ad, !disableToc && classes.toc)
  }, MarkdownDocs_jsx(AppContainer["a" /* default */], {
    className: classes.container
  }, MarkdownDocs_jsx("div", {
    className: classes.actions
  }, MarkdownDocs_jsx(EditPage, {
    markdownLocation: markdownDocs.location
  })), markdownDocs.element, MarkdownDocs_jsx("footer", {
    className: classes.footer
  }, !currentPage || currentPage.displayNav === false || nextPage.displayNav === false && !prevPage ? null : MarkdownDocs_jsx(external_react_default.a.Fragment, null, MarkdownDocs_ref2, MarkdownDocs_jsx("div", {
    className: classes.pagination
  }, prevPage ? MarkdownDocs_jsx(Button["a" /* default */], {
    component: Link["a" /* default */],
    naked: true,
    href: prevPage.pathname,
    size: "large",
    className: classes.pageLinkButton,
    startIcon: MarkdownDocs_ref3
  }, Object(helpers["pageToTitleI18n"])(prevPage, t)) : _ref4, nextPage.displayNav === false ? null : MarkdownDocs_jsx(Button["a" /* default */], {
    component: Link["a" /* default */],
    naked: true,
    href: nextPage.pathname,
    size: "large",
    className: classes.pageLinkButton,
    endIcon: _ref5
  }, Object(helpers["pageToTitleI18n"])(nextPage, t))))))), disableToc ? null : MarkdownDocs_jsx(AppTableOfContents, {
    contents: markdownDocs.contents
  }));
}

/* harmony default export */ var components_MarkdownDocs = __webpack_exports__["a"] = (Object(withStyles["default"])(MarkdownDocs_styles)(MarkdownDocs));

/***/ }),

/***/ "e4Qu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

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

/***/ "eou5":
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
/* harmony import */ var _material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cYeA");
/* harmony import */ var _material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XpU0");
/* harmony import */ var _material_ui_src_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7QLS");
/* harmony import */ var _material_ui_src_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rKPb");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];
// @inheritedComponent ButtonBase





const styles = theme => ({
  /* Styles applied to the root element. */
  root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.button, {
    boxSizing: 'border-box',
    borderRadius: theme.shape.borderRadius,
    height: 48,
    padding: '0px 12px',
    border: `1px solid ${Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.12)}`,
    color: Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.38),
    '&$selected': {
      color: theme.palette.action.active,
      backgroundColor: Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.12),
      '&:hover': {
        backgroundColor: Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.15)
      },
      '& + &': {
        borderLeft: 0,
        marginLeft: 0
      }
    },
    '&$disabled': {
      color: Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.disabled, 0.12)
    },
    '&:hover': {
      textDecoration: 'none',
      // Reset on mouse devices
      backgroundColor: Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.text.primary, 0.05),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      '&$disabled': {
        backgroundColor: 'transparent'
      }
    }
  }),

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {},

  /* Styles applied to the `label` wrapper element. */
  label: {
    width: '100%',
    // Ensure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    height: 40,
    padding: '0px 8px',
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    height: 56,
    padding: '0px 16px',
    fontSize: theme.typography.pxToRem(15)
  }
});
const ToggleButton = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function ToggleButton(props, ref) {
  const {
    children,
    classes,
    className,
    disabled = false,
    disableFocusRipple = false,
    disableRipple = false,
    onChange,
    onClick,
    selected,
    size = 'medium',
    value
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "disabled", "disableFocusRipple", "disableRipple", "onChange", "onClick", "selected", "size", "value"]);

  const handleChange = event => {
    if (onClick) {
      onClick(event, value);

      if (event.isDefaultPrevented()) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return __jsx(_material_ui_src_ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, disabled && classes.disabled, selected && classes.selected, size !== 'medium' && classes[`size${Object(_material_ui_src_utils__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size)}`]),
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    ref: ref,
    onClick: handleChange,
    onChange: onChange,
    value: value,
    disableRipple: disableRipple,
    "aria-pressed": selected
  }, other), __jsx("span", {
    className: classes.label
  }, children));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiToggleButton'
})(ToggleButton));

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g1+M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
}), 'Notifications'));

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gfrc":
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),

/***/ "h0OK":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "h7Hf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iYoT");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mii5");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6JSk");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, outerTheme, {}, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();

  if (false) {}

  const theme = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return __jsx(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Provider, {
    value: theme
  }, children);
}

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (ThemeProvider);

/***/ }),

/***/ "hAlb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // The default value is never and should never be used.
// It's here to improve DX by enabling autocompletion for editors supporting TypeScript.

const PageContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  activePage: {
    pathname: ''
  },
  pages: [],
  versions: []
});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (PageContext);

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iM6+":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-vendor-prefixer");

/***/ }),

/***/ "iYRC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
}), 'Brightness7'));

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

/***/ "juyJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marked_lib_marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("A++9");
/* harmony import */ var marked_lib_marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked_lib_marked__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_textToHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("K6qZ");
/* harmony import */ var _prism__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Hrpt");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






 // Monkey patch to preserve non-breaking spaces
// https://github.com/chjj/marked/blob/6b0416d10910702f73da9cb6bb3d4c8dcb7dead7/lib/marked.js#L142-L150

marked_lib_marked__WEBPACK_IMPORTED_MODULE_6___default.a.Lexer.prototype.lex = function lex(src) {
  src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u2424/g, '\n');
  return this.token(src, true);
};

const renderer = new marked_lib_marked__WEBPACK_IMPORTED_MODULE_6___default.a.Renderer();

renderer.heading = (text, level) => {
  // Small title. No need for an anchor.
  // It's reducing the risk of duplicated id and it's fewer elements in the DOM.
  if (level >= 4) {
    return `<h${level}>${text}</h${level}>`;
  } // eslint-disable-next-line no-underscore-dangle


  const hash = Object(_utils_textToHash__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(text, global.__MARKED_UNIQUE__);
  return [`<h${level}>`, `<a class="anchor-link" id="${hash}"></a>`, text, `<a class="anchor-link-style" aria-hidden="true" aria-label="anchor" href="#${hash}">`, '<svg><use xlink:href="#anchor-link-icon" /></svg>', '</a>', `</h${level}>`].join('');
};

const externs = ['https://material.io/', 'https://getbootstrap.com/', 'https://www.amazon.com/', 'https://materialdesignicons.com/', 'https://www.w3.org/', 'https://devexpress.github.io/', 'https://ui-kit.co/'];

renderer.link = (href, title, text) => {
  let more = '';

  if (externs.some(domain => href.indexOf(domain) !== -1)) {
    more = ' target="_blank" rel="noopener nofollow"';
  } // eslint-disable-next-line no-underscore-dangle


  const userLanguage = global.__MARKED_USER_LANGUAGE__;
  let finalHref = href;

  if (userLanguage !== 'en' && finalHref.indexOf('/') === 0 && finalHref !== '/size-snapshot') {
    finalHref = `/${userLanguage}${finalHref}`;
  }

  return `<a href="${finalHref}"${more}>${text}</a>`;
};

const markedOptions = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,

  highlight(code, language) {
    let prismLanguage;

    switch (language) {
      case 'ts':
        prismLanguage = _prism__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].languages.tsx;
        break;

      case 'js':
      case 'sh':
        prismLanguage = _prism__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].languages.jsx;
        break;

      case 'diff':
        prismLanguage = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _prism__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].languages.diff); // original `/^[-<].*$/m` matches lines starting with `<` which matches
        // <SomeComponent />
        // we will only use `-` as the deleted marker

        prismLanguage.deleted = /^[-].*$/m;
        break;

      default:
        prismLanguage = _prism__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].languages[language];
        break;
    }

    if (!prismLanguage) {
      if (language) {
        throw new Error(`unsupported language: "${language}", "${code}"`);
      } else {
        prismLanguage = _prism__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].languages.jsx;
      }
    }

    return _prism__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"].highlight(code, prismLanguage);
  },

  renderer
};

const styles = theme => ({
  root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body1, {
    color: theme.palette.text.primary,
    wordBreak: 'break-word',
    '& .anchor-link': {
      marginTop: -96,
      // Offset for the anchor.
      position: 'absolute'
    },
    '& pre': {
      margin: '24px 0',
      padding: '12px 18px',
      backgroundColor: '#272c34',
      direction: 'ltr',
      borderRadius: theme.shape.borderRadius,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch' // iOS momentum scrolling.

    },
    '& code': {
      display: 'inline-block',
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      padding: '2px 6px',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(255,229,100,0.2)' : 'rgba(255,229,100,0.1)',
      fontSize: 14,
      borderRadius: 2
    },
    '& code[class*="language-"]': {
      backgroundColor: '#272c34',
      color: '#fff',
      // Avoid layout jump after hydration (style injected by prism)
      lineHeight: 1.5
    },
    '& p code, & ul code, & pre code': {
      fontSize: 14
    },
    '& .token.operator': {
      background: 'transparent'
    },
    '& h1': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.h3, {
      fontSize: 40,
      margin: '16px 0'
    }),
    '& .description': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.h5, {
      margin: '0 0 40px'
    }),
    '& h2': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.h4, {
      fontSize: 30,
      margin: '40px 0 16px'
    }),
    '& h3': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.h5, {
      margin: '40px 0 16px'
    }),
    '& h4': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.h6, {
      margin: '32px 0 16px'
    }),
    '& h5': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.subtitle2, {
      margin: '32px 0 16px'
    }),
    '& p, & ul, & ol': {
      marginTop: 0,
      marginBottom: 16
    },
    '& ul': {
      paddingLeft: 30
    },
    '& h1, & h2, & h3, & h4': {
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        // Remove scroll on small screens.
        wordBreak: 'break-all'
      },
      '& .anchor-link-style': {
        // To prevent the link to get the focus.
        display: 'none'
      },
      '&:hover .anchor-link-style': {
        display: 'inline-block',
        padding: '0 8px',
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary
        },
        '& svg': {
          width: '0.7em',
          height: '0.7em',
          fill: 'currentColor'
        }
      }
    },
    '& table': {
      // Trade display table for scroll overflow
      display: 'block',
      wordBreak: 'normal',
      width: '100%',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      // iOS momentum scrolling.
      borderCollapse: 'collapse',
      marginBottom: '16px',
      borderSpacing: 0,
      overflow: 'hidden',
      '& .prop-name': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace'
      },
      '& .required': {
        color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5'
      },
      '& .prop-type': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: theme.palette.type === 'light' ? '#932981' : '#ffb6ec'
      },
      '& .prop-default': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.divider}`
      }
    },
    '& td': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body2, {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
      color: theme.palette.text.primary
    }),
    '& td code': {
      fontSize: 13,
      lineHeight: 1.6
    },
    '& th': {
      fontSize: 14,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16
    },
    '& blockquote': {
      borderLeft: '5px solid #ffe564',
      backgroundColor: 'rgba(255,229,100,0.2)',
      padding: '4px 24px',
      margin: '24px 0',
      '& p': {
        marginTop: '16px'
      }
    },
    '& a, & a code': {
      // Style taken from the Link component
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    '& img': {
      maxWidth: '100%'
    },
    '& hr': {
      height: 1,
      margin: theme.spacing(6, 0),
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    }
  })
});

function MarkdownElement(props) {
  const {
    classes,
    className,
    text
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "text"]);

  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.options.userLanguage); // eslint-disable-next-line no-underscore-dangle

  global.__MARKED_USER_LANGUAGE__ = userLanguage;
  /* eslint-disable react/no-danger */

  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, 'markdown-body', className),
    dangerouslySetInnerHTML: {
      __html: marked_lib_marked__WEBPACK_IMPORTED_MODULE_6___default()(text, markedOptions)
    }
  }, other));
  /* eslint-enable */
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  flip: false
})(MarkdownElement));

/***/ }),

/***/ "jvG0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft'));

/***/ }),

/***/ "k+Qe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

const ListContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (ListContext);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k3h2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("tvLF");

var _Object$defineProperty = __webpack_require__("hHgk");

var _typeof = __webpack_require__("NluH");

var _WeakMap = __webpack_require__("3DJh");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "kVtE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return demoRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDescription; });
const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const descriptionRegExp = /<p class="description">(.*)<\/p>[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;
function getHeaders(markdown) {
  let header = markdown.match(headerRegExp);

  if (!header) {
    return {
      components: []
    };
  }

  header = header[1];
  let regexMatches;
  const headers = {}; // eslint-disable-next-line no-cond-assign

  while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
    headers[regexMatches[1]] = regexMatches[2];
  }

  if (headers.components) {
    headers.components = headers.components.split(',').map(x => x.trim()).sort();
  } else {
    headers.components = [];
  }

  return headers;
}
const demoRegexp = /^"demo": "(.*)"/;
function getContents(markdown) {
  return markdown.replace(headerRegExp, '') // Remove header information
  .split(/^{{("demo":[^}]*)}}$/gm) // Split markdown into an array, separating demos
  .filter(content => !emptyRegExp.test(content)); // Remove empty lines
}
function getTitle(markdown) {
  const matches = markdown.match(titleRegExp);

  if (!matches || !matches[1]) {
    throw new Error('Missing title in the page');
  }

  return matches[1];
}
function getDescription(markdown) {
  const matches = markdown.match(descriptionRegExp);

  if (!matches || !matches[1]) {
    throw new Error('Missing description in the page');
  }

  return matches[1];
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

/***/ "lhCM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
}), 'Brightness4'));

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "lyll":
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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XpU0");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tqcJ");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xOSD");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LMpM");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];







const styles = theme => ({
  /* Styles applied to the container element. */
  container: {
    height: 0,
    overflow: 'hidden',
    transition: theme.transitions.create('height')
  },

  /* Styles applied to the container element when the transition has entered. */
  entered: {
    height: 'auto',
    overflow: 'visible'
  },

  /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
  hidden: {
    visibility: 'hidden'
  },

  /* Styles applied to the outer wrapper element. */
  wrapper: {
    // Hack to get children with a negative margin to not falsify the height computation.
    display: 'flex'
  },

  /* Styles applied to the inner wrapper element. */
  wrapperInner: {
    width: '100%'
  }
});
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Collapse = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Collapse(props, ref) {
  const {
    children,
    classes,
    className,
    collapsedHeight: collapsedHeightProp = '0px',
    component: Component = 'div',
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExiting,
    style,
    timeout = _styles_transitions__WEBPACK_IMPORTED_MODULE_7__[/* duration */ "b"].standard
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["children", "classes", "className", "collapsedHeight", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "timeout"]);

  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])();
  const timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const wrapperRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  const autoTransitionDuration = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const collapsedHeight = typeof collapsedHeightProp === 'number' ? `${collapsedHeightProp}px` : collapsedHeightProp;
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleEnter = (node, isAppearing) => {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleEntering = (node, isAppearing) => {
    const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    const {
      duration: transitionDuration
    } = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_8__[/* getTransitionProps */ "a"])({
      style,
      timeout
    }, {
      mode: 'enter'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style.height = `${wrapperHeight}px`;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };

  const handleEntered = (node, isAppearing) => {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  };

  const handleExit = node => {
    const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = `${wrapperHeight}px`;

    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting = node => {
    const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    const {
      duration: transitionDuration
    } = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_8__[/* getTransitionProps */ "a"])({
      style,
      timeout
    }, {
      mode: 'exit'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  };

  const addEndListener = (_, next) => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), (state, childProps) => __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.container, className, {
      'entered': classes.entered,
      'exited': !inProp && collapsedHeight === '0px' && classes.hidden
    }[state]),
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      minHeight: collapsedHeight
    }, style),
    ref: ref
  }, childProps), __jsx("div", {
    className: classes.wrapper,
    ref: wrapperRef
  }, __jsx("div", {
    className: classes.wrapperInner
  }, children))));
});
Collapse.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiCollapse'
})(Collapse));

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

/***/ "mZPs":
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

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

/***/ "nEUa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ownerWindow; });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IsKj");

function ownerWindow(node) {
  const doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "nRKQ":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-json");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oRPM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("27z4");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(popper_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mii5");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4AhO");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Njyx");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("kCiw");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+rSm");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];










function flipPlacement(placement, theme) {
  const direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const useEnhancedEffect = false ? undefined : react__WEBPACK_IMPORTED_MODULE_3__["useEffect"];
const defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.
 */

const Popper = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Popper(props, ref) {
  const {
    anchorEl,
    children,
    container,
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement: initialPlacement = 'bottom',
    popperOptions = defaultPopperOptions,
    popperRef: popperRefProp,
    transition = false
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition"]);

  const tooltipRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  const ownRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(tooltipRef, ref);
  const popperRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  const handlePopperRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(popperRef, popperRefProp);
  const handlePopperRefRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](popperRefProp, () => popperRef.current, []);
  const [exited, setExited] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](true);
  const theme = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
  const rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  const [placement, setPlacement] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](rtlPlacement);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  const handleOpen = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](() => {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };

    const resolvedAnchorEl = getAnchorEl(anchorEl);

    if (false) {}

    const popper = new popper_js__WEBPACK_IMPORTED_MODULE_4___default.a(getAnchorEl(anchorEl), tooltipRef.current, Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: 'window'
        }
      }, {}, modifiers, {}, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  const handleRef = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](node => {
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  const handleEnter = () => {
    setExited(false);
  };

  const handleClose = () => {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  const handleExited = () => {
    setExited(true);
    handleClose();
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    // Let's update the popper position.
    handleOpen();
  }, [handleOpen]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    return () => {
      handleClose();
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  const childProps = {
    placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    disablePortal: disablePortal,
    container: container
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0
    }, other.style)
  }), typeof children === 'function' ? children(childProps) : children));
});
/* harmony default export */ __webpack_exports__["a"] = (Popper);

/***/ }),

/***/ "on4p":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-props-sort");

/***/ }),

/***/ "p4Aa":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "p7dQ":
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "p9jg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Txzd");



function compose(...styles) {
  const fn = props => styles.reduce((acc, style) => {
    const output = style(props);

    if (output) {
      return Object(_merge__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(acc, output);
    }

    return acc;
  }, {}); // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  false ? undefined : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

/* harmony default export */ __webpack_exports__["a"] = (compose);

/***/ }),

/***/ "p9xL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UWCm");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("IsKj");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AgvC");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TlGy");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+rSm");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];








function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  let text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }

      wrappedOnce = true;
    } // Move to the next element.


    if (!nextFocus.hasAttribute('tabindex') || nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true' || !textCriteriaMatches(nextFocus, textCriteria)) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }

  return false;
}

const useEnhancedEffect = true ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : undefined;
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

const MenuList = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function MenuList(props, ref) {
  const {
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    onKeyDown,
    disableListWrap = false,
    variant = 'selectedMenu'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "onKeyDown", "disableListWrap", "variant"]);

  const listRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  const textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.
      const noExplicitWidth = !listRef.current.style.width;

      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(true)}px`;
        listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }

      return listRef.current;
    }
  }), []);

  const handleKeyDown = event => {
    const list = listRef.current;
    const key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    const currentFocus = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](instance => {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](instance);
  }, []);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, (child, index) => {
    if (!react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (false) {}

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      if (newChildProps !== null) {
        return react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, newChildProps);
      }
    }

    return child;
  });
  return __jsx(_List__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
/* harmony default export */ __webpack_exports__["a"] = (MenuList);

/***/ }),

/***/ "pzQc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("U8Yc");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

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

/***/ "r54P":
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
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VPks");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cYeA");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];





const styles = theme => {
  const emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  const backgroundColor = Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body2, {
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        flexGrow: 'initial',
        minWidth: 288
      }
    }),

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
const SnackbarContent = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function SnackbarContent(props, ref) {
  const {
    action,
    classes,
    className,
    message,
    role = 'alert'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["action", "classes", "className", "message", "role"]);

  return __jsx(_Paper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    role: role,
    square: true,
    elevation: 6,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
    ref: ref
  }, other), __jsx("div", {
    className: classes.message
  }, message), action ? __jsx("div", {
    className: classes.action
  }, action) : null);
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiSnackbarContent'
})(SnackbarContent));

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

/***/ "rbxJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useControlled; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JYC+");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name
}) {
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](controlled !== undefined);
  const [valueState, setValue] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](defaultProp);
  const value = isControlled ? controlled : valueState;

  if (false) {}

  const setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ro6p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useChangeTheme; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mKyP");
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cYeA");
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h7Hf");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _packages_material_ui_src_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LHO+");
/* harmony import */ var _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("axex");
/* harmony import */ var _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("GeB9");
/* harmony import */ var _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VQPw");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("18I3");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _prism__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Hrpt");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const languageMap = {
  en: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* enUS */ "b"],
  zh: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* zhCN */ "i"],
  fa: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* faIR */ "d"],
  ru: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* ruRU */ "h"],
  pt: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* ptBR */ "g"],
  es: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* esES */ "c"],
  fr: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* frFR */ "e"],
  de: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* deDE */ "a"],
  ja: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_7__[/* jaJP */ "f"]
};
const themeColor = _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"][700];
const themeInitialOptions = {
  dense: false,
  direction: 'ltr',
  paletteColors: {},
  spacing: 8 // spacing unit

};
const highDensity = {
  props: {
    MuiButton: {
      size: 'small'
    },
    MuiFilledInput: {
      margin: 'dense'
    },
    MuiFormControl: {
      margin: 'dense'
    },
    MuiFormHelperText: {
      margin: 'dense'
    },
    MuiIconButton: {
      size: 'small'
    },
    MuiInputBase: {
      margin: 'dense'
    },
    MuiInputLabel: {
      margin: 'dense'
    },
    MuiListItem: {
      dense: true
    },
    MuiOutlinedInput: {
      margin: 'dense'
    },
    MuiFab: {
      size: 'small'
    },
    MuiTable: {
      size: 'small'
    },
    MuiTextField: {
      margin: 'dense'
    },
    MuiToolbar: {
      variant: 'dense'
    }
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        // minimal touch target hit spacing
        marginLeft: 4,
        marginRight: 4,
        padding: 12
      }
    }
  }
};
const DispatchContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

if (false) {}

const useEnhancedEffect = true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect : undefined;
function ThemeProvider(props) {
  const {
    children
  } = props;
  const [themeOptions, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer((state, action) => {
    switch (action.type) {
      case 'SET_SPACING':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          spacing: action.payload
        });

      case 'INCREASE_SPACING':
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
            spacing: state.spacing + 1
          });
        }

      case 'DECREASE_SPACING':
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
            spacing: state.spacing - 1
          });
        }

      case 'SET_DENSE':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          dense: action.payload
        });

      case 'RESET_DENSITY':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          dense: themeInitialOptions.dense,
          spacing: themeInitialOptions.spacing
        });

      case 'RESET_COLORS':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          paletteColors: themeInitialOptions.paletteColors
        });

      case 'CHANGE':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          paletteType: action.payload.paletteType || state.paletteType,
          direction: action.payload.direction || state.direction,
          paletteColors: action.payload.paletteColors || state.paletteColors
        });

      default:
        throw new Error(`Unrecognized type ${action.type}`);
    }
  }, themeInitialOptions);
  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.options.userLanguage);
  const prefersDarkMode = Object(_packages_material_ui_src_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('(prefers-color-scheme: dark)');
  const preferredType = prefersDarkMode ? 'dark' : 'light';
  const {
    dense,
    direction,
    paletteColors,
    paletteType = preferredType,
    spacing
  } = themeOptions;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    Object(_prism__WEBPACK_IMPORTED_MODULE_11__[/* setPrismTheme */ "c"])(_prism__WEBPACK_IMPORTED_MODULE_11__[/* darkTheme */ "a"]);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (false) {}
  }, []); // persist paletteType

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    document.cookie = `paletteType=${paletteType};path=/;max-age=31536000`;
  }, [paletteType]);
  useEnhancedEffect(() => {
    document.body.dir = direction;
  }, [direction]);
  const theme = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const nextTheme = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      direction,
      nprogress: {
        color: paletteType === 'light' ? '#000' : '#fff'
      },
      palette: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        primary: {
          main: paletteType === 'light' ? _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"][700] : _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"][200]
        },
        secondary: {
          main: paletteType === 'light' ? Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_3__["darken"])(_packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].A400, 0.1) : _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"][200]
        },
        type: paletteType,
        background: {
          default: paletteType === 'light' ? '#fff' : '#121212'
        }
      }, paletteColors),
      spacing
    }, dense ? highDensity : null, languageMap[userLanguage]);
    nextTheme.palette.background.level2 = paletteType === 'light' ? nextTheme.palette.grey[100] : '#333';
    nextTheme.palette.background.level1 = paletteType === 'light' ? '#fff' : nextTheme.palette.grey[900];
    return nextTheme;
  }, [dense, direction, paletteColors, paletteType, spacing, userLanguage]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    // Expose the theme as a global variable so people can play with it.
    if (false) {}
  }, [theme]);
  return __jsx(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    theme: theme
  }, __jsx(DispatchContext.Provider, {
    value: dispatch
  }, children));
}
/**
 * @returns {(nextOptions: Partial<typeof themeInitialOptions>) => void}
 */

function useChangeTheme() {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(DispatchContext);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(options => dispatch({
    type: 'CHANGE',
    payload: options
  }), [dispatch]);
}

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "sGfw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVert'));

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

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

/***/ "tGja":
/***/ (function(module, exports) {

module.exports = require("lz-string");

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

/***/ "uI4l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"
}), 'InvertColors'));

/***/ }),

/***/ "v4UQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), 'FileCopy'));

/***/ }),

/***/ "vD8I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Zz2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__jsx("path", {
  d: "M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z"
}), 'FormatTextdirectionLToR'));

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

/***/ "wuQJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "wy4x":
/***/ (function(module, exports) {

module.exports = require("docsearch.js");

/***/ }),

/***/ "xOSD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTransitionProps; });
const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  const {
    timeout,
    style = {}
  } = props;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "xP/R":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-rule-value-function");

/***/ }),

/***/ "xWBm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../packages/material-ui-system/src/css.js
var css = __webpack_require__("Q0ga");

// EXTERNAL MODULE: ../packages/material-ui-system/src/compose.js
var compose = __webpack_require__("p9jg");

// EXTERNAL MODULE: ../packages/material-ui-system/src/style.js
var style = __webpack_require__("+bTD");

// CONCATENATED MODULE: ../packages/material-ui-system/src/borders.js



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = Object(style["a" /* default */])({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = Object(style["a" /* default */])({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = Object(style["a" /* default */])({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = Object(style["a" /* default */])({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = Object(style["a" /* default */])({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = Object(style["a" /* default */])({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderRadius = Object(style["a" /* default */])({
  prop: 'borderRadius',
  themeKey: 'shape'
});
const borders = Object(compose["a" /* default */])(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ var src_borders = (borders);
// CONCATENATED MODULE: ../packages/material-ui-system/src/display.js


const displayPrint = Object(style["a" /* default */])({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = Object(style["a" /* default */])({
  prop: 'display'
});
const overflow = Object(style["a" /* default */])({
  prop: 'overflow'
});
const textOverflow = Object(style["a" /* default */])({
  prop: 'textOverflow'
});
const visibility = Object(style["a" /* default */])({
  prop: 'visibility'
});
const whiteSpace = Object(style["a" /* default */])({
  prop: 'whiteSpace'
});
/* harmony default export */ var display = (Object(compose["a" /* default */])(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
// CONCATENATED MODULE: ../packages/material-ui-system/src/flexbox.js


const flexBasis = Object(style["a" /* default */])({
  prop: 'flexBasis'
});
const flexDirection = Object(style["a" /* default */])({
  prop: 'flexDirection'
});
const flexWrap = Object(style["a" /* default */])({
  prop: 'flexWrap'
});
const justifyContent = Object(style["a" /* default */])({
  prop: 'justifyContent'
});
const alignItems = Object(style["a" /* default */])({
  prop: 'alignItems'
});
const alignContent = Object(style["a" /* default */])({
  prop: 'alignContent'
});
const order = Object(style["a" /* default */])({
  prop: 'order'
});
const flex = Object(style["a" /* default */])({
  prop: 'flex'
});
const flexGrow = Object(style["a" /* default */])({
  prop: 'flexGrow'
});
const flexShrink = Object(style["a" /* default */])({
  prop: 'flexShrink'
});
const alignSelf = Object(style["a" /* default */])({
  prop: 'alignSelf'
});
const justifyItems = Object(style["a" /* default */])({
  prop: 'justifyItems'
});
const justifySelf = Object(style["a" /* default */])({
  prop: 'justifySelf'
});
const flexbox = Object(compose["a" /* default */])(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ var src_flexbox = (flexbox);
// CONCATENATED MODULE: ../packages/material-ui-system/src/grid.js


const gridGap = Object(style["a" /* default */])({
  prop: 'gridGap'
});
const gridColumnGap = Object(style["a" /* default */])({
  prop: 'gridColumnGap'
});
const gridRowGap = Object(style["a" /* default */])({
  prop: 'gridRowGap'
});
const gridColumn = Object(style["a" /* default */])({
  prop: 'gridColumn'
});
const gridRow = Object(style["a" /* default */])({
  prop: 'gridRow'
});
const gridAutoFlow = Object(style["a" /* default */])({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = Object(style["a" /* default */])({
  prop: 'gridAutoColumns'
});
const gridAutoRows = Object(style["a" /* default */])({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = Object(style["a" /* default */])({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = Object(style["a" /* default */])({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = Object(style["a" /* default */])({
  prop: 'gridTemplateAreas'
});
const gridArea = Object(style["a" /* default */])({
  prop: 'gridArea'
});
const grid = Object(compose["a" /* default */])(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ var src_grid = (grid);
// CONCATENATED MODULE: ../packages/material-ui-system/src/positions.js


const position = Object(style["a" /* default */])({
  prop: 'position'
});
const zIndex = Object(style["a" /* default */])({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const positions_top = Object(style["a" /* default */])({
  prop: 'top'
});
const right = Object(style["a" /* default */])({
  prop: 'right'
});
const bottom = Object(style["a" /* default */])({
  prop: 'bottom'
});
const left = Object(style["a" /* default */])({
  prop: 'left'
});
/* harmony default export */ var positions = (Object(compose["a" /* default */])(position, zIndex, positions_top, right, bottom, left));
// EXTERNAL MODULE: ../packages/material-ui-system/src/palette.js
var palette = __webpack_require__("KbJi");

// CONCATENATED MODULE: ../packages/material-ui-system/src/shadows.js

const boxShadow = Object(style["a" /* default */])({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ var shadows = (boxShadow);
// CONCATENATED MODULE: ../packages/material-ui-system/src/sizing.js



function transform(value) {
  return value <= 1 ? `${value * 100}%` : value;
}

const width = Object(style["a" /* default */])({
  prop: 'width',
  transform
});
const maxWidth = Object(style["a" /* default */])({
  prop: 'maxWidth',
  transform
});
const minWidth = Object(style["a" /* default */])({
  prop: 'minWidth',
  transform
});
const height = Object(style["a" /* default */])({
  prop: 'height',
  transform
});
const maxHeight = Object(style["a" /* default */])({
  prop: 'maxHeight',
  transform
});
const minHeight = Object(style["a" /* default */])({
  prop: 'minHeight',
  transform
});
const sizeWidth = Object(style["a" /* default */])({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = Object(style["a" /* default */])({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = Object(style["a" /* default */])({
  prop: 'boxSizing'
});
const sizing = Object(compose["a" /* default */])(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ var src_sizing = (sizing);
// EXTERNAL MODULE: ../packages/material-ui-system/src/spacing.js
var spacing = __webpack_require__("ef48");

// EXTERNAL MODULE: ../packages/material-ui-system/src/typography.js
var typography = __webpack_require__("8GFl");

// EXTERNAL MODULE: ../packages/material-ui/src/styles/styled.js + 1 modules
var styled = __webpack_require__("Ol6c");

// CONCATENATED MODULE: ../packages/material-ui/src/Box/Box.js
/* unused harmony export styleFunction */


const styleFunction = Object(css["a" /* default */])(Object(compose["a" /* default */])(src_borders, display, src_flexbox, src_grid, positions, palette["a" /* default */], shadows, src_sizing, spacing["b" /* default */], typography["a" /* default */]));
/**
 * @ignore - do not document.
 */

const Box = Object(styled["a" /* default */])('div')(styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ var Box_Box = __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y+v8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../packages/material-ui/src/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__("6dYU");

// CONCATENATED MODULE: ../packages/material-ui-docs/src/svgIcons/FileDownload.js
var __jsx = external_react_default.a.createElement;



var _ref = __jsx("path", {
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
});

function FileDownload(props) {
  return __jsx(SvgIcon["a" /* default */], props, _ref);
}

FileDownload.muiName = 'SvgIcon';
/* harmony default export */ var svgIcons_FileDownload = (FileDownload);
// CONCATENATED MODULE: ../packages/material-ui-docs/src/svgIcons/JavaScript.js
var JavaScript_jsx = external_react_default.a.createElement;



var JavaScript_ref = JavaScript_jsx("path", {
  d: "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"
});

function JavaScript(props) {
  return JavaScript_jsx(SvgIcon["a" /* default */], props, JavaScript_ref);
}

JavaScript.muiName = 'SvgIcon';
/* harmony default export */ var svgIcons_JavaScript = (JavaScript);
// EXTERNAL MODULE: ../packages/material-ui-docs/src/NProgressBar/index.js + 1 modules
var NProgressBar = __webpack_require__("Sl23");

// CONCATENATED MODULE: ../packages/material-ui-docs/src/svgIcons/TypeScript.js
var TypeScript_jsx = external_react_default.a.createElement;



var TypeScript_ref = TypeScript_jsx("path", {
  d: "M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"
});

function TypeScript(props) {
  return TypeScript_jsx(SvgIcon["a" /* default */], props, TypeScript_ref);
}

TypeScript.muiName = 'SvgIcon';
/* harmony default export */ var svgIcons_TypeScript = (TypeScript);
// CONCATENATED MODULE: ../packages/material-ui-docs/src/index.js
/* concated harmony reexport FileDownload */__webpack_require__.d(__webpack_exports__, "a", function() { return svgIcons_FileDownload; });
/* concated harmony reexport JavaScript */__webpack_require__.d(__webpack_exports__, "b", function() { return svgIcons_JavaScript; });
/* unused concated harmony import NProgressBar */
/* concated harmony reexport TypeScript */__webpack_require__.d(__webpack_exports__, "c", function() { return svgIcons_TypeScript; });





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

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("1qCV");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "zDFz":
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
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tqcJ");
/* harmony import */ var _ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("L5GG");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wFh9");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rKPb");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Njyx");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("CFQC");
/* harmony import */ var _SnackbarContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("r54P");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];










const styles = theme => {
  const top1 = {
    top: 8
  };
  const bottom1 = {
    bottom: 8
  };
  const right = {
    justifyContent: 'flex-end'
  };
  const left = {
    justifyContent: 'flex-start'
  };
  const top3 = {
    top: 24
  };
  const bottom3 = {
    bottom: 24
  };
  const right3 = {
    right: 24
  };
  const left3 = {
    left: 24
  };
  const center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, top1, {
      [theme.breakpoints.up('sm')]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, top3, {}, center)
    }),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, bottom1, {
      [theme.breakpoints.up('sm')]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, bottom3, {}, center)
    }),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, top1, {}, right, {
      [theme.breakpoints.up('sm')]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
        left: 'auto'
      }, top3, {}, right3)
    }),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, bottom1, {}, right, {
      [theme.breakpoints.up('sm')]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
        left: 'auto'
      }, bottom3, {}, right3)
    }),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, top1, {}, left, {
      [theme.breakpoints.up('sm')]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
        right: 'auto'
      }, top3, {}, left3)
    }),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, bottom1, {}, left, {
      [theme.breakpoints.up('sm')]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
        right: 'auto'
      }, bottom3, {}, left3)
    })
  };
};
const Snackbar = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Snackbar(props, ref) {
  const {
    action,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: 'bottom',
      horizontal: 'center'
    },
    autoHideDuration = null,
    children,
    classes,
    className,
    ClickAwayListenerProps,
    ContentProps,
    disableWindowBlurListener = false,
    message,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    onMouseEnter,
    onMouseLeave,
    open,
    resumeHideDuration,
    TransitionComponent = _Grow__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    transitionDuration = {
      enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__[/* duration */ "b"].enteringScreen,
      exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__[/* duration */ "b"].leavingScreen
    },
    TransitionProps
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  const timerAutoHide = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const [exited, setExited] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](true);
  const handleClose = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])((...args) => {
    if (onClose) {
      onClose(...args);
    }
  });
  const setAutoHideTimer = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(autoHideDurationParam => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.


  const handleResume = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  const handleMouseEnter = event => {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  const handleMouseLeave = event => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  const handleClickAway = event => {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  const handleExited = () => {
    setExited(true);
  };

  const handleEnter = () => {
    setExited(false);
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return () => {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]); // So we only render active snackbars.

  if (!open && exited) {
    return null;
  }

  return __jsx(_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes[`anchorOrigin${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(vertical)}${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(horizontal)}`], className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), __jsx(TransitionComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    appear: true,
    in: open,
    onEnter: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(handleEnter, onEnter),
    onEntered: onEntered,
    onEntering: onEntering,
    onExit: onExit,
    onExited: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(handleExited, onExited),
    onExiting: onExiting,
    timeout: transitionDuration,
    direction: vertical === 'top' ? 'down' : 'up'
  }, TransitionProps), children || __jsx(_SnackbarContent__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    message: message,
    action: action
  }, ContentProps)))));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  flip: false,
  name: 'MuiSnackbar'
})(Snackbar));

/***/ }),

/***/ "zRBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* unused harmony export testReset */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mbNV");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cYeA");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rKPb");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("CFQC");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("oRPM");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("+rSm");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kCiw");
/* harmony import */ var _utils_focusVisible__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("mspF");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("rbxJ");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LMpM");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];















function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      flip: false,
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      marginLeft: 4,
      marginRight: 4,
      width: '2em',
      height: '1em',
      '&::before': {
        flip: false,
        borderWidth: '0 1em 1em 1em',
        borderColor: 'transparent transparent currentcolor transparent'
      }
    },
    '&[x-placement*="top"] $arrow': {
      flip: false,
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      marginLeft: 4,
      marginRight: 4,
      width: '2em',
      height: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 1em 0 1em',
        borderColor: 'currentcolor transparent transparent transparent'
      }
    },
    '&[x-placement*="right"] $arrow': {
      flip: false,
      left: 0,
      marginLeft: '-0.95em',
      marginTop: 4,
      marginBottom: 4,
      height: '2em',
      width: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 1em 1em 0',
        borderColor: 'transparent currentcolor transparent transparent'
      }
    },
    '&[x-placement*="left"] $arrow': {
      flip: false,
      right: 0,
      marginRight: '-0.95em',
      marginTop: 4,
      marginBottom: 4,
      height: '2em',
      width: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 0 1em 1em',
        borderColor: 'transparent transparent transparent currentcolor'
      }
    }
  };
}

const styles = theme => ({
  /* Styles applied to the Popper component. */
  popper: {
    zIndex: theme.zIndex.tooltip,
    pointerEvents: 'none',
    flip: false // disable jss-rtl plugin

  },

  /* Styles applied to the Popper component if `interactive={true}`. */
  popperInteractive: {
    pointerEvents: 'auto'
  },

  /* Styles applied to the Popper component if `arrow={true}`. */
  popperArrow: arrowGenerator(),

  /* Styles applied to the tooltip (label wrapper) element. */
  tooltip: {
    backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.grey[700], 0.9),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    padding: '4px 8px',
    fontSize: theme.typography.pxToRem(10),
    lineHeight: `${round(14 / 10)}em`,
    maxWidth: 300,
    wordWrap: 'break-word',
    fontWeight: theme.typography.fontWeightMedium
  },

  /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
  tooltipArrow: {
    position: 'relative',
    margin: '0'
  },

  /* Styles applied to the arrow element. */
  arrow: {
    position: 'absolute',
    fontSize: 6,
    color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.grey[700], 0.9),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  },

  /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
  touch: {
    padding: '8px 16px',
    fontSize: theme.typography.pxToRem(14),
    lineHeight: `${round(16 / 14)}em`,
    fontWeight: theme.typography.fontWeightRegular
  },

  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
  tooltipPlacementLeft: {
    transformOrigin: 'right center',
    margin: '0 24px ',
    [theme.breakpoints.up('sm')]: {
      margin: '0 14px'
    }
  },

  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
  tooltipPlacementRight: {
    transformOrigin: 'left center',
    margin: '0 24px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 14px'
    }
  },

  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
  tooltipPlacementTop: {
    transformOrigin: 'center bottom',
    margin: '24px 0',
    [theme.breakpoints.up('sm')]: {
      margin: '14px 0'
    }
  },

  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
  tooltipPlacementBottom: {
    transformOrigin: 'center top',
    margin: '24px 0',
    [theme.breakpoints.up('sm')]: {
      margin: '14px 0'
    }
  }
});
let hystersisOpen = false;
let hystersisTimer = null;
function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}
const Tooltip = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tooltip(props, ref) {
  const {
    arrow = false,
    children,
    classes,
    disableFocusListener = false,
    disableHoverListener = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    id: idProp,
    interactive = false,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperProps,
    title,
    TransitionComponent = _Grow__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    TransitionProps
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);

  const theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])();
  const [childNode, setChildNode] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]();
  const [arrowRef, setArrowRef] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](null);
  const ignoreNonTouchEvents = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);
  const closeTimer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const enterTimer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const leaveTimer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const touchTimer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const [openState, setOpenState] = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])({
    controlled: openProp,
    default: false,
    name: 'Tooltip'
  });
  let open = openState;

  if (false) {}

  const [defaultId, setDefaultId] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]();
  const id = idProp || defaultId;
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (!open || defaultId) {
      return;
    } // Fallback to this default id when possible.
    // Use the random value for client-side rendering only.
    // We can't use it server-side.


    setDefaultId(`mui-tooltip-${Math.round(Math.random() * 1e5)}`);
  }, [open, defaultId]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);

  const handleOpen = event => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleEnter = event => {
    const childrenProps = children.props;

    if (event.type === 'mouseover' && childrenProps.onMouseOver && event.currentTarget === childNode) {
      childrenProps.onMouseOver(event);
    }

    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    } // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).


    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hystersisOpen && enterNextDelay) {
      event.persist();
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const {
    isFocusVisible,
    onBlurVisible,
    ref: focusVisibleRef
  } = Object(_utils_focusVisible__WEBPACK_IMPORTED_MODULE_14__[/* useIsFocusVisible */ "a"])();
  const [childIsFocusVisible, setChildIsFocusVisible] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false);

  const handleBlur = () => {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };

  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    if (isFocusVisible(event)) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }

    const childrenProps = children.props;

    if (childrenProps.onFocus && event.currentTarget === childNode) {
      childrenProps.onFocus(event);
    }
  };

  const handleClose = event => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);

    if (onClose) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };

  const handleLeave = event => {
    const childrenProps = children.props;

    if (event.type === 'blur') {
      if (childrenProps.onBlur && event.currentTarget === childNode) {
        childrenProps.onBlur(event);
      }

      handleBlur(event);
    }

    if (event.type === 'mouseleave' && childrenProps.onMouseLeave && event.currentTarget === childNode) {
      childrenProps.onMouseLeave(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const handleTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }

    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(() => {
      handleEnter(event);
    }, enterTouchDelay);
  };

  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };

  const handleUseRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(setChildNode, ref);
  const handleFocusRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(focusVisibleRef, handleUseRef); // can be removed once we drop support for non ref forwarding class components

  const handleOwnRef = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](instance => {
    // #StrictMode ready
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(handleFocusRef, react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](instance));
  }, [handleFocusRef]);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(children.ref, handleOwnRef); // There is no point in displaying an empty tooltip.

  if (title === '') {
    open = false;
  } // For accessibility and SEO concerns, we render the title to the DOM node when
  // the tooltip is hidden. However, we have made a tradeoff when
  // `disableHoverListener` is set. This title logic is disabled.
  // It's allowing us to keep the implementation size minimal.
  // We are open to change the tradeoff.


  const shouldShowNativeTitle = !open && !disableHoverListener;

  const childrenProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    'aria-describedby': open ? id : null,
    title: shouldShowNativeTitle && typeof title === 'string' ? title : null
  }, other, {}, children.props, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(other.className, children.props.className)
  });

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus;
    childrenProps.onBlur = handleLeave;
  }

  const interactiveWrapperListeners = interactive ? {
    onMouseOver: childrenProps.onMouseOver,
    onMouseLeave: childrenProps.onMouseLeave,
    onFocus: childrenProps.onFocus,
    onBlur: childrenProps.onBlur
  } : {};

  if (false) {}

  const mergedPopperProps = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](() => {
    return Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef
          }
        }
      }
    }, PopperProps);
  }, [arrowRef, PopperProps]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    ref: handleRef
  }, childrenProps)), __jsx(_Popper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.popper, interactive && classes.popperInteractive, arrow && classes.popperArrow),
    placement: placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps['aria-describedby'],
    transition: true
  }, interactiveWrapperListeners, mergedPopperProps), ({
    placement: placementInner,
    TransitionProps: TransitionPropsInner
  }) => __jsx(TransitionComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    timeout: theme.transitions.duration.shorter
  }, TransitionPropsInner, TransitionProps), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.tooltip, classes[`tooltipPlacement${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(placementInner.split('-')[0])}`], ignoreNonTouchEvents.current && classes.touch, arrow && classes.tooltipArrow)
  }, title, arrow ? __jsx("span", {
    className: classes.arrow,
    ref: setArrowRef
  }) : null))));
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiTooltip'
})(Tooltip));

/***/ })

/******/ });