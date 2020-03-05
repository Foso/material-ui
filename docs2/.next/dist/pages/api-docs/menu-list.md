module.exports = "---\nfilename: /packages/material-ui/src/MenuList/MenuList.js\n---\n\n<!--- This documentation is automatically generated, do not try to edit it. -->\n\n# MenuList API\n\n<p class=\"description\">The API documentation of the MenuList React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport MenuList from '@material-ui/core/MenuList';\n// or\nimport { MenuList } from '@material-ui/core';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nA permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton\nIt's exposed to help customization of the [`Menu`](/api/menu/) component. If you\nuse it separately you need to move focus into the component manually. Once\nthe focus is placed inside the component it is fully keyboard accessible.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class=\"prop-name\">autoFocus</span> | <span class=\"prop-type\">bool</span> | <span class=\"prop-default\">false</span> | If `true`, will focus the `[role=\"menu\"]` container and move into tab order |\n| <span class=\"prop-name\">autoFocusItem</span> | <span class=\"prop-type\">bool</span> | <span class=\"prop-default\">false</span> | If `true`, will focus the first menuitem if `variant=\"menu\"` or selected item if `variant=\"selectedMenu\"` |\n| <span class=\"prop-name\">children</span> | <span class=\"prop-type\">node</span> |  | MenuList contents, normally `MenuItem`s. |\n| <span class=\"prop-name\">disableListWrap</span> | <span class=\"prop-type\">bool</span> | <span class=\"prop-default\">false</span> | If `true`, the menu items will not wrap focus. |\n| <span class=\"prop-name\">variant</span> | <span class=\"prop-type\">'menu'<br>&#124;&nbsp;'selectedMenu'</span> | <span class=\"prop-default\">'selectedMenu'</span> | The variant to use. Use `menu` to prevent selected items from impacting the initial focus and the vertical alignment relative to the anchor element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([List](/api/list/)).\n\n## Inheritance\n\nThe props of the [List](/api/list/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Menus](/components/menus/)\n\n"