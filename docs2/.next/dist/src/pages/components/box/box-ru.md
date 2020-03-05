module.exports = "---\ntitle: React-компонент Box\n---\n\n# Box\n\n<p class=\"description\">Box компонент используется как обертка компонента для большинства CSS utility.</p>\n\nThe Box component packages [all the style functions](/system/basics/#all-inclusive) that are exposed in `@material-ui/system`. It's created using the [`styled()`](/styles/api/#styled-style-function-component) function of `@material-ui/core/styles`.\n\n## Пример\n\n[The palette](/system/palette/) style function.\n\n## Переопределение Material-UI компонентов\n\nBox компонент оборачивает ваш компонент. Создает новый DOM элемент, `<div>` по умолчанию, но может быть изменен `component` свойством. Давайте предположим вы хотите использовать`<span>` взамен:\n\n```jsx\n<Box component=\"span\" m={1}>\n  <Button />\n</Box>\n```\n\nЭто работает превосходно когда изменения могут быть изолированы в новый DOM элемент. Для сущности, вы можете изменить margin(внешний отступ) таким образом.\n\nТем не менее, иногда вам нужно ориентироваться на базовый элемент DOM. Например, вы хотите изменить цвет текста кнопки. Компонент Button определяет свой собственный цвет. Наследование CSS не помогает. Чтобы обойти проблему, у вас есть два варианта:\n\n1. Использовать [`React.cloneElement()`](https://reactjs.org/docs/react-api.html#cloneelement)\n\nКомпонент Box имеет свойство `clone`, которое позволяет использовать метод clone element из React.\n\n```jsx\n<Box color=\"text.primary\" clone>\n  <Button />\n</Box>\n```\n\n2. Используйте render свойства\n\nThe Box children accepts a render props function. You can pull out the `className`.\n\n```jsx\n<Box color=\"text.primary\">\n  {props => <Button {...props} />}\n</Box>\n```\n\n> ⚠️ The CSS specificity relies on the import order. If you want the guarantee that the wrapped component's style will be overridden, you need to import the Box last.\n\n## API\n\n```jsx\nimport Box from '@material-ui/core/Box';\n```\n\n| Имя                                                     | Тип                                                                                                               | По-умолчанию                            | Описание                                                                                              |\n|:------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------- |:--------------------------------------- |:----------------------------------------------------------------------------------------------------- |\n| <span class=\"prop-name required\">children&nbsp;*</span> | <span class=\"prop-type\">union:&nbsp;node&nbsp;&#124;<br />&nbsp;func<br /></span>                                 |                                         | Box render function or node.                                                                          |\n| <span class=\"prop-name\">clone</span>                    | <span class=\"prop-type\">bool</span>                                                                               | <span class=\"prop-default\">false</span> | If `true`, the box will recycle its children DOM element. It's using `React.cloneElement` internally. |\n| <span class=\"prop-name\">component</span>                | <span class=\"prop-type\">union:&nbsp;string&nbsp;&#124;<br />&nbsp;func&nbsp;&#124;<br />&nbsp;object<br /></span> | <span class=\"prop-default\">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component.            |\n\n\nAny other properties supplied will be used by [the style functions](/system/basics/#all-inclusive) or spread to the root element."