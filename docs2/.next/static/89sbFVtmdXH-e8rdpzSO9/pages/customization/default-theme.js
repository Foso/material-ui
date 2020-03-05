(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{"38cv":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("mXGw"),r=n.n(a),o=n("e+1t"),c=r.a.createElement,s=n("sEsf"),i=n("ssh+"),l=c(o.a,{req:s,reqSource:i,reqPrefix:"pages/customization/default-theme"});function u(){return l}},"6n2s":function(e,t){e.exports='# Tema predeterminado\n\n<p class="description">Aqu\xed es c\xf3mo se ve el objeto de tema con los valores predeterminados.</p>\n\n## Explorar\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\nSi deseas obtener m\xe1s informaci\xf3n sobre c\xf3mo se monta el tema, echa un vistazo a [`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js), y los imports que utiliza `createMuiTheme`.\n'},Be1a:function(e,t){e.exports='# Standardtheme\n\n<p class="description">So sieht das Designobjekt mit den Standardwerten aus.</p>\n\n## Entdecke\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\nWenn Sie mehr dar\xfcber erfahren m\xf6chten, wie das Theme zusammengestellt wird, werfen Sie einen Blick auf [` material-ui / style / createMuiTheme.js `](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js), und die zugeh\xf6rigen Importe, die ` createMuiTheme ` verwendet.\n'},Hg0Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("mXGw"),r=n("zpLS");function o(){return a.useContext(r.a)}},JJrX:function(e,t,n){"use strict";n.r(t);var a=n("0tNF"),r=n("z3IF"),o=n("2Fjn"),c=n("1qCV"),s=n.n(c),i=n("s20r"),l=n.n(i),u=n("mXGw"),d=n.n(u),p=n("/m4v"),h=n("so/P"),m=n.n(h),f=n("7KoJ"),b=n("HC9H"),y=n("Zu0E"),g=n("SusW"),j=n("PDtE"),v=n("yZEQ"),k=n("cYeA"),x=n("mKyP"),w=n("XpU0"),T=n("Lqxv"),O=n("uU96"),I=d.a.createElement;function E(e){var t,n=e.objectKey,a=e.objectValue,r=(t=a,l()(t)?"array":null===t?"null":typeof t),o=function(e,t){switch(t){case"array":return"Array(".concat(e.length,")");case"null":return"null";case"undefined":return"undefined";case"function":return"f ".concat(e.name,"()");case"object":return"Object";case"string":return'"'.concat(e,'"');case"symbol":return"Symbol(".concat(String(e),")");case"bigint":case"boolean":case"number":default:return String(e)}}(a,r),c=function(e){switch(e){case"object":case"array":return"comment";default:return e}}(r);return I(d.a.Fragment,null,n,": ",I("span",{className:Object(j.a)("token",c)},o))}var C=Object(v.a)({treeItem:{"&:focus > $treeItemContent":{backgroundColor:Object(k.lighten)("#333",.08),outline:"2px dashed ".concat(Object(k.lighten)("#333",.3))}},treeItemContent:{"&:hover":{backgroundColor:Object(k.lighten)("#333",.08)}}});function N(e){var t=e.nodeId,n=e.objectKey,a=e.objectValue,r=t,o=null;(null!==a&&"object"===typeof a||"function"===typeof a)&&(o=0===s()(a).length?void 0:s()(a).map((function(e){return I(N,{key:e,nodeId:"".concat(r,".").concat(e),objectKey:e,objectValue:a[e]})})));var c=C();return I(g.a,{classes:{root:c.treeItem,content:c.treeItemContent},nodeId:t,label:I(E,{objectKey:n,objectValue:a})},o)}var P=I(f.a,null),S=I(b.a,null);function R(e){var t=e.data,n=e.expandPaths,a=Object(o.a)(e,["data","expandPaths"]),c=d.a.useMemo((function(){return l()(n)?n.map((function(e){return"".concat("$ROOT",".").concat(e)})):[]}),["$ROOT",n]),i=d.a.useMemo((function(){return c.join("")}),[c]);return I(y.a,Object(r.a)({key:i,defaultCollapseIcon:P,defaultEndIcon:I("div",{style:{width:24}}),defaultExpanded:c,defaultExpandIcon:S},a),s()(t).map((function(e){return I(N,{key:e,nodeId:"".concat("$ROOT",".").concat(e),objectKey:e,objectValue:t[e]})})))}function $(e){var t=d.a.useState([]),n=t[0],r=t[1];return d.a.useEffect((function(){r(function e(t,n){if(null!==t&&"object"===typeof t||"function"===typeof t){var r=[];return s()(t).forEach((function(o){r.push.apply(r,["".concat(n).concat(o)].concat(Object(a.a)(e(t[o],"".concat(n).concat(o,".")))))})),r}return[]}(e,""))}),[e]),n}t.default=Object(w.default)((function(e){return{root:{width:"100%"},inspector:{backgroundColor:"#333",color:"#fff",borderRadius:e.shape.borderRadius,padding:e.spacing(1)},switch:{paddingBottom:e.spacing(1)}}}))((function(e){var t=e.classes,n=d.a.useState(!1),a=n[0],r=n[1],o=d.a.useState(null),c=o[0],s=o[1],i=Object(p.d)((function(e){return e.options.t})),l=d.a.useState(!1),u=l[0],h=l[1];d.a.useEffect((function(){var e=m.a.parse(document.location.href,!0),t=e.query["expand-path"]||e.query["expend-path"];t&&s(t.replace("$.","").split(".").reduce((function(e,t){var n=e.length>0?"".concat(e[e.length-1],"."):"";return e.push(n+t),e}),[]))}),[]);var f=d.a.useMemo((function(){return Object(x.a)({palette:{type:u?"dark":"light"}})}),[u]),b=$(f);return d.a.useDebugValue(b),d.a.useEffect((function(){a&&s(b)}),[a,b]),I("div",{className:t.root},I(T.a,{className:t.switch,control:I(O.a,{checked:a,onChange:function(e,t){r(t),s(t?b:[])}}),label:i("expandAll")}),I(T.a,{className:t.switch,control:I(O.a,{checked:u,onChange:function(e,t){h(t)}}),label:i("useDarkTheme")}),I(R,{className:t.inspector,data:f,expandPaths:c}))}))},Lqxv:function(e,t,n){"use strict";var a=n("z3IF"),r=n("2Fjn"),o=n("mXGw"),c=n("PDtE"),s=n("Hg0Q"),i=n("XpU0"),l=n("Oy88"),u=n("rKPb"),d=o.createElement,p=o.forwardRef((function(e,t){e.checked;var n=e.classes,i=e.className,p=e.control,h=e.disabled,m=(e.inputRef,e.label),f=e.labelPlacement,b=void 0===f?"end":f,y=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(s.a)(),j=h;"undefined"===typeof j&&"undefined"!==typeof p.props.disabled&&(j=p.props.disabled),"undefined"===typeof j&&g&&(j=g.disabled);var v={disabled:j};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof p.props[t]&&"undefined"!==typeof e[t]&&(v[t]=e[t])})),d("label",Object(a.a)({className:Object(c.a)(n.root,i,"end"!==b&&n["labelPlacement".concat(Object(u.a)(b))],j&&n.disabled),ref:t},y),o.cloneElement(p,v),d(l.a,{component:"span",className:Object(c.a)(n.label,j&&n.disabled)},m))}));t.a=Object(i.default)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(p)},SusW:function(e,t,n){"use strict";var a=n("z3IF"),r=n("s20r"),o=n.n(r),c=n("2Fjn"),s=n("mXGw"),i=n("PDtE"),l=n("Oy88"),u=n("lyll"),d=n("cYeA"),p=n("LMpM"),h=n("XpU0"),m=n("+rSm"),f=n("Xk+5"),b=s.createElement,y=function(e){return e&&1===e.length&&e.match(/\S/)},g=s.forwardRef((function(e,t){var n=e.children,r=e.classes,d=e.className,h=e.collapseIcon,g=e.endIcon,j=e.expandIcon,v=e.icon,k=e.label,x=e.nodeId,w=e.onClick,T=e.onFocus,O=e.onKeyDown,I=e.onMouseDown,E=e.TransitionComponent,C=void 0===E?u.a:E,N=e.TransitionProps,P=Object(c.a)(e,["children","classes","className","collapseIcon","endIcon","expandIcon","icon","label","nodeId","onClick","onFocus","onKeyDown","onMouseDown","TransitionComponent","TransitionProps"]),S=s.useContext(f.a),R=S.icons,$=S.focus,F=S.focusFirstNode,M=S.focusLastNode,D=S.focusNextNode,z=S.focusPreviousNode,K=S.focusByFirstCharacter,L=S.selectNode,V=S.selectRange,X=S.selectNextNode,A=S.selectPreviousNode,B=S.rangeSelectToFirst,q=S.rangeSelectToLast,U=S.selectAllNodes,H=S.expandAllSiblings,G=S.toggleExpansion,J=S.isExpanded,_=S.isFocused,Z=S.isSelected,W=S.isTabbable,Q=S.multiSelect,Y=S.selectionDisabled,ee=S.getParent,te=S.mapFirstChar,ne=S.addNodeToNodeMap,ae=S.removeNodeFromNodeMap,re=s.useRef(null),oe=s.useRef(null),ce=Object(m.a)(re,t),se=v,ie=Boolean(o()(n)?n.length:n),le=!!J&&J(x),ue=!!_&&_(x),de=!!W&&W(x),pe=!!Z&&Z(x),he=R||{},me=Object(p.a)();se||(ie?(se=le?h||he.defaultCollapseIcon:j||he.defaultExpandIcon)||(se=he.defaultParentIcon):se=g||he.defaultEndIcon);var fe=function(e){return ie&&(le?D(x):G(e)),!0},be=function(e){if(le)return G(e,x),!0;var t=ee(x);return!!t&&($(t),!0)};return s.useEffect((function(){var e=s.Children.map(n,(function(e){return e.props.nodeId}))||[];ne&&ne(x,e)}),[n,x,ne]),s.useEffect((function(){if(ae)return function(){ae(x)}}),[x,ae]),s.useEffect((function(){te&&k&&te(x,oe.current.textContent.substring(0,1).toLowerCase())}),[te,x,k]),s.useEffect((function(){ue&&re.current.focus()}),[ue]),b("li",Object(a.a)({className:Object(i.a)(r.root,d,le&&r.expanded,pe&&r.selected),role:"treeitem",onKeyDown:function(e){var t=!1,n=e.key;if(!e.altKey&&e.currentTarget===e.target){var a=e.ctrlKey||e.metaKey;switch(n){case" ":re.current===e.currentTarget&&(Q&&e.shiftKey?V(e,{end:x}):Q?L(e,x,!0):L(e,x),t=!0),e.stopPropagation();break;case"Enter":re.current===e.currentTarget&&ie&&(G(e),t=!0),e.stopPropagation();break;case"ArrowDown":Q&&e.shiftKey&&X(e,x),D(x),t=!0;break;case"ArrowUp":Q&&e.shiftKey&&A(e,x),z(x),t=!0;break;case"ArrowRight":t="rtl"===me.direction?be(e):fe(e);break;case"ArrowLeft":t="rtl"===me.direction?fe(e):be(e);break;case"Home":Q&&a&&e.shiftKey&&B(e,x),F(),t=!0;break;case"End":Q&&a&&e.shiftKey&&q(e,x),M(),t=!0;break;default:"*"===n?(H(e,x),t=!0):Q&&a&&"a"===n.toLowerCase()?(U(e),t=!0):y(n)&&(t=function(e,t){return!!y(t)&&(K(x,t),!0)}(0,n))}t&&(e.preventDefault(),e.stopPropagation()),O&&O(e)}},onFocus:function(e){!ue&&de&&$(x),T&&T(e)},"aria-expanded":ie?le:null,"aria-selected":!Y&&Z?Z(x):void 0,ref:ce,tabIndex:de?0:-1},P),b("div",{className:r.content,onClick:function(e){ue||$(x);var t=Q&&(e.shiftKey||e.ctrlKey||e.metaKey);!ie||t&&J(x)||G(e,x),Y||(t?e.shiftKey?V(e,{end:x}):L(e,x,!0):L(e,x)),w&&w(e)},onMouseDown:function(e){(e.shiftKey||e.ctrlKey||e.metaKey)&&e.preventDefault(),I&&I(e)},ref:oe},b("div",{className:r.iconContainer},se),b(l.a,{component:"div",className:r.label},k)),n&&b(C,Object(a.a)({unmountOnExit:!0,className:r.group,in:le,component:"ul",role:"group"},N),n))}));t.a=Object(h.default)((function(e){return{root:{listStyle:"none",margin:0,padding:0,outline:0,WebkitTapHighlightColor:"transparent","&:focus > $content $label":{backgroundColor:e.palette.action.hover},"&$selected > $content $label":{backgroundColor:Object(d.fade)(e.palette.primary.main,e.palette.action.selectedOpacity)},"&$selected > $content $label:hover, &$selected:focus > $content $label":{backgroundColor:Object(d.fade)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},expanded:{},selected:{},group:{margin:0,padding:0,marginLeft:17},content:{width:"100%",display:"flex",alignItems:"center",cursor:"pointer"},iconContainer:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},label:{width:"100%",paddingLeft:4,position:"relative","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{name:"MuiTreeItem"})(g)},U6ZR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customization/default-theme",function(){return n("38cv")}])},WH4S:function(e,t,n){"use strict";var a=n("z3IF"),r=n("hDBU"),o=n("2Fjn"),c=n("mXGw"),s=n("PDtE"),i=n("rbxJ"),l=n("Hg0Q"),u=n("XpU0"),d=n("l/nz"),p=c.createElement,h=c.forwardRef((function(e,t){var n=e.autoFocus,c=e.checked,u=e.checkedIcon,h=e.classes,m=e.className,f=e.defaultChecked,b=e.disabled,y=e.icon,g=e.id,j=e.inputProps,v=e.inputRef,k=e.name,x=e.onBlur,w=e.onChange,T=e.onFocus,O=e.readOnly,I=e.required,E=e.tabIndex,C=e.type,N=e.value,P=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),S=Object(i.a)({controlled:c,default:Boolean(f),name:"SwitchBase"}),R=Object(r.a)(S,2),$=R[0],F=R[1],M=Object(l.a)(),D=b;M&&"undefined"===typeof D&&(D=M.disabled);var z="checkbox"===C||"radio"===C;return p(d.a,Object(a.a)({component:"span",className:Object(s.a)(h.root,m,$&&h.checked,D&&h.disabled),disabled:D,tabIndex:null,role:void 0,onFocus:function(e){T&&T(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){x&&x(e),M&&M.onBlur&&M.onBlur(e)},ref:t},P),p("input",Object(a.a)({autoFocus:n,checked:c,defaultChecked:f,className:h.input,disabled:D,id:z&&g,name:k,onChange:function(e){var t=e.target.checked;F(t),w&&w(e,t)},readOnly:O,ref:v,required:I,tabIndex:E,type:C,value:N},j)),$?u:y)}));t.a=Object(u.default)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(h)},"Xk+5":function(e,t,n){"use strict";var a=n("mXGw"),r=a.createContext({});t.a=r},Zu0E:function(e,t,n){"use strict";var a=n("z3IF"),r=n("bZJ2"),o=n("0tNF"),c=n("1qCV"),s=n.n(c),i=n("s20r"),l=n.n(i),u=n("hDBU"),d=n("2Fjn"),p=n("mXGw"),h=n("PDtE"),m=n("Xk+5"),f=n("XpU0"),b=n("rbxJ"),y=p.createElement;var g=function(e,t,n){for(var a=t;a<e.length;a+=1)if(n===e[a])return a;return-1},j=[],v=[],k=p.forwardRef((function(e,t){var n=e.children,c=e.classes,i=e.className,f=e.defaultCollapseIcon,k=e.defaultEndIcon,x=e.defaultExpanded,w=void 0===x?j:x,T=e.defaultExpandIcon,O=e.defaultParentIcon,I=e.defaultSelected,E=void 0===I?v:I,C=e.disableSelection,N=void 0!==C&&C,P=e.multiSelect,S=void 0!==P&&P,R=e.expanded,$=e.onNodeSelect,F=e.onNodeToggle,M=e.selected,D=Object(d.a)(e,["children","classes","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disableSelection","multiSelect","expanded","onNodeSelect","onNodeToggle","selected"]),z=p.useState(null),K=z[0],L=z[1],V=p.useState(null),X=V[0],A=V[1],B=p.useRef({}),q=p.useRef({}),U=p.useRef([]),H=Object(b.a)({controlled:R,default:w,name:"TreeView"}),G=Object(u.a)(H,2),J=G[0],_=G[1],Z=Object(b.a)({controlled:M,default:E,name:"TreeView"}),W=Object(u.a)(Z,2),Q=W[0],Y=W[1],ee=p.useCallback((function(e){return!!l()(J)&&-1!==J.indexOf(e)}),[J]),te=p.useCallback((function(e){return l()(Q)?-1!==Q.indexOf(e):Q===e}),[Q]),ne=function(e){var t=U.current.indexOf(e);return-1!==t&&t+1<U.current.length?U.current[t+1]:null},ae=function(e){var t=U.current.indexOf(e);return-1!==t&&t-1>=0?U.current[t-1]:null},re=function(){return U.current[U.current.length-1]},oe=function(){return U.current[0]},ce=function(e){e&&(L(e),A(e))},se=p.useRef(null),ie=p.useRef(!1),le=p.useRef([]),ue=function(e,t){var n=Q,a=t.start,r=t.next,o=t.current;r&&o&&(-1===le.current.indexOf(o)&&(le.current=[]),ie.current?-1!==le.current.indexOf(r)?(n=n.filter((function(e){return e===a||e!==o})),le.current=le.current.filter((function(e){return e===a||e!==o}))):(n.push(r),le.current.push(r)):(n.push(r),le.current.push(o,r)),$&&$(e,n),Y(n))},de=function(e,t){var n=Q,a=t.start,r=t.end;ie.current&&(n=Q.filter((function(e){return-1===le.current.indexOf(e)})));var o=function(e,t){var n=U.current.indexOf(e),a=U.current.indexOf(t),r=Math.min(n,a),o=Math.max(n,a);return U.current.slice(r,o+1)}(a,r);le.current=o;var c=n.concat(o);c=c.filter((function(e,t){return c.indexOf(e)===t})),$&&$(e,c),Y(c)},pe=function(e,t){var n=[];n=-1!==Q.indexOf(t)?Q.filter((function(e){return e!==t})):[t].concat(Object(o.a)(Q)),$&&$(e,n),Y(n)},he=function(e,t){var n=S?[t]:t;$&&$(e,n),Y(n)},me=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=t.start,r=void 0===a?se.current:a,o=t.end,c=t.current;n?ue(e,{start:r,next:o,current:c}):de(e,{start:r,end:o}),ie.current=!0},fe=p.useCallback((function(e){var t=B.current[e],n=[];return t&&(n.push(e),t.children&&(n.push.apply(n,Object(o.a)(t.children)),t.children.forEach((function(e){n.push.apply(n,Object(o.a)(fe(e)))})))),n}),[]),be=p.useCallback((function(e){var t=fe(e),n=Object(r.a)({},B.current);t.forEach((function(e){var t=n[e];if(t){if(t.parent){var a=n[t.parent];if(a&&a.children){var o=a.children.filter((function(t){return t!==e}));n[t.parent]=Object(r.a)({},a,{children:o})}}delete n[e]}})),B.current=n}),[fe]),ye=p.useRef([]),ge=p.useState(!1),je=ge[0],ve=ge[1];return p.useEffect((function(){var e=[];p.Children.forEach(n,(function(t){p.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),function(e,t){if(e.length!==t.length)return!0;for(var n=0;n<e.length;n+=1)if(e[n]!==t[n])return!0;return!1}(ye.current,e)&&(B.current[-1]={parent:null,children:e},e.forEach((function(e,t){0===t&&L(e),B.current[e]={parent:null}})),U.current=B.current[-1].children,ye.current=e,ve(!0))}),[n]),p.useEffect((function(){je&&(U.current=function e(t){for(var n=[],a=0;a<t.length;a+=1){var r=t[a];n.push(r);var o=B.current[r].children;ee(r)&&o&&(n=n.concat(e(o)))}return n}(B.current[-1].children))}),[J,je,ee]),y(m.a.Provider,{value:{icons:{defaultCollapseIcon:f,defaultExpandIcon:T,defaultParentIcon:O,defaultEndIcon:k},focus:ce,focusFirstNode:function(){return ce(oe())},focusLastNode:function(){return ce(re())},focusNextNode:function(e){return ce(ne(e))},focusPreviousNode:function(e){return ce(ae(e))},focusByFirstCharacter:function(e,t){var n,a,r=t.toLowerCase(),o=[],c=[];s()(q.current).forEach((function(e){var t=q.current[e],n=B.current[e];(!n.parent||ee(n.parent))&&(o.push(e),c.push(t))})),(n=o.indexOf(e)+1)===B.current.length&&(n=0),-1===(a=g(c,n,r))&&(a=g(c,0,r)),a>-1&&ce(o[a])},expandAllSiblings:function(e,t){var n,a=B.current[t],r=B.current[a.parent];r?n=r.children.filter((function(e){return!ee(e)})):n=B.current[-1].children.filter((function(e){return!ee(e)}));var c=[].concat(Object(o.a)(J),Object(o.a)(n));_(c),F&&F(e,c)},toggleExpansion:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X;-1!==J.indexOf(n)?(t=J.filter((function(e){return e!==n})),L((function(e){var t=B.current[e];return e&&(t&&t.parent?t.parent.id:null)===n?n:e}))):t=[n].concat(Object(o.a)(J)),F&&F(e,t),_(t)},isExpanded:ee,isFocused:function(e){return X===e},isSelected:te,selectNode:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t&&(n?pe(e,t):he(e,t),se.current=t,ie.current=!1,le.current=[])},selectRange:me,selectNextNode:function(e,t){return me(e,{end:ne(t),current:t},!0)},selectPreviousNode:function(e,t){return me(e,{end:ae(t),current:t},!0)},rangeSelectToFirst:function(e,t){se.current||(se.current=t);var n=ie.current?se.current:t;me(e,{start:n,end:oe()})},rangeSelectToLast:function(e,t){se.current||(se.current=t);var n=ie.current?se.current:t;me(e,{start:n,end:re()})},selectAllNodes:function(e){return me(e,{start:oe(),end:re()})},isTabbable:function(e){return K===e},multiSelect:S,selectionDisabled:N,getParent:function(e){return B.current[e].parent},mapFirstChar:function(e,t){q.current[e]=t},addNodeToNodeMap:function(e,t){var n=B.current[e];B.current[e]=Object(r.a)({},n,{children:t,id:e}),t.forEach((function(t){var n=B.current[t];B.current[t]=Object(r.a)({},n,{parent:e,id:t})}))},removeNodeFromNodeMap:be}},y("ul",Object(a.a)({role:"tree","aria-multiselectable":S,className:Object(h.a)(c.root,i),ref:t},D),n))}));t.a=Object(f.default)({root:{padding:0,margin:0,listStyle:"none"}},{name:"MuiTreeView"})(k)},eetI:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { useSelector } from 'react-redux';\nimport url from 'url';\nimport ExpandIcon from '@material-ui/icons/ExpandMore';\nimport CollapseIcon from '@material-ui/icons/ChevronRight';\nimport TreeView from '@material-ui/lab/TreeView';\nimport TreeItem from '@material-ui/lab/TreeItem';\nimport clsx from 'clsx';\nimport { makeStyles, withStyles, createMuiTheme, lighten } from '@material-ui/core/styles';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport Switch from '@material-ui/core/Switch';\n\n/**\n * @param {unknown} value\n */\nfunction useType(value) {\n  if (Array.isArray(value)) {\n    return 'array';\n  }\n  if (value === null) {\n    return 'null';\n  }\n\n  return typeof value;\n}\n\n/**\n *\n * @param {unknown} value\n * @param {ReturnType<typeof useType>} type\n */\nfunction useLabel(value, type) {\n  switch (type) {\n    case 'array':\n      return `Array(${value.length})`;\n    case 'null':\n      return 'null';\n    case 'undefined':\n      return 'undefined';\n    case 'function':\n      return `f ${value.name}()`;\n    case 'object':\n      return 'Object';\n    case 'string':\n      return `\"${value}\"`;\n    case 'symbol':\n      return `Symbol(${String(value)})`;\n    case 'bigint':\n    case 'boolean':\n    case 'number':\n    default:\n      return String(value);\n  }\n}\n\nfunction useTokenType(type) {\n  switch (type) {\n    case 'object':\n    case 'array':\n      return 'comment';\n    default:\n      return type;\n  }\n}\n\nfunction ObjectEntryLabel({ objectKey, objectValue }) {\n  const type = useType(objectValue);\n  const label = useLabel(objectValue, type);\n  const tokenType = useTokenType(type);\n\n  return (\n    <React.Fragment>\n      {objectKey}: <span className={clsx('token', tokenType)}>{label}</span>\n    </React.Fragment>\n  );\n}\nObjectEntryLabel.propTypes = { objectKey: PropTypes.any, objectValue: PropTypes.any };\n\nconst useObjectEntryStyles = makeStyles({\n  treeItem: {\n    '&:focus > $treeItemContent': {\n      backgroundColor: lighten('#333', 0.08),\n      outline: `2px dashed ${lighten('#333', 0.3)}`,\n    },\n  },\n  treeItemContent: {\n    '&:hover': {\n      backgroundColor: lighten('#333', 0.08),\n    },\n  },\n});\n\nfunction ObjectEntry(props) {\n  const { nodeId, objectKey, objectValue } = props;\n\n  const keyPrefix = nodeId;\n\n  let children = null;\n  if (\n    (objectValue !== null && typeof objectValue === 'object') ||\n    typeof objectValue === 'function'\n  ) {\n    children =\n      Object.keys(objectValue).length === 0\n        ? undefined\n        : Object.keys(objectValue).map(key => {\n            return (\n              <ObjectEntry\n                key={key}\n                nodeId={`${keyPrefix}.${key}`}\n                objectKey={key}\n                objectValue={objectValue[key]}\n              />\n            );\n          });\n  }\n\n  const classes = useObjectEntryStyles();\n\n  return (\n    <TreeItem\n      classes={{ root: classes.treeItem, content: classes.treeItemContent }}\n      nodeId={nodeId}\n      label={<ObjectEntryLabel objectKey={objectKey} objectValue={objectValue} />}\n    >\n      {children}\n    </TreeItem>\n  );\n}\nObjectEntry.propTypes = {\n  nodeId: PropTypes.string.isRequired,\n  objectKey: PropTypes.any.isRequired,\n  objectValue: PropTypes.any,\n};\n\nfunction Inspector(props) {\n  const { data, expandPaths, ...other } = props;\n\n  const keyPrefix = '$ROOT';\n  const defaultExpanded = React.useMemo(() => {\n    return Array.isArray(expandPaths)\n      ? expandPaths.map(expandPath => `${keyPrefix}.${expandPath}`)\n      : [];\n  }, [keyPrefix, expandPaths]);\n  // for default*  to take effect we need to remount\n  const key = React.useMemo(() => defaultExpanded.join(''), [defaultExpanded]);\n\n  return (\n    <TreeView\n      key={key}\n      defaultCollapseIcon={<ExpandIcon />}\n      defaultEndIcon={<div style={{ width: 24 }} />}\n      defaultExpanded={defaultExpanded}\n      defaultExpandIcon={<CollapseIcon />}\n      {...other}\n    >\n      {Object.keys(data).map(objectKey => {\n        return (\n          <ObjectEntry\n            key={objectKey}\n            nodeId={`${keyPrefix}.${objectKey}`}\n            objectKey={objectKey}\n            objectValue={data[objectKey]}\n          />\n        );\n      })}\n    </TreeView>\n  );\n}\n\nInspector.propTypes = {\n  data: PropTypes.any,\n  expandPaths: PropTypes.arrayOf(PropTypes.string),\n};\n\nconst styles = theme => ({\n  root: {\n    width: '100%',\n  },\n  inspector: {\n    backgroundColor: '#333',\n    color: '#fff',\n    borderRadius: theme.shape.borderRadius,\n    padding: theme.spacing(1),\n  },\n  switch: {\n    paddingBottom: theme.spacing(1),\n  },\n});\n\nfunction computeNodeIds(object, prefix) {\n  if ((object !== null && typeof object === 'object') || typeof object === 'function') {\n    const ids = [];\n    Object.keys(object).forEach(key => {\n      ids.push(`${prefix}${key}`, ...computeNodeIds(object[key], `${prefix}${key}.`));\n    });\n\n    return ids;\n  }\n  return [];\n}\n\nfunction useNodeIdsLazy(object) {\n  const [allNodeIds, setAllNodeIds] = React.useState([]);\n  // technically we want to compute them lazily until we need them (expand all)\n  // yielding is good enough. technically we want to schedule the computation\n  // with low pri  and upgrade the priority later\n  React.useEffect(() => {\n    setAllNodeIds(computeNodeIds(object, ''));\n  }, [object]);\n\n  return allNodeIds;\n}\n\nfunction DefaultTheme(props) {\n  const { classes } = props;\n  const [checked, setChecked] = React.useState(false);\n  const [expandPaths, setExpandPaths] = React.useState(null);\n  const t = useSelector(state => state.options.t);\n  const [darkTheme, setDarkTheme] = React.useState(false);\n\n  React.useEffect(() => {\n    const URL = url.parse(document.location.href, true);\n    // 'expend-path' is for backwards compatibility of any external links with a prior typo.\n    const expandPath = URL.query['expand-path'] || URL.query['expend-path'];\n\n    if (!expandPath) {\n      return;\n    }\n\n    setExpandPaths(\n      expandPath\n        .replace('$.', '')\n        .split('.')\n        .reduce((acc, path) => {\n          const last = acc.length > 0 ? `${acc[acc.length - 1]}.` : '';\n          acc.push(last + path);\n          return acc;\n        }, []),\n    );\n  }, []);\n\n  const data = React.useMemo(() => {\n    return createMuiTheme({ palette: { type: darkTheme ? 'dark' : 'light' } });\n  }, [darkTheme]);\n\n  const allNodeIds = useNodeIdsLazy(data);\n  React.useDebugValue(allNodeIds);\n  React.useEffect(() => {\n    if (checked) {\n      // in case during the event handler allNodeIds wasn't computed yet\n      setExpandPaths(allNodeIds);\n    }\n  }, [checked, allNodeIds]);\n\n  return (\n    <div className={classes.root}>\n      <FormControlLabel\n        className={classes.switch}\n        control={\n          <Switch\n            checked={checked}\n            onChange={(event, newChecked) => {\n              setChecked(newChecked);\n              setExpandPaths(newChecked ? allNodeIds : []);\n            }}\n          />\n        }\n        label={t('expandAll')}\n      />\n      <FormControlLabel\n        className={classes.switch}\n        control={\n          <Switch\n            checked={darkTheme}\n            onChange={(event, newValue) => {\n              setDarkTheme(newValue);\n            }}\n          />\n        }\n        label={t('useDarkTheme')}\n      />\n      <Inspector className={classes.inspector} data={data} expandPaths={expandPaths} />\n    </div>\n  );\n}\n\nDefaultTheme.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(DefaultTheme);\n"},gzGw:function(e,t){e.exports='# Default Theme\n\n<p class="description">Here\'s what the theme object looks like with the default values.</p>\n\n## Explore\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console,\n> as the `theme` variable is exposed on all the documentation pages.\n> Please note that **the documentation site is using a custom theme**.\n\nIf you want to learn more about how the theme is assembled, take a look at [`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js),\nand the related imports which `createMuiTheme` uses.\n'},hzzB:function(e,t){e.exports='# Tema Padr\xe3o\n\n<p class="description">Veja como o objeto tema se parece com os valores padr\xe3o.</p>\n\n## Explorar\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\nSe voc\xea quiser aprender mais sobre como o tema \xe9 montado, d\xea uma olhada em [`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js), e as importa\xe7\xf5es relacionadas que `createMuiTheme` usa.\n'},i7wu:function(e,t){e.exports='# \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30c6\u30fc\u30de\n\n<p class="description">\u3053\u308c\u304c\u30c6\u30fc\u30de\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u304c\u3069\u306e\u3088\u3046\u306b\u898b\u3048\u308b\u304b\u3067\u3059\u3002</p>\n\n## \u8abf\u3079\u308b\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\n\u30c6\u30fc\u30de\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001[`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js)\u53c8\u306f `createMuiTheme`\u306b\u95a2\u9023\u3059\u308b\u3082\u306e\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u4f7f\u3063\u3066\u4e0b\u3055\u3044\u3002\n'},jcw8:function(e,t){e.exports='# crwdns93426:0crwdne93426:0\n\n<p class="description">crwdns93428:0crwdne93428:0</p>\n\n## crwdns93430:0crwdne93430:0\n\ncrwdns107893:0crwdne107893:0\n\ncrwdns107895:0crwdne107895:0\n\n> crwdns107897:0crwdne107897:0 crwdns107899:0crwdne107899:0\n\ncrwdns93442:0crwdne93442:0'},lOsL:function(e,t){e.exports='# Th\xe8mes par d\xe9faut\n\n<p class="description">Voici \xe0 quoi ressemble l\'objet de th\xe8me avec les valeurs par d\xe9faut.</p>\n\n## Explorer\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\nIf you want to learn more about how the theme is assembled, take a look at [`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js), and the related imports which `createMuiTheme` uses.\n'},o4Iv:function(e,t){e.exports='# \u0422\u0435\u043c\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n\n<p class="description">\u0412\u043e\u0442 \u043a\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u0442\u0435\u043c\u044b \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.</p>\n\n## \u041e\u0431\u0437\u043e\u0440\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0442\u0435\u043c\u044b \u0438\u0437\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0434\u0435\u0441\u044c [`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0437\u0443\u0447\u0438\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 `createMuiTheme`.\n'},sEsf:function(e,t,n){var a={"./DefaultTheme.js":"JJrX","./default-theme-aa.md":"jcw8","./default-theme-de.md":"Be1a","./default-theme-es.md":"6n2s","./default-theme-fr.md":"lOsL","./default-theme-ja.md":"i7wu","./default-theme-pt.md":"hzzB","./default-theme-ru.md":"o4Iv","./default-theme-zh.md":"zZ5n","./default-theme.md":"gzGw"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="sEsf"},"ssh+":function(e,t,n){var a={"./DefaultTheme.js":"eetI"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="ssh+"},uU96:function(e,t,n){"use strict";var a=n("z3IF"),r=n("2Fjn"),o=n("mXGw"),c=n("PDtE"),s=n("XpU0"),i=n("cYeA"),l=n("rKPb"),u=n("WH4S"),d=o.createElement,p=o.forwardRef((function(e,t){var n=e.classes,o=e.className,s=e.color,i=void 0===s?"secondary":s,p=e.edge,h=void 0!==p&&p,m=e.size,f=void 0===m?"medium":m,b=Object(r.a)(e,["classes","className","color","edge","size"]),y=d("span",{className:n.thumb});return d("span",{className:Object(c.a)(n.root,o,{start:n.edgeStart,end:n.edgeEnd}[h],"small"===f&&n["size".concat(Object(l.a)(f))])},d(u.a,Object(a.a)({type:"checkbox",icon:y,checkedIcon:y,classes:{root:Object(c.a)(n.switchBase,n["color".concat(Object(l.a)(i))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:t},b)),d("span",{className:n.track}))}));t.a=Object(s.default)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(p)},zZ5n:function(e,t){e.exports='# \u9ed8\u8ba4\u4e3b\u9898\n\n<p class="description">\u4ee5\u4e0b\u662ftheme\uff08\u4e3b\u9898\uff09\u5bf9\u8c61\u5728\u9ed8\u8ba4\u503c\u60c5\u51b5\u4e0b\u7684\u6837\u5b50\u3002</p>\n\n## \u63a2\u7d22\n\nExplore the default theme object:\n\n{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideHeader": true, "bg": "inline"}}\n\n> Tip: you can play with the documentation theme object in your browser console, as the `theme` variable is exposed on all the documentation pages. Please note that **the documentation site is using a custom theme**.\n\n\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u6709\u5173\u4e3b\u9898\u662f\u5982\u4f55\u7ec4\u5408\u7684\u4fe1\u606f\uff0c\u8bf7\u770b\u770b [`material-ui/style/createMuiTheme.js`](https://github.com/Foso/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js) \u548c \u5982\u4f55\u7528`createMuiTheme` \u5bfc\u5165\u4e3b\u9898\n'},zpLS:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n("mXGw"),r=a.createContext();function o(){return a.useContext(r)}t.a=r}},[["U6ZR",0,1]]]);