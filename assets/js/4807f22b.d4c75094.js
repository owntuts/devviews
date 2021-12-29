"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7357],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return A}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),A=r,m=h["".concat(l,".").concat(A)]||h[A]||d[A]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2749:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1e3,sidebar_label:"Shadow DOM Structure",title:"Shadow DOM Structure",slug:"/shadow-dom-structure",tags:["Basic Angular Interviews"]},l=void 0,c={unversionedId:"js/angular-interviews/basic/shadowDOM-structure",id:"js/angular-interviews/basic/shadowDOM-structure",title:"Shadow DOM Structure",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/shadowDOM-structure.md",sourceDirName:"js/angular-interviews/basic",slug:"/shadow-dom-structure",permalink:"/interviews/shadow-dom-structure",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/shadowDOM-structure.md",tags:[{label:"Basic Angular Interviews",permalink:"/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Shadow DOM Structure",title:"Shadow DOM Structure",slug:"/shadow-dom-structure",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"JIT vs AOT",permalink:"/interviews/differences-onchanges-docheck-angular"},next:{title:"What Is ViewEncapsulation in Angular?",permalink:"/interviews/viewencapsulation-angular"}},u=[{value:"The Structure of Shadow DOM contains:",id:"the-structure-of-shadow-dom-contains",children:[],level:3},{value:"Why Do Shadow DOMs Matter?",id:"why-do-shadow-doms-matter",children:[],level:3},{value:"Example of creating shadow dom",id:"example-of-creating-shadow-dom",children:[],level:3}],d={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nPlease describe ",(0,o.kt)("strong",{parentName:"p"},"Shadow DOM structure"),"? Why Do Shadow DOMs Matter? Please give an example of creating shadow dom?"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"ANSWER:")),(0,o.kt)("p",null,"  ","*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,o.kt)("h3",{id:"the-structure-of-shadow-dom-contains"},"The Structure of Shadow DOM contains:"),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"Shadow DOM",src:a(3948).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow host"),": A regular DOM node that the shadow DOM is attached to. Browsers will render ",(0,o.kt)("em",{parentName:"li"},"Shadow Host")," in DOM tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow tree"),": DOM tree of shadow DOM behind ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Shadow host"))," & all it's elements are hidden from the regular DOM tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow boundary"),": Like an area encapsulates Shadow tree into a separate local scope to hide DOM logic (structure, style,...) behind other elements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow root"),": The root node of the shadow tree.")),(0,o.kt)("h3",{id:"why-do-shadow-doms-matter"},"Why Do Shadow DOMs Matter?"),(0,o.kt)("p",null,"Shadow DOM allows us to hide DOM logic (structure, style,...) behind other elements. That forms the so call ",(0,o.kt)("strong",{parentName:"p"},"local scoped variables")," and ",(0,o.kt)("strong",{parentName:"p"},"local scoped style sheet")," which mean it's seperate & not conflict with the global scope of regular DOM. "),(0,o.kt)("h3",{id:"example-of-creating-shadow-dom"},"Example of creating shadow dom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./shadowDomExample.js"',title:'"./shadowDomExample.js"'},"// Create a shadow host\nlet hostEl = document.createElement('p', {\"id\":\"im-host-el\"});\n// Attach shadow context to the host element\nlet shadow = hostEl.attachShadow({mode: 'open'});\n// `open` means that you can access the shadow DOM using JavaScript written in the main page context (which is outside shadow context). \n// If you set `close`, it returns null. \nconsole.log(hostEl.shadowRoot);\n// Attach element to the Shadow DOM tree\nlet childEl = document.createElement('span');\nshadow.appendChild(childEl);\n// log the shadow DOM behind host elelment\nconsole.log(hostEl);\n")),(0,o.kt)("p",null,"  The output of the shadow dom is like this:"),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"Shadow DOM output",src:a(6642).Z}))))}h.isMDXComponent=!0},3948:function(e,t,a){t.Z=a.p+"assets/images/shadowdom-c153864243b3a525ea905fcd69680cac.png"},6642:function(e,t){t.Z="data:image/png;base64,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"}}]);