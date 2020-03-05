module.exports = "# Minimizing Bundle Size\n\n<p class=\"description\">Learn more about the tools you can leverage to reduce the bundle size.</p>\n\n## Bundle size matters\n\nThe bundle size of Material-UI is taken very seriously. Size snapshots are taken\non every commit for every package and critical parts of those packages ([view the latest snapshot](/size-snapshot)).\nCombined with [dangerJS](https://danger.systems/js/) we can inspect\n[detailed bundle size changes](https://github.com/Foso/material-ui/pull/14638#issuecomment-466658459) on every Pull Request.\n\n## When and how to use tree-shaking?\n\nTree-shaking of Material-UI works out of the box in modern frameworks.\nMaterial-UI exposes its full API on the top-level `material-ui` import.\nIf you're using ES6 modules and a bundler that supports tree-shaking ([`webpack` >= 2.x](https://webpack.js.org/guides/tree-shaking/), [`parcel` with a flag](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)) you can safely use named imports and still get an optimised bundle size automatically:\n\n```js\nimport { Button, TextField } from '@material-ui/core';\n```\n\n⚠️ The following instructions are only needed if you want to optimize your development startup times or if you are using an older bundler\nthat doesn't support tree-shaking.\n\n## Development environment\n\nDevelopment bundles can contain the full library which can lead to **slower startup times**. This is especially noticeable if you\nimport from `@material-ui/icons`. Startup times can be approximately 6x slower than without named imports from the top-level API.\n\nIf this is an issue for you, you have various options:\n\n### Option 1\n\nYou can use path imports to avoid pulling in unused modules.\nFor instance, use:\n\n```js\n// 🚀 Fast\nimport Button from '@material-ui/core/Button';\nimport TextField from '@material-ui/core/TextField';\n```\n\ninstead of top level imports (without a Babel plugin):\n\n```js\nimport { Button, TextField } from '@material-ui/core';\n```\n\nThis is the option we document in all the demos, since it requires no configuration.\nIt is encouraged for library authors extending the components.\nHead to [Option 2](#option-2) for the approach that yields the best DX and UX.\n\nWhile importing directly in this manner doesn't use the exports in [`@material-ui/core/index.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/index.js), this file can serve as a handy reference as to which modules are public.\n\nBe aware that we only support first and second level imports.\nAnything deeper is considered private and can cause issues, such as module duplication in your bundle.\n\n```js\n// ✅ OK\nimport { Add as AddIcon } from '@material-ui/icons';\nimport { Tabs } from '@material-ui/core';\n//                                 ^^^^ 1st or top-level\n\n// ✅ OK\nimport AddIcon from '@material-ui/icons/Add';\nimport Tabs from '@material-ui/core/Tabs';\n//                                  ^^^^ 2nd level\n\n// ❌ NOT OK\nimport TabIndicator from '@material-ui/core/Tabs/TabIndicator';\n//                                               ^^^^^^^^^^^^ 3rd level\n```\n\n### Option 2\n\nThis option provides the best User Experience and Developer Experience:\n\n- UX: The Babel plugin enables top level tree-shaking even if your bundler doesn't support it.\n- DX: The Babel plugin makes startup time in dev mode as fast as Option 1.\n- DX: This syntax reduces the duplication of code, requiring only a single import for multiple modules.\nOverall, the code is easier to read, and you are less likely to make a mistake when importing a new module.\n```js\nimport { Button, TextField } from '@material-ui/core';\n```\n\nHowever, you need to apply the two following steps correctly.\n\n#### 1. Configure Babel\n\nPick one of the following plugins:\n\n- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) with the following configuration:\n\n  `yarn add -D babel-plugin-import`\n\n  Create a `.babelrc.js` file in the root directory of your project:\n\n  ```js\n  const plugins = [\n    [\n      'babel-plugin-import',\n      {\n        'libraryName': '@material-ui/core',\n        // Use \"'libraryDirectory': '',\" if your bundler does not support ES modules\n        'libraryDirectory': 'esm',\n        'camel2DashComponentName': false\n      },\n      'core'\n    ],\n    [\n      'babel-plugin-import',\n      {\n        'libraryName': '@material-ui/icons',\n        // Use \"'libraryDirectory': '',\" if your bundler does not support ES modules\n        'libraryDirectory': 'esm',\n        'camel2DashComponentName': false\n      },\n      'icons'\n    ]\n  ];\n\n  module.exports = {plugins};\n  ```\n\n- [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) with the following configuration:\n\n  `yarn add -D babel-plugin-transform-imports`\n\n  Create a `.babelrc.js` file in the root directory of your project:\n\n  ```js\n  const plugins = [\n    [\n      'babel-plugin-transform-imports',\n      {\n        '@material-ui/core': {\n          // Use \"transform: '@material-ui/core/${member}',\" if your bundler does not support ES modules\n          'transform': '@material-ui/core/esm/${member}',\n          'preventFullImport': true\n        },\n        '@material-ui/icons': {\n          // Use \"transform: '@material-ui/icons/${member}',\" if your bundler does not support ES modules\n          'transform': '@material-ui/icons/esm/${member}',\n          'preventFullImport': true\n        }\n      }\n    ]\n  ];\n\n  module.exports = {plugins};\n  ```\n\nIf you are using Create React App, you will need to use a couple of projects that let you use `.babelrc` configuration, without ejecting.\n\n  `yarn add -D react-app-rewired customize-cra`\n\n  Create a `config-overrides.js` file in the root directory:\n\n  ```js\n  /* config-overrides.js */\n  const { useBabelRc, override } = require('customize-cra')\n\n  module.exports = override(\n    useBabelRc()\n  );\n  ```\n\n  If you wish, `babel-plugin-import` can be configured through `config-overrides.js` instead of `.babelrc` by using this [configuration](https://github.com/arackaf/customize-cra/blob/master/api.md#fixbabelimportslibraryname-options).\n\n  Modify your `package.json` start command:\n\n```diff\n  \"scripts\": {\n-  \"start\": \"react-scripts start\"\n+  \"start\": \"react-app-rewired start\"\n  }\n```\n\n  Note: You may run into errors like these:\n\n  > Module not found: Can't resolve '@material-ui/core/makeStyles' in '/your/project'\n\n  This is because `@material-ui/styles` is re-exported through `core`, but the full import is not allowed.\n\n  You have an import like this in your code:\n\n  ```js\n  import { makeStyles, createStyles } from '@material-ui/core';\n  ```\n\n  The fix is simple, define the import separately:\n\n  ```js\n  import { makeStyles, createStyles } from '@material-ui/core/styles';\n  ```\n\n  Enjoy significantly faster start times.\n\n#### 2. Convert all your imports\n\nFinally, you can convert your existing codebase to this option with this [top-level-imports](https://github.com/Foso/material-ui/blob/master/packages/material-ui-codemod/README.md#top-level-imports) codemod.\nIt will perform the following diffs:\n\n```diff\n-import Button from '@material-ui/core/Button';\n-import TextField from '@material-ui/core/TextField';\n+import { Button, TextField } from '@material-ui/core';\n```\n\n## ECMAScript\n\nThe package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms/).\n\nA second version of the components is also published, which\nyou can find under the [`/es` folder](https://unpkg.com/@material-ui/core/es/).\nAll the non-official syntax is transpiled to the [ECMA-262 standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), nothing more.\nThis can be used to make separate bundles targeting different browsers.\nOlder browsers will require more JavaScript features to be transpiled,\nwhich increases the size of the bundle.\nNo polyfills are included for ES2015 runtime features. IE11+ and evergreen browsers support all the\nnecessary features. If you need support for other browsers, consider using\n[`@babel/polyfill`](https://www.npmjs.com/package/@babel/polyfill).\n\n⚠️ In order to minimize duplication of code in users' bundles, library authors are **strongly discouraged** from using the `/es` folder.\n"