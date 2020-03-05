module.exports = "---\ntitle: Dialog Reactコンポーネント\ncomponents: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide\n---\n\n# Dialog (ダイアログ)\n\n<p class=\"description\">ダイアログは、タスクについてユーザーに通知します。重要な情報を含める、決定を求める、または複数のタスクを伴うことができます。</p>\n\n[ダイアログ](https://material.io/design/components/dialogs.html) は、重要な情報を提供したり決定を求めたりするために、アプリのコンテンツの前に表示される [モーダル](/components/modal/) ウィンドウの一種です。 ダイアログは表示されるとアプリのすべての機能を無効にし、確認、却下、または必要な操作が行われるまで画面に表示されたままになります。\n\nダイアログは意図的に中断されるので、慎重にに使用する必要があります。\n\n## 単純なダイアログ\n\n単純なダイアログでは、リスト項目に関する詳細情報やアクションを追加できます。 たとえば、アバター、アイコン、明確なサブテキスト、または直交するアクション（アカウントの追加など）を表示できます。\n\nタッチ機構:\n\n- オプションを選択するとすぐにそのオプションが確定され、メニューが閉じます\n- ダイアログの外側に触れるか、戻るを押すと、操作がキャンセルされてダイアログが閉じます。\n\n{{\"demo\": \"pages/components/dialogs/SimpleDialog.js\"}}\n\n## 通知\n\nアラートは緊急の中断であり、確認を必要とし、状況をユーザーに知らせます。\n\nほとんどのアラートはタイトルを必要としません。 それらは一つか二つの文章で決定を次のように要約する。\n\n- 質問する(例「この会話を削除しますか?」)\n- アクションボタンに関連するステートメントを作る\n\nタイトルバーの警告は、接続が切断される可能性があるなど、リスクの高い状況でのみ使用してください。 ユーザーは、タイトルとボタンテキストだけに基づいて選択を理解できる必要があります。\n\nタイトルは必須入力です。\n\n- 「USBストレージを消去しますか?」など、内容領域に明確な質問や説明を入力します。\n- 「警告」や「よろしいですか」などの謝罪、あいまいさ、または質問を避けます。\n\n{{\"demo\": \"pages/components/dialogs/AlertDialog.js\"}}\n\n## Transitions\n\nトランジションを入れ替えることもできます。次の例では、`Slide`. を使用します。\n\n{{\"demo\": \"pages/components/dialogs/AlertDialogSlide.js\"}}\n\n## フォームダイアログ\n\nフォームダイアログを使用すると、ユーザーはダイアログ内のフォームフィールドに入力できます。 例えば、潜在的な登録者にメールアドレスを入力するように求める場合、登録者はメールアドレスフィールドに入力して 「送信」 をタッチすることができる。\n\n{{\"demo\": \"pages/components/dialogs/FormDialog.js\"}}\n\n## Customized dialogs\n\nコンポーネントのカスタマイズ例を次に示します。 詳細については、 [オーバーライドのドキュメントページ](/customization/components/)を参照してください。\n\nダイアログボックスには、操作性を高めるために閉じるボタンが追加されています。\n\n{{\"demo\":\"pages/components/dialogs/CustomizedDialogs.js\"}}\n\n## Full-screen dialogs\n\n{{\"demo\": \"pages/components/dialogs/FullScreenDialog.js\"}}\n\n## オプションサイズ\n\nダイアログの最大幅を設定するには、列挙型の `maxWidth` と `fullWidth` ブール値を組み合わせて使用しします。 `fullWidth` プロパティがtrueの場合、ダイアログは `maxWidth`値に基づいて調整されます。\n\n{{\"demo\": \"pages/components/dialogs/MaxWidthDialog.js\"}}\n\n## レスポンシブ なfull-screen\n\n[`useMediaQuery`](/components/use-media-query/#usemediaquery)を使用して、ダイアログを全画面表示にすることができます。\n\n```jsx\nimport useMediaQuery from '@material-ui/core/useMediaQuery';\n\nfunction MyComponent() {\n  const theme = useTheme();\n  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));\n\n  return <Dialog fullScreen={fullScreen} />\n}\n```\n\n{{\"demo\": \"pages/components/dialogs/ResponsiveDialog.js\"}}\n\n## 確認ダイアログ\n\n確認ダイアログでは、オプションを確定する前にユーザーが選択内容を明示的に確認する必要があります。 たとえば、ユーザーは複数の着信音を聞くことができますが、「OK」をタッチして最終的な選択を行うだけです。\n\n確認ダイアログで[キャンセル] をタッチするか[戻る] を押すと、操作がキャンセルされ、変更が破棄されてダイアログが閉じます。\n\n{{\"demo\": \"pages/components/dialogs/ConfirmationDialog.js\"}}\n\n## ドラッグ可能なダイアログ\n\n[react-draggable](https://github.com/mzabriskie/react-draggable)を使用して、ドラッグ可能なダイアログを作成できます。 これを行うには、インポートした`Draggable`コンポーネントを `Dialog` コンポーネントの`PaperComponent` として渡します。 これによりダイアログ全体がドラッグ可能になります。\n\n{{\"demo\": \"pages/components/dialogs/DraggableDialog.js\"}}\n\n## 長いコンテンツをスクロールする\n\nダイアログがユーザのビューポートまたはデバイスに対して長すぎる場合は、スクロールします。\n\n- `scroll=paper`: paper要素内でダイアログボックスの内容がスクロールします。\n- `scroll=body`: ダイアログの内容がbody要素内をスクロールします。\n\n以下のデモを試してみてください。\n\n{{\"demo\": \"pages/components/dialogs/ScrollDialog.js\"}}\n\n## 制限事項\n\nFollow the [Modal limitations section](/components/modal/#limitations).\n\n## アクセシビリティ\n\n[モーダルアクセシビリティのセクション](/components/modal/#accessibility)従ってください。"