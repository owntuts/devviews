"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5577],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45896:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return u}});var r=n(83117),i=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"Routing",title:"Routing In NestJS?",slug:"/routing-in-nestjs",tags:["NestJS Interviews"]},s=void 0,a={unversionedId:"nodejs/nestjs/basic/routing-in-nestjs",id:"nodejs/nestjs/basic/routing-in-nestjs",title:"Routing In NestJS?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/nodejs/nestjs/basic/routing-in-nestjs.md",sourceDirName:"nodejs/nestjs/basic",slug:"/routing-in-nestjs",permalink:"/devviews/interviews/routing-in-nestjs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/nodejs/nestjs/basic/routing-in-nestjs.md",tags:[{label:"NestJS Interviews",permalink:"/devviews/interviews/tags/nest-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Routing",title:"Routing In NestJS?",slug:"/routing-in-nestjs",tags:["NestJS Interviews"]},sidebar:"nodejsInterviewSidebar",previous:{title:"Query vs ResolveField",permalink:"/devviews/interviews/query-vs-resolvefield-nestjs"},next:{title:"NestJS Interviews",permalink:"/devviews/interviews/nestjs-interview-questions-answers"}},l={},u=[{value:"Example",id:"example",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nDoes NextJS provides with routing system? Please give an example how to route to a sub domain ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.example.com"),"?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nNextJS doesn't support routing system separately but the routing comes with ",(0,i.kt)("inlineCode",{parentName:"p"},"Controller")," like in Spring or .Net."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Controller({ host: 'admin.example.com' })\n  export class AdminController {\n    @Get()\n    index(): string {\n      return 'Admin page';\n    }\n  }\n")),(0,i.kt)("p",null,"  In case, you want to deal with multiple subdomains (such as, ",(0,i.kt)("inlineCode",{parentName:"p"},"admin1.example.com")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"admin2.example.com"),"). You can use dynamic subdomain routing like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Controller({ host: ':dashboard.example.com' })\nexport class AccountController {\n  @Get()\n  getInfo(@HostParam('dashboard') dashboard: string) {\n    return account;\n  }\n}\n"))))}d.isMDXComponent=!0}}]);