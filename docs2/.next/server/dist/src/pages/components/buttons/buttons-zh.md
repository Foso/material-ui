module.exports = "---\ntitle: React Button（按钮）组件\ncomponents: Button, IconButton, ButtonBase\n---\n\n# Button 按钮\n\n<p class=\"description\">只需通过轻按一下按钮，用户即可采取行动并做出选择。</p>\n\n[按钮](https://material.io/design/components/buttons.html) 传达用户可以执行的操作。 他们通常直接放置在您的用户界面中，例如：\n\n- Dialogs（对话框）\n- Modal windows（模态窗口）\n- Forms（表单）\n- Cards（卡片）\n- Toolbars（工具栏)\n\n## Contained Buttons（实心按钮）\n\n[实心按钮](https://material.io/design/components/buttons.html#contained-button)表示高度的强调, 根据他们的立体效果和填充颜色来区分彼此。 它们用于触发应用程序所具有的主要功能。\n\n{{\"demo\": \"pages/components/buttons/ContainedButtons.js\"}}\n\nYou can remove the elevation with the `disableElevation` prop.\n\n{{\"demo\": \"pages/components/buttons/DisableElevation.js\"}}\n\n## Text Buttons（文本按钮）\n\n[Text buttons](https://material.io/design/components/buttons.html#text-button) are typically used for less-pronounced actions, including those located:\n\n- dialogs（对话框）中的\n- cards（卡片）中的\n\nIn cards, text buttons help maintain an emphasis on card content.\n\n{{\"demo\": \"pages/components/buttons/TextButtons.js\"}}\n\n## Outlined Buttons（描边按钮）\n\n[Outlined buttons](https://material.io/design/components/buttons.html#outlined-button) are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.\n\nOutlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.\n\n{{\"demo\": \"pages/components/buttons/OutlinedButtons.js\"}}\n\n## Upload button\n\n{{\"demo\": \"pages/components/buttons/UploadButtons.js\"}}\n\n## 尺寸\n\n想要更大或更小的按钮？ 你可以使用 `size` 属性。\n\n{{\"demo\": \"pages/components/buttons/ButtonSizes.js\"}}\n\n## Buttons with icons and label\n\nSometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.\n\n{{\"demo\": \"pages/components/buttons/IconLabelButtons.js\"}}\n\n## Icon Buttons\n\nIcon buttons are commonly found in app bars and toolbars.\n\nIcons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.\n\n{{\"demo\": \"pages/components/buttons/IconButtons.js\"}}\n\n## Customized buttons\n\n以下是自定义组件的一些例子。 您可以在[重写文档页](/customization/components/)中了解有关此内容的更多信息。\n\n{{\"demo\": \"pages/components/buttons/CustomizedButtons.js\", \"defaultCodeOpen\": false}}\n\n👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/button).\n\n## Complex Buttons\n\nThe Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the `ButtonBase`. You can take advantage of this lower level component to build custom interactions.\n\n{{\"demo\": \"pages/components/buttons/ButtonBase.js\"}}\n\n## Third-party routing library（第三方路由库）\n\nOne common use case is to use the button to trigger navigation to a new page. The `ButtonBase` component provides a property to handle this use case: `component`. However for certain focus polyfills `ButtonBase` requires the DOM node of the provided component. This is achieved by attaching a ref to the component and expecting that the component forwards this ref to the underlying DOM node. Given that many of the interactive components rely on `ButtonBase`, you should be able to take advantage of it everywhere.\n\nHere is an [integration example with react-router](/guides/composition/#button).\n\n## 局限性\n\n### Cursor not-allowed\n\nThe ButtonBase component sets `pointer-events: none;` on disabled buttons, which prevents the appearance of a disabled cursor.\n\nIf you wish to use `not-allowed`, you have two options:\n\n1. **CSS only**。 您可以移除作用在 `<button>` 元素上的指针事件的样式：\n\n  ```css\n  .MuiButtonBase-root:disabled {\n    cursor: not-allowed;\n    pointer-events: auto;\n  }\n  ```\n\nHowever:\n\n- 若您仍旧需要在[禁用的元素上展示提示工具](/components/tooltips/#disabled-elements)，您需要恢复 `pointer-events: none;`。\n- 若您加载除了一个 button 元素之外的元素， 例如，一个链接 `<a>` 元素，指针是不会改变的。\n\n2. **改变 DOM**。 您可以这样封装按钮：\n\n  ```jsx\n  <span style={{ cursor: 'not-allowed' }}>\n    <Button component={Link} disabled>\n      disabled\n    </Button>\n  </span>\n  ```\n\nThis has the advantage of supporting any element, for instance, a link `<a>` element."