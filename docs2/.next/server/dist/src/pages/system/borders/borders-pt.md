module.exports = "# Bordas\n\n<p class=\"description\">Use os utilitários de borda para rapidamente estilizar \"border\" e \"border-radius\" de um elemento. Ótimo para imagens, botões ou qualquer outro elemento.</p>\n\n## Border\n\nUse os utilitários de borda para adicionar ou remover as bordas de um elemento. Escolha para todas as bordas ou separadamente.\n\n### Adicionando\n\n{{\"demo\": \"pages/system/borders/BorderAdditive.js\", \"defaultCodeOpen\": false, \"bg\": true}}\n\n```jsx\n<Box border={1}>…\n<Box borderTop={1}>…\n<Box borderRight={1}>…\n<Box borderBottom={1}>…\n<Box borderLeft={1}>…\n```\n\n### Removendo\n\n{{\"demo\": \"pages/system/borders/BorderSubtractive.js\", \"defaultCodeOpen\": false, \"bg\": true}}\n\n```jsx\n<Box border={0}>…\n<Box borderTop={0}>…\n<Box borderRight={0}>…\n<Box borderBottom={0}>…\n<Box borderLeft={0}>…\n```\n\n## Cor da Borda\n\n{{\"demo\": \"pages/system/borders/BorderColor.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box borderColor=\"primary.main\">…\n<Box borderColor=\"secondary.main\">…\n<Box borderColor=\"error.main\">…\n<Box borderColor=\"grey.500\">…\n<Box borderColor=\"text.primary\">…\n```\n\n## Border-radius\n\n{{\"demo\": \"pages/system/borders/BorderRadius.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box borderRadius=\"50%\">…\n<Box borderRadius=\"borderRadius\">…\n<Box borderRadius={16}>…\n```\n\n## API\n\n```js\nimport { borders } from '@material-ui/system';\n```\n\n| Nome da importação | Propriedade    | Propriedade CSS | Chave do tema                                                    |\n|:------------------ |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`           | `border`       | `border`        | `borders`                                                        |\n| `borderTop`        | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`       | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`      | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom`     | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`      | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius`     | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |"