"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[2714],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),v=a,d=u["".concat(s,".").concat(v)]||u[v]||m[v]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},251:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(3117),a=(t(7294),t(3905));const o={sidebar_position:1e3,sidebar_label:"App instance and Vuejs component",title:"Relationship Between Vuejs App Instance and Vuejs Component",slug:"/relationship-vuejs-app-instance-vuejs-component",tags:["Basic Vuejs Interviews"]},i=void 0,p={unversionedId:"js/vuejs-interviews/basic/app-instant-vuejs-component",id:"js/vuejs-interviews/basic/app-instant-vuejs-component",title:"Relationship Between Vuejs App Instance and Vuejs Component",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/vuejs-interviews/basic/app-instant-vuejs-component.md",sourceDirName:"js/vuejs-interviews/basic",slug:"/relationship-vuejs-app-instance-vuejs-component",permalink:"/devviews/interviews/relationship-vuejs-app-instance-vuejs-component",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/vuejs-interviews/basic/app-instant-vuejs-component.md",tags:[{label:"Basic Vuejs Interviews",permalink:"/devviews/interviews/tags/basic-vuejs-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"App instance and Vuejs component",title:"Relationship Between Vuejs App Instance and Vuejs Component",slug:"/relationship-vuejs-app-instance-vuejs-component",tags:["Basic Vuejs Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Angular Interviews",permalink:"/devviews/interviews/angular-interview-questions-answers"},next:{title:"Types of Directive",permalink:"/devviews/interviews/arguments-lifecycle-hooks"}},s={},c=[],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is the relationship between ",(0,a.kt)("strong",{parentName:"p"},"Vuejs app instance")," and ",(0,a.kt)("strong",{parentName:"p"},"Vuejs component"),"? Could we have multiple Vuejs intances in one project?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A new ",(0,a.kt)("strong",{parentName:"p"},"application instance")," is as a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"starting point of a Vue application"))," .")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"root component")," is as a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"starting point of application instance"))," for rendering when we mount the application.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"root component")," will the contains other ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"components"))),(0,a.kt)("p",{parentName:"li"},"So, the hierarchy of an Vuejs application is like below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Root Component\n\u2514\u2500 ComponentA\n  \u251c\u2500 Child Component\n  \u2502  \u251c\u2500 ...\n  \u2502  \u2514\u2500 ...\n\u2514\u2500 ComponentB\n    \u251c\u2500 Child Component\n  \u2502  \u251c\u2500 ...\n  \u2502  \u2514\u2500 ...\n")),(0,a.kt)("p",{parentName:"li"},"And the code to start a Vue application:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const RootComponent = {\n  /* options */\n  components: {\n    'component-a': ComponentA,\n    'component-b': ComponentB\n  }\n}\nconst app = Vue.createApp(RootComponent)\nconst vm = app.mount('#app') // mount does not return the application. Instead it returns the root component instance\n")),(0,a.kt)("p",{parentName:"li"},"The application instance is used to register ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"'globals' (route, component, directive, plugins,...)"))," that can then be used by components within that application."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const app = Vue.createApp({})\napp.component('AGlobalComponent', AGlobalComponent)\napp.directive('aGlobalDirective', AGlobalDirective)\napp.use(AGlobalPlugin)\n")),(0,a.kt)("p",{parentName:"li"},"And it's ok to have two instances in the same project.")))))}m.isMDXComponent=!0}}]);