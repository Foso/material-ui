module.exports = "---\ntitle: React-компонент Сетка\ncomponents: Grid\n---\n\n# Grid\n\n<p class=\"description\">Сетка адаптивного макета Material Design адаптируется к размеру экрана и ориентации, обеспечивая согласованность макетов.</p>\n\n[Сетка](https://material.io/design/layout/responsive-layout-grid.html) создает визуальную согласованность между макетами, позволяя гибко адаптироваться к разнообразным дизайнам. Адаптивный пользовательский интерфейс Material Design основан на сетке с 12 колонками.\n\n## Как это работает\n\nСистема сетки реализована с помощью компонента `Grid`:\n\n- Она использует [модуль Flexible Box CSS](https://www.w3.org/TR/css-flexbox-1/) для повышеной гибкости.\n- Существует два типа макетов: *контейнеры* и *элементы*.\n- Ширина элементов задается в процентах, поэтому они всегда гибко изменяют свой размер относительно родительского элемента.\n- Элементы имеют отступы для создания промежутков между отдельными элементами.\n- Существует пять контрольных точек прерывания сетки: xs, sm, md, lg и xl.\n\nЕсли вы **слабо знакомы (или совсем незнакомы) с Flexbox**, мы рекомендуем Вам прочитать это руководство [CSS-трюки Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).\n\n## Интервал\n\nСмысл адаптивной сетки не в равной ширине столбцов, а в равной ширине интервалов между ними. В Material Design величина отступов и ширина столбцов привязаны к базовой сетке с шагом в **8px**. Свойство `spacing` может принимать целочисленные значения от 0 до 10 включительно. По умолчанию расстояние между соседними элементами (GridItem) задано линейной функцией: `output(spacing) = spacing * 8px`, т.е. `spacing={2}` устанавливает значение интервала 16px.\n\nПоведение функции `output` можно изменить, [отредактировав тему](/customization/spacing/).\n\n{{\"demo\": \"pages/components/grid/SpacingGrid.js\", \"bg\": true}}\n\n## Адаптивные сетки\n\nАдаптивные сетки используют столбцы, которые меняют свою ширину и масштабируют размер содержимого. Макет с адаптивной сеткой может использовать точки останова (breakpoints), в тех случаях, когда макет должен резко измениться.\n\n### Базовая сетка\n\nШирина столбца меняется во всех точках прерывания (от `xs` и выше).\n\n{{\"demo\": \"pages/components/grid/CenteredGrid.js\", \"bg\": true}}\n\n### Сетка с точками прерывания\n\nНекоторые столбцы имеют несколько значений ширины, что приводит к изменению макета в определенной точке прерывания.\n\n{{\"demo\": \"pages/components/grid/FullWidthGrid.js\", \"bg\": true}}\n\n## Интерактивность\n\nНиже приведен интерактивный пример, который демонстрирует результаты различных настроек сетки:\n\n{{\"demo\": \"pages/components/grid/InteractiveGrid.js\", \"hideHeader\": true, \"bg\": true}}\n\n## Авто-разметка\n\nАвтоматическая разметка позволяет *элементам* равномерно распределяться по всему доступному пространству. Это также означает, что вы можете установить ширину одного *элемента* и остальные автоматически изменят свои размеры вокруг него.\n\n{{\"demo\": \"pages/components/grid/AutoGrid.js\", \"bg\": true}}\n\n## Сложная сетка\n\nСледующая демонстрация не соответствует спецификации Material Design, но иллюстрирует, как сетка может использоваться для создания сложных макетов.\n\n{{\"demo\": \"pages/components/grid/ComplexGrid.js\", \"bg\": true}}\n\n## Вложенная сетка\n\nСвойства `container` и `item` - это два независимых логических значения. Они могут быть объединены.\n\n> Flex **контейнер** представляет собой блок, созданный элементом с вычисляемым свойством display `flex` или `inline-flex`. Дочерние элементы flex контейнера называются flex **элементы** и размещаются используя flex-модель.\n\nhttps://www.w3.org/TR/css-flexbox-1/#box-model\n\n{{\"demo\": \"pages/components/grid/NestedGrid.js\", \"bg\": true}}\n\n## Ограничения\n\n### Отрицательный margin\n\nЕсть одно ограничение с отрицательным margin, которое мы используем для добавления расстояния между элементами. Появится горизонтальная прокрутка, если отрицательный margin выходит за пределы `<body>`. Существует 3 обходных пути, чтобы избежать этого:\n\n1. Не использовать отступы и не реализовывать их в пространстве пользователя. `spacing={0}` (по умолчанию).\n2. Применение внутренних отступов (padding) к родителю с использованием, как минимум, половины значения отступа, имеющегося у дочернего элемента:\n\n```jsx\n  <body>\n    <div style={{ padding: 20 }}>\n      <Grid container spacing={5}>\n        //...\n      </Grid>\n    </div>\n  </body>\n```\n\n3. Добавление `overflow-x: hidden;` к родителю.\n\n### white-space: nowrap;\n\nПервоначальные настройки для flex-элементов (flex items) равны `min-width: auto`. Это вызывает конфликт позиционирования, когда потомки используют `white-space: nowrap;`. Вы можете получить проблему с кодом такого типа:\n\n```jsx\n<Grid item xs>\n  <Typography noWrap>\n```\n\nЧтобы элемент оставался в контейнере, необходимо установить `min-width: 0`. На практике вы можете установить свойство `zeroMinWidth`:\n\n```jsx\n<Grid item xs zeroMinWidth>\n  <Typography noWrap>\n```\n\n{{\"demo\": \"pages/components/grid/AutoGridNoWrap.js\", \"bg\": true}}\n\n### direction: column | column-reverse\n\nХотя компонент `Grid` имеет свойство `direction` которое допускает значения `row`, `row-reverse`, `column`и `column-reverse`, тем не менее, некоторые функции не поддерживаются в контейнерах `column` и `column-reverse`. Свойства, определющие количество сеток, которые компонент будет использовать для данной точки останова (`xs`, `см`, `md`, `lg`и `xl`), ориентированы на управление шириной и оказывают **различное** влияние на height в контейнерах `column` и `column-reverse`. При использовании в контейнерах `column` или `column-reverse`, эти свойства могут оказать нежелательные эффекты на ширину элементов `Grid`.\n\n## CSS макет сетки\n\nMaterial UI сам по себе не предоставляет никакой функциональности CSS Grid, но, как видно ниже, вы можете легко использовать CSS Grid в макете страницы.\n\n{{\"demo\": \"pages/components/grid/CSSGrid.js\", \"bg\": true}}"