(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4sxa":function(e,n){e.exports='---\nfilename: /packages/material-ui/src/CardMedia/CardMedia.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# CardMedia API\n\n<p class="description">The API documentation of the CardMedia React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport CardMedia from \'@material-ui/core/CardMedia\';\n// or\nimport { CardMedia } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | Component for rendering image. Either a string to use a DOM element or a component. |\n| <span class="prop-name">image</span> | <span class="prop-type">string</span> |  | Image to be displayed as a background image. Either `image` or `src` prop must be specified. Note that caller must specify height otherwise the image will not be visible. |\n| <span class="prop-name">src</span> | <span class="prop-type">string</span> |  | An alias for `image` property. Available only with media components. Media components: `video`, `audio`, `picture`, `iframe`, `img`. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiCardMedia`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiCardMedia-root</span> | Styles applied to the root element.\n| <span class="prop-name">media</span> | <span class="prop-name">.MuiCardMedia-media</span> | Styles applied to the root element if `component="video, audio, picture, iframe, or img"`.\n| <span class="prop-name">img</span> | <span class="prop-name">.MuiCardMedia-img</span> | Styles applied to the root element if `component="picture or img"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/CardMedia/CardMedia.js) for more detail.\n\n## Demos\n\n- [Cards](/components/cards/)\n\n'},"7b6u":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/card-media",function(){return a("Am6d")}])},Am6d:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return m}));var o=a("mXGw"),t=a.n(o),s=a("e+1t"),i=a("4sxa"),p=a.n(i),r=(0,t.a.createElement)(s.a,{markdown:p.a});function m(){return r}}},[["7b6u",0,1]]]);