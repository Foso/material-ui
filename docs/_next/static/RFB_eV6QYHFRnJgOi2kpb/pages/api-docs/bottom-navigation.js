(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3How":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/bottom-navigation",function(){return t("lf6B")}])},lf6B:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var o=t("mXGw"),a=t.n(o),s=t("e+1t"),i=t("uPvI"),p=t.n(i),r=(0,a.a.createElement)(s.a,{markdown:p.a});function l(){return r}},uPvI:function(n,e){n.exports='---\nfilename: /packages/material-ui/src/BottomNavigation/BottomNavigation.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# BottomNavigation API\n\n<p class="description">The API documentation of the BottomNavigation React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport BottomNavigation from \'@material-ui/core/BottomNavigation\';\n// or\nimport { BottomNavigation } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the value changes.<br><br>**Signature:**<br>`function(event: object, value: any) => void`<br>*event:* The event source of the callback.<br>*value:* We default to the index of the child. |\n| <span class="prop-name">showLabels</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, all `BottomNavigationAction`s will show their labels. By default, only the selected `BottomNavigationAction` will show its label. |\n| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | The value of the currently selected `BottomNavigationAction`. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiBottomNavigation`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiBottomNavigation-root</span> | Styles applied to the root element.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/BottomNavigation/BottomNavigation.js) for more detail.\n\n## Demos\n\n- [Bottom Navigation](/components/bottom-navigation/)\n\n'}},[["3How",0,1]]]);