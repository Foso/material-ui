(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"+Hjm":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="+Hjm"},"1wd3":function(e,t,n){(function(t){var n=/^\[object .+?Constructor\]$/,o=/^(?:0|[1-9]\d*)$/,r="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();function s(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function u(e,t){return!!(e?e.length:0)&&function(e,t,n){if(t!==t)return function(e,t,n,o){var r=e.length,i=n+(o?1:-1);for(;o?i--:++i<r;)if(t(e[i],i,e))return i;return-1}(e,d,n);var o=n-1,r=e.length;for(;++o<r;)if(e[o]===t)return o;return-1}(e,t,0)>-1}function l(e,t,n){for(var o=-1,r=e?e.length:0;++o<r;)if(n(t,e[o]))return!0;return!1}function c(e,t){for(var n=-1,o=e?e.length:0,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}function f(e,t){for(var n=-1,o=t.length,r=e.length;++n<o;)e[r+n]=t[n];return e}function d(e){return e!==e}function p(e,t){return e.has(t)}function h(e,t){return function(n){return e(t(n))}}var m=Array.prototype,g=Function.prototype,y=Object.prototype,v=a["__core-js_shared__"],b=function(){var e=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),w=g.toString,x=y.hasOwnProperty,_=y.toString,k=RegExp("^"+w.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=a.Symbol,O=h(Object.getPrototypeOf,Object),I=y.propertyIsEnumerable,S=m.splice,E=j?j.isConcatSpreadable:void 0,M=Object.getOwnPropertySymbols,C=Math.max,U=G(a,"Map"),W=G(Object,"create");function q(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function P(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function Y(e){var t=-1,n=e?e.length:0;for(this.__data__=new R;++t<n;)this.add(e[t])}function T(e,t){var n=Q(e)||J(e)?function(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}(e.length,String):[],o=n.length,r=!!o;for(var i in e)!t&&!x.call(e,i)||r&&("length"==i||L(i,o))||n.push(i);return n}function N(e,t){for(var n,o,r=e.length;r--;)if((n=e[r][0])===(o=t)||n!==n&&o!==o)return r;return-1}function A(e){return!(!Z(e)||(t=e,b&&b in t))&&(K(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?k:n).test(function(e){if(null!=e){try{return w.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function F(e){if(!Z(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||y;return e===n}(e),n=[];for(var o in e)("constructor"!=o||!t&&x.call(e,o))&&n.push(o);return n}function B(e){return function(e,t,n){var o=t(e);return Q(e)?o:f(o,n(e))}(e,te,X)}function D(e,t){var n=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function G(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return A(n)?n:void 0}q.prototype.clear=function(){this.__data__=W?W(null):{}},q.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},q.prototype.get=function(e){var t=this.__data__;if(W){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return x.call(t,e)?t[e]:void 0},q.prototype.has=function(e){var t=this.__data__;return W?void 0!==t[e]:x.call(t,e)},q.prototype.set=function(e,t){return this.__data__[e]=W&&void 0===t?"__lodash_hash_undefined__":t,this},P.prototype.clear=function(){this.__data__=[]},P.prototype.delete=function(e){var t=this.__data__,n=N(t,e);return!(n<0)&&(n==t.length-1?t.pop():S.call(t,n,1),!0)},P.prototype.get=function(e){var t=this.__data__,n=N(t,e);return n<0?void 0:t[n][1]},P.prototype.has=function(e){return N(this.__data__,e)>-1},P.prototype.set=function(e,t){var n=this.__data__,o=N(n,e);return o<0?n.push([e,t]):n[o][1]=t,this},R.prototype.clear=function(){this.__data__={hash:new q,map:new(U||P),string:new q}},R.prototype.delete=function(e){return D(this,e).delete(e)},R.prototype.get=function(e){return D(this,e).get(e)},R.prototype.has=function(e){return D(this,e).has(e)},R.prototype.set=function(e,t){return D(this,e).set(e,t),this},Y.prototype.add=Y.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Y.prototype.has=function(e){return this.__data__.has(e)};var z=M?h(M,Object):ie,X=M?function(e){for(var t=[];e;)f(t,z(e)),e=O(e);return t}:ie;function H(e){return Q(e)||J(e)||!!(E&&e&&e[E])}function L(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}function $(e){if("string"==typeof e||function(e){return"symbol"==typeof e||ee(e)&&"[object Symbol]"==_.call(e)}(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function J(e){return function(e){return ee(e)&&V(e)}(e)&&x.call(e,"callee")&&(!I.call(e,"callee")||"[object Arguments]"==_.call(e))}var Q=Array.isArray;function V(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!K(e)}function K(e){var t=Z(e)?_.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ee(e){return!!e&&"object"==typeof e}function te(e){return V(e)?T(e,!0):F(e)}var ne,oe,re=(ne=function(e,t){return null==e?{}:(t=c(function e(t,n,o,r,i){var a=-1,s=t.length;for(o||(o=H),i||(i=[]);++a<s;){var u=t[a];n>0&&o(u)?n>1?e(u,n-1,o,r,i):f(i,u):r||(i[i.length]=u)}return i}(t,1),$),function(e,t){return function(e,t,n){for(var o=-1,r=t.length,i={};++o<r;){var a=t[o],s=e[a];n(s,a)&&(i[a]=s)}return i}(e=Object(e),t,(function(t,n){return n in e}))}(e,function(e,t,n,o){var r,i=-1,a=u,s=!0,f=e.length,d=[],h=t.length;if(!f)return d;n&&(t=c(t,(r=n,function(e){return r(e)}))),o?(a=l,s=!1):t.length>=200&&(a=p,s=!1,t=new Y(t));e:for(;++i<f;){var m=e[i],g=n?n(m):m;if(m=o||0!==m?m:0,s&&g===g){for(var y=h;y--;)if(t[y]===g)continue e;d.push(m)}else a(t,g,o)||d.push(m)}return d}(B(e),t)))},oe=C(void 0===oe?ne.length-1:oe,0),function(){for(var e=arguments,t=-1,n=C(e.length-oe,0),o=Array(n);++t<n;)o[t]=e[oe+t];t=-1;for(var r=Array(oe+1);++t<oe;)r[t]=e[t];return r[oe]=o,s(ne,this,r)});function ie(){return[]}e.exports=re}).call(this,n("dm4u"))},GcvH:function(e,t,n){"use strict";var o,r=n("YaWD"),i=(o=r)&&o.__esModule?o:{default:o};e.exports=i.default},YaWD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n("1wd3")),s=c(n("W0B4")),u=n("mXGw"),l=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(r=o=function(e){function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.parent,o=t.prefix,r=t.suffix,i=t.replacement,s=new RegExp(o+"(.+?)"+r),u=this.props.format||this.props.children;if(!u||"string"!==typeof u)return l.default.createElement("noscript",null);var c=(0,a.default)(this.props,["parent","prefix","suffix","replacement"]),f=[],d=[];return u.split(s).reduce((function(t,n,o){var r=null;if(o%2===0){if(0===n.length)return t;r=n}else i?r=i[n]:(r=e.props[n],f.push(n));return t.push(r),t}),d),c=(0,a.default)(c,f),l.default.createElement.apply(this,[n,c].concat(d))}}]),t}(u.PureComponent),o.propTypes={format:s.default.string,parent:s.default.string,prefix:s.default.string,suffix:s.default.string,replacement:s.default.oneOfType([s.default.array,s.default.object])},o.defaultProps={parent:"span",prefix:"{{",suffix:"}}"},r);t.default=p},jqRX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/software-engineer",function(){return n("x2p8")}])},nP8Y:function(e,t,n){var o={"./software-engineer.md":"p+Hf"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="nP8Y"},"p+Hf":function(e,t){e.exports="# Senior Software Engineer\n\n<p class=\"description\">We are looking for a software engineer to help support our open source team, assist the Material-UI community and grow our premium products. Join us in our mission to make React application development fun by making it simple.</p>\n\n## About Us\n\nMaterial-UI is a community and developer focused team that makes it easy to build amazing user interfaces, for any device, with React.\n\nOur core values include transparency (our work is public most of the time); creating a safe, high-trust team; building incredible developer experiences; maintaining a healthy working environment; and helping to deliver web experiences that feel amazing to use on every device and connection type.\n\nMaterial-UI started back in 2014 to unify React and Material Design. Today, Material-UI has grown to become one of the world's most popular React UI libraries, backed by a vibrant community of more than 1M developers in over 180 countries.\n\n## Details of the Role\n\n- Type of work: Contractor (long mission, full-time, convertible to an employee position in the future).\n- Start date: Immediately.\n- Location: Remote (preference for UTC-5 to UTC+4).\n- Level: [Senior Engineer or above](https://open.buffer.com/engineering-career-framework/).\n- We're a remote company, we prefer asynchronous communication over meetings.\n- We work independently, the rest of us won't know what you're doing day-to-day unless you tell us.\n\n## Why we\u2019re hiring\n\nBoth our open source products and community, and our premium products are [growing fast](https://www.rank2traffic.com/material-ui.com) and we need talented engineers to keep that going!\n\nWe need help to continue to improve the health of Material-UI open source: make the library easier to use, make it support more use cases, improve performance, make it more accessible, and make it easier to customize to support [in-house design systems](https://medium.com/google-design/state-of-design-systems-2019-ff5f26ada71). We also need help keeping up with the community, guiding developers to answers, and just generally being a positive presence in the open source community.\n\nWe also need to develop our premium content. We have a store, and soon an enterprise offering, starting with the data grid.\nEnterprise features will build on the open source version of the components.\n\n## Why this is interesting\n\nOur solution is empowering React developers to build awesome applications. It should be easy, it shouldn\u2019t require any advanced technical skills. Hundreds of thousands of developers use Material-UI every month. Let\u2019s reach the full potential :D!\n\nOur premium products portfolio is still small, with a million interesting and challenging problems to solve.\n\n## What you\u2019ll do on a day-to-day basis\n\nDepending on the day, you\u2019ll:\n\nOn the open source side:\n\n- **Help guide architectural decisions**. From modernizing the way we handle styles to building new components, the future of Material-UI is discussed and planned in our public RFCs and issues. You\u2019ll be helping drive these conversations and guiding Material-UI toward the best possible solutions.\n- **Contribute to deep, meaningful refactors and feature releases**. Material-UI is a complex codebase. Components we\u2019ve shipped recently, such as the Tree View, Autocomplete, and Slider have required weeks of dedicated, careful work.\n- **Reduce friction**. A large amount of the work on Material-UI is reducing friction and making it easier to use. This might involve careful API design, identifying and fixing top bugs, creating easier to understand error messages, and writing documentation and blog posts about features you ship.\n- **Collaborate with the community**. Many small as well as meaningful fixes and features have been contributed by the community. Your role as a core team maintainer is to draw the best out of the community \u2014 to inspire those across the world to create and contribute through your reviews of their issues and pull requests.\n- **Experiment and play**. Great, unexpected features and heisenbug fixes have come from a number of sources \u2014 relentlessly methodical processes of elimination, free-flowing team collaboration, inspiration by adjacent libraries and projects, and difficult-to-explain individual strokes of brilliance. Whatever your preferred style is for creating new things that others might not have thought of, you\u2019ll find a welcome home on the team.\n\nPremium components:\n\n- **Take ownership of features from idea/mockup to live deployment**. You\u2019ll shape and guide the direction of crucial new features, including new components.\n- **Ship. Early and often**. You\u2019ll iterate and ship frequently. You\u2019ll have a real impact on the end-user experience and you\u2019ll love working on a team that builds stunning UIs and prioritizes delivering real user value as often as possible.\n- **You'll be interacting with our customers** on a regular basis, handling inbound support and feature requests (every developer helps with support).\n\n## Experience you should have\n\n- **Expertise in the modern JavaScript ecosystem**. Material-UI is built on the shoulders of giants, making use of technologies such as ES2015+, TypeScript, Node.js, React, Next.js, webpack, and Babel.\n- **A track record of demonstrating an eye for design and solving real world user problems**. If you have a knack for shipping beautiful, intuitive software, we want you on our team.\n- **Experience building and shipping production code in a team setting** with a passion for writing tested, performant, and high-quality code.\n- **Strong written and verbal communication skills**. As part of the team, you\u2019ll interface both directly and indirectly with community members and enterprise customers, and contribute to user documentation. Clear communication is fundamental in creating intuitive and compelling resources.\n- **Ability to dive into complex problems**. You should be able to quickly assess, understand, and iterate upon aspects of our codebase.\n- **Ready and willing to ask and answer questions**. If you\u2019re comfortable saying you\u2019re unsure, asking for help; but equally reaching out to assist others, you\u2019ll be an incredible addition to our team. We thrive because of continuous learning. First time mistakes should be celebrated, not blamed.\n- **Avoid monolithic deliverables**. You scope and stage your work into well-defined milestones to ship.\n- **Past work with frontend infrastructure**. Perhaps you\u2019ve created your company\u2019s design system, written a babel plugin, or written complex React components. It would be great if you could address this in your cover letter!\n\n## Experience it would be nice if you had, but isn\u2019t required\n\n- **You\u2019ve contributed to a design system before**. You have worked on enterprise components in the past, maybe for internal usage in your company. You have built complex and advanced features while making sure the accessibility was fully functional.\n- **You\u2019ve maintained an active repository before**. Maybe you\u2019ve helped maintain a popular open source repo, or perhaps you\u2019ve worked on internal repos that saw contributions from multiple teams. Previous experience with highly active repo workflows is a definite plus for this role.\n- **You have contributed code to Material-UI before**. A history of contributing to Material-UI would be a definite plus.\n\n## The best parts of this job\n\n- **You\u2019ll be at the cutting edge of application development** \u2014 working on one of the fastest-growing UI frameworks on the market.\n- **You\u2019ll be part of an active, open, friendly community** of developers that are really excited about building awesome applications.\n- **Your role will be key to making Material-UI the go to UI framework** for building applications and design systems with React.\n\n## The worst parts of this job\n\n- **Shifting context.** You will necessarily have to shift context and dive into a different feature before the current one is done. It may even be in an area of the code base you\u2019re unfamiliar with or don\u2019t have a ton of understanding about. It\u2019s fun, rewarding work, but it can be very challenging.\n- **We move quickly, but don\u2019t sacrifice quality**. We ship early, often, and quickly. You may not be initially comfortable with the cadence with which we ship high-quality features and improvements to end users. By doing so, we sacrifice on solving each problem 100% in exchange for fast feedback. Solving 50-70% of the issue with quality should be enough for any given iteration. Our users quickly tell us when we haven't pushed a solution far enough.\n- **Material-UI is a large codebase**. You may bang your head against the wall at times, and then write tests to assist future you \ud83d\ude0c.\nThe work you would be doing is somewhat unique and idiosyncratic. You probably have not had a similar role before.\n- **In open source, you\u2019re faced with a nonstop stream of bug reports and support requests**. That means you need to develop an intuition of when to ignore something and when to dig in further.\n\n## Benefits for you\n\n- Competitive compensation of up to $120k/year, depending on the profile. Could go higher in the case of an extraordinary match.\n- Flexible workplace & hours.\n\n## Apply\n\n[Apply for this position \ud83d\udcee](https://airtable.com/shrHB2jnnhdtsGkEN)\n"},pQ8Y:function(e,t,n){"use strict";var o=n("2Fjn"),r=n("bZJ2"),i=n("yLsn"),a=n.n(i),s=n("z3IF"),u=n("mXGw"),l=n("PDtE"),c=n("XpU0"),f=u.createElement,d=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a()(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=u.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,i=e.alignItems,a=void 0===i?"stretch":i,u=e.classes,c=e.className,d=e.component,p=void 0===d?"div":d,h=e.container,m=void 0!==h&&h,g=e.direction,y=void 0===g?"row":g,v=e.item,b=void 0!==v&&v,w=e.justify,x=void 0===w?"flex-start":w,_=e.lg,k=void 0!==_&&_,j=e.md,O=void 0!==j&&j,I=e.sm,S=void 0!==I&&I,E=e.spacing,M=void 0===E?0:E,C=e.wrap,U=void 0===C?"wrap":C,W=e.xl,q=void 0!==W&&W,P=e.xs,R=void 0!==P&&P,Y=e.zeroMinWidth,T=void 0!==Y&&Y,N=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(l.a)(u.root,c,m&&[u.container,0!==M&&u["spacing-xs-".concat(String(M))]],b&&u.item,T&&u.zeroMinWidth,"row"!==y&&u["direction-xs-".concat(String(y))],"wrap"!==U&&u["wrap-xs-".concat(String(U))],"stretch"!==a&&u["align-items-xs-".concat(String(a))],"stretch"!==r&&u["align-content-xs-".concat(String(r))],"flex-start"!==x&&u["justify-xs-".concat(String(x))],!1!==R&&u["grid-xs-".concat(String(R))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==O&&u["grid-md-".concat(String(O))],!1!==k&&u["grid-lg-".concat(String(k))],!1!==q&&u["grid-xl-".concat(String(q))]);return f(p,Object(s.a)({className:A,ref:t},N))})),g=Object(c.default)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach((function(o){var r=e.spacing(o);0!==r&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(h(r,2)),width:"calc(100% + ".concat(h(r),")"),"& > $item":{padding:h(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var o={};p.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(s.a)(e,o):e[t.breakpoints.up(n)]=o}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.a=g},tFRh:function(e,t,n){"use strict";var o=n("mXGw"),r=n.n(o),i=n("XpU0"),a=n("EWRx"),s=n("KFoC"),u=n("CTgH"),l=n("IC7y"),c=n("kVtE"),f=n("xPcB"),d=r.a.createElement,p=d(f.a,null);t.a=Object(i.default)((function(e){return{root:{flex:"1 0 100%"},container:{marginBottom:e.spacing(20),maxWidth:680+e.spacing(12),"& .markdownElement":{paddingRight:e.spacing(4)}}}}))((function(e){var t=e.classes,n=e.markdown,o=e.markdownLocation,r=e.req,i=e.reqPrefix,f=e.reqSource,h=Object(l.a)({markdown:n,markdownLocation:o,req:r,reqPrefix:i,reqSource:f}),m=Object(c.d)(h.markdown);return d(s.a,null,d(a.a,{title:"".concat(m.title||Object(c.e)(h.markdown)," - Material-UI"),description:m.description||Object(c.c)(h.markdown)}),d("div",{className:t.root},d(u.a,{className:t.container},h.element),p))}))},x2p8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var o=n("mXGw"),r=n.n(o),i=n("tFRh"),a=r.a.createElement,s=n("nP8Y"),u=n("+Hjm"),l=a(i.a,{req:s,reqSource:u,reqPrefix:"pages/company/software-engineer"});function c(){return l}},xPcB:function(e,t,n){"use strict";var o=n("azxR"),r=n("mXGw"),i=n.n(r),a=n("/m4v"),s=n("GcvH"),u=n.n(s),l=n("XpU0"),c=n("Oy88"),f=n("pQ8Y"),d=n("Uoj6"),p=n("FAXT"),h=n("OxvQ"),m=i.a.createElement,g=m(p.a,null),y=m("img",{src:"/static/logo_raw.svg",alt:""}),v=m(h.a,{variant:"body1",color:"inherit",href:"/"},"Material-UI"),b=m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://github.com/Foso/material-ui"},"GitHub")),w=m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://twitter.com/MaterialUI"},"Twitter")),x=m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://stackoverflow.com/questions/tagged/material-ui"},"StackOverflow")),_=m("ul",null,m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/company/about/"},"About")),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/company/contact/"},"Contact Us")),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/company/jobs/"},"Jobs")));t.a=Object(l.default)((function(e){return{root:{marginTop:e.spacing(6)},footer:Object(o.a)({padding:e.spacing(3,0)},e.breakpoints.up("sm"),{padding:e.spacing(8,0)}),logo:{display:"flex",alignItems:"center",marginBottom:e.spacing(4),"& img":{width:28,height:22,marginRight:e.spacing(1.5)}},list:{marginBottom:e.spacing(4),"& h3":{fontWeight:e.typography.fontWeightMedium},"& ul":{margin:0,padding:0,listStyle:"none"},"& li":{padding:"6px 0",color:e.palette.text.secondary}},version:{marginTop:e.spacing(3)}}}))((function(e){var t=e.classes,n=Object(a.d)((function(e){return e.options.t}));return m("div",{className:t.root},g,m(d.a,{maxWidth:"md"},m("footer",{className:t.footer},m(f.a,{container:!0},m(f.a,{item:!0,xs:12,sm:3},m("div",{className:t.logo},y,v)),m(f.a,{item:!0,xs:6,sm:3,className:t.list},m(c.a,{component:"h2",gutterBottom:!0},n("footerCommunity")),m("ul",null,b,w,x,m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/discover-more/team/"},n("pages./discover-more/team"))))),m(f.a,{item:!0,xs:6,sm:3,className:t.list},m(c.a,{component:"h2",gutterBottom:!0},n("footerResources")),m("ul",null,m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/getting-started/support/"},n("pages./getting-started/support"))),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://medium.com/material-ui/"},n("blogTitle"))),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/components/material-icons/"},n("pages./components/material-icons"))))),m(f.a,{item:!0,xs:6,sm:3,className:t.list},m(c.a,{component:"h2",gutterBottom:!0},n("footerCompany")),_)),m(c.a,{className:t.version,color:"textSecondary",variant:"body2"},m(u.a,{replacement:{versionNumber:m(h.a,{color:"inherit",href:"https://material-ui.com/versions/","aria-label":"v".concat("4.9.5",". View versions page.")},"v".concat("4.9.5")),license:m(h.a,{color:"inherit",href:"https://github.com/Foso/material-ui/blob/master/LICENSE"},n("license"))}},n("homeFooterRelease"))," Copyright \xa9 ",(new Date).getFullYear()," Material-UI. "))))}))}},[["jqRX",0,1]]]);