module.exports = "---\ncomponents: CssBaseline, ScopedCssBaseline\n---\n\n# Base de CSS\n\n<p class=\"description\">Material-UI provee un componente llamado CssBaseline como un punto de partida elegante, simple y consistente para empezar a desarrollar.</p>\n\n## Global reset\n\nTal vez tengas familiaridad con [normalize.css](https://github.com/necolas/normalize.css), una colección de atributos de estilos normalizados para elementos HTML.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n```\n\n## Scoping on children\n\nHowever, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.\n\n```jsx\nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n    </ScopedCssBaseline>\n  );\n}\n```\n\n## Approach\n\n### Página\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- Se elimina el margen en todos los navegadores.\n- Se aplica el color de fondo predeterminado de Material Design. It's using [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Disposición\n\n- La propiedad `box-sizing` se establece globalmente en el elemento `<html>` con el valor `border-box`. Cada elemento, incluyendo `*::before` y `*::after`, es declarado para heredar ésta propiedad, la cual asegura que el ancho declarado del elemento nunca sea excedido gracias al relleno o al borde.\n\n### Tipografía\n\n- No se declara ningún tamaño de fuente de base en el elemento `<html>`, pero se asume 16px (el valor predeterminado del navegador). Puedes aprender más acerca de las implicaciones de cambiar el tamaño de fuente predeterminado de `<html>`, en la página [de documentación del tema](/customization/typography/#typography-html-font-size).\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.\n- El antialiasing de fuentes está habilitado para una mejor visualización de la fuente Roboto."