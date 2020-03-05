exports.ids = [288];
exports.modules = {

/***/ "+NIe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bZJ2");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FdmI");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("25Ld");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+rSm");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];




function getStyleValue(computedStyle, property) {
  return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(computedStyle[property], 10) || 0;
}

const useEnhancedEffect = false ? undefined : react__WEBPACK_IMPORTED_MODULE_4__["useEffect"];
const styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
const TextareaAutosize = react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function TextareaAutosize(props, ref) {
  const {
    onChange,
    rows,
    rowsMax,
    rowsMin: rowsMinProp = 1,
    style,
    value
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  const rowsMin = rows || rowsMinProp;
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](value != null);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  const handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ref, inputRef);
  const shadowRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  const renders = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](0);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_4__["useState"]({});
  const syncHeight = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](() => {
    const input = inputRef.current;
    const computedStyle = window.getComputedStyle(input);
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';
    const boxSizing = computedStyle['box-sizing'];
    const padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    const border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    const innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    let outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(prevState => {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle
        };
      }

      if (false) {}

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    const handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(() => {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(() => {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    renders.current = 0;
  }, [value]);

  const handleChange = event => {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, __jsx("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), __jsx("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, styles.shadow, {}, style)
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (TextareaAutosize);

/***/ }),

/***/ "ADfD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formControlState; });
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "PiP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppSearch; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bZJ2");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bzos");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("95Dg");
/* harmony import */ var fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _packages_material_ui_src_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LHO+");
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yZEQ");
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cYeA");
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LMpM");
/* harmony import */ var _packages_material_ui_src_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dml9");
/* harmony import */ var _packages_material_ui_icons_src_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("woQm");
/* harmony import */ var _MarkdownLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("RJzw");
/* harmony import */ var docsearch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("wy4x");
/* harmony import */ var docsearch_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(docsearch_js__WEBPACK_IMPORTED_MODULE_12__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const useStyles = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(theme => ({
  '@global': {
    '.algolia-autocomplete': {
      '& .ds-dropdown-menu': {
        boxShadow: theme.shadows[1],
        borderRadius: theme.shape.borderRadius,
        '&::before': {
          display: 'none'
        },
        '& [class^=ds-dataset-]': {
          border: 0,
          maxHeight: 'calc(100vh - 100px)',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper
        }
      },
      '& .algolia-docsearch-suggestion--category-header-lvl0': {
        color: theme.palette.text.primary
      },
      '& .algolia-docsearch-suggestion .algolia-docsearch-suggestion--subcategory-column': {
        opacity: 1,
        padding: '5.33px 10.66px',
        textAlign: 'right',
        width: '25%'
      },
      '& .algolia-docsearch-suggestion .algolia-docsearch-suggestion--content': {
        float: 'right',
        padding: '5.33px 0 5.33px 10.66px',
        width: '75%'
      },
      '& .algolia-docsearch-suggestion--subcategory-column-text': {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular
      },
      '& .algolia-docsearch-suggestion--highlight': {
        color: theme.palette.type === 'light' ? '#174d8c' : '#acccf1'
      },
      '& .algolia-docsearch-suggestion': {
        textDecoration: 'none',
        backgroundColor: theme.palette.background.paper
      },
      '& .algolia-docsearch-suggestion--title': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, theme.typography.h6, {
        color: theme.palette.text.primary
      }),
      '& .algolia-docsearch-suggestion--text': Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, theme.typography.body2, {
        color: theme.palette.text.secondary
      }),
      '&& .algolia-docsearch-suggestion--no-results': {
        width: '100%',
        '&::before': {
          display: 'none'
        }
      },
      '& .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion--content': {
        backgroundColor: `${theme.palette.action.selected} !important`
      }
    }
  },
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.common.white, 0.25)
    },
    '& $inputInput': {
      transition: theme.transitions.create('width'),
      width: 120,
      '&:focus': {
        width: 170
      }
    }
  },
  search: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 9)
  }
}), {
  name: 'AppSearch'
});
/**
 * When using this component it is recommend to include a preload link
 * `<link rel="preload" href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" as="style" />`
 * to potentially reduce load times
 */

var _ref = __jsx(_packages_material_ui_icons_src_Search__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null);

