(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1oNu":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/button",function(){return a("cNI6")}])},RuLd:function(n,e){n.exports='---\nfilename: /packages/material-ui/src/Button/Button.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Button API\n\n<p class="description">The API documentation of the Button React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Button from \'@material-ui/core/Button\';\n// or\nimport { Button } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The content of the button. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">color</span> | <span class="prop-type">\'default\'<br>&#124;&nbsp;\'inherit\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'</span> | <span class="prop-default">\'default\'</span> | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'button\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the button will be disabled. |\n| <span class="prop-name">disableElevation</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, no elevation is used. |\n| <span class="prop-name">disableFocusRipple</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the  keyboard focus ripple will be disabled. `disableRipple` must also be true. |\n| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool</span> |  | If `true`, the ripple effect will be disabled.<br>\u26a0\ufe0f Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the `focusVisibleClassName`. |\n| <span class="prop-name">endIcon</span> | <span class="prop-type">node</span> |  | Element placed after the children. |\n| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the button will take up the full width of its container. |\n| <span class="prop-name">href</span> | <span class="prop-type">string</span> |  | The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node. |\n| <span class="prop-name">size</span> | <span class="prop-type">\'small\'<br>&#124;&nbsp;\'medium\'<br>&#124;&nbsp;\'large\'</span> | <span class="prop-default">\'medium\'</span> | The size of the button. `small` is equivalent to the dense button styling. |\n| <span class="prop-name">startIcon</span> | <span class="prop-type">node</span> |  | Element placed before the children. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'text\'<br>&#124;&nbsp;\'outlined\'<br>&#124;&nbsp;\'contained\'</span> | <span class="prop-default">\'text\'</span> | The variant to use. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([ButtonBase](/api/button-base/)).\n\n## CSS\n\n- Style sheet name: `MuiButton`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiButton-root</span> | Styles applied to the root element.\n| <span class="prop-name">label</span> | <span class="prop-name">.MuiButton-label</span> | Styles applied to the span element that wraps the children.\n| <span class="prop-name">text</span> | <span class="prop-name">.MuiButton-text</span> | Styles applied to the root element if `variant="text"`.\n| <span class="prop-name">textPrimary</span> | <span class="prop-name">.MuiButton-textPrimary</span> | Styles applied to the root element if `variant="text"` and `color="primary"`.\n| <span class="prop-name">textSecondary</span> | <span class="prop-name">.MuiButton-textSecondary</span> | Styles applied to the root element if `variant="text"` and `color="secondary"`.\n| <span class="prop-name">outlined</span> | <span class="prop-name">.MuiButton-outlined</span> | Styles applied to the root element if `variant="outlined"`.\n| <span class="prop-name">outlinedPrimary</span> | <span class="prop-name">.MuiButton-outlinedPrimary</span> | Styles applied to the root element if `variant="outlined"` and `color="primary"`.\n| <span class="prop-name">outlinedSecondary</span> | <span class="prop-name">.MuiButton-outlinedSecondary</span> | Styles applied to the root element if `variant="outlined"` and `color="secondary"`.\n| <span class="prop-name">contained</span> | <span class="prop-name">.MuiButton-contained</span> | Styles applied to the root element if `variant="contained"`.\n| <span class="prop-name">containedPrimary</span> | <span class="prop-name">.MuiButton-containedPrimary</span> | Styles applied to the root element if `variant="contained"` and `color="primary"`.\n| <span class="prop-name">containedSecondary</span> | <span class="prop-name">.MuiButton-containedSecondary</span> | Styles applied to the root element if `variant="contained"` and `color="secondary"`.\n| <span class="prop-name">disableElevation</span> | <span class="prop-name">.MuiButton-disableElevation</span> | Styles applied to the root element if `disableElevation={true}`.\n| <span class="prop-name">focusVisible</span> | <span class="prop-name">.Mui-focusVisible</span> | Pseudo-class applied to the ButtonBase root element if the button is keyboard focused.\n| <span class="prop-name">disabled</span> | <span class="prop-name">.Mui-disabled</span> | Pseudo-class applied to the root element if `disabled={true}`.\n| <span class="prop-name">colorInherit</span> | <span class="prop-name">.MuiButton-colorInherit</span> | Styles applied to the root element if `color="inherit"`.\n| <span class="prop-name">textSizeSmall</span> | <span class="prop-name">.MuiButton-textSizeSmall</span> | Styles applied to the root element if `size="small"` and `variant="text"`.\n| <span class="prop-name">textSizeLarge</span> | <span class="prop-name">.MuiButton-textSizeLarge</span> | Styles applied to the root element if `size="large"` and `variant="text"`.\n| <span class="prop-name">outlinedSizeSmall</span> | <span class="prop-name">.MuiButton-outlinedSizeSmall</span> | Styles applied to the root element if `size="small"` and `variant="outlined"`.\n| <span class="prop-name">outlinedSizeLarge</span> | <span class="prop-name">.MuiButton-outlinedSizeLarge</span> | Styles applied to the root element if `size="large"` and `variant="outlined"`.\n| <span class="prop-name">containedSizeSmall</span> | <span class="prop-name">.MuiButton-containedSizeSmall</span> | Styles applied to the root element if `size="small"` and `variant="contained"`.\n| <span class="prop-name">containedSizeLarge</span> | <span class="prop-name">.MuiButton-containedSizeLarge</span> | Styles applied to the root element if `size="large"` and `variant="contained"`.\n| <span class="prop-name">sizeSmall</span> | <span class="prop-name">.MuiButton-sizeSmall</span> | Styles applied to the root element if `size="small"`.\n| <span class="prop-name">sizeLarge</span> | <span class="prop-name">.MuiButton-sizeLarge</span> | Styles applied to the root element if `size="large"`.\n| <span class="prop-name">fullWidth</span> | <span class="prop-name">.MuiButton-fullWidth</span> | Styles applied to the root element if `fullWidth={true}`.\n| <span class="prop-name">startIcon</span> | <span class="prop-name">.MuiButton-startIcon</span> | Styles applied to the startIcon element if supplied.\n| <span class="prop-name">endIcon</span> | <span class="prop-name">.MuiButton-endIcon</span> | Styles applied to the endIcon element if supplied.\n| <span class="prop-name">iconSizeSmall</span> | <span class="prop-name">.MuiButton-iconSizeSmall</span> | Styles applied to the icon element if supplied and `size="small"`.\n| <span class="prop-name">iconSizeMedium</span> | <span class="prop-name">.MuiButton-iconSizeMedium</span> | Styles applied to the icon element if supplied and `size="medium"`.\n| <span class="prop-name">iconSizeLarge</span> | <span class="prop-name">.MuiButton-iconSizeLarge</span> | Styles applied to the icon element if supplied and `size="large"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/Button/Button.js) for more detail.\n\n## Inheritance\n\nThe props of the [ButtonBase](/api/button-base/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Button Group](/components/button-group/)\n- [Buttons](/components/buttons/)\n\n'},cNI6:function(n,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return r}));var s=a("mXGw"),t=a.n(s),p=a("e+1t"),o=a("RuLd"),l=a.n(o),i=(0,t.a.createElement)(p.a,{markdown:l.a});function r(){return i}}},[["1oNu",0,1]]]);