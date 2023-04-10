"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4376],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6689:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"List vs Set vs Map",title:"List vs Set vs Map in Kotlin?",slug:"/list-set-map",tags:["Basic Kotlin Interviews"]},l=void 0,o={unversionedId:"kotlin/basic/list-set-map",id:"kotlin/basic/list-set-map",title:"List vs Set vs Map in Kotlin?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/kotlin/basic/list-set-map.md",sourceDirName:"kotlin/basic",slug:"/list-set-map",permalink:"/devviews/interviews/list-set-map",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/kotlin/basic/list-set-map.md",tags:[{label:"Basic Kotlin Interviews",permalink:"/devviews/interviews/tags/basic-kotlin-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"List vs Set vs Map",title:"List vs Set vs Map in Kotlin?",slug:"/list-set-map",tags:["Basic Kotlin Interviews"]},sidebar:"kotllinInterviewSidebar",previous:{title:"let vs run vs with vs apply vs also in Kotlin",permalink:"/devviews/interviews/let-vs-run-vs-with-vs-apply-vs-also"},next:{title:"vararg spread operator",permalink:"/devviews/interviews/vararg-vs-spread"}},s={},p=[],u={toc:p},d="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\n",(0,a.kt)("inlineCode",{parentName:"p"},"List")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," in Kotlin?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," are collections in Kotlin that are used to store and organize data.\nHere is a table summarizing the differences between ",(0,a.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," in Kotlin:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Collection"),(0,a.kt)("th",{parentName:"tr",align:null},"Order"),(0,a.kt)("th",{parentName:"tr",align:null},"Duplicates"),(0,a.kt)("th",{parentName:"tr",align:null},"Access by index"),(0,a.kt)("th",{parentName:"tr",align:null},"Access by key"),(0,a.kt)("th",{parentName:"tr",align:null},"Mutable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"Ordered"),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Set"),(0,a.kt)("td",{parentName:"tr",align:null},"Unordered"),(0,a.kt)("td",{parentName:"tr",align:null},"Not allowed"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Map"),(0,a.kt)("td",{parentName:"tr",align:null},"Unordered"),(0,a.kt)("td",{parentName:"tr",align:null},"Key: Not allowed ",(0,a.kt)("br",null)," Value: Allowed"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},'val numbers = listOf(1, 2, 3, 4, 5)\nval numbers = listOf(1, 2, 3, 4, 5)\nval phonebook = mapOf("Alice" to "123-4567", "Bob" to "234-5678", "Charlie" to "345-6789")\n\n'))))}c.isMDXComponent=!0}}]);