module.exports = "---\ntitle: Checkbox React component\ncomponents: Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel\n---\n\n# Checkbox\n\n<p class=\"description\">Чекбоксы позволяют выбрать один или несколько элементов из набора.</p>\n\n[Чекбоксы](https://material.io/design/components/selection-controls.html#checkboxes) могут быть использованы для включения или выключения различных опций.\n\nЕсли у вас есть несколько опций, отображаемых в списке, вы можете сохранить пространство, используя чекбоксы вместо переключателей. Если у вас есть только один вариант, лучше не использовать чекбокс, вместо него используйте переключатель включения / выключения.\n\n{{\"demo\": \"pages/components/checkboxes/Checkboxes.js\"}}\n\n`Чекбокс` также можно использовать с описанием метки благодаря компоненту `FormControlLabel`.\n\n{{\"demo\": \"pages/components/checkboxes/CheckboxLabels.js\"}}\n\n## Чекбоксы с FormGroup\n\n`FormGroup` - это полезная обертка, используемая для группировки компонентов элементов управления выбором, она предоставляет более простой API.\n\n{{\"demo\": \"pages/components/checkboxes/CheckboxesGroup.js\"}}\n\n## Расположение метки\n\nРасположение метки можно изменить:\n\n{{\"demo\": \"pages/components/checkboxes/FormControlLabelPosition.js\"}}\n\n## Customized checkbox\n\nНиже находится пример кастомизации компонента. You can learn more about this in the [overrides documentation page](/customization/components/).\n\n{{\"demo\": \"pages/components/checkboxes/CustomizedCheckbox.js\", \"defaultCodeOpen\": false}}\n\n## Бесплатно\n\n- [Чекбоксы. Radio Buttons (радиокнопки)](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)\n- [Чекбоксы. Switch (переключатели)](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)\n\n## Доступность\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#checkbox)\n\n- Все элементы формы должны иметь метки, в том числе радиокнопки, переключатели и чекбоксы. В большинстве случаев это делается с помощью элемента `<label>` ([FormControlLabel](/api/form-control-label/)).\n- Когда метка не может быть использована, необходимо добавить атрибут непосредственно на поле ввода. В этом случае можно применить дополнительный атрибут (например, `aria-label`, `aria-labelledby`, `title`) через свойство `inputProps`.\n\n```jsx\n<Checkbox\n  value=\"checkedA\"\n  inputProps={{ 'aria-label': 'Checkbox A' }}\n/>\n```"