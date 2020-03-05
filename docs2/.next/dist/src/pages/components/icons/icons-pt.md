module.exports = "---\ntitle: Componente React para Ícones\ncomponents: Icon, SvgIcon\n---\n\n# Ícones\n\n<p class=\"description\">Orientação e sugestões para usar ícones com o Material-UI.</p>\n\nMaterial-UI fornece suporte de ícones de três maneiras:\n\n1. Ícones padronizados [Material Design](#material-icons) exportados como componentes do React (ícones SVG).\n1. Com o componente [SvgIcon](#svgicon), um wrapper React para ícones SVG personalizados.\n1. Com o componente [Icon](#icon-font-icons), um wrapper React para ícones de fonte personalizados.\n\n## Ícones Material\n\nMaterial Design has standardized over 1,100 official icons, each in five different \"themes\" (see below). Para cada ícone SVG, exportamos o respectivo componente React do pacote @material-ui/icons. You can [search the full list of these icons](/components/material-icons/).\n\n### Utilização\n\nInstale `@material-ui/icons`. Importe ícones usando uma destas duas opções:\n\n- Opção 1:\n\n  ```jsx\n  import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';\n  import ThreeDRotation from '@material-ui/icons/ThreeDRotation';\n  ```\n\n- Opção 2:\n\n  ```jsx\n  import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';\n  ```\n\nO mais seguro é a Opção 1, mas a Opção 2 pode proporcionar uma melhor experiência para o desenvolvedor. Certifique-se de seguir o guia [minimizando o tamanho do pacote](/guides/minimizing-bundle-size/#option-2) antes de usar a segunda abordagem. A configuração de um plugin Babel é recomendada.\n\nEach icon also has a \"theme\": Filled (default), Outlined, Rounded, Two tone and Sharp. If you want to import the icon component with a theme other than default, append the theme name to the icon name. Por exemplo, para usar o ícone `@material-ui/icons/Delete`, temos:\n\n- Filled theme (default) is exported as `@material-ui/icons/Delete`,\n- Outlined theme is exported as `@material-ui/icons/DeleteOutlined`,\n- Rounded theme is exported as `@material-ui/icons/DeleteRounded`,\n- Twotone theme is exported as `@material-ui/icons/DeleteTwoTone`,\n- Sharp theme is exported as `@material-ui/icons/DeleteSharp`.\n\n> Nota: A especificação Material Design nomeia os ícones usando a nomeação \"snake_case\" (por exemplo, `delete_forever`, `add_a_photo`), enquanto `@material-ui/icons` exporta os respectivos ícones usando a nomeação \"PascalCase\" (por exemplo `DeleteForever`, `AddAPhoto`). Há três exceções a essa regra de nomenclatura: `3d_rotation` exportado como `ThreeDRotation`, `4k` exportado como `FourK`e `360` exportado como `ThreeSixty`.\n\n{{\"demo\": \"pages/components/icons/SvgMaterialIcons.js\"}}\n\n## Ícones SVG\n\nIf you need a custom SVG icon (not available in the Material Icons [default set](/components/material-icons/)) you can use the `SvgIcon` wrapper. This component extends the native `<svg>` element:\n\n- It comes with built-in accessibility.\n- SVG elements should be scaled for a 24x24px viewport, so the resulting icon can be used as is, or included as a child for other Material-UI components that use icons. (This can be customized with the `viewBox` attribute).\n- By default, the component inherits the current color. Optionally, you can apply one of the theme colors using the `color` prop.\n\n```jsx\nfunction HomeIcon(props) {\n  return (\n    <SvgIcon {...props}>\n      <path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\" />\n    </SvgIcon>\n  );\n}\n```\n\n### Cor\n\n{{\"demo\": \"pages/components/icons/SvgIconsColor.js\"}}\n\n### Size\n\n{{\"demo\": \"pages/components/icons/SvgIconsSize.js\"}}\n\n### Propriedade Componente\n\nYou can use the `SvgIcon` wrapper even if your icons are saved the `.svg` format. [svgr](https://github.com/smooth-code/svgr) has loaders to import svg files and use them as React components. For instance, with webpack:\n\n**webpack.config.js**\n```js\n{\n  test: /\\.svg$/,\n  use: ['@svgr/webpack'],\n}\n```\n\n```jsx\nimport StarIcon from './star.svg';\n\n<SvgIcon component={StarIcon} viewBox=\"0 0 600 476.6\" />\n```\n\n### Bibliotecas\n\n#### Material Design (recomendado)\n\nMaterial Design has standardized over [1,100 official icons](#material-icons).\n\n#### MDI\n\n[materialdesignicons.com](https://materialdesignicons.com/) fornece mais de 2.000 ícones. Para o ícone desejado, copie o `path` do SVG que eles fornecem e use-o como filho do componente `SvgIcon`.\n\nNota: [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) já agrupou cada um desses ícones SVG com o componente `SvgIcon`, para que você não precise fazer isso.\n\n## Ícone (ícones de fonte)\n\nO componente `Icon` exibirá um ícone de qualquer fonte de ícone que suporte ligadura tipográfica (ligatures). Como pré-requisito, você deve incluir a fonte [Material icon](https://google.github.io/material-design-icons/#icon-font-for-the-web) no seu projeto, por exemplo, via Google Web Fonts:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n```\n\n`Icon` definirá o nome correto da classe para a fonte do ícone Material. Para outras fontes, você deve fornecer o nome da classe usando a propriedade `className` do componente ícone.\n\nPara usar um ícone, simplesmente coloque o nome do ícone (font ligature) com o componente `Icon`, por exemplo:\n\n```jsx\nimport Icon from '@material-ui/core/Icon';\n\n<Icon>star</Icon>\n```\n\nPor padrão, um ícone herdará a cor do texto atual. Opcionalmente, você pode definir a cor do ícone usando uma das propriedades de cor do tema: `primary`, `secondary`, `action`, `erro` & `disabled`.\n\n### Fonte Material icons\n\n{{\"demo\": \"pages/components/icons/Icons.js\"}}\n\n### Fonte Awesome\n\n[Fonte Awesome](https://fontawesome.com/icons) pode ser usada com o componente `Icon` da seguinte forma:\n\n{{\"demo\": \"pages/components/icons/FontAwesome.js\", \"hideEditButton\": true}}\n\n## Fonte vs SVG. Qual abordagem usar?\n\nAmbas as abordagens funcionam bem, no entanto, existem algumas diferenças sutis, especialmente em termos de desempenho e qualidade de renderização. Sempre que possível, utlize o SVG, pois permite a divisão do código, suporta mais ícones, renderiza mais rápido e melhor.\n\nPara maiores detalhes, você pode conferir [porque o GitHub migrou ícones de fonte para ícones SVG](https://github.blog/2016-02-22-delivering-octicons-with-svg/).\n\n## Acessibilidade\n\nOs ícones podem transmitir todos os tipos de informações significativas, por isso é importante que eles alcancem a maior quantidade possível de pessoas. Há dois casos de uso que você deve considerar:\n- **Ícones decorativos** estão sendo usados apenas para reforço visual ou de marca. Se eles forem removidos da página, os usuários ainda entenderiam e poderiam usar sua página.\n- **Ícones Semânticos** são aqueles que você usa para transmitir significado, em vez de apenas pura decoração. Isso inclui ícones sem texto ao lado deles utilizados como controles interativos — botões, elementos de forma, toggles, etc.\n\n### Ícones SVG Decorativos\n\nSe seus ícones são puramente decorativos, você já terminou! O atributo `aria-hidden=true` foi adicionado para que seus ícones estejam adequadamente acessíveis (invisíveis).\n\n### Ícones SVG Semânticos\n\nSe o seu ícone tiver significado semântico, tudo o que você precisa fazer é configurar a propriedade `titleAccess=\"significado\"`. O atributo `role=\"img\"` e o elemento `<title>` foram adicionados para que seus ícones sejam acessados corretamente.\n\nNo caso de elementos interativos focalizáveis, como quando usado com um botão de ícone, você pode usar a propriedade `aria-label`:\n\n```jsx\nimport IconButton from '@material-ui/core/IconButton';\nimport SvgIcon from '@material-ui/core/SvgIcon';\n\n// ...\n\n<IconButton aria-label=\"deletar\">\n  <SvgIcon>\n    <path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\" />\n  </SvgIcon>\n</IconButton>\n```\n\n### Ícones de Fonte Decorativos\n\nSe seus ícones são puramente decorativos, você já terminou! O atributo `aria-hidden=true` foi adicionado para que seus ícones estejam adequadamente acessíveis (invisíveis).\n\n### Ícones de Fonte Semânticos\n\nSe os seus ícones tiverem significado semântico, você precisará fornecer uma alternativa em texto visível apenas para tecnologias visuais.\n\n```jsx\nimport Icon from '@material-ui/core/Icon';\nimport Typography from '@material-ui/core/Typography';\n\n// ...\n\n<Icon>add_circle</Icon>\n<Typography variant=\"srOnly\">Crie um usuário</Typography>\n```\n\n### Referência\n\n- https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\n"