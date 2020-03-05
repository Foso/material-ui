module.exports = "# Интервал\n\n<p class=\"description\">Use the theme.spacing() helper to create consistent spacing between the elements of your UI.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\nВы можете изменить преобразование расстояния, передав:\n\n- число\n\n```js\nconst theme = createMuiTheme ({\n  spacing: 4,\n});\n\ntheme.spacing (2) // = 4 * 2\n```\n\n- функция\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- массив\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Multiple arity\n\nВспомогательная функция ` theme.spacing () ` принимает до 4 аргументов. Вы можете использовать аргументы, чтобы уменьшить шаблон. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"