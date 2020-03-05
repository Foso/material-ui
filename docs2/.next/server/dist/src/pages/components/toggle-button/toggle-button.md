module.exports = "---\ntitle: Toggle Button React component\ncomponents: ToggleButton, ToggleButtonGroup\n---\n\n# Toggle Buttons\n\n<p class=\"description\">Toggle buttons can be used to group related options.</p>\n\nTo emphasize groups of related [Toggle buttons](https://material.io/design/components/buttons.html#toggle-button),\na group should share a common container.\n\nThe `ToggleButtonGroup` will control the selected state of its child buttons when\ngiven its own `value` prop.\n\n{{\"demo\": \"pages/components/toggle-button/ToggleButtons.js\"}}\n\n## Sizes\n\nFancy larger or smaller buttons? Use the `size` property.\n\n{{\"demo\": \"pages/components/toggle-button/ToggleButtonSizes.js\"}}\n\n## Enforce value set\n\nIf you want to enforce at least one button to be active, you can adapt your handleChange\nfunction.\n\n```jsx\nconst handleFormat = (event, newFormats) => {\n  if (newFormats.length) {\n    setFormats(newFormats);\n  }\n};\n\nconst handleAlignment = (event, newAlignment) => {\n  if (newAlignment !== null) {\n    setAlignment(newAlignment);\n  }\n};\n```\n\n{{\"demo\": \"pages/components/toggle-button/ToggleButtonNotEmpty.js\"}}\n\n## Standalone toggle button\n\n{{\"demo\": \"pages/components/toggle-button/StandaloneToggleButton.js\"}}\n\n## Customized toggle button\n\nHere is an example of customizing the component. You can learn more about this in the\n[overrides documentation page](/customization/components/).\n\n{{\"demo\": \"pages/components/toggle-button/CustomizedDividers.js\", \"bg\": true}}\n\n## Accessibility\n\nToggleButtonGroup has `role=\"group\"`. You should provide an accessible label with `aria-label=\"label\"`, `aria-labelledby=\"id\"` or `<label>`.\n\nToggleButton sets `aria-pressed=\"<bool>\"` according to the button state. You should label each button with `aria-label`.\n"