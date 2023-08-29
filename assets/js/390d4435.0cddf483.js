"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36474:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var r=n(83117),i=(n(67294),n(3905));const s={sidebar_position:1e3,sidebar_label:"Dynamic modules",title:"What Is Dynamic modules In NestJS?",slug:"/dynamic-modules-nestjs",tags:["NestJS Interviews"]},o=void 0,a={unversionedId:"nodejs/nestjs/basic/dynamic-modules",id:"nodejs/nestjs/basic/dynamic-modules",title:"What Is Dynamic modules In NestJS?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/nodejs/nestjs/basic/dynamic-modules.md",sourceDirName:"nodejs/nestjs/basic",slug:"/dynamic-modules-nestjs",permalink:"/devviews/interviews/dynamic-modules-nestjs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/nodejs/nestjs/basic/dynamic-modules.md",tags:[{label:"NestJS Interviews",permalink:"/devviews/interviews/tags/nest-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Dynamic modules",title:"What Is Dynamic modules In NestJS?",slug:"/dynamic-modules-nestjs",tags:["NestJS Interviews"]},sidebar:"nodejsInterviewSidebar",previous:{title:"Schema First vs Code First",permalink:"/devviews/interviews/schema-first-vs-code-first-graphql-apps"},next:{title:"Global modules",permalink:"/devviews/interviews/global-modules-nestjs"}},c={},l=[],u={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat Is Dynamic modules In NestJS?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,i.kt)("strong",{parentName:"p"},"Dynamic Module")," is customizable modules that ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"can register and configure providers dynamically"))," (dynamic providers is provider depends on certain parameters)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"@Module({\n  // ...\n})\nexport class MyModule {\n  static forRoot(options? = ''): DynamicModule {\n    const dynamicProviders = myFunction(options); // depends on certain option\n    return {\n      providers: dynamicProviders,\n      exports: providers,\n    };\n  }\n}\n"))))}m.isMDXComponent=!0}}]);