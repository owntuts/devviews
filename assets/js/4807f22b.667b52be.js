"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7357],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),A=a,p=d["".concat(l,".").concat(A)]||d[A]||h[A]||o;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},2749:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:1e3,sidebar_label:"Shadow DOM Structure",title:"Shadow DOM Structure",slug:"/shadow-dom-structure",tags:["Basic Angular Interviews"]},i=void 0,s={unversionedId:"js/angular-interviews/basic/shadowDOM-structure",id:"js/angular-interviews/basic/shadowDOM-structure",title:"Shadow DOM Structure",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/shadowDOM-structure.md",sourceDirName:"js/angular-interviews/basic",slug:"/shadow-dom-structure",permalink:"/devviews/interviews/shadow-dom-structure",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/shadowDOM-structure.md",tags:[{label:"Basic Angular Interviews",permalink:"/devviews/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Shadow DOM Structure",title:"Shadow DOM Structure",slug:"/shadow-dom-structure",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"JIT vs AOT",permalink:"/devviews/interviews/differences-onchanges-docheck-angular"},next:{title:"What Is ViewEncapsulation in Angular?",permalink:"/devviews/interviews/viewencapsulation-angular"}},l={},u=[{value:"The Structure of Shadow DOM contains:",id:"the-structure-of-shadow-dom-contains",level:3},{value:"Why Do Shadow DOMs Matter?",id:"why-do-shadow-doms-matter",level:3},{value:"Example of creating shadow dom",id:"example-of-creating-shadow-dom",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nPlease describe ",(0,a.kt)("strong",{parentName:"p"},"Shadow DOM structure"),"? Why Do Shadow DOMs Matter? Please give an example of creating shadow dom?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,a.kt)("h3",{id:"the-structure-of-shadow-dom-contains"},"The Structure of Shadow DOM contains:"),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"Shadow DOM",src:r(9725).Z,width:"657",height:"492"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shadow host"),": A regular DOM node that the shadow DOM is attached to. Browsers will render ",(0,a.kt)("em",{parentName:"li"},"Shadow Host")," in DOM tree."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shadow tree"),": DOM tree of shadow DOM behind ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Shadow host"))," & all it's elements are hidden from the regular DOM tree."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shadow boundary"),": Like an area encapsulates Shadow tree into a separate local scope to hide DOM logic (structure, style,...) behind other elements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shadow root"),": The root node of the shadow tree.")),(0,a.kt)("h3",{id:"why-do-shadow-doms-matter"},"Why Do Shadow DOMs Matter?"),(0,a.kt)("p",null,"Shadow DOM allows us to hide DOM logic (structure, style,...) behind other elements. That forms the so call ",(0,a.kt)("strong",{parentName:"p"},"local scoped variables")," and ",(0,a.kt)("strong",{parentName:"p"},"local scoped style sheet")," which mean it's seperate & not conflict with the global scope of regular DOM. "),(0,a.kt)("h3",{id:"example-of-creating-shadow-dom"},"Example of creating shadow dom"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./shadowDomExample.js"',title:'"./shadowDomExample.js"'},"// Create a shadow host\nlet hostEl = document.createElement('p', {\"id\":\"im-host-el\"});\n// Attach shadow context to the host element\nlet shadow = hostEl.attachShadow({mode: 'open'});\n// `open` means that you can access the shadow DOM using JavaScript written in the main page context (which is outside shadow context). \n// If you set `close`, it returns null. \nconsole.log(hostEl.shadowRoot);\n// Attach element to the Shadow DOM tree\nlet childEl = document.createElement('span');\nshadow.appendChild(childEl);\n// log the shadow DOM behind host elelment\nconsole.log(hostEl);\n")),(0,a.kt)("p",null,"  The output of the shadow dom is like this:"),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"Shadow DOM output",src:r(7231).Z,width:"394",height:"84"}))))}h.isMDXComponent=!0},9725:function(e,t,r){t.Z=r.p+"assets/images/shadowdom-c153864243b3a525ea905fcd69680cac.png"},7231:function(e,t){t.Z="data:image/png;base64,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"}}]);