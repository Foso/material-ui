module.exports = "# Installation\n\n<p class=\"description\">Installieren Sie Material-UI, das weltweit beliebteste React UI-Framework.</p>\n\nMaterial-UI ist als [npm-Paket](https://www.npmjs.com/package/@material-ui/core) verfügbar.\n\n## npm\n\nUm die Abhängigkeit zu ihrer `package.json` hinzuzufügen, führen Sie folgenden Befehl aus:\n\n```sh\n// mit npm\nnpm install @material-ui/core\n\n// mit yarn\nyarn add @material-ui/core\n```\n\nBeachten Sie, dass [react](https://www.npmjs.com/package/react) >= 16.8.0 und [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8.0 Abhängigkeiten in Ihrem Projekt sein müssen.\n\n## Die Roboto Schrift\n\nMaterial-UI wurde mit Blick auf die [Roboto](https://fonts.google.com/specimen/Roboto)-Schrift designed. Bitte folgen Sie daher [diesen Anweisungen](/components/typography/#general). Zum Beispiel über Google Web Fonts:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\" />\n```\n\n## Schriftarten-Icons\n\nIn order to use the font `Icon` component, you must first add the [Material icons](https://material.io/tools/icons/) font. Hier sind einige [Anweisungen](/components/icons/#font-icons) wie das geht. Zum Beispiel über Google Web Fonts:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n```\n\n## SVG Symbole\n\nUm vorgefertigte SVG-Materialsymbole zu verwenden, wie sie in den [Icon Demos](/components/icons/) enthalten sind, müssen Sie zuerst das [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) Paket installieren:\n\n```sh\n// mit npm\nnpm install @material-ui/icons\n\n// mit yarn\nyarn add @material-ui/icons\n```\n\n## CDN\n\nSie können mit der Material-UI mit minimaler Front-End-Infrastruktur verwenden, was sich hervorragend für das Prototyping eignet.\n\nTwo Universal Module Definition (**UMD**) files are provided:\n\n- eine für die Entwicklung: https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js\n- eine für die Entwicklung: https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js\n\nSie können diesem [CDN-Beispiel](https://github.com/Foso/material-ui/tree/master/examples/cdn) folgen um schnell anfangen zu können.\n\n⚠️ Using this approach in **production** is **discouraged** though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization.\n\n⚠️ Die UMD-Links verwenden den `neueste` Tag, um auf die neueste Version der Bibliothek zu verweisen. Dieser Link ist **instabil**, da er sich verändert, wenn wir neue Versionen veröffentlichen. You should consider pointing to a specific version, such as [v4.4.0](https://unpkg.com/@material-ui/core@4.4.0/umd/material-ui.development.js).\n"