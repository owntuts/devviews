"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9463],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||v[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9307:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"JIT vs AOT",title:"Watch vs Computed In VueJS",slug:"/watch-vs-computed-vuejs",tags:["Basic Vuejs Interviews"]},o=void 0,s={unversionedId:"js/vuejs-interviews/basic/vue-watcher",id:"js/vuejs-interviews/basic/vue-watcher",title:"Watch vs Computed In VueJS",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/vuejs-interviews/basic/vue-watcher.md",sourceDirName:"js/vuejs-interviews/basic",slug:"/watch-vs-computed-vuejs",permalink:"/devviews/interviews/watch-vs-computed-vuejs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/vuejs-interviews/basic/vue-watcher.md",tags:[{label:"Basic Vuejs Interviews",permalink:"/devviews/interviews/tags/basic-vuejs-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"JIT vs AOT",title:"Watch vs Computed In VueJS",slug:"/watch-vs-computed-vuejs",tags:["Basic Vuejs Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Types of Directive",permalink:"/devviews/interviews/types-directive-vuejs"},next:{title:"Vuejs Interviews",permalink:"/devviews/interviews/vuejs-interview-questions-answers"}},u={},c=[],l={toc:c},p="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nCould you tell the differences between ",(0,a.kt)("strong",{parentName:"p"},"Watcher")," vs ",(0,a.kt)("strong",{parentName:"p"},"computed")," property in Vue.js?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"computed"),(0,a.kt)("th",{parentName:"tr",align:null},"watch"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"purpose"),": composing new data derived from other data"),(0,a.kt)("td",{parentName:"tr",align:null},"observe and react to data changes on a current active instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Computed properties always have to return a value"),(0,a.kt)("td",{parentName:"tr",align:null},"Don't have a return value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Should not have any side effects  => So, it's synchronous"),(0,a.kt)("td",{parentName:"tr",align:null},"Can have side effects => So, it's a synchronous")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Usage"),": When you want to perform caching/cheap computation"),(0,a.kt)("td",{parentName:"tr",align:null},"When you want to perform asynchronous or expensive operations in response to changing data"))))))}v.isMDXComponent=!0}}]);