module.exports = "---\ntitle: Tree View React component\ncomponents: TreeView, TreeItem\n---\n\n# Иерархическое представление\n\n<p class=\"description\">Виджет Иерархического представления представляет собой иерархический список.</p>\n\nИерархические представления могут использоваться для того чтобы показать структуру файловой системы. Каждый элемент может быть раскрыт, чтобы показать содержание папки, в которой могут быть файлы, папки или и то и другое.\n\n{{\"demo\": \"pages/components/tree-view/FileSystemNavigator.js\"}\n\n## Controlled\n\nThe tree view also offers a controlled API.\n\n{{\"demo\": \"pages/components/tree-view/ControlledTreeView.js\"}}\n\n## Rich object\n\nWhile the `TreeView`/`TreeItem` component API maximizes flexibility, an extra step is needed to handle a rich object.\n\nLet's consider a data variable with the following shape, recursion can be used to handle it.\n\n```js\nconst data = {\n  id: 'root',\n  name: 'Parent',\n  children: [\n    {\n      id: '1',\n      name: 'Child - 1',\n    },\n    // …\n  ],\n};\n```\n\n{{\"demo\": \"pages/components/tree-view/RecursiveTreeView.js\", \"defaultCodeOpen\": false}}\n\n## Customized tree view\n\n### Пользовательские иконки, границы и анимации\n\n{{\"demo\": \"pages/components/tree-view/CustomizedTreeView.js\"}}\n\n### Gmail клон\n\n{{\"demo\": \"pages/components/tree-view/GmailTreeView.js\"}}\n\n## Доступность\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#TreeView)\n\nThe component follows the WAI-ARIA authoring practices."