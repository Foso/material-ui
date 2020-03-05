module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+AD9":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-css");

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


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

/***/ "12zn":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"crwdns99822:0crwdne99822:0\",\"helpToTranslate\":\"crwdns100754:0crwdne100754:0\",\"editWebsiteColors\":\"crwdns99824:0crwdne99824:0\",\"useDarkTheme\":\"crwdns107927:0crwdne107927:0\",\"toggleTheme\":\"crwdns103670:0crwdne103670:0\",\"toggleRTL\":\"crwdns103672:0crwdne103672:0\",\"toggleNotifications\":\"crwdns109565:0crwdne109565:0\",\"github\":\"crwdns99830:0crwdne99830:0\",\"strapline\":\"crwdns99832:0crwdne99832:0\",\"getStarted\":\"crwdns99834:0crwdne99834:0\",\"installation\":\"crwdns99836:0crwdne99836:0\",\"installDescr\":\"crwdns99838:0crwdne99838:0\",\"cdn\":\"crwdns99840:0crwdne99840:0\",\"loadFont\":\"crwdns99842:0crwdne99842:0\",\"installButton\":\"crwdns99844:0crwdne99844:0\",\"usage\":\"crwdns99846:0crwdne99846:0\",\"usageDescr\":\"crwdns99848:0crwdne99848:0\",\"usageButton\":\"crwdns99850:0crwdne99850:0\",\"themes\":\"crwdns99852:0crwdne99852:0\",\"themesDescr\":\"crwdns108805:0crwdne108805:0\",\"themesButton\":\"crwdns99856:0crwdne99856:0\",\"whosUsing\":\"crwdns99858:0crwdne99858:0\",\"joinThese\":\"crwdns99860:0crwdne99860:0\",\"usingMui\":\"crwdns99862:0crwdne99862:0\",\"letUsKnow\":\"crwdns99864:0crwdne99864:0\",\"praise\":\"crwdns108807:0crwdne108807:0\",\"praiseDescr\":\"crwdns108809:0crwdne108809:0\",\"footerCommunity\":\"crwdns102246:0crwdne102246:0\",\"footerResources\":\"crwdns102248:0crwdne102248:0\",\"footerCompany\":\"crwdns107571:0crwdne107571:0\",\"homeFooterRelease\":\"crwdns99876:0{{versionNumber}}crwdnd99876:0{{license}}crwdne99876:0\",\"license\":\"crwdns99878:0crwdne99878:0\",\"likeMui\":\"crwdns99880:0crwdne99880:0\",\"adblock\":\"crwdns99882:0crwdne99882:0\",\"thanks\":\"crwdns99884:0crwdne99884:0\",\"editPage\":\"crwdns99886:0crwdne99886:0\",\"tableOfContents\":\"crwdns99888:0crwdne99888:0\",\"sourceCode\":\"crwdns99890:0crwdne99890:0\",\"traffic\":\"crwdns99892:0crwdne99892:0\",\"newest\":\"crwdns99894:0crwdne99894:0\",\"stars\":\"crwdns99896:0crwdne99896:0\",\"visit\":\"crwdns99898:0crwdne99898:0\",\"dashboardTitle\":\"crwdns99900:0crwdne99900:0\",\"dashboardDescr\":\"crwdns99902:0crwdne99902:0\",\"signInTitle\":\"crwdns99904:0crwdne99904:0\",\"signInDescr\":\"crwdns99906:0crwdne99906:0\",\"signInSideTitle\":\"crwdns99908:0crwdne99908:0\",\"signInSideDescr\":\"crwdns99910:0crwdne99910:0\",\"signUpTitle\":\"crwdns99912:0crwdne99912:0\",\"signUpDescr\":\"crwdns99914:0crwdne99914:0\",\"blogTitle\":\"crwdns99916:0crwdne99916:0\",\"blogDescr\":\"crwdns99918:0crwdne99918:0\",\"checkoutTitle\":\"crwdns99920:0crwdne99920:0\",\"checkoutDescr\":\"crwdns99922:0crwdne99922:0\",\"albumTitle\":\"crwdns99924:0crwdne99924:0\",\"albumDescr\":\"crwdns99926:0crwdne99926:0\",\"pricingTitle\":\"crwdns99928:0crwdne99928:0\",\"pricingDescr\":\"crwdns99930:0crwdne99930:0\",\"stickyFooterTitle\":\"crwdns99932:0crwdne99932:0\",\"stickyFooterDescr\":\"crwdns99934:0crwdne99934:0\",\"expandAll\":\"crwdns99936:0crwdne99936:0\",\"showSource\":\"crwdns99938:0crwdne99938:0\",\"hideSource\":\"crwdns99940:0crwdne99940:0\",\"showFullSource\":\"crwdns103874:0crwdne103874:0\",\"hideFullSource\":\"crwdns103876:0crwdne103876:0\",\"viewGitHub\":\"crwdns99942:0crwdne99942:0\",\"codesandbox\":\"crwdns99944:0crwdne99944:0\",\"seeMore\":\"crwdns99946:0crwdne99946:0\",\"copySource\":\"crwdns99948:0crwdne99948:0\",\"copiedSource\":\"crwdns107929:0crwdne107929:0\",\"copySourceLinkJS\":\"crwdns99950:0crwdne99950:0\",\"copySourceLinkTS\":\"crwdns99952:0crwdne99952:0\",\"copiedSourceLink\":\"crwdns107931:0crwdne107931:0\",\"stackblitz\":\"crwdns99954:0crwdne99954:0\",\"headTitle\":\"crwdns99956:0crwdne99956:0\",\"emojiLove\":\"crwdns99958:0crwdne99958:0\",\"emoojiWarning\":\"crwdns99960:0crwdne99960:0\",\"mainNavigation\":\"crwdns99962:0crwdne99962:0\",\"skipToContent\":\"crwdns99964:0crwdne99964:0\",\"openDrawer\":\"crwdns99966:0crwdne99966:0\",\"changeLanguage\":\"crwdns99968:0crwdne99968:0\",\"pageTOC\":\"crwdns99970:0crwdne99970:0\",\"showJSSource\":\"crwdns99972:0crwdne99972:0\",\"showTSSource\":\"crwdns99974:0crwdne99974:0\",\"close\":\"crwdns99976:0crwdne99976:0\",\"useHighDensity\":\"crwdns99978:0crwdne99978:0\",\"spacingUnit\":\"crwdns99980:0crwdne99980:0\",\"resetDensity\":\"crwdns99982:0crwdne99982:0\",\"increaseSpacing\":\"crwdns99984:0crwdne99984:0\",\"decreaseSpacing\":\"crwdns99986:0crwdne99986:0\",\"getProfessionalSupport\":\"crwdns103878:0crwdne103878:0\",\"diamondSponsors\":\"crwdns105090:0crwdne105090:0\",\"pages\":{\"/getting-started\":\"crwdns99988:0crwdne99988:0\",\"/getting-started/installation\":\"crwdns99990:0crwdne99990:0\",\"/getting-started/usage\":\"crwdns99992:0crwdne99992:0\",\"/getting-started/example-projects\":\"crwdns99994:0crwdne99994:0\",\"/getting-started/templates\":\"crwdns99996:0crwdne99996:0\",\"/getting-started/learn\":\"crwdns99998:0crwdne99998:0\",\"/getting-started/faq\":\"crwdns100000:0crwdne100000:0\",\"/getting-started/supported-components\":\"crwdns100002:0crwdne100002:0\",\"/getting-started/supported-platforms\":\"crwdns100004:0crwdne100004:0\",\"/getting-started/support\":\"crwdns102250:0crwdne102250:0\",\"/components\":\"crwdns100006:0crwdne100006:0\",\"/components/about-the-lab\":\"crwdns100008:0crwdne100008:0\",\"/components/click-away-listener\":\"crwdns100010:0crwdne100010:0\",\"/component/about\":\"crwdns100012:0crwdne100012:0\",\"/components/app-bar\":\"crwdns100014:0crwdne100014:0\",\"/components/autocomplete\":\"crwdns100016:0crwdne100016:0\",\"/components/avatars\":\"crwdns106385:0crwdne106385:0\",\"/components/badges\":\"crwdns106387:0crwdne106387:0\",\"/components/basic-inputs\":\"crwdns100022:0crwdne100022:0\",\"/components/bottom-navigation\":\"crwdns100024:0crwdne100024:0\",\"/components/box\":\"crwdns100026:0crwdne100026:0\",\"/components/breadcrumbs\":\"crwdns100028:0crwdne100028:0\",\"/components/buttons\":\"crwdns106389:0crwdne106389:0\",\"/components/cards\":\"crwdns106391:0crwdne106391:0\",\"/components/checkboxes\":\"crwdns106393:0crwdne106393:0\",\"/components/chips\":\"crwdns106395:0crwdne106395:0\",\"/components/container\":\"crwdns100038:0crwdne100038:0\",\"/components/content\":\"crwdns100040:0crwdne100040:0\",\"/components/css-baseline\":\"crwdns100042:0crwdne100042:0\",\"/components/data-display\":\"crwdns100044:0crwdne100044:0\",\"/components/dialogs\":\"crwdns106397:0crwdne106397:0\",\"/components/dividers\":\"crwdns106399:0crwdne106399:0\",\"/components/drawers\":\"crwdns106401:0crwdne106401:0\",\"/components/expansion-panels\":\"crwdns106403:0crwdne106403:0\",\"/components/feedback\":\"crwdns100054:0crwdne100054:0\",\"/components/grid\":\"crwdns100056:0crwdne100056:0\",\"/components/hidden\":\"crwdns100058:0crwdne100058:0\",\"/components/grid-list\":\"crwdns100060:0crwdne100060:0\",\"/components/icons\":\"crwdns100062:0crwdne100062:0\",\"/components/inputs\":\"crwdns100064:0crwdne100064:0\",\"/components/lab\":\"crwdns100066:0crwdne100066:0\",\"/components/layout\":\"crwdns100068:0crwdne100068:0\",\"/components/links\":\"crwdns106405:0crwdne106405:0\",\"/components/lists\":\"crwdns106407:0crwdne106407:0\",\"/components/menus\":\"crwdns106409:0crwdne106409:0\",\"/components/modal\":\"crwdns100076:0crwdne100076:0\",\"/components/navigation\":\"crwdns100078:0crwdne100078:0\",\"/components/no-ssr\":\"crwdns100080:0crwdne100080:0\",\"/components/other\":\"crwdns100082:0crwdne100082:0\",\"/components/paper\":\"crwdns100084:0crwdne100084:0\",\"/components/pickers\":\"crwdns100756:0crwdne100756:0\",\"/components/popover\":\"crwdns100088:0crwdne100088:0\",\"/components/popper\":\"crwdns100090:0crwdne100090:0\",\"/components/portal\":\"crwdns100092:0crwdne100092:0\",\"/components/progress\":\"crwdns100094:0crwdne100094:0\",\"/components/progress-validation\":\"crwdns100096:0crwdne100096:0\",\"/components/radio-buttons\":\"crwdns106411:0crwdne106411:0\",\"/components/selects\":\"crwdns106413:0crwdne106413:0\",\"/components/slider\":\"crwdns100104:0crwdne100104:0\",\"/components/snackbars\":\"crwdns106415:0crwdne106415:0\",\"/components/speed-dial\":\"crwdns100108:0crwdne100108:0\",\"/components/steppers\":\"crwdns106417:0crwdne106417:0\",\"/components/surfaces\":\"crwdns100112:0crwdne100112:0\",\"/components/switches\":\"crwdns106419:0crwdne106419:0\",\"/components/tables\":\"crwdns106421:0crwdne106421:0\",\"/components/tabs\":\"crwdns100118:0crwdne100118:0\",\"/components/text-fields\":\"crwdns106423:0crwdne106423:0\",\"/components/toggle-button\":\"crwdns100122:0crwdne100122:0\",\"/components/tooltips\":\"crwdns106425:0crwdne106425:0\",\"/components/transfer-list\":\"crwdns100126:0crwdne100126:0\",\"/components/transitions\":\"crwdns100128:0crwdne100128:0\",\"/components/typography\":\"crwdns100130:0crwdne100130:0\",\"/components/use-media-query\":\"crwdns100132:0crwdne100132:0\",\"/components/utils\":\"crwdns100134:0crwdne100134:0\",\"/css-in-js\":\"crwdns100136:0crwdne100136:0\",\"/css-in-js/basics\":\"crwdns100138:0crwdne100138:0\",\"/css-in-js/advanced\":\"crwdns100140:0crwdne100140:0\",\"/system\":\"crwdns100142:0crwdne100142:0\",\"/system/basics\":\"crwdns100144:0crwdne100144:0\",\"/system/borders\":\"crwdns100146:0crwdne100146:0\",\"/system/display\":\"crwdns100148:0crwdne100148:0\",\"/system/flexbox\":\"crwdns100150:0crwdne100150:0\",\"/system/palette\":\"crwdns100152:0crwdne100152:0\",\"/system/positions\":\"crwdns100154:0crwdne100154:0\",\"/system/shadows\":\"crwdns100156:0crwdne100156:0\",\"/system/sizing\":\"crwdns100158:0crwdne100158:0\",\"/system/spacing\":\"crwdns100160:0crwdne100160:0\",\"/system/typography\":\"crwdns100162:0crwdne100162:0\",\"/customization\":\"crwdns100164:0crwdne100164:0\",\"/customization/theming\":\"crwdns100758:0crwdne100758:0\",\"/customization/theme\":\"crwdns106427:0crwdne106427:0\",\"/customization/breakpoints\":\"crwdns100168:0crwdne100168:0\",\"/customization/color\":\"crwdns100170:0crwdne100170:0\",\"/customization/palette\":\"crwdns100174:0crwdne100174:0\",\"/customization/type\":\"crwdns100176:0crwdne100176:0\",\"/customization/typography\":\"crwdns100178:0crwdne100178:0\",\"/customization/spacing\":\"crwdns100180:0crwdne100180:0\",\"/customization/z-index\":\"crwdns100182:0crwdne100182:0\",\"/customization/globals\":\"crwdns100184:0crwdne100184:0\",\"/customization/components\":\"crwdns100186:0crwdne100186:0\",\"/customization/default-theme\":\"crwdns100188:0crwdne100188:0\",\"/guides\":\"crwdns100190:0crwdne100190:0\",\"/guides/api\":\"crwdns100192:0crwdne100192:0\",\"/guides/typescript\":\"crwdns100194:0crwdne100194:0\",\"/guides/interoperability\":\"crwdns100196:0crwdne100196:0\",\"/guides/minimizing-bundle-size\":\"crwdns100198:0crwdne100198:0\",\"/guides/composition\":\"crwdns100200:0crwdne100200:0\",\"/guides/responsive-ui\":\"crwdns100202:0crwdne100202:0\",\"/guides/server-rendering\":\"crwdns100204:0crwdne100204:0\",\"/guides/migration-v3\":\"crwdns100206:0crwdne100206:0\",\"/guides/migration-v0x\":\"crwdns100208:0crwdne100208:0\",\"/guides/testing\":\"crwdns100210:0crwdne100210:0\",\"/guides/flow\":\"crwdns100212:0crwdne100212:0\",\"/guides/right-to-left\":\"crwdns100214:0crwdne100214:0\",\"/guides/localization\":\"crwdns105309:0crwdne105309:0\",\"/discover-more\":\"crwdns100216:0crwdne100216:0\",\"/discover-more/showcase\":\"crwdns100218:0crwdne100218:0\",\"/discover-more/related-projects\":\"crwdns100220:0crwdne100220:0\",\"/discover-more/roadmap\":\"crwdns100222:0crwdne100222:0\",\"/discover-more/backers\":\"crwdns100224:0crwdne100224:0\",\"/discover-more/vision\":\"crwdns100226:0crwdne100226:0\",\"/discover-more/team\":\"crwdns100228:0crwdne100228:0\",\"/discover-more/community\":\"crwdns100230:0crwdne100230:0\",\"/discover-more/changelog\":\"crwdns100232:0crwdne100232:0\",\"/discover-more/languages\":\"crwdns100236:0crwdne100236:0\",\"/versions\":\"crwdns100238:0crwdne100238:0\",\"/styles\":\"crwdns100240:0crwdne100240:0\",\"/styles/basics\":\"crwdns100242:0crwdne100242:0\",\"/styles/advanced\":\"crwdns100244:0crwdne100244:0\",\"https://themes.material-ui.com/\":\"crwdns100246:0crwdne100246:0\",\"/components/material-icons\":\"crwdns100760:0crwdne100760:0\",\"/components/textarea-autosize\":\"crwdns100762:0crwdne100762:0\",\"/components/rating\":\"crwdns100764:0crwdne100764:0\",\"/components/skeleton\":\"crwdns100766:0crwdne100766:0\",\"/components/tree-view\":\"crwdns100768:0crwdne100768:0\",\"/customization/density\":\"crwdns100770:0crwdne100770:0\"}}");

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