function AppSearch() {
  const classes = useStyles();
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  const theme = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])();
  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options.userLanguage);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const styleNode = Object(fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4__["loadCSS"])('https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css', document.querySelector('#app-search'));
    return () => {
      styleNode.parentElement.removeChild(styleNode);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const handleKeyDown = event => {
      // Use event.keyCode to support IE 11
      if ([191, // '/'
      83 // 's'
      ].indexOf(event.keyCode) !== -1 && document.activeElement.nodeName === 'BODY' && document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const desktop = Object(_packages_material_ui_src_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(theme.breakpoints.up('sm'));
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (desktop) {
      // This assumes that by the time this effect runs the Input component is committed
      // this holds true as long as the effect and the component are in the same
      // suspense boundary. If you move effect and component apart be sure to check
      // that this assumption still holds
      const search = docsearch_js__WEBPACK_IMPORTED_MODULE_12___default()({
        apiKey: '1d8534f83b9b0cfea8f16498d19fbcab',
        indexName: 'material-ui',
        inputSelector: '#docsearch-input',
        algoliaOptions: {
          facetFilters: ['version:master', `language:${userLanguage}`]
        },
        autocompleteOptions: {
          openOnFocus: true
        },
        handleSelected: (input, event, suggestion) => {
          event.button = 0;
          const parseUrl = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(suggestion.url);
          Object(_MarkdownLinks__WEBPACK_IMPORTED_MODULE_11__[/* handleEvent */ "b"])(event, parseUrl.pathname + parseUrl.hash);
          input.close();
        } // debug: true, // Set debug to true if you want to inspect the dropdown.

      });
      search.autocomplete.on('autocomplete:cursorchanged', event => {
        const combobox = event.target;
        const selectedOptionNode = document.getElementById(combobox.getAttribute('aria-activedescendant'));
        const listboxNode = document.querySelector('.ds-suggestions').parentElement;

        if (selectedOptionNode === null || listboxNode === null) {
          if (false) {}

          return;
        } // Scroll active descendant into view.
        // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
        //
        // Consider this API instead once it has a better browser support:
        // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });


        if (listboxNode.scrollHeight > listboxNode.clientHeight) {
          const element = selectedOptionNode;
          const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
          const elementBottom = element.offsetTop + element.offsetHeight;

          if (elementBottom > scrollBottom) {
            listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
          } else if (element.offsetTop < listboxNode.scrollTop) {
            listboxNode.scrollTop = element.offsetTop;
          }
        }
      });
    }
  }, [desktop, userLanguage]);
  return __jsx("div", {
    className: classes.root,
    style: {
      display: desktop ? 'flex' : 'none'
    }
  }, __jsx("div", {
    className: classes.search
  }, _ref), __jsx(_packages_material_ui_src_Input__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    disableUnderline: true,
    placeholder: "Search\u2026",
    inputProps: {
      'aria-label': 'Search'
    },
    type: "search",
    id: "docsearch-input",
    inputRef: inputRef,
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    }
  }));
}

/***/ }),

/***/ "c3Nm":
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
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ADfD");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zpLS");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XpU0");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rKPb");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+rSm");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+NIe");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("imrm");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */










const styles = theme => {
  const light = theme.palette.type === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: '0 !important'
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {
        from: {}
      },
      '@keyframes mui-auto-fill-cancel': {
        from: {}
      }
    },

    /* Styles applied to the root element. */
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1875em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: `${8 - 2}px 0 ${8 - 1}px`,
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: `${8 - 2}px 0 ${8 - 1}px`,
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1875em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
const useEnhancedEffect = true ? react__WEBPACK_IMPORTED_MODULE_3__["useEffect"] : undefined;
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

const InputBase = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function InputBase(props, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    autoComplete,
    autoFocus,
    classes,
    className,
    color,
    defaultValue,
    disabled,
    endAdornment,
    error,
    fullWidth = false,
    id,
    inputComponent = 'input',
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    margin,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    rowsMax,
    rowsMin,
    startAdornment,
    type = 'text',
    value: valueProp
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](value != null);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  const handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](instance => {
    if (false) {}
  }, []);
  const handleInputPropsRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(inputPropsProp.ref, handleInputRefWarning);
  const handleInputRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(inputRefProp, handleInputPropsRefProp);
  const handleInputRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(inputRef, handleInputRefProp);
  const [focused, setFocused] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false);
  const muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__[/* useFormControl */ "b"])();

  if (false) {}

  const fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
    props,
    muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](obj => {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* isFilled */ "b"])(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);

  const handleFocus = event => {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;

      if (element == null) {
        throw new TypeError('Material-UI: Expected valid input target. ' + 'Did you use a custom `inputComponent` and forget to forward refs? ' + 'See https://material-ui.com/r/input-component-ref-interface for more info.');
      }

      checkDirty({
        value: element.value
      });
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    } // Perform in the willUpdate


    if (onChange) {
      onChange(event, ...args);
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = event => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  let InputComponent = inputComponent;

  let inputProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
        rows,
        rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"];
    }
  } else {
    inputProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      type
    }, inputProps);
  }

  const handleAutoFill = event => {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes[`color${Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(fcs.color || 'primary')}`], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, __jsx(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
    value: null
  }, __jsx(InputComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, fcs, {
    startAdornment
  })) : null);
});
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "dml9":
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
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c3Nm");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XpU0");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];





const styles = theme => {
  const light = theme.palette.type === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: `1px solid ${bottomLineColor}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: `1px solid ${bottomLineColor}`
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
const Input = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Input(props, ref) {
  const {
    disableUnderline,
    classes,
    fullWidth = false,
    inputComponent = 'input',
    multiline = false,
    type = 'text'
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return __jsx(_InputBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    classes: Object(_babel_runtime_corejs2_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, classes, {
      root: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "imrm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAdornedStart; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s20r");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

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

/***/ "zpLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

const FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (false) {}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FormControlContext);
}
/* harmony default export */ __webpack_exports__["a"] = (FormControlContext);

/***/ })

};;