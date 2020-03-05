module.exports = "# Densidade\n\n<p class=\"description\">Como aplicar densidade aos componentes de Material-UI.</p>\n\n## Aplicando densidade\n\nEsta seção explica como aplicar a densidade. Ela não cobre casos de uso potenciais ou considerações sobre o uso de densidade em seu aplicativo. As diretrizes de Material design tem um [abrangente guia](https://material.io/design/layout/applying-density.html#typographic-density) cobrindo estes tópicos com mais detalhes.\n\n## Implementando densidade\n\nUma densidade mais alta pode ser aplicada a alguns componentes via propriedades. As páginas de componentes têm pelo menos um exemplo usando o respectivo componente com densidade mais alta aplicada.\n\nDependendo do componente, a densidade é aplicada por meio de espaçamento menor ou simplesmente reduzindo o tamanho.\n\nOs seguintes componentes possuem propriedades que aplicam maior densidade:\n\n- [Button](/api/button/)\n- [Fab](/api/fab/)\n- [FilledInput](/api/filled-input/)\n- [FormControl](/api/form-control/)\n- [FormHelperText](/api/form-helper-text/)\n- [IconButton](/api/icon-button/)\n- [InputBase](/api/input-base/)\n- [InputLabel](/api/input-label/)\n- [ListItem](/api/list-item/)\n- [OutlinedInput](/api/outlined-input/)\n- [Table](/api/table/)\n- [TextField](/api/text-field/)\n- [Toolbar](/api/toolbar/)\n\n## Explore a densidade do tema\n\nEsta ferramenta permite aplicar densidade via espaçamento e propriedades de componentes. Você pode navegar e ver como isso se aplica à sensação geral dos componentes do Material-UI.\n\nSe você ativar alta densidade, um tema personalizado será aplicado a documentação. Este tema é apenas para fins de demonstração. Você *não deve* aplicar este tema para todo o seu aplicativo, isso pode impactar negativamente a experiência do usuário. As [diretrizes de Material design](https://material.io/design/layout/applying-density.html#typographic-density) tem exemplos para quando não aplicar densidade.\n\nO tema é configurado com as seguintes opções:\n\n```js\nconst theme = createMuiTheme({\n  props: {\n    MuiButton: {\n      size: 'small',\n    },\n    MuiFilledInput: {\n      margin: 'dense',\n    },\n    MuiFormControl: {\n      margin: 'dense',\n    },\n    MuiFormHelperText: {\n      margin: 'dense',\n    },\n    MuiIconButton: {\n      size: 'small',\n    },\n    MuiInputBase: {\n      margin: 'dense',\n    },\n    MuiInputLabel: {\n      margin: 'dense',\n    },\n    MuiListItem: {\n      dense: true,\n    },\n    MuiOutlinedInput: {\n      margin: 'dense',\n    },\n    MuiFab: {\n      size: 'small',\n    },\n    MuiTable: {\n      size: 'small',\n    },\n    MuiTextField: {\n      margin: 'dense',\n    },\n    MuiToolbar: {\n      variant: 'dense',\n    },\n  },\n  overrides: {\n    MuiIconButton: {\n      sizeSmall: {\n        // Ajusta o espaçamento para atingir o mínimo de toque\n        marginLeft: 4,\n        marginRight: 4,\n        padding: 12,\n      },\n    },\n  },\n});\n```\n\n{{\"demo\": \"pages/customization/density/DensityTool.js\", \"hideHeader\": true}}"