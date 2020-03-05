(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{"7Dsm":function(e,n,t){var a={"./css-baseline-aa.md":"ltyz","./css-baseline-de.md":"jLXK","./css-baseline-es.md":"SQVO","./css-baseline-fr.md":"E2mr","./css-baseline-ja.md":"X2Qg","./css-baseline-pt.md":"MKSQ","./css-baseline-ru.md":"cCgO","./css-baseline-zh.md":"IDRJ","./css-baseline.md":"ApKk"};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="7Dsm"},ApKk:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# CSS Baseline\n\n<p class=\"description\">Material-UI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon.</p>\n\n## Global reset\n\nYou might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option.\nIt's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### Page\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- The margin in all browsers is removed.\n- The default Material Design background color is applied.\nIt's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Layout\n\n- `box-sizing` is set globally on the `<html>` element to `border-box`.\nEvery element\u2014including `*::before` and `*::after` are declared to inherit this property,\nwhich ensures that the declared width of the element is never exceeded due to padding or border.\n\n### Typography\n\n- No base font-size is declared on the `<html>`, but 16px is assumed (the browser default).\nYou can learn more about the implications of changing the `<html>` default font size in [the theme documentation](/customization/typography/#typography-html-font-size) page.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- Font antialiasing is enabled for better display of the Roboto font.\n"},E2mr:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# Principes CSS\n\n<p class=\"description\">Material-UI fournit un composant CssBaseline pour relancer une base \xe9l\xe9gante, coh\xe9rente et simple sur laquelle s'appuyer.</p>\n\n## Global reset\n\nVous connaissez peut-\xeatre [normalize.css](https://github.com/necolas/normalize.css), une collection d'\xe9l\xe9ments HTML et de normalisations de style d'attributs.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### Page\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- La marge dans tous les navigateurs est supprim\xe9e.\n- La couleur d'arri\xe8re-plan par d\xe9faut de Material Design est appliqu\xe9e. It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Disposition\n\n- la taille de la bo\xeete `box-sizing` est d\xe9finie globalement sur l'\xe9l\xe9ment `<html>` \xe0 `border-box`. Chaque \xe9l\xe9ment, y compris `* :: before` et `* :: after` est d\xe9clar\xe9 h\xe9riter de cette propri\xe9t\xe9, ce qui garantit que la largeur d\xe9clar\xe9e de l'\xe9l\xe9ment n'est jamais d\xe9pass\xe9e en raison d'un remplissage ou d'une bordure.\n\n### Typographie\n\n- Aucune taille de police de base n\u2019est d\xe9clar\xe9e sur le `<html>`, mais 16px est utilis\xe9e (valeur par d\xe9faut du navigateur). Vous pouvez en apprendre davantage sur les implications de l' \xe9volution du `<html>` taille de la police par d\xe9faut dans [la documentation abordant les th\xe8mes](/customization/typography/#typography-html-font-size) page.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- L'anticr\xe9nelage des polices est activ\xe9 pour un meilleur affichage de la police Roboto."},IDRJ:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# CSS Baseline \u57fa\u7ebf\n\n<p class=\"description\">Material-UI \u63d0\u4f9b\u4e86\u4e00\u4e2a CssBaseline \u7ec4\u4ef6\uff0c\u7528\u4e8e\u542f\u52a8\u4e00\u4e2a\u4f18\u96c5\u3001\u4e00\u81f4\u4e14\u7b80\u5355\u7684\u57fa\u7ebf\u3002</p>\n\n## Global reset\n\n\u60a8\u53ef\u80fd\u5bf9 [normailize.css](https://github.com/necolas/normalize.css)\u6bd4\u8f83\u719f\u6089\uff0c\u800c\u8fd9\u662f\u4e00\u4e2a HTML \u5143\u7d20\u548c\u6837\u5f0f\u89c4\u8303\u5316\u7684\u5c5e\u6027\u7684\u96c6\u5408\u3002\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### \u9875\u9762\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- \u6240\u6709\u6d4f\u89c8\u5668\u4e2d\u7684\u8fb9\u8ddd\u5c06\u4f1a\u88ab\u5220\u9664\u3002\n- Material Design \u7684\u80cc\u666f\u989c\u8272\u4f1a\u9ed8\u8ba4\u5730\u88ab\u5e94\u7528\u3002 It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### \u5e03\u5c40\n\n- \u5728 `<html>` \u5143\u7d20\u91cc\u9762\uff0c\u6211\u4eec\u5c06 `box-sizing` \u5168\u5c40\u8bbe\u7f6e\u4e3a `border-box`\u3002 \u8fd9\u6837\u4e00\u6765\uff0c\u5305\u62ec `*:: before` \u548c `*:: after` \u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u90fd\u4f1a\u88ab\u58f0\u660e\u6765\u7ee7\u627f\u8fd9\u4e2a\u5c5e\u6027\uff0c\u8fd9\u6837\u80fd\u591f\u786e\u4fdd\u5143\u7d20\u7684\u58f0\u660e\u5bbd\u5ea6\u6c38\u8fdc\u4e0d\u4f1a\u8d85\u8fc7 padding \u6216\u8005 border\u3002\n\n### Typography\uff08\u6587\u5b57\u94f8\u6392\uff09\n\n- \u5728 `<html>` \u91cc\u9762\u4e0d\u4f1a\u58f0\u660e\u57fa\u7840\u7684 font-size\uff0c\u4f46\u662f\u6211\u4eec\u5047\u8bbe\u662f 16px (\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u8bbe\u7f6e)\u3002 \u60a8\u53ef\u4ee5\u5728[\u4e3b\u9898\u6587\u6863](/customization/typography/#typography-html-font-size) \u9875\u9762\u4e2d\u4e86\u89e3\u66f4\u591a\u6709\u5173\u66f4\u6539 `<html>` \u9ed8\u8ba4\u5b57\u4f53\u5927\u5c0f\u7684\u5f71\u54cd \u3002\n- \u5728 `theme.typography.body2` \u5143\u7d20\u4e0a\u8bbe\u7f6e `<body>` \u6837\u5f0f\u3002\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- \u5b57\u4f53\u7684\u5e73\u6ed1\u5316\u80fd\u8ba9 Roboto \u5b57\u4f53\u66f4\u597d\u5730\u5c55\u793a\u3002"},LDDR:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t("mXGw"),o=t.n(a),s=t("e+1t"),r=o.a.createElement,i=t("7Dsm"),l=t("eDR+"),d=r(s.a,{req:i,reqSource:l,reqPrefix:"pages/components/css-baseline"});function p(){return d}},MKSQ:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# CSS Baseline\n\n<p class=\"description\">Material-UI oferece um componente CSS Base a fim de inciar uma elegante, consistente e simples base para construir sobre.</p>\n\n## Global reset\n\nVoc\xea j\xe1 deve estar familiarizado com [normalize.css](https://github.com/necolas/normalize.css), uma cole\xe7\xe3o de elementos HTML e normas de atributos de estilo.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### P\xe1gina\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- The margin in all browsers is removed.\n- A cor de fundo padr\xe3o do material design \xe9 aplicada. It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Leiaute\n\n- `box-sizing` \xe9 definido globalmente no elemento `<html>` para `border-box`. Todos elementos \u2014incluindo `*::before` e `*::after` s\xe3o declarados para herdar essa propriedade, que garante que a largura declarada do elemento nunca seja excedida devido ao preenchimento da borda.\n\n### Tipografia\n\n- Nenhum tamanho de fonte base \xe9 declarado no `<html>`, mas 16px \xe9 assumido (o padr\xe3o do navegador). Voc\xea pode aprender mais sobre as implica\xe7\xf5es da mudan\xe7a do padr\xe3o de tamanho de fonte do `<html>` na p\xe1gina de [documenta\xe7\xe3o de tema](/customization/typography/#typography-html-font-size).\n- Defina o estilo `theme.typography.body2` no elemento `<body>`.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- O antialiasing de fonte \xe9 habilitado para melhorar a exibi\xe7\xe3o da fonte Roboto."},SQVO:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# Base de CSS\n\n<p class=\"description\">Material-UI provee un componente llamado CssBaseline como un punto de partida elegante, simple y consistente para empezar a desarrollar.</p>\n\n## Global reset\n\nTal vez tengas familiaridad con [normalize.css](https://github.com/necolas/normalize.css), una colecci\xf3n de atributos de estilos normalizados para elementos HTML.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### P\xe1gina\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- Se elimina el margen en todos los navegadores.\n- Se aplica el color de fondo predeterminado de Material Design. It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Disposici\xf3n\n\n- La propiedad `box-sizing` se establece globalmente en el elemento `<html>` con el valor `border-box`. Cada elemento, incluyendo `*::before` y `*::after`, es declarado para heredar \xe9sta propiedad, la cual asegura que el ancho declarado del elemento nunca sea excedido gracias al relleno o al borde.\n\n### Tipograf\xeda\n\n- No se declara ning\xfan tama\xf1o de fuente de base en el elemento `<html>`, pero se asume 16px (el valor predeterminado del navegador). Puedes aprender m\xe1s acerca de las implicaciones de cambiar el tama\xf1o de fuente predeterminado de `<html>`, en la p\xe1gina [de documentaci\xf3n del tema](/customization/typography/#typography-html-font-size).\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- El antialiasing de fuentes est\xe1 habilitado para una mejor visualizaci\xf3n de la fuente Roboto."},X2Qg:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# CSS\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\n\n<p class=\"description\">Material-UI\u306fCssBaseline\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3001\u30a8\u30ec\u30ac\u30f3\u30c8\u3067\u4e00\u8cab\u6027\u306e\u3042\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002</p>\n\n## Global reset\n\n\u8cb4\u65b9\u306f\u3082\u3057\u304b\u3057\u305f\u3089\u3001HTML\u306e\u8981\u7d20\u3068\u5c5e\u6027\u306e\u30b9\u30bf\u30a4\u30eb\u6b63\u898f\u5316\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3042\u308b [normalize.css](https://github.com/necolas/normalize.css)\u7cbe\u901a\u3057\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### \u30da\u30fc\u30b8\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- \u3059\u3079\u3066\u306e\u30d6\u30e9\u30a6\u30b6\u306e\u4f59\u767d\u304c\u524a\u9664\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n- \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u30c7\u30b6\u30a4\u30f3\u306e\u80cc\u666f\u8272\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002 It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### \u30ec\u30a4\u30a2\u30a6\u30c8\n\n- `\u30dc\u30c3\u30af\u30b9\u30b5\u30a4\u30ba` \u306f\u3001 `<html>` \u8981\u7d20\u3067 `border-box`\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 \u3059\u3079\u3066\u306e\u8981\u7d20\uff08 `*:: before` \u304a\u3088\u3073 `*:: after` \u3092\u542b\u3080\uff09\u306f\u3001\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u7d99\u627f\u3059\u308b\u3088\u3046\u306b\u5ba3\u8a00\u3055\u308c\u3066\u3044\u307e\u3059 \u306f\u3001\u8981\u7d20\u306e\u5ba3\u8a00\u3055\u308c\u305f\u5e45\u304c\u30d1\u30c7\u30a3\u30f3\u30b0\u307e\u305f\u306f\u5883\u754c\u306e\u305f\u3081\u306b\u8d85\u904e\u3057\u306a\u3044\u3053\u3068\u3092\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002\n\n### \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\n\n- `<html>`\u306b\u306f\u57fa\u672c\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u306f\u5ba3\u8a00\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u304c\u300116px\u304c\u60f3\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\uff08\u30d6\u30e9\u30a6\u30b6\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\uff09\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u306e`<html>`\u3092\u5909\u66f4\u3057\u305f\u5834\u5408\u306e\u5f71\u97ff\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002[the theme documentation](/customization/typography/#typography-html-font-size)\n- `<body>` \u8981\u7d20\u306b `theme.typography.body2` \u30b9\u30bf\u30a4\u30eb\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- Roboto\u30d5\u30a9\u30f3\u30c8\u3092\u898b\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u3001\u30d5\u30a9\u30f3\u30c8\u306e\u30a2\u30f3\u30c1\u30a8\u30a4\u30ea\u30a2\u30b9\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"},aGzB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/css-baseline",function(){return t("LDDR")}])},cCgO:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# CSS Baseline\n\n<p class=\"description\">Material-UI \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 CssBaseline, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u0443\u044e, \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0438 \u043f\u0440\u043e\u0441\u0442\u0443\u044e \u043e\u0441\u043d\u043e\u0432\u0443 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b.</p>\n\n## Global reset\n\nYou might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- \u041f\u043e\u043b\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445 \u0443\u0434\u0430\u043b\u0435\u043d\u044b.\n- The default Material Design background color is applied. It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### \u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\n- `box-sizing` is set globally on the `<html>` element to `border-box`. Every element\u2014including `*::before` and `*::after` are declared to inherit this property, which ensures that the declared width of the element is never exceeded due to padding or border.\n\n### \u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430\n\n- No base font-size is declared on the `<html>`, but 16px is assumed (the browser default). You can learn more about the implications of changing the `<html>` default font size in [the theme documentation](/customization/typography/#typography-html-font-size) page.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- \u0421\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u043e\u0432 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0448\u0440\u0438\u0444\u0442\u0430 Roboto."},"eDR+":function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="eDR+"},jLXK:function(e,n){e.exports="---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# CSS-Baseline\n\n<p class=\"description\">Die Material-UI bietet eine CssBaseline-Komponente, um eine elegante, konsistente und einfache Basis zu schaffen, auf der aufgebaut werden kann.</p>\n\n## Global reset\n\nM\xf6glicherweise kennen Sie [normalize.css](https://github.com/necolas/normalize.css), eine Sammlung von HTML-Element- und Attributstil-Normalisierungen.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### Seite\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- Der Rand in allen Browsern wird entfernt.\n- Die Standardhintergrundfarbe des Materialdesigns wird angewendet. Es verwendet [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) f\xfcr normale Ger\xe4te und einen wei\xdfen Hintergrund f\xfcr Drucker.\n\n### Layout\n\n- `box-sizing` wird global auf dem `<html>` Element auf `border-box` gesetzt. Jedes Element, einschlie\xdflich `*::before` und `*::after` erbt dieser Eigenschaft. Dadurch wird sichergestellt, dass die deklarierte Breite des Elements niemals durch Auff\xfcllung oder Rand \xfcberschritten wird.\n\n### Typografie\n\n- F\xfcr das `<html>`-Element wird keine Basisschriftgr\xf6\xdfe deklariert, es wird jedoch von 16px ausgegangen (Standardeinstellung des Browsers). Sie k\xf6nnen mehr \xfcber die Auswirkungen lernen von den sich \xe4ndernden `<html>` Standard - Schriftgr\xf6\xdfe auf [der Theme Dokumentation](/customization/typography/#typography-html-font-size) Seite.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- Das Antialiasing von Schriftarten ist aktiviert, um die Roboto-Schrift besser anzuzeigen."},ltyz:function(e,n){e.exports='---\ncomponents: crwdns109827:0crwdne109827:0\n---\n\n# crwdns89898:0crwdne89898:0\n\n<p class="description">crwdns89900:0crwdne89900:0</p>\n\n## crwdns109829:0crwdne109829:0\n\ncrwdns89902:0crwdne89902:0\n\n```jsx\ncrwdns103976:0crwdne103976:0\n```\n\n## crwdns109831:0crwdne109831:0\n\ncrwdns109833:0crwdne109833:0 crwdns109835:0crwdne109835:0\n\n```jsx\ncrwdns109837:0crwdne109837:0\n```\n\n## crwdns109839:0crwdne109839:0\n\n### crwdns89908:0crwdne89908:0\n\ncrwdns109841:0crwdne109841:0 crwdns109843:0crwdne109843:0\n\n- crwdns89914:0crwdne89914:0\n- crwdns89916:0crwdne89916:0 crwdns107223:0crwdne107223:0\n\n### crwdns89920:0crwdne89920:0\n\n- crwdns89922:0crwdne89922:0 crwdns89924:0crwdne89924:0\n\n### crwdns89926:0crwdne89926:0\n\n- crwdns89928:0crwdne89928:0 crwdns89930:0crwdne89930:0\n- crwdns89932:0crwdne89932:0\n- crwdns109845:0crwdne109845:0\n- crwdns89938:0crwdne89938:0'}},[["aGzB",0,1]]]);