"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9632],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Get Data On Client Side",title:"Get Data On Client Side In NextJS?",slug:"/get-data-client-side-nextjs",tags:["NextJS Interviews"]},o=void 0,s={unversionedId:"js/nextjs/basic/client-fetch-data",id:"js/nextjs/basic/client-fetch-data",title:"Get Data On Client Side In NextJS?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/nextjs/basic/client-fetch-data.md",sourceDirName:"js/nextjs/basic",slug:"/get-data-client-side-nextjs",permalink:"/devviews/interviews/get-data-client-side-nextjs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/nextjs/basic/client-fetch-data.md",tags:[{label:"NextJS Interviews",permalink:"/devviews/interviews/tags/next-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Get Data On Client Side",title:"Get Data On Client Side In NextJS?",slug:"/get-data-client-side-nextjs",tags:["NextJS Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"API Route",permalink:"/devviews/interviews/api-route-vs-normal-route-nexts"},next:{title:"Data Fetching",permalink:"/devviews/interviews/data-fetching-methods-nextjs"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nHow to get data on client side? Do nextjs support a way to get data on client side?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nYes, as NextJS is based on React (Javascript). So, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," function to fetch data on client side.\nAnd nextJS doesn't support a fetch function but it provides you with ",(0,i.kt)("inlineCode",{parentName:"p"},"useSWR")," hooks for more convenience."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import useSWR from 'swr'\n\nconst fetcher = (url) => fetch(url).then((res) => res.json())\n\nfunction Profile() {\n  const { data, error } = useSWR('/api/user', fetcher)\n  // ...\n}\n"))))}d.isMDXComponent=!0}}]);