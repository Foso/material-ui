module.exports = "# FAQ\n\n<p class=\"description\">Bloqué sur un problème particulier ? Check some of these common gotchas first in the FAQ.</p>\n\nIf you still can't find what you're looking for, you can refer to our [support page](/getting-started/support/).\n\n## Material-UI is awesome. How can I support the project?\n\nThere are many ways to support Material-UI:\n\n- **Spread the word**. Evangelize Material-UI by [linking to material-ui.com](https://material-ui.com/) on your website, every backlink matters. Follow us on [Twitter](https://twitter.com/MaterialUI), like and retweet the important news. Or just talk about us with your friends.\n- **Give us feedback**. Tell us what we're doing well or where we can improve. Please upvote (👍) the issues that you are the most interested in seeing solved.\n- **Help new users**. You can answer questions on [StackOverflow](https://stackoverflow.com/questions/tagged/material-ui).\n- **Make changes happen**. \n  - Report bugs or missing features by [creating an issue](https://github.com/Foso/material-ui/issues/new).\n  - Reviewing and commenting on existing [pull requests](https://github.com/Foso/material-ui/pulls) and [issues](https://github.com/Foso/material-ui/issues).\n  - Help [translate](https://translate.material-ui.com) the documentation.\n  - Fixing bugs, adding features, and [improving our documentation](https://github.com/Foso/material-ui/tree/master/docs) by [submitting a pull request](https://github.com/Foso/material-ui/pulls).\n- **Support us financially on [OpenCollective](https://opencollective.com/material-ui)**. If you use Material-UI in a commercial project and would like to support its continued development by becoming a Sponsor, or in a side or hobby project and would like to become a Backer, you can do so through OpenCollective. All funds donated are managed transparently, and Sponsors receive recognition in the README and on the Material-UI home page.\n\n## Pourquoi est-ce que mes composants ne s'affichent pas correctement en production ?\n\nThis is likely an n°1 issue that happens due to class name conflicts once your code is in a production bundle. For Material-UI to work, the `className` values of all components on a page must be generated by a single instance of the [class name generator](/styles/advanced/#class-names).\n\nTo correct this issue, all components on the page need to be initialized such that there is only ever **one class name generator** between them.\n\nYou could end up accidentally using two class name generators in a variety of scenarios:\n\n- You accidentally **bundle** two versions of Material-UI. You might have a dependency not correctly setting Material-UI as a peer dependency.\n- You are using `StylesProvider` for a **subset** of your React Tree.\n- You are using a bundler and it is splitting code in a way that causes multiple class name generator instances to be created.\n\n> If you are using webpack with the [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/), try configuring the [`runtimeChunk` setting under `optimizations`](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk).\n\nOverall, it's simple to recover from this problem by wrapping each Material-UI application with [`StylesProvider`](/styles/api/#stylesprovider) components at the top of their component trees **and using a single class name generator shared between them**.\n\n## Why do the fixed positioned elements move when a modal is opened?\n\nScrolling is blocked as soon as a modal is opened. This prevents interacting with the background when the modal should be the only interactive content, however, removing the scrollbar can make your **fixed positioned elements** move. In this situation, you can apply a global `.mui-fixed` class name to tell Material-UI to handle those elements.\n\n## How can I disable the ripple effect globally?\n\nThe ripple effect is exclusively coming from the `BaseButton` component. You can disable the ripple effect globally by providing the following in your theme:\n\n```js\nimport { createMuiTheme } from '@material-ui/core';\n\nconst theme = createMuiTheme({\n  props: {\n    // Name of the component ⚛️\n    MuiButtonBase: {\n      // The properties to apply\n      disableRipple: true, // No more ripple, on the whole application 💣!\n    },\n  },\n});\n```\n\n## How can I disable transitions globally?\n\nMaterial-UI uses the same theme helper for creating all its transitions. So you can disable all the transitions by overriding the helper in your theme:\n\n```js\nimport { createMuiTheme } from '@material-ui/core';\n\nconst theme = createMuiTheme({\n  transitions: {\n    // So we have `transition: none;` everywhere\n    create: () => 'none',\n  },\n});\n```\n\nIt can be useful to disable transitions during visual testing or to improve performance on low-end devices.\n\nYou can go one step further by disabling all the transitions and animations effect:\n\n```js\nimport { createMuiTheme } from '@material-ui/core';\n\nconst theme = createMuiTheme({\n  overrides: {\n    // Name of the component ⚛️\n    MuiCssBaseline: {\n      // Name of the rule\n      '@global': {\n        '*, *::before, *::after': {\n          transition: 'none !important',\n          animation: 'none !important',\n        },\n      },\n    },\n  },\n});\n```\n\nNotice that the usage of `CssBaseline` is required for the above approach to work. If you choose not to use it, you can still disable transitions and animations by including these CSS rules:\n\n```css\n*, *::before, *::after {\n  transition: 'none !important';\n  animation: 'none !important';\n}\n```\n\n## Do I have to use JSS to style my app?\n\nNo, it's not required. But this dependency comes built in, so carries no additional bundle size overhead.\n\nPerhaps, however, you're adding some Material-UI components to an app that already uses another styling solution, or are already familiar with a different API, and don't want to learn a new one? In that case, head over to the [Style Library Interoperability](/guides/interoperability/) section, where we show how simple it is to restyle Material-UI components with alternative style libraries.\n\n## When should I use inline-style vs CSS?\n\nAs a rule of thumb, only use inline-style for dynamic style properties. The CSS alternative provides more advantages, such as:\n\n- auto-prefixing\n- better debugging\n- media queries\n- keyframes\n\n## How do I use react-router?\n\nWe detail the [integration with third-party routing libraries](/guides/composition/#routing-libraries) like react-router, Gatsby or Next.js in our guide.\n\n## How can I access the DOM element?\n\nAll Material-UI components that should render something in the DOM forward their ref to the underlying DOM component. This means that you can get DOM elements by reading the ref attached to Material-UI components:\n\n```jsx\n// or a ref setter function\nconst ref = React.createRef();\n// render\n<Button ref={ref} />;\n// usage\nconst element = ref.current;\n```\n\nIf you're not sure if the Material-UI component in question forwards its ref you can check the API documentation under \"Props\" e.g. the [Button API](/api/button/#props) includes\n\n> The ref is forwarded to the root element.\n\nindicating that you can access the DOM element with a ref.\n\n## I have several instances of styles on the page\n\nIf you are seeing a warning message in the console like the one below, you probably have several instances of `@material-ui/styles` initialized on the page.\n\n> It looks like there are several instances of `@material-ui/styles` initialized in this application. This may cause theme propagation issues, broken class names, specificity issues, and make your application bigger without a good reason.\n\n### Possible reasons\n\nThere are several common reasons for this to happen:\n\n- You have another `@material-ui/styles` library somewhere in your dependencies.\n- You have a monorepo structure for your project (e.g, lerna, yarn workspaces) and `@material-ui/styles` module is a dependency in more than one package (this one is more or less the same as the previous one).\n- You have several applications that are using `@material-ui/styles` running on the same page (e.g., several entry points in webpack are loaded on the same page).\n\n### Duplicated module in node_modules\n\nIf you think that the issue may be in the duplication of the @material-ui/styles module somewhere in your dependencies, there are several ways to check this. You can use `npm ls @material-ui/styles`, `yarn list @material-ui/styles` or `find -L ./node_modules | grep /@material-ui/styles/package.json` commands in your application folder.\n\nIf none of these commands identified the duplication, try analyzing your bundle for multiple instances of @material-ui/styles. You can just check your bundle source, or use a tool like [source-map-explorer](https://github.com/danvk/source-map-explorer) or [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).\n\nIf you identified that duplication is the issue that you are encountering there are several things you can try to solve it:\n\nIf you are using npm you can try running `npm dedupe`. This command searches the local dependencies and tries to simplify the structure by moving common dependencies further up the tree.\n\nIf you are using webpack, you can change the way it will [resolve](https://webpack.js.org/configuration/resolve/#resolve-modules) the @material-ui/styles module. You can overwrite the default order in which webpack will look for your dependencies and make your application node_modules more prioritized than default node module resolution order:\n\n```diff\n  resolve: {\n+   alias: {\n+     \"@material-ui/styles\": path.resolve(appFolder, \"node_modules\", \"@material-ui/styles\"),\n+   }\n  }\n```\n\n### Usage with Lerna\n\nOne possible fix to get @material-ui/styles to run in a Lerna monorepo across packages is to [hoist](https://github.com/lerna/lerna/blob/master/doc/hoist.md) shared dependencies to the root of your monorepo file. Try running the bootstrap option with the --hoist flag.\n\n```sh\nlerna bootstrap --hoist\n```\n\nAlternatively, you can remove @material-ui/styles from your package.json file and hoist it manually to your top-level package.json file.\n\nExample of a package.json file in a Lerna root folder\n\n```json\n{\n  \"name\": \"my-monorepo\",\n  \"devDependencies\": {\n    \"lerna\": \"latest\"\n  },\n  \"dependencies\": {\n    \"@material-ui/styles\": \"^4.0.0\"\n  },\n  \"scripts\": {\n    \"bootstrap\": \"lerna bootstrap\",\n    \"clean\": \"lerna clean\",\n    \"start\": \"lerna run start\",\n    \"build\": \"lerna run build\"\n  }\n}\n```\n\n### Running multiple applications on one page\n\nIf you have several applications running on one page, consider using one @material-ui/styles module for all of them. If you are using webpack, you can use [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/) to create an explicit [vendor chunk](https://webpack.js.org/plugins/commons-chunk-plugin/#explicit-vendor-chunk), that will contain the @material-ui/styles module:\n\n```diff\n  module.exports = {\n    entry: {\n+     vendor: [\"@material-ui/styles\"],\n      app1: \"./src/app.1.js\",\n      app2: \"./src/app.2.js\",\n    },\n    plugins: [\n+     new webpack.optimize.CommonsChunkPlugin({\n+       name: \"vendor\",\n+       minChunks: Infinity,\n+     }),\n    ]\n  }\n```\n\n## My App doesn't render correctly on the server\n\nIf it doesn't work, in 99% of cases it's a configuration issue. A missing property, a wrong call order, or a missing component – server-side rendering is strict about configuration, and the best way to find out what's wrong is to compare your project to an already working setup. Check out the [reference implementations](/guides/server-rendering/#reference-implementations), bit by bit.\n\n### CSS works only on first load then is missing\n\nThe CSS is only generated on the first load of the page. Then, the CSS is missing on the server for consecutive requests.\n\n#### Action to Take\n\nThe styling solution relies on a cache, the *sheets manager*, to only inject the CSS once per component type (if you use two buttons, you only need the CSS of the button one time). You need to create **a new `sheets` instance for each request**.\n\n*example of fix:*\n\n```diff\n-// Create a sheets instance.\n-const sheets = new ServerStyleSheets();\n\nfunction handleRender(req, res) {\n\n+ // Create a sheets instance.\n+ const sheets = new ServerStyleSheets();\n\n  //…\n\n  // Render the component to a string.\n  const html = ReactDOMServer.renderToString(\n```\n\n### React class name hydration mismatch\n\nThere is a class name mismatch between the client and the server. It might work for the first request. Another symptom is that the styling changes between initial page load and the downloading of the client scripts.\n\n#### Action to Take\n\nThe class names value relies on the concept of [class name generator](/styles/advanced/#class-names). The whole page needs to be rendered with **a single generator**. This generator needs to behave identically on the server and on the client. Par exemple:\n\n- You need to provide a new class name generator for each request. But you shouldn't share a `createGenerateClassName()` between different requests:\n\n*example of fix:*\n\n```diff\n-// Create a new class name generator.\n-const generateClassName = createGenerateClassName();\n\nfunction handleRender(req, res) {\n\n+ // Create a new class name generator.\n+ const generateClassName = createGenerateClassName();\n\n  //…\n\n  // Render the component to a string.\n  const html = ReactDOMServer.renderToString(\n```\n\n- You need to verify that your client and server are running the **exactly the same version** of Material-UI. It is possible that a mismatch of even minor versions can cause styling problems. To check version numbers, run `npm list @material-ui/core` in the environment where you build your application and also in your deployment environment.\n  \n    You can also ensure the same version in different environments by specifying a specific MUI version in the dependencies of your package.json.\n\n*example of fix (package.json):*\n\n```diff\n  \"dependencies\": {\n    ...\n\n-   \"@material-ui/core\": \"^4.0.0\",\n+   \"@material-ui/core\": \"4.0.0\",\n    ...\n  },\n```\n\n- You need to make sure that the server and the client share the same `process.env.NODE_ENV` value.\n\n## Why are the colors I am seeing different from what I see here?\n\nThe documentation site is using a custom theme. Hence, the color palette is different from the default theme that Material-UI ships. Please refer to [this page](/customization/theming/) to learn about theme customization.\n\n## Why does component X require a DOM node in a prop instead of a ref object?\n\nComponents like the [Portal](/api/portal/#props) or [Popper](/api/popper/#props) require a DOM node in the `container` or `anchorEl` prop respectively. It seems convenient to simply pass a ref object in those props and let Material-UI access the current value. This works in a simple scenario:\n\n```jsx\nfunction App() {\n  const container = React.useRef(null);\n\n  return (\n    <div className=\"App\">\n      <Portal container={container}>\n        <span>portaled children</span>\n      </Portal>\n      <div ref={container} />\n    </div>\n  );\n}\n```\n\nwhere `Portal` would only mount the children into the container when `container.current` is available. Here is a naive implementation of Portal:\n\n```jsx\nfunction Portal({ children, container }) {\n  const [node, setNode] = React.useState(null);\n\n  React.useEffect(() => {\n    setNode(container.current);\n  }, [container]);\n\n  if (node === null) {\n    return null;\n  }\n  return ReactDOM.createPortal(children, node);\n}\n```\n\nWith this simple heuristic `Portal` might re-render after it mounts because refs are up-to-date before any effects run. However, just because a ref is up-to-date doesn't mean it points to a defined instance. If the ref is attached to a ref forwarding component it is not clear when the DOM node will be available. In the example above, the `Portal` would run an effect once, but might not re-render because `ref.current` is still `null`. This is especially apparent for React.lazy components in Suspense. The above implementation could also not account for a change in the DOM node.\n\nThis is why we require a prop with the actual DOM node so that React can take care of determining when the `Portal` should re-render:\n\n```jsx\nfunction App() {\n  const [container, setContainer] = React.useState(null);\n  const handleRef = React.useCallback(instance => setContainer(instance), [setContainer])\n\n  return (\n    <div className=\"App\">\n      <Portal container={container}>\n        <span>Portaled</span>\n      </Portal>\n      <div ref={handleRef} />\n    </div>\n  );\n}\n```\n\n## What's the clsx dependency for?\n\n[clsx](https://github.com/lukeed/clsx) is a tiny utility for constructing `className` strings conditionally.\n\nInstead of writing:\n\n```jsx\nreturn (\n  <div\n    className={`MuiButton-root ${disabled ? 'Mui-disabled' : ''} ${selected ? 'Mui-selected' : ''}`}\n  />\n);\n```\n\nyou can do:\n\n```jsx\nimport clsx from 'clsx';\n\nreturn (\n  <div\n    className={clsx('MuiButton-root', {\n      'Mui-disabled': disabled,\n      'Mui-selected': selected,\n    })}\n  />\n);\n```\n"