/***/ "1BH+":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"Ein schnelles Wort von unseren Sponsoren:\",\"helpToTranslate\":\"Hilf beim Übersetzen\",\"editWebsiteColors\":\"Farbschema der Seite bearbeiten\",\"useDarkTheme\":\"Dunkles Design verwenden\",\"toggleTheme\":\"helles/dunkles Thema umschalten\",\"toggleRTL\":\"rechtsläufig/linksläufig umschalten\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"GitHub-Repository\",\"strapline\":\"React Komponenten für schnellere und einfachere Web-Entwicklung. Bauen Sie ihr eigenes Design-System oder starten Sie mit Material Design.\",\"getStarted\":\"Erste Schritte\",\"installation\":\"Installation\",\"installDescr\":\"Installieren sie Material-UI via npm. Wir kümmern uns um das benötigte CSS.\",\"cdn\":\"oder benutzen Sie ein CDN.\",\"loadFont\":\"Laden Sie die Standard Roboto Schriftart.\",\"installButton\":\"Lesen Sie die Installationsschritte\",\"usage\":\"Nutzung\",\"usageDescr\":\"Material-UI Komponenten funktionieren ohne zusätzliche Einrichtung und verändern keine Variablen im globalen Sichtbarkeitsbereich.\",\"usageButton\":\"Erkunden Sie die Dokumentation\",\"themes\":\"Premium Themen\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"themesButton\":\"Themen durchsuchen\",\"whosUsing\":\"Wer nutzt Material-UI?\",\"joinThese\":\"Treten Sie dieser oder anderer großartiger Organisationen bei!\",\"usingMui\":\"Nutzen Sie Material-UI?\",\"letUsKnow\":\"Lassen Sie es uns wissen!\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"footerCommunity\":\"Gemeinschaft\",\"footerResources\":\"Ressourcen\",\"footerCompany\":\"Unternehmen\",\"homeFooterRelease\":\"Aktuell {{versionNumber}}. Veröffentlicht unter der {{license}}.\",\"license\":\"MIT-Lizenz\",\"likeMui\":\"Gefällt ihnen Material-UI?\",\"adblock\":\"Wenn ihnen technologie-bezogene Werbung nichts ausmacht und Sie Open Source unterstützen möchten, dann können Sie gern ihren Ad-Blocker für Material-UI deaktivieren.\",\"thanks\":\"Vielen Dank!\",\"editPage\":\"Helfen Sie, diese Seite zu übersetzen\",\"tableOfContents\":\"Inhaltsverzeichnis\",\"sourceCode\":\"Quelltext\",\"traffic\":\"Datenverkehr\",\"newest\":\"neueste\",\"stars\":\"Github-Star\",\"visit\":\"Besuchen sie die Website\",\"dashboardTitle\":\"Dashboard\",\"dashboardDescr\":\"Ein minimales Dashboard mit Taskleiste und einem Drawer in mini Variante. Das Diagramm wurde von Recharts zur Verfügung gestellt, aber es ist leicht ein anderes Paket dafür zu nutzen.\",\"signInTitle\":\"Anmelden\",\"signInDescr\":\"Eine einfache Anmeldeseite.\",\"signInSideTitle\":\"Anmeldeseite\",\"signInSideDescr\":\"Eine einfache Anmeldeseite.\",\"signUpTitle\":\"Registrieren\",\"signUpDescr\":\"Eine einfache Anmeldeseite.\",\"blogTitle\":\"Blog\",\"blogDescr\":\"Ein ausgeklügeltes Blog-Seitenlayout. Markdown-Unterstützung wird von markdown-to-jsx zur Verfügung gestellt, kann jedoch leicht ersetzt werden.\",\"checkoutTitle\":\"Check Out\",\"checkoutDescr\":\"Ein schrittweises Checkout-Seitenlayout. Die Anzahl der Schritte ist anpassbar oder gar komplett optional.\",\"albumTitle\":\"Album\",\"albumDescr\":\"Ein responsives Album- / Galerie-Seitenlayout mit einer \\\"hero unit\\\" und einer Fußzeile.\",\"pricingTitle\":\"Preise\",\"pricingDescr\":\"Erstellen Sie mit diesem Seitenlayout schnell eine effektive Preistabelle für ihre potenziellen Kunden.\",\"stickyFooterTitle\":\"Feste Fußzeile\",\"stickyFooterDescr\":\"Hängen Sie eine Fußzeile am unteren Rand des Ansichtsfensters an, wenn der Seiteninhalt kurz ist.\",\"expandAll\":\"Alles aufklappen\",\"showSource\":\"Quellcode anzeigen\",\"hideSource\":\"Quellcode verstecken\",\"showFullSource\":\"Kompletten Quellcode anzeigen\",\"hideFullSource\":\"Kompletten Quellcode verstecken\",\"viewGitHub\":\"Den Quellcode auf GitHub anzeigen\",\"codesandbox\":\"In CodeSandbox bearbeiten\",\"seeMore\":\"Mehr anzeigen\",\"copySource\":\"Quellcode kopieren\",\"copiedSource\":\"Der Quellcode wurde kopiert.\",\"copySourceLinkJS\":\"Kopiere Link zum JavaScript Quellcode\",\"copySourceLinkTS\":\"Kopiere Link zum TypeScript Quellcode\",\"copiedSourceLink\":\"Der Link zum Quellcode wurde kopiert.\",\"stackblitz\":\"In StackBlitz bearbeiten (nur JS)\",\"headTitle\":\"Material-UI: Ein beliebtes React UI Framework\",\"emojiLove\":\"Liebe\",\"emoojiWarning\":\"Warnung\",\"mainNavigation\":\"Haupt-Navigation\",\"skipToContent\":\"Zu Seitenhinhalt springen\",\"openDrawer\":\"Haupt-Navigation öffnen\",\"changeLanguage\":\"Sprache ändern\",\"pageTOC\":\"Inhaltsverzeichnis der Seite\",\"showJSSource\":\"Quelltext in JavaScript anzeigen\",\"showTSSource\":\"Quelltext in TypeScript anzeigen\",\"close\":\"Schließen\",\"useHighDensity\":\"Höhere Dichte anwenden durch props\",\"spacingUnit\":\"Abstandseinheit\",\"resetDensity\":\"Dichte zurücksetzen\",\"increaseSpacing\":\"Abstand erhöhen\",\"decreaseSpacing\":\"Abstand verringern\",\"getProfessionalSupport\":\"Professionellen Support erhalten\",\"diamondSponsors\":\"Diamant-Sponsoren\",\"pages\":{\"/getting-started\":\"Erste Schritte\",\"/getting-started/installation\":\"Installation\",\"/getting-started/usage\":\"Nutzung\",\"/getting-started/example-projects\":\"Beispielprojekte\",\"/getting-started/templates\":\"Vorlagen\",\"/getting-started/learn\":\"Lernen\",\"/getting-started/faq\":\"Häufige Fragen\",\"/getting-started/supported-components\":\"Unterstützte Komponenten\",\"/getting-started/supported-platforms\":\"Unterstützte Plattformen\",\"/getting-started/support\":\"Unterstützung\",\"/components\":\"Komponenten\",\"/components/about-the-lab\":\"Über das Labor\",\"/components/click-away-listener\":\"Außerhalb Klick Ereignisbehandlungsroutine\",\"/component/about\":\"Über das Labor\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autovervollständigung (Autocomplete)\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Grundlegende Eingaben\",\"/components/bottom-navigation\":\"Bottom Navigation (Untere Navigation)\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Brotkrumen\",\"/components/buttons\":\"Button (schaltfläche)\",\"/components/cards\":\"Card (karte)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Inhalt\",\"/components/css-baseline\":\"CSS-Baseline\",\"/components/data-display\":\"Datenanzeige\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Seitliches Menü (Drawer)\",\"/components/expansion-panels\":\"Expansion Panel (erweiterungspanel)\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Rasterliste (Grid List)\",\"/components/icons\":\"Icons\",\"/components/inputs\":\"Eingaben\",\"/components/lab\":\"Labor\",\"/components/layout\":\"Layout\",\"/components/links\":\"Link\",\"/components/lists\":\"List (liste)\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navigation\",\"/components/no-ssr\":\"NoSSR\",\"/components/other\":\"Sonstiges\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Datum / Zeit\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Fortschritt (Progress)\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Selects (auswähler)\",\"/components/slider\":\"Regler\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Schnellwahl\",\"/components/steppers\":\"Stepper\",\"/components/surfaces\":\"Oberflächen\",\"/components/switches\":\"Switch\",\"/components/tables\":\"Tabelle\",\"/components/tabs\":\"Tabs\",\"/components/text-fields\":\"Textfeld\",\"/components/toggle-button\":\"Schalter\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"Transferliste (Transfer List)\",\"/components/transitions\":\"Übergänge\",\"/components/typography\":\"Typografie\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utils\",\"/css-in-js\":\"Stile\",\"/css-in-js/basics\":\"Grundlegendes\",\"/css-in-js/advanced\":\"Erweitertes\",\"/system\":\"System\",\"/system/basics\":\"Grundlegendes\",\"/system/borders\":\"Rahmen\",\"/system/display\":\"Anzeige\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette\",\"/system/positions\":\"Positionen\",\"/system/shadows\":\"Schatten\",\"/system/sizing\":\"Dimensionierung\",\"/system/spacing\":\"Abstände\",\"/system/typography\":\"Typografie\",\"/customization\":\"Individuelle Anpassung\",\"/customization/theming\":\"Übersicht\",\"/customization/theme\":\"Theming\",\"/customization/breakpoints\":\"Haltepunkte\",\"/customization/color\":\"Farbe (Color)\",\"/customization/palette\":\"Palette\",\"/customization/type\":\"Typ (helles/dunkles Theme)\",\"/customization/typography\":\"Typografie\",\"/customization/spacing\":\"Abstände\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Global\",\"/customization/components\":\"Überschreibungen\",\"/customization/default-theme\":\"Standardtheme\",\"/guides\":\"Leitfäden\",\"/guides/api\":\"API-Design-Ansatz\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interoperabilität der Stilbibliothek\",\"/guides/minimizing-bundle-size\":\"Paketgröße minimieren\",\"/guides/composition\":\"Komposition\",\"/guides/responsive-ui\":\"Responsive UI\",\"/guides/server-rendering\":\"Server-Rendering\",\"/guides/migration-v3\":\"Migration von v3\",\"/guides/migration-v0x\":\"Migration von v0.x\",\"/guides/testing\":\"Testen\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Rechts nach links\",\"/guides/localization\":\"Lokalisierung\",\"/discover-more\":\"Mehr entdecken\",\"/discover-more/showcase\":\"Ausstellung\",\"/discover-more/related-projects\":\"Verwandte Projekte\",\"/discover-more/roadmap\":\"Zeitplan\",\"/discover-more/backers\":\"Sponsoren & Unterstützer\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Team\",\"/discover-more/community\":\"Gemeinschaft\",\"/discover-more/changelog\":\"Änderungen\",\"/discover-more/languages\":\"Sprachen\",\"/versions\":\"Versionen\",\"/styles\":\"Stile\",\"/styles/basics\":\"Grundlegendes\",\"/styles/advanced\":\"Erweitert\",\"https://themes.material-ui.com/\":\"Premium-Themes\",\"/components/material-icons\":\"Material Icons\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Bewertung\",\"/components/skeleton\":\"Skelett\",\"/components/tree-view\":\"Baumstrukturansicht\",\"/customization/density\":\"Dichte\"}}");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("bZJ2");

