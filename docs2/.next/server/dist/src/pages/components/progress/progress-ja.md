module.exports = "---\ntitle: Circular Progress, Linear Progress React component\ncomponents: CircularProgress, LinearProgress\n---\n\n# Progress\n\n<p class=\"description\">一般にスピナーと呼ばれる進行状況インジケータは、指定されていない待機時間を表したり、プロセスの長さを表示します。 アニメーションはJavaScriptではなくCSSで動作します。</p>\n\n[進行状況インジケータ](https://material.io/design/components/progress-indicators.html) 、アプリの読み込み、フォームの送信、更新の保存など、進行中のプロセスのステータスについてユーザーに通知します。 アプリの状態を伝え、ユーザーが現在の画面から移動できるかどうかなど、利用可能なアクションを示します。\n\n**Determinate** インジケータは、操作にかかる時間を表示します。\n\n**Indeterminate**インジケータは、不特定の待機時間を視覚化します。\n\n#### グループとしての進捗\n\n一連のプロセスの進行状況を表示する場合、各アクティビティの進行状況ではなく、全体的な進行状況を示します。\n\n## Circular\n\n[Circular progress](https://material.io/design/components/progress-indicators.html#circular-progress-indicators) 、確定プロセスと不確定プロセスの両方をサポートします。\n\n- **Determinate** 円形インジケーターは、インジケーターが0から360度に移動するときに、見えない円形のトラックを色で塗りつぶします。\n- **Indeterminate** 円形インジケータは、不可視のトラックに沿って移動しながらサイズが拡大および縮小します。\n\n### Circular Indeterminate\n\n{{\"demo\": \"pages/components/progress/CircularIndeterminate.js\"}}\n\n### Interactive Integration\n\n{{\"demo\": \"pages/components/progress/CircularIntegration.js\"}}\n\n### Circular Determinate\n\n{{\"demo\": \"pages/components/progress/CircularDeterminate.js\"}}\n\n### Circular Static\n\n{{\"demo\": \"pages/components/progress/CircularStatic.js\"}}\n\n## Linear\n\n[Linear](https://material.io/design/components/progress-indicators.html#linear-progress-indicators) インジケーター。\n\n### Linear Indeterminate\n\n{{\"demo\": \"pages/components/progress/LinearIndeterminate.js\"}}\n\n### Linear Determinate\n\n{{\"demo\": \"pages/components/progress/LinearDeterminate.js\"}}\n\n### Linear Buffer\n\n{{\"demo\": \"pages/components/progress/LinearBuffer.js\"}}\n\n### Linear Query\n\n{{\"demo\": \"pages/components/progress/LinearQuery.js\"}}\n\n## Non-standard ranges\n\n進捗コンポーネントは、0〜100の範囲の値を受け入れます。 これにより、これらがデフォルトの最小値/最大値であるスクリーンリーダーユーザーの作業が簡素化されます。 ただし、場合によっては、値がこの範囲外のデータソースを使用している場合があります。 範囲内の値を0〜100のスケールに簡単に変換する方法は次のとおりです。\n\n```jsx\n// MIN = Minimum expected value\n// MAX = Maximium expected value\n// Function to normalise the values (MIN / MAX could be integrated)\nconst normalise = value => (value - MIN) * 100 / (MAX - MIN);\n\n// Example component that utilizes the `normalise` function at the point of render.\nfunction Progress(props) {\n  return (\n    <React.Fragment>\n      <CircularProgress variant=\"determinate\" value={normalise(props.value)} />\n      <LinearProgress variant=\"determinate\" value={normalise(props.value)} />\n    </React.Fragment>\n  )\n}\n```\n\n## カスタマイズされた進行状況バー\n\nコンポーネントのカスタマイズの例を次に示します。 詳細については、 [オーバーライドのドキュメントページ](/customization/components/)を参照してください。\n\n{{\"demo\": \"pages/components/progress/CustomizedProgressBars.js\", \"defaultCodeOpen\": false}}\n\n## 外観の遅延\n\n応答時間について知っておくべき重要な制限は [3つあります](https://www.nngroup.com/articles/response-times-3-important-limits/) 。 `ButtonBase` コンポーネントの波及効果により、ユーザーはシステムが瞬時に反応しているように感じます。 通常、0.1秒以上1.0秒未満の遅延の間、特別なフィードバックは必要ありません。 1.0秒後、ローダーを表示して、ユーザーの思考の流れが中断されないようにすることができます。\n\n{{\"demo\": \"pages/components/progress/DelayingAppearance.js\"}}\n\n## 制限\n\n負荷が高いと、ストロークダッシュアニメーションが失われるか、ランダムなCircularProgressリング幅が表示される場合があります。 メインレンダリングスレッドをブロックしないように、プロセッサを集中的に使用する操作をWebワーカーで、またはバッチで実行する必要があります。\n\n![heavy load](/static/images/progress/heavy-load.gif)\n\n不可能な場合は、 `disableShrink` プロパティを活用して問題を軽減できます。 [この問題](https://github.com/Foso/material-ui/issues/10327)参照してください。\n\n{{\"demo\": \"pages/components/progress/CircularUnderLoad.js\"}}\n"