"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6734],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,A=function(e,t){if(null==e)return{};var r,n,A={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(A[r]=e[r]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(A[r]=e[r])}return A}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,A=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=o(r),d=A,l=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(l,i(i({ref:t},c),{},{components:r})):n.createElement(l,i({ref:t},c))}));function d(e,t){var r=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:A,i[1]=s;for(var o=2;o<a;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2308:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return f}});var n=r(7462),A=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3,sidebar_label:"Trie",title:"Trie Data Structure",slug:"/trie-data-structure",tags:["Data Structures"]},u=void 0,o={unversionedId:"data-structures/tree/trie",id:"data-structures/tree/trie",title:"Trie Data Structure",description:"First Views of Trie:",source:"@site/tutorials/data-structures/tree/trie.md",sourceDirName:"data-structures/tree",slug:"/trie-data-structure",permalink:"/devviews/tutorials/trie-data-structure",tags:[{label:"Data Structures",permalink:"/devviews/tutorials/tags/data-structures"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Trie",title:"Trie Data Structure",slug:"/trie-data-structure",tags:["Data Structures"]},sidebar:"dataStructureSidebar",previous:{title:"Heap",permalink:"/devviews/tutorials/heap-data-structure"},next:{title:"intro",permalink:"/devviews/tutorials/data-structures/intro"}},c=[{value:"First Views of Trie:",id:"first-views-of-trie",children:[],level:3}],p={toc:c};function f(e){var t=e.components,s=(0,A.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"first-views-of-trie"},"First Views of Trie:"),(0,a.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"*",(0,a.kt)("strong",{parentName:"h5"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When you type a key word prefix on a search engine, it may be pull out other recommended key words like this very fast:\n",(0,a.kt)("img",{alt:"Trie data structure demo",src:r(9616).Z})),(0,a.kt)("p",{parentName:"div"},"How the search engine do that? It uses a data structure called ",(0,a.kt)("strong",{parentName:"p"},"Trie")," (short for Re",(0,a.kt)("strong",{parentName:"p"},"trie"),"val) to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"store prefixes in nodes"))," & ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"store words in edges"))," of the tree.\n",(0,a.kt)("img",{alt:"Trie data structure example",src:r(9655).Z})))))}f.isMDXComponent=!0},9655:function(e,t,r){t.Z=r.p+"assets/images/Trie_example.svg-28dabc36110c14d9fe2df2ec8c19d923.png"},9616:function(e,t){t.Z="data:image/png;base64,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"}}]);