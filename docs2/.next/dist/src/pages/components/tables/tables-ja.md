module.exports = "---\ntitle: Tableコンポーネント\ncomponents: Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel\n---\n\n# Table (テーブル)\n\n<p class=\"description\">Tables display sets of data. それらは完全にカスタマイズできます。</p>\n\n[Tables](https://material.io/design/components/data-tables.html) display information in a way that’s easy to scan, so that users can look for patterns and insights. Cardなどの他のプライマリーコンテンツを埋め込むことができます。\n\nTables can include:\n\n- 対応の可視化\n- ナビゲーション\n- データを照会および操作するためのツール\n\nツールを含めるときは、ツールをテーブルの真上または真下に配置します。\n\n## Structure\n\nData tableの上部には、列名をリストするヘッダー行があり、その後にデータ用の行が続きます。\n\nユーザーがデータを選択または操作する必要がある場合は、チェックボックスを各行に付ける必要があります。\n\nアクセシビリティのために、最初の列は `<th>` 要素に設定され、 `スコープ` は `\"row\"`です。 これにより、スクリーンリーダーは行と列の名前でセルの値を識別できます。\n\n## Simple Table\n\n飾り気のないシンプルな例です。\n\n{{\"demo\": \"pages/components/tables/SimpleTable.js\", \"bg\": true}}\n\n## Dense Table\n\n簡単な例ではの緻密なテーブル詳細\n\n{{\"demo\": \"pages/components/tables/DenseTable.js\", \"bg\": true}}\n\n## Sorting & Selecting\n\nこの例では、カスタム ` Toolbar `使用して、 ` Checkbox ` とクリック可能な行を選択に使用する方法を示します。 列見出しのスタイル設定に役立つように `TableSortLabel` コンポーネントを使用します。\n\nテーブルは水平スクロールを示すために固定幅が与えられています。 ページ付けコントロールがスクロールするのを防ぐために、TablePaginationコンポーネントはTableの外側で使用されます。 （下記の ['カスタムテーブルページネーションアクション'の例](#custom-table-pagination-action) は、TableFooter内のページネーションを示しています。）\n\n{{\"demo\": \"pages/components/tables/EnhancedTable.js\", \"bg\": true}}\n\n## Customized tables\n\nコンポーネントのカスタマイズ例を次に示します。 詳細については、 [オーバーライドのドキュメントページ](/customization/components/)を参照してください。\n\n{{\"demo\": \"pages/components/tables/CustomizedTables.js\", \"bg\": true}}\n\n### Custom pagination options\n\nIt's possible to customise the options shown in the \"Rows per page\" select using the `rowsPerPageOptions` prop. You should either provide an array of:\n\n- **numbers**, each number will be used for the option's label and value.\n    \n    ```jsx\n    <TablePagination rowsPerPageOptions={[10, 50]} />\n    ```\n\n- **objects**, the `value` and `label` keys will be used respectively for the value and label of the option (useful for language strings such as 'All').\n    \n    ```jsx\n    <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />\n    ```\n\n### Custom pagination actions\n\n`TablePagination` コンポーネントの `Action` プロパティにより、 カスタムアクションを実装することができます。\n\n{{\"demo\": \"pages/components/tables/CustomPaginationActionsTable.js\", \"bg\": true}}\n\n## 固定ヘッダー\n\nAn example of a table with scrollable rows and fixed column headers. It leverages the `stickyHeader` prop (⚠️ no IE 11 support).\n\n{{\"demo\": \"pages/components/tables/StickyHeadTable.js\", \"bg\": true}}\n\n## Spanning Table\n\n行 & 列にまたがる単純な例です。\n\n{{\"demo\": \"pages/components/tables/SpanningTable.js\", \"bg\": true}}\n\n## Virtualized Table\n\n次の例では、 ` Table ` コンポーネントで [react-virtualized](https://github.com/bvaughn/react-virtualized) を使用する方法を示します。 これは200行をレンダリングし、より多くを簡単に処理できます。 仮想化はパフォーマンスの問題に役立ちます。\n\n{{\"demo\": \"pages/components/tables/ReactVirtualizedTable.js\", \"bg\": true}}\n\n## 補完プロジェクト\n\nより高度な使用例では、以下を利用できます。\n\n### material-table\n\n![Stars](https://img.shields.io/github/stars/mbrn/material-table.svg?style=social&label=Stars) ![npmダウンロード](https://img.shields.io/npm/dm/material-table.svg)\n\n[material-table](https://github.com/mbrn/material-table) は、いくつかの追加機能を備えたMaterial-UI Tableを基にしたシンプルで強力なReact用データテーブルです。 それらは多くの異なるユースケース（編集可能、フィルタリング、グループ化、ソート、選択、i18n、ツリーデータなど）をサポートします。 参照するといいでしょう。\n\n{{\"demo\": \"pages/components/tables/MaterialTableDemo.js\", \"bg\": true}}\n\n### その他\n\n- [dx-react-grid-material-ui](https://devexpress.github.io/devextreme-reactive/react/grid/): A data grid for Material-UI with paging, sorting, filtering, grouping and editing features ([paid license](https://js.devexpress.com/licensing/)).\n- [mui-datatables](https://github.com/gregnb/mui-datatables): Responsive data tables for Material-UI with filtering, sorting, search and more.\n- [tubular-react](https://github.com/unosquare/tubular-react): A Material-UI table with local or remote data-source. Featuring filtering, sorting, free-text search, export to CSV locally, and aggregations.\n\n## アクセシビリティ\n\n(WAI tutorial: https://www.w3.org/WAI/tutorials/tables/)\n\n### Caption\n\nA caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it.\n\n{{\"demo\": \"pages/components/tables/AcccessibleTable.js\", \"bg\": true}}"