module.exports = "# Customizing components\n\n<p class=\"description\">Вы можете легко настроить внешний вид компонента Material-UI.</p>\n\nПоскольку компоненты могут использоваться в разных контекстах, существует несколько подходов к этому. Переходя от самого нераспространённого варианта к самому широко используемому, это:\n\n1. [Конкретное изменение для единичного случая](#1-specific-variation-for-a-one-time-situation)\n2. [Динамическое изменение для единичного случая](#2-dynamic-variation-for-a-one-time-situation)\n3. [Особый вариант компонента](#3-specific-variation-of-a-component) использумый в различных контекстах\n4. [Material Design варианты](#4-material-design-variations) как у компонента кнопка\n5. [Глобальное изменение темы](#5-global-theme-variation)\n\n## 1. Конкретное изменение для единичного случая\n\nВозможно, вам придется изменить стиль компонента в конкретном месте. Для этого вам предоставляются следующие методы:\n\n### Переопределение стилей через имена классов\n\nПервый способ переопределения стиля компонента - использовать **имена классов**. Каждый компонент предоставляет свойство `className` которое всегда применяется к корневому элементу.\n\nВ этом примере компонент высшего-порядка [`withStyles()`](/styles/basics/#higher-order-component-api) используется для внедрения пользовательских стилей в DOM и передачи имени класса компоненту `ClassNames` через его свойство `classes`. Для создания стилей вы можете воспользоваться [любым доступным стилевым решением](/guides/interoperability/), вплоть до обычного CSS, но вы обязаны принимать во внимание [порядок внедрения CSS](/styles/advanced/#css-injection-order), поскольку CSS внедренный в DOM через Material-UI имеет максимально возможную специфичность, так как `<link>` внедряется в самом конце раздела `<head />` для гарантии корректного отображения компонентов.\n\n{{\"demo\": \"pages/customization/components/ClassNames.js\"}}\n\n### Overriding styles with classes\n\nКогда ` className ` свойства недостаточно, и вам нужен доступ ко вложенным элементам, вы можете воспользоваться свойством объекта `classes` для настройки всех CSS, внедренных через Material-UI для данного компонента.\n\nСписок классов, доступных для каждого компонента представлен на странице API-документации компонента. Обратитесь к разделу ** CSS ** и ищите в **столбце с именем правила**. Для примера можете взглянуть на [Button CSS API](/api/button/#css). Кроме того, вы можете воспользоваться [встроенными в браузер инструментами разработчика](#using-the-dev-tools).\n\nВ этом примере также используется ` withStyles() ` (см. выше), но теперь ` ClassesNesting ` присваивает свойству `classes` компонета `Button` обьект сопоставляющий **имена переопределяемых классов** (стилевые правила) с **именам использумых классов CSS ** (значениями). Существующие классы компонента будут по прежнему внедряться, поэтому необходимо указать только те стили, которые вы хотите добавить или переопределить.\n\nОбратите внимание, что в дополнение к стилю кнопки, стиль текста кнопки был изменен на стиль с заглавными буквами:\n\n{{\"demo\": \"pages/customization/components/ClassesNesting.js\"}}\n\n### Переопределение стилей через глобальные имена классов\n\n[Подробности в этом разделе](/styles/advanced/#with-material-ui-core).\n\n### Использование инструментов разработчика\n\nИнструменты разработчика браузера могут сэкономить вам много времени. В режиме разработки имена классов Material-UI [следуют простому шаблону](/styles/advanced/#class-names): ` Mui[имя компонента]-[имя стилевого правила]-[UUID]`.\n\nВернемся к упомянутому выше примеру. Как вы можете переопределить текст кнопки?\n\n![Инструменты разработчика](/static/images/customization/dev-tools.png)\n\nИспользуя инструменты разработчика, вы знаете, что вам нужно нацелиться на компонент `Button` и стилевое правило `label`:\n\n```jsx\n<Button classes={{ label: 'my-class-name' }} />\n```\n\n### Краткая запись\n\nПриведенный выше пример кода может быть сокращен за счет использования **того же CSS API ** в качестве дочернего компонента. В этом примере компонент высшего порядка `withStyles()` внедряет свойство `classes`, используемое затем [компонентом `Button` ](/api/button/#css).\n\n```jsx\nconst StyledButton = withStyles({\n  root: {\n    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',\n    borderRadius: 3,\n    border: 0,\n    color: 'white',\n    height: 48,\n    padding: '0 30px',\n    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',\n  },\n  label: {\n    textTransform: 'capitalize',\n  },\n})(Button);\n```\n\n{{\"demo\": \"pages/customization/components/ClassesShorthand.js\"}}\n\n### Pseudo-classes\n\nОсобые состояния компонент, такие как * наведение (hover)*, * фокус *, *disabled* и *selected*, стилизованы при помощи CSS с более высокой специфичностью. [Специфичность - это весовой коэффициент](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) применяемый к данной декларации CSS.\n\nЧтобы переопределить особые состояния компонентов, **вам нужно увеличить специфичность**. Вот пример с *disable* состоянием и компонентом кнопка использующим **псевдокласс** (`:disabled`):\n\n```css\n.Button {\n  color: black;\n}\n.Button:disabled { /* Increase the specificity */\n  color: white;\n}\n```\n\n```jsx\n<Button disabled className=\"Button\">\n```\n\nИногда вы не можете использовать **псевдо-класс**, так как это состояние в платформе отсутствует. В качестве примера можно привести компонент пункт меню и состояние *выбрано*. Помимо доступа к вложенным элементам, свойство `classes` можно использовать для настройки специальных состояний компонентов Material-UI:\n\n```css\n.MenuItem {\n  color: black;\n}\n.MenuItem.selected { /* Increase the specificity */\n  color: blue;\n}\n```\n\n```jsx\n<MenuItem selected classes={{ root: 'MenuItem', selected: 'selected' }}>\n```\n\n#### Почему я должен повышать специфичность для переопределения отдельного состояния компонента?\n\nСпецификация CSS, по определению, обязывает псевдоклассы повышать специфичность. Для согласованности Material-UI повышает специфичность своих пользовательских псевдоклассов. Это имеет одно важное преимущество: оно позволяет выбрать определённое состояние, которое вы хотите изменить.\n\n#### Могу ли я использовать другое API, которое требует меньше шаблонов?\n\nВместо предоставления значений API свойства `classes`, вы можете положиться на [ глобальные имена классов ](/styles/advanced/#with-material-ui-core) которые генерируется Material-UI. Оно реализует все эти пользовательские псевдоклассы:\n\n| classes key  | Global class name |\n|:------------ |:----------------- |\n| checked      | Mui-checked       |\n| disabled     | Mui-disabled      |\n| error        | Mui-error         |\n| focused      | Mui-focused       |\n| focusVisible | Mui-focusVisible  |\n| required     | Mui-required      |\n| expanded     | Mui-expanded      |\n| selected     | Mui-selected      |\n\n\n```css\n.MenuItem {\n  color: black;\n}\n.MenuItem.Mui-selected { /* Increase the specificity */\n  color: blue;\n}\n```\n\n```jsx\n<MenuItem selected className=\"MenuItem\">\n```\n\n### Используйте `$ruleName` для ссылки на правило в той же таблице стилей\n\nПлагин [jss-nested](https://github.com/cssinjs/jss-nested) (доступный по умолчанию) позволяет упростить процесс повышения специфичности.\n\n```js\nconst styles = {\n  root: {\n    '&$disabled': {\n      color: 'white',\n    },\n  },\n  disabled: {},\n};\n```\n\nкомпилируется в:\n\n```css\n.root-x.disable-x {\n  color: white;\n}\n```\n\n⚠️ ️ Чтобы это сработало, вам нужно применить к DOM оба сгенерированных имени класса (`root` & `disabled`).\n\n```jsx\n<Button\n  disabled\n  classes={{\n    root: classes.root, // class name, e.g. `root-x`\n    disabled: classes.disabled, // class name, e.g. `disabled-x`\n  }}\n>\n```\n\n{{\"demo\": \"pages/customization/components/ClassesState.js\"}}\n\n### Переопределение с помощью встраиваемых (inline) стилей\n\nВторой способ переопределить стиль компонента – использовать подход **встроенного стиля**. Каждый компонент предоставляет свойство `style`. Эти свойства всегда применяются к корневому элементу.\n\nВам не нужно беспокоиться о специфичности CSS, так как встроенный стиль имеет приоритет над обычным CSS.\n\n{{\"demo\": \"pages/customization/components/InlineStyle.js\"}}\n\n[Когда я должен использовать встраиваемый стиль, а когда классы?](/getting-started/faq/#when-should-i-use-inline-style-vs-classes)\n\n## 2. Динамическое изменение для единичного случая\n\nYou have learned how to override the style of a Material-UI component in the previous section. Теперь давайте посмотрим, как мы можем сделать эти переопределения динамическими. Here are five alternatives; each has it's pros and cons.\n\n### Динамический CSS\n\n{{\"demo\": \"pages/customization/components/DynamicCSS.js\"}}\n\n### Ответвление имени класса\n\n{{\"demo\": \"pages/customization/components/DynamicClassName.js\"}}\n\n### CSS переменные\n\n{{\"demo\": \"pages/customization/components/DynamicCSSVariables.js\"}}\n\n### Inline-styles\n\n{{\"demo\": \"pages/customization/components/DynamicInlineStyle.js\"}}\n\n### Вложенные темы\n\n{{\"demo\": \"pages/customization/components/DynamicThemeNesting.js\"}}\n\n## 3. Особый вариант компонента\n\nВозможно вам потребуется создать вариант компонента и использовать его в разных контекстах, например раскрашенную кнопку на странице вашего товара, но вы, вероятно, захотите сохранить свой код [*компактным*](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).\n\nНаилучший подход состоит в том, чтобы следовать варианту 1, а затем воспользоваться преимуществами композиции React, экспортируя настроенный компонент для использования там, где он вам нужен.\n\n{{\"demo\": \"pages/customization/components/Component.js\", \"hideEditButton\": true}}\n\n## 4. Material Design варианты\n\nСпецификация Material Design допускает существование некоторых компонентов в различных вариантах. Так, например, кнопки реализованы в разных формах: [text](https://material.io/design/components/buttons.html#text-button) (прежде \"flat\"), [contained](https://material.io/design/components/buttons.html#contained-button) (прежде \"raised\"), [FAB](https://material.io/design/components/buttons-floating-action-button.html) и другие.\n\nMaterial-UI старается реализовать все эти варианты. Пожалуйста, обратитесь к разделу документации [Поддерживаемые компоненты](/getting-started/supported-components/), чтобы узнать текущее состояние реализации всех компонентов Material Design.\n\n## 5. Глобальное изменение темы\n\nIn order to promote consistency between components, and manage the user interface appearance as a whole, Material-UI provides a mechanism to apply global changes.\n\nThe demos of this section covers how to the change the button's font size.\n\n### Настраиваемые параметры темы\n\nYou can adjust the [theme configuration variables](/customization/theming/#theme-configuration-variables).\n\n```jsx\nconst theme = createMuiTheme({\n  typography: {\n    button: {\n      fontSize: '1rem',\n    },\n  },\n});\n```\n\n{{\"demo\": \"pages/customization/components/ThemeVariables.js\"}}\n\n### Глобальное переопределение CSS\n\nВы также можете настроить все экземпляры компонента с помощью CSS. Components expose [global class names](/styles/advanced/#with-material-ui-core) to enable this. Это очень похоже на настройку Bootstrap.\n\n```jsx\nconst GlobalCss = withStyles({\n  // @global is handled by jss-plugin-global.\n  '@global': {\n    // You should target [class*=\"MuiButton-root\"] instead if you nest themes.\n    '.MuiButton-root': {\n      fontSize: '1rem',\n    },\n  },\n})(() => null);\n\n// …\n\n<GlobalCss />\n```\n\n{{\"demo\": \"pages/customization/components/GlobalCssOverride.js\", \"iframe\": true, \"height\": 70}}\n\n### Глобальное переопределение темы\n\nВы можете воспользоваться `переопределением` ключевых параметров `темы`, чтобы потенциально изменить любой стиль, внедренный Material-UI в DOM. Дальнейшие подробности об этом в разделе документации [темы](/customization/globals/#css).\n\n```jsx\nconst theme = createMuiTheme({\n  overrides: {\n    MuiButton: {\n      root: {\n        fontSize: '1rem',\n      },\n    },\n  },\n});\n```\n\n{{\"demo\": \"pages/customization/components/GlobalThemeOverride.js\"}}"