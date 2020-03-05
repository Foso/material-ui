module.exports = "---\ntitle: Tooltip React component\ncomponents: Tooltip\n---\n\n# Tooltip (ツールチップ)\n\n<p class=\"description\">ユーザーが要素上にマウスを移動したり、要素をフォーカスしたり、タップしたりすると、ツールチップにわかりやすいテキストが表示されます。</p>\n\n[Tooltips](https://material.io/design/components/tooltips.html)をアクティブにすると、機能の説明など、要素を識別するテキストラベルが表示されます。\n\n## Simple Tooltips\n\n{{\"demo\": \"pages/components/tooltips/SimpleTooltips.js\"}}\n\n## Positioned Tooltips\n\n`ツールチップ` は、12 **配置** 選択肢があります。 矢印はありません。その代わりに、方向を伝達するためにソースから発生するモーションに依存します。\n\n{{\"demo\": \"pages/components/tooltips/PositionedTooltips.js\"}}\n\n## Customized tooltips\n\nコンポーネントのカスタマイズの例を次に示します。 詳細については、 [オーバーライドのドキュメントページ](/customization/components/)を参照してください。\n\n{{\"demo\": \"pages/components/tooltips/CustomizedTooltips.js\"}}\n\n## Arrow Tooltips\n\nYou can use the `arrow` prop to give your tooltip an arrow indicating which element it refers to.\n\n{{\"demo\": \"pages/components/tooltips/ArrowTooltips.js\"}}\n\n## Custom child element\n\nツールチップは、DOMイベントリスナーをその子要素に適用する必要があります。 If the child is a custom React element, you need to make sure that it spreads its properties to the underlying DOM element.\n\n```jsx\nconst MyComponent = React.forwardRef(function MyComponent(props, ref) {\n  //  Spread the props to the underlying DOM element.\n  return <div {...props} ref={ref}>Bin</div>\n});\n\n// ...\n\n<Tooltip title=\"Delete\">\n  <MyComponent>\n</Tooltip>\n```\n\n同様の概念は、[wrapping components](/guides/composition/#wrapping-components)ガイドにも記載されています。\n\n## Triggers\n\nツールチップを表示するイベントのタイプを定義できます。\n\n{{\"demo\": \"pages/components/tooltips/TriggersTooltips.js\"}}\n\n## Controlled Tooltips\n\n`open`, `onOpen` and `onClose` の各プロパティを使用して、ツールチップの動作を制御できます。\n\n{{\"demo\": \"pages/components/tooltips/ControlledTooltips.js\"}}\n\n## Variable Width\n\n既定では、`Tooltip`は長いテキストを折り返して読みやすくします。\n\n{{\"demo\": \"pages/components/tooltips/VariableWidth.js\"}}\n\n## インタラクティブ\n\nツールチップをインタラクティブにすることができます。 `leaveDelay` が期限切れになる前に、ユーザーがツールチップにカーソルを合わせても閉じません。\n\n{{\"demo\": \"pages/components/tooltips/InteractiveTooltips.js\"}}\n\n## 無効な要素\n\nデフォルトでは無効になっている要素`<button>`はユーザーの操作をトリガーしないため、 `Tooltip`は、ホバーなどの通常のイベントでアクティブになりません。 To accommodate disabled elements, add a simple wrapper element, such as a `span`.\n\n> ⚠️ In order to work with Safari, you need at least one display block or flex item below the tooltip wrapper.\n\n{{\"demo\": \"pages/components/tooltips/DisabledTooltips.js\"}}\n\n> If you're not wrapping a Material-UI component that inherits from `ButtonBase`, for instance, a native `<button>` element, you should also add the CSS property *pointer-events: none;* to your element when disabled:\n\n```jsx\n<Tooltip title=\"You don't have permission to do this\">\n  <span>\n    <button disabled={disabled} style={disabled ? { pointerEvents: \"none\" } : {}}>\n      {'A disabled button'}\n    </button>\n  </span>\n</Tooltip>\n```\n\n## Transitions\n\n別のトランジションを使用します。\n\n{{\"demo\": \"pages/components/tooltips/TransitionsTooltips.js\"}}\n\n## 表示と非表示\n\nツールチップは通常、ユーザーのマウスが要素の上に移動するとすぐに表示され、ユーザーのマウスが離れるとすぐに非表示になります。 ツールチップの表示または非表示の遅延は、上記のControlled Tooltipsデモに示すように、プロパティ `enterDelay` および `leaveDelay`を使用して追加できます。\n\nモバイルでは、ユーザーが要素を長押しして1500msの遅延後に非表示になると、ツールチップが表示されます。 `disableTouchListener` プロパティでこの機能を無効にできます。\n\n{{\"demo\": \"pages/components/tooltips/DelayTooltips.js\"}}"