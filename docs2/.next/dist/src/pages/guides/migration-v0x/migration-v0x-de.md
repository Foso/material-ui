module.exports = "# Migration von v0.x zu v1\n\n<p class=\"description\">Ja, v1 wurde veröffentlicht! Profitieren Sie von 2 Jahren Arbeit.</p>\n\n## Häufig gestellte Fragen\n\n### Woah - die API ist anders! Bedeutet das, dass 1.0 völlig anders ist und ich die Grundlagen noch einmal erlernen muss, und eine Migration wird praktisch unmöglich sein?\n\nGute Frage! Die Antwort ist nein. Die Kernkonzepte haben sich nicht geändert. You will notice that the API provides more flexibility, but this has a cost – lower-level components that abstract less complexity.\n\n### Was hat zu einer so großen Veränderung geführt?\n\nDie Material-UI wurde vor [4 Jahren gestartet](https://github.com/Foso/material-ui/commit/28b768913b75752ecf9b6bb32766e27c241dbc46). Das Ökosystem hat sich seitdem stark verändert, wir haben auch viel gelernt. [@nathanmarks](https://github.com/nathanmarks/) begann eine ehrgeizige Aufgabe, Material-UI **von Grund auf ** neu zu erstellen unter Ausnutzung seines Wissen seit langem bestehende Probleme zu lösen. Um einige der wichtigsten Änderungen zu nennen:\n\n- Neue Styling-Lösung mit CSS-in-JS (bessere[ Anpassungsmöglichkeiten](/customization/components/), bessere Leistung)\n- Neues Theming (Schachteln, selbsttragend usw.)\n- Schnelle Dokumentation dank [Next.js](https://github.com/zeit/next.js)\n- Viel bessere [Testabdeckung](/guides/testing/) (99%+, läuft auf allen gängigen Browsern, [visuelle Regressionstests](https://www.argos-ci.com/Foso/material-ui))\n- Vollständige [serverseitiges Rendern](/guides/server-rendering/) Unterstützung\n- Große Auswahl an [ unterstützten Browsern](/getting-started/supported-platforms/)\n\n### Wo soll ich bei einer Migration anfangen?\n\n1. Beginnen Sie mit der Installation der v1.x-Version von Material-UI neben der v0.x-Version.\n    \n    Mit yarn:\n\n```sh\n  yarn add material-ui\n  yarn add @material-ui/core\n  ```\n\n  Or with npm:\n  ```sh\n  npm install material-ui\n  npm install @material-ui/core\n  ```\n\n  then\n\n  ```js\n  import FlatButton from 'material-ui/FlatButton'; // v0.x\n  import Button from '@material-ui/core/Button'; // v1.x\n  ```\n\n2. Run [the migration helper](https://github.com/Foso/material-ui/tree/master/packages/material-ui-codemod) on your project.\n3. `MuiThemeProvider` is optional for v1.x., but if you have a custom theme, you are free to use v0.x and v1.x versions of the component at the same time, like this:\n\n  ```jsx\n  import React from 'react';\n  import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x\n  import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';\n  import getMuiTheme from 'material-ui/styles/getMuiTheme';\n\n  const theme = createMuiTheme({\n    /* theme for v1.x */\n  });\n  const themeV0 = getMuiTheme({\n    /* theme for v0.x */\n  });\n\n  function App() {\n    return (\n      <MuiThemeProvider theme={theme}>\n        <V0MuiThemeProvider muiTheme={themeV0}>\n          {/*Components*/}\n        </V0MuiThemeProvider>\n      </MuiThemeProvider>\n    );\n  }\n\n  export default App;\n  ```\n\n4. Danach können Sie jeweils eine Komponenteninstanz migrieren.\n\n## Components\n\n### Autocomplete\n\nMaterial-UI doesn't provide a high-level API for solving this problem.\nYou're encouraged you to explore [the solutions the React community has built](/components/autocomplete/).\n\nIn the future, we will look into providing a simple component to solve the simple use cases: [#9997](https://github.com/Foso/material-ui/issues/9997).\n\n### Svg Icon\n\nRun [the migration helper](https://github.com/Foso/material-ui/tree/master/packages/material-ui-codemod) on your project.\n\nThis will apply a change such as the following:\n\n```diff\n-import AddIcon from 'material-ui/svg-icons/Add';\n+import AddIcon from '@material-ui/icons/Add';\n\n<AddIcon />\n```\n\n### Flacher Button\n\n```diff\n-import FlatButton from 'material-ui/FlatButton';\n+import Button from '@material-ui/core/Button';\n\n-<FlatButton />\n+<Button />\n```\n\n### Erhöhter Button\n\nErhöhter Button-Aktualisierungspfad:\n\n```diff\n-import RaisedButton from 'material-ui/RaisedButton';\n+import Button from '@material-ui/core/Button';\n\n-<RaisedButton />\n+<Button variant=\"contained\" />\n```\n\n### Untertitel\n\n```diff\n-import Subheader from 'material-ui/Subheader';\n+import ListSubheader from '@material-ui/core/ListSubheader';\n\n-<Subheader>Sub Heading</Subheader>\n+<ListSubheader>Sub Heading</ListSubheader>\n```\n\n### Umschalten\n\n```diff\n-import Toggle from 'material-ui/Toggle';\n+import Switch from '@material-ui/core/Switch';\n\n-<Toggle\n\n-  toggled={this.state.checkedA}\n-  onToggle={this.handleToggle}\n-/>\n+<Switch\n+  checked={this.state.checkedA}\n+  onChange={this.handleSwitch}\n+/>\n```\n\n### Menüelemente\n\n```diff\n-import MenuItem from 'material-ui/MenuItem';\n+import MenuItem from '@material-ui/core/MenuItem';\n\n-<MenuItem primaryText=\"Profile\" />\n+<MenuItem>Profile</MenuItem>\n```\n\n### Schriftarten-Icons\n\n```diff\n-import FontIcon from 'material-ui/FontIcon';\n+import Icon from '@material-ui/core/Icon';\n\n-<FontIcon>home</FontIcon>\n+<Icon>home</Icon>\n```\n\n### Zirkulärer Fortschritt\n\n```diff\n-import CircularProgress from 'material-ui/CircularProgress';\n+import CircularProgress from '@material-ui/core/CircularProgress';\n\n-<CircularProgress mode=\"indeterminate\" />\n+<CircularProgress variant=\"indeterminate\" />\n```\n\n### Dropdownmenü\n\n```diff\n-import DropDownMenu from 'material-ui/DropDownMenu';\n+import Select from '@material-ui/core/Select';\n\n-<DropDownMenu></DropDownMenu>\n+<Select value={this.state.value}></Select>\n```\n\n### Fortsetzung folgt…\n\nHaben Sie Ihre App erfolgreich migriert und möchten der Community helfen? There is an open issue in order to finish this migration guide [#7195](https://github.com/Foso/material-ui/issues/7195). Jede Pull-Anfrage wird begrüßt 😊.\n"