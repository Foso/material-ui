module.exports = "# TypeScript\n\n<p class=\"description\">借助 TypeScript，你可以为 JavaScript 添加静态类型，从而提高代码质量及开发者的工作效率。</p>\n\n请查看一下 [Create React App with TypeScript](https://github.com/Foso/material-ui/tree/master/examples/create-react-app-with-typescript) 的例子。 我们要求 TypeScript 版本必须大于 2.8。\n\nIn order for types to work, you have to at least have the following options enabled in your `tsconfig.json`:\n\n```json\n{\n  \"compilerOptions\": {\n    \"lib\": [\"es6\", \"dom\"],\n    \"noImplicitAny\": true,\n    \"noImplicitThis\": true,\n    \"strictNullChecks\": true\n  }\n}\n```\n\nThe strict mode options are the same that are required for every types package published in the `@types/` namespace. 使用不太严格的 `tsconfig.json` 或省略某些库可能会带来一些错误。 To get the best type experience with the types we recommend setting `\"strict\": true`.\n\n## `withStyles` 的使用\n\n在 TypeScript 中使用 `withStyles` 可能有点棘手，但有一些实用程序可以帮助提高使用感受。\n\n### 使用 `createStyles` 来杜绝类型扩展\n\n有一个造成混淆的常见原因是 TypeScript的 [类型扩展](https://mariusschulz.com/blog/typescript-2-1-literal-type-widening)，因此这个示例不会像预期那样工作：\n\n```ts\nconst styles = {\n  root： {\n    display: 'flex',\n    flexDirection: 'column',\n  }\n};\n\nwithStyles（styles）;\n//         ^^^^^^\n//        属性 'flexDirection' 的类型是不兼容的。\n//           'string' 类型不能赋予给这些类型：'\"-moz-initial\" | \"inherit\" | \"initial\" | \"revert\" | \"unset\" | \"column\" | \"column-reverse\" | \"row\"...'。\n```\n\n问题是 `flexDirection` 属性的类型被推断为 `string`，这样太随意了。 要解决此问题，您可以将样式对象直接传递给 `withStyles`：\n\n```ts\nwithStyles({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n  },\n});\n```\n\n然而，如果您尝试让样式随主题而变化，类型扩展会再次显示其不怎么雅观的部分：\n\n```ts\nwithStyles(({ palette, spacing }) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    padding: spacing.unit,\n    backgroundColor: palette.background.default,\n    color: palette.primary.main,\n  },\n}));\n```\n\n这是因为 TypeScript [扩展了函数表达式](https://github.com/Microsoft/TypeScript/issues/241)的返回类型。\n\nBecause of this, using the `createStyles` helper function to construct your style rules object is recommended:\n\n```ts\n// 不依赖于主题的样式\nconst styles = createStyles({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n  },\n});\n\n// 依赖于主题的样式\nconst styles = ({ palette, spacing }: Theme) => createStyles({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    padding: spacing.unit,\n    backgroundColor: palette.background.default,\n    color: palette.primary.main,\n  },\n});\n```\n\n`createStyles` 只是身份函数；它不会在运行时“做任何事情”，只是在编译时指导类型推断。\n\n### Media queries（媒体查询）\n\n`withStyles` 允许样式对象具有顶级媒体查询的权限，如下所示：\n\n```ts\nconst styles = createStyles({\n  root: {\n    minHeight: '100vh',\n  },\n  '@media (min-width: 960px)': {\n    root: {\n      display: 'flex',\n    },\n  },\n});\n```\n\n但是，为了允许这些样式传递 TypeScript，鉴于CSS 类的名称和实际的 CSS 属性名称不一致，定义必须是模糊的。 由于类名称应与 CSS 属性相同，因此应避免使用。\n\n```ts\n// 这样是错误的，由于 TypeScript 认为 `@media (min-width: 960px)` 是一个类名\n// 并且 `content` 是 css 属性\nconst ambiguousStyles = createStyles({\n  content: {\n    minHeight: '100vh',\n  },\n  '@media (min-width: 960px)': {\n    content: {\n      display: 'flex',\n    },\n  },\n});\n\n// 这样定义就可以\nconst ambiguousStyles = createStyles({\n  contentClass: {\n    minHeight: '100vh',\n  },\n  '@media (min-width: 960px)': {\n    contentClass: {\n      display: 'flex',\n    },\n  },\n});\n```\n\n### 使用 `WithStyles` 来扩充你的属性\n\n由于用 `withStyles(styles)` 装饰的组件被注入了一个特殊的 `classes` 属性，您需要相应地定义其属性：\n\n```ts\nconst styles = (theme: Theme) => createStyles({\n  root: { /* ... */ },\n  paper: { /* ... */ },\n  button: { /* ... */ },\n});\n\ninterface Props {\n  // 未被注入样式的属性\n  foo: number;\n  bar: boolean;\n  // 被注入样式的属性\n  classes: {\n    root: string;\n    paper: string;\n    button: string;\n  };\n}\n```\n\n然而，这是不是很 [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) ，因为它需要你在两个不同的地方保持类名（`'root'`， `'paper'`， `'button'`，...）。 我们提供了一个类型操作符 `WithStyles` 来帮助解决这个问题，因此您可以直接写入：:\n\n```ts\nimport { WithStyles, createStyles } from '@material-ui/core';\n\nconst styles = (theme: Theme) => createStyles({\n  root: { /* ... */ },\n  paper: { /* ... */ },\n  button: { /* ... */ },\n});\n\ninterface Props extends WithStyles<typeof styles> {\n  foo: number;\n  bar: boolean;\n}\n```\n\n### 装饰组件\n\n将 `withStyles(styles)` 作为函数来如期使用：\n\n```tsx\nconst DecoratedSFC = withStyles(styles)(({ text, type, color, classes }: Props) => (\n  <Typography variant={type} color={color} classes={classes}>\n    {text}\n  </Typography>\n));\n\nconst DecoratedClass = withStyles(styles)(\n  class extends React.Component<Props> {\n    render() {\n      const { text, type, color, classes } = this.props\n      return (\n        <Typography variant={type} color={color} classes={classes}>\n          {text}\n        </Typography>\n      );\n    }\n  }\n);\n```\n\n不幸的是，由于[TypeScript 装饰器现有的限制 ](https://github.com/Microsoft/TypeScript/issues/4881)， `withStyles(styles)` 不能用在 TypeScript 中作为一个装饰器。\n\n## 自定义 `主题`\n\n将自定义属性添加到`主题`中时，您可以通过以强类型的方式实现 [TypeScript 的模块扩充](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)而继续使用它 。\n\n以下示例添加了一个 `appDrawer` 属性，并将其合并到由 `material-ui` 提供的属性中：\n\n```ts\nimport { Theme } from '@material-ui/core/styles/createMuiTheme';\nimport { Breakpoint } from '@material-ui/core/styles/createBreakpoints';\n\ndeclare module '@material-ui/core/styles/createMuiTheme' {\n  interface Theme {\n    appDrawer: {\n      width: React.CSSProperties['width']\n      breakpoint: Breakpoint\n    }\n  }\n  // 使用 `createMuiTheme` 来配置\n  interface ThemeOptions {\n    appDrawer?: {\n      width?: React.CSSProperties['width']\n      breakpoint?: Breakpoint\n    }\n  }\n}\n```\n\n以及一个带有其他默认选项的自定义主题仓库：\n\n**./styles/createMyTheme**:\n\n```ts\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';\n\nexport default function createMyTheme(options: ThemeOptions) {\n  return createMuiTheme({\n    appDrawer: {\n      width: 225,\n      breakpoint: 'lg',\n    },\n    ...options,\n  })\n}\n```\n\n也可以这样使用：\n\n```ts\nimport createMyTheme from './styles/createMyTheme';\n\nconst theme = createMyTheme({ appDrawer: { breakpoint: 'md' }});\n```\n\n## Usage of `component` prop\n\nMany Material-UI components allow you to replace their root node via a `component` prop, this will be detailed in the component's API documentation. For example, a Button's root node can be replaced with a React Router's Link, and any additional props that are passed to Button, such as `to`, will be spread to the Link component. For a code example concerning Button and react-router-dom checkout [these demos](/guides/composition/#routing-libraries).\n\nTo be able to use props of such a Material-UI component on their own, props should be used with type arguments. Otherwise, the `component` prop will not be present in the props of the Material-UI component.\n\nThe examples below use `TypographyProps` but the same will work for any component which has props defined with `OverrideProps`.\n\nThe following `CustomComponent` component has the same props as the `Typography` component.\n\n```ts\nfunction CustomComponent(props: TypographyProps<'a', { component: 'a' }>) {\n  /* ... */\n}\n```\n\nNow the `CustomComponent` can be used with a `component` prop which should be set to `'a'`. In addition, the `CustomComponent` will have all props of a `<a>` HTML element. The other props of the `Typography` component will also be present in props of the `CustomComponent`.\n\nIt is possible to have generic `CustomComponent` which will accept any React component, custom and HTML elements.\n\n```ts\nfunction GenericCustomComponent<C extends React.ElementType>(\n  props: TypographyProps<C, { component?: C }>,\n) {\n  /* ... */\n}\n```\n\nNow if the `GenericCustomComponent` will be used with a `component` prop provided, it should also have all props required by the provided component.\n\n```ts\nfunction ThirdPartyComponent({ prop1 } : { prop1: string }) {\n  return <div />\n}\n// ...\n<GenericCustomComponent component={ThirdPartyComponent} prop1=\"some value\" />;\n```\n\nThe `prop1` became required for the `GenericCustomComponent` as the `ThirdPartyComponent` has it as a requirement.\n\nNot every component fully supports any component type you pass in. If you encounter a component that rejects its `component` props in TypeScript please open an issue. There is an ongoing effort to fix this by making component props generic.\n\n## 处理`值`和事件处理器\n\nMany components concerned with user input offer a `value` prop or event handlers which include the current `value`. In most situations that `value` is only handled within React which allows it be of any type, such as objects or arrays.\n\nHowever, that type cannot be verified at compile time in situations where it depends on the component's children e.g. for `Select` or `RadioGroup`. This means that the soundest option is to type it as `unknown` and let the developer decide how they want to narrow that type down. We do not offer the possibility to use a generic type in those cases for [the same reasons `event.target` is not generic in React](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682).\n\nThe demos include typed variants that use type casting. It is an acceptable tradeoff because the types are all located in a single file and are very basic. You have to decide for yourself if the same tradeoff is acceptable for you. The library types are be strict by default and loose via opt-in.\n"