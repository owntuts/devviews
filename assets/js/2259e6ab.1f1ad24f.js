"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9762],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"API Route",title:"API Route vs Normal Route in NextS?",slug:"/api-route-vs-normal-route-nexts",tags:["NextJS Interviews"]},a=void 0,s={unversionedId:"js/nextjs/basic/api-route-vs-normal-route",id:"js/nextjs/basic/api-route-vs-normal-route",title:"API Route vs Normal Route in NextS?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/nextjs/basic/api-route-vs-normal-route.md",sourceDirName:"js/nextjs/basic",slug:"/api-route-vs-normal-route-nexts",permalink:"/devviews/interviews/api-route-vs-normal-route-nexts",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/nextjs/basic/api-route-vs-normal-route.md",tags:[{label:"NextJS Interviews",permalink:"/devviews/interviews/tags/next-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"API Route",title:"API Route vs Normal Route in NextS?",slug:"/api-route-vs-normal-route-nexts",tags:["NextJS Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Incremental Static Regeneration",permalink:"/devviews/interviews/incremental-static-regeneration"},next:{title:"Get Data On Client Side",permalink:"/devviews/interviews/get-data-client-side-nextjs"}},u={},l=[],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Question:",type:"quest"},(0,o.kt)("p",{parentName:"admonition"},"*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nAPI route vs normal route?")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"ANSWER:")),(0,o.kt)("p",null,"  ","*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Any file inside the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api")," is mapped to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/*")," and will be treated as an API endpoint instead of a page.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/api/myAPI.js"',title:'"pages/api/myAPI.js"'},"export default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n"))))}m.isMDXComponent=!0}}]);