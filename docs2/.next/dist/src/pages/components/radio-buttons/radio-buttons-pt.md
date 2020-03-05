module.exports = "---\ntitle: Componente React para Botões de Opção\ncomponents: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel\n---\n\n# Radio\n\n<p class=\"description\">Botões de opção permitem o usuário selecionar uma das opções de um conjunto.</p>\n\nUse [botões de opção](https://material.io/design/components/selection-controls.html#radio-buttons) quando um usuário precisar ver todas as opções disponíveis. Se várias opções podem ser suprimidas da visualização, considere usar um menu suspenso (dropdown), pois ele utiliza menos espaço.\n\nOs botões de opção devem ter a opção mais comumente usada selecionada por padrão.\n\n`RadioGroup` é um wrapper útil usado para agrupar componentes `Radio` fornecendo uma API mais fácil, e adequá a acessibilidade pelo teclado para o grupo.\n\n{{\"demo\": \"pages/components/radio-buttons/RadioButtonsGroup.js\"}}\n\n## Botões de Opção Independentes\n\n`Radio` também pode ser usado de forma independente, sem a necessidade de um wrapper.\n\n{{\"demo\": \"pages/components/radio-buttons/RadioButtons.js\"}}\n\n## Posicionamento do Rótulo\n\nVocê pode alterar o posicionamento do rótulo:\n\n{{\"demo\": \"pages/components/radio-buttons/FormControlLabelPosition.js\"}}\n\n## Opções customizadas\n\nAqui está um exemplo de customização do componente. Você pode aprender mais sobre isso na [página de documentação de sobrescritas](/customization/components/).\n\n{{\"demo\": \"pages/components/radio-buttons/CustomizedRadios.js\"}}\n\n## Quando usar\n\n- [Caixas de Seleção vs. Botões de Opção](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)\n\n## Acessibilidade\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#radiobutton)\n\n- Todos os controles de formulário devem ter rótulos, e isso inclui os botões de opção, caixas de seleção e seletores. Na maioria dos casos, isso é feito usando o elemento `<label>` ([FormControlLabel](/api/form-control-label/)).\n- Quando um rótulo não pode ser usado, é necessário adicionar um atributo diretamente no componente de entrada. Nesse caso você pode aplicar um atributo adicional (e.g.`aria-label`,`aria-labelledby`, `title`) através da propriedade `inputProps`.\n\n```jsx\n<RadioButton\n  value=\"radioA\"\n  inputProps={{ 'aria-label': 'Radio A' }}\n/>\n```"