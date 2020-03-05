# Глобальная настройка

<p class="description">The overrides key enables you to customize the appearance of all instances of a component type, while the props key enables you to change the default value(s) of a component's props.</p>

## CSS

Если настроек конфигурации недостаточно, можно использовать ключ `overrides` у объекта `theme`, чтобы изменить **абсолютно любой стиль**, который Material-UI вносит в DOM. Это действительно мощная штука.

```js
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: 'white',
      },
    },
  },
});
```

{{"Демо": "pages/customization/globals/GlobalCss.js"}}

Список всех возможных кастомизаций для компонент задокументирован в разделе **Component API**. Например, вы можете взглянуть на кнопку [Button](/api/button/#css). Кроме того, вы всегда можете взглянуть на [реализацию](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/Button/Button.js).

## Настройка props

Вы можете изменить свойство props любой из компонент Material-UI. A `props` key is exposed in the `theme` for this use case.

```js
const theme = createMuiTheme({
  props: {
    // Название компоненты
    MuiButtonBase: {
      // Пример одного из стандартных свойств props
      disableRipple: true, // Скажи НЕТ эффекту расходящихся волн 💣!
    },
  },
});
```

{{"Демо": "pages/customization/globals/DefaultProps.js"}}