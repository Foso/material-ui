(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{Xc2U:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/form-control",function(){return o("rETv")}])},rETv:function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var s=o("mXGw"),a=o.n(s),t=o("e+1t"),p=o("xv+h"),r=o.n(p),l=(0,a.a.createElement)(t.a,{markdown:r.a});function i(){return l}},"xv+h":function(n,e){n.exports='---\nfilename: /packages/material-ui/src/FormControl/FormControl.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# FormControl API\n\n<p class="description">The API documentation of the FormControl React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport FormControl from \'@material-ui/core/FormControl\';\n// or\nimport { FormControl } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nProvides context such as filled/focused/error/required for form inputs.\nRelying on the context provides high flexibility and ensures that the state always stays\nconsistent across the children of the `FormControl`.\nThis context is used by the following components:\n\n - FormLabel\n - FormHelperText\n - Input\n - InputLabel\n\nYou can find one composition example below and more going to [the demos](/components/text-fields/#components).\n\n```jsx\n<FormControl>\n  <InputLabel htmlFor="my-input">Email address</InputLabel>\n  <Input id="my-input" aria-describedby="my-helper-text" />\n  <FormHelperText id="my-helper-text">We\'ll never share your email.</FormHelperText>\n</FormControl>\n```\n\n\u26a0\ufe0fOnly one input can be used within a FormControl.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The contents of the form control. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">color</span> | <span class="prop-type">\'primary\'<br>&#124;&nbsp;\'secondary\'</span> | <span class="prop-default">\'primary\'</span> | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the label, input and helper text should be displayed in a disabled state. |\n| <span class="prop-name">error</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the label should be displayed in an error state. |\n| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the component will take up the full width of its container. |\n| <span class="prop-name">hiddenLabel</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the label will be hidden. This is used to increase density for a `FilledInput`. Be sure to add `aria-label` to the `input` element. |\n| <span class="prop-name">margin</span> | <span class="prop-type">\'none\'<br>&#124;&nbsp;\'dense\'<br>&#124;&nbsp;\'normal\'</span> | <span class="prop-default">\'none\'</span> | If `dense` or `normal`, will adjust vertical spacing of this and contained components. |\n| <span class="prop-name">required</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the label will indicate that the input is required. |\n| <span class="prop-name">size</span> | <span class="prop-type">\'small\'<br>&#124;&nbsp;\'medium\'</span> |  | The size of the text field. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'standard\'<br>&#124;&nbsp;\'outlined\'<br>&#124;&nbsp;\'filled\'</span> | <span class="prop-default">\'standard\'</span> | The variant to use. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiFormControl`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiFormControl-root</span> | Styles applied to the root element.\n| <span class="prop-name">marginNormal</span> | <span class="prop-name">.MuiFormControl-marginNormal</span> | Styles applied to the root element if `margin="normal"`.\n| <span class="prop-name">marginDense</span> | <span class="prop-name">.MuiFormControl-marginDense</span> | Styles applied to the root element if `margin="dense"`.\n| <span class="prop-name">fullWidth</span> | <span class="prop-name">.MuiFormControl-fullWidth</span> | Styles applied to the root element if `fullWidth={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/FormControl/FormControl.js) for more detail.\n\n## Demos\n\n- [Checkboxes](/components/checkboxes/)\n- [Radio Buttons](/components/radio-buttons/)\n- [Switches](/components/switches/)\n- [Text Fields](/components/text-fields/)\n\n'}},[["Xc2U",0,1]]]);