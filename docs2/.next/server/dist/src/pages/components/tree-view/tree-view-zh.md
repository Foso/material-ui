module.exports = "---\ntitle: 树视图组件\ncomponents: TreeView, TreeItem\n---\n\n# Tree View 树视图\n\n<p class=\"description\">用树视图，展现出层级关系。</p>\n\n树视图可用来代表文件系统，显示文件夹和文件。每一层可以用来代表文件夹的层次，以显示文件夹的内容。这些层次中的每一层，可以是文件，也可以文件夹。\n\n{{\"demo\": \"pages/components/tree-view/FileSystemNavigator.js\"}}\n\n## Controlled\n\nThe tree view also offers a controlled API.\n\n{{\"demo\": \"pages/components/tree-view/ControlledTreeView.js\"}}\n\n## Rich object\n\nWhile the `TreeView`/`TreeItem` component API maximizes flexibility, an extra step is needed to handle a rich object.\n\nLet's consider a data variable with the following shape, recursion can be used to handle it.\n\n```js\nconst data = {\n  id: 'root',\n  name: 'Parent',\n  children: [\n    {\n      id: '1',\n      name: 'Child - 1',\n    },\n    // …\n  ],\n};\n```\n\n{{\"demo\": \"pages/components/tree-view/RecursiveTreeView.js\", \"defaultCodeOpen\": false}}\n\n## Customized tree view\n\n### Custom icons, border and animation\n\n{{\"demo\": \"pages/components/tree-view/CustomizedTreeView.js\"}}\n\n### 仿 Gmail\n\n{{\"demo\": \"pages/components/tree-view/GmailTreeView.js\"}}\n\n## 可访问性\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#TreeView)\n\nThe component follows the WAI-ARIA authoring practices."