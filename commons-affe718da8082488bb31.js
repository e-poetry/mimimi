(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{8377:function(t,e,n){"use strict";n.d(e,{Z:function(){return At}});var r,o,i,a,u=n(1937),c=n(6674),s=n(5444),l=n(7294),f=n(5697),p=n.n(f),d=n(8412),y=n.n(d),h=n(1275),m=n.n(h),b=n(1209),v=n.n(b),T="bodyAttributes",g="htmlAttributes",w="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(A).map((function(t){return A[t]})),"charset"),C="cssText",S="href",E="http-equiv",j="innerHTML",x="itemprop",k="name",P="property",L="rel",I="src",M="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",_="defer",D="encodeSpecialCharacters",H="onChangeClientState",B="titleTemplate",q=Object.keys(N).reduce((function(t,e){return t[N[e]]=e,t}),{}),Z=[A.NOSCRIPT,A.SCRIPT,A.STYLE],Y="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},z=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},W=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},V=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},G=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(t){var e=et(t,A.TITLE),n=et(t,B);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=et(t,R);return e||r||void 0},$=function(t){return et(t,H)||function(){}},J=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return K({},t,e)}),{})},X=function(t,e){return e.filter((function(t){return void 0!==t[A.BASE]})).map((function(t){return t[A.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},tt=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&at("Helmet: "+t+' should be of type "Array". Instead found type "'+F(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===L&&"canonical"===t[n].toLowerCase()||c===L&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==j&&u!==C&&u!==x||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=v()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},et=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},nt=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){nt(t)}),0)}),rt=function(t){return clearTimeout(t)},ot="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||nt:n.g.requestAnimationFrame||nt,it="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||rt:n.g.cancelAnimationFrame||rt,at=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ut=null,ct=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ft(A.BODY,r),ft(A.HTML,o),lt(f,p);var d={baseTag:pt(A.BASE,n),linkTags:pt(A.LINK,i),metaTags:pt(A.META,a),noscriptTags:pt(A.NOSCRIPT,u),scriptTags:pt(A.SCRIPT,s),styleTags:pt(A.STYLE,l)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),c(t,y,h)},st=function(t){return Array.isArray(t)?t.join(""):t},lt=function(t,e){void 0!==t&&document.title!==t&&(document.title=st(t)),ft(A.TITLE,e)},ft=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},pt=function(t,e){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===j)n.innerHTML=e.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(Y,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},dt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},yt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[N[n]||n]=t[n],e}),e)},ht=function(t,e,n){switch(t){case A.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[Y]=!0,o=yt(n,r),[l.createElement(A.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=dt(n),i=st(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+G(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+G(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case T:case g:return{toComponent:function(){return yt(e)},toString:function(){return dt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(e).forEach((function(t){var n=N[t]||t;if(n===j||n===C){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),l.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===j||t===C)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+G(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Z.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},mt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:ht(A.BASE,e,r),bodyAttributes:ht(T,n,r),htmlAttributes:ht(g,o,r),link:ht(A.LINK,i,r),meta:ht(A.META,a,r),noscript:ht(A.NOSCRIPT,u,r),script:ht(A.SCRIPT,c,r),style:ht(A.STYLE,s,r),title:ht(A.TITLE,{title:f,titleAttributes:p},r)}},bt=y()((function(t){return{baseTag:X([S,M],t),bodyAttributes:J(T,t),defer:et(t,_),encode:et(t,D),htmlAttributes:J(g,t),linkTags:tt(A.LINK,[L,S],t),metaTags:tt(A.META,[k,O,E,P,x],t),noscriptTags:tt(A.NOSCRIPT,[j],t),onChangeClientState:$(t),scriptTags:tt(A.SCRIPT,[I,j],t),styleTags:tt(A.STYLE,[C],t),title:Q(t),titleAttributes:J(w,t)}}),(function(t){ut&&it(ut),t.defer?ut=ot((function(){ct(t,(function(){ut=null}))})):(ct(t),ut=null)}),mt)((function(){return null})),vt=(o=bt,a=i=function(t){function e(){return U(this,e),V(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!m()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:e};case A.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return K({},r,((e={})[n.type]=[].concat(r[n.type]||[],[K({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case A.TITLE:return K({},o,((e={})[r.type]=a,e.titleAttributes=K({},i),e));case A.BODY:return K({},o,{bodyAttributes:K({},i)});case A.HTML:return K({},o,{htmlAttributes:K({},i)})}return K({},o,((n={})[r.type]=K({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=K({},e);return Object.keys(t).forEach((function(e){var r;n=K({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[q[n]||n]=t[n],e}),e)}(W(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=W(t,["children"]),r=K({},n);return e&&(r=this.mapChildrenToProps(e,r)),l.createElement(o,r)},z(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(l.Component),i.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=mt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);vt.renderStatic=vt.rewind;function Tt(t){var e,n,r=t.description,o=t.lang,i=t.meta,a=t.title,u=(0,s.useStaticQuery)("2240874269").site,c=r||u.siteMetadata.description,f=null===(e=u.siteMetadata)||void 0===e?void 0:e.title,p=u.siteMetadata.url+u.siteMetadata.defaultImage;return l.createElement(vt,{htmlAttributes:{lang:o},title:a,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:c},{property:"og:title",content:a},{property:"og:description",content:c},{property:"og:image",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:c}].concat(i)})}Tt.defaultProps={lang:"en",meta:[],description:""};var gt=Tt,wt=function(t){return(0,u.tZ)("div",Object.assign({},t,{sx:{width:"100%",maxWidth:"container",mx:"auto",px:3}}))};function At(t){var e,n,r,o=(0,s.useStaticQuery)("3649515864");return(0,u.tZ)("div",{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",variant:"layout.root"}},(0,u.tZ)(gt,{title:(null===(e=t.seo)||void 0===e?void 0:e.title)||(null===(n=t.pageContext)||void 0===n?void 0:n.frontmatter.title)}),(0,u.tZ)("header",{sx:{width:"100%",variant:"layout.header"}},(0,u.tZ)(wt,null,(0,u.tZ)(c.Ge.a,{as:s.Link,to:"/"},(0,u.tZ)(c.Ge.h1,{style:{mb:0}},(null===(r=o.site.siteMetadata)||void 0===r?void 0:r.title)||"Title")))),(0,u.tZ)("main",{sx:{width:"100%",flex:"1 1 auto",variant:"layout.main"}},(0,u.tZ)(wt,null,t.children)))}},1275:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!i(t[s[c]],a[s[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},8412:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=t(s.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},1937:function(t,e,n){"use strict";n.d(e,{tZ:function(){return r}});var r=n(1441).tZ}}]);
//# sourceMappingURL=commons-affe718da8082488bb31.js.map