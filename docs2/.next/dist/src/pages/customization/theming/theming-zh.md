module.exports = "# 主题\n\n<p class=\"description\">定制自己的 Material-UI 主题， You can change the colors, the typography and much more.</p>\n\n主题可以指定组件的配色、平面的明暗、阴影的深浅、墨水元素适当的不透明度等。\n\n样式可让您为应用程序应用一致的音调。它可以让你 **自定义所有的设计方面** 项目，以满足您的企业或品牌的特定需求。\n\n为了提高应用程序之间的一致性，可以选择明暗样式类型。 默认情况下，组件使用浅色样式类型。\n\n## ThemeProvider\n\n如果你想要自定义样式，则需要使用 `MuiThemeProvider` 组件才能将样式注入到你的应用中。 但是，这是可选的，因为 Material-UI 组件带有默认主题。\n\n`MuiThemeProvider` 依赖于React的Context上下文将样式传递给组件， 因此您需要确保 `MuiThemeProvider` 是您想要自定义的组件的父级元素。 您可以在 [API 章节](/styles/api/#themeprovider) 中了解有关此内容的更多信息 。\n\n## 主题配置变量\n\n更改主题配置变量是将Material-UI与您的需求相匹配的最有效方法。 以下列出了一些重要的样式变量：\n\n- [Palette（调色）](/customization/palette/)\n- [Typography](/customization/typography/)\n- [Spacing（间距）](/customization/spacing/)\n- [断点](/customization/breakpoints/)\n- [z-index](/customization/z-index/)\n- [全局样式](/customization/globals/)\n\n您可以查看[默认样式部分](/customization/default-theme/)完整查看默认样式。\n\n### 自定义变量\n\nWhen using Material-UI's theme with the [styling solution](/styles/basics/) or [any others](/guides/interoperability/#themeprovider). 可以方便地向样式添加其他变量，以便您可以在任何地方使用它们。 就像这样：\n\n{{\"demo\": \"pages/customization/theming/CustomStyles.js\"}}\n\n## 访问组件中的主题\n\nYou [can access](/styles/advanced/#accessing-the-theme-in-a-component) the theme variables inside your React components.\n\n## 嵌套主题\n\n[您可以嵌套](/styles/advanced/#theme-nesting)多个主题提供者。\n\n{{\"demo\": \"pages/customization/theming/ThemeNesting.js\"}}\n\n内部主题将 **覆盖** 外部主题。 You can extend the outer theme by providing a function:\n\n{{\"demo\": \"pages/customization/theming/ThemeNestingExtend.js\"}}\n\n### 关于性能\n\nThe performance implications of nesting the `ThemeProvider` component are linked to JSS's work behind the scenes. The main point to understand is that the injected CSS is cached with the following tuple `(styles, theme)`.\n\n- `theme`: 每次渲染时，如果你提供了一个新的主题，一个新的CSS对象将会被生成并注入。 不管是为了更统一的UI风格还是性能，都应该尽量不要每次生成新的主题 object。\n- `styles`: 样式 object 越大，需要的运算越多。\n\n## API\n\n### `createMuiTheme(options, ...args) => theme`\n\n根据接收的选项生成样式。\n\n#### 参数\n\n1. `options` （*Object*）：采用不完整的主题对象并添加缺少的部分。\n2. `...args` (*Array*): Deep merge the arguments with the about to be returned theme.\n\n#### 返回结果\n\n`theme` （*Object*）：一个完整的，随时可用的主题对象。\n\n#### 示例\n\n```js\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport purple from '@material-ui/core/colors/purple';\nimport green from '@material-ui/core/colors/green';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: purple,\n    secondary: green,\n  },\n  status: {\n    danger: 'orange',\n  },\n});\n```\n\n### `responsiveFontSizes(theme, options) => theme`\n\nGenerate responsive typography settings based on the options received.\n\n#### 参数\n\n1. `theme` (*Object*): The theme object to enhance.\n2. `options` (*Object* [optional]):\n\n- `breakpoints` (*Array\\<String\\>* [optional]): Default to `['sm', 'md', 'lg']`. Array of [breakpoints](/customization/breakpoints/) (identifiers).\n- `disableAlign` (*Boolean* [optional]): Default to `false`. Whether font sizes change slightly so line heights are preserved and align to Material Design's 4px line height grid. This requires a unitless line height in the theme's styles.\n- `factor` (*Number* [optional]): Default to `2`. This value determines the strength of font size resizing. The higher the value, the less difference there is between font sizes on small screens. The lower the value, the bigger font sizes for small screens. 该值必须大于1。\n- `variants` (*Array\\<String\\>* [optional]): Default to all. The typography variants to handle.\n\n#### 返回结果\n\n`theme` (*Object*): The new theme with a responsive typography.\n\n#### 示例\n\n```js\nimport { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';\n\nlet theme = createMuiTheme();\ntheme = responsiveFontSizes(theme);\n```"