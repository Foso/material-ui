(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{"1wd3":function(t,e,n){(function(e){var n=/^\[object .+?Constructor\]$/,r=/^(?:0|[1-9]\d*)$/,o="object"==typeof e&&e&&e.Object===Object&&e,i="object"==typeof self&&self&&self.Object===Object&&self,a=o||i||Function("return this")();function c(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function s(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!==e)return function(t,e,n,r){var o=t.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,p,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function u(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function l(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function f(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function p(t){return t!==t}function d(t,e){return t.has(e)}function h(t,e){return function(n){return t(e(n))}}var m=Array.prototype,g=Function.prototype,v=Object.prototype,y=a["__core-js_shared__"],b=function(){var t=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_=g.toString,x=v.hasOwnProperty,w=v.toString,j=RegExp("^"+_.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),O=a.Symbol,S=h(Object.getPrototypeOf,Object),k=v.propertyIsEnumerable,E=m.splice,C=O?O.isConcatSpreadable:void 0,W=Object.getOwnPropertySymbols,N=Math.max,P=L(a,"Map"),M=L(Object,"create");function F(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function I(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function q(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function R(t){var e=-1,n=t?t.length:0;for(this.__data__=new q;++e<n;)this.add(t[e])}function T(t,e){var n=H(t)||Y(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!x.call(t,i)||o&&("length"==i||Z(i,r))||n.push(i);return n}function U(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!==n&&r!==r)return o;return-1}function G(t){return!(!Q(t)||(e=t,b&&b in e))&&(V(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?j:n).test(function(t){if(null!=t){try{return _.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t));var e}function A(t){if(!Q(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=function(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||v;return t===n}(t),n=[];for(var r in t)("constructor"!=r||!e&&x.call(t,r))&&n.push(r);return n}function B(t){return function(t,e,n){var r=e(t);return H(t)?r:f(r,n(t))}(t,et,z)}function D(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function L(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return G(n)?n:void 0}F.prototype.clear=function(){this.__data__=M?M(null):{}},F.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},F.prototype.get=function(t){var e=this.__data__;if(M){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return x.call(e,t)?e[t]:void 0},F.prototype.has=function(t){var e=this.__data__;return M?void 0!==e[t]:x.call(e,t)},F.prototype.set=function(t,e){return this.__data__[t]=M&&void 0===e?"__lodash_hash_undefined__":e,this},I.prototype.clear=function(){this.__data__=[]},I.prototype.delete=function(t){var e=this.__data__,n=U(e,t);return!(n<0)&&(n==e.length-1?e.pop():E.call(e,n,1),!0)},I.prototype.get=function(t){var e=this.__data__,n=U(e,t);return n<0?void 0:e[n][1]},I.prototype.has=function(t){return U(this.__data__,t)>-1},I.prototype.set=function(t,e){var n=this.__data__,r=U(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},q.prototype.clear=function(){this.__data__={hash:new F,map:new(P||I),string:new F}},q.prototype.delete=function(t){return D(this,t).delete(t)},q.prototype.get=function(t){return D(this,t).get(t)},q.prototype.has=function(t){return D(this,t).has(t)},q.prototype.set=function(t,e){return D(this,t).set(t,e),this},R.prototype.add=R.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},R.prototype.has=function(t){return this.__data__.has(t)};var X=W?h(W,Object):it,z=W?function(t){for(var e=[];t;)f(e,X(t)),t=S(t);return e}:it;function $(t){return H(t)||Y(t)||!!(C&&t&&t[C])}function Z(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||r.test(t))&&t>-1&&t%1==0&&t<e}function J(t){if("string"==typeof t||function(t){return"symbol"==typeof t||tt(t)&&"[object Symbol]"==w.call(t)}(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Y(t){return function(t){return tt(t)&&K(t)}(t)&&x.call(t,"callee")&&(!k.call(t,"callee")||"[object Arguments]"==w.call(t))}var H=Array.isArray;function K(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!V(t)}function V(t){var e=Q(t)?w.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function Q(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function tt(t){return!!t&&"object"==typeof t}function et(t){return K(t)?T(t,!0):A(t)}var nt,rt,ot=(nt=function(t,e){return null==t?{}:(e=l(function t(e,n,r,o,i){var a=-1,c=e.length;for(r||(r=$),i||(i=[]);++a<c;){var s=e[a];n>0&&r(s)?n>1?t(s,n-1,r,o,i):f(i,s):o||(i[i.length]=s)}return i}(e,1),J),function(t,e){return function(t,e,n){for(var r=-1,o=e.length,i={};++r<o;){var a=e[r],c=t[a];n(c,a)&&(i[a]=c)}return i}(t=Object(t),e,(function(e,n){return n in t}))}(t,function(t,e,n,r){var o,i=-1,a=s,c=!0,f=t.length,p=[],h=e.length;if(!f)return p;n&&(e=l(e,(o=n,function(t){return o(t)}))),r?(a=u,c=!1):e.length>=200&&(a=d,c=!1,e=new R(e));t:for(;++i<f;){var m=t[i],g=n?n(m):m;if(m=r||0!==m?m:0,c&&g===g){for(var v=h;v--;)if(e[v]===g)continue t;p.push(m)}else a(e,g,r)||p.push(m)}return p}(B(t),e)))},rt=N(void 0===rt?nt.length-1:rt,0),function(){for(var t=arguments,e=-1,n=N(t.length-rt,0),r=Array(n);++e<n;)r[e]=t[rt+e];e=-1;for(var o=Array(rt+1);++e<rt;)o[e]=t[e];return o[rt]=r,c(nt,this,o)});function it(){return[]}t.exports=ot}).call(this,n("dm4u"))},"59Lq":function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="59Lq"},GcvH:function(t,e,n){"use strict";var r,o=n("YaWD"),i=(r=o)&&r.__esModule?r:{default:r};t.exports=i.default},KZpZ:function(t,e,n){var r={"./jobs.md":"Vaqe"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="KZpZ"},Vaqe:function(t,e){t.exports='# Work with us!\n\n<p class="description">Join our team!</p>\n\n- [Senior Software Engineer](/company/software-engineer/) \u2022 Remote<br />\n  We are looking for a software engineer to help support our open source team, assist the Material-UI community and grow our premium products. Join us in our mission to make React application development fun by making it simple.\n'},YaWD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=l(n("1wd3")),c=l(n("W0B4")),s=n("mXGw"),u=l(s);function l(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var d=(o=r=function(t){function e(){return f(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.parent,r=e.prefix,o=e.suffix,i=e.replacement,c=new RegExp(r+"(.+?)"+o),s=this.props.format||this.props.children;if(!s||"string"!==typeof s)return u.default.createElement("noscript",null);var l=(0,a.default)(this.props,["parent","prefix","suffix","replacement"]),f=[],p=[];return s.split(c).reduce((function(e,n,r){var o=null;if(r%2===0){if(0===n.length)return e;o=n}else i?o=i[n]:(o=t.props[n],f.push(n));return e.push(o),e}),p),l=(0,a.default)(l,f),u.default.createElement.apply(this,[n,l].concat(p))}}]),e}(s.PureComponent),r.propTypes={format:c.default.string,parent:c.default.string,prefix:c.default.string,suffix:c.default.string,replacement:c.default.oneOfType([c.default.array,c.default.object])},r.defaultProps={parent:"span",prefix:"{{",suffix:"}}"},o);e.default=d},iAFL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/jobs",function(){return n("jidb")}])},jidb:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n("mXGw"),o=n.n(r),i=n("tFRh"),a=o.a.createElement,c=n("KZpZ"),s=n("59Lq"),u=a(i.a,{req:c,reqSource:s,reqPrefix:"pages/company/jobs"});function l(){return u}},pQ8Y:function(t,e,n){"use strict";var r=n("2Fjn"),o=n("bZJ2"),i=n("yLsn"),a=n.n(i),c=n("z3IF"),s=n("mXGw"),u=n("PDtE"),l=n("XpU0"),f=s.createElement,p=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a()(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var m=s.forwardRef((function(t,e){var n=t.alignContent,o=void 0===n?"stretch":n,i=t.alignItems,a=void 0===i?"stretch":i,s=t.classes,l=t.className,p=t.component,d=void 0===p?"div":p,h=t.container,m=void 0!==h&&h,g=t.direction,v=void 0===g?"row":g,y=t.item,b=void 0!==y&&y,_=t.justify,x=void 0===_?"flex-start":_,w=t.lg,j=void 0!==w&&w,O=t.md,S=void 0!==O&&O,k=t.sm,E=void 0!==k&&k,C=t.spacing,W=void 0===C?0:C,N=t.wrap,P=void 0===N?"wrap":N,M=t.xl,F=void 0!==M&&M,I=t.xs,q=void 0!==I&&I,R=t.zeroMinWidth,T=void 0!==R&&R,U=Object(r.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(u.a)(s.root,l,m&&[s.container,0!==W&&s["spacing-xs-".concat(String(W))]],b&&s.item,T&&s.zeroMinWidth,"row"!==v&&s["direction-xs-".concat(String(v))],"wrap"!==P&&s["wrap-xs-".concat(String(P))],"stretch"!==a&&s["align-items-xs-".concat(String(a))],"stretch"!==o&&s["align-content-xs-".concat(String(o))],"flex-start"!==x&&s["justify-xs-".concat(String(x))],!1!==q&&s["grid-xs-".concat(String(q))],!1!==E&&s["grid-sm-".concat(String(E))],!1!==S&&s["grid-md-".concat(String(S))],!1!==j&&s["grid-lg-".concat(String(j))],!1!==F&&s["grid-xl-".concat(String(F))]);return f(d,Object(c.a)({className:G,ref:e},U))})),g=Object(l.default)((function(t){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return p.forEach((function(r){var o=t.spacing(r);0!==o&&(n["spacing-".concat(e,"-").concat(r)]={margin:"-".concat(h(o,2)),width:"calc(100% + ".concat(h(o),")"),"& > $item":{padding:h(o,2)}})})),n}(t,"xs"),{},t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var r={};d.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var o="".concat(Math.round(t/12*1e8)/1e6,"%");r[e]={flexBasis:o,flexGrow:0,maxWidth:o}}else r[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(t,r):t[e.breakpoints.up(n)]=r}(e,t,n),e}),{}))}),{name:"MuiGrid"})(m);e.a=g},tFRh:function(t,e,n){"use strict";var r=n("mXGw"),o=n.n(r),i=n("XpU0"),a=n("EWRx"),c=n("KFoC"),s=n("CTgH"),u=n("IC7y"),l=n("kVtE"),f=n("xPcB"),p=o.a.createElement,d=p(f.a,null);e.a=Object(i.default)((function(t){return{root:{flex:"1 0 100%"},container:{marginBottom:t.spacing(20),maxWidth:680+t.spacing(12),"& .markdownElement":{paddingRight:t.spacing(4)}}}}))((function(t){var e=t.classes,n=t.markdown,r=t.markdownLocation,o=t.req,i=t.reqPrefix,f=t.reqSource,h=Object(u.a)({markdown:n,markdownLocation:r,req:o,reqPrefix:i,reqSource:f}),m=Object(l.d)(h.markdown);return p(c.a,null,p(a.a,{title:"".concat(m.title||Object(l.e)(h.markdown)," - Material-UI"),description:m.description||Object(l.c)(h.markdown)}),p("div",{className:e.root},p(s.a,{className:e.container},h.element),d))}))},xPcB:function(t,e,n){"use strict";var r=n("azxR"),o=n("mXGw"),i=n.n(o),a=n("/m4v"),c=n("GcvH"),s=n.n(c),u=n("XpU0"),l=n("Oy88"),f=n("pQ8Y"),p=n("Uoj6"),d=n("FAXT"),h=n("OxvQ"),m=i.a.createElement,g=m(d.a,null),v=m("img",{src:"/static/logo_raw.svg",alt:""}),y=m(h.a,{variant:"body1",color:"inherit",href:"/"},"Material-UI"),b=m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://github.com/Foso/material-ui"},"GitHub")),_=m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://twitter.com/MaterialUI"},"Twitter")),x=m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://stackoverflow.com/questions/tagged/material-ui"},"StackOverflow")),w=m("ul",null,m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/company/about/"},"About")),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/company/contact/"},"Contact Us")),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/company/jobs/"},"Jobs")));e.a=Object(u.default)((function(t){return{root:{marginTop:t.spacing(6)},footer:Object(r.a)({padding:t.spacing(3,0)},t.breakpoints.up("sm"),{padding:t.spacing(8,0)}),logo:{display:"flex",alignItems:"center",marginBottom:t.spacing(4),"& img":{width:28,height:22,marginRight:t.spacing(1.5)}},list:{marginBottom:t.spacing(4),"& h3":{fontWeight:t.typography.fontWeightMedium},"& ul":{margin:0,padding:0,listStyle:"none"},"& li":{padding:"6px 0",color:t.palette.text.secondary}},version:{marginTop:t.spacing(3)}}}))((function(t){var e=t.classes,n=Object(a.d)((function(t){return t.options.t}));return m("div",{className:e.root},g,m(p.a,{maxWidth:"md"},m("footer",{className:e.footer},m(f.a,{container:!0},m(f.a,{item:!0,xs:12,sm:3},m("div",{className:e.logo},v,y)),m(f.a,{item:!0,xs:6,sm:3,className:e.list},m(l.a,{component:"h2",gutterBottom:!0},n("footerCommunity")),m("ul",null,b,_,x,m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/discover-more/team/"},n("pages./discover-more/team"))))),m(f.a,{item:!0,xs:6,sm:3,className:e.list},m(l.a,{component:"h2",gutterBottom:!0},n("footerResources")),m("ul",null,m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/getting-started/support/"},n("pages./getting-started/support"))),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"https://medium.com/material-ui/"},n("blogTitle"))),m("li",null,m(h.a,{color:"inherit",variant:"body2",href:"/components/material-icons/"},n("pages./components/material-icons"))))),m(f.a,{item:!0,xs:6,sm:3,className:e.list},m(l.a,{component:"h2",gutterBottom:!0},n("footerCompany")),w)),m(l.a,{className:e.version,color:"textSecondary",variant:"body2"},m(s.a,{replacement:{versionNumber:m(h.a,{color:"inherit",href:"https://material-ui.com/versions/","aria-label":"v".concat("4.9.5",". View versions page.")},"v".concat("4.9.5")),license:m(h.a,{color:"inherit",href:"https://github.com/Foso/material-ui/blob/master/LICENSE"},n("license"))}},n("homeFooterRelease"))," Copyright \xa9 ",(new Date).getFullYear()," Material-UI. "))))}))}},[["iAFL",0,1]]]);