module.exports = "# Темизация\n\n<p class=\"description\">Настройте Material-UI с помощью вашего шаблона. Вы можете изменить цвета, типографику и многое другое.</p>\n\nВ шаблоне указывается цвет компонентов, темнота поверхностей, уровень тени, соответствующая непрозрачность чернильных элементов и т. д.\n\nШаблоны позволяют оформить ваше приложение в соответствующем стиле. Они **позволяют настроить все аспекты дизайна** вашего проекта, в соответствии с конкретными потребностями вашего бизнеса или бренда.\n\nДля достижения согласованности в оформлении приложений, вам доступны темы двух типов: светлые и темные. По умолчанию компоненты используют темы светлого типа.\n\n## Провайдер темы\n\nЕсли вы хотите настроить тему, вам нужно использовать компонент `ThemeProvider`, чтобы добавить тему в ваше приложение. Однако это необязательно; компоненты Material-UI поставляются с базовой темой, по умолчанию.\n\n`ThemeProvider` использует контекст React для передачи темы дочерним компонентам, поэтому вам нужно убедиться, что `ThemeProvider` является родительским по отношению к компонентам, которые вы собираетесь темизировать. Вы можете узнать больше об этом в [ разделе API](/styles/api/#themeprovider).\n\n## Переменные конфигурации темы\n\nИзменение переменных конфигурации темы (theme configuration variables) — наиболее эффективный способ настройки Material-UI под ваши потребности. В следующих разделах рассматриваются наиболее важные переменные темы:\n\n- [Палитра](/customization/palette/)\n- [Typography](/customization/typography/)\n- [Интервал](/customization/spacing/)\n- [Контрольные точки](/customization/breakpoints/)\n- [z-index](/customization/z-index/)\n- [Глобальная настройка](/customization/globals/)\n\nВы можете проверить [ раздел \"тема по умолчанию\" (default theme) ](/customization/default-theme/) для просмотра полной информации о default theme.\n\n### Пользовательские переменные\n\nПри использовании темы Material-UI с [styling solution](/styles/basics/) или [ любым другим подходом](/guides/interoperability/#themeprovider), бывает удобным добавить в тему дополнительные переменные, которые вы сможете использовать везде. Например:\n\n{{\"demo\": \"pages/customization/theming/CustomStyles.js\"}}\n\n## Доступ к теме в компоненте\n\nВы [можете получить доступ](/styles/advanced/#accessing-the-theme-in-a-component) к переменным темы внутри ваших React-компонент.\n\n## Вложенность тем\n\n[ Вы можете вкладывать](/styles/advanced/#theme-nesting) несколько theme providers друг в друга.\n\n{{\"demo\": \"pages/customization/theming/ThemeNesting.js\"}}\n\nВнутренняя тема переопределит вашу **внешнюю тему**. Вы можете расширить внешнюю тему, предоставив функцию:\n\n{{\"demo\": \"pages/customization/theming/ThemeNestingExtend.js\"}}\n\n### Примечание о производительности\n\nThe performance implications of nesting the `ThemeProvider` component are linked to JSS's work behind the scenes. The main point to understand is that the injected CSS is cached with the following tuple `(styles, theme)`.\n\n- `theme`: If you provide a new theme at each render, a new CSS object will be computed and injected. Both for UI consistency and performance, it's better to render a limited number of theme objects.\n- `styles`: The larger the styles object is, the more work is needed.\n\n## API\n\n### `createMuiTheme(options, ...args) => theme`\n\nGenerate a theme base on the options received.\n\n#### Аргументы\n\n1. `options` (*Object*): Takes an incomplete theme object and adds the missing parts.\n2. `...args` (*Array*): Deep merge the arguments with the about to be returned theme.\n\n#### Возвращает\n\n`theme` (*Object*): A complete, ready to use theme object.\n\n#### Примеры\n\n```js\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport purple from '@material-ui/core/colors/purple';\nimport green from '@material-ui/core/colors/green';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: purple,\n    secondary: green,\n  },\n  status: {\n    danger: 'orange',\n  },\n});\n```\n\n### `responsiveFontSizes(theme, options) => theme`\n\nGenerate responsive typography settings based on the options received.\n\n#### Аргументы\n\n1. `theme` (*Object*): The theme object to enhance.\n2. `варианты` (*объекта* [optional]):\n\n- `breakpoints` (*Array\\<String\\>* [optional]): Default to `['sm', 'md', 'lg']`. Array of [breakpoints](/customization/breakpoints/) (identifiers).\n- `disableAlign` (*Boolean* [optional]): Default to `false`. Whether font sizes change slightly so line heights are preserved and align to Material Design's 4px line height grid. This requires a unitless line height in the theme's styles.\n- `factor` (*Number* [optional]): Default to `2`. This value determines the strength of font size resizing. The higher the value, the less difference there is between font sizes on small screens. The lower the value, the bigger font sizes for small screens. The value must be greater than 1.\n- `variants` (*Array\\<String\\>* [optional]): Default to all. The typography variants to handle.\n\n#### Возвращает\n\n`theme` (*Object*): The new theme with a responsive typography.\n\n#### Примеры\n\n```js\nimport { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';\n\nlet theme = createMuiTheme();\ntheme = responsiveFontSizes(theme);\n```"