(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{deNd:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/tab",function(){return n("md57")}])},md57:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return i}));var s=n("mXGw"),p=n.n(s),o=n("e+1t"),t=n("uA5w"),l=n.n(t),r=(0,p.a.createElement)(o.a,{markdown:l.a});function i(){return r}},uA5w:function(e,a){e.exports='---\nfilename: /packages/material-ui/src/Tab/Tab.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Tab API\n\n<p class="description">The API documentation of the Tab React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Tab from \'@material-ui/core/Tab\';\n// or\nimport { Tab } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">unsupportedProp</span> |  | This prop isn\'t supported. Use the `component` prop if you need to change the children structure. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the tab will be disabled. |\n| <span class="prop-name">disableFocusRipple</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the  keyboard focus ripple will be disabled. `disableRipple` must also be true. |\n| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool</span> |  | If `true`, the ripple effect will be disabled. |\n| <span class="prop-name">icon</span> | <span class="prop-type">node</span> |  | The icon element. |\n| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | The label element. |\n| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | You can provide your own value. Otherwise, we fallback to the child position index. |\n| <span class="prop-name">wrapped</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Tab labels appear in a single row. They can use a second line if needed. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([ButtonBase](/api/button-base/)).\n\n## CSS\n\n- Style sheet name: `MuiTab`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTab-root</span> | Styles applied to the root element.\n| <span class="prop-name">labelIcon</span> | <span class="prop-name">.MuiTab-labelIcon</span> | Styles applied to the root element if both `icon` and `label` are provided.\n| <span class="prop-name">textColorInherit</span> | <span class="prop-name">.MuiTab-textColorInherit</span> | Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`.\n| <span class="prop-name">textColorPrimary</span> | <span class="prop-name">.MuiTab-textColorPrimary</span> | Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`.\n| <span class="prop-name">textColorSecondary</span> | <span class="prop-name">.MuiTab-textColorSecondary</span> | Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`.\n| <span class="prop-name">selected</span> | <span class="prop-name">.Mui-selected</span> | Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component).\n| <span class="prop-name">disabled</span> | <span class="prop-name">.Mui-disabled</span> | Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component).\n| <span class="prop-name">fullWidth</span> | <span class="prop-name">.MuiTab-fullWidth</span> | Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component).\n| <span class="prop-name">wrapped</span> | <span class="prop-name">.MuiTab-wrapped</span> | Styles applied to the root element if `wrapped={true}`.\n| <span class="prop-name">wrapper</span> | <span class="prop-name">.MuiTab-wrapper</span> | Styles applied to the `icon` and `label`\'s wrapper element.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/Tab/Tab.js) for more detail.\n\n## Inheritance\n\nThe props of the [ButtonBase](/api/button-base/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Tabs](/components/tabs/)\n\n'}},[["deNd",0,1]]]);