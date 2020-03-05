module.exports = "---\ntitle: React Checkbox（复选框）组件\ncomponents: Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel\n---\n\n# Checkbox 选择框\n\n<p class=\"description\">在一个集合内，用户可以通过复选框来选择一个或者多个选项。</p>\n\n[复选框](https://material.io/design/components/selection-controls.html#checkboxes) 用于打开或者关闭一个选项。\n\n如果列表中有多个选择项，则可以使用复选框替代开关控件来节省空间。 如果您只需要一个选择项，请避免使用复选框，而改用开关控件。\n\n{{\"demo\": \"pages/components/checkboxes/Checkboxes.js\"}}\n\n通过 `FormControlLabel` 组件，`复选框` 也可与标签描述一起使用。\n\n{{\"demo\": \"pages/components/checkboxes/CheckboxLabels.js\"}}\n\n## 使用 FormGroup（表单组）的多个复选框\n\n`FormGroup` 会提供相对简单的 API 对选择控件进行分组。\n\n{{\"demo\": \"pages/components/checkboxes/CheckboxesGroup.js\"}}\n\n## 放置标签\n\n你可以更改标签的位置:\n\n{{\"demo\": \"pages/components/checkboxes/FormControlLabelPosition.js\"}}\n\n## 自定义的复选框\n\n以下是自定义此组件的一个示例。 您可以在[重写文档页](/customization/components/)中了解有关此内容的更多信息。\n\n{{\"demo\": \"pages/components/checkboxes/CustomizedCheckbox.js\", \"defaultCodeOpen\": false}}\n\n## 什么时候使用\n\n- [复选框 对比 单选按钮](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)\n- [复选框 对比 Switches（开关控件）](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)\n\n## 可及性\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#checkbox)\n\n- 所有表单控件都应该带有标签，而这包括了单选按钮，复选框和开关。 在大多数情况下，这是通过使用一个 `<label>` 元素（[FormControlLabel](/api/form-control-label/)）实现的。\n- 如果无法使用标签，您则必须在输入组件中直接添加属性。 在这种情况下，您可以经由 `inputProps` 属性，来附着一些额外的属性（例如 `arial-label`，`aria-labelledby`，`title`）。\n\n```jsx\n<Checkbox\n  value=\"checkedA\"\n  inputProps={{ 'aria-label': 'Checkbox A' }}\n/>\n```"