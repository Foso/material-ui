module.exports = "---\ncomponents: Link\n---\n\n# リンク\n\n<p class=\"description\">Linkコンポーネントを使用すると、テーマの色とタイポグラフィスタイルでアンカー要素を簡単にカスタマイズできます。</p>\n\n## 簡単なリンク\n\nLinkコンポーネントは、 [Typography](/api/typography/) コンポーネントの上に構築されています。 そのプロパティを活用できます。\n\n{{\"demo\": \"pages/components/links/Links.js\"}}\n\nただし、Linkコンポーネントには、Typographyコンポーネントとは異なるデフォルトプロパティがあります。\n\n- リンクが目立つようにするには、`color=\"primary\"`とします。\n- ほとんどの場合、リンクはタイポグラフィコンポーネントの子として使用されるため、`variant=\"inherit\"` となります。\n\n## セキュリティ\n\nリンクで `target=\"_blank\"` を使用する場合は、サードパーティのコンテンツにリンクする際に、`rel=\"noopener\"` または`rel=\"noreferrer\"`を必ず設定することを[推奨します。](https://developers.google.com/web/tools/lighthouse/audits/noopener)\n\n- `rel=\"noopener\"` は、新しいページがにアクセスできないように`window.opener`プロパティを使用し、別のプロセスで実行されるようにします。 これがないと、ターゲットページがページを悪意のあるURLにリダイレクトする可能性があります。\n- `rel=\"noreferrer\"` は同じ効果を持ちますが、*Referer* ヘッダーが新しいページに送信されなくなります。 ⚠️リファラーヘッダーを削除すると、分析に影響します。\n\n## サードパーティ製ルーティングライブラリ\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server. `Link` コンポーネントには、このユースケースを処理するためのプロパティが用意されています。：`component`\n\nこちらは [react-routerとの統合例](/guides/composition/#link).\n\n## アクセシビリティ\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- リンクのコンテンツを提供するときは、「ここをクリック」や「移動」などの一般的な説明は避けてください。 代わりに、 [特定の説明](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text)使用します。\n- 最高のユーザーエクスペリエンスを得るには、ページ上のテキストからリンクを目立たせる必要があります。\n- リンクに意味のあるhrefがない場合、[`<button>`要素を使用してレンダリングする必要があります。](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)\n\n{{\"demo\": \"pages/components/links/ButtonLink.js\"}}"