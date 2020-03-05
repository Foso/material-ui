module.exports = "---\ntitle: Breadcrumbs React-Komponente\ncomponents: Breadcrumbs, Link, Typography\n---\n\n# Breadcrumbs\n\n<p class=\"description\">Breadcrumbs erlauben es Nutzern, eine Auswahl aus einer Reihe von Werten zu treffen.</p>\n\n## Einfache Breadcrumbs\n\n{{\"demo\": \"pages/components/breadcrumbs/SimpleBreadcrumbs.js\"}}\n\n## Active last breadcrumb\n\nKeep the last breadcrumb interactive.\n\n{{\"demo\": \"pages/components/breadcrumbs/ActiveLastBreadcrumb.js\"}}\n\n## Benutzerdefiniertes Trennzeichen\n\nIn den folgenden Beispielen werden zwei textbasierte Trennzeichen und ein SVG Icon verwendet.\n\n{{\"demo\": \"pages/components/breadcrumbs/CustomSeparator.js\"}}\n\n## Breadcrumbs mit Icons\n\n{{\"demo\": \"pages/components/breadcrumbs/IconBreadcrumbs.js\"}}\n\n## Zusammengeklappte Breadcrumbs\n\n{{\"demo\": \"pages/components/breadcrumbs/CollapsedBreadcrumbs.js\"}}\n\n## Benutzerdefinierte Breadcrumbs\n\nHier ist ein Beispiel zum Anpassen der Komponente. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/components/).\n\n{{\"demo\": \"pages/components/breadcrumbs/CustomizedBreadcrumbs.js\"}}\n\n## Integration mit react-router\n\n{{\"demo\": \"pages/components/breadcrumbs/RouterBreadcrumbs.js\", \"bg\": true}}\n\n## Barrierefreiheit\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#breadcrumb)\n\nStelle sicher, dass du ein `aria-label` mit einem Beschreibungstext zur `Breadcrumbs`-Komponente hinzufügst.\n\nDie Barrierefreiheit dieser Komponente setzt voraus:\n\n- Die Links sind in einer geordneten Liste strukturiert (`<ol>`-Element).\n- Um zu verhindern, dass Screenreader die visuellen Trennzeichen zwischen den Links vorlesen, sind diese durch `aria-hidden` vor ihnen versteckt.\n- Ein nav-Element, dass mit einem `aria-label` gelabelt ist, markiert die Struktur als einen Breadcrumb-Pfad und macht sie zu einer Navigations-Landmarke, so dass sie einfach auffindbar ist."