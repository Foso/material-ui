module.exports = "# 使用\n\n<p class=\"description\">立即开始使用 React 和 Material-UI。</p>\n\nMaterial-UI 组件是独立工作的。 **它们是自我支持**的，并只要注入它们需要显示的样式。 他们不依赖任何全局的样式表, 如 [normalize.css](https://github.com/necolas/normalize.css/).\n\n您可以使用文档中演示的任何组件。 请参阅每个组件的 [demo页](/components/buttons/), 以了解应如何导入它们。\n\n## 快速开始\n\n下面是来帮助您入门的一个快速示例，**而这真的是您需要的所有操作 **：\n\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport Button from '@material-ui/core/Button';\n\nfunction App() {\n  return (\n    <Button variant=\"contained\" color=\"primary\">\n      你好，世界\n    </Button>\n  );\n}\n\nReactDOM.render(<App />, document.querySelector('#app'));\n```\n\n是的，这就是您开始使用所需的一切，您也可以在这个实时的交互式的演示中所查看：\n\n{{\"demo\": \"pages/getting-started/usage/Usage.js\", \"hideHeader\": true, \"bg\": true}}\n\n## 全局变量\n\n您能够注意到，有一些重要的全局变量，可以改善 Material-UI 的用户体验。\n\n### 响应式元标记\n\nMaterial-UI 是先在移动设备上开发的，我们采用了首先为移动设备编写代码，然后根据需要使用 CSS media queries（CSS媒体查询）扩展组件的策略。 如要确保所有设备的正确渲染和触摸缩放，请将响应式可视区域的元标记添加到您的`<head>`元素中。\n\n```html\n<meta\n  name=\"viewport\"\n  content=\"minimum-scale=1, initial-scale=1, width=device-width\"\n/>\n```\n\n### CssBaseline\n\nMaterial-UI 提供了可选的 [CssBaseline](/components/css-baseline/) 组件。 它修复了浏览器和设备之间的一些不一致性，同时为常见的HTML元素提供了更多不同方式的的重置。\n\n## 不同版本的文档\n\n本文档始终展示了最新最稳定的 Material-UI 版本。 您可以在一个 [单独的页面](https://material-ui.com/versions/) 上找到旧版本的文档。\n\n## 下一步\n\n现在您已经了解了基本设置，现在是时候了解更多关于：\n\n- 如何提供 [Material Design字体和排版](/components/typography/)。\n- 如何利用[主题解决方案](/customization/theming/) 。\n- 如何 [覆盖](/customization/components/) 组件的呈现和观感。"