"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6739],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,sidebar_label:"Selection Sort",title:"Selection Sort Algorithm",slug:"/selection-sort-algorithm",tags:["Sort Algorithms"]},m=void 0,s={unversionedId:"algorithms/sort-algorithms/selection-sort",id:"algorithms/sort-algorithms/selection-sort",title:"Selection Sort Algorithm",description:"Problem:",source:"@site/tutorials/algorithms/sort-algorithms/selection-sort.md",sourceDirName:"algorithms/sort-algorithms",slug:"/selection-sort-algorithm",permalink:"/tutorials/selection-sort-algorithm",tags:[{label:"Sort Algorithms",permalink:"/tutorials/tags/sort-algorithms"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Selection Sort",title:"Selection Sort Algorithm",slug:"/selection-sort-algorithm",tags:["Sort Algorithms"]},sidebar:"algorithmSidebar",previous:{title:"Bubble Sort",permalink:"/tutorials/bubble-sort-algorithm"},next:{title:"Insertion Sort",permalink:"/tutorials/insertion-sort-algorithm"}},p=[{value:"Problem:",id:"problem",children:[],level:3},{value:"Concept:",id:"concept",children:[],level:3},{value:"Selection Sort Algorithm Explained",id:"selection-sort-algorithm-explained",children:[],level:3},{value:"Implementation Notes",id:"implementation-notes",children:[],level:3},{value:"Implementation Code",id:"implementation-code",children:[],level:3}],c={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"problem"},"Problem:"),(0,r.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"*",(0,r.kt)("strong",{parentName:"h5"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Given an array ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"n - 1")," items in unsorted order. Let's sort the items in ",(0,r.kt)("u",null,"ascending order"),"?"))),(0,r.kt)("h3",{id:"concept"},"Concept:"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"*",(0,r.kt)("strong",{parentName:"h5"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Select first item and suppose it's minimum (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"mark it as minimum")),"), then browses the rest items if there's an item lesser than the supposed minimum item, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"mark the new one as minimum")),"."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Slection Sort Concept Demo",src:n(7552).Z})))),(0,r.kt)("h3",{id:"selection-sort-algorithm-explained"},"Selection Sort Algorithm Explained"),(0,r.kt)("p",null,"We'll call ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Phase"))," & ",(0,r.kt)("inlineCode",{parentName:"p"},"j")," is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Pass"))," (or step)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"First Phase (i start at 0)"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mark the first item as minimum (first min item)."),(0,r.kt)("li",{parentName:"ul"},"Let's the Pass ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"j")," runs from ",(0,r.kt)("inlineCode",{parentName:"em"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"n - 1"))),". On the way, it compares each item to the min item if there's ",(0,r.kt)("inlineCode",{parentName:"li"},"A[j] < A[min]"),", it will mark the new position as min. At the end of the phase, we'll know which position is the real min item, then we swap the real min with the first supposed one.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Selection Algorithm Explained - phase 1",src:n(5818).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Second Phase (i = 1)"),": Similar to the first phase but "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mark the first min at ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},"The pass  ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"j")," runs from ",(0,r.kt)("inlineCode",{parentName:"em"},"2")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"n - 1"))),".")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Bubble Algorithm Explained - phase 2",src:n(7269).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Phase #i"),": And so on, at the phase ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),","),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mark the first min at ",(0,r.kt)("inlineCode",{parentName:"li"},"i"),"."),(0,r.kt)("li",{parentName:"ul"},"The pass  ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"j")," runs from ",(0,r.kt)("inlineCode",{parentName:"em"},"i + 1")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"n - 1"))),".")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Bubble Algorithm Explained - phase 3",src:n(8645).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Last Phase (i = n - 2)"),": At the last phase,  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"j")," runs from ",(0,r.kt)("inlineCode",{parentName:"em"},"n - 2")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"n - 1"))),". It compares ",(0,r.kt)("inlineCode",{parentName:"p"},"A[n - 2]")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"A[n - 1]")," -> the algorithm ends!"))),(0,r.kt)("h3",{id:"implementation-notes"},"Implementation Notes"),(0,r.kt)("p",null,"We have two for-loops, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one for ",(0,r.kt)("strong",{parentName:"li"},"the phase ",(0,r.kt)("inlineCode",{parentName:"strong"},"i"))," (runs from ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"n - 2"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},"for (int i = 0; i <= n - 2; i++)")),(0,r.kt)("li",{parentName:"ul"},"one for ",(0,r.kt)("strong",{parentName:"li"},"the pass ",(0,r.kt)("inlineCode",{parentName:"strong"},"j"))," (runs from ",(0,r.kt)("inlineCode",{parentName:"li"},"i + 1")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"n - 1"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},"for (int j = i + 1; j <= n - 1; j++)"))),(0,r.kt)("h3",{id:"implementation-code"},"Implementation Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"{4,6}","{4,6}":!0},"void selectionSort(vector<int> A) {\n  int n = A.size();\n    int min;\n    for (int i = 0; i <= n - 2; i++) {\n        min = i; // mark the position i as minimum\n        for (int j = i + 1; j <= n - 1; j++) {\n            if(A[j] < A[min]) {\n                min = j; // mark the new position j as minimum\n            }\n        }\n        swap(A[min], A[i]);\n     }\n}\n")))}d.isMDXComponent=!0},5818:function(e,t,n){t.Z=n.p+"assets/images/selection-algo-pass-1-7767bccedf59f2ccd816444b7c9d29b5.svg"},7269:function(e,t,n){t.Z=n.p+"assets/images/selection-algo-pass-2-21616fdf85cbe3392b84da28e6fddfb0.svg"},8645:function(e,t,n){t.Z=n.p+"assets/images/selection-algo-pass-i-342bdc30e6d65c56ea695a78dd7db143.svg"},7552:function(e,t,n){t.Z=n.p+"assets/images/selectionSort-demo-8637bf0ec1624619b5695447d62bd927.svg"}}]);