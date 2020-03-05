module.exports = "# Material-UI-Versionen\n\n<p class=\"description\">Sie können jederzeit zu dieser Seite zurückkehren und die Version der Dokumente, die Sie gerade lesen, wechseln.</p>\n\n## Stabile Versionen\n\nDie aktuellste Version wird in der Produktion empfohlen.\n\n{{\"demo\": \"pages/versions/StableVersions.js\", \"hideHeader\": true, \"bg\": \"inline\"}}\n\n## Neueste Versionen\n\nHier finden Sie die neuesten unveröffentlichten Dokumentationen und Codes. Sie können damit feststellen, welche Änderungen bevorstehen, und den Mitwirkenden der Material-UI besseres Feedback geben.\n\n{{\"demo\": \"pages/versions/LatestVersions.js\", \"hideHeader\": true, \"bg\": \"inline\"}}\n\n## Versionierungsstrategie\n\nStabilität stellt sicher, dass wiederverwendbare Komponenten und Bibliotheken, Lernprogramme, Tools und erlernte Methoden nicht unerwartet veraltet werden. Stabilität ist wichtig für das Gedeihen des Ökosystems um Material-UI.\n\nThis document contains the practices that are followed to provide you with a leading-edge UI library, balanced with stability, ensuring that future changes are always introduced in a predictable way.\n\nMaterial-UI follows [Semantic Versioning 2.0.0](https://semver.org/). Die Versionsnummern der Material-UI bestehen aus drei Teilen: `Hauptversion.Nebenversion.Patch`. Die Versionsnummer wird basierend auf dem in der Version enthaltenen Änderungsstand erhöht.\n\n- **Hauptversionen** enthalten wichtige neue Funktionen, während des Updates wird jedoch eine minimale Entwicklerunterstützung erwartet. Bei der Aktualisierung auf eine neue Hauptversion müssen Sie möglicherweise Aktualisierungsskripts ausführen, Code umgestalten, zusätzliche Tests ausführen und neue APIs erlernen.\n- ** Nebenversionen ** enthalten wichtige neue Funktionen. Minor Releases sind vollständig abwärtskompatibel. Während des Updates wird keine Unterstützung durch Entwickler erwartet. Sie können jedoch optional Ihre Apps und Bibliotheken ändern, um neue APIs, Funktionen und Funktionen zu verwenden, die in der Version hinzugefügt wurden.\n- ** Patch-Versionen ** sind geringes Risiko, enthalten Fehlerbehebungen und kleine neue Funktionen. Während des Updates wird keine Entwicklerunterstützung erwartet.\n\n## Release-Frequenz\n\nEin regelmäßiger Release-Zeitplan hilft Ihnen, Ihre Updates mit der Weiterentwicklung von Material-UI zu planen und zu koordinieren.\n\nIm Allgemeinen können Sie den folgenden Release-Zyklus erwarten:\n\n- Ein Veröffentlichung einer **Hauptversion ** alle 12 Monate.\n- 1-3 Veröffentlichungen von ** Nebenversionen** für jede Hauptversion.\n- Ein ** Patch ** Veröffentlichung jede Woche (jederzeit für dringende Bugfixes).\n\n## Release Zeitplan\n\n| Datum          | Version | Status         |\n|:-------------- |:------- |:-------------- |\n| May 2018       | v1.0.0  | Veröffentlicht |\n| September 2018 | v3.0.0  | Veröffentlicht |\n| May 2019       | v4.0.0  | Veröffentlicht |\n| Q3 2020        | v5.0.0  | ⏳              |\n\n\nYou can follow the [milestones](https://github.com/Foso/material-ui/milestones) for a more detailed overview.\n\n> ⚠️ **Disclaimer**: We operate in a dynamic environment, and things are subject to change. The information provided is intended to outline the general framework direction. It's intended for informational purposes only. We may decide to add/remove new items at any time depending on our capability to deliver while meeting our quality standards. The development, releases and timing of any features or functionality of Material-UI remains at the sole discretion of Material-UI. The roadmap does not represent a commitment, obligation or promise to deliver at any time.\n\n## Support-Richtlinie\n\nFind details on the [supported versions](/getting-started/support/#supported-versions).\n\n## Verfallspraktiken\n\nManchmal sind **\"breaking changes\"** wie das Entfernen der Unterstützung für ausgewählte APIs und Features erforderlich.\n\nUm diese Übergänge so einfach wie möglich zu machen:\n\n- The number of breaking changes is minimized, and migration tools provided when possible.\n- The deprecation policy described below is followed, so that you have time to update your apps to the latest APIs and best practices.\n\n### Deprecation policy\n\n- Deprecated features are announced in the changelog, and when possible, with warnings at runtime.\n- When a deprecation is announced, recommended update path is provided.\n- Existing use of a stable API during the deprecation period is supported, so your code will keep working during that period.\n- Peer dependency updates (React) that require changes to your apps are only made in a major release.\n"