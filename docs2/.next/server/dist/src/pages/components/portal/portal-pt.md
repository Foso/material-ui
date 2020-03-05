module.exports = "---\ntitle: Componente React Portal\ncomponents: Portal\n---\n\n# Portal\n\n<p class=\"description\">O componente portal renderiza seu filho em uma nova sub-árvore fora da hierarquia do componente atual.</p>\n\n- 📦 [1.3 kB gzipado](/size-snapshot)\n\nO filho do componente portal será adicionado ao `container` especificado. O componente é usado internamente pelos componentes [`Modal`](/components/modal/) e [`Popper`](/components/popper/).\n\n## Exemplo\n\n{{\"demo\": \"pages/components/portal/SimplePortal.js\"}}\n\n## Server-side\n\nReact [não suporta](https://github.com/facebook/react/issues/13097) a API [`createPortal()`](https://reactjs.org/docs/portals.html) no servidor. Você deve esperar pelo lado do cliente fazer a hidratação para ver o filho."