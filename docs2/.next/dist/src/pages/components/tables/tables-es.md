module.exports = "---\ntitle: Componente de React Table\ncomponents: Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel\n---\n\n# Table (tabla)\n\n<p class=\"description\">Las tablas muestran conjuntos de datos. Pueden ser totalmente personalizadas.</p>\n\nLas [tablas](https://material.io/design/components/data-tables.html) muestran información de una forma fácil de analizar, revelando así patrones e ideas a los usuarios. Se pueden integrar en contenido principal, tal como tarjetas.\n\nLas tablas pueden incluir:\n\n- Un elemento visual correspondiente\n- Navegación\n- Herramientas para consultar y manipular los datos\n\nCuando se incluyen herramientas, se deberían poner directamente arriba o debajo de la tabla.\n\n## Estructura\n\nUna tabla de datos contiene una cabecera en la parte superior con los nombres de las columnas, seguida por las filas de datos.\n\nUn checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.\n\nPara facilitar la accesibilidad, la primera columna es un elemento `<th>`, con un `scope` de `\"row\"`. Esto permite a los lectores de pantalla identificar el valor de una celda por el nombre de su fila y columna.\n\n## Tabla Sencilla\n\nUn ejemplo sencillo sin florituras.\n\n{{\"demo\": \"pages/components/tables/SimpleTable.js\", \"bg\": true}}\n\n## Tabla Densa\n\nUn Ejemplo de una tabla densa sin florituras.\n\n{{\"demo\": \"pages/components/tables/DenseTable.js\", \"bg\": true}}\n\n## Ordenando & Seleccionando\n\nEste ejemplo demuestra el uso del `Checkbox` y las filas cliqueables para seleccionar, con una `Toolbar` personalizado. Utiliza el componente `TableSortLabel` para ayudar a dar estilo a las cabeceras de las columnas.\n\nLa Tabla tiene un ancho fijo para demostrar el desplazamiento horizontal. Para evitar que se desplacen los controles de paginación, el componente TablePagination se usa fuera de la Tabla. (El [ejemplo de la 'Acción de paginación de tabla personalizado'](#custom-table-pagination-action) de abajo demuestra la paginación dentro del TableFooter.)\n\n{{\"demo\": \"pages/components/tables/EnhancedTable.js\", \"bg\": true}}\n\n## Tablas personalizadas\n\nHere is an example of customizing the component. You can learn more about this in the [overrides documentation page](/customization/components/).\n\n{{\"demo\": \"pages/components/tables/CustomizedTables.js\", \"bg\": true}}\n\n### Opciones de paginación personalizada\n\nEs posible personalizar las opciones en el item \"Filas por página\" usando la propiedad `rowsPerPageOptions`. Debes proveer alguna de estas opciones de array:\n\n- **numbers**, cada número será usado para la etiqueta y el valor de la opción.\n    \n    ```jsx\n    <TablePagination rowsPerPageOptions={[10, 50]} />\n    ```\n\n- **objects**, the `value` and `label` keys will be used respectively for the value and label of the option (useful for language strings such as 'All').\n    \n    ```jsx\n    <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />\n    ```\n\n### Custom pagination actions\n\nEl atributo `Action`del componente `TablePagination` permite implementar acciones personalizadas.\n\n{{\"demo\": \"pages/components/tables/CustomPaginationActionsTable.js\", \"bg\": true}}\n\n## Fixed header\n\nAn example of a table with scrollable rows and fixed column headers. It leverages the `stickyHeader` prop (⚠️ no IE 11 support).\n\n{{\"demo\": \"pages/components/tables/StickyHeadTable.js\", \"bg\": true}}\n\n## Tabla Expandible\n\nUn ejemplo sencillo con filas & columnas expandibles.\n\n{{\"demo\": \"pages/components/tables/SpanningTable.js\", \"bg\": true}}\n\n## Tabla Virtualizada\n\nEn el siguiente ejemplo, demostramos como usar [react-virtualized](https://github.com/bvaughn/react-virtualized) con el componente `Table`. Renderiza 200 filas y fácilmente puede manejar más. La virtualización ayuda con problemas de rendimiento.\n\n{{\"demo\": \"pages/components/tables/ReactVirtualizedTable.js\", \"bg\": true}}\n\n## Proyectos relacionados\n\nPara usos más avanzados tal vez puedas aprovercharte de:\n\n### material-table\n\n![estrellas](https://img.shields.io/github/stars/mbrn/material-table.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/material-table.svg)\n\n[material-table](https://github.com/mbrn/material-table) is a simple and powerful Datatable for React based on Material-UI Table with some additional features. They support many different use cases (editable, filtering, grouping, sorting, selection, i18n, tree data and more). You should check it out.\n\n{{\"demo\": \"pages/components/tables/MaterialTableDemo.js\", \"bg\": true}}\n\n### Otros\n\n- [dx-react-grid-material-ui](https://devexpress.github.io/devextreme-reactive/react/grid/): A data grid for Material-UI with paging, sorting, filtering, grouping and editing features ([paid license](https://js.devexpress.com/licensing/)).\n- [mui-datatables](https://github.com/gregnb/mui-datatables): Responsive data tables for Material-UI with filtering, sorting, search and more.\n- [tubular-react](https://github.com/unosquare/tubular-react): A Material-UI table with local or remote data-source. Featuring filtering, sorting, free-text search, export to CSV locally, and aggregations.\n\n## Accesibilidad\n\n(WAI tutorial: https://www.w3.org/WAI/tutorials/tables/)\n\n### Caption\n\nA caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it.\n\n{{\"demo\": \"pages/components/tables/AcccessibleTable.js\", \"bg\": true}}"