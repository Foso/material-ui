module.exports = "---\ntitle: Menü React-Komponente\ncomponents: Menu, MenuItem, MenuList, ClickAwayListener, Popover, Popper\n---\n\n# Menüs\n\n<p class=\"description\">Menüs zeigen eine Liste von Auswahlmöglichkeiten auf temporären Oberflächen an.</p>\n\nA [Menu](https://material.io/design/components/menus.html) displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.\n\n## Einfaches Menü\n\nStandardmäßig werden einfache Menüs über dem Ankerelement geöffnet (diese Option kann über Eigenschaften geändert werden). Wenn Sie sich nahe an einem Bildschirmrand befinden, richten sich einfache Menüs vertikal neu aus, um sicherzustellen, dass alle Menüelemente vollständig sichtbar sind.\n\nDurch die Auswahl einer Option wird die Option sofort übernommen und das Menü geschlossen.\n\n**Begriffserklärung**: Im Gegensatz zu einfachen Menüs können einfache Dialogfelder zusätzliche Details in Bezug auf die für ein Listenelement verfügbaren Optionen enthalten oder Navigations- oder orthogonale Aktionen in Bezug auf die primäre Aufgabe bereitstellen. Obwohl sie den gleichen Inhalt anzeigen können, werden einfache Menüs gegenüber einfachen Dialogen bevorzugt, da einfache Menüs den aktuellen Kontext des Benutzers weniger stören.\n\n{{\"demo\": \"pages/components/menus/SimpleMenu.js\"}}\n\n## Ausgewählte Menüs\n\nBei der Elementauswahl versuchen einfache Menüs beim Öffnen, das aktuell ausgewählte Menüelement mit dem Ankerelement vertikal auszurichten, und der ursprüngliche Fokus wird auf das ausgewählte Menüelement gesetzt. Das aktuell ausgewählte Menüelement wird mit der Eigenschaft `selected` (von [ListItem](/api/list-item/)) festgelegt. Um ein ausgewähltes Menüelement zu verwenden, ohne den anfänglichen Fokus oder die vertikale Positionierung des Menüs zu beeinflussen, setzen Sie die Eigenschaft `variant` auf `menu`.\n\n{{\"demo\": \"pages/components/menus/SimpleListMenu.js\"}}\n\n## MenuList-Zusammensetzung\n\nDie Komponente `Menü` verwendet intern die Komponente `Popover`. Möglicherweise möchten Sie jedoch eine andere Positionierungsstrategie verwenden oder den Bildlauf nicht blockieren. Um diese Anforderungen zu erfüllen, stellen wir eine `MenuList` Komponente bereit, die Sie zusammen mit `Popper` erstellen können.\n\nDie Hauptaufgabe der `MenuList` Komponente besteht darin, den Fokus festzulegen.\n\n{{\"demo\": \"pages/components/menus/MenuListComposition.js\", \"bg\": true}}\n\n## Menüs anpassen\n\nHier ist ein Beispiel zum Anpassen der Komponente. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/components/).\n\n{{\"demo\": \"pages/components/menus/CustomizedMenus.js\"}}\n\nThe `MenuItem` is a wrapper around `ListItem` with some additional styles. You can use the same list composition features with the `MenuItem` component:\n\n## Maximale-Höhe Menüs\n\nWenn die Höhe eines Menüs die Anzeige aller Menüelemente verhindert, kann das Menü intern gescrollt werden.\n\n{{\"demo\": \"pages/components/menus/LongMenu.js\"}}\n\n## Einschränkungen\n\nEs gibt [einen FlexBox bug](https://bugs.chromium.org/p/chromium/issues/detail?id=327437), das verhindert, dass `text-overflow: ellipsis` in einem FlexBox Layout funktioniert. Sie können die Komponente `Typography` mit `noWrap` benutzen, um dieses Problem zu umgehen:\n\n{{\"demo\": \"pages/components/menus/TypographyMenu.js\", \"bg\": true}}\n\n## Übergang ändern\n\nVerwenden Sie einen anderen Übergang.\n\n{{\"demo\": \"pages/components/menus/FadeMenu.js\"}}\n\n## Context menu\n\nHere is an example of a context menu. (Right click to open.)\n\n{{\"demo\": \"pages/components/menus/ContextMenu.js\"}}\n\n## Ergänzende Projekte\n\nFür fortgeschrittenere Anwendungsfälle können Ihnen folgende Projekte helfen:\n\n### PopupState-Helfer\n\nEs gibt ein Drittanbieter-Paket [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state), das sich in den meisten Fällen um Popper Status kümmern kann.\n\n{{\"demo\": \"pages/components/menus/MenuPopupState.js\"}}"