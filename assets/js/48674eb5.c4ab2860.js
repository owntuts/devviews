"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6437],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[u]="string"==typeof e?e:i,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16921:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=t(83117),i=(t(67294),t(3905));const o={sidebar_position:1e3,sidebar_label:"Injection Scope Dependence",title:"Injection Scope Dependence in NestJS",slug:"/injection-scope-dependence",tags:["NestJS Interviews"]},c=void 0,s={unversionedId:"nodejs/nestjs/basic/injection-scope-dependence",id:"nodejs/nestjs/basic/injection-scope-dependence",title:"Injection Scope Dependence in NestJS",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/nodejs/nestjs/basic/injection-scope-dependence.md",sourceDirName:"nodejs/nestjs/basic",slug:"/injection-scope-dependence",permalink:"/devviews/interviews/injection-scope-dependence",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/nodejs/nestjs/basic/injection-scope-dependence.md",tags:[{label:"NestJS Interviews",permalink:"/devviews/interviews/tags/nest-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Injection Scope Dependence",title:"Injection Scope Dependence in NestJS",slug:"/injection-scope-dependence",tags:["NestJS Interviews"]},sidebar:"nodejsInterviewSidebar",previous:{title:"Global modules",permalink:"/devviews/interviews/global-modules-nestjs"},next:{title:"Injection Scope",permalink:"/devviews/interviews/default-vs-request-vs-transient"}},a={},p=[],l={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nIn which case when you declare a scope of a service but then it effect to scope of a component?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nIn NestJS, Scope bubbles up the injection chain. For example, if you have an injection chain like this:\n",(0,i.kt)("inlineCode",{parentName:"p"},"MyController <- (injects) MyService <- (injects) MyRepository"),", then when you declare ",(0,i.kt)("inlineCode",{parentName:"p"},"MyService")," scope is ",(0,i.kt)("inlineCode",{parentName:"p"},"SCOPE.REQUEST")," then that makes ",(0,i.kt)("inlineCode",{parentName:"p"},"MyController")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"SCOPE.REQUEST")," too, but it's not effect ",(0,i.kt)("inlineCode",{parentName:"p"},"MyRepository"),".")))}d.isMDXComponent=!0}}]);