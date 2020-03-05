module.exports = "---\ntitle: Grid List React Komponente\ncomponents: GridList, GridListTile, GridListTileBar, ListSubheader, IconButton\n---\n\n# Rasterliste (Grid List)\n\n<p class=\"description\">Rasterlisten zeigen eine Sammlung von Bildern in einem organisierten Raster an.</p>\n\n[Rasterlisten](https://material.io/design/components/image-lists.html) repräsentieren eine Sammlung von Elementen in einem sich wiederholenden Muster. Sie verbessern das visuelle Verständnis der Inhalte, die sie enthalten.\n\n## Nur-Bild Raster Liste\n\nEin einfaches Beispiel für ein scrollbare `RasterList` mit Bildern.\n\n{{\"demo\": \"pages/components/grid-list/ImageGridList.js\", \"hideEditButton\": true}}\n\n## Rasterliste mit Titelleisten\n\nIn diesem Beispiel wird die Verwendung der `GridListTileBar` veranschaulicht, um jeweils eine Überlagerung zu jedem `GridListTile`hinzuzufügen. Die Überlagerung kann einen `title`, `subtitle` und eine sekundäre Aktion aufnehmen - in diesem Beispiel ein `IconButton`.\n\n{{\"demo\": \"pages/components/grid-list/TitlebarGridList.js\", \"hideEditButton\": true}}\n\n## Einzeilige Rasterliste\n\nDieses Beispiel zeigt eine horizontale, durchlaufbare, einzeilige Rasterliste von Bildern. Horizontales Scrollen von Rasterlisten wird empfohlen, da das Scrollen typische Lesemuster stört und das Verständnis beeinträchtigt. Eine Ausnahme ist eine horizontal scrollende, einzeilige Rasterliste von Bildern, z. B. einer Galerie.\n\n{{\"demo\": \"pages/components/grid-list/SingleLineGridList.js\", \"hideEditButton\": true}}\n\n## Erweiterte Rasterliste\n\nIn diesem Beispiel werden \"vorgestellte\" Fliesen dargestellt, wobei die Eigenschaften `rows` und `cols` die Größe der Kacheln festlegen und der Abstand durch die `padding` Eigenschaft einstellen wird. Die Kacheln haben eine angepasste Titleleiste, an der Spitze positioniert ist und einem benutzerdefinierten Gradienten `titleBackground` hat. Die sekundäre Aktion `IconButton` befindet sich links.\n\n{{\"demo\": \"pages/components/grid-list/AdvancedGridList.js\", \"hideEditButton\": true, \"defaultCodeOpen\": false}}"