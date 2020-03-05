module.exports = "---\ntitle: List React component\ncomponents: Collapse, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader\n---\n\n# Lists\n\n<p class=\"description\">Lists are continuous, vertical indexes of text or images.</p>\n\n[Lists](https://material.io/design/components/lists.html) are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.\n\n## Simple List\n\n{{\"demo\": \"pages/components/lists/SimpleList.js\", \"bg\": true}}\n\nThe last item of the previous demo shows how you can render a link:\n\n```jsx\nfunction ListItemLink(props) {\n  return <ListItem button component=\"a\" {...props} />;\n}\n\n//...\n\n<ListItemLink href=\"#simple-list\">\n  <ListItemText primary=\"Spam\" />\n</ListItemLink>\n```\n\nYou can find a [demo with React Router following this section](/guides/composition/#react-router) of the documentation.\n\n## Nested List\n\n{{\"demo\": \"pages/components/lists/NestedList.js\", \"bg\": true}}\n\n## Folder List\n\n{{\"demo\": \"pages/components/lists/FolderList.js\", \"bg\": true}}\n\n## Interactive\n\nBelow is an interactive demo that lets you explore the visual results of the different settings:\n\n{{\"demo\": \"pages/components/lists/InteractiveList.js\", \"bg\": true}}\n\n## Selected ListItem\n\n{{\"demo\": \"pages/components/lists/SelectedListItem.js\", \"bg\": true}}\n\n## Align list items\n\nYou should change the list item alignment when displaying 3 lines or more, set the `alignItems=\"flex-start\"` property.\n\n{{\"demo\": \"pages/components/lists/AlignItemsList.js\", \"bg\": true}}\n\n## List Controls\n\n### Checkbox\n\nA checkbox can either be a primary action or a secondary action.\n\nThe checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.\n\n{{\"demo\": \"pages/components/lists/CheckboxList.js\", \"bg\": true}}\n\nThe checkbox is the secondary action for the list item and a separate target.\n\n{{\"demo\": \"pages/components/lists/CheckboxListSecondary.js\", \"bg\": true}}\n\n### Switch\n\nThe switch is the secondary action and a separate target.\n\n{{\"demo\": \"pages/components/lists/SwitchListSecondary.js\", \"bg\": true}}\n\n## Pinned Subheader List\n\nUpon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader.\n\nThis feature relies on CSS sticky positioning.\nUnfortunately it's [not implemented](https://caniuse.com/#search=sticky) by all the supported browsers. It defaults to `disableSticky` when not supported.\n\n{{\"demo\": \"pages/components/lists/PinnedSubheaderList.js\", \"bg\": true}}\n\n## Inset List\n\n{{\"demo\": \"pages/components/lists/InsetList.js\", \"bg\": true}}\n\n## Virtualized List\n\nIn the following example, we demonstrate how to use [react-window](https://github.com/bvaughn/react-window) with the `List` component.\nIt renders 200 rows and can easily handle more.\nVirtualization helps with performance issues.\n\n{{\"demo\": \"pages/components/lists/VirtualizedList.js\", \"bg\": true}}\n\n The use of [react-window](https://github.com/bvaughn/react-window) when possible is encouraged.\nIf this library doesn't cover your use case, you should consider using [react-virtualized](https://github.com/bvaughn/react-virtualized), then alternatives like [react-virtuoso](https://github.com/petyosi/react-virtuoso).\n\n## Customization\n\n👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/menu-list).\n"