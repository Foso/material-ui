module.exports = "---\ntitle: Tooltip React component\ncomponents: Tooltip\n---\n\n# Tooltip (подсказки)\n\n<p class=\"description\">Всплывающие подсказки отображают информативный текст когда пользователь наводит курсор на элемент, фокусируется на нем или нажимает на него.</p>\n\nПри активации, [Tooltips](https://material.io/design/components/tooltips.html) отображают текстовую метку, идентифицирующая элемент, например, описание его функции.\n\n## Простые подсказки\n\n{{\"demo\": \"pages/components/tooltips/SimpleTooltips.js\"}}\n\n## Позиционированные подсказки\n\nThe `Tooltip` has 12 **placements** choice. They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.\n\n{{\"demo\": \"pages/components/tooltips/PositionedTooltips.js\"}}\n\n## Настраиваемые подсказки\n\nНиже находятся примеры кастомизации компонента. You can learn more about this in the [overrides documentation page](/customization/components/).\n\n{{\"demo\": \"pages/components/tooltips/CustomizedTooltips.js\"}}\n\n## Arrow Tooltips\n\nYou can use the `arrow` prop to give your tooltip an arrow indicating which element it refers to.\n\n{{\"demo\": \"pages/components/tooltips/ArrowTooltips.js\"}}\n\n## Custom child element\n\nThe tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its properties to the underlying DOM element.\n\n```jsx\nconst MyComponent = React.forwardRef(function MyComponent(props, ref) {\n  //  Spread the props to the underlying DOM element.\n  return <div {...props} ref={ref}>Bin</div>\n});\n\n// ...\n\n<Tooltip title=\"Delete\">\n  <MyComponent>\n</Tooltip>\n```\n\nYou can find a similar concept in the [wrapping components](/guides/composition/#wrapping-components) guide.\n\n## Триггеры\n\nYou can define the types of events that cause a tooltip to show.\n\n{{\"demo\": \"pages/components/tooltips/TriggersTooltips.js\"}}\n\n## Контролируемые подсказки\n\nВы можете использовать `open`, `onOpen` and `onClose` свойства, чтобы контролировать поведение всплывающей подсказки.\n\n{{\"demo\": \"pages/components/tooltips/ControlledTooltips.js\"}}\n\n## Вариативная ширина\n\nThe `Tooltip` wraps long text by default to make it readable.\n\n{{\"demo\": \"pages/components/tooltips/VariableWidth.js\"}}\n\n## Интерактивность\n\nA tooltip can be interactive. It won't close when the user hovers over the tooltip before the `leaveDelay` is expired.\n\n{{\"demo\": \"pages/components/tooltips/InteractiveTooltips.js\"}}\n\n## Неактивные элементы\n\nBy default disabled elements like `<button>` do not trigger user interactions so a `Tooltip` will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a `span`.\n\n> ⚠️ In order to work with Safari, you need at least one display block or flex item below the tooltip wrapper.\n\n{{\"demo\": \"pages/components/tooltips/DisabledTooltips.js\"}}\n\n> If you're not wrapping a Material-UI component that inherits from `ButtonBase`, for instance, a native `<button>` element, you should also add the CSS property *pointer-events: none;* to your element when disabled:\n\n```jsx\n<Tooltip title=\"You don't have permission to do this\">\n  <span>\n    <button disabled={disabled} style={disabled ? { pointerEvents: \"none\" } : {}}>\n      {'A disabled button'}\n    </button>\n  </span>\n</Tooltip>\n```\n\n## Переходы\n\nИспользуйте другой transition.\n\n{{\"demo\": \"pages/components/tooltips/TransitionsTooltips.js\"}}\n\n## Showing and hiding\n\nВсплывающая подсказка обычно отображается сразу же, как пользователь наводит курсор на элемент, и сразу же скрывается, когда курсор уходит с элемента. Задержку в отображении или скрытии всплывающей подсказки можно добавить через свойства `enterDelay` и `leaveDelay`, как показано выше в демонстрационной версии «Контролируемые подсказки».\n\nOn mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the `disableTouchListener` property.\n\n{{\"demo\": \"pages/components/tooltips/DelayTooltips.js\"}}"