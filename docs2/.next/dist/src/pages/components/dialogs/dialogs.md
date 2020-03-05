module.exports = "---\ntitle: Dialog React component\ncomponents: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide\n---\n\n# Dialog\n\n<p class=\"description\">Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.</p>\n\nA [Dialog](https://material.io/design/components/dialogs.html) is a type of [modal](/components/modal/) window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.\n\nDialogs are purposefully interruptive, so they should be used sparingly.\n\n## Simple Dialogs\n\nSimple dialogs can provide additional details or actions about a list item.\nFor example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).\n\nTouch mechanics:\n\n- Choosing an option immediately commits the option and closes the menu\n- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog\n\n{{\"demo\": \"pages/components/dialogs/SimpleDialog.js\"}}\n\n## Alerts\n\nAlerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.\n\nMost alerts don't need titles.\nThey summarize a decision in a sentence or two by either:\n\n- Asking a question (e.g. \"Delete this conversation?\")\n- Making a statement related to the action buttons\n\nUse title bar alerts only for high-risk situations, such as the potential loss of connectivity.\nUsers should be able to understand the choices based on the title and button text alone.\n\nIf a title is required:\n\n- Use a clear question or statement with an explanation in the content area, such as \"Erase USB storage?\".\n- Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”\n\n{{\"demo\": \"pages/components/dialogs/AlertDialog.js\"}}\n\n## Transitions\n\nYou can also swap out the transition, the next example uses `Slide`.\n\n{{\"demo\": \"pages/components/dialogs/AlertDialogSlide.js\"}}\n\n## Form dialogs\n\nForm dialogs allow users to fill out form fields within a dialog.\nFor example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'.\n\n{{\"demo\": \"pages/components/dialogs/FormDialog.js\"}}\n\n## Customized dialogs\n\nHere is an example of customizing the component. You can learn more about this in the\n[overrides documentation page](/customization/components/).\n\nThe dialog has a close button added to aide usability.\n\n{{\"demo\": \"pages/components/dialogs/CustomizedDialogs.js\"}}\n\n## Full-screen dialogs\n\n{{\"demo\": \"pages/components/dialogs/FullScreenDialog.js\"}}\n\n## Optional sizes\n\nYou can set a dialog maximum width by using the `maxWidth` enumerable in combination with the `fullWidth` boolean.\nWhen the `fullWidth` property is true, the dialog will adapt based on the `maxWidth` value.\n\n{{\"demo\": \"pages/components/dialogs/MaxWidthDialog.js\"}}\n\n## Responsive full-screen\n\nYou may make a dialog responsively full screen using [`useMediaQuery`](/components/use-media-query/#usemediaquery).\n\n```jsx\nimport useMediaQuery from '@material-ui/core/useMediaQuery';\n\nfunction MyComponent() {\n  const theme = useTheme();\n  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));\n\n  return <Dialog fullScreen={fullScreen} />\n}\n```\n\n{{\"demo\": \"pages/components/dialogs/ResponsiveDialog.js\"}}\n\n## Confirmation dialogs\n\nConfirmation dialogs require users to explicitly confirm their choice before an option is committed.\nFor example, users can listen to multiple ringtones but only make a final selection upon touching “OK”.\n\nTouching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.\n\n{{\"demo\": \"pages/components/dialogs/ConfirmationDialog.js\"}}\n\n## Draggable dialog\n\nYou can create a draggable dialog by using [react-draggable](https://github.com/mzabriskie/react-draggable).\nTo do so, you can pass the the imported `Draggable` component as the `PaperComponent` of the `Dialog` component.\nThis will make the entire dialog draggable.\n\n{{\"demo\": \"pages/components/dialogs/DraggableDialog.js\"}}\n\n## Scrolling long content\n\nWhen dialogs become too long for the user’s viewport or device, they scroll.\n\n- `scroll=paper` the content of the dialog scrolls within the paper element.\n- `scroll=body` the content of the dialog scrolls within the body element.\n\nTry the demo below to see what we mean:\n\n{{\"demo\": \"pages/components/dialogs/ScrollDialog.js\"}}\n\n## Limitations\n\nFollow the [Modal limitations section](/components/modal/#limitations).\n\n## Accessibility\n\nFollow the [Modal accessibility section](/components/modal/#accessibility).\n"