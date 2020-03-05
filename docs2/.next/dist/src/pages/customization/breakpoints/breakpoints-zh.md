module.exports = "# 断点\n\n<p class=\"description\">API that enables the use of breakpoints in a wide variety of contexts.</p>\n\n为了获得最佳的用户体验，material design 的接口需要在各种断点范围下自适应布局需要。 Material-UI 使用了原先 [specification](https://material.io/design/layout/responsive-layout-grid.html#breakpoints) 的 **简化** 实现。\n\n每个断点（一个键）匹配一个*固定*的屏幕宽度（一个值）：\n\n- ** xs， ** 超小：0px\n- ** sm， **小：600px\n- ** md， **中等：960px\n- ** lg， **大：1280px\n- ** xl， **超大：1920px\n\nThese [breakpoint values](/customization/default-theme/?expand-path=$.breakpoints.values) are used to determine breakpoint ranges. 每个范围包含起始断点，不包含终止断点。\n\n```js\nvalue         |0px     600px    960px    1280px   1920px\nkey           |xs      sm       md       lg       xl\nscreen width  |--------|--------|--------|--------|-------->\nrange         |   xs   |   sm   |   md   |   lg   |   xl\n```\n\n这些值可以自定义。 You will find them in the theme, in the [`breakpoints.values`](/customization/default-theme/?expand-path=$.breakpoints.values) object.\n\n许多组件内部都使用了断点来实现响应式要求，同时你也可以利用断点来控制应用的布局，这可借助于 [Grid](/components/grid/) 和 [Hidden](/components/hidden/) 组件。\n\n## CSS 媒体查询\n\nCSS media queries are the idiomatic approach to make your UI responsive. The theme provides four styles helpers to do so:\n\n- [theme.breakpoints.up(key)](#theme-breakpoints-up-key-media-query)\n- [theme.breakpoints.down(key)](#theme-breakpoints-down-key-media-query)\n- [theme.breakpoints.only(key)](#theme-breakpoints-only-key-media-query)\n- [theme.breakpoints.between(start, end)](#theme-breakpoints-between-start-end-media-query)\n\n在下面的演示中, 我们根据屏幕宽度更改背景颜色 (红色、蓝色和绿色)。\n\n```jsx\nconst styles = theme => ({\n  root: {\n    padding: theme.spacing(1),\n    [theme.breakpoints.down('sm')]: {\n      backgroundColor: theme.palette.secondary.main,\n    },\n    [theme.breakpoints.up('md')]: {\n      backgroundColor: theme.palette.primary.main,\n    },\n    [theme.breakpoints.up('lg')]: {\n      backgroundColor: green[500],\n    },\n  },\n});\n```\n\n{{\"demo\": \"pages/customization/breakpoints/MediaQuery.js\"}}\n\n## JavaScript媒体查询\n\n有时, 使用 CSS 是不够的。 您可能希望基于 JavaScript 中的断点值更改 React 渲染树。\n\n### useMediaQuery钩子\n\n您可以在 [userMediaQuery](/components/use-media-query/) 页面上了解更多信息。\n\n### withWidth()\n\n> ⚠️ This higher-order component will be deprecated for the [useMediaQuery](/components/use-media-query/) hook.\n\n```jsx\nimport withWidth from '@material-ui/core/withWidth';\n\nfunction MyComponent(props) {\n  return <div>{`Current width: ${props.width}`}</div>;\n}\n\nexport default withWidth()(MyComponent);\n```\n\n在下面的演示中，我们基于屏幕宽度更改了渲染的DOM元素 (*em* ，<u>u</u> ，~~del~~ & span)。\n\n{{\"demo\": \"pages/customization/breakpoints/WithWidth.js\"}}\n\n## API\n\n### `theme.breakpoints.up(key) => media query`\n\n#### 参数\n\n1. `key` （*String* | *Number* ）：断点键（`xs` ，`sm`等等）或以像素为单位的屏幕宽度数。\n\n#### 返回结果\n\n`media query`: A media query string ready to be used with most styling solutions, which matches screen widths greater than and including the screen size given by the breakpoint key.\n\n#### 例子\n\n```js\nconst styles = theme => ({\n  root: {\n    backgroundColor: 'blue',\n    // Match [md, ∞[\n    //       [960px, ∞[\n    [theme.breakpoints.up('md')]: {\n      backgroundColor: 'red',\n    },\n  },\n});\n```\n\n### `theme.breakpoints.down(key) => media query`\n\n#### 参数\n\n1. `key` （*String* | *Number* ）：断点键（`xs` ，`sm`等等）或以像素为单位的屏幕宽度数。\n\n#### 返回结果\n\n`media query`: A media query string ready to be used with most styling solutions, which matches screen widths less than and including the screen size given by the breakpoint key.\n\n#### 例子\n\n```js\nconst styles = theme => ({\n  root: {\n    backgroundColor: 'blue',\n    // Match [0, md + 1[\n    //       [0, lg[\n    //       [0, 1280px[\n    [theme.breakpoints.down('md')]: {\n      backgroundColor: 'red',\n    },\n  },\n});\n```\n\n### `theme.breakpoints.only(key) => media query`\n\n#### 参数\n\n1. `key` （*String*）：断点键（`xs` ，`sm`等）。\n\n#### 返回结果\n\n`media query`: A media query string ready to be used with most styling solutions, which matches screen widths including the screen size given by the breakpoint key.\n\n#### 例子\n\n```js\nconst styles = theme => ({\n  root: {\n    backgroundColor: 'blue',\n    // Match [md, md + 1[\n    //       [md, lg[\n    //       [960px, 1280px[\n    [theme.breakpoints.only('md')]: {\n      backgroundColor: 'red',\n    },\n  },\n});\n```\n\n### `theme.breakpoints.between(start, end) => media query`\n\n#### 参数\n\n1. `start` (*String*): A breakpoint key (`xs`, `sm`, etc.) or a screen width number in pixels.\n2. `end` (*String*): A breakpoint key (`xs`, `sm`, etc.) or a screen width number in pixels.\n\n#### 返回结果\n\n`media query`: A media query string ready to be used with most styling solutions, which matches screen widths greater than the screen size given by the breakpoint key in the first argument and less than the the screen size given by the breakpoint key in the second argument.\n\n#### 例子\n\n```js\nconst styles = theme => ({\n  root: {\n    backgroundColor: 'blue',\n    // Match [sm, md + 1[\n    //       [sm, lg[\n    //       [600px, 1280px[\n    [theme.breakpoints.between('sm', 'md')]: {\n      backgroundColor: 'red',\n    },\n  },\n});\n```\n\n### `withWidth([options]) => higher-order component`\n\n注入`width`属性。 它不会修改传递给它的组件；相反，它返回一个新组件。 这个`width`断点属性与当前屏幕宽度匹配。 它可以是以下断点之一：\n\n```ts\ntype Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';\n```\n\n一些可能有趣的实现细节：\n\n- 它将转发*非 React 的静态* 属性，以便 HOC 更 \"透明\"。 例如，它可用于定义 ` getInitialProps()` 静态方法 (next.js)。\n\n#### 参数\n\n1. `options` (*Object* [optional]): \n  - ` options.withTheme ` (*Boolean* [optional]): 默认值为 `false`。 将 ` theme ` 对象作为属性提供给组件。\n  - `options.noSSR` (*Boolean* [可选的]): 默认值为`false`。 为了执行服务器端呈现协调，它需要呈现两次。 第一次没有任何东西，第二次与孩子们在一起。 这种双遍渲染周期有一个缺点。 UI显示的时候可能会发生闪烁，如果你不打算使用SSR服务器端渲染 你可以将其设置为`true`来避免这种情况发生\n  - `options.initialWidth` （*Breakpoint* [可选的]）： 为`window.innerWidth`在服务器上不可用， 我们默认在第一次安装期间呈现空组件。 You might want to use an heuristic to approximate the screen width of the client browser screen width. For instance, you could be using the user-agent or the client-hints. https://caniuse.com/#search=client%20hint, we also can set the initial width globally using [`custom properties`](/customization/globals/#default-props) on the theme. In order to set the initialWidth we need to pass a custom property with this shape:\n\n```js\nconst theme = createMuiTheme({\n  props: {\n    // withWidth component ⚛️\n    MuiWithWidth: {\n      // Initial width property\n      initialWidth: 'lg', // 断点全局设置 🌎!\n    },\n  },\n});\n```\n\n- `options.resizeInterval` (*Number* [optional]): 默认为166，对应于60 Hz的10帧。 Number of milliseconds to wait before responding to a screen resize event.\n\n#### 返回结果\n\n`higher-order component`：应用于包装组件。\n\n#### 例子\n\n```jsx\nimport withWidth, { isWidthUp } from '@material-ui/core/withWidth';\n\nfunction MyComponent(props) {\n  if (isWidthUp('sm', props.width)) {\n    return <span />\n  }\n\n  return <div />;\n}\n\nexport default withWidth()(MyComponent);\n```\n\n## 默认值\n\nYou can explore the default values of the breakpoints using [the theme explorer](/customization/default-theme/?expand-path=$.breakpoints) or by opening the dev tools console on this page (`window.theme.breakpoints`)."