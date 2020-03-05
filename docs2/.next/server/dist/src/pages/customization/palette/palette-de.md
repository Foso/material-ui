module.exports = "# Palette\n\n<p class=\"description\">In der Palette können Sie die Farbe der Komponenten an Ihre Marke anpassen.</p>\n\n## Intentionen\n\nEine Farbintention ist eine Zuordnung einer Palette zu einer bestimmten Intention in Ihrer Anwendung. Das Theme stellt die folgenden FarbIntentionen zur Verfügung:\n\n- primary - wird verwendet, um primäre Oberflächenelemente für einen Benutzer darzustellen.\n- secondary - wird verwendet, um sekundäre Oberflächenelemente für einen Benutzer darzustellen.\n- error- wird verwendet, um Oberflächenelemente darzustellen, auf die der Benutzer aufmerksam gemacht werden sollte.\n- warning - used to represent potentially dangerous actions or important messages.\n- info - used to present information to the user that is neutral and not necessarily important.\n- success - used to indicate the successful completion of an action that user triggered.\n\nDie Standardpalette verwendet die mit `A` (`A200` usw.) gekennzeichneten Schattierungen für die sekundäre Intention, und die nicht vorangestellten Farben für die anderen Intentionen.\n\nWenn Sie mehr über Farbe erfahren möchten, können Sie sich im [Farbabschnitt](/customization/color/) informeiren.\n\n{{\"demo\": \"pages/customization/palette/Intentions.js\", \"bg\": \"inline\", \"hideHeader\": true}}\n\n### Individuelle Anpassung\n\nSie können die Standardpalettenwerte überschreiben, indem Sie ein Palette Objekt als Teil Ihres Themas hinzufügen.\n\nIf any of the [`palette.primary`](/customization/default-theme/?expand-path=$.palette.primary), [`palette.secondary`](/customization/default-theme/?expand-path=$.palette.secondary), [`palette.error`](/customization/default-theme/?expand-path=$.palette.error), [`palette.warning`](/customization/default-theme/?expand-path=$.palette.warning), [`palette.info`](/customization/default-theme/?expand-path=$.palette.info) or [`palette.successs`](/customization/default-theme/?expand-path=$.palette.successs) 'intention' objects are provided, they will replace the defaults.\n\nDer Intentionswert kann entweder ein [ Farbobjekt ](/customization/color/) sein oder ein Objekt mit einem oder mehreren der Schlüssel, die von der folgenden TypeScript-Schnittstelle angegeben werden:\n\n```ts\ninterface PaletteIntention {\n  light?: string;\n  main: string;\n  dark?: string;\n  contrastText?: string;\n}\n```\n\n**Verwenden eines Farbobjekts**\n\nDie einfachste Möglichkeit, eine Absicht anzupassen, besteht darin, eine oder mehrere der angegebenen Farben zu importieren und auf eine Palettenabsicht anzuwenden:\n\n```js\nimport { createMuiTheme } from '@material-ui/core/styles';\nimport blue from '@material-ui/core/colors/blue';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: blue,\n  },\n});\n```\n\n**Die Farben direkt zur Verfügung stellen**\n\nWenn Sie mehr benutzerdefinierte Farben bereitstellen möchten, können Sie entweder ein eigenes Farbobjekt erstellen oder Farben für einige oder alle Schlüssel der Absichten direkt angeben:\n\n```js\nimport { createMuiTheme } from '@material-ui/core/styles';\n\nconst theme = createMuiTheme({\n  palette: {\n    primary: {\n      // light: will be calculated from palette.primary.main,\n      main: '#ff4400',\n      // dark: will be calculated from palette.primary.main,\n      // contrastText: will be calculated to contrast with palette.primary.main\n    },\n    secondary: {\n      light: '#0066ff',\n      main: '#0044ff',\n      // dark: will be calculated from palette.secondary.main,\n      contrastText: '#ffcc00',\n    },\n    // Used by `getContrastText()` to maximize the contrast between\n    // the background and the text.\n    contrastThreshold: 3,\n    // Used by the functions below to shift a color's luminance by approximately\n    // two indexes within its tonal palette.\n    // Zum Beispiel von Red 500 zu Red 300 oder Red 700 zu wechseln.\n    tonalOffset: 0.2,\n  },\n});\n```\n\nAs in the example above, if the intention object contains custom colors using any of the \"main\", \"light\", \"dark\" or \"contrastText\" keys, these map as follows:\n\n- If the \"dark\" and / or \"light\" keys are omitted, their value(s) will be calculated from \"main\", according to the \"tonalOffset\" value.\n- If \"contrastText\" is omitted, its value will be calculated to contrast with \"main\", according to the \"contrastThreshold\" value.\n\nBoth the \"tonalOffset\" and \"contrastThreshold\" values may be customized as needed. A higher value for \"tonalOffset\" will make calculated values for \"light\" lighter, and \"dark\" darker. A higher value for \"contrastThreshold\" increases the point at which a background color is considered light, and given a dark \"contrastText\".\n\nNote that \"contrastThreshold\" follows a non-linear curve.\n\n### Beispiel\n\n{{\"demo\": \"pages/customization/palette/Palette.js\"}}\n\n## Farbwerkzeug\n\nEtwas Inspiration gefällig? Das Material-Design-Team hat ein fantastisches [Konfigurationstool](/customization/color/#color-tool) entwickelt, um dir zu helfen.\n\n## Dark mode\n\nMaterial-UI comes with two palette types, light (the default) and dark. You can make the theme dark by setting `type: 'dark'`. While it's only a single property value change, internally it modifies several palette values.\n\n```js\nconst darkTheme = createMuiTheme({\n  palette: {\n    type: 'dark',\n  },\n});\n```\n\nThe colors modified by the palette type are the following:\n\n{{\"demo\": \"pages/customization/palette/DarkTheme.js\", \"bg\": \"inline\", \"hideHeader\": true}}\n\n### User preference\n\nUsers might have specified a preference for a light or dark theme. The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the User Agent.\n\nYou can leverage this preference dynamically with the [useMediaQuery](/components/use-media-query/) hook and the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query.\n\nFor instance, you can enable the dark mode automatically:\n\n```jsx\nimport React from 'react';\nimport useMediaQuery from '@material-ui/core/useMediaQuery';\nimport { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';\n\nfunction App() {\n  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');\n\n  const theme = React.useMemo(\n    () =>\n      createMuiTheme({\n        palette: {\n          type: prefersDarkMode ? 'dark' : 'light',\n        },\n      }),\n    [prefersDarkMode],\n  );\n\n  return (\n    <ThemeProvider theme={theme}>\n      <Routes />\n    </ThemeProvider>\n  );\n}\n```\n\n## Default values\n\nYou can explore the default values of the palette using [the theme explorer](/customization/default-theme/?expand-path=$.palette) or by opening the dev tools console on this page (`window.theme.palette`)."