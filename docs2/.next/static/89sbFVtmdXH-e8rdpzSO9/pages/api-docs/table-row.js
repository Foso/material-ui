(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{NwkV:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i}));var o=a("mXGw"),s=a.n(o),t=a("e+1t"),p=a("mi7H"),l=a.n(p),r=(0,s.a.createElement)(t.a,{markdown:l.a});function i(){return r}},mIrJ:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/table-row",function(){return a("NwkV")}])},mi7H:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/TableRow/TableRow.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# TableRow API\n\n<p class="description">The API documentation of the TableRow React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport TableRow from \'@material-ui/core/TableRow\';\n// or\nimport { TableRow } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nWill automatically set dynamic row height\nbased on the material table element parent (head, body, etc).\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Should be valid &lt;tr> children such as `TableCell`. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'tr\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the table row will shade on hover. |\n| <span class="prop-name">selected</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the table row will have the selected shading. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiTableRow`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTableRow-root</span> | Styles applied to the root element.\n| <span class="prop-name">selected</span> | <span class="prop-name">.Mui-selected</span> | Pseudo-class applied to the root element if `selected={true}`.\n| <span class="prop-name">hover</span> | <span class="prop-name">.MuiTableRow-hover</span> | Pseudo-class applied to the root element if `hover={true}`.\n| <span class="prop-name">head</span> | <span class="prop-name">.MuiTableRow-head</span> | Styles applied to the root element if table variant="head".\n| <span class="prop-name">footer</span> | <span class="prop-name">.MuiTableRow-footer</span> | Styles applied to the root element if table variant="footer".\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/TableRow/TableRow.js) for more detail.\n\n## Demos\n\n- [Tables](/components/tables/)\n\n'}},[["mIrJ",0,1]]]);