module.exports = "---\ntitle: Componente React para Botão\ncomponents: Button, IconButton, ButtonBase\n---\n\n# Button (botão)\n\n<p class=\"description\">Botões permitem que os usuários tomem ações e decisões com um simples toque.</p>\n\n[Botões](https://material.io/design/components/buttons.html) comunicam ações que os usuários podem realizar. Eles são normalmente colocados em toda a interface do usuário, em lugares como:\n\n- Caixa de diálogo\n- Janelas modais\n- Formulários\n- Cartões\n- Barras de ferramentas\n\n## Botões Contidos\n\n[Botões Contidos](https://material.io/design/components/buttons.html#contained-button) tem alta ênfase, distinguem-se pelo uso de elevação e preenchimento. Eles contém as principais ações da sua aplicação.\n\n{{\"demo\": \"pages/components/buttons/ContainedButtons.js\"}}\n\nYou can remove the elevation with the `disableElevation` prop.\n\n{{\"demo\": \"pages/components/buttons/DisableElevation.js\"}}\n\n## Botões de Texto\n\n[Text buttons](https://material.io/design/components/buttons.html#text-button) are typically used for less-pronounced actions, including those located:\n\n- Caixas de diálogo\n- Cartões\n\nIn cards, text buttons help maintain an emphasis on card content.\n\n{{\"demo\": \"pages/components/buttons/TextButtons.js\"}}\n\n## Botões Delineados\n\n[Outlined buttons](https://material.io/design/components/buttons.html#outlined-button) are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.\n\nOutlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.\n\n{{\"demo\": \"pages/components/buttons/OutlinedButtons.js\"}}\n\n## Upload button\n\n{{\"demo\": \"pages/components/buttons/UploadButtons.js\"}}\n\n## Tamanhos\n\nGosta de botões maiores ou menores? Use a propriedade `size`.\n\n{{\"demo\": \"pages/components/buttons/ButtonSizes.js\"}}\n\n## Buttons with icons and label\n\nSometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.\n\n{{\"demo\": \"pages/components/buttons/IconLabelButtons.js\"}}\n\n## Icon Buttons\n\nIcon buttons are commonly found in app bars and toolbars.\n\nIcons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.\n\n{{\"demo\": \"pages/components/buttons/IconButtons.js\"}}\n\n## Customized buttons\n\nAqui estão alguns exemplos de customização do componente. Você pode aprender mais sobre isso na [página de documentação de sobrescritas](/customization/components/).\n\n{{\"demo\": \"pages/components/buttons/CustomizedButtons.js\", \"defaultCodeOpen\": false}}\n\n👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/button).\n\n## Complex Buttons\n\nThe Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the `ButtonBase`. You can take advantage of this lower level component to build custom interactions.\n\n{{\"demo\": \"pages/components/buttons/ButtonBase.js\"}}\n\n## Biblioteca de roteamento de terceiros\n\nOne common use case is to use the button to trigger navigation to a new page. The `ButtonBase` component provides a property to handle this use case: `component`. However for certain focus polyfills `ButtonBase` requires the DOM node of the provided component. This is achieved by attaching a ref to the component and expecting that the component forwards this ref to the underlying DOM node. Given that many of the interactive components rely on `ButtonBase`, you should be able to take advantage of it everywhere.\n\nHere is an [integration example with react-router](/guides/composition/#button).\n\n## Limitações\n\n### Cursor not-allowed\n\nThe ButtonBase component sets `pointer-events: none;` on disabled buttons, which prevents the appearance of a disabled cursor.\n\nIf you wish to use `not-allowed`, you have two options:\n\n1. ** apenas CSS**. Você pode remover o estilo dos eventos do ponteiro no estado \"desabilitado\" do elemento `<button>` :\n\n  ```css\n  .MuiButtonBase-root:disabled {\n    cursor: not-allowed;\n    pointer-events: auto;\n  }\n  ```\n\nContudo:\n\n- Você deve adicionar `eventos-ponteiro: nenhum;` novamente quando você precisa exibir dicas [ ferramentas em elementos desabilitados](/components/tooltips/#disabled-elements)</li> \n    \n    - O cursor não muda se você renderizar algum outro elemento de botão, por exemplo, um elemento link `<a>`.</ul> \n    \n    2. ** Alteração no DOM** Você pode encapsular o botão:\n    \n      ```jsx\n      <span style={{ cursor: 'not-allowed' }}>\n        <Button component={Link} disabled>\n          disabled\n        </Button>\n      </span>\n      ```\n    \n    This has the advantage of supporting any element, for instance, a link `<a>` element."