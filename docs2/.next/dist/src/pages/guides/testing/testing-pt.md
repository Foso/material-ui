module.exports = "# Testando\n\n<p class=\"description\">Escreva testes para evitar regressões e ter uma boa qualidade de código.</p>\n\nExemplos neste guia usam [métodos globais do Mocha](https://mochajs.org/api/global.html), ao invés do [Jest](https://jestjs.io/docs/en/api).\n\n## Interno\n\nMaterial-UI has **a wide range** of tests so we can iterate with confidence on the components, for instance, the visual regression tests provided by [Argos-CI](https://www.argos-ci.com/Foso/material-ui) have proven to be really helpful. To learn more about the internal tests, you can have a look at the [README](https://github.com/Foso/material-ui/blob/master/test/README.md).\n\n## Espaço do usuário\n\nQue tal escrever testes no espaço do usuário? A infraestrutura de estilos do Material-UI usa algumas funções auxiliares construídas sobre o [enzyme](https://github.com/airbnb/enzyme) para facilitar o processo, ao qual estamos expondo. Você pode aproveitá-los, se assim preferir. Usamos APIs de processamento de DOM quase que totalmente completas. Nós encorajamos você a fazer o mesmo, especialmente, se seus componentes dependem de temas personalizados. Testes usando APIs de renderização rasas tornam-se mais frágeis com a quantidade de componentes que necessitam.\n\n### Renderização completa do DOM (Full)\n\nA renderização total do DOM é ideal para casos em que você tem componentes que podem interagir com as APIs do DOM, ou podem exigir o ciclo de vida completo para testar completamente o componente (por exemplo, `componentDidMount` etc).\n\nA função `createMount ()` é fornecida para esta situação. Além de envolver enzyme API, ela fornece uma função chamada `cleanUp`.\n\n### Renderização Rasa (Shallow)\n\nA renderização rasa é útil para restringir seu teste a um componente como uma unidade. Isso também garante que seus testes não estão adquirindo indiretamente o comportamento de componentes filhos. A renderização rasa foi criada para testar componentes isoladamente. Isso significa sem vazar detalhes de implementação de filhos, como o contexto.\n\nA função `createShallow()` pode ser utilizada para esta situação. Além de encapsular a API do enzyme, ela fornece uma opção `dive` e `untilSelector`.\n\n### Renderizar para string\n\nRenderizar em uma string é útil para testar o comportamento dos componentes usados no servidor. Você pode aproveitar isso para confirmar a sequência HTML gerada.\n\nA função `createRender()` é ideal para isso. Isso é apenas um alias para enzyme API, que é apenas exposta para consistência.\n\n## API\n\n### `createMount([options]) => mount`\n\nGere uma função de montagem aprimorada com o contexto necessário. Por favor, consulte [a documentação da API enzyme ](https://airbnb.io/enzyme/docs/api/mount.html) para mais detalhes sobre a função `mount`.\n\n#### Argumentos\n\n1. `options` (*Object* [opcional]) \n  - `options.mount` (*Function* [opcional]): A função de montagem para melhorar, usa **enzyme por padrão**.\n  - As outras chaves são encaminhadas para o argumento de opções de `enzyme.mount()`.\n\n#### Retornos\n\n`mount` (*mount*): A função mount.\n\n#### Exemplos\n\n```jsx\nimport { createMount } from '@material-ui/core/test-utils';\nimport { ThemeProvider } from '@material-ui/core/styles';\n\ndescribe('<MyComponent />', () => {\n  let mount;\n\n  function MySuccessButton({ children }) {\n    return (\n      <ThemeProvider theme={{ success: { main: '#fff' } }}>\n        {children}\n      </ThemeProvider>\n    );\n  }\n\n  before(() => {\n    mount = createMount();\n  });\n\n  after(() => {\n    mount.cleanUp();\n  });\n\n  it('should work', () => {\n    const wrapper = mount(<MockedTheme><MySuccessButton /></MockedTheme>);\n  });\n});\n```\n\n### `createShallow([options]) => shallow`\n\nGere uma função superficial aprimorada com o contexto necessário. Por favor, consulte [a documentação da API enzyme ](https://airbnb.io/enzyme/docs/api/shallow.html) para mais detalhes sobre a função `shallow`.\n\n#### Argumentos\n\n1. `options` (*Object* [opcional]) \n  - `options.shallow` (*Function* [opcional]): A função superficial para melhorar, usa **enzyme por padrão**.\n  - `options.untilSelector` (*String* [opcional]): Recursivamente, renderiza superficialmente o componente children até encontrar o seletor fornecido. É útil para detalhar os componentes de ordem mais alta.\n  - `options.dive` (*Boolean* [opcional]): A função superficial renderiza o filho não-DOM do wrapper atual e retorna um wrapper em torno do resultado.\n  - As outras chaves são encaminhadas para o argumento de opções de `enzyme.shallow()`.\n\n#### Retornos\n\n`shallow` (*shallow*): A função shallow.\n\n#### Exemplos\n\n```jsx\nimport { createShallow } from '@material-ui/core/test-utils';\n\ndescribe('<MyComponent />', () => {\n  let shallow;\n\n  before(() => {  // Isto é Mocha; em Jest, use beforeAll\n    shallow = createShallow();\n  });\n\n  it('deve funcionar', () => {\n    const wrapper = shallow(<MyComponent />);\n  });\n});\n```\n\n### `createRender([options]) => render`\n\nGere uma função de render para string com o contexto necessário. Por favor, consulte [a documentação da API enzyme ](https://airbnb.io/enzyme/docs/api/render.html) para mais detalhes sobre a função `render`.\n\n#### Argumentos\n\n1. `options` (*Object* [opcional]) \n  - `options.render` (*Function* [opcional]): A função de renderização para melhorar, usa **enzyme por padrão**.\n  - As outras chaves são encaminhadas para o argumento de opções de `enzyme.render()`.\n\n#### Retornos\n\n`render` (*Function*): Uma função render para string.\n\n#### Exemplos\n\n```jsx\nimport { createRender } from '@material-ui/core/test-utils';\n\ndescribe('<MyComponent />', () => {\n  let render;\n\n  before(() => {\n    render = createRender();\n  });\n\n  it('deve funionar', () => {\n    const wrapper = render(<MyComponent />);\n  });\n});\n```\n"