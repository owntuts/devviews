"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4884],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16952:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={sidebar_position:1e3,sidebar_label:"Global modules",title:"Global modules In NestJS?",slug:"/global-modules-nestjs",tags:["NestJS Interviews"]},s=void 0,l={unversionedId:"nodejs/nestjs/basic/global-modules",id:"nodejs/nestjs/basic/global-modules",title:"Global modules In NestJS?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/nodejs/nestjs/basic/global-modules.md",sourceDirName:"nodejs/nestjs/basic",slug:"/global-modules-nestjs",permalink:"/devviews/interviews/global-modules-nestjs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/nodejs/nestjs/basic/global-modules.md",tags:[{label:"NestJS Interviews",permalink:"/devviews/interviews/tags/nest-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Global modules",title:"Global modules In NestJS?",slug:"/global-modules-nestjs",tags:["NestJS Interviews"]},sidebar:"nodejsInterviewSidebar",previous:{title:"Dynamic modules",permalink:"/devviews/interviews/dynamic-modules-nestjs"},next:{title:"Injection Scope Dependence",permalink:"/devviews/interviews/injection-scope-dependence"}},a={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Question:",type:"quest"},(0,o.kt)("p",{parentName:"admonition"},"*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nHow to make a feature module to be global in NextJS?")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"ANSWER:")),(0,o.kt)("p",null,"  ","*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nJust use ",(0,o.kt)("inlineCode",{parentName:"p"},"@Global")," decorator. After making the module global, other modules that wish to inject it's service will not need to import it. But Making everything global is not a good design decision."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Global() // other modules can access exported controllers & services\n@Module({\n  controllers: [MyController],\n  providers: [MyService],\n  exports: [MyController, MyService],\n})\nexport class FeatureModule {}\n"))))}p.isMDXComponent=!0}}]);