(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"65a+":function(s,n,p){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/grid",function(){return p("YXv0")}])},YXv0:function(s,n,p){"use strict";p.r(n),p.d(n,"default",(function(){return l}));var a=p("mXGw"),e=p.n(a),r=p("e+1t"),o=p("aOlN"),i=p.n(o),t=(0,e.a.createElement)(r.a,{markdown:i.a});function l(){return t}},aOlN:function(s,n){s.exports='---\nfilename: /packages/material-ui/src/Grid/Grid.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Grid API\n\n<p class="description">The API documentation of the Grid React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Grid from \'@material-ui/core/Grid\';\n// or\nimport { Grid } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">alignContent</span> | <span class="prop-type">\'stretch\'<br>&#124;&nbsp;\'center\'<br>&#124;&nbsp;\'flex-start\'<br>&#124;&nbsp;\'flex-end\'<br>&#124;&nbsp;\'space-between\'<br>&#124;&nbsp;\'space-around\'</span> | <span class="prop-default">\'stretch\'</span> | Defines the `align-content` style property. It\'s applied for all screen sizes. |\n| <span class="prop-name">alignItems</span> | <span class="prop-type">\'flex-start\'<br>&#124;&nbsp;\'center\'<br>&#124;&nbsp;\'flex-end\'<br>&#124;&nbsp;\'stretch\'<br>&#124;&nbsp;\'baseline\'</span> | <span class="prop-default">\'stretch\'</span> | Defines the `align-items` style property. It\'s applied for all screen sizes. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">container</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the component will have the flex *container* behavior. You should be wrapping *items* with a *container*. |\n| <span class="prop-name">direction</span> | <span class="prop-type">\'row\'<br>&#124;&nbsp;\'row-reverse\'<br>&#124;&nbsp;\'column\'<br>&#124;&nbsp;\'column-reverse\'</span> | <span class="prop-default">\'row\'</span> | Defines the `flex-direction` style property. It is applied for all screen sizes. |\n| <span class="prop-name">item</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the component will have the flex *item* behavior. You should be wrapping *items* with a *container*. |\n| <span class="prop-name">justify</span> | <span class="prop-type">\'flex-start\'<br>&#124;&nbsp;\'center\'<br>&#124;&nbsp;\'flex-end\'<br>&#124;&nbsp;\'space-between\'<br>&#124;&nbsp;\'space-around\'<br>&#124;&nbsp;\'space-evenly\'</span> | <span class="prop-default">\'flex-start\'</span> | Defines the `justify-content` style property. It is applied for all screen sizes. |\n| <span class="prop-name">lg</span> | <span class="prop-type">false<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;true<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10<br>&#124;&nbsp;11<br>&#124;&nbsp;12</span> | <span class="prop-default">false</span> | Defines the number of grids the component is going to use. It\'s applied for the `lg` breakpoint and wider screens if not overridden. |\n| <span class="prop-name">md</span> | <span class="prop-type">false<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;true<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10<br>&#124;&nbsp;11<br>&#124;&nbsp;12</span> | <span class="prop-default">false</span> | Defines the number of grids the component is going to use. It\'s applied for the `md` breakpoint and wider screens if not overridden. |\n| <span class="prop-name">sm</span> | <span class="prop-type">false<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;true<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10<br>&#124;&nbsp;11<br>&#124;&nbsp;12</span> | <span class="prop-default">false</span> | Defines the number of grids the component is going to use. It\'s applied for the `sm` breakpoint and wider screens if not overridden. |\n| <span class="prop-name">spacing</span> | <span class="prop-type">0<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10</span> | <span class="prop-default">0</span> | Defines the space between the type `item` component. It can only be used on a type `container` component. |\n| <span class="prop-name">wrap</span> | <span class="prop-type">\'nowrap\'<br>&#124;&nbsp;\'wrap\'<br>&#124;&nbsp;\'wrap-reverse\'</span> | <span class="prop-default">\'wrap\'</span> | Defines the `flex-wrap` style property. It\'s applied for all screen sizes. |\n| <span class="prop-name">xl</span> | <span class="prop-type">false<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;true<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10<br>&#124;&nbsp;11<br>&#124;&nbsp;12</span> | <span class="prop-default">false</span> | Defines the number of grids the component is going to use. It\'s applied for the `xl` breakpoint and wider screens. |\n| <span class="prop-name">xs</span> | <span class="prop-type">false<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;true<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10<br>&#124;&nbsp;11<br>&#124;&nbsp;12</span> | <span class="prop-default">false</span> | Defines the number of grids the component is going to use. It\'s applied for all the screen sizes with the lowest priority. |\n| <span class="prop-name">zeroMinWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, it sets `min-width: 0` on the item. Refer to the limitations section of the documentation to better understand the use case. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiGrid`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiGrid-root</span> | Styles applied to the root element\n| <span class="prop-name">container</span> | <span class="prop-name">.MuiGrid-container</span> | Styles applied to the root element if `container={true}`.\n| <span class="prop-name">item</span> | <span class="prop-name">.MuiGrid-item</span> | Styles applied to the root element if `item={true}`.\n| <span class="prop-name">zeroMinWidth</span> | <span class="prop-name">.MuiGrid-zeroMinWidth</span> | Styles applied to the root element if `zeroMinWidth={true}`.\n| <span class="prop-name">direction-xs-column</span> | <span class="prop-name">.MuiGrid-direction-xs-column</span> | \n| <span class="prop-name">direction-xs-column-reverse</span> | <span class="prop-name">.MuiGrid-direction-xs-column-reverse</span> | \n| <span class="prop-name">direction-xs-row-reverse</span> | <span class="prop-name">.MuiGrid-direction-xs-row-reverse</span> | \n| <span class="prop-name">wrap-xs-nowrap</span> | <span class="prop-name">.MuiGrid-wrap-xs-nowrap</span> | \n| <span class="prop-name">wrap-xs-wrap-reverse</span> | <span class="prop-name">.MuiGrid-wrap-xs-wrap-reverse</span> | \n| <span class="prop-name">align-items-xs-center</span> | <span class="prop-name">.MuiGrid-align-items-xs-center</span> | \n| <span class="prop-name">align-items-xs-flex-start</span> | <span class="prop-name">.MuiGrid-align-items-xs-flex-start</span> | \n| <span class="prop-name">align-items-xs-flex-end</span> | <span class="prop-name">.MuiGrid-align-items-xs-flex-end</span> | \n| <span class="prop-name">align-items-xs-baseline</span> | <span class="prop-name">.MuiGrid-align-items-xs-baseline</span> | \n| <span class="prop-name">align-content-xs-center</span> | <span class="prop-name">.MuiGrid-align-content-xs-center</span> | \n| <span class="prop-name">align-content-xs-flex-start</span> | <span class="prop-name">.MuiGrid-align-content-xs-flex-start</span> | \n| <span class="prop-name">align-content-xs-flex-end</span> | <span class="prop-name">.MuiGrid-align-content-xs-flex-end</span> | \n| <span class="prop-name">align-content-xs-space-between</span> | <span class="prop-name">.MuiGrid-align-content-xs-space-between</span> | \n| <span class="prop-name">align-content-xs-space-around</span> | <span class="prop-name">.MuiGrid-align-content-xs-space-around</span> | \n| <span class="prop-name">justify-xs-center</span> | <span class="prop-name">.MuiGrid-justify-xs-center</span> | \n| <span class="prop-name">justify-xs-flex-end</span> | <span class="prop-name">.MuiGrid-justify-xs-flex-end</span> | \n| <span class="prop-name">justify-xs-space-between</span> | <span class="prop-name">.MuiGrid-justify-xs-space-between</span> | \n| <span class="prop-name">justify-xs-space-around</span> | <span class="prop-name">.MuiGrid-justify-xs-space-around</span> | \n| <span class="prop-name">justify-xs-space-evenly</span> | <span class="prop-name">.MuiGrid-justify-xs-space-evenly</span> | \n| <span class="prop-name">spacing-xs-1</span> | <span class="prop-name">.MuiGrid-spacing-xs-1</span> | \n| <span class="prop-name">spacing-xs-2</span> | <span class="prop-name">.MuiGrid-spacing-xs-2</span> | \n| <span class="prop-name">spacing-xs-3</span> | <span class="prop-name">.MuiGrid-spacing-xs-3</span> | \n| <span class="prop-name">spacing-xs-4</span> | <span class="prop-name">.MuiGrid-spacing-xs-4</span> | \n| <span class="prop-name">spacing-xs-5</span> | <span class="prop-name">.MuiGrid-spacing-xs-5</span> | \n| <span class="prop-name">spacing-xs-6</span> | <span class="prop-name">.MuiGrid-spacing-xs-6</span> | \n| <span class="prop-name">spacing-xs-7</span> | <span class="prop-name">.MuiGrid-spacing-xs-7</span> | \n| <span class="prop-name">spacing-xs-8</span> | <span class="prop-name">.MuiGrid-spacing-xs-8</span> | \n| <span class="prop-name">spacing-xs-9</span> | <span class="prop-name">.MuiGrid-spacing-xs-9</span> | \n| <span class="prop-name">spacing-xs-10</span> | <span class="prop-name">.MuiGrid-spacing-xs-10</span> | \n| <span class="prop-name">grid-xs-auto</span> | <span class="prop-name">.MuiGrid-grid-xs-auto</span> | \n| <span class="prop-name">grid-xs-true</span> | <span class="prop-name">.MuiGrid-grid-xs-true</span> | \n| <span class="prop-name">grid-xs-1</span> | <span class="prop-name">.MuiGrid-grid-xs-1</span> | \n| <span class="prop-name">grid-xs-2</span> | <span class="prop-name">.MuiGrid-grid-xs-2</span> | \n| <span class="prop-name">grid-xs-3</span> | <span class="prop-name">.MuiGrid-grid-xs-3</span> | \n| <span class="prop-name">grid-xs-4</span> | <span class="prop-name">.MuiGrid-grid-xs-4</span> | \n| <span class="prop-name">grid-xs-5</span> | <span class="prop-name">.MuiGrid-grid-xs-5</span> | \n| <span class="prop-name">grid-xs-6</span> | <span class="prop-name">.MuiGrid-grid-xs-6</span> | \n| <span class="prop-name">grid-xs-7</span> | <span class="prop-name">.MuiGrid-grid-xs-7</span> | \n| <span class="prop-name">grid-xs-8</span> | <span class="prop-name">.MuiGrid-grid-xs-8</span> | \n| <span class="prop-name">grid-xs-9</span> | <span class="prop-name">.MuiGrid-grid-xs-9</span> | \n| <span class="prop-name">grid-xs-10</span> | <span class="prop-name">.MuiGrid-grid-xs-10</span> | \n| <span class="prop-name">grid-xs-11</span> | <span class="prop-name">.MuiGrid-grid-xs-11</span> | \n| <span class="prop-name">grid-xs-12</span> | <span class="prop-name">.MuiGrid-grid-xs-12</span> | \n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/Grid/Grid.js) for more detail.\n\n## Demos\n\n- [Grid](/components/grid/)\n\n'}},[["65a+",0,1]]]);