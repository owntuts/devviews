"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9051],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"What Is ViewEncapsulation in Angular?",title:"What Is ViewEncapsulation in Angular?",slug:"/viewencapsulation-angular",tags:["Basic Angular Interviews"]},i=void 0,s={unversionedId:"js/angular-interviews/basic/viewencapsulation",id:"js/angular-interviews/basic/viewencapsulation",title:"What Is ViewEncapsulation in Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/viewencapsulation.md",sourceDirName:"js/angular-interviews/basic",slug:"/viewencapsulation-angular",permalink:"/devviews/interviews/viewencapsulation-angular",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/viewencapsulation.md",tags:[{label:"Basic Angular Interviews",permalink:"/devviews/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"What Is ViewEncapsulation in Angular?",title:"What Is ViewEncapsulation in Angular?",slug:"/viewencapsulation-angular",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Shadow DOM Structure",permalink:"/devviews/interviews/shadow-dom-structure"},next:{title:"What is Shadow DOM",permalink:"/devviews/interviews/what-is-shadow-dom"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Question:",type:"quest"},(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat Is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ViewEncapsulation"))," mode in Angular? What is the difference among ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ViewEncapsulation.Emulated"))," vs ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ViewEncapsulation.Native"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ViewEncapsulation.None")),"?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ANSWER:")),(0,r.kt)("p",null,"  ","*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nIndependent building blocks of Angular app is ",(0,r.kt)("strong",{parentName:"p"},"Components"),". Each cmponent has it's own structure and style. The style can be defined at a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"global level"))," or they can be defined at the component level (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"local level")),"). But do you know how to define style of component to make it's local or global? That is what ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewEncapsulation")," mode in Angular will help us."),(0,r.kt)("p",null,"  There are three types of ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewEncapsulation"),":"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"ViewEncapsulation types",src:n(4042).Z,width:"818",height:"484"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ViewEncapsulation.Native")," (local scope): Each component has it's own ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"native Shadow DOM")),". The generated style is scoped in each shadow DOM. So,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Styles from main HTML do not propagate to the component."),(0,r.kt)("li",{parentName:"ul"},"Styles of component do not apply to all children."),(0,r.kt)("li",{parentName:"ul"},"Styles of component do not affect to the global styles."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ViewEncapsulation.Emulated")," (local scope): The Emulated mode is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"the default one")),". Each component has it's own ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"simulated Shadow DOM"))," (use it for browser doesn't support shadow DOM natively). The style scope is similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"ViewEncapsulation.Native")," mode but styles from the main HTML propagate to the component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ViewEncapsulation.None")," (global scope): The style of component will be rendered in style tag in the header of html => It's visible to all components and so apply to all children too.")),(0,r.kt)("p",null,":::note\nThere's ",(0,r.kt)("strong",{parentName:"p"},"ViewEncapsulation.ShadowDom"),": Which uses browser\u2019s ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developers.google.com/web/fundamentals/web-components/shadowdom"},"native Shadow DOM v1"))," for better cross-browser support and is a shared standard across the browsers.\n:::")))}m.isMDXComponent=!0},4042:function(e,t,n){t.Z=n.p+"assets/images/ViewEncapsulation-24bc7c081421680b7cd27a2bee456b34.png"}}]);