(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{"1SHr":function(n,e,t){var a={"./spacing-aa.md":"HUQq","./spacing-de.md":"Z5F/","./spacing-es.md":"rZYh","./spacing-fr.md":"kMsc","./spacing-ja.md":"ZYBQ","./spacing-pt.md":"ezGh","./spacing-ru.md":"gmUN","./spacing-zh.md":"r7R4","./spacing.md":"4/7L"};function s(n){var e=c(n);return t(e)}function c(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}s.keys=function(){return Object.keys(a)},s.resolve=c,n.exports=s,s.id="1SHr"},"4/7L":function(n,e){n.exports="# Spacing\n\n<p class=\"description\">Use the theme.spacing() helper to create consistent spacing between the elements of your UI.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\nYou can change the spacing transformation by providing:\n\n- a number\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- a function\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- an array\n\n```js\nconst theme = createMuiTheme({\n  spacing: [0, 4, 8, 16, 32, 64],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Multiple arity\n\nThe `theme.spacing()` helper accepts up to 4 arguments.\nYou can use the arguments to reduce the boilerplate. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```\n"},HUQq:function(n,e){n.exports='# crwdns93688:0crwdne93688:0\n\n<p class="description">crwdns93690:0crwdne93690:0</p>\n\ncrwdns100960:0crwdne100960:0\n\n```js\ncrwdns100962:0crwdne100962:0\n```\n\n## crwdns100964:0crwdne100964:0\n\ncrwdns93698:0crwdne93698:0\n\n- crwdns93700:0crwdne93700:0\n\n```js\ncrwdns93702:0crwdne93702:0\n```\n\n- crwdns93704:0crwdne93704:0\n\n```js\ncrwdns93706:0crwdne93706:0\n```\n\n- crwdns93708:0crwdne93708:0\n\n```js\ncrwdns93710:0[factor]crwdne93710:0\n```\n\n## crwdns100966:0crwdne100966:0\n\ncrwdns93714:0crwdne93714:0 crwdns100968:0crwdne100968:0 crwdns100970:0crwdne100970:0\n\n```js\ncrwdns100972:0crwdne100972:0\n```\n\ncrwdns100974:0crwdne100974:0\n\n```js\ncrwdns100976:0crwdne100976:0\n```'},KuTA:function(n,e){function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="KuTA"},MD4r:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customization/spacing",function(){return t("YPMt")}])},YPMt:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));var a=t("mXGw"),s=t.n(a),c=t("e+1t"),r=s.a.createElement,i=t("1SHr"),o=t("KuTA"),p=r(c.a,{req:i,reqSource:o,reqPrefix:"pages/customization/spacing"});function m(){return p}},"Z5F/":function(n,e){n.exports="# Abst\xe4nde (Spacing)\n\n<p class=\"description\">Verwende den theme.spacing() Helfer, um einen konsistenten Abstand zwischen den Elementen Ihrer Benutzeroberfl\xe4che zu erstellen.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\nSie k\xf6nnen die Abstandstransformation \xe4ndern, indem Sie Folgendes angeben:\n\n- eine Zahl\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- eine Funktion\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap Strategie)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- eine Array\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Mehrere Arit\xe4ten\n\nDer `theme.spacing ()` Helfer akzeptiert bis zu 4 Argumente. Sie k\xf6nnen die Argumente verwenden, um den Boilerplate zu reduzieren. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"},ZYBQ:function(n,e){n.exports="# \u9593\u9694\n\n<p class=\"description\">theme.spacing()\u3000\u30d8\u30eb\u30d1\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001 UI\u306e\u8981\u7d20\u9593\u306e\u9593\u9694\u3092\u4e00\u5b9a\u306b\u3057\u307e\u3059\u3002</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\n\u9593\u9694\u306e\u5909\u63db\u306f\u3001\u6b21\u306e\u65b9\u6cd5\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\n\n- a number\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- a function\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- an array\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Multiple arity\n\n`theme.spacing()` \u30d8\u30eb\u30d1\u30fc\u306f\u6700\u59274\u3064\u306e\u5f15\u6570\u3092\u53d7\u3051\u5165\u308c\u307e\u3059\u3002 You can use the arguments to reduce the boilerplate. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"},ezGh:function(n,e){n.exports="# Espa\xe7amento\n\n<p class=\"description\">Use o auxiliar theme.spacing() para criar um espa\xe7amento consistente entre os elementos da sua UI.</p>\n\nMaterial-UI usa [um fator de escala recomendado de 8px](https://material.io/design/layout/understanding-layout.html) por padr\xe3o.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Espa\xe7amento customizado\n\nVoc\xea pode alterar a transforma\xe7\xe3o do espa\xe7amento fornecendo:\n\n- um n\xfamero\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- uma fun\xe7\xe3o\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (estrat\xe9gia do Bootstrap)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- um vetor\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Aridade m\xfaltipla\n\nO auxiliar ` theme.spacing()` aceita at\xe9 4 argumentos. Voc\xea pode usar os argumentos para reduzir o trabalho. Em vez de fazer:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nvoc\xea pode fazer:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"},gmUN:function(n,e){n.exports="# \u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b\n\n<p class=\"description\">Use the theme.spacing() helper to create consistent spacing between the elements of your UI.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u043f\u0435\u0440\u0435\u0434\u0430\u0432:\n\n- \u0447\u0438\u0441\u043b\u043e\n\n```js\nconst theme = createMuiTheme ({\n  spacing: 4,\n});\n\ntheme.spacing (2) // = 4 * 2\n```\n\n- \u0444\u0443\u043d\u043a\u0446\u0438\u044f\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- \u043c\u0430\u0441\u0441\u0438\u0432\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Multiple arity\n\n\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ` theme.spacing () ` \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u043e 4 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"},kMsc:function(n,e){n.exports="# Ecartement\n\n<p class=\"description\">Use the theme.spacing() helper to create consistent spacing between the elements of your UI.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\nYou can change the spacing transformation by providing:\n\n- a number\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- a function\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- an array\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Multiple arity\n\nThe `theme.spacing()` helper accepts up to 4 arguments. You can use the arguments to reduce the boilerplate. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"},r7R4:function(n,e){n.exports="# \u95f4\u8ddd\n\n<p class=\"description\">Use the theme.spacing() helper to create consistent spacing between the elements of your UI.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\n\u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u4ee5\u4e0b\u5185\u5bb9\u6765\u66f4\u6539\u95f4\u8ddd\u8f6c\u6362\u503c\uff1a\n\n- \u4e00\u4e2a\u6570\u5b57\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- a function\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- an array\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## \u591a\u4e2a\u53c2\u6570\n\n` theme.spacing() ` \u6700\u591a\u63a5\u53d74\u4e2a\u53c2\u6570\u3002 You can use the arguments to reduce the boilerplate. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\n\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"},rZYh:function(n,e){n.exports="# Espaciado\n\n<p class=\"description\">Use the theme.spacing() helper to create consistent spacing between the elements of your UI.</p>\n\nMaterial-UI uses [a recommended 8px scaling factor](https://material.io/design/layout/understanding-layout.html) by default.\n\n```js\nconst theme = createMuiTheme();\n\ntheme.spacing(2) // = 8 * 2\n```\n\n## Custom spacing\n\nYou can change the spacing transformation by providing:\n\n- a number\n\n```js\nconst theme = createMuiTheme({\n  spacing: 4,\n});\n\ntheme.spacing(2) // = 4 * 2\n```\n\n- a function\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)\n});\n\ntheme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px\n```\n\n- an array\n\n```js\nconst theme = createMuiTheme({\n  spacing: factor => [0, 4, 8, 16, 32, 64][factor],\n});\n\ntheme.spacing(2); // = 8\n```\n\n## Multiple arity\n\nThe `theme.spacing()` helper accepts up to 4 arguments. You can use the arguments to reduce the boilerplate. Instead of doing:\n\n```js\npadding: `${theme.spacing(1)}px ${theme.spacing(2)}px`, // '8px 16px'\n```\n\nyou can do:\n\n```js\npadding: theme.spacing(1, 2), // '8px 16px'\n```"}},[["MD4r",0,1]]]);