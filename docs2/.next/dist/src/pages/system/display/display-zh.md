module.exports = "# 显示\n\n<p class=\"description\">Quickly and responsively toggle the display value of components and more with the display utilities. 包括对一些更常见值的支持，以及一些用于在打印时控制显示的附加功能。</p>\n\n## 例子\n\n### Inline\n\n{{\"demo\": \"pages/system/display/Inline.js\", \"defaultCodeOpen\": false, \"bg\": true}}\n\n```jsx\n<Box component=\"div\" display=\"inline\">inline</Box>\n<Box component=\"div\" display=\"inline\">inline</Box>\n```\n\n### Block\n\n{{\"demo\": \"pages/system/display/Block.js\", \"defaultCodeOpen\": false, \"bg\": true}}\n\n```jsx\n<Box component=\"span\" display=\"block\">block</Box>\n<Box component=\"span\" display=\"block\">block</Box>\n```\n\n## 隐藏元素\n\n为了更快地进行移动设备开发，请使用响应式显示类来按设备显示和隐藏元素。 避免创建相同站点的完全不同版本，而是相应地为每个屏幕大小隐藏元素。\n\n| 屏幕大小     | 类别                                                   |\n|:-------- |:---------------------------------------------------- |\n| 隐藏在所有人身上 | `display=\"none\"`                                     |\n| 仅隐藏在xs上  | `display={{ xs: 'none', sm: 'block' }}`              |\n| 隐藏在sm上   | `display={{ xs: 'block', sm: 'none', md: 'block' }}` |\n| 只在md上隐藏  | `display={{ xs: 'block', md: 'none', lg: 'block' }}` |\n| 隐藏在lg上   | `display={{ xs: 'block', lg: 'none', xl: 'block' }}` |\n| 只在xl上隐藏  | `display={{ xs: 'block', xl: 'none' }}`              |\n| 仅在xs上可见  | `display={{ xs: 'block', sm: 'none' }}`              |\n| 仅在sm上可见  | `display={{ xs: 'none', sm: 'block', md: 'none' }}`  |\n| 仅在md上可见  | `display={{ xs: 'none', md: 'block', lg: 'none' }}`  |\n| 仅在lg上可见  | `display={{ xs: 'none', lg: 'block', xl: 'none' }}`  |\n| 仅在xl上可见  | `display={{ xs: 'none', xl: 'block' }}`              |\n\n\n{{\"demo\": \"pages/system/display/Hiding.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box display={{ xs: 'block', md: 'none' }}>\n  隐藏在比md宽的屏幕上\n</Box>\n<Box display={{ xs: 'none', md: 'block' }}>\n  隐藏在小于md屏幕上\n</Box>\n```\n\n## 显示在打印中\n\n{{\"demo\": \"pages/system/display/Print.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box display=\"block\" displayPrint=\"none\">\n  Screen Only (Hide on print only)\n</Box>\n<Box display=\"none\" displayPrint=\"block\">\n  Print Only (Hide on screen only)\n</Box>\n```\n\n## Overflow\n\n{{\"demo\": \"pages/system/display/Overflow.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box component=\"div\" overflow=\"hidden\">\n  Overflow Hidden\n</Box>\n<Box component=\"div\" overflow=\"visible\">\n  Overflow visible\n</Box>\n```\n\n## Text Overflow\n\n{{\"demo\": \"pages/system/display/TextOverflow.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box component=\"div\" textOverflow=\"clip\">\n  Text Overflow Clip\n</Box>\n<Box component=\"div\" textOverflow=\"ellipsis\">\n  Text Overflow Ellipsis\n</Box>\n```\n\n## Visibility\n\n{{\"demo\": \"pages/system/display/Visibility.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box component=\"div\" visibility=\"visible\">\n  Visibility Visible\n</Box>\n<Box component=\"div\" visibility=\"hidden\">\n  Visibility Hidden\n</Box>\n```\n\n## White Space\n\n{{\"demo\": \"pages/system/display/WhiteSpace.js\", \"defaultCodeOpen\": false}}\n\n```jsx\n<Box component=\"div\" whiteSpace=\"nowrap\">\n  White Space Nowrap\n</Box>\n<Box component=\"div\" whiteSpace=\"normal\">\n  White Space Normal\n</Box>\n```\n\n## API\n\n```js\nimport { display } from '@material-ui/system';\n```\n\n| 导入名称           | Prop           | CSS 属性          | Theme key |\n|:-------------- |:-------------- |:--------------- |:--------- |\n| `displayPrint` | `displayPrint` | `display`       | none      |\n| `displayRaw`   | `display`      | `display`       | none      |\n| `overflow`     | `overflow`     | `overflow`      | none      |\n| `textOverflow` | `textOverflow` | `text-overflow` | none      |\n| `visibility`   | `visibility`   | `visibility`    | none      |\n| `whiteSpace`   | `whiteSpace`   | `white-space`   | none      |"