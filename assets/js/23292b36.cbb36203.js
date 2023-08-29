"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5723],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),v=a,f=p["".concat(c,".").concat(v)]||p[v]||d[v]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},52885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"AsyncStorage",title:"AsyncStorage",slug:"/asynstorage",tags:["Basic React Native Interviews"]},s=void 0,i={unversionedId:"react-native/basic/asynstorage",id:"react-native/basic/asynstorage",title:"AsyncStorage",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/react-native/basic/asynstorage.md",sourceDirName:"react-native/basic",slug:"/asynstorage",permalink:"/devviews/interviews/asynstorage",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/react-native/basic/asynstorage.md",tags:[{label:"Basic React Native Interviews",permalink:"/devviews/interviews/tags/basic-react-native-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"AsyncStorage",title:"AsyncStorage",slug:"/asynstorage",tags:["Basic React Native Interviews"]},sidebar:"reactnativeInterviewSidebar",next:{title:"Boxing vs Unboxing",permalink:"/devviews/interviews/reactnative-flatlist-vs-listview"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nAsync Storage in React Native? dos and donts?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nAsync Storage is a local storage solution that is available in React Native. It allows you to save key-value pairs in local storage on the user's device, persisting even if the app is closed or the device is restarted. Here are some dos and don'ts when using Async Storage in React Native:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dos"),":"),(0,a.kt)("p",null,"Use it for small, simple data: Async Storage is optimized for small amounts of simple data, such as user preferences or authorization tokens."),(0,a.kt)("p",null,"Use it to cache data that is expensive to retrieve: If you have data that is expensive to retrieve from a server or database, you can store it in Async Storage to avoid unnecessary requests and improve app performance."),(0,a.kt)("p",null,"Use it in combination with other storage solutions: Async Storage is just one option for local storage in React Native. You can also use other storage solutions, such as SQLite or Realm, depending on your data needs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don'ts"),":"),(0,a.kt)("p",null,"Don't use it for large or complex data: Async Storage is not optimized for large or complex data, such as images or videos. Consider storing these types of data in a cloud storage service or on the device's file system."),(0,a.kt)("p",null,"Don't store sensitive data: Async Storage is not secure and should not be used to store sensitive data, such as passwords or credit card information. Use other security measures, such as the Keychain API or encryption, to secure sensitive information."),(0,a.kt)("p",null,"Don't use it as the sole storage solution: Async Storage should only be used for local storage on the user's device. It should not be used as the sole storage solution for your app, as the data can be cleared by the user or when the device runs out of storage space.")))}d.isMDXComponent=!0}}]);