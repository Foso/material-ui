module.exports = "# Installation\n\n<p class=\"description\">Installez Material-UI, le framework d'interface utilisateur React le plus populaire au monde.</p>\n\nMaterial-UI est disponible sous forme de package [npm](https://www.npmjs.com/package/@material-ui/core).\n\n## npm\n\nPour installer et enregistrer dans vos dépendances `package.json` , exécutez:\n\n```sh\n// avec npm\nnpm install @material-ui/core\n\n// avec yarn\nyarn add @material-ui/core\n```\n\nVeuillez noter que [react](https://www.npmjs.com/package/react) >= 16.8.0 et [react-dom](https://www.npmjs.com/package/react-dom) >= 16.8.0 sont des dépendances.\n\n## La police Roboto\n\nMateriel-UI a été conçu avec la police [Roboto](https://fonts.google.com/specimen/Roboto) à l’esprit. Veillez donc à suivre [ces instructions](/components/typography/#general) . Par exemple, via Google Web Fonts:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\" />\n```\n\n## Polices d'icônes\n\nIn order to use the font `Icon` component, you must first add the [Material icons](https://material.io/tools/icons/) font. Voici [quelques instructions](/components/icons/#font-icons) sur la façon de le faire. Par exemple, via Google Web Fonts:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n```\n\n## Icônes SVG\n\nIn order to use prebuilt SVG Material icons, such as those found in the [icons demos](/components/icons/) you must first install the [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) package:\n\n```sh\n// with npm\nnpm install @material-ui/icons\n\n// with yarn\nyarn add @material-ui/icons\n```\n\n## CDN\n\nVous pouvez commencer à utiliser Material-UI avec une infrastructure frontale minimale, idéale pour le prototypage.\n\nTwo Universal Module Definition (**UMD**) files are provided:\n\n- un pour le développement: https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js\n- un pour la production: https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js\n\nVous pouvez suivre [cet exemple CDN](https://github.com/Foso/material-ui/tree/master/examples/cdn) pour commencer rapidement.\n\n⚠️ Using this approach in **production** is **discouraged** though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization.\n\n⚠️ The UMD links are using the `latest` tag to point to the latest version of the library. This pointer is **unstable**, it shifts as we release new versions. You should consider pointing to a specific version, such as [v4.4.0](https://unpkg.com/@material-ui/core@4.4.0/umd/material-ui.development.js).\n"