// EXTERNAL MODULE: ./src/modules/components/bootstrap.js
var bootstrap = __webpack_require__("scDZ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__("6OzC");
var find_default = /*#__PURE__*/__webpack_require__.n(find_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "fg-loadcss/src/loadCSS"
var loadCSS_ = __webpack_require__("95Dg");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "accept-language"
var external_accept_language_ = __webpack_require__("71gp");
var external_accept_language_default = /*#__PURE__*/__webpack_require__.n(external_accept_language_);

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__("q1C7");

// EXTERNAL MODULE: external "jss-rtl"
var external_jss_rtl_ = __webpack_require__("7an5");
var external_jss_rtl_default = /*#__PURE__*/__webpack_require__.n(external_jss_rtl_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/jssPreset/jssPreset.js
var jssPreset = __webpack_require__("+e5d");

// EXTERNAL MODULE: ../packages/material-ui-styles/src/StylesProvider/StylesProvider.js
var StylesProvider = __webpack_require__("IOrS");

// CONCATENATED MODULE: ./src/pages.js

const findPages = [{
  "pathname": "/api-docs",
  "children": [{
    "pathname": "/api-docs/alert"
  }, {
    "pathname": "/api-docs/alert-title"
  }, {
    "pathname": "/api-docs/app-bar"
  }, {
    "pathname": "/api-docs/autocomplete"
  }, {
    "pathname": "/api-docs/avatar"
  }, {
    "pathname": "/api-docs/avatar-group"
  }, {
    "pathname": "/api-docs/backdrop"
  }, {
    "pathname": "/api-docs/badge"
  }, {
    "pathname": "/api-docs/bottom-navigation"
  }, {
    "pathname": "/api-docs/bottom-navigation-action"
  }, {
    "pathname": "/api-docs/breadcrumbs"
  }, {
    "pathname": "/api-docs/button"
  }, {
    "pathname": "/api-docs/button-base"
  }, {
    "pathname": "/api-docs/button-group"
  }, {
    "pathname": "/api-docs/card"
  }, {
    "pathname": "/api-docs/card-action-area"
  }, {
    "pathname": "/api-docs/card-actions"
  }, {
    "pathname": "/api-docs/card-content"
  }, {
    "pathname": "/api-docs/card-header"
  }, {
    "pathname": "/api-docs/card-media"
  }, {
    "pathname": "/api-docs/checkbox"
  }, {
    "pathname": "/api-docs/chip"
  }, {
    "pathname": "/api-docs/circular-progress"
  }, {
    "pathname": "/api-docs/click-away-listener"
  }, {
    "pathname": "/api-docs/collapse"
  }, {
    "pathname": "/api-docs/container"
  }, {
    "pathname": "/api-docs/css-baseline"
  }, {
    "pathname": "/api-docs/dialog"
  }, {
    "pathname": "/api-docs/dialog-actions"
  }, {
    "pathname": "/api-docs/dialog-content"
  }, {
    "pathname": "/api-docs/dialog-content-text"
  }, {
    "pathname": "/api-docs/dialog-title"
  }, {
    "pathname": "/api-docs/divider"
  }, {
    "pathname": "/api-docs/drawer"
  }, {
    "pathname": "/api-docs/expansion-panel"
  }, {
    "pathname": "/api-docs/expansion-panel-actions"
  }, {
    "pathname": "/api-docs/expansion-panel-details"
  }, {
    "pathname": "/api-docs/expansion-panel-summary"
  }, {
    "pathname": "/api-docs/fab"
  }, {
    "pathname": "/api-docs/fade"
  }, {
    "pathname": "/api-docs/filled-input"
  }, {
    "pathname": "/api-docs/form-control"
  }, {
    "pathname": "/api-docs/form-control-label"
  }, {
    "pathname": "/api-docs/form-group"
  }, {
    "pathname": "/api-docs/form-helper-text"
  }, {
    "pathname": "/api-docs/form-label"
  }, {
    "pathname": "/api-docs/grid"
  }, {
    "pathname": "/api-docs/grid-list"
  }, {
    "pathname": "/api-docs/grid-list-tile"
  }, {
    "pathname": "/api-docs/grid-list-tile-bar"
  }, {
    "pathname": "/api-docs/grow"
  }, {
    "pathname": "/api-docs/hidden"
  }, {
    "pathname": "/api-docs/icon"
  }, {
    "pathname": "/api-docs/icon-button"
  }, {
    "pathname": "/api-docs/input"
  }, {
    "pathname": "/api-docs/input-adornment"
  }, {
    "pathname": "/api-docs/input-base"
  }, {
    "pathname": "/api-docs/input-label"
  }, {
    "pathname": "/api-docs/linear-progress"
  }, {
    "pathname": "/api-docs/link"
  }, {
    "pathname": "/api-docs/list"
  }, {
    "pathname": "/api-docs/list-item"
  }, {
    "pathname": "/api-docs/list-item-avatar"
  }, {
    "pathname": "/api-docs/list-item-icon"
  }, {
    "pathname": "/api-docs/list-item-secondary-action"
  }, {
    "pathname": "/api-docs/list-item-text"
  }, {
    "pathname": "/api-docs/list-subheader"
  }, {
    "pathname": "/api-docs/menu"
  }, {
    "pathname": "/api-docs/menu-item"
  }, {
    "pathname": "/api-docs/menu-list"
  }, {
    "pathname": "/api-docs/mobile-stepper"
  }, {
    "pathname": "/api-docs/modal"
  }, {
    "pathname": "/api-docs/native-select"
  }, {
    "pathname": "/api-docs/no-ssr"
  }, {
    "pathname": "/api-docs/outlined-input"
  }, {
    "pathname": "/api-docs/pagination"
  }, {
    "pathname": "/api-docs/pagination-item"
  }, {
    "pathname": "/api-docs/paper"
  }, {
    "pathname": "/api-docs/popover"
  }, {
    "pathname": "/api-docs/popper"
  }, {
    "pathname": "/api-docs/portal"
  }, {
    "pathname": "/api-docs/radio"
  }, {
    "pathname": "/api-docs/radio-group"
  }, {
    "pathname": "/api-docs/rating"
  }, {
    "pathname": "/api-docs/root-ref"
  }, {
    "pathname": "/api-docs/scoped-css-baseline"
  }, {
    "pathname": "/api-docs/select"
  }, {
    "pathname": "/api-docs/skeleton"
  }, {
    "pathname": "/api-docs/slide"
  }, {
    "pathname": "/api-docs/slider"
  }, {
    "pathname": "/api-docs/snackbar"
  }, {
    "pathname": "/api-docs/snackbar-content"
  }, {
    "pathname": "/api-docs/speed-dial"
  }, {
    "pathname": "/api-docs/speed-dial-action"
  }, {
    "pathname": "/api-docs/speed-dial-icon"
  }, {
    "pathname": "/api-docs/step"
  }, {
    "pathname": "/api-docs/step-button"
  }, {
    "pathname": "/api-docs/step-connector"
  }, {
    "pathname": "/api-docs/step-content"
  }, {
    "pathname": "/api-docs/step-icon"
  }, {
    "pathname": "/api-docs/step-label"
  }, {
    "pathname": "/api-docs/stepper"
  }, {
    "pathname": "/api-docs/svg-icon"
  }, {
    "pathname": "/api-docs/swipeable-drawer"
  }, {
    "pathname": "/api-docs/switch"
  }, {
    "pathname": "/api-docs/tab"
  }, {
    "pathname": "/api-docs/table"
  }, {
    "pathname": "/api-docs/table-body"
  }, {
    "pathname": "/api-docs/table-cell"
  }, {
    "pathname": "/api-docs/table-container"
  }, {
    "pathname": "/api-docs/table-footer"
  }, {
    "pathname": "/api-docs/table-head"
  }, {
    "pathname": "/api-docs/table-pagination"
  }, {
    "pathname": "/api-docs/table-row"
  }, {
    "pathname": "/api-docs/table-sort-label"
  }, {
    "pathname": "/api-docs/tabs"
  }, {
    "pathname": "/api-docs/textarea-autosize"
  }, {
    "pathname": "/api-docs/text-field"
  }, {
    "pathname": "/api-docs/toggle-button"
  }, {
    "pathname": "/api-docs/toggle-button-group"
  }, {
    "pathname": "/api-docs/toolbar"
  }, {
    "pathname": "/api-docs/tooltip"
  }, {
    "pathname": "/api-docs/tree-item"
  }, {
    "pathname": "/api-docs/tree-view"
  }, {
    "pathname": "/api-docs/typography"
  }, {
    "pathname": "/api-docs/zoom"
  }]
}, {
  "pathname": "/components",
  "children": [{
    "pathname": "/components/about-the-lab"
  }, {
    "pathname": "/components/alert"
  }, {
    "pathname": "/components/app-bar"
  }, {
    "pathname": "/components/autocomplete"
  }, {
    "pathname": "/components/avatars"
  }, {
    "pathname": "/components/backdrop"
  }, {
    "pathname": "/components/badges"
  }, {
    "pathname": "/components/bottom-navigation"
  }, {
    "pathname": "/components/box"
  }, {
    "pathname": "/components/breadcrumbs"
  }, {
    "pathname": "/components/button-group"
  }, {
    "pathname": "/components/buttons"
  }, {
    "pathname": "/components/cards"
  }, {
    "pathname": "/components/checkboxes"
  }, {
    "pathname": "/components/chips"
  }, {
    "pathname": "/components/click-away-listener"
  }, {
    "pathname": "/components/container"
  }, {
    "pathname": "/components/css-baseline"
  }, {
    "pathname": "/components/dialogs"
  }, {
    "pathname": "/components/dividers"
  }, {
    "pathname": "/components/drawers"
  }, {
    "pathname": "/components/expansion-panels"
  }, {
    "pathname": "/components/floating-action-button"
  }, {
    "pathname": "/components/grid"
  }, {
    "pathname": "/components/grid-list"
  }, {
    "pathname": "/components/hidden"
  }, {
    "pathname": "/components/icons"
  }, {
    "pathname": "/components/links"
  }, {
    "pathname": "/components/lists"
  }, {
    "pathname": "/components/material-icons"
  }, {
    "pathname": "/components/menus"
  }, {
    "pathname": "/components/modal"
  }, {
    "pathname": "/components/no-ssr"
  }, {
    "pathname": "/components/pagination"
  }, {
    "pathname": "/components/paper"
  }, {
    "pathname": "/components/pickers"
  }, {
    "pathname": "/components/popover"
  }, {
    "pathname": "/components/popper"
  }, {
    "pathname": "/components/portal"
  }, {
    "pathname": "/components/progress"
  }, {
    "pathname": "/components/radio-buttons"
  }, {
    "pathname": "/components/rating"
  }, {
    "pathname": "/components/selects"
  }, {
    "pathname": "/components/skeleton"
  }, {
    "pathname": "/components/slider"
  }, {
    "pathname": "/components/snackbars"
  }, {
    "pathname": "/components/speed-dial"
  }, {
    "pathname": "/components/steppers"
  }, {
    "pathname": "/components/switches"
  }, {
    "pathname": "/components/tables"
  }, {
    "pathname": "/components/tabs"
  }, {
    "pathname": "/components/textarea-autosize"
  }, {
    "pathname": "/components/text-fields"
  }, {
    "pathname": "/components/toggle-button"
  }, {
    "pathname": "/components/tooltips"
  }, {
    "pathname": "/components/transfer-list"
  }, {
    "pathname": "/components/transitions"
  }, {
    "pathname": "/components/tree-view"
  }, {
    "pathname": "/components/typography"
  }, {
    "pathname": "/components/use-media-query"
  }]
}];
const pages = [{
  pathname: '/getting-started',
  children: [{
    pathname: '/getting-started/installation'
  }, {
    pathname: '/getting-started/usage'
  }, {
    pathname: '/getting-started/example-projects'
  }, {
    pathname: '/getting-started/templates'
  }, {
    pathname: '/getting-started/learn'
  }, {
    pathname: '/getting-started/faq',
    title: 'FAQs'
  }, {
    pathname: '/getting-started/supported-components'
  }, {
    pathname: '/getting-started/supported-platforms'
  }, {
    pathname: '/getting-started/support'
  }]
}, {
  pathname: '/components',
  children: [{
    pathname: '/components',
    subheader: '/components/layout',
    children: [{
      pathname: '/components/box'
    }, {
      pathname: '/components/container'
    }, {
      pathname: '/components/grid'
    }, {
      pathname: '/components/grid-list'
    }, {
      pathname: '/components/hidden'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/inputs',
    children: [{
      pathname: '/components/buttons'
    }, {
      pathname: '/components/button-group'
    }, {
      pathname: '/components/checkboxes'
    }, {
      pathname: '/components/floating-action-button'
    }, {
      pathname: '/components/pickers',
      title: 'Date / Time'
    }, {
      pathname: '/components/radio-buttons'
    }, {
      pathname: '/components/selects'
    }, {
      pathname: '/components/slider'
    }, {
      pathname: '/components/switches'
    }, {
      pathname: '/components/text-fields'
    }, {
      pathname: '/components/transfer-list'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/navigation',
    children: [{
      pathname: '/components/bottom-navigation'
    }, {
      pathname: '/components/breadcrumbs'
    }, {
      pathname: '/components/drawers'
    }, {
      pathname: '/components/links'
    }, {
      pathname: '/components/menus'
    }, {
      pathname: '/components/steppers'
    }, {
      pathname: '/components/tabs'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/surfaces',
    children: [{
      pathname: '/components/app-bar'
    }, {
      pathname: '/components/paper'
    }, {
      pathname: '/components/cards'
    }, {
      pathname: '/components/expansion-panels'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/feedback',
    children: [{
      pathname: '/components/progress'
    }, {
      pathname: '/components/dialogs'
    }, {
      pathname: '/components/snackbars'
    }, {
      pathname: '/components/backdrop'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/data-display',
    children: [{
      pathname: '/components/avatars'
    }, {
      pathname: '/components/badges'
    }, {
      pathname: '/components/chips'
    }, {
      pathname: '/components/dividers'
    }, {
      pathname: '/components/icons'
    }, {
      pathname: '/components/material-icons'
    }, {
      pathname: '/components/lists'
    }, {
      pathname: '/components/tables'
    }, {
      pathname: '/components/tooltips'
    }, {
      pathname: '/components/typography'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/utils',
    children: [{
      pathname: '/components/click-away-listener'
    }, {
      pathname: '/components/css-baseline',
      title: 'CSS Baseline'
    }, {
      pathname: '/components/modal'
    }, {
      pathname: '/components/no-ssr',
      title: 'No SSR'
    }, {
      pathname: '/components/popover'
    }, {
      pathname: '/components/popper'
    }, {
      pathname: '/components/portal'
    }, {
      pathname: '/components/textarea-autosize'
    }, {
      pathname: '/components/transitions'
    }, {
      pathname: '/components/use-media-query',
      title: 'useMediaQuery'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/lab',
    children: [{
      pathname: '/components/about-the-lab'
    }, {
      pathname: '/components/alert'
    }, {
      pathname: '/components/autocomplete'
    }, {
      pathname: '/components/pagination'
    }, {
      pathname: '/components/rating'
    }, {
      pathname: '/components/skeleton'
    }, {
      pathname: '/components/speed-dial'
    }, {
      pathname: '/components/toggle-button'
    }, {
      pathname: '/components/tree-view'
    }]
  }]
}, Object(objectSpread2["a" /* default */])({
  title: 'Component API'
}, findPages[0]), {
  pathname: '/styles',
  children: [{
    pathname: '/styles/basics'
  }, {
    pathname: '/styles/advanced'
  }, {
    pathname: '/styles/api',
    title: 'API'
  }]
}, {
  pathname: '/system',
  children: [{
    pathname: '/system/basics'
  }, {
    pathname: '/system/borders'
  }, {
    pathname: '/system/display'
  }, {
    pathname: '/system/flexbox'
  }, {
    pathname: '/system/palette'
  }, {
    pathname: '/system/positions'
  }, {
    pathname: '/system/shadows'
  }, {
    pathname: '/system/sizing'
  }, {
    pathname: '/system/spacing'
  }, {
    pathname: '/system/typography'
  }, {
    pathname: '/system/api',
    title: 'API'
  }]
}, {
  pathname: '/customization',
  children: [{
    pathname: '/customization',
    subheader: '/customization/theme',
    children: [{
      pathname: '/customization/theming'
    }, {
      pathname: '/customization/palette'
    }, {
      pathname: '/customization/typography'
    }, {
      pathname: '/customization/spacing'
    }, {
      pathname: '/customization/breakpoints'
    }, {
      pathname: '/customization/density'
    }, {
      pathname: '/customization/z-index',
      title: 'z-index'
    }, {
      pathname: '/customization/globals'
    }]
  }, {
    pathname: '/customization/components'
  }, {
    pathname: '/customization/color'
  }, {
    pathname: '/customization/default-theme',
    title: 'Default Theme'
  }]
}, {
  pathname: '/guides',
  children: [{
    pathname: '/guides/api',
    title: 'API Design Approach'
  }, {
    pathname: '/guides/typescript',
    title: 'TypeScript'
  }, {
    pathname: '/guides/interoperability',
    title: 'Style Library Interoperability'
  }, {
    pathname: '/guides/minimizing-bundle-size'
  }, {
    pathname: '/guides/composition'
  }, {
    pathname: '/guides/server-rendering'
  }, {
    pathname: '/guides/responsive-ui',
    title: 'Responsive UI'
  }, {
    pathname: '/guides/migration-v3',
    title: 'Migration From v3'
  }, {
    pathname: '/guides/migration-v0x',
    title: 'Migration From v0.x'
  }, {
    pathname: '/guides/testing'
  }, {
    pathname: '/guides/localization'
  }, {
    pathname: '/guides/right-to-left',
    title: 'Right-to-left'
  }, {
    pathname: '/guides/flow'
  }]
}, {
  pathname: 'https://material-ui.com/store/',
  title: 'Store',
  linkProps: {
    'data-ga-event-category': 'premium-themes',
    'data-ga-event-action': 'click',
    'data-ga-event-label': 'sidenav-link'
  }
}, {
  pathname: '/discover-more',
  children: [{
    pathname: '/discover-more/showcase'
  }, {
    pathname: '/discover-more/related-projects'
  }, {
    pathname: '/discover-more/roadmap'
  }, {
    pathname: '/discover-more/backers',
    title: 'Sponsors & Backers'
  }, {
    pathname: '/discover-more/vision'
  }, {
    pathname: '/discover-more/team'
  }, {
    pathname: '/discover-more/changelog'
  }, {
    pathname: '/discover-more/languages'
  }]
}, {
  pathname: '/versions',
  disableNav: true
}, {
  pathname: '/',
  displayNav: false,
  disableDrawer: true
}, {
  pathname: 'https://medium.com/material-ui',
  title: 'Blog'
}];
/* harmony default export */ var src_pages = (pages);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./src/modules/constants.js
var constants = __webpack_require__("NLnA");

// EXTERNAL MODULE: ../packages/material-ui-system/src/memoize.js
var memoize = __webpack_require__("WNP9");

// EXTERNAL MODULE: ./src/modules/utils/mapTranslations.js
var mapTranslations = __webpack_require__("O72G");

// CONCATENATED MODULE: ./src/modules/redux/optionsReducer.js





const req = __webpack_require__("YKqg");

const translations = Object(mapTranslations["a" /* default */])(req, 'json');

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

const warnOnce = {};
const getT = Object(memoize["a" /* default */])(userLanguage => (key, options = {}) => {
  const {
    ignoreWarning = false
  } = options;
  const wordings = translations[userLanguage];

  if (!wordings) {
    console.error(`Missing language: ${userLanguage}.`);
    return '…';
  }

  const translation = getPath(wordings, key);

  if (!translation) {
    const fullKey = `${userLanguage}:${key}`; // No warnings in CI env

    if (!ignoreWarning && !warnOnce[fullKey] && false) {
      console.error(`Missing translation for ${fullKey}.`);
      warnOnce[fullKey] = true;
    }

    return getPath(translations.en, key);
  }

  return translation;
});
const mapping = {
  [constants["ACTION_TYPES"].OPTIONS_CHANGE]: (state, action) => {
    const newState = {
      codeVariant: action.payload.codeVariant || state.codeVariant,
      userLanguage: action.payload.userLanguage || state.userLanguage
    };
    return newState;
  }
};

function optionsReducer(state = {}, action) {
  let newState = Object(objectSpread2["a" /* default */])({}, state);

  if (!newState.codeVariant) {
    newState.codeVariant = constants["CODE_VARIANTS"].JS;
  }

  if (!newState.userLanguage) {
    newState.userLanguage = 'en';
  }

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  newState.t = getT(newState.userLanguage);
  return newState;
}

/* harmony default export */ var redux_optionsReducer = (optionsReducer);
// CONCATENATED MODULE: ./src/modules/redux/initRedux.js
/* eslint-disable no-underscore-dangle */

 // Get the Redux DevTools extension and fallback to a no-op function

let devtools = x => x;

if (false) {}

function create(initialState) {
  let middleware = [];

  if (false) {}

  return Object(external_redux_["createStore"])(Object(external_redux_["combineReducers"])({
    options: redux_optionsReducer
  }), initialState, // Hydrate the store with server-side data
  Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middleware), devtools));
}

function initRedux(initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse store on the client-side


  if (!global.__INIT_REDUX_STORE__) {
    global.__INIT_REDUX_STORE__ = create(initialState);
  }

  return global.__INIT_REDUX_STORE__;
}
// EXTERNAL MODULE: ./src/modules/components/PageContext.js
var PageContext = __webpack_require__("hAlb");

// EXTERNAL MODULE: ./src/modules/utils/helpers.js
var helpers = __webpack_require__("18I3");

// CONCATENATED MODULE: ./src/modules/components/GoogleAnalytics.js

 // So we can write code like:
//
// <Button
//   ga-event-category="demo"
//   ga-event-action="expand"
// >
//   Foo
// </Button>

function handleClick(event) {
  let element = event.target;

  while (element && element !== document) {
    const category = element.getAttribute('data-ga-event-category'); // We reach a tracking element, no need to look higher in the dom tree.

    if (category) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: element.getAttribute('data-ga-event-action'),
        eventLabel: element.getAttribute('data-ga-event-label')
      });
      break;
    }

    element = element.parentElement;
  }
}

let bound = false;
function GoogleAnalytics() {
  external_react_default.a.useEffect(() => {
    // Wait for the title to be updated.
    setTimeout(() => {
      const {
        canonical
      } = Object(helpers["pathnameToLanguage"])(window.location.pathname);
      window.ga('set', {
        page: canonical
      });
      window.ga('send', {
        hitType: 'pageview'
      });
    });

    if (bound) {
      return;
    }

    bound = true;
    document.addEventListener('click', handleClick);
  }, []);
  return null;
}
// EXTERNAL MODULE: ./src/modules/utils/loadScript.js
var loadScript = __webpack_require__("XEXC");

// EXTERNAL MODULE: ./src/modules/components/ThemeContext.js
var ThemeContext = __webpack_require__("ro6p");

// CONCATENATED MODULE: ./pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_MyApp; });

var __jsx = external_react_default.a.createElement;
/* eslint-disable no-underscore-dangle */

 // --- Post bootstrap -----



















 // Configure JSS

const jss = Object(external_jss_["create"])({
  plugins: [...Object(jssPreset["a" /* default */])().plugins, external_jss_rtl_default()()],
  insertionPoint:  false ? undefined : null
});

function useFirstRender() {
  const firstRenderRef = external_react_default.a.useRef(true);
  external_react_default.a.useEffect(() => {
    firstRenderRef.current = false;
  }, []);
  return firstRenderRef.current;
}

external_accept_language_default.a.languages(['en', 'zh']);

function loadCrowdin() {
  window._jipt = [];

  window._jipt.push(['project', 'material-ui-docs']);

  Object(loadScript["a" /* default */])('https://cdn.crowdin.com/jipt/jipt.js', document.querySelector('head'));
}

function LanguageNegotiation() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const userLanguage = Object(external_react_redux_["useSelector"])(state => state.options.userLanguage);
  external_react_default.a.useEffect(() => {
    if (userLanguage === 'aa') {
      loadCrowdin();
    }
  }, [userLanguage]);
  external_react_default.a.useEffect(() => {
    const {
      userLanguage: userLanguageUrl,
      canonical
    } = Object(helpers["pathnameToLanguage"])(router_["Router"]._rewriteUrlForNextExport(router.asPath));
    const preferedLanguage = Object(helpers["getCookie"])('userLanguage') !== 'noDefault' && userLanguage === 'en' ? external_accept_language_default.a.get(navigator.language) : userLanguage;

    if (preferedLanguage !== userLanguage) {
      window.location = preferedLanguage === 'en' ? canonical : `/${preferedLanguage}${canonical}`;
    } else if (userLanguageUrl !== userLanguage) {
      dispatch({
        type: constants["ACTION_TYPES"].OPTIONS_CHANGE,
        payload: {
          userLanguage: userLanguageUrl
        }
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
/**
 * Priority: on first render: navigated value, persisted value; otherwise initial value, 'JS'
 * @param {string} initialCodeVariant
 * @param {(nextCodeVariant: string) => void} codeVariantChanged
 * @returns {string} - The persisted variant if the initial value is undefined
 */


function usePersistCodeVariant(initialCodeVariant = constants["CODE_VARIANTS"].JS, codeVariantChanged) {
  const isFirstRender = useFirstRender();
  const navigatedCodeVariant = external_react_default.a.useMemo(() => {
    const navigatedCodeVariantMatch = false ? undefined : null;

    if (navigatedCodeVariantMatch === null) {
      return undefined;
    }

    return navigatedCodeVariantMatch[1] === 'tsx' ? constants["CODE_VARIANTS"].TS : constants["CODE_VARIANTS"].JS;
  }, []);
  const persistedCodeVariant = external_react_default.a.useMemo(() => {
    if (true) {
      return undefined;
    }

    return Object(helpers["getCookie"])('codeVariant');
  }, []);
  /**
   * we initialize from navigation or cookies. on subsequent renders the store is the
   * truth
   */

  const codeVariant = isFirstRender === true ? navigatedCodeVariant || persistedCodeVariant || initialCodeVariant : initialCodeVariant;
  external_react_default.a.useEffect(() => {
    if (codeVariant !== initialCodeVariant) {
      codeVariantChanged(codeVariant);
    }
  });
  external_react_default.a.useEffect(() => {
    document.cookie = `codeVariant=${codeVariant};path=/;max-age=31536000`;
  }, [codeVariant]);
  return codeVariant;
}

function PersistState() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const options = Object(external_react_redux_["useSelector"])(state => state.options);
  const codeVariant = usePersistCodeVariant(options.codeVariant, nextCodeVariant => dispatch({
    type: constants["ACTION_TYPES"].OPTIONS_CHANGE,
    payload: {
      codeVariant: nextCodeVariant
    }
  }));
  external_react_default.a.useEffect(() => {
    window.ga('set', 'dimension1', codeVariant);
  }, [codeVariant]);
  external_react_default.a.useEffect(() => {
    window.ga('set', 'dimension2', options.userLanguage);
  }, [options.userLanguage]);
  return null;
} // Inspired by
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users


function forcePageReload(registration) {
  // console.log('already controlled?', Boolean(navigator.serviceWorker.controller));
  if (!navigator.serviceWorker.controller) {
    // The window client isn't currently controlled so it's a new service
    // worker that will activate immediately.
    return;
  } // console.log('registration waiting?', Boolean(registration.waiting));


  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    registration.waiting.postMessage('skipWaiting');
    return;
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', event => {
      // console.log('statechange', event.target.state);
      if (event.target.state === 'installed' && registration.waiting) {
        // A new service worker is available, inform the user
        registration.waiting.postMessage('skipWaiting');
      } else if (event.target.state === 'activated') {
        // Force the control of the page by the activated service worker.
        window.location.reload();
      }
    });
  }

  if (registration.installing) {
    listenInstalledStateChange();
    return;
  } // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,


  registration.addEventListener('updatefound', listenInstalledStateChange);
}

async function registerServiceWorker() {
  if ('serviceWorker' in navigator && "production" === 'production' && window.location.host.indexOf('material-ui.com') <= 0) {
    // register() automatically attempts to refresh the sw.js.
    const registration = await navigator.serviceWorker.register('/sw.js'); // Force the page reload for users.

    forcePageReload(registration);
  }
} // Add the strict mode back once the number of warnings is manageable.
// We might miss important warnings by keeping the strict mode 🌊🌊🌊.


const ReactMode = {
  // createSyncRoot compatible
  sync: external_react_default.a.StrictMode,
  // partial createRoot, ConcurrentMode is deprecated
  concurrent: external_react_default.a.unstable_ConcurrentMode
}["legacy"] || external_react_default.a.Fragment;
let dependenciesLoaded = false;

function loadDependencies() {
  if (dependenciesLoaded) {
    return;
  }

  dependenciesLoaded = true;
  Object(loadCSS_["loadCSS"])('https://fonts.googleapis.com/icon?family=Material+Icons', document.querySelector('#material-icon-font'));
  Object(loadScript["a" /* default */])('https://www.google-analytics.com/analytics.js', document.querySelector('head'));
}

if (false) {}

function findActivePage(currentPages, pathname) {
  const activePage = find_default()(currentPages, page => {
    if (page.children) {
      if (pathname.indexOf(`${page.pathname}/`) === 0) {
        // Check if one of the children matches (for /components)
        return findActivePage(page.children, pathname);
      }
    } // Should be an exact match if no children


    return pathname === page.pathname;
  });

  if (!activePage) {
    return null;
  } // We need to drill down


  if (activePage.pathname !== pathname) {
    return findActivePage(activePage.children, pathname);
  }

  return activePage;
}

var _ref = __jsx(PersistState, null);

var _ref2 = __jsx(LanguageNegotiation, null);

function AppWrapper(props) {
  const {
    children,
    pageProps
  } = props;
  const router = Object(router_["useRouter"])();
  const [redux] = external_react_default.a.useState(() => initRedux(pageProps.reduxServerState));
  external_react_default.a.useEffect(() => {
    loadDependencies();
    registerServiceWorker(); // Remove the server-side injected CSS.

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  let pathname = router.pathname; // Add support for leading / in development mode.

  if (pathname !== '/') {
    // The leading / is only added to support static hosting (resolve /index.html).
    // We remove it to normalize the pathname.
    // See `_rewriteUrlForNextExport` on Next.js side.
    pathname = pathname.replace(/\/$/, '');
  }

  const activePage = findActivePage(src_pages, pathname);
  let fonts = ['https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'];

  if (pathname.match(/onepirate/)) {
    fonts = ['https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Work+Sans:300,400&display=swap'];
  }

  return __jsx(ReactMode, null, __jsx(head_default.a, null, fonts.map(font => __jsx("link", {
    rel: "stylesheet",
    href: font,
    key: font
  }))), __jsx(external_react_redux_["Provider"], {
    store: redux
  }, __jsx(PageContext["a" /* default */].Provider, {
    value: {
      activePage,
      pages: src_pages,
      versions: pageProps.versions
    }
  }, __jsx(StylesProvider["b" /* default */], {
    jss: jss
  }, __jsx(ThemeContext["b" /* ThemeProvider */], null, children))), _ref, _ref2), __jsx(GoogleAnalytics, {
    key: router.route
  }));
}

class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(AppWrapper, {
      pageProps: pageProps
    }, __jsx(Component, pageProps));
  }

}

_app_MyApp.getInitialProps = async ({
  ctx,
  Component
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (true) {
    const redux = initRedux({
      options: {
        userLanguage: ctx.query.userLanguage
      }
    });
    pageProps = Object(objectSpread2["a" /* default */])({}, pageProps, {
      // No need to include other initial Redux state because when it
      // initialises on the client-side it'll create it again anyway
      reduxServerState: redux.getState()
    });
  }

  return {
    pageProps
  };
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

/***/ "3hEz":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-camel-case");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5ZBS":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-diff");

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

/***/ "6OzC":
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("VJxl"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("z4BS");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "6mFX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "71gp":
/***/ (function(module, exports) {

module.exports = require("accept-language");

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

/***/ "7an5":
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "95Dg":
/***/ (function(module, exports) {

module.exports = require("fg-loadcss/src/loadCSS");

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

/***/ "B+1N":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/for");

/***/ }),

/***/ "B1es":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"Uma palavra rápida de nossos patrocinadores:\",\"helpToTranslate\":\"Ajude a traduzir\",\"editWebsiteColors\":\"Editar cores do site\",\"useDarkTheme\":\"Use dark theme\",\"toggleTheme\":\"Alternar tema claro/escuro\",\"toggleRTL\":\"Alternar da direita para a esquerda/esquerda para a direita\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"Repositório no GitHub\",\"strapline\":\"Componentes React para um desenvolvimento mais rápido e fácil. Construa seu próprio design, ou comece com Material Design.\",\"getStarted\":\"Comece a Usar\",\"installation\":\"Instalação\",\"installDescr\":\"Instale o Material-UI via npm. Nós cuidamos de injetar o CSS necessário.\",\"cdn\":\"ou use uma CDN.\",\"loadFont\":\"Carregar a fonte padrão Roboto.\",\"installButton\":\"Ler instruções de instalação\",\"usage\":\"Uso\",\"usageDescr\":\"Os componentes do Material-UI funcionam sem qualquer configuração adicional, e não poluem o escopo global.\",\"usageButton\":\"Explorar documentação\",\"themes\":\"Temas premium\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"themesButton\":\"Explorar temas\",\"whosUsing\":\"Quem tem usado Material-UI?\",\"joinThese\":\"Junte-se a estas e outras grandes organizações!\",\"usingMui\":\"Você está usando o Material-UI?\",\"letUsKnow\":\"Nos conte!\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"footerCommunity\":\"Comunidade\",\"footerResources\":\"Recursos\",\"footerCompany\":\"Empresa\",\"homeFooterRelease\":\"Atualmente {{versionNumber}}. Lançado sob a {{license}}.\",\"license\":\"Licença MIT\",\"likeMui\":\"Gostou do Material-UI?\",\"adblock\":\"Se você não se importa com anúncios relacionados à tecnologia e deseja dar suporte ao Código Aberto, inscreva o Material-UI na lista de liberações no seu bloqueador de anúncios.\",\"thanks\":\"Obrigado!\",\"editPage\":\"Ajude a traduzir esta página\",\"tableOfContents\":\"Índice\",\"sourceCode\":\"Código fonte\",\"traffic\":\"Tráfego\",\"newest\":\"Mais recentes\",\"stars\":\"Estrelas GitHub\",\"visit\":\"Acesse o site\",\"dashboardTitle\":\"Painel de controle\",\"dashboardDescr\":\"Um painel mínimo com barra de tarefas e mini variante. O gráfico é cortesia do Recharts, mas é simples substituir por um alternativo.\",\"signInTitle\":\"Entrar\",\"signInDescr\":\"Uma simples página de login.\",\"signInSideTitle\":\"Entrar ao lado\",\"signInSideDescr\":\"Uma página simples de login.\",\"signUpTitle\":\"Cadastre-se\",\"signUpDescr\":\"Uma página simples de cadastro.\",\"blogTitle\":\"Blog\",\"blogDescr\":\"Um layout de página de blog sofisticado. O suporte do Markdown é cortesia do markdown-to-jsx, mas é facilmente substituído.\",\"checkoutTitle\":\"Finalizar\",\"checkoutDescr\":\"Um layout de página de check-out por passo a passo. Adapte o número de etapas para atender às suas necessidades ou torne as etapas opcionais.\",\"albumTitle\":\"Álbum\",\"albumDescr\":\"Um layout de página de álbum / galeria responsivo com uma unidade de herói e rodapé.\",\"pricingTitle\":\"Preço\",\"pricingDescr\":\"Crie rapidamente uma tabela de preços eficaz para seus clientes em potencial com este layout de página.\",\"stickyFooterTitle\":\"Rodapé fixo\",\"stickyFooterDescr\":\"Anexe um rodapé abaixo na janela de visualização quando o conteúdo da página for curto.\",\"expandAll\":\"Expandir tudo\",\"showSource\":\"Ver o código fonte\",\"hideSource\":\"Esconder o código fonte\",\"showFullSource\":\"Ver o código fonte\",\"hideFullSource\":\"Esconder o código fonte\",\"viewGitHub\":\"Visualizar o código fonte no GitHub\",\"codesandbox\":\"Edite em CodeSandbox\",\"seeMore\":\"Ver mais\",\"copySource\":\"Copiar código fonte\",\"copiedSource\":\"The source code has been copied.\",\"copySourceLinkJS\":\"Copiar link para o fonte JavaScript\",\"copySourceLinkTS\":\"Copiar link para o fonte TypeScript\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"stackblitz\":\"Editar em StackBlits (apenas JS)\",\"headTitle\":\"Material-UI: Um framework popular de React UI\",\"emojiLove\":\"Amor\",\"emoojiWarning\":\"Alerta\",\"mainNavigation\":\"Navegação principal\",\"skipToContent\":\"Pular para o conteúdo\",\"openDrawer\":\"Abrir navegação principal\",\"changeLanguage\":\"Alterar Idioma\",\"pageTOC\":\"Tabela de conteúdo\",\"showJSSource\":\"Mostrar fonte JavaScript\",\"showTSSource\":\"Mostrar fonte TypeScript\",\"close\":\"Fechar\",\"useHighDensity\":\"Aplique densidade mais alta via propriedades\",\"spacingUnit\":\"Unidade de espaçamento\",\"resetDensity\":\"Repor densidade\",\"increaseSpacing\":\"aumentar o espaçamento\",\"decreaseSpacing\":\"diminuir o espaçamento\",\"getProfessionalSupport\":\"Obtenha Suporte Profissional\",\"diamondSponsors\":\"Patrocinadores Diamante\",\"pages\":{\"/getting-started\":\"Comece a usar\",\"/getting-started/installation\":\"Instalação\",\"/getting-started/usage\":\"Uso\",\"/getting-started/example-projects\":\"Projetos de exemplo\",\"/getting-started/templates\":\"Modelos\",\"/getting-started/learn\":\"Aprenda\",\"/getting-started/faq\":\"Perguntas Frequentes\",\"/getting-started/supported-components\":\"Componentes Suportados\",\"/getting-started/supported-platforms\":\"Plataformas Suportadas\",\"/getting-started/support\":\"Suporte\",\"/components\":\"Componentes\",\"/components/about-the-lab\":\"Sobre o Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"Sobre o Lab\",\"/components/app-bar\":\"Barra de Aplicativos\",\"/components/autocomplete\":\"Autocompletar\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Entradas Básicas\",\"/components/bottom-navigation\":\"Navegação Inferior\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Breadcrumbs\",\"/components/buttons\":\"Button (botão)\",\"/components/cards\":\"Cartão\",\"/components/checkboxes\":\"Caixa de Seleção\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Conteúdo\",\"/components/css-baseline\":\"CSS Baseline\",\"/components/data-display\":\"Exibição de Dados\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Drawer\",\"/components/expansion-panels\":\"Expansion Panel (Painel de Expansão)\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grade\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Lista de Grade\",\"/components/icons\":\"Ícones\",\"/components/inputs\":\"Entradas\",\"/components/lab\":\"Lab\",\"/components/layout\":\"Leiaute\",\"/components/links\":\"Link\",\"/components/lists\":\"Lista\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navegação\",\"/components/no-ssr\":\"NoSSR\",\"/components/other\":\"Outros\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Data / Hora\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Progresso\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Botões de opção\",\"/components/selects\":\"Seleção\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Discagem Rápida\",\"/components/steppers\":\"Stepper (Assistente)\",\"/components/surfaces\":\"Superfícies\",\"/components/switches\":\"Seletor\",\"/components/tables\":\"Tabela\",\"/components/tabs\":\"Guias\",\"/components/text-fields\":\"Text Field (campo de texto)\",\"/components/toggle-button\":\"Botões de alternância\",\"/components/tooltips\":\"Tooltip (dica)\",\"/components/transfer-list\":\"Transferência de Lista\",\"/components/transitions\":\"Transições\",\"/components/typography\":\"Tipografia\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utilidades\",\"/css-in-js\":\"Estilos\",\"/css-in-js/basics\":\"Noções Básicas\",\"/css-in-js/advanced\":\"Avançado\",\"/system\":\"Sistema\",\"/system/basics\":\"Noções Básicas\",\"/system/borders\":\"Bordas\",\"/system/display\":\"Display\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Paleta de Cores\",\"/system/positions\":\"Posições\",\"/system/shadows\":\"Sombras\",\"/system/sizing\":\"Dimensionando\",\"/system/spacing\":\"Espaçamento\",\"/system/typography\":\"Tipografia\",\"/customization\":\"Customização\",\"/customization/theming\":\"Temas\",\"/customization/theme\":\"Temas\",\"/customization/breakpoints\":\"Pontos de quebra\",\"/customization/color\":\"Cor\",\"/customization/palette\":\"Paleta de Cores\",\"/customization/type\":\"Tipo (claro / escuro)\",\"/customization/typography\":\"Tipografia\",\"/customization/spacing\":\"Espaçamento\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globais\",\"/customization/components\":\"Componentes\",\"/customization/default-theme\":\"Tema Padrão\",\"/guides\":\"Guias\",\"/guides/api\":\"Abordagem de Design da API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interoperabilidade da Biblioteca de Estilo\",\"/guides/minimizing-bundle-size\":\"Minimizando o tamanho do pacote\",\"/guides/composition\":\"Composição\",\"/guides/responsive-ui\":\"UI Responsiva\",\"/guides/server-rendering\":\"Renderização no servidor\",\"/guides/migration-v3\":\"Migrando da v3\",\"/guides/migration-v0x\":\"Migrando da v0.x\",\"/guides/testing\":\"Testando\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Da Direita para Esquerda\",\"/guides/localization\":\"Localização\",\"/discover-more\":\"Descubra mais\",\"/discover-more/showcase\":\"Demonstração\",\"/discover-more/related-projects\":\"Projetos Relacionados\",\"/discover-more/roadmap\":\"Planejamento\",\"/discover-more/backers\":\"Patrocinadores & Apoiadores\",\"/discover-more/vision\":\"Visão\",\"/discover-more/team\":\"Equipe\",\"/discover-more/community\":\"Comunidade\",\"/discover-more/changelog\":\"Histórico de Mudanças\",\"/discover-more/languages\":\"Idiomas\",\"/versions\":\"Versões\",\"/styles\":\"Estilos\",\"/styles/basics\":\"Noções Básicas\",\"/styles/advanced\":\"Avançado\",\"https://themes.material-ui.com/\":\"Temas Premium\",\"/components/material-icons\":\"Ícones Material\",\"/components/textarea-autosize\":\"Texto autoajustável\",\"/components/rating\":\"Rating\",\"/components/skeleton\":\"Skeleton\",\"/components/tree-view\":\"Visualização em árvore\",\"/customization/density\":\"Densidade\"}}");

/***/ }),

/***/ "CHJX":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"Unas palabras de nuestros patrocinadores:\",\"helpToTranslate\":\"Ayúdanos a traducir\",\"editWebsiteColors\":\"Editar los colores del sitio web\",\"useDarkTheme\":\"Use dark theme\",\"toggleTheme\":\"Alternar tema claro/oscuro\",\"toggleRTL\":\"Alternar derecha-izquierda/izquierda-derecha\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"Repositorio en GitHub\",\"strapline\":\"Componentes de React para un desarrollo web más rápido y sencillo. Construya su propio sistema de diseño, o empiece con Material Design.\",\"getStarted\":\"Comenzar\",\"installation\":\"Instalación\",\"installDescr\":\"Instale los archivos necesarios de Material-UI a través de npm. Nosotros nos encargamos de inyectar todo el CSS necesario.\",\"cdn\":\"o use un CDN.\",\"loadFont\":\"Cargue la fuente por defecto Roboto.\",\"installButton\":\"Lea los docs de instalación\",\"usage\":\"Implementación\",\"usageDescr\":\"Los componentes de Material-UI funcionan sin ninguna configuración adicional, y no ensucian el global scope.\",\"usageButton\":\"Explore la documentación\",\"themes\":\"Temas Premium\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"themesButton\":\"Examinar temas\",\"whosUsing\":\"¿Quién usa Material-UI?\",\"joinThese\":\"¡Únete a estas y otras grandes organizaciones!\",\"usingMui\":\"¿Estás utilizando Material-UI?\",\"letUsKnow\":\"¡Déjanos saber!\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"footerCommunity\":\"Comunidad\",\"footerResources\":\"Recursos\",\"footerCompany\":\"Company\",\"homeFooterRelease\":\"Actualmente {{versionNumber}}. Publicado bajo la {{license}}.\",\"license\":\"Licencia MIT\",\"likeMui\":\"¿Te gusta Material-UI?\",\"adblock\":\"Si no te molestan los anuncios sobre tecnología, y quieres apoyar al Open Source, por favor añade Material-UI a tu lista blanca en tu bloqueador de anuncios.\",\"thanks\":\"¡Gracias!\",\"editPage\":\"Ayuda a traducir esta página\",\"tableOfContents\":\"Tabla de Contenido\",\"sourceCode\":\"Código fuente\",\"traffic\":\"Tráfico\",\"newest\":\"Lo último\",\"stars\":\"Estrellas de GitHub\",\"visit\":\"Visite el sitio web\",\"dashboardTitle\":\"Dashboard\",\"dashboardDescr\":\"Un dashboard simple con barra de tareas y mini dibujo variante. Gráfico por cortesía de Recharts, pero es muy simple sustituirlo por otra alternativa.\",\"signInTitle\":\"Iniciar sesión\",\"signInDescr\":\"Simple página de inicio de sesión.\",\"signInSideTitle\":\"Inicio de sesión lateral\",\"signInSideDescr\":\"Simple página de inicio de sesión lateral.\",\"signUpTitle\":\"Registrarse\",\"signUpDescr\":\"Una simple página de registro.\",\"blogTitle\":\"Blog\",\"blogDescr\":\"Diseño de una sofisticada página de blog. El soporte para Markdown por cortesía de markdown-to-jsx, pero es fácilmente reemplazable.\",\"checkoutTitle\":\"Pagar\",\"checkoutDescr\":\"Diseño de página de pagos paso a paso. Adapte el número de pasos para que se ajuste a sus necesidades, o haga los pasos opcionales.\",\"albumTitle\":\"Álbum\",\"albumDescr\":\"Diseño responsive de una página tipo álbum / galería con una unidad hero y footer.\",\"pricingTitle\":\"Precios\",\"pricingDescr\":\"Construya rápidamente una efectiva tabla de precios para sus potenciales clientes con este diseño de página.\",\"stickyFooterTitle\":\"Pié de página fijo\",\"stickyFooterDescr\":\"Adjunte un pie de página a la parte inferior de la ventana gráfica cuando el contenido de la página sea breve.\",\"expandAll\":\"Expandir todo\",\"showSource\":\"Ver la fuente\",\"hideSource\":\"Esconder la fuente\",\"showFullSource\":\"Ver la fuente completa\",\"hideFullSource\":\"Esconder la fuente completa\",\"viewGitHub\":\"Ver la fuente en GitHub\",\"codesandbox\":\"Editar en CodeSandbox\",\"seeMore\":\"Ver más\",\"copySource\":\"Copiar la fuente\",\"copiedSource\":\"The source code has been copied.\",\"copySourceLinkJS\":\"Copiar enlace a fuente de JavaScript\",\"copySourceLinkTS\":\"Copy link to TypeScript source\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"stackblitz\":\"Editar en StackBlitz (solo JS)\",\"headTitle\":\"Material-UI: A popular React UI framework\",\"emojiLove\":\"Amor\",\"emoojiWarning\":\"Warning\",\"mainNavigation\":\"Navegación principal\",\"skipToContent\":\"Saltar al contenido\",\"openDrawer\":\"Abrir navegación principal\",\"changeLanguage\":\"Cambiar idioma\",\"pageTOC\":\"Tabla de contenidos\",\"showJSSource\":\"Show JavaScript source\",\"showTSSource\":\"Show TypeScript source\",\"close\":\"Cerrar\",\"useHighDensity\":\"Apply higher density via props\",\"spacingUnit\":\"Spacing unit\",\"resetDensity\":\"Reset density\",\"increaseSpacing\":\"iumentar espaciado\",\"decreaseSpacing\":\"disminuir espaciado\",\"getProfessionalSupport\":\"Get Professional Support\",\"diamondSponsors\":\"Patrocinadores Destacados\",\"pages\":{\"/getting-started\":\"Primeros pasos\",\"/getting-started/installation\":\"Instalación\",\"/getting-started/usage\":\"Implementación\",\"/getting-started/example-projects\":\"Proyectos de Ejemplo\",\"/getting-started/templates\":\"Plantillas\",\"/getting-started/learn\":\"Aprender\",\"/getting-started/faq\":\"Preguntas frecuentes\",\"/getting-started/supported-components\":\"Componentes Compatibles\",\"/getting-started/supported-platforms\":\"Plataformas compatibles\",\"/getting-started/support\":\"Apóyanos\",\"/components\":\"Componentes\",\"/components/about-the-lab\":\"Acerca de El Laboratorio\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"Acerca de El Laboratorio\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autocompletado\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Entradas Básicas\",\"/components/bottom-navigation\":\"Navegación a pie de página\",\"/components/box\":\"Cuadro\",\"/components/breadcrumbs\":\"Migas de pan\",\"/components/buttons\":\"Button (botón)\",\"/components/cards\":\"Card (tarjeta)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Contenido\",\"/components/css-baseline\":\"Base de CSS\",\"/components/data-display\":\"Visualización de datos\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Cajón\",\"/components/expansion-panels\":\"Expansion Panel (panel de expansión)\",\"/components/feedback\":\"Opiniones\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Lista cuadriculada\",\"/components/icons\":\"Iconos\",\"/components/inputs\":\"Inputs\",\"/components/lab\":\"Laboratorio\",\"/components/layout\":\"Diseño\",\"/components/links\":\"Link\",\"/components/lists\":\"List\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navegación\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Otros\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Fecha / hora\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Progreso\",\"/components/progress-validation\":\"Opiniones\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Select\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Marcación rápida\",\"/components/steppers\":\"Stepper (Pasos a pasos)\",\"/components/surfaces\":\"Superficies\",\"/components/switches\":\"Switch\",\"/components/tables\":\"Table (tabla)\",\"/components/tabs\":\"Pestañas\",\"/components/text-fields\":\"Text Field (campo de texto)\",\"/components/toggle-button\":\"Botón conmutador\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"Lista de transferencia\",\"/components/transitions\":\"Transiciones\",\"/components/typography\":\"Tipografía\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utilidades\",\"/css-in-js\":\"Estilos\",\"/css-in-js/basics\":\"Fundamentos\",\"/css-in-js/advanced\":\"Avanzado\",\"/system\":\"Sistema\",\"/system/basics\":\"Fundamentos\",\"/system/borders\":\"Bordes\",\"/system/display\":\"Mostrar\",\"/system/flexbox\":\"Caja flexible\",\"/system/palette\":\"Paleta\",\"/system/positions\":\"Posiciones\",\"/system/shadows\":\"Sombras\",\"/system/sizing\":\"Dimensionamiento\",\"/system/spacing\":\"Espaciado\",\"/system/typography\":\"Tipografía\",\"/customization\":\"Personalización\",\"/customization/theming\":\"Estilos\",\"/customization/theme\":\"Temática\",\"/customization/breakpoints\":\"Puntos de interrupción\",\"/customization/color\":\"Color\",\"/customization/palette\":\"Paleta\",\"/customization/type\":\"Alternar tema (claro/oscuro)\",\"/customization/typography\":\"Tipografía\",\"/customization/spacing\":\"Espaciado\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globales\",\"/customization/components\":\"Sobreponer\",\"/customization/default-theme\":\"Tema predeterminado\",\"/guides\":\"Guías\",\"/guides/api\":\"API Design Approach\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interoperabilidad de la biblioteca de estilos\",\"/guides/minimizing-bundle-size\":\"Minimizando el tamaño del paquete\",\"/guides/composition\":\"Composición\",\"/guides/responsive-ui\":\"Interfaz de usuario adaptable\",\"/guides/server-rendering\":\"Renderizado en el servidor\",\"/guides/migration-v3\":\"Migración desde v3\",\"/guides/migration-v0x\":\"Migración desde v0.x\",\"/guides/testing\":\"Pruebas\",\"/guides/flow\":\"Flujo\",\"/guides/right-to-left\":\"Derecha-a-izquierda\",\"/guides/localization\":\"Localization\",\"/discover-more\":\"Descubrir Más\",\"/discover-more/showcase\":\"Exhibición\",\"/discover-more/related-projects\":\"Proyectos Relacionados\",\"/discover-more/roadmap\":\"Mapa de ruta\",\"/discover-more/backers\":\"Patrocinadores Y Mecenas\",\"/discover-more/vision\":\"Visión\",\"/discover-more/team\":\"Equipo\",\"/discover-more/community\":\"Comunidad\",\"/discover-more/changelog\":\"Registro de cambios\",\"/discover-more/languages\":\"Lenguajes\",\"/versions\":\"Versiones\",\"/styles\":\"Estilos\",\"/styles/basics\":\"Fundamentos\",\"/styles/advanced\":\"Avanzado\",\"https://themes.material-ui.com/\":\"Temas Premium\",\"/components/material-icons\":\"Material Icons\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Rating\",\"/components/skeleton\":\"Skeleton\",\"/components/tree-view\":\"Vista de arbol\",\"/customization/density\":\"Density\"}}");

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

/***/ "O72G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapTranslations; });
function mapTranslations(req, ext) {
  const translations = {};
  req.keys().forEach(filename => {
    const match = filename.match(new RegExp(`-([a-z]{2}).${ext}$`));

    if (match) {
      translations[match[1]] = req(filename);
    } else {
      translations.en = req(filename);
    }
  });
  return translations;
}

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

/***/ "UthY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "VJxl":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("ZOIa");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "YKqg":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./translations-aa.json": "12zn",
	"./translations-de.json": "1BH+",
	"./translations-es.json": "CHJX",
	"./translations-fr.json": "fHNw",
	"./translations-ja.json": "fwYt",
	"./translations-pt.json": "B1es",
	"./translations-ru.json": "sQhH",
	"./translations-zh.json": "sLcN",
	"./translations.json": "mw0f"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "YKqg";

/***/ }),

/***/ "Yh2X":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "fHNw":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"Un mot rapide de nos sponsors :\",\"helpToTranslate\":\"Aider à la traduction\",\"editWebsiteColors\":\"Modifier les couleurs du site\",\"useDarkTheme\":\"Utiliser le thème sombre\",\"toggleTheme\":\"Basculer le thème de couleurs \\\"clair/sombre\\\"\",\"toggleRTL\":\"Basculer de droite à gauche / de gauche à droite\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"Répertoire GitHub\",\"strapline\":\"Des composants React pour un développement web plus rapide et plus simple. Confectionner votre propre thème graphique ou aidez-vous de Material Design.\",\"getStarted\":\"Commencer\",\"installation\":\"Installation\",\"installDescr\":\"Installez les fichiers source de Material-UI avec npm. Nous nous occupons d'injecter le CSS nécessaire.\",\"cdn\":\"ou utilisez un CDN.\",\"loadFont\":\"Chargez la police Roboto par défaut.\",\"installButton\":\"Lire les docs d'installation\",\"usage\":\"Usage\",\"usageDescr\":\"Les composants Material-UI fonctionnent de manière isolée. Ils sont autonomes.\",\"usageButton\":\"Consulter la documentation\",\"themes\":\"Thèmes Premium\",\"themesDescr\":\"Faites passer votre projet au niveau supérieur avec des thèmes premium de notre marché officiel, tous construits sur Material-UI.\",\"themesButton\":\"Parcourir les thèmes\",\"whosUsing\":\"Qui utilise Material-UI ?\",\"joinThese\":\"Rejoignez ces organisations et d’autres formidables!\",\"usingMui\":\"Utilisez-vous Material-UI ?\",\"letUsKnow\":\"Faites-nous savoir !\",\"praise\":\"Éloge de Material-UI\",\"praiseDescr\":\"Voici ce que disent certains de nos utilisateurs.\",\"footerCommunity\":\"Communauté\",\"footerResources\":\"Ressources\",\"footerCompany\":\"Entreprise\",\"homeFooterRelease\":\"Actuellement {{versionNumber}}. Délivrée sous la {{license}}.\",\"license\":\"Licence MIT\",\"likeMui\":\"Vous aimez Material-UI ?\",\"adblock\":\"Si les annonces techniques ne vous dérangent pas et si vous souhaitez soutenir l'Open Source, veuillez ajouter Material-UI à la liste blanche de votre ad blocker.\",\"thanks\":\"Merci !\",\"editPage\":\"Aidez à traduire cette page\",\"tableOfContents\":\"Sommaire\",\"sourceCode\":\"Code source\",\"traffic\":\"Trafic\",\"newest\":\"Plus récent\",\"stars\":\"Étoiles GitHub\",\"visit\":\"Visiter le site web\",\"dashboardTitle\":\"Tableau de bord\",\"dashboardDescr\":\"Un tableau de bord minimal. Le graphique est implementé avec l'aide de Recharts, mais il peut être remplacé par une solution alternative.\",\"signInTitle\":\"Connexion\",\"signInDescr\":\"Une simple page de connexion.\",\"signInSideTitle\":\"Se connecter\",\"signInSideDescr\":\"Une simple page de connexion latérale.\",\"signUpTitle\":\"Créer un compte\",\"signUpDescr\":\"Une simple page de connexion.\",\"blogTitle\":\"Blog\",\"blogDescr\":\"Une mise en page de blog sophistiquée. Le support du Markdown est fourni grâce à markdown-to-jsx mais est facilement remplaçable.\",\"checkoutTitle\":\"Paiement final\",\"checkoutDescr\":\"Un layout étape par étape de la commande. Adaptez le nombre d'étapes à vos besoins ou faites-en des étapes facultatives.\",\"albumTitle\":\"Album\",\"albumDescr\":\"Une mise en page d'album / galerie responsive avec un hero unit et un footer.\",\"pricingTitle\":\"Tarifs\",\"pricingDescr\":\"Construisez rapidement un tableau de prix pour vos clients potentiels avec cette mise en page.\",\"stickyFooterTitle\":\"Pied de page collant\",\"stickyFooterDescr\":\"Fixer un pied de page au bas de la fenêtre lorsque le contenu des pages est court.\",\"expandAll\":\"Tout étendre\",\"showSource\":\"Voir la source\",\"hideSource\":\"Masquer la source\",\"showFullSource\":\"Afficher la source complète\",\"hideFullSource\":\"Masquer la source complète\",\"viewGitHub\":\"Voir la source sur GitHub\",\"codesandbox\":\"Modifier dans CodeSandbox\",\"seeMore\":\"Voir plus\",\"copySource\":\"Copier la source\",\"copiedSource\":\"Le code source a été copié.\",\"copySourceLinkJS\":\"Copier le lien vers la source JavaScript\",\"copySourceLinkTS\":\"Copier le lien vers une source TypeScript\",\"copiedSourceLink\":\"Le lien vers le code source a été copié.\",\"stackblitz\":\"Modifier dans StackBlitz (JS uniquement)\",\"headTitle\":\"Material-UI : Un framework UI React populaire\",\"emojiLove\":\"Amour\",\"emoojiWarning\":\"Attention\",\"mainNavigation\":\"Navigation principale\",\"skipToContent\":\"Passer au contenu\",\"openDrawer\":\"Voir la navigation principale\",\"changeLanguage\":\"outdated, the key was removed!!!!!!!!!!!!!\",\"pageTOC\":\"La table des matières de la page\",\"showJSSource\":\"Afficher la console JavaScript\",\"showTSSource\":\"Afficher la source TypeScript\",\"close\":\"Fermer\",\"useHighDensity\":\"Appliquer une densité plus élevée via les props\",\"spacingUnit\":\"Unité d'espacement\",\"resetDensity\":\"Réinitialiser la densité\",\"increaseSpacing\":\"augmenter l'espacement\",\"decreaseSpacing\":\"diminuer l'espacement\",\"getProfessionalSupport\":\"Obtenir de l'assistance professionnelle\",\"diamondSponsors\":\"Sponsors Diamant\",\"pages\":{\"/getting-started\":\"Bien démarrer\",\"/getting-started/installation\":\"Installation\",\"/getting-started/usage\":\"Utilisation\",\"/getting-started/example-projects\":\"Exemples de Projets\",\"/getting-started/templates\":\"Templates\",\"/getting-started/learn\":\"Apprendre\",\"/getting-started/faq\":\"FAQs\",\"/getting-started/supported-components\":\"Composants pris en charge\",\"/getting-started/supported-platforms\":\"Plateformes supportées\",\"/getting-started/support\":\"Assistance\",\"/components\":\"Composants\",\"/components/about-the-lab\":\"À propos du Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"À propos du Lab\",\"/components/app-bar\":\"App Bar (Barre d'application)\",\"/components/autocomplete\":\"Autocomplete (Auto-complétion)\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Entrées de base (basic input)\",\"/components/bottom-navigation\":\"Bottom Navigation (Barre de navigation inférieure)\",\"/components/box\":\"Box (Boite)\",\"/components/breadcrumbs\":\"Breadcrumbs (Fil d'Ariane)\",\"/components/buttons\":\"Button (bouton)\",\"/components/cards\":\"Card (carte)\",\"/components/checkboxes\":\"Case à cocher\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container (Conteneur)\",\"/components/content\":\"Contenu\",\"/components/css-baseline\":\"Principes CSS\",\"/components/data-display\":\"Affichage des données\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider (diviseur)\",\"/components/drawers\":\"Drawer (Tiroir)\",\"/components/expansion-panels\":\"Expansion Panel (Panneau d'extension)\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Liste de grille\",\"/components/icons\":\"Icônes\",\"/components/inputs\":\"Inputs\",\"/components/lab\":\"Laboratoire\",\"/components/layout\":\"Disposition\",\"/components/links\":\"Link\",\"/components/lists\":\"List (Liste)\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Menu principal\",\"/components/no-ssr\":\"Pas de SSR\",\"/components/other\":\"Autres\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Date / Heure\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Barres de progression\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Liste à choix simple\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar (Message rapide)\",\"/components/speed-dial\":\"Speed Dial\",\"/components/steppers\":\"Étapes\",\"/components/surfaces\":\"Surfaces\",\"/components/switches\":\"Interrupteur (switch)\",\"/components/tables\":\"Table (Tableaux)\",\"/components/tabs\":\"Tabs (Onglets)\",\"/components/text-fields\":\"Text Field (Champ de texte)\",\"/components/toggle-button\":\"Toggle Button\",\"/components/tooltips\":\"Tooltip (Info-bulle)\",\"/components/transfer-list\":\"Transfer List (Liste de transfert)\",\"/components/transitions\":\"Les transitions\",\"/components/typography\":\"Typography\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utilitaires\",\"/css-in-js\":\"Styles\",\"/css-in-js/basics\":\"Bases\",\"/css-in-js/advanced\":\"Avancé\",\"/system\":\"Système\",\"/system/basics\":\"Bases\",\"/system/borders\":\"Borders (Bordures)\",\"/system/display\":\"Display (Affichage)\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette\",\"/system/positions\":\"Positions\",\"/system/shadows\":\"Shadows (Ombres)\",\"/system/sizing\":\"Sizing (Dimensionnement)\",\"/system/spacing\":\"Spacing (Ecartement)\",\"/system/typography\":\"Typography (Typographie)\",\"/customization\":\"Personnalisation\",\"/customization/theming\":\"Thèmes\",\"/customization/theme\":\"Thème\",\"/customization/breakpoints\":\"Breakpoints\",\"/customization/color\":\"Couleur\",\"/customization/palette\":\"Palette\",\"/customization/type\":\"Type (thème clair / sombre)\",\"/customization/typography\":\"Typography\",\"/customization/spacing\":\"Ecartement\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Variables globales\",\"/customization/components\":\"Surcharges\",\"/customization/default-theme\":\"Thèmes par défaut\",\"/guides\":\"Guides\",\"/guides/api\":\"Approche de conception de l'API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interopérabilité de la bibliothèque de styles\",\"/guides/minimizing-bundle-size\":\"Réduire la taille du bundle\",\"/guides/composition\":\"Composition\",\"/guides/responsive-ui\":\"UI responsive\",\"/guides/server-rendering\":\"Rendu serveur\",\"/guides/migration-v3\":\"Migration depuis v3x\",\"/guides/migration-v0x\":\"Migration depuis v0.x\",\"/guides/testing\":\"Test\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Droite à gauche\",\"/guides/localization\":\"Localisation\",\"/discover-more\":\"Découvrir plus\",\"/discover-more/showcase\":\"Démonstration\",\"/discover-more/related-projects\":\"Projets liés\",\"/discover-more/roadmap\":\"Feuille de route\",\"/discover-more/backers\":\"Sponsors\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Équipe\",\"/discover-more/community\":\"Communauté\",\"/discover-more/changelog\":\"Journal des modifications\",\"/discover-more/languages\":\"Langages\",\"/versions\":\"Versions\",\"/styles\":\"Styles\",\"/styles/basics\":\"Bases\",\"/styles/advanced\":\"Avancé\",\"https://themes.material-ui.com/\":\"Thèmes premium\",\"/components/material-icons\":\"Icônes Material Design\",\"/components/textarea-autosize\":\"Textarea Autosize (taille auto)\",\"/components/rating\":\"Rating (Notation)\",\"/components/skeleton\":\"Skeleton (Squelette)\",\"/components/tree-view\":\"Tree View (Vue arborescente)\",\"/customization/density\":\"Densité\"}}");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "fwYt":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"私たちのスポンサーからの言葉:\",\"helpToTranslate\":\"翻訳を手伝う\",\"editWebsiteColors\":\"ウェブサイトの色を編集する\",\"useDarkTheme\":\"Use dark theme\",\"toggleTheme\":\"ライト/ダークテーマに変更する\",\"toggleRTL\":\"左右反転する\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"GitHubリポジトリ\",\"strapline\":\"ウェブ開発をより高速かつ簡単なものにするReactコンポーネントです。あなたのデザインシステムを構築するかMaterial Designで始めましょう。\",\"getStarted\":\"はじめましょう!\",\"installation\":\"インストール\",\"installDescr\":\"npmからMaterial-UIのソースファイルをインストールします。必要なCSSを導入することを忘れないでください。\",\"cdn\":\"または、CDNを使用します。\",\"loadFont\":\"デフォルトのRobotoフォントを読み込みます。\",\"installButton\":\"インストールに関して\",\"usage\":\"使い方\",\"usageDescr\":\"Material-UIコンポーネントは追加の設定なしで機能し、グローバルスコープを汚染しません。\",\"usageButton\":\"ドキュメントを探索する\",\"themes\":\"プレミアムテーマ\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"themesButton\":\"テーマを見る\",\"whosUsing\":\"誰がMaterial-UIを利用してますか？\",\"joinThese\":\"この素晴らしい団体に参加しましょう！\",\"usingMui\":\"Material-UIを使ってみませんか？\",\"letUsKnow\":\"ご連絡ください！\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"footerCommunity\":\"コミュニティ\",\"footerResources\":\"Resources\",\"footerCompany\":\"Company\",\"homeFooterRelease\":\"現在 {{versionNumber}}です。 {{license}}下でリリースされました。\",\"license\":\"MIT ライセンス\",\"likeMui\":\"Material-UIがスキですか？\",\"adblock\":\"もしテクノロジー関連の広告が気にならず、オープンソースを支援したい場合は、Material-UIを広告ブロッカーのホワイトリストに追加してください。\",\"thanks\":\"感謝します！\",\"editPage\":\"このページの翻訳を手伝ってください\",\"tableOfContents\":\"目次\",\"sourceCode\":\"ソースコード\",\"traffic\":\"トラフィック\",\"newest\":\"新着\",\"stars\":\"GitHubのスター数\",\"visit\":\"ウェブサイトへ行く\",\"dashboardTitle\":\"ダッシュボード\",\"dashboardDescr\":\"タスクバーと変異チャート機能を備えたミニマルなダッシュボード。チャートはRechartsによるものですが、差し替えるのは簡単です。\",\"signInTitle\":\"ログイン\",\"signInDescr\":\"シンプルなログインページ。\",\"signInSideTitle\":\"ログイン（サイドページ）\",\"signInSideDescr\":\"シンプルなサイドページのログイン。\",\"signUpTitle\":\"新規登録\",\"signUpDescr\":\"シンプルな新規登録ページ。\",\"blogTitle\":\"ブログ\",\"blogDescr\":\"洗練されたブログページのレイアウト。マークダウンのサポートはmarkdown-to-jsxによるものですが、差し替えるのは簡単です。\",\"checkoutTitle\":\"確認する\",\"checkoutDescr\":\"段階的な購入手続きページのレイアウト。必要に合わせてステップ数が変化し、また任意でステップを追加できます。\",\"albumTitle\":\"アルバム\",\"albumDescr\":\"ヒーローユニットとフッターが付いたレスポンシブ対応のアルバム/ギャラリーページのレイアウト。\",\"pricingTitle\":\"料金プラン\",\"pricingDescr\":\"このページレイアウトを用いて顧客に効果的な料金テーブルをすぐに作りましょう。\",\"stickyFooterTitle\":\"固定フッター\",\"stickyFooterDescr\":\"ページ内コンテンツが短い場合は、表示領域の下にフッターを固定します。\",\"expandAll\":\"全て展開\",\"showSource\":\"ソースコード\",\"hideSource\":\"ソースコードを隠す\",\"showFullSource\":\"Show the full source\",\"hideFullSource\":\"Hide the full source\",\"viewGitHub\":\"GitHubでソースコードを見る\",\"codesandbox\":\"CodeSandboxで編集する\",\"seeMore\":\"もっと見る\",\"copySource\":\"ソースコードをコピーする\",\"copiedSource\":\"The source code has been copied.\",\"copySourceLinkJS\":\"JavaScriptソースへのリンクをコピーする\",\"copySourceLinkTS\":\"TypeScriptソースへのリンクをコピーする\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"stackblitz\":\"StackBlitz(JS only) で編集する\",\"headTitle\":\"ポピュラーなReact UIフレームワーク\",\"emojiLove\":\"かしこ\",\"emoojiWarning\":\"注意\",\"mainNavigation\":\"メインナビゲーション\",\"skipToContent\":\"コンテンツへ移動\",\"openDrawer\":\"メインナビゲーションを開く\",\"changeLanguage\":\"言語を切り替える\",\"pageTOC\":\"ページの目次\",\"showJSSource\":\"JavaScriptのソースを表示する\",\"showTSSource\":\"TypeScriptのソースを表示する\",\"close\":\"閉じる\",\"useHighDensity\":\"より高密度を適用する\",\"spacingUnit\":\"スペーシングユニット\",\"resetDensity\":\"密度をリセット\",\"increaseSpacing\":\"間隔を広げる\",\"decreaseSpacing\":\"間隔を狭める\",\"getProfessionalSupport\":\"Get Professional Support\",\"diamondSponsors\":\"Diamond Sponsors\",\"pages\":{\"/getting-started\":\"はじめに\",\"/getting-started/installation\":\"インストール\",\"/getting-started/usage\":\"使い方\",\"/getting-started/example-projects\":\"サンプルプロジェクト\",\"/getting-started/templates\":\"テンプレート\",\"/getting-started/learn\":\"学ぶ\",\"/getting-started/faq\":\"よくある質問と回答\",\"/getting-started/supported-components\":\"サポートされているコンポーネント\",\"/getting-started/supported-platforms\":\"サポートされているプラットフォーム\",\"/getting-started/support\":\"サポート\",\"/components\":\"コンポーネント\",\"/components/about-the-lab\":\"ラボについて\",\"/components/click-away-listener\":\"クリックリスナー\",\"/component/about\":\"ラボについて\",\"/components/app-bar\":\"アプリバー\",\"/components/autocomplete\":\"オートコンプリート\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"基本的な入力\",\"/components/bottom-navigation\":\"ボトムナビゲーション\",\"/components/box\":\"ボックス\",\"/components/breadcrumbs\":\"Breadcrumbs\",\"/components/buttons\":\"Button (ボタン)\",\"/components/cards\":\"Card (カード)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"コンテナ\",\"/components/content\":\"コンテンツ\",\"/components/css-baseline\":\"CSSベースライン\",\"/components/data-display\":\"データの表示\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Drawer\",\"/components/expansion-panels\":\"Expansion Panel (拡張パネル)\",\"/components/feedback\":\"フィードバック\",\"/components/grid\":\"グリッド\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"グリッドリスト\",\"/components/icons\":\"アイコン\",\"/components/inputs\":\"入力\",\"/components/lab\":\"ラボ\",\"/components/layout\":\"レイアウト\",\"/components/links\":\"Link\",\"/components/lists\":\"List (リスト)\",\"/components/menus\":\"Menu\",\"/components/modal\":\"モーダル\",\"/components/navigation\":\"ナビゲーション\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"その他\",\"/components/paper\":\"紙\",\"/components/pickers\":\"日付時刻\",\"/components/popover\":\"ポップオーバー\",\"/components/popper\":\"ポッパー\",\"/components/portal\":\"ポータル\",\"/components/progress\":\"Progress\",\"/components/progress-validation\":\"フィードバック\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Select (選択)\",\"/components/slider\":\"スライダー\",\"/components/snackbars\":\"Snackbar (スナックバー)\",\"/components/speed-dial\":\"スピードダイヤル\",\"/components/steppers\":\"Stepper（ステッパー）\",\"/components/surfaces\":\"サーフェス\",\"/components/switches\":\"Switch\",\"/components/tables\":\"テーブル\",\"/components/tabs\":\"タブ\",\"/components/text-fields\":\"Text Field (テキストフィールド)\",\"/components/toggle-button\":\"トグルボタン\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"転送リスト\",\"/components/transitions\":\"トランジション\",\"/components/typography\":\"タイポグラフィ\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"ユーティリティ\",\"/css-in-js\":\"スタイル\",\"/css-in-js/basics\":\"基本\",\"/css-in-js/advanced\":\"高度な\",\"/system\":\"システム\",\"/system/basics\":\"基本\",\"/system/borders\":\"ボーダー\",\"/system/display\":\"ディスプレイ\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"パレット\",\"/system/positions\":\"Position\",\"/system/shadows\":\"Shadows\",\"/system/sizing\":\"サイジング\",\"/system/spacing\":\"間隔\",\"/system/typography\":\"タイポグラフィ\",\"/customization\":\"カスタマイズ\",\"/customization/theming\":\"Themes\",\"/customization/theme\":\"テーマ\",\"/customization/breakpoints\":\"ブレイクポイント\",\"/customization/color\":\"カラー\",\"/customization/palette\":\"パレット\",\"/customization/type\":\"タイプ(ライト／ダークテーマ)\",\"/customization/typography\":\"タイポグラフィ\",\"/customization/spacing\":\"間隔\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"グローバル\",\"/customization/components\":\"Overrides\",\"/customization/default-theme\":\"デフォルトのテーマ\",\"/guides\":\"ガイド\",\"/guides/api\":\"APIの設計アプローチ\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"スタイルライブラリの相互運用性\",\"/guides/minimizing-bundle-size\":\"バンドルサイズの最小化\",\"/guides/composition\":\"従属関係\",\"/guides/responsive-ui\":\"レスポンシブUI\",\"/guides/server-rendering\":\"サーバーサイドレンダリング\",\"/guides/migration-v3\":\"v3からの移行\",\"/guides/migration-v0x\":\"v0.からの移行\",\"/guides/testing\":\"テスト中\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"右から左\",\"/guides/localization\":\"Localization\",\"/discover-more\":\"もっと知る\",\"/discover-more/showcase\":\"事例\",\"/discover-more/related-projects\":\"関連プロジェクト\",\"/discover-more/roadmap\":\"ロードマップ\",\"/discover-more/backers\":\"スポンサー\",\"/discover-more/vision\":\"ビジョン\",\"/discover-more/team\":\"チーム\",\"/discover-more/community\":\"コミュニティ\",\"/discover-more/changelog\":\"変更履歴\",\"/discover-more/languages\":\"言語\",\"/versions\":\"バージョン\",\"/styles\":\"スタイル\",\"/styles/basics\":\"基本\",\"/styles/advanced\":\"高度な機能\",\"https://themes.material-ui.com/\":\"プレミアムテーマ\",\"/components/material-icons\":\"マテリアルアイコン（Material Icons）\",\"/components/textarea-autosize\":\"テキストエリアの自動サイズ調整\",\"/components/rating\":\"レート\",\"/components/skeleton\":\"スケルトン\",\"/components/tree-view\":\"ツリービュー (Tree View)\",\"/customization/density\":\"密度(Density)\"}}");

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

/***/ "mw0f":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"A quick word from our sponsors:\",\"helpToTranslate\":\"Help to translate\",\"editWebsiteColors\":\"Edit website colors\",\"useDarkTheme\":\"Use dark theme\",\"toggleTheme\":\"Toggle light/dark theme\",\"toggleRTL\":\"Toggle right-to-left/left-to-right\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"GitHub repository\",\"strapline\":\"React components for faster and easier web development. Build your own design system, or start with Material Design.\",\"getStarted\":\"Get Started\",\"installation\":\"Installation\",\"installDescr\":\"Install Material-UI's source files via npm. We take care of injecting the CSS needed.\",\"cdn\":\"or use a CDN.\",\"loadFont\":\"Load the default Roboto font.\",\"installButton\":\"Read installation docs\",\"usage\":\"Usage\",\"usageDescr\":\"Material-UI components work without any additional setup, and don't pollute the global scope.\",\"usageButton\":\"Explore the docs\",\"themes\":\"Premium themes\",\"themesDescr\":\"Take your project to the next level with premium themes from our store – all built on Material-UI.\",\"themesButton\":\"Browse themes\",\"whosUsing\":\"Who's using Material-UI?\",\"joinThese\":\"Join these and other great organisations!\",\"usingMui\":\"Are you using Material-UI?\",\"letUsKnow\":\"Let us know!\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"footerCommunity\":\"Community\",\"footerResources\":\"Resources\",\"footerCompany\":\"Company\",\"homeFooterRelease\":\"Currently {{versionNumber}}. Released under the {{license}}.\",\"license\":\"MIT License\",\"likeMui\":\"Help us keep running\",\"adblock\":\"If you don't mind tech related ads (no tracking or remarketing), and want to keep us running, please whitelist Material-UI in your blocker.\",\"thanks\":\"Thank you!\",\"editPage\":\"Edit this page\",\"tableOfContents\":\"Contents\",\"sourceCode\":\"Source code\",\"traffic\":\"Traffic\",\"newest\":\"Newest\",\"stars\":\"GitHub stars\",\"visit\":\"Visit the website\",\"dashboardTitle\":\"Dashboard\",\"dashboardDescr\":\"A minimal dashboard with taskbar and mini variant draw. The chart is courtesy of Recharts, but it is simple to substitute an alternative.\",\"signInTitle\":\"Sign In\",\"signInDescr\":\"A simple Sign In page.\",\"signInSideTitle\":\"Sign-in side\",\"signInSideDescr\":\"A simple Sign In side page.\",\"signUpTitle\":\"Sign Up\",\"signUpDescr\":\"A simple Sign Up page.\",\"blogTitle\":\"Blog\",\"blogDescr\":\"A sophisticated blog page layout. Markdown support is courtesy of markdown-to-jsx but is easily replaced.\",\"checkoutTitle\":\"Checkout\",\"checkoutDescr\":\"A step-by-step checkout page layout. Adapt the number of steps to suit your needs, or make steps optional.\",\"albumTitle\":\"Album\",\"albumDescr\":\"A responsive album / gallery page layout with a hero unit and footer.\",\"pricingTitle\":\"Pricing\",\"pricingDescr\":\"Quickly build an effective pricing table for your potential customers with this page layout.\",\"stickyFooterTitle\":\"Sticky footer\",\"stickyFooterDescr\":\"Attach a footer to the bottom of the viewport when page content is short.\",\"expandAll\":\"Expand all\",\"showSource\":\"Show the source\",\"hideSource\":\"Hide the source\",\"showFullSource\":\"Show the full source\",\"hideFullSource\":\"Hide the full source\",\"viewGitHub\":\"View the source on GitHub\",\"codesandbox\":\"Edit in CodeSandbox\",\"seeMore\":\"See more\",\"copySource\":\"Copy the source\",\"copiedSource\":\"The source code has been copied.\",\"copySourceLinkJS\":\"Copy link to JavaScript source\",\"copySourceLinkTS\":\"Copy link to TypeScript source\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"stackblitz\":\"Edit in StackBlitz (JS only)\",\"headTitle\":\"Material-UI: A popular React UI framework\",\"emojiLove\":\"Love\",\"emoojiWarning\":\"Warning\",\"mainNavigation\":\"Main navigation\",\"skipToContent\":\"Skip to content\",\"openDrawer\":\"Open main navigation\",\"changeLanguage\":\"Change language\",\"pageTOC\":\"Page table of contents\",\"showJSSource\":\"Show JavaScript source\",\"showTSSource\":\"Show TypeScript source\",\"close\":\"Close\",\"useHighDensity\":\"Apply higher density via props\",\"spacingUnit\":\"Spacing unit\",\"resetDensity\":\"Reset density\",\"increaseSpacing\":\"increase spacing\",\"decreaseSpacing\":\"decrease spacing\",\"getProfessionalSupport\":\"Get Professional Support\",\"diamondSponsors\":\"Diamond Sponsors\",\"pages\":{\"/getting-started\":\"Getting Started\",\"/getting-started/installation\":\"Installation\",\"/getting-started/usage\":\"Usage\",\"/getting-started/example-projects\":\"Example Projects\",\"/getting-started/templates\":\"Templates\",\"/getting-started/learn\":\"Learn\",\"/getting-started/faq\":\"FAQs\",\"/getting-started/supported-components\":\"Supported Components\",\"/getting-started/supported-platforms\":\"Supported Platforms\",\"/getting-started/support\":\"Support\",\"/components\":\"Components\",\"/components/about-the-lab\":\"About The Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"About The Lab\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autocomplete\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Basic Inputs\",\"/components/bottom-navigation\":\"Bottom Navigation\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Breadcrumbs\",\"/components/buttons\":\"Button\",\"/components/cards\":\"Card\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Content\",\"/components/css-baseline\":\"CSS Baseline\",\"/components/data-display\":\"Data Display\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Drawer\",\"/components/expansion-panels\":\"Expansion Panel\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Grid List\",\"/components/icons\":\"Icons\",\"/components/inputs\":\"Inputs\",\"/components/lab\":\"Lab\",\"/components/layout\":\"Layout\",\"/components/links\":\"Link\",\"/components/lists\":\"List\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navigation\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Other\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Date / Time\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Progress\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Select\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Speed Dial\",\"/components/steppers\":\"Stepper\",\"/components/surfaces\":\"Surfaces\",\"/components/switches\":\"Switch\",\"/components/tables\":\"Table\",\"/components/tabs\":\"Tabs\",\"/components/text-fields\":\"Text Field\",\"/components/toggle-button\":\"Toggle Button\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"Transfer List\",\"/components/transitions\":\"Transitions\",\"/components/typography\":\"Typography\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utils\",\"/css-in-js\":\"Styles\",\"/css-in-js/basics\":\"Basics\",\"/css-in-js/advanced\":\"Advanced\",\"/system\":\"System\",\"/system/basics\":\"Basics\",\"/system/borders\":\"Borders\",\"/system/display\":\"Display\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette\",\"/system/positions\":\"Positions\",\"/system/shadows\":\"Shadows\",\"/system/sizing\":\"Sizing\",\"/system/spacing\":\"Spacing\",\"/system/typography\":\"Typography\",\"/customization\":\"Customization\",\"/customization/theming\":\"Overview\",\"/customization/theme\":\"Theming\",\"/customization/breakpoints\":\"Breakpoints\",\"/customization/color\":\"Color\",\"/customization/palette\":\"Palette\",\"/customization/type\":\"Type (light / dark theme)\",\"/customization/typography\":\"Typography\",\"/customization/spacing\":\"Spacing\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globals\",\"/customization/components\":\"Components\",\"/customization/default-theme\":\"Default Theme\",\"/guides\":\"Guides\",\"/guides/api\":\"API Design Approach\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Style Library Interoperability\",\"/guides/minimizing-bundle-size\":\"Minimizing Bundle Size\",\"/guides/composition\":\"Composition\",\"/guides/responsive-ui\":\"Responsive UI\",\"/guides/server-rendering\":\"Server Rendering\",\"/guides/migration-v3\":\"Migration From v3\",\"/guides/migration-v0x\":\"Migration From v0.x\",\"/guides/testing\":\"Testing\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Right-to-left\",\"/guides/localization\":\"Localization\",\"/discover-more\":\"Discover More\",\"/discover-more/showcase\":\"Showcase\",\"/discover-more/related-projects\":\"Related Projects\",\"/discover-more/roadmap\":\"Roadmap\",\"/discover-more/backers\":\"Sponsors & Backers\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Team\",\"/discover-more/community\":\"Community\",\"/discover-more/changelog\":\"Changelog\",\"/discover-more/languages\":\"Languages\",\"/versions\":\"Versions\",\"/styles\":\"Styles\",\"/styles/basics\":\"Basics\",\"/styles/advanced\":\"Advanced\",\"https://material-ui.com/store/\":\"Store\",\"/components/material-icons\":\"Material Icons\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Rating\",\"/components/skeleton\":\"Skeleton\",\"/components/tree-view\":\"Tree View\",\"/customization/density\":\"Density\",\"/components/button-group\":\"Button Group\",\"/components/floating-action-button\":\"Floating Action Button\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alert\",\"/components/pagination\":\"Pagination\"}}");

/***/ }),

/***/ "nRKQ":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-json");

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "on4p":
/***/ (function(module, exports) {

module.exports = require("jss-plugin-props-sort");

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

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "sLcN":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"来自我们的赞助商的一个简短概括：\",\"helpToTranslate\":\"帮助我们翻译\",\"editWebsiteColors\":\"编辑网站的颜色\",\"useDarkTheme\":\"使用暗色主题\",\"toggleTheme\":\"切换浅色/深色主题\",\"toggleRTL\":\"切换 从右到左/从左到右\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"GitHub 存储库\",\"strapline\":\"React 组件用于更快速、更简便的 web 开发。你也可以建立你自己的设计系统，或者从 Material Design 开始。\",\"getStarted\":\"起步\",\"installation\":\"安装\",\"installDescr\":\"您可以通过 npm 安装 Material-UI 的源码。我们会负责注入所需的 CSS。\",\"cdn\":\"或使用 CDN。\",\"loadFont\":\"加载默认 Roboto 字体。\",\"installButton\":\"阅读安装文档\",\"usage\":\"使用\",\"usageDescr\":\"Material-UI 组件无需任何额外的设置即可使用, 并且不会污染全局范围。\",\"usageButton\":\"探索文档\",\"themes\":\"高级版主题\",\"themesDescr\":\"通过我们的官方市场中的高级主题——均以 Material-UI 为基础，让你的项目更上一层楼。\",\"themesButton\":\"浏览主题\",\"whosUsing\":\"有哪些人使用 Material-UI？\",\"joinThese\":\"请参与到这些或者其他强大的组织中去！\",\"usingMui\":\"你在使用 Material-UI 吗？\",\"letUsKnow\":\"请告诉我们吧！\",\"praise\":\"给 Material-UI 点赞\",\"praiseDescr\":\"以下是我们的一些用户的看法。\",\"footerCommunity\":\"社区\",\"footerResources\":\"资源\",\"footerCompany\":\"企业\",\"homeFooterRelease\":\"当前 {{versionNumber}}. 根据 {{license}} 发布。\",\"license\":\"MIT 许可证\",\"likeMui\":\"帮助我们继续运行\",\"adblock\":\"如果您不介意与技术相关的广告，并且支持开源代码，请在你的 ad blocker 中将 Material-UI 设置为白名单。\",\"thanks\":\"感谢！\",\"editPage\":\"帮助改进此页面的翻译\",\"tableOfContents\":\"目录\",\"sourceCode\":\"源代码\",\"traffic\":\"流量\",\"newest\":\"最新的\",\"stars\":\"GitHub 点赞数\",\"visit\":\"访问网站\",\"dashboardTitle\":\"管理面板\",\"dashboardDescr\":\"这是一个含有任务栏和迷你变体抽屉的最小化管理面板。这个图表由 Recharts 提供，但是很容易替换成其他的。\",\"signInTitle\":\"登录\",\"signInDescr\":\"这是一个简单的登录页面。\",\"signInSideTitle\":\"侧边页登录\",\"signInSideDescr\":\"一个简单的侧边登录页面\",\"signUpTitle\":\"注册\",\"signUpDescr\":\"一个简单的注册页面\",\"blogTitle\":\"博客\",\"blogDescr\":\"这是一个精致复杂的博客页面布局。这个 Markdown 由 markdown-to-jsx 提供支持，但是这也不难替换。\",\"checkoutTitle\":\"支付\",\"checkoutDescr\":\"这是一个逐步建立的支付页面布局。根据您的需求调整步骤数，或选取部分步骤。\",\"albumTitle\":\"相册\",\"albumDescr\":\"一个包含了一个hero的单元和页脚的响应式相册/展览页面布局\",\"pricingTitle\":\"定价\",\"pricingDescr\":\"使用此页面布局来快速为您的潜在客户建立有效的价格表单。\",\"stickyFooterTitle\":\"Sticky footer\",\"stickyFooterDescr\":\"当页面内容比较简短的时候，在可视区域的底端附加上一个页脚。\",\"expandAll\":\"展开全部\",\"showSource\":\"查看源代码\",\"hideSource\":\"隐藏源代码\",\"showFullSource\":\"显示全部源代码\",\"hideFullSource\":\"隐藏全部源代码\",\"viewGitHub\":\"在 GitHub 中查看源代码\",\"codesandbox\":\"在 CodeSandbox 中编辑\",\"seeMore\":\"查看更多\",\"copySource\":\"复制源代码\",\"copiedSource\":\"源代码已被复制。\",\"copySourceLinkJS\":\"请将链接复制到 JavaScript 源代码\",\"copySourceLinkTS\":\"请将链接复制到 TypeScript 源代码\",\"copiedSourceLink\":\"源代码的链接已被复制。\",\"stackblitz\":\"在 StackBlitz 中编辑（仅限JS）\",\"headTitle\":\"Material-UI：当下流行的 React UI 框架\",\"emojiLove\":\"喜爱\",\"emoojiWarning\":\"警告\",\"mainNavigation\":\"主导航\",\"skipToContent\":\"跳转到内容\",\"openDrawer\":\"打开主导航栏\",\"changeLanguage\":\"更改语言\",\"pageTOC\":\"目录内容的页面\",\"showJSSource\":\"显示 JavaScript 源代码\",\"showTSSource\":\"显示 TypeScript 源代码\",\"close\":\"关闭\",\"useHighDensity\":\"通过 props 来实现更高的密度值\",\"spacingUnit\":\"间隔单元\",\"resetDensity\":\"重置密度\",\"increaseSpacing\":\"增加间距\",\"decreaseSpacing\":\"减少间距\",\"getProfessionalSupport\":\"得到专业的支持\",\"diamondSponsors\":\"钻石赞助商\",\"pages\":{\"/getting-started\":\"入门教程\",\"/getting-started/installation\":\"安装\",\"/getting-started/usage\":\"使用\",\"/getting-started/example-projects\":\"范例项目\",\"/getting-started/templates\":\"模板\",\"/getting-started/learn\":\"学习\",\"/getting-started/faq\":\"常见问题解答\",\"/getting-started/supported-components\":\"支持的组件\",\"/getting-started/supported-platforms\":\"支持的平台\",\"/getting-started/support\":\"支持\",\"/components\":\"组件\",\"/components/about-the-lab\":\"关于 Lab\",\"/components/click-away-listener\":\"Click Away Listener 他处点击监听器\",\"/component/about\":\"关于 Lab\",\"/components/app-bar\":\"App Bar 应用栏\",\"/components/autocomplete\":\"Autocomplete 自动补全\",\"/components/avatars\":\"Avatar 头像\",\"/components/badges\":\"Badge 徽章\",\"/components/basic-inputs\":\"基本的输入\",\"/components/bottom-navigation\":\"Bottom Navigation 底部导航栏\",\"/components/box\":\"Box 分组\",\"/components/breadcrumbs\":\"Breadcrumbs 面包屑导航\",\"/components/buttons\":\"Button 按钮\",\"/components/cards\":\"Cards 卡片\",\"/components/checkboxes\":\"Checkbox 选择框\",\"/components/chips\":\"Chip 纸片组件\",\"/components/container\":\"Container 容器\",\"/components/content\":\"Content 内容\",\"/components/css-baseline\":\"CSS Baseline 基线\",\"/components/data-display\":\"数据展示\",\"/components/dialogs\":\"Dialog 对话框\",\"/components/dividers\":\"Divider 分隔线\",\"/components/drawers\":\"Drawer 抽屉\",\"/components/expansion-panels\":\"Expansion Panel 拓展面板\",\"/components/feedback\":\"用户反馈\",\"/components/grid\":\"Grid 栅格\",\"/components/hidden\":\"Hidden 隐藏\",\"/components/grid-list\":\"Grid List 网格列表\",\"/components/icons\":\"Icons 图标\",\"/components/inputs\":\"输入\",\"/components/lab\":\"实验室\",\"/components/layout\":\"布局\",\"/components/links\":\"Link 链接\",\"/components/lists\":\"Lists 列表\",\"/components/menus\":\"Menu 菜单\",\"/components/modal\":\"Modal 模态框\",\"/components/navigation\":\"导航栏\",\"/components/no-ssr\":\"No SSR 没有\",\"/components/other\":\"其他\",\"/components/paper\":\"Paper 纸张\",\"/components/pickers\":\"Date/Time 日期/时间\",\"/components/popover\":\"Popover 弹出框\",\"/components/popper\":\"Popper 弹出提示工具\",\"/components/portal\":\"Portal 传送门\",\"/components/progress\":\"Progress 进度条\",\"/components/progress-validation\":\"用户反馈\",\"/components/radio-buttons\":\"Radio 单选框\",\"/components/selects\":\"Select 选择器\",\"/components/slider\":\"Slider 滑块\",\"/components/snackbars\":\"Snackbar 消息条\",\"/components/speed-dial\":\"Speed Dial 快速拨号\",\"/components/steppers\":\"Stepper 步进器\",\"/components/surfaces\":\"表面\",\"/components/switches\":\"Switch 开关\",\"/components/tables\":\"Table 表格\",\"/components/tabs\":\"Tabs 选项卡\",\"/components/text-fields\":\"TextField 文本框\",\"/components/toggle-button\":\"Toggle Button 切换按钮\",\"/components/tooltips\":\"Tooltip 提示\",\"/components/transfer-list\":\"Transfer List 传递列表\",\"/components/transitions\":\"Transitions 过渡动画\",\"/components/typography\":\"Typography 文字铸排\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"工具包\",\"/css-in-js\":\"样式\",\"/css-in-js/basics\":\"基础\",\"/css-in-js/advanced\":\"进阶\",\"/system\":\"系统\",\"/system/basics\":\"基础\",\"/system/borders\":\"Borders 边框属性\",\"/system/display\":\"Display 显示属性\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette 调色\",\"/system/positions\":\"Positions 位置\",\"/system/shadows\":\"Shadows 阴影属性\",\"/system/sizing\":\"Sizing 大小\",\"/system/spacing\":\"Spacing 间距\",\"/system/typography\":\"Typography 文字铸排\",\"/customization\":\"个性化\",\"/customization/theming\":\"概览\",\"/customization/theme\":\"主题\",\"/customization/breakpoints\":\"Breakpoints 断点\",\"/customization/color\":\"Color 颜色\",\"/customization/palette\":\"Palette 调色\",\"/customization/type\":\"类型（浅色/深色主题）\",\"/customization/typography\":\"Typography 文字铸排\",\"/customization/spacing\":\"Spacing 间距\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"全局变量\",\"/customization/components\":\"Components 组件\",\"/customization/default-theme\":\"默认主题\",\"/guides\":\"指南\",\"/guides/api\":\"API 设计方法\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"样式库的互通性\",\"/guides/minimizing-bundle-size\":\"最小化打包文件大小\",\"/guides/composition\":\"组合\",\"/guides/responsive-ui\":\"响应式 UI\",\"/guides/server-rendering\":\"服务器端渲染\",\"/guides/migration-v3\":\"从v3版本迁移\",\"/guides/migration-v0x\":\"从v0.x版本迁移\",\"/guides/testing\":\"测试\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"源文语言从右至左读\",\"/guides/localization\":\"本地化\",\"/discover-more\":\"发现更多\",\"/discover-more/showcase\":\"展示\",\"/discover-more/related-projects\":\"相关的项目\",\"/discover-more/roadmap\":\"产品路线图\",\"/discover-more/backers\":\"赞助商和支持者\",\"/discover-more/vision\":\"愿景\",\"/discover-more/team\":\"团队\",\"/discover-more/community\":\"社区\",\"/discover-more/changelog\":\"更新日志\",\"/discover-more/languages\":\"语言\",\"/versions\":\"版本\",\"/styles\":\"样式表单\",\"/styles/basics\":\"基础\",\"/styles/advanced\":\"高级\",\"https://themes.material-ui.com/\":\"高级版主题\",\"/components/material-icons\":\"Material Icons 材料图标\",\"/components/textarea-autosize\":\"Textarea 自动调整大小\",\"/components/rating\":\"Rating 评分\",\"/components/skeleton\":\"Skeleton 骨架屏\",\"/components/tree-view\":\"Tree View 树视图\",\"/customization/density\":\"间距\"}}");

/***/ }),

/***/ "sQhH":
/***/ (function(module) {

module.exports = JSON.parse("{\"homeQuickWord\":\"Несколько слов от наших спонсоров:\",\"helpToTranslate\":\"Помогите нам с переводом\",\"editWebsiteColors\":\"Редактировать цветовую гамму сайта\",\"useDarkTheme\":\"Use dark theme\",\"toggleTheme\":\"Переключить светлую/темную тему\",\"toggleRTL\":\"Переключить справа-налево/слева-направо\",\"toggleNotifications\":\"Toggle notifications panel\",\"github\":\"GitHub репозиторий\",\"strapline\":\"React компоненты для быстрой и легкой веб-разработки. Создайте свой собственный дизайн или начните с Material Design.\",\"getStarted\":\"Начать\",\"installation\":\"Инструкция по установке\",\"installDescr\":\"Установить исходные файлы Material-UI через npm. Мы позаботились о включение необходимых CSS.\",\"cdn\":\"или используйте CDN.\",\"loadFont\":\"Загрузить шрифт Roboto по умолчанию.\",\"installButton\":\"Читать документацию по установке\",\"usage\":\"Использование\",\"usageDescr\":\"Компоненты Material-UI работают без какой-либо дополнительной настройки и не загрязняют глобальную область.\",\"usageButton\":\"Читать документацию\",\"themes\":\"Премиум темы\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"themesButton\":\"Смотреть темы\",\"whosUsing\":\"Кто использует Material-UI?\",\"joinThese\":\"Присоединяйтесь к этим и другим замечательным организациям!\",\"usingMui\":\"Используете ли вы Material-UI?\",\"letUsKnow\":\"Дайте нам знать!\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"footerCommunity\":\"Сообщество\",\"footerResources\":\"Ресурсы\",\"footerCompany\":\"Company\",\"homeFooterRelease\":\"Текущая {{versionNumber}}. Выпущено под {{license}}.\",\"license\":\"Лицензия MIT\",\"likeMui\":\"Нравится Material-UI?\",\"adblock\":\"Если вы не против рекламы, связанной с технологиями, и хотите поддерживать Open Source, добавьте Material-UI в белый список своего блокиратора рекламы.\",\"thanks\":\"Спасибо!\",\"editPage\":\"Редактировать эту страницу\",\"tableOfContents\":\"Содержание\",\"sourceCode\":\"Исходный код\",\"traffic\":\"Трафик\",\"newest\":\"По новизне\",\"stars\":\"Звезды на GitHub\",\"visit\":\"Посетить веб-сайт\",\"dashboardTitle\":\"Панель управления\",\"dashboardDescr\":\"Минималистичная панель управления с панелью задач и небольшим графиком. График любезно предоставлен Recharts, но легко могут быть заменены на другие.\",\"signInTitle\":\"Авторизация\",\"signInDescr\":\"Простая страница входа.\",\"signInSideTitle\":\"Сторона входа\",\"signInSideDescr\":\"Простая страница входа в систему.\",\"signUpTitle\":\"Зарегистрируйтесь\",\"signUpDescr\":\"Простая страница регистрации.\",\"blogTitle\":\"Блог\",\"blogDescr\":\"Сложный макет страницы блога. Поддержка Markdown любезно предоставлена markdown-to-jsx, но его легко заменить на другой.\",\"checkoutTitle\":\"Страница оформления заказа\",\"checkoutDescr\":\"Макет пошаговой страницы оформления заказа. Измените количество шагов по своему усмотрению или сделайте их опциональными.\",\"albumTitle\":\"Альбом\",\"albumDescr\":\"Адаптивный макет страницы альбома/галереи с выделенным блоком (hero unit) и подвалом (footer).\",\"pricingTitle\":\"Цены\",\"pricingDescr\":\"Быстро создайте эффективную таблицу цен для ваших потенциальных покупателей с использованием этого макета страницы.\",\"stickyFooterTitle\":\"Липкий футер\",\"stickyFooterDescr\":\"Крепите футер к нижней части окна, когда высота содержимого небольшая.\",\"expandAll\":\"Развернуть все\",\"showSource\":\"Показать исходник\",\"hideSource\":\"Скрыть исходник\",\"showFullSource\":\"Показать источник\",\"hideFullSource\":\"Скрыть источник\",\"viewGitHub\":\"Посмотреть исходник на GitHub\",\"codesandbox\":\"Редактировать в CodeSandbox\",\"seeMore\":\"Ещё\",\"copySource\":\"Копировать исходник\",\"copiedSource\":\"The source code has been copied.\",\"copySourceLinkJS\":\"Скопировать ссылку на исходный код JavaScript\",\"copySourceLinkTS\":\"Скопировать ссылку на TypeScript источник\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"stackblitz\":\"Редактировать в StackBlitz (только JS)\",\"headTitle\":\"Материал-интерфейс: популярный фреймворк React UI\",\"emojiLove\":\"Любовь\",\"emoojiWarning\":\"Внимание\",\"mainNavigation\":\"Основное меню\",\"skipToContent\":\"Перейти к контенту\",\"openDrawer\":\"Открыть панель навигации\",\"changeLanguage\":\"Сменить язык\",\"pageTOC\":\"Содержание\",\"showJSSource\":\"Показать источник TypeScript\",\"showTSSource\":\"Показать источник TypeScript\",\"close\":\"Закрыть\",\"useHighDensity\":\"Apply higher density via props\",\"spacingUnit\":\"Интервал\",\"resetDensity\":\"Reset density\",\"increaseSpacing\":\"increase spacing\",\"decreaseSpacing\":\"decrease spacing\",\"getProfessionalSupport\":\"Get Professional Support\",\"diamondSponsors\":\"Алмазные спонсоры\",\"pages\":{\"/getting-started\":\"Приступая к работе\",\"/getting-started/installation\":\"Инструкция по установке\",\"/getting-started/usage\":\"Использование\",\"/getting-started/example-projects\":\"Примеры проектов\",\"/getting-started/templates\":\"Шаблоны\",\"/getting-started/learn\":\"Узнать\",\"/getting-started/faq\":\"Часто задаваемые вопросы (FAQ)\",\"/getting-started/supported-components\":\"Поддерживаемые компоненты\",\"/getting-started/supported-platforms\":\"Поддерживаемые платформы\",\"/getting-started/support\":\"Support\",\"/components\":\"Компоненты\",\"/components/about-the-lab\":\"About The Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"About The Lab\",\"/components/app-bar\":\"Панель навигации\",\"/components/autocomplete\":\"Автодополнение\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Basic Inputs\",\"/components/bottom-navigation\":\"Bottom Navigation (Нижняя панель навигации)\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Хлебные крошки\",\"/components/buttons\":\"Button (кнопки)\",\"/components/cards\":\"Card (карточка)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Контент\",\"/components/css-baseline\":\"CSS Baseline\",\"/components/data-display\":\"Отображение данных\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Панель\",\"/components/expansion-panels\":\"Expansion Panel (панель расширения)\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Сеть изображений\",\"/components/icons\":\"Иконки\",\"/components/inputs\":\"Поля ввода\",\"/components/lab\":\"Лаборатория\",\"/components/layout\":\"Расположение\",\"/components/links\":\"Link\",\"/components/lists\":\"Список\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Навигацию\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Прочее\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Дата / время\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Прогресс\",\"/components/progress-validation\":\"Обратная связь\",\"/components/radio-buttons\":\"Радиокнопка\",\"/components/selects\":\"Select (Список)\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Speed Dial\",\"/components/steppers\":\"Stepper\",\"/components/surfaces\":\"Surfaces\",\"/components/switches\":\"Switch (переключатель)\",\"/components/tables\":\"Table (tаблица)\",\"/components/tabs\":\"Вкладки\",\"/components/text-fields\":\"Text Field (Текстовое поле)\",\"/components/toggle-button\":\"Кнопка-переключатель\",\"/components/tooltips\":\"Tooltip (подсказки)\",\"/components/transfer-list\":\"Transfer List\",\"/components/transitions\":\"Transições\",\"/components/typography\":\"Оформление текста\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Утилиты\",\"/css-in-js\":\"Стили\",\"/css-in-js/basics\":\"Основы\",\"/css-in-js/advanced\":\"Дополнительные параметры\",\"/system\":\"Система\",\"/system/basics\":\"Основы\",\"/system/borders\":\"Границы\",\"/system/display\":\"Display\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Палитра\",\"/system/positions\":\"Positions\",\"/system/shadows\":\"Тени\",\"/system/sizing\":\"Sizing\",\"/system/spacing\":\"Интервал\",\"/system/typography\":\"Оформление текста\",\"/customization\":\"Кастомизация\",\"/customization/theming\":\"Themes\",\"/customization/theme\":\"Темизация\",\"/customization/breakpoints\":\"Точки останова\",\"/customization/color\":\"Цвет\",\"/customization/palette\":\"Палитра\",\"/customization/type\":\"Тип (светлая / темная тема)\",\"/customization/typography\":\"Оформление текста\",\"/customization/spacing\":\"Интервал\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Глобальная настройка\",\"/customization/components\":\"Overrides\",\"/customization/default-theme\":\"Тема по умолчанию\",\"/guides\":\"Руководства\",\"/guides/api\":\"Подход к проектированию API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Style Library Interoperability\",\"/guides/minimizing-bundle-size\":\"Minimizing Bundle Size\",\"/guides/composition\":\"Composition\",\"/guides/responsive-ui\":\"Адаптивный пользовательский интерфейс\",\"/guides/server-rendering\":\"Серверная отрисовка\",\"/guides/migration-v3\":\"Переход с v3\",\"/guides/migration-v0x\":\"Переход с v0.x\",\"/guides/testing\":\"Тестирование\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Справа налево\",\"/guides/localization\":\"Локализация\",\"/discover-more\":\"Узнайть больше\",\"/discover-more/showcase\":\"Showcase\",\"/discover-more/related-projects\":\"Связанные проекты\",\"/discover-more/roadmap\":\"План\",\"/discover-more/backers\":\"Спонсоры\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Команда\",\"/discover-more/community\":\"Сообщество\",\"/discover-more/changelog\":\"Журнал изменений\",\"/discover-more/languages\":\"Языки\",\"/versions\":\"Версии\",\"/styles\":\"Стили\",\"/styles/basics\":\"Основы\",\"/styles/advanced\":\"Дополнительные параметры\",\"https://themes.material-ui.com/\":\"Премиум темы\",\"/components/material-icons\":\"Material Иконки\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Рейтинг\",\"/components/skeleton\":\"Скелет\",\"/components/tree-view\":\"Иерархическое представление\",\"/customization/density\":\"Density\"}}");

/***/ }),

/***/ "scDZ":
/***/ (function(module, exports, __webpack_require__) {

// Disable auto highlighting
// https://github.com/PrismJS/prism/issues/765
if (false) {}

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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

/***/ })

/******/ });