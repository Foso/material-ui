module.exports = "---\ntitle: Dialog React-Komponente\ncomponents: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide\n---\n\n# Dialog\n\n<p class=\"description\">Dialoge informieren Benutzer über eine Aufgabe und können wichtige Informationen enthalten, Entscheidungen erfordern oder mehrere Aufgaben umfassen.</p>\n\nEin [Dialog](https://material.io/design/components/dialogs.html) ist ein Typ von [modalen](/components/modal/) Fenstern, der vor dem App-Inhalt angezeigt wird, um wichtige Informationen bereitzustellen oder um eine Entscheidung zu bitten. Dialoge deaktivieren alle App-Funktionen, wenn sie angezeigt werden, und bleiben auf dem Bildschirm, bis sie bestätigt, abgewiesen oder eine erforderliche Aktion ausgeführt wurde.\n\nDialoge sind absichtlich unterbrechend und sollten sparsam eingesetzt werden.\n\n## Einfache Dialoge\n\nSimple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).\n\nBerührungsmechanik:\n\n- Durch die Auswahl einer Option wird die Option sofort übernommen und das Menü geschlossen\n- Durch Berühren außerhalb des Dialogs oder Drücken von Zurück wird die Aktion abgebrochen und der Dialog geschlossen\n\n{{\"demo\": \"pages/components/dialogs/SimpleDialog.js\"}}\n\n## Warnungen\n\nAlarme sind dringende Unterbrechungen, die eine Bestätigung erfordern und den Benutzer über eine Situation informieren.\n\nDie meisten Alarme benötigen keine Titel. They summarize a decision in a sentence or two by either:\n\n- Eine Frage stellen (zB \"Dieses Gespräch löschen?\")\n- Eine Aussage zu den Aktionsschaltflächen machen\n\nUse title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.\n\nFalls ein Titel erforderlich ist:\n\n- Verwenden Sie eine klare Frage oder eine Erklärung mit einer Erläuterung im Inhaltsbereich, z. B. \"USB-Speicher löschen?\".\n- Vermeiden Sie Entschuldigungen, Unklarheiten oder Fragen wie \"Warnung!\" oder \"Sind Sie sicher?\"\n\n{{\"demo\": \"pages/components/dialogs/AlertDialog.js\"}}\n\n## Übergänge\n\nSie können den Übergang auch austauschen. Das nächste Beispiel verwendet `Slide (Gleiten)`.\n\n{{\"demo\": \"pages/components/dialogs/AlertDialogSlide.js\"}}\n\n## Formulardialoge\n\nFormulardialoge ermöglichen Benutzern das Ausfüllen von Formularfeldern innerhalb eines Dialogs. Wenn Ihre Seite beispielsweise potenziellen Abonnenten zur Eingabe ihrer E-Mail-Adresse auffordert, können sie das E-Mail-Feld ausfüllen und auf \"Senden\" klicken.\n\n{{\"demo\": \"pages/components/dialogs/FormDialog.js\"}}\n\n## Benutzerdefinierter Dialoge\n\nHier ist ein Beispiel zum Anpassen der Komponente. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/components/).\n\nDas Dialogfeld verfügt über eine Schaltfläche zum Schließen, um die Benutzerfreundlichkeit zu verbessern.\n\n{{\"demo\": \"pages/components/dialogs/CustomizedDialogs.js\"}}\n\n## Vollbild-Dialoge\n\n{{\"demo\": \"pages/components/dialogs/FullScreenDialog.js\"}}\n\n## Optionale Größen\n\nSie können die maximale Breite eines Dialogs festlegen, indem Sie die `maxWidth` Eigenschaft in Kombination mit dem boolean `fullWidth` verwenden. Wenn die Eigenschaft `fullWidth` wahr ist, wird der Dialog basierend auf dem Wert `maxWidth` angepasst.\n\n{{\"demo\": \"pages/components/dialogs/MaxWidthDialog.js\"}}\n\n## Responsive Vollbild\n\nYou may make a dialog responsively full screen using [`useMediaQuery`](/components/use-media-query/#usemediaquery).\n\n```jsx\nimport useMediaQuery from '@material-ui/core/useMediaQuery';\n\nfunction MyComponent() {\n  const theme = useTheme();\n  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));\n\n  return <Dialog fullScreen={fullScreen} />\n}\n```\n\n{{\"demo\": \"pages/components/dialogs/ResponsiveDialog.js\"}}\n\n## Bestätigungsdialoge\n\nBestätigungsdialogfelder erfordern, dass Benutzer ihre Wahl explizit bestätigen, bevor eine Option festgelegt wird. Zum Beispiel können Benutzer mehrere Klingeltöne hören, sie müssen jedoch nur eine endgültige Auswahl treffen, wenn Sie auf „OK“ tippen.\n\nDurch Berühren von „Abbrechen“ in einem Bestätigungsdialogfeld oder durch Drücken von Zurück wird die Aktion abgebrochen, alle Änderungen verworfen und das Dialogfeld geschlossen.\n\n{{\"demo\": \"pages/components/dialogs/ConfirmationDialog.js\"}}\n\n## Ziehbarer Dialog\n\nSie können einen ziehbaren Dialog erstellen, indem Sie [react-draggable](https://github.com/mzabriskie/react-draggable) nutzen. Dazu können Sie die importierte `Draggable` Komponente als `PaperComponent` der `Dialog` Komponente übergeben. Dadurch wird der gesamte Dialog verschiebbar.\n\n{{\"demo\": \"pages/components/dialogs/DraggableDialog.js\"}}\n\n## Blättern von langen Inhalten\n\nWenn Dialoge für das Ansichtsfenster oder das Gerät des Benutzers zu lang werden, scrollen diese.\n\n- `scroll=paper`: Der Inhalt des Dialogs scrollt innerhalb des Papierelements.\n- `scroll=body`: Der Inhalt des Dialogs scrollt innerhalb des Body-Elements.\n\nProbieren Sie die Demo aus, um zu sehen, was wir meinen:\n\n{{\"demo\": \"pages/components/dialogs/ScrollDialog.js\"}}\n\n## Einschränkungen\n\nFollow the [Modal limitations section](/components/modal/#limitations).\n\n## Barrierefreiheit\n\nFolgen Sie dem [Modal Zugänglichkeit Abschnitt](/components/modal/#accessibility)."