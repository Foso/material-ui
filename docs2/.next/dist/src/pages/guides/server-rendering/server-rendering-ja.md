module.exports = "# サーバーサイドレンダリング\n\n<p class=\"description\">サーバー側レンダリングの最も一般的な使用例は、ユーザー（または検索エンジンのクローラー）が最初にアプリを要求したときに最初のレンダリングを処理することです。</p>\n\nサーバーは要求を受信すると、必要なコンポーネントをHTMLストリングにレンダリングし、それを応答としてクライアントに送信します。 それ以降は、クライアントがレンダリング作業を引き継ぎます。\n\n## サーバー上のMaterial-UI\n\nMaterial-UIは、サーバーでのレンダリングの制約を考慮してゼロから設計されましたが、正しく統合されるかどうかはユーザー次第です。 必要なCSSをページに提供することが重要です。そうしないと、ページはHTMLだけでレンダリングされ、クライアントによってCSSが注入されるのを待って、ちらつきが発生します (FOUC)。 クライアントにスタイルを注入するには、次のことが必要です。\n\n1. Create a fresh, new [`ServerStyleSheets`](/styles/api/#serverstylesheets) instance on every request.\n2. Render the React tree with the server-side collector.\n3. Pull the CSS out.\n4. Pass the CSS along to the client.\n\nOn the client side, the CSS will be injected a second time before removing the server-side injected CSS.\n\n## 設定する\n\nIn the following recipe, we are going to look at how to set up server-side rendering.\n\n### テーマ\n\nCreate a theme that will be shared between the client and the server:\n\n`theme.js`\n\n```js\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport red from '@material-ui/core/colors/red';\n\n// Create a theme instance.\nconst theme = createMuiTheme({\n  palette: {\n    primary: {\n      main: '#556cd6',\n    },\n    secondary: {\n      main: '#19857b',\n    },\n    error: {\n      main: red.A400,\n    },\n    background: {\n      default: '#fff',\n    },\n  },\n});\n\nexport default theme;\n```\n\n### The server-side\n\nThe following is the outline for what the server-side is going to look like. We are going to set up an [Express middleware](https://expressjs.com/en/guide/using-middleware.html) using [app.use](https://expressjs.com/en/api.html) to handle all requests that come in to the server. If you're unfamiliar with Express or middleware, just know that the handleRender function will be called every time the server receives a request.\n\n`server.js`\n\n```js\nimport express from 'express';\n\n// We are going to fill these out in the sections to follow.\nfunction renderFullPage(html, css) {\n  /* ... */\n}\n\nfunction handleRender(req, res) {\n  /* ... */\n}\n\nconst app = express();\n\n// Isso é acionado toda vez que o servidor recebe uma solicitação.\napp.use(handleRender);\n\nconst port = 3000;\napp.listen(port);\n```\n\n### Handling the Request\n\nThe first thing that we need to do on every request is create a new `ServerStyleSheets`.\n\nWhen rendering, we will wrap `App`, the root component, inside a [`StylesProvider`](/styles/api/#stylesprovider) and [`ThemeProvider`](/styles/api/#themeprovider) to make the style configuration and the `theme` available to all components in the component tree.\n\nThe key step in server-side rendering is to render the initial HTML of the component **before** we send it to the client side. To do this, we use [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html).\n\nWe then get the CSS from the `sheets` using `sheets.toString()`. We will see how this is passed along in the `renderFullPage` function.\n\n```jsx\nimport express from 'express';\nimport React from 'react';\nimport ReactDOMServer from 'react-dom/server';\nimport { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';\nimport App from './App';\nimport theme from './theme';\n\nfunction handleRender(req, res) {\n  const sheets = new ServerStyleSheets();\n\n  // Render the component to a string.\n  const html = ReactDOMServer.renderToString(\n    sheets.collect(\n      <ThemeProvider theme={theme}>\n        <App />\n      </ThemeProvider>,\n    ),\n  );\n\n  // Grab the CSS from the sheets.\n  const css = sheets.toString();\n\n  // Send the rendered page back to the client.\n  res.send(renderFullPage(html, css));\n}\n\nconst app = express();\n\napp.use('/build', express.static('build'));\n\n// This is fired every time the server-side receives a request.\napp.use(handleRender);\n\nconst port = 3000;\napp.listen(port);\n```\n\n### Inject Initial Component HTML and CSS\n\nThe final step on the server-side is to inject the initial component HTML and CSS into a template to be rendered on the client side.\n\n```js\nfunction renderFullPage(html, css) {\n  return `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My page</title>\n        <style id=\"jss-server-side\">${css}</style>\n      </head>\n      <body>\n        <div id=\"root\">${html}</div>\n      </body>\n    </html>\n  `;\n}\n```\n\n### The Client Side\n\nThe client side is straightforward. All we need to do is remove the server-side generated CSS. Let's take a look at the client file:\n\n`client.js`\n\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { ThemeProvider } from '@material-ui/core/styles';\nimport App from './App';\nimport theme from './theme';\n\nfunction Main() {\n  React.useEffect(() => {\n    const jssStyles = document.querySelector('#jss-server-side');\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n\n  return (\n    <ThemeProvider theme={theme}>\n      <App />\n    </ThemeProvider>\n  );\n}\n\nReactDOM.hydrate(<Main />, document.querySelector('#root'));\n```\n\n## Reference implementations\n\nWe host different reference implementations which you can find in the [GitHub repository](https://github.com/Foso/material-ui) under the [`/examples`](https://github.com/Foso/material-ui/tree/master/examples) folder:\n\n- [The reference implementation of this tutorial](https://github.com/Foso/material-ui/tree/master/examples/ssr)\n- [Gatsby](https://github.com/Foso/material-ui/tree/master/examples/gatsby)\n- [Next.js](https://github.com/Foso/material-ui/tree/master/examples/nextjs)\n\n## Troubleshooting\n\nCheck out the FAQ answer: [My App doesn't render correctly on the server](/getting-started/faq/#my-app-doesnt-render-correctly-on-the-server).\n"