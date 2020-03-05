module.exports = "---\ntitle: Hidden React component\ncomponents: Hidden\n---\n\n# Hidden\n\n<p class=\"description\">Quickly and responsively toggle the visibility value of components and more with the hidden utilities.</p>\n\nAll elements are visible unless **they are explicitly hidden**.\nTo ease integration with Material-UI's [responsive breakpoints](/customization/breakpoints/),\nthis component can be used to hide any content,\nor you can use it in conjunction with the [`Grid`](/components/grid/) component.\n\n## How it works\n\nHidden works with a range of breakpoints e.g. `xsUp` or `mdDown`, or one or more breakpoints e.g. `only='sm'` or `only={['md', 'xl']}`.\nRanges and individual breakpoints can be used simultaneously to achieve very customized behavior.\nThe ranges are inclusive of the specified breakpoints.\n\n```js\ninnerWidth  |xs      sm       md       lg       xl\n            |--------|--------|--------|--------|-------->\nwidth       |   xs   |   sm   |   md   |   lg   |   xl\n\nsmUp        |   show | hide\nmdDown      |                     hide | show\n\n```\n\n## Implementations\n\n### js\n\nBy default, the `js` implementation is used, responsively hiding content based on using the [`withWidth()`](/customization/breakpoints/#withwidth) higher-order component that watches screen size.\nThis has the benefit of not rendering any content at all unless the breakpoint is met.\n\n### css\n\nIf you are using server-side rendering, you can set `implementation=\"css\"` if you don't want the browser to re-flow your content on the screen.\n\n## Breakpoint up\n\nUsing any breakpoint `up` property, the given *children* will be hidden *at or above* the breakpoint.\n\n{{\"demo\": \"pages/components/hidden/BreakpointUp.js\", \"bg\": true}}\n\n## Breakpoint down\n\nUsing any breakpoint `down` property, the given *children* will be hidden *at or below* the breakpoint.\n\n{{\"demo\": \"pages/components/hidden/BreakpointDown.js\", \"bg\": true}}\n\n## Breakpoint only\n\nUsing the breakpoint `only` property, the given *children* will be hidden *at* the specified breakpoint(s).\n\nThe `only` property can be used in two ways:\n\n- list a single breakpoint\n- list an array of breakpoints\n\n{{\"demo\": \"pages/components/hidden/BreakpointOnly.js\", \"bg\": true}}\n\n## Integration with Grid\n\nIt is quite common to alter `Grid` at different responsive breakpoints, and in many cases, you want to hide some of those elements.\n\n{{\"demo\": \"pages/components/hidden/GridIntegration.js\", \"bg\": true}}\n"