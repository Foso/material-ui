module.exports = "---\ntitle: Componente React para Listas\ncomponents: Collapse, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader\n---\n\n# Listas\n\n<p class=\"description\">Listas são continuas, apresentam verticalmente texto ou imagens.</p>\n\n[Listas](https://material.io/design/components/lists.html) são um grupo contínuo de texto ou imagens. Elas são compostas por itens contendo ações primárias e complementares, que são representados por ícones e texto.\n\n## Lista Simples\n\n{{\"demo\": \"pages/components/lists/SimpleList.js\", \"bg\": true}}\n\nO último item da demonstração anterior mostra como você pode renderizar um link:\n\n```jsx\nfunction ListItemLink(props) {\n  return <ListItem button component=\"a\" {...props} />;\n}\n\n//...\n\n<ListItemLink href=\"#simple-list\">\n  <ListItemText primary=\"Spam\" />\n</ListItemLink>\n```\n\nVocê pode encontrar uma [demonstração com React Router seguindo esta seção](/guides/composition/#react-router) da documentação.\n\n## Lista Aninhada\n\n{{\"demo\": \"pages/components/lists/NestedList.js\", \"bg\": true}}\n\n## Lista de Pastas\n\n{{\"demo\": \"pages/components/lists/FolderList.js\", \"bg\": true}}\n\n## Interativo\n\nAbaixo está uma demonstração interativa que permite explorar os resultados visuais das diferentes configurações:\n\n{{\"demo\": \"pages/components/lists/InteractiveList.js\", \"bg\": true}}\n\n## Lista - Item Selecionado\n\n{{\"demo\": \"pages/components/lists/SelectedListItem.js\", \"bg\": true}}\n\n## Alinhar itens da lista\n\nVocê deve alterar o alinhamento do item da lista ao exibir 3 linhas ou mais, alterando a propriedade `alignItems = \"flex-start\"`.\n\n{{\"demo\": \"pages/components/lists/AlignItemsList.js\", \"bg\": true}}\n\n## Controles de Lista\n\n### Caixa de Seleção\n\nUma caixa de seleção pode ser uma ação primária ou uma ação secundária.\n\nA caixa de seleção é a ação principal e o indicador de estado para o item da lista. O botão de comentário é uma ação secundária e um destino separado.\n\n{{\"demo\": \"pages/components/lists/CheckboxList.js\", \"bg\": true}}\n\nA caixa de seleção é uma ação secundária, sem interferir com o estado do item da lista.\n\n{{\"demo\": \"pages/components/lists/CheckboxListSecondary.js\", \"bg\": true}}\n\n### Seletor\n\nO seletor é uma ação secundária, sem interferir com o estado do item da lista.\n\n{{\"demo\": \"pages/components/lists/SwitchListSecondary.js\", \"bg\": true}}\n\n## Lista de Subpastas Fixadas\n\nApós a rolagem, os subtítulos permanecem fixos na parte superior da tela até serem empurrados para fora da tela pelo próximo subtítulo.\n\nEsse recurso depende do posicionamento fixo do CSS. Infelizmente, [não é implementado](https://caniuse.com/#search=sticky) por todos os navegadores. O padrão é `disableSticky` quando não é suportado.\n\n{{\"demo\": \"pages/components/lists/PinnedSubheaderList.js\", \"bg\": true}}\n\n## Lista de Inserção\n\n{{\"demo\": \"pages/components/lists/InsetList.js\", \"bg\": true}}\n\n## Lista Virtualizada\n\nNo exemplo a seguir, nós demonstramos como usar [react-window](https://github.com/bvaughn/react-window) com o componente `List`. Ela renderiza 200 linhas e pode facilmente lidar com mais. A virtualização ajuda a lidar com problemas de desempenho.\n\n{{\"demo\": \"pages/components/lists/VirtualizedList.js\", \"bg\": true}}\n\nO uso de [react-window](https://github.com/bvaughn/react-window), quando possível, é recomendado. Se no seu caso esta biblioteca não resolver, você deve considerar o uso de [react-virtualized](https://github.com/bvaughn/react-virtualized), e em seguida, como alternativa [react-virtuoso](https://github.com/petyosi/react-virtuoso).\n\n## Customização\n\n👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/menu-list)."