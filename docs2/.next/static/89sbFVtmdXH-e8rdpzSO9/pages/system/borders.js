(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{"+Ezf":function(r,e){r.exports='# \u0413\u0440\u0430\u043d\u0438\u0446\u044b\n\n<p class="description">\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 border \u0438 border-radius \u0434\u043b\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043a\u043d\u043e\u043f\u043e\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.</p>\n\n## Border\n\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0433\u0440\u0430\u043d\u0438\u0446. \u041c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0442\u0430\u043a \u0438 \u043a\u0430\u0436\u0434\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.\n\n### \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### \u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## \u0426\u0432\u0435\u0442 \u0433\u0440\u0430\u043d\u0438\u0446\u044b\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| \u0418\u043c\u043f\u043e\u0440\u0442         | \u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e       | \u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e CSS    | \u0412 \u0442\u0435\u043c\u0435                                                           |\n|:-------------- |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`       | `border`       | `border`        | `borders`                                                        |\n| `borderTop`    | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`   | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`  | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom` | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`  | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius` | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},"1ZOt":function(r,e){r.exports="import React from 'react';\nimport Box from '@material-ui/core/Box';\n\nconst defaultProps = {\n  bgcolor: 'background.paper',\n  border: 1,\n  m: 1,\n  borderColor: 'text.primary',\n  style: { width: '5rem', height: '5rem' },\n};\n\nexport default function BorderSubtractive() {\n  return (\n    <Box display=\"flex\" justifyContent=\"center\">\n      <Box {...defaultProps} border={0} />\n      <Box {...defaultProps} borderTop={0} />\n      <Box {...defaultProps} borderRight={0} />\n      <Box {...defaultProps} borderBottom={0} />\n      <Box {...defaultProps} borderLeft={0} />\n    </Box>\n  );\n}\n"},"2tDB":function(r,e){r.exports='import React from \'react\';\nimport Box from \'@material-ui/core/Box\';\n\nconst defaultProps = {\n  bgcolor: \'background.paper\',\n  m: 1,\n  border: 1,\n  style: { width: \'5rem\', height: \'5rem\' },\n};\n\nexport default function BorderColor() {\n  return (\n    <Box display="flex" justifyContent="center">\n      <Box borderColor="primary.main" {...defaultProps} />\n      <Box borderColor="secondary.main" {...defaultProps} />\n      <Box borderColor="error.main" {...defaultProps} />\n      <Box borderColor="grey.500" {...defaultProps} />\n      <Box borderColor="text.primary" {...defaultProps} />\n    </Box>\n  );\n}\n'},"48dA":function(r,e){r.exports="import React from 'react';\nimport Box from '@material-ui/core/Box';\n\nconst defaultProps = {\n  bgcolor: 'background.paper',\n  m: 1,\n  style: { width: '5rem', height: '5rem' },\n  borderColor: 'text.primary',\n};\n\nexport default function BorderAdditive() {\n  return (\n    <Box display=\"flex\" justifyContent=\"center\">\n      <Box border={1} {...defaultProps} />\n      <Box borderTop={1} {...defaultProps} />\n      <Box borderRight={1} {...defaultProps} />\n      <Box borderBottom={1} {...defaultProps} />\n      <Box borderLeft={1} {...defaultProps} />\n    </Box>\n  );\n}\n"},"5N11":function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",border:1,m:1,borderColor:"text.primary",style:{width:"5rem",height:"5rem"}};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({},b,{border:0})),a(s.a,Object(n.a)({},b,{borderTop:0})),a(s.a,Object(n.a)({},b,{borderRight:0})),a(s.a,Object(n.a)({},b,{borderBottom:0})),a(s.a,Object(n.a)({},b,{borderLeft:0})))}},"5huB":function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",m:1,border:1,style:{width:"5rem",height:"5rem"}};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({borderColor:"primary.main"},b)),a(s.a,Object(n.a)({borderColor:"secondary.main"},b)),a(s.a,Object(n.a)({borderColor:"error.main"},b)),a(s.a,Object(n.a)({borderColor:"grey.500"},b)),a(s.a,Object(n.a)({borderColor:"text.primary"},b)))}},"9NBT":function(r,e){r.exports='# \u8fb9\u8ddd\n\n<p class="description">\u4f7f\u7528\u8fb9\u6846\u5b9e\u7528\u7a0b\u5e8f\u5feb\u901f\u8bbe\u7f6e\u5143\u7d20\u7684\u8fb9\u6846\u548c\u8fb9\u6846\u534a\u5f84\u7684\u6837\u5f0f\u3002 \u975e\u5e38\u9002\u5408\u56fe\u50cf\uff0c\u6309\u94ae\u6216\u4efb\u4f55\u5176\u4ed6\u5143\u7d20\u3002</p>\n\n## \u63cf\u8fb9\n\n\u4f7f\u7528\u8fb9\u6846\u5b9e\u7528\u7a0b\u5e8f\u6dfb\u52a0\u6216\u5220\u9664\u5143\u7d20\u7684\u8fb9\u6846\u3002 \u9009\u62e9\u6240\u6709\u8fb9\u6846\u6216\u4e00\u6b21\u4e00\u4e2a\u3002\n\n### \u6dfb\u52a0\u5242\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### \u51cf\u6cd5\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## \u63cf\u8fb9\u989c\u8272\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## \u8fb9\u754c\u534a\u5f84\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| \u5bfc\u5165\u540d\u79f0           | Prop           | CSS \u5c5e\u6027          | Theme key                                                        |\n|:-------------- |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`       | `border`       | `border`        | `borders`                                                        |\n| `borderTop`    | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`   | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`  | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom` | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`  | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius` | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},"A0D/":function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",m:1,style:{width:"5rem",height:"5rem"},borderColor:"text.primary"};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({border:1},b)),a(s.a,Object(n.a)({borderTop:1},b)),a(s.a,Object(n.a)({borderRight:1},b)),a(s.a,Object(n.a)({borderBottom:1},b)),a(s.a,Object(n.a)({borderLeft:1},b)))}},"Bn+L":function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return u}));var n=o("mXGw"),d=o.n(n),t=o("e+1t"),s=d.a.createElement,a=o("OP8B"),b=o("P5vM"),i=s(t.a,{req:a,reqSource:b,reqPrefix:"pages/system/borders"});function u(){return i}},EZhS:function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",border:1,m:1,borderColor:"text.primary",style:{width:"5rem",height:"5rem"}};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({},b,{border:0})),a(s.a,Object(n.a)({},b,{borderTop:0})),a(s.a,Object(n.a)({},b,{borderRight:0})),a(s.a,Object(n.a)({},b,{borderBottom:0})),a(s.a,Object(n.a)({},b,{borderLeft:0})))}},GekL:function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",borderColor:"text.primary",m:1,border:1,style:{width:"5rem",height:"5rem"}};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({borderRadius:"50%"},b)),a(s.a,Object(n.a)({borderRadius:"borderRadius"},b)),a(s.a,Object(n.a)({borderRadius:16},b)))}},Ndwn:function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",m:1,style:{width:"5rem",height:"5rem"},borderColor:"text.primary"};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({border:1},b)),a(s.a,Object(n.a)({borderTop:1},b)),a(s.a,Object(n.a)({borderRight:1},b)),a(s.a,Object(n.a)({borderBottom:1},b)),a(s.a,Object(n.a)({borderLeft:1},b)))}},OP8B:function(r,e,o){var n={"./BorderAdditive.js":"A0D/","./BorderAdditive.tsx":"Ndwn","./BorderColor.js":"5huB","./BorderColor.tsx":"Ouif","./BorderRadius.js":"GekL","./BorderRadius.tsx":"xM1q","./BorderSubtractive.js":"EZhS","./BorderSubtractive.tsx":"5N11","./borders-aa.md":"h6SN","./borders-de.md":"TXEr","./borders-es.md":"ccDA","./borders-fr.md":"h2tW","./borders-ja.md":"VS1n","./borders-pt.md":"XCQo","./borders-ru.md":"+Ezf","./borders-zh.md":"9NBT","./borders.md":"Z1TB"};function d(r){var e=t(r);return o(e)}function t(r){if(!o.o(n,r)){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return n[r]}d.keys=function(){return Object.keys(n)},d.resolve=t,r.exports=d,d.id="OP8B"},Ouif:function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",m:1,border:1,style:{width:"5rem",height:"5rem"}};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({borderColor:"primary.main"},b)),a(s.a,Object(n.a)({borderColor:"secondary.main"},b)),a(s.a,Object(n.a)({borderColor:"error.main"},b)),a(s.a,Object(n.a)({borderColor:"grey.500"},b)),a(s.a,Object(n.a)({borderColor:"text.primary"},b)))}},P5vM:function(r,e,o){var n={"./BorderAdditive.js":"48dA","./BorderAdditive.tsx":"xbLI","./BorderColor.js":"dmA+","./BorderColor.tsx":"2tDB","./BorderRadius.js":"fkuS","./BorderRadius.tsx":"f9k0","./BorderSubtractive.js":"1ZOt","./BorderSubtractive.tsx":"kF6B"};function d(r){var e=t(r);return o(e)}function t(r){if(!o.o(n,r)){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return n[r]}d.keys=function(){return Object.keys(n)},d.resolve=t,r.exports=d,d.id="P5vM"},TXEr:function(r,e){r.exports='# Rahmen\n\n<p class="description">Verwenden Sie die R\xe4nder Werkzeuge, um den Rand und den Randradius eines Elements schnell zu gestalten. Ideal f\xfcr Bilder, Schaltfl\xe4chen oder andere Elemente.</p>\n\n## Rahmen\n\nVerwenden Sie R\xe4nder Werkzeuge, um die R\xe4nder eines Elements hinzuzuf\xfcgen oder zu entfernen. W\xe4hlen Sie aus einzelne oder allen Grenzen aus.\n\n### Zus\xe4tze\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### Subtraktionen\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## Rahmen Farbe\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| Inportname     | Eigenschaften  | CSS-Eigenschaft | Theme-Schl\xfcssel                                                  |\n|:-------------- |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`       | `border`       | `border`        | `borders`                                                        |\n| `borderTop`    | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`   | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`  | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom` | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`  | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius` | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},VS1n:function(r,e){r.exports='# \u30dc\u30fc\u30c0\u30fc\n\n<p class="description">Use border utilities to quickly style the border and border-radius of an element. \u753b\u50cf\u3001\u30dc\u30bf\u30f3\u3001\u305d\u306e\u4ed6\u306e\u8981\u7d20\u306b\u6700\u9069\u3067\u3059\u3002</p>\n\n## Border\n\nUse border utilities to add or remove an element\u2019s borders. Choose from all borders or one at a time.\n\n### Additive\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### Subtractive\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## Border color\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| Import name    | Prop           | CSS property    | Theme key                                                        |\n|:-------------- |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`       | `border`       | `border`        | `borders`                                                        |\n| `borderTop`    | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`   | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`  | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom` | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`  | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius` | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},XCQo:function(r,e){r.exports='# Bordas\n\n<p class="description">Use os utilit\xe1rios de borda para rapidamente estilizar "border" e "border-radius" de um elemento. \xd3timo para imagens, bot\xf5es ou qualquer outro elemento.</p>\n\n## Border\n\nUse os utilit\xe1rios de borda para adicionar ou remover as bordas de um elemento. Escolha para todas as bordas ou separadamente.\n\n### Adicionando\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### Removendo\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## Cor da Borda\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| Nome da importa\xe7\xe3o | Propriedade    | Propriedade CSS | Chave do tema                                                    |\n|:------------------ |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`           | `border`       | `border`        | `borders`                                                        |\n| `borderTop`        | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`       | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`      | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom`     | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`      | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius`     | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},Z1TB:function(r,e){r.exports='# Borders\n\n<p class="description">Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>\n\n## Border\n\nUse border utilities to add or remove an element\u2019s borders. Choose from all borders or one at a time.\n\n### Additive\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### Subtractive\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## Border color\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| Import name | Prop | CSS property | Theme key |\n|:------------|:-----|:-------------|:----------|\n| `border` | `border` | `border` | `borders` |\n| `borderTop` | `borderTop` | `border-top` | `borders` |\n| `borderLeft` | `borderLeft` | `border-left` | `borders` |\n| `borderRight` | `borderRight` | `border-right` | `borders` |\n| `borderBottom` | `borderBottom` | `border-bottom` | `borders` |\n| `borderColor` | `borderColor` | `border-color` | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius` | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape) |\n'},ccDA:function(r,e){r.exports='# Bordes\n\n<p class="description">Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>\n\n## Border\n\nUse border utilities to add or remove an element\u2019s borders. Choose from all borders or one at a time.\n\n### Additive\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### Subtractive\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## Border color\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| Nombre del import | Prop           | Propiedad CSS   | Clave del tema                                                   |\n|:----------------- |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`          | `border`       | `border`        | `borders`                                                        |\n| `borderTop`       | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`      | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`     | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom`    | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`     | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius`    | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},"dmA+":function(r,e){r.exports='import React from \'react\';\nimport Box from \'@material-ui/core/Box\';\n\nconst defaultProps = {\n  bgcolor: \'background.paper\',\n  m: 1,\n  border: 1,\n  style: { width: \'5rem\', height: \'5rem\' },\n};\n\nexport default function BorderColor() {\n  return (\n    <Box display="flex" justifyContent="center">\n      <Box borderColor="primary.main" {...defaultProps} />\n      <Box borderColor="secondary.main" {...defaultProps} />\n      <Box borderColor="error.main" {...defaultProps} />\n      <Box borderColor="grey.500" {...defaultProps} />\n      <Box borderColor="text.primary" {...defaultProps} />\n    </Box>\n  );\n}\n'},f9k0:function(r,e){r.exports="import React from 'react';\nimport Box from '@material-ui/core/Box';\n\nconst defaultProps = {\n  bgcolor: 'background.paper',\n  borderColor: 'text.primary',\n  m: 1,\n  border: 1,\n  style: { width: '5rem', height: '5rem' },\n};\n\nexport default function BorderRadius() {\n  return (\n    <Box display=\"flex\" justifyContent=\"center\">\n      <Box borderRadius=\"50%\" {...defaultProps} />\n      <Box borderRadius=\"borderRadius\" {...defaultProps} />\n      <Box borderRadius={16} {...defaultProps} />\n    </Box>\n  );\n}\n"},fkuS:function(r,e){r.exports="import React from 'react';\nimport Box from '@material-ui/core/Box';\n\nconst defaultProps = {\n  bgcolor: 'background.paper',\n  borderColor: 'text.primary',\n  m: 1,\n  border: 1,\n  style: { width: '5rem', height: '5rem' },\n};\n\nexport default function BorderRadius() {\n  return (\n    <Box display=\"flex\" justifyContent=\"center\">\n      <Box borderRadius=\"50%\" {...defaultProps} />\n      <Box borderRadius=\"borderRadius\" {...defaultProps} />\n      <Box borderRadius={16} {...defaultProps} />\n    </Box>\n  );\n}\n"},h2tW:function(r,e){r.exports='# Borders (Bordures)\n\n<p class="description">Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>\n\n## Border\n\nUse border utilities to add or remove an element\u2019s borders. Choose from all borders or one at a time.\n\n### Additive\n\n{{"demo": "pages/system/borders/BorderAdditive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={1}>\u2026\n<Box borderTop={1}>\u2026\n<Box borderRight={1}>\u2026\n<Box borderBottom={1}>\u2026\n<Box borderLeft={1}>\u2026\n```\n\n### Subtractive\n\n{{"demo": "pages/system/borders/BorderSubtractive.js", "defaultCodeOpen": false, "bg": true}}\n\n```jsx\n<Box border={0}>\u2026\n<Box borderTop={0}>\u2026\n<Box borderRight={0}>\u2026\n<Box borderBottom={0}>\u2026\n<Box borderLeft={0}>\u2026\n```\n\n## Border color\n\n{{"demo": "pages/system/borders/BorderColor.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderColor="primary.main">\u2026\n<Box borderColor="secondary.main">\u2026\n<Box borderColor="error.main">\u2026\n<Box borderColor="grey.500">\u2026\n<Box borderColor="text.primary">\u2026\n```\n\n## Border-radius\n\n{{"demo": "pages/system/borders/BorderRadius.js", "defaultCodeOpen": false}}\n\n```jsx\n<Box borderRadius="50%">\u2026\n<Box borderRadius="borderRadius">\u2026\n<Box borderRadius={16}>\u2026\n```\n\n## API\n\n```js\nimport { borders } from \'@material-ui/system\';\n```\n\n| Import name    | Prop           | CSS property    | Theme key                                                        |\n|:-------------- |:-------------- |:--------------- |:---------------------------------------------------------------- |\n| `border`       | `border`       | `border`        | `borders`                                                        |\n| `borderTop`    | `borderTop`    | `border-top`    | `borders`                                                        |\n| `borderLeft`   | `borderLeft`   | `border-left`   | `borders`                                                        |\n| `borderRight`  | `borderRight`  | `border-right`  | `borders`                                                        |\n| `borderBottom` | `borderBottom` | `border-bottom` | `borders`                                                        |\n| `borderColor`  | `borderColor`  | `border-color`  | [`palette`](/customization/default-theme/?expand-path=$.palette) |\n| `borderRadius` | `borderRadius` | `border-radius` | [`shape`](/customization/default-theme/?expand-path=$.shape)     |'},h6SN:function(r,e){r.exports='# crwdns98690:0crwdne98690:0\n\n<p class="description">crwdns98692:0crwdne98692:0 crwdns98694:0crwdne98694:0</p>\n\n## crwdns98696:0crwdne98696:0\n\ncrwdns98698:0crwdne98698:0 crwdns98700:0crwdne98700:0\n\n### crwdns98702:0crwdne98702:0\n\ncrwdns105877:0crwdne105877:0\n\n```jsx\ncrwdns98704:0{1}crwdnd98704:0{1}crwdnd98704:0{1}crwdnd98704:0{1}crwdnd98704:0{1}crwdne98704:0\n```\n\n### crwdns98708:0crwdne98708:0\n\ncrwdns105879:0crwdne105879:0\n\n```jsx\ncrwdns98710:0{0}crwdnd98710:0{0}crwdnd98710:0{0}crwdnd98710:0{0}crwdnd98710:0{0}crwdne98710:0\n```\n\n## crwdns98714:0crwdne98714:0\n\ncrwdns104266:0crwdne104266:0\n\n```jsx\ncrwdns98716:0crwdne98716:0\n```\n\n## crwdns98720:0crwdne98720:0\n\ncrwdns104268:0crwdne104268:0\n\n```jsx\ncrwdns98722:0{16}crwdne98722:0\n```\n\n## crwdns98726:0crwdne98726:0\n\n```js\ncrwdns98728:0{ borders }crwdne98728:0\n```\n\n| crwdns98730:0crwdne98730:0   | crwdns98732:0crwdne98732:0   | crwdns98734:0crwdne98734:0   | crwdns98736:0crwdne98736:0                                   |\n|:---------------------------- |:---------------------------- |:---------------------------- |:------------------------------------------------------------ |\n| `crwdns98738:0crwdne98738:0` | `crwdns98740:0crwdne98740:0` | `crwdns98742:0crwdne98742:0` | `crwdns98744:0crwdne98744:0`                                 |\n| `crwdns98746:0crwdne98746:0` | `crwdns98748:0crwdne98748:0` | `crwdns98750:0crwdne98750:0` | `crwdns98752:0crwdne98752:0`                                 |\n| `crwdns98754:0crwdne98754:0` | `crwdns98756:0crwdne98756:0` | `crwdns98758:0crwdne98758:0` | `crwdns98760:0crwdne98760:0`                                 |\n| `crwdns98762:0crwdne98762:0` | `crwdns98764:0crwdne98764:0` | `crwdns98766:0crwdne98766:0` | `crwdns98768:0crwdne98768:0`                                 |\n| `crwdns98770:0crwdne98770:0` | `crwdns98772:0crwdne98772:0` | `crwdns98774:0crwdne98774:0` | `crwdns98776:0crwdne98776:0`                                 |\n| `crwdns98778:0crwdne98778:0` | `crwdns98780:0crwdne98780:0` | `crwdns98782:0crwdne98782:0` | [`crwdns98786:0crwdne98786:0`](crwdns107285:0crwdne107285:0) |\n| `crwdns98788:0crwdne98788:0` | `crwdns98790:0crwdne98790:0` | `crwdns98792:0crwdne98792:0` | [`crwdns98796:0crwdne98796:0`](crwdns107287:0crwdne107287:0) |'},kF6B:function(r,e){r.exports="import React from 'react';\nimport Box from '@material-ui/core/Box';\n\nconst defaultProps = {\n  bgcolor: 'background.paper',\n  border: 1,\n  m: 1,\n  borderColor: 'text.primary',\n  style: { width: '5rem', height: '5rem' },\n};\n\nexport default function BorderSubtractive() {\n  return (\n    <Box display=\"flex\" justifyContent=\"center\">\n      <Box {...defaultProps} border={0} />\n      <Box {...defaultProps} borderTop={0} />\n      <Box {...defaultProps} borderRight={0} />\n      <Box {...defaultProps} borderBottom={0} />\n      <Box {...defaultProps} borderLeft={0} />\n    </Box>\n  );\n}\n"},qeka:function(r,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system/borders",function(){return o("Bn+L")}])},xM1q:function(r,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var n=o("z3IF"),d=o("mXGw"),t=o.n(d),s=o("xWBm"),a=t.a.createElement,b={bgcolor:"background.paper",borderColor:"text.primary",m:1,border:1,style:{width:"5rem",height:"5rem"}};function i(){return a(s.a,{display:"flex",justifyContent:"center"},a(s.a,Object(n.a)({borderRadius:"50%"},b)),a(s.a,Object(n.a)({borderRadius:"borderRadius"},b)),a(s.a,Object(n.a)({borderRadius:16},b)))}},xbLI:function(r,e){r.exports="import React from 'react';\nimport Box from '@material-ui/core/Box';\n\nconst defaultProps = {\n  bgcolor: 'background.paper',\n  m: 1,\n  style: { width: '5rem', height: '5rem' },\n  borderColor: 'text.primary',\n};\n\nexport default function BorderAdditive() {\n  return (\n    <Box display=\"flex\" justifyContent=\"center\">\n      <Box border={1} {...defaultProps} />\n      <Box borderTop={1} {...defaultProps} />\n      <Box borderRight={1} {...defaultProps} />\n      <Box borderBottom={1} {...defaultProps} />\n      <Box borderLeft={1} {...defaultProps} />\n    </Box>\n  );\n}\n"}},[["qeka",0,1]]]);