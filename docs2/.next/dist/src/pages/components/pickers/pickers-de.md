module.exports = "---\ntitle: Date picker, Time picker React components\ncomponents: TextField\n---\n\n# Datums- und Uhrzeitauswahlen\n\n<p class=\"description\">Datums- und Zeitauswahlen bieten einen einfachen weg, um einen einzigen Wert aus einem vorgefertigten Bereich zu erfassen.</p>\n\n- Auf dem Handy sind Pcikers am besten für die Anzeige im Bestätigungsdialogfeld geeignet.\n- Für die Inline-Anzeige, z. B. in einem Formular, sollten Sie kompakte Steuerelemente wie segmentierte Dropdown-Schaltflächen verwenden.\n\n## @material-ui/pickers\n\n![stars](https://img.shields.io/github/stars/Foso/material-ui-pickers.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/@material-ui/pickers.svg)\n\n[@material-ui/pickers](https://material-ui-pickers.dev/) bietet weitere Datums- und Zeitauswahlmöglichkeiten.\n\n{{\"demo\": \"pages/components/pickers/MaterialUIPickers.js\"}}\n\n## Native Picker\n\n⚠️ Unterstützung von systemeigenen Eingabesteuerelementen durch Browser [ist nicht perfekt](https://caniuse.com/#feat=input-datetime). Schau dir [@material-ui/pickers](https://material-ui-pickers.dev/) an, um eine umfassendere Lösung zu finden.\n\n### Datumsauswahlen\n\nEine native Datumsauswahl mit `type=\"date\"`.\n\n{{\"demo\": \"pages/components/pickers/DatePickers.js\"}}\n\n### Datum & Zeitauswahl\n\nEin natives Datum & Zeitauswahlbeispiel mit `type=\"datetime-local\"`.\n\n{{\"demo\": \"pages/components/pickers/DateAndTimePickers.js\"}}\n\n### Zeitauswahl\n\nEin natives Datum Zeitauswahlbeispiel mit `type=\"time\"`.\n\n{{\"demo\": \"pages/components/pickers/TimePickers.js\"}}\n"