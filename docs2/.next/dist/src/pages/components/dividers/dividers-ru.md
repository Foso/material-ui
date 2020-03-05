module.exports = "---\ntitle: Разделитель, компонент React\ncomponents: Divider\n---\n\n# Divider (разделитель)\n\n<p class=\"description\">Разделитель - это тонкая линия, которая группирует содержимое (контент) в списки и макеты (слои).</p>\n\n[Разелители](https://material.io/design/components/dividers.html) делят содержимое (контент) на явные (четкие) группы.\n\n## Разделители списков\n\nThe divider renders as an `<hr>` by default. You can save rendering this DOM element by using the `divider` property on the `ListItem` component.\n\n{{\"demo\": \"pages/components/dividers/ListDividers.js\", \"bg\": true}}\n\n## Спецификации HTML5\n\nIn a list, you should ensure the `Divider` is rendered as an `<li>` to match the HTML5 specification. The examples below show two ways of achieving this.\n\n## Вкладыш\n\n{{\"demo\": \"pages/components/dividers/InsetDividers.js\", \"bg\": true}}\n\n## Подтитульные разделлители\n\n{{\"demo\": \"pages/components/dividers/SubheaderDividers.js\", \"bg\": true}}\n\n## Центральные разделители\n\n{{\"demo\": \"pages/components/dividers/MiddleDividers.js\", \"bg\": true}}\n\n## Vertical Dividers\n\nYou can also render a divider vertically using the `orientation` prop. Note the use of the `flexItem` prop to accommodate for the flex container.\n\n{{\"demo\": \"pages/components/dividers/VerticalDividers.js\", \"bg\": true}}"