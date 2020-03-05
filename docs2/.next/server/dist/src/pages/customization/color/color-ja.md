module.exports = "# カラー\n\n<p class=\"description\">色で意味を伝えます。 最初からMaterial Design仕様のすべての色にアクセスできます。</p>\n\nMaterial Design[color system](https://material.io/design/color/)を使用すると、自分のブランドやスタイルを反映した色のテーマを作成できます。\n\n## カラーシステム (Color system)\n\n### 重要な用語\n\n#### \"パレット\"\n\nパレットは色のコレクション、つまり色相とその色合いです。 Material-UIは、Material Designガイドラインのすべてのカラーを提供します。 [このカラーパレット](#color-palette)は、互いに調和する色でデザインされています。\n\n#### \"色相\" & \"シェード\"\n\nパレット内の単色は、「赤」などの色相と「500」などのシェードで構成されます。 \"red 50\" は赤(*pink!*) の最も明るいシェードで、\"red 900\"は最も暗いシェードです。 また、ほとんどの色相には、先頭に`A`を持つ「アクセント」シェードが使用されます。\n\n### 例\n\nMaterial Design　カラーパレットは、イラストやブランドカラーの作成に使用できる原色とアクセント色で構成されています。 それらは互いに調和するように設計されています。\n\nたとえば、次のように補足的な原色とアクセント色(例:'red 500'&'purple A200') を参照できます。\n\n```js\nimport purple from '@material-ui/core/colors/purple';\nimport red from '@material-ui/core/colors/red';\n\nconst primary = red[500]; // #F44336\nconst accent = purple['A200']; // #E040FB\nconst accent = purple.A200; // #E040FB (alternative method)\n```\n\n### カラー・パレット\n\n* HUEが与えられた場合* （赤、ピンクなど）および* SHADE * （500、600など）次のように色をインポートできます。\n\n```jsx\nimport HUE from '@material-ui/core/colors/HUE';\n\nconst color = HUE[SHADE];\n```\n\n{{\"demo\": \"pages/customization/color/Color.js\", \"hideHeader\": true, \"bg\": \"inline\"}}\n\n## カラーツール\n\n[ material.io/design/colorをテストするには](https://material.io/design/color/) Material-UIのドキュメントの配色では、以下のパレットとスライダーを使用してカラーを選択するだけです。 または、プライマリおよびセカンダリテキストフィールドに16進値を入力できます。\n\n{{\"demo\": \"pages/customization/color/ColorTool.js\", \"hideHeader\": true, \"bg\": true}}\n\nThe output shown in the color sample can be pasted directly into a [`createMuiTheme()`](/customization/theming/#createmuitheme-options-theme) function (to be used with [`ThemeProvider`](/customization/theming/#theme-provider)):\n\n```jsx\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport purple from '@material-ui/core/colors/purple';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: purple,\n    secondary: {\n      main: '#f44336',\n    },\n  },\n});\n```\n\n他の色は [Theme customization](/customization/palette/)セクションで説明されているように`createMuiTheme()`によって計算されるので、`main`シェーディングのみを提供する必要があります(`light`、`dark`、`contrastText`をさらにカスタマイズする場合を除きます)。\n\nデフォルトの一次または二次シェード、あるいはその両方を使用している場合にカラーオブジェクトを指定すると、`createMuiTheme()`はメイン、ライト、およびダークにマテリアルカラーからの適切なシェードを使用します。\n\n### 公式カラーツール\n\nMaterial Designチームは素晴らしいパレット設定ツール、[materialio/tools/color](https://material.io/tools/color/)も開発しました。 これにより、UIのカラーパレットを作成したり、任意のカラー組み合わせのアクセシビリティレベルを測定したりできます。\n\n<a href=\"https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336\" target=\"_blank\" rel=\"noopener nofollow\">\n  <img src=\"/static/images/color/colorTool.png\" alt=\"公式カラーツール\" style=\"width: 574px\" />\n</a>\n\n出力は、`createMuiTheme()`関数に渡すことができます。\n\n```jsx\nimport { createMuiTheme } from '@material-ui/core/styles';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: {\n      light: '#757ce8',\n      main: '#3f50b5',\n      dark: '#002884',\n      contrastText: '#fff',\n    },\n    secondary: {\n      light: '#ff7961',\n      main: '#f44336',\n      dark: '#ba000d',\n      contrastText: '#000',\n    },\n  },\n});\n```\n\n### コミュニティによるツール\n\n- [create-mui-theme](https://react-theming.github.io/create-mui-theme/): Is an online tool for creating Material-UI themes via Material Design Color Tool.\n- [material-ui-theme-editor](https://in-your-saas.github.io/material-ui-theme-editor/): A tool to generate themes for your Material-UI applications by just selecting the colors and having a live preview.\n- [マテリアルパレットジェネレータ](https://material.io/inline-tools/color/)　: マテリアルパレットジェネレータを使用して、入力した任意のカラーのパレットを生成できます。"