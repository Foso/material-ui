module.exports = "---\ntitle: 模态框 React 组件\ncomponents: Modal\n---\n\n# Modal 模态框\n\n<p class=\"description\">模态框组件可以用来快速创建对话框、弹出窗口，灯箱等任何你所需的组件。</p>\n\n组件会在背景组件前渲染其`children`节点。 The `Modal` offers important features:\n\n- 💄 Manages modal stacking when one-at-a-time just isn't enough.\n- 🔐 Creates a backdrop, for disabling interaction below the modal.\n- 🔐 It disables scrolling of the page content while open.\n- ♿️它妥善管理焦点;移动到模态内容， 并保持它直到模态关闭。\n- ♿️自动添加适当的ARIA角色。\n- 📦 [5kB 已压缩的包](/size-snapshot)。\n\n> **术语注释**。 “模态框”（Modal）这个词有时也被用来指代“对话框”，但是这种用法属于误用。 A modal window describes parts of a UI. 如果一个元素[阻挡了用户与应用的其它部分的互动](https://en.wikipedia.org/wiki/Modal_window)，这个元素就是模态的。\n\n当你创建一个模态对话框时，使用[对话框（Dialog）](/components/dialogs/)组件比直接使用模态框更佳。 以下的组件将将模态框作为一个低级别的组件运用：\n\n- [Dialog](/components/dialogs/)\n- [Drawer](/components/drawers/)\n- [Menu](/components/menus/)\n- [Popover](/components/popover/)\n\n## 简单的模态\n\n{{\"demo\": \"pages/components/modal/SimpleModal.js\"}}\n\nNotice that you can disable the outline (often blue or gold) with the `outline: 0` CSS property.\n\n## Transitions（过渡动画）\n\nThe open/close state of the modal can be animated with a transition component. This component should respect the following conditions:\n\n- Be a direct child descendent of the modal.\n- Have an `in` prop. This corresponds to the open / close state.\n- Call the `onEnter` callback prop when the enter transition starts.\n- Call the `onExited` callback prop when the exit transition is completed. These two callbacks allow the modal to unmount the child content when closed and fully transitioned.\n\nModal has built-in support for [react-transition-group](https://github.com/reactjs/react-transition-group).\n\n{{\"demo\": \"pages/components/modal/TransitionsModal.js\"}}\n\nAlternatively, you can use [react-spring](https://github.com/react-spring/react-spring).\n\n{{\"demo\": \"pages/components/modal/SpringModal.js\"}}\n\n## Server-side modal\n\nReact [doesn't support](https://github.com/facebook/react/issues/13097) the [`createPortal()`](https://reactjs.org/docs/portals.html) API on the server. In order to display the modal, you need to disable the portal feature with the `disablePortal` prop:\n\n{{\"demo\": \"pages/components/modal/ServerModal.js\"}}\n\n## 局限性\n\n### Focus trap\n\nThe modal moves the focus back to the body of the component if the focus tries to escape it.\n\nThis is done for accessibility purposes, however, it might create issues. In the event the users need to interact with another part of the page, e.g. with a chatbot window, you can disable the behavior:\n\n```jsx\n<Modal disableEnforceFocus />\n```\n\n## 可访问性\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#dialog_modal)\n\n- 记得用 `aria-labelledby=\"id...\"` 属性来指向`Modal` 的标题. Additionally, you may give a description of your modal with the `aria-describedby=\"id...\"` prop on the `Modal`.\n    \n    ```jsx\n    <Modal\n    aria-labelledby=\"modal-title\"\n    aria-describedby=\"modal-description\"\n    >\n    <h2 id=\"modal-title\">\n      My Title\n    </h2>\n    <p id=\"modal-description\">\n      My Description\n    </p>\n    </Modal>\n    ```\n\n- The [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) can help you set the initial focus on the most relevant element, based on your modal content.\n- A modal window overlys on either the primary window or another modal window. Windows under a modal are **inert**. That is, users cannot interact with content outside an active modal window."