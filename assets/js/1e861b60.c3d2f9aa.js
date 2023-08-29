"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[8411],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),i=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"Types of Directive",title:"Arguments of Lifecycle Hooks In VueJS",slug:"/arguments-lifecycle-hooks",tags:["Basic Vuejs Interviews"]},a=void 0,s={unversionedId:"js/vuejs-interviews/basic/context-properties",id:"js/vuejs-interviews/basic/context-properties",title:"Arguments of Lifecycle Hooks In VueJS",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/vuejs-interviews/basic/context-properties.md",sourceDirName:"js/vuejs-interviews/basic",slug:"/arguments-lifecycle-hooks",permalink:"/devviews/interviews/arguments-lifecycle-hooks",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/vuejs-interviews/basic/context-properties.md",tags:[{label:"Basic Vuejs Interviews",permalink:"/devviews/interviews/tags/basic-vuejs-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Types of Directive",title:"Arguments of Lifecycle Hooks In VueJS",slug:"/arguments-lifecycle-hooks",tags:["Basic Vuejs Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"App instance and Vuejs component",permalink:"/devviews/interviews/relationship-vuejs-app-instance-vuejs-component"},next:{title:"Directive of Lifecycle Hooks",permalink:"/devviews/interviews/directive-lifecycle-hooks"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain about ",(0,i.kt)("strong",{parentName:"p"},"context properties")," - arguments of lifecycle hooks of VueJS directive?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"el: which is a vnode (virtual node) - a blueprint of the real DOM of bound element."),(0,i.kt)("li",{parentName:"ul"},"prevNode: The previous virtual node, only available in the beforeUpdate and updated hooks"),(0,i.kt)("li",{parentName:"ul"},"binding: An object containing the binding infos.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"instance"),": The instance of the component where directive is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value"),": The value passed to the directive: ",(0,i.kt)("inlineCode",{parentName:"li"},'v-my-directive="2"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"oldValue"),": The previous value, only available in ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"beforeUpdate"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"updated")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"arg"),": The argument passed to the directive: ",(0,i.kt)("inlineCode",{parentName:"li"},"v-my-directive:foo"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"modifiers"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"v-my-directive.foo.bar"),", the modifiers object would be { foo: true, bar: true }."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dir"),": an object, the second argument of directive function.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"app.directive('focus', {\n  mounted(el) {\n    el.focus()\n  }\n})\n"))))))}m.isMDXComponent=!0}}]);