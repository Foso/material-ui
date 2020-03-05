module.exports = "---\ntitle: React Icon Component\ncomponents: Icon, SvgIcon\n---\n\n# Icons\n\n<p class=\"description\">Guidance and suggestions for using icons with Material-UI.</p>\n\nMaterial-UI provides icons support in three ways:\n\n1. Standardized [Material Design icons](#material-icons) exported as React components (SVG icons).\n1. With the [SvgIcon](#svgicon) component, a React wrapper for custom SVG icons.\n1. With the [Icon](#icon-font-icons) component, a React wrapper for custom font icons.\n\n## Material Icons\n\nMaterial Design has standardized over 1,100 official icons, each in five different \"themes\" (see below). For each SVG icon, we export the respective React component from the @material-ui/icons package. You can [search the full list of these icons](/components/material-icons/).\n\n### Usage\n\nInstall `@material-ui/icons`. Import icons using one of these two options:\n\n- Option 1:\n\n  ```jsx\n  import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';\n  import ThreeDRotation from '@material-ui/icons/ThreeDRotation';\n  ```\n\n- Option 2:\n\n  ```jsx\n  import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';\n  ```\n\nThe safest is Option 1 but Option 2 can yield the best developer experience.\nMake sure you follow the [minimizing bundle size guide](/guides/minimizing-bundle-size/#option-2) before using the second approach.\nThe configuration of a Babel plugin is encouraged.\n\nEach icon also has a \"theme\": Filled (default), Outlined, Rounded, Two tone and Sharp. If you want to import the icon component with a theme other than default, append the theme name to the icon name. For example `@material-ui/icons/Delete` icon with:\n\n- Filled theme (default) is exported as `@material-ui/icons/Delete`,\n- Outlined theme is exported as `@material-ui/icons/DeleteOutlined`,\n- Rounded theme is exported as `@material-ui/icons/DeleteRounded`,\n- Twotone theme is exported as `@material-ui/icons/DeleteTwoTone`,\n- Sharp theme is exported as `@material-ui/icons/DeleteSharp`.\n\n> Note: The Material Design specification names the icons using \"snake_case\" naming (for example `delete_forever`, `add_a_photo`), while `@material-ui/icons` exports the respective icons using \"PascalCase\" naming (for example `DeleteForever`, `AddAPhoto`). There are three exceptions to this naming rule: `3d_rotation` exported as `ThreeDRotation`, `4k` exported as `FourK`, and `360` exported as `ThreeSixty`.\n\n{{\"demo\": \"pages/components/icons/SvgMaterialIcons.js\"}}\n\n## SvgIcon\n\nIf you need a custom SVG icon (not available in the Material Icons [default set](/components/material-icons/)) you can use the `SvgIcon` wrapper.\nThis component extends the native `<svg>` element:\n\n- It comes with built-in accessibility.\n- SVG elements should be scaled for a 24x24px viewport, so the resulting icon can be used as is, or included as a child for other Material-UI components that use icons. (This can be customized with the `viewBox` attribute).\n- By default, the component inherits the current color.\nOptionally, you can apply one of the theme colors using the `color` prop.\n\n```jsx\nfunction HomeIcon(props) {\n  return (\n    <SvgIcon {...props}>\n      <path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\" />\n    </SvgIcon>\n  );\n}\n```\n\n### Color\n\n{{\"demo\": \"pages/components/icons/SvgIconsColor.js\"}}\n\n### Size\n\n{{\"demo\": \"pages/components/icons/SvgIconsSize.js\"}}\n\n### Component prop\n\nYou can use the `SvgIcon` wrapper even if your icons are saved the `.svg` format.\n[svgr](https://github.com/smooth-code/svgr) has loaders to import svg files and use them as React components. For instance, with webpack:\n\n**webpack.config.js**\n```js\n{\n  test: /\\.svg$/,\n  use: ['@svgr/webpack'],\n}\n```\n\n```jsx\nimport StarIcon from './star.svg';\n\n<SvgIcon component={StarIcon} viewBox=\"0 0 600 476.6\" />\n```\n\n### Libraries\n\n#### Material Design (recommended)\n\nMaterial Design has standardized over [1,100 official icons](#material-icons).\n\n#### MDI\n\n[materialdesignicons.com](https://materialdesignicons.com/) provides over 2,000 icons.\nFor the wanted icon, copy the SVG `path` they provide, and use it as the child of the `SvgIcon` component.\n\nNote: [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) has already wrapped each of these SVG icons with the `SvgIcon` component, so you don't have to do it yourself.\n\n## Icon (Font icons)\n\nThe `Icon` component will display an icon from any icon font that supports ligatures.\nAs a prerequisite, you must include one, such as the\n[Material icon font](https://google.github.io/material-design-icons/#icon-font-for-the-web) in your project, for instance, via Google Web Fonts:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n```\n\n`Icon` will set the correct class name for the Material icon font. For other fonts, you must supply the\nclass name using the Icon component's `className` property.\n\nTo use an icon simply wrap the icon name (font ligature) with the `Icon` component,\nfor example:\n\n```jsx\nimport Icon from '@material-ui/core/Icon';\n\n<Icon>star</Icon>\n```\n\nBy default, an Icon will inherit the current text color.\nOptionally, you can set the icon color using one of the theme color properties: `primary`, `secondary`, `action`, `error` & `disabled`.\n\n### Font Material icons\n\n{{\"demo\": \"pages/components/icons/Icons.js\"}}\n\n### Font Awesome\n\n[Font Awesome](https://fontawesome.com/icons) can be used with the `Icon` component as follow:\n\n{{\"demo\": \"pages/components/icons/FontAwesome.js\", \"hideEditButton\": true}}\n\n## Font vs SVG. Which approach to use?\n\nBoth approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality.\nWhenever possible SVG is preferred as it allows code splitting, supports more icons, renders faster and better.\n\nFor more details, you can check out [why GitHub migrated from font icons to SVG icons](https://github.blog/2016-02-22-delivering-octicons-with-svg/).\n\n## Accessibility\n\nIcons can convey all sorts of meaningful information, so it’s important that they reach the largest amount of people possible.\nThere are two use cases you’ll want to consider:\n- **Decorative Icons** are only being used for visual or branding reinforcement.\nIf they were removed from the page, users would still understand and be able to use your page.\n- **Semantic Icons** are ones that you’re using to convey meaning, rather than just pure decoration.\nThis includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.\n\n### Decorative SVG Icons\n\nIf your icons are purely decorative, you’re already done!\nThe `aria-hidden=true` attribute is added so that your icons are properly accessible (invisible).\n\n### Semantic SVG Icons\n\nIf your icon has semantic meaning, all you need to do is throw in a `titleAccess=\"meaning\"` property.\nThe `role=\"img\"` attribute and the `<title>` element are added so that your icons are properly accessible.\n\nIn the case of focusable interactive elements, like when used with an icon button, you can use the `aria-label` property:\n\n```jsx\nimport IconButton from '@material-ui/core/IconButton';\nimport SvgIcon from '@material-ui/core/SvgIcon';\n\n// ...\n\n<IconButton aria-label=\"delete\">\n  <SvgIcon>\n    <path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\" />\n  </SvgIcon>\n</IconButton>\n```\n\n### Decorative Font Icons\n\nIf your icons are purely decorative, you’re already done!\nThe `aria-hidden=true` attribute is added so that your icons are properly accessible (invisible).\n\n### Semantic Font Icons\n\nIf your icons have semantic meaning, you need to provide a text alternative only visible to assistive technologies.\n\n```jsx\nimport Icon from '@material-ui/core/Icon';\nimport Typography from '@material-ui/core/Typography';\n\n// ...\n\n<Icon>add_circle</Icon>\n<Typography variant=\"srOnly\">Create a user</Typography>\n```\n\n### Reference\n\n- https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\n"