(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"9QxI":function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/step",function(){return s("UJ+4")}])},"UJ+4":function(e,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return r}));var t=s("mXGw"),a=s.n(t),p=s("e+1t"),o=s("kZGQ"),l=s.n(o),i=(0,a.a.createElement)(p.a,{markdown:l.a});function r(){return i}},kZGQ:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/Step/Step.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Step API\n\n<p class="description">The API documentation of the Step React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Step from \'@material-ui/core/Step\';\n// or\nimport { Step } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">active</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Sets the step as active. Is passed to child components. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Should be `Step` sub-components such as `StepLabel`, `StepContent`. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">completed</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Mark the step as completed. Is passed to child components. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Mark the step as disabled, will also disable the button if `StepButton` is a child of `Step`. Is passed to child components. |\n| <span class="prop-name">expanded</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Expand the step. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiStep`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiStep-root</span> | Styles applied to the root element.\n| <span class="prop-name">horizontal</span> | <span class="prop-name">.MuiStep-horizontal</span> | Styles applied to the root element if `orientation="horizontal"`.\n| <span class="prop-name">vertical</span> | <span class="prop-name">.MuiStep-vertical</span> | Styles applied to the root element if `orientation="vertical"`.\n| <span class="prop-name">alternativeLabel</span> | <span class="prop-name">.MuiStep-alternativeLabel</span> | Styles applied to the root element if `alternativeLabel={true}`.\n| <span class="prop-name">completed</span> | <span class="prop-name">.MuiStep-completed</span> | Pseudo-class applied to the root element if `completed={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/Step/Step.js) for more detail.\n\n## Demos\n\n- [Steppers](/components/steppers/)\n\n'}},[["9QxI",0,1]]]);