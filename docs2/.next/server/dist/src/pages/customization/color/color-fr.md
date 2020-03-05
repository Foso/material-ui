module.exports = "# Couleur\n\n<p class=\"description\">Transmettre le sens à travers la couleur. Out of the box you get access to all colors in the Material Design spec.</p>\n\nThe Material Design [color system](https://material.io/design/color/) can be used to create a color theme that reflects your brand or style.\n\n## Color system\n\n### Important Terms\n\n#### \"Palette\"\n\nA palette is a collection of colors, i.e. hues and their shades. Material-UI provides all colors from the Material Design guidelines. [This color palette](#color-palette) has been designed with colors that work harmoniously with each other.\n\n#### \"Hue\" & \"Shade\"\n\nA single color within the palette is made up of a hue such as \"red\", and shade, such as \"500\". \"red 50\" is the lightest shade of red (*pink!*), while \"red 900\" is the darkest. In addition, most hues come with \"accent\" shades, prefixed with an `A`.\n\n### Exemples\n\nThe Material Design color palette comprises primary and accent colors that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other.\n\nFor instance, you can refer to complementary primary and accent colors (for example 'red 500' & 'purple A200'), like so:\n\n```js\nimport purple from '@material-ui/core/colors/purple';\nimport red from '@material-ui/core/colors/red';\n\nconst primary = red[500]; // #F44336\nconst accent = purple['A200']; // #E040FB\nconst accent = purple.A200; // #E040FB (alternative method)\n```\n\n### Color palette\n\nGiven a *HUE* (red, pink, etc.) and a *SHADE* (500, 600, etc.) you can import the color like this:\n\n```jsx\nimport HUE from '@material-ui/core/colors/HUE';\n\nconst color = HUE[SHADE];\n```\n\n{{\"demo\": \"pages/customization/color/Color.js\", \"hideHeader\": true, \"bg\": \"inline\"}}\n\n## Color tool\n\nTo test a [material.io/design/color](https://material.io/design/color/) color scheme with the Material-UI documentation, simply select colors using the palette and sliders below. Alternatively, you can enter hex values in the Primary and Secondary text fields.\n\n{{\"demo\": \"pages/customization/color/ColorTool.js\", \"hideHeader\": true, \"bg\": true}}\n\nThe output shown in the color sample can be pasted directly into a [`createMuiTheme()`](/customization/theming/#createmuitheme-options-theme) function (to be used with [`ThemeProvider`](/customization/theming/#theme-provider)):\n\n```jsx\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport purple from '@material-ui/core/colors/purple';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: purple,\n    secondary: {\n      main: '#f44336',\n    },\n  },\n});\n```\n\nOnly the `main` shades need be provided (unless you wish to further customize `light`, `dark` or `contrastText`), as the other colors will be calculated by `createMuiTheme()`, as described in the [Theme customization](/customization/palette/) section.\n\nIf you are using the default primary and / or secondary shades then by providing the color object, `createMuiTheme()` will use the appropriate shades from the material color for main, light and dark.\n\n### Official color tool\n\nThe Material Design team has also built an awesome palette configuration tool: [material.io/tools/color](https://material.io/tools/color/). This can help you create a color palette for your UI, as well as measure the accessibility level of any color combination.\n\n<a href=\"https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336\" target=\"_blank\" rel=\"noopener nofollow\">\n  <img src=\"/static/images/color/colorTool.png\" alt=\"Official color tool\" style=\"width: 574px\" />\n</a>\n\nThe output can be fed into `createMuiTheme()` function:\n\n```jsx\nimport { createMuiTheme } from '@material-ui/core/styles';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: {\n      light: '#757ce8',\n      main: '#3f50b5',\n      dark: '#002884',\n      contrastText: '#fff',\n    },\n    secondary: {\n      light: '#ff7961',\n      main: '#f44336',\n      dark: '#ba000d',\n      contrastText: '#000',\n    },\n  },\n});\n```\n\n### Tools by the community\n\n- [create-mui-theme](https://react-theming.github.io/create-mui-theme/): Is an online tool for creating Material-UI themes via Material Design Color Tool.\n- [material-ui-theme-editor](https://in-your-saas.github.io/material-ui-theme-editor/): A tool to generate themes for your Material-UI applications by just selecting the colors and having a live preview.\n- [Material palette generator](https://material.io/inline-tools/color/): The Material palette generator can be used to generate a palette for any color you input."