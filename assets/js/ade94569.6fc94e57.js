"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[574],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var i=n(83117),r=(n(67294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Initialization",title:"Initialization In C# (C-Sharp)",slug:"/initialization-c-sharp",tags:["Basic C# Interviews"]},o=void 0,s={unversionedId:"c-sharp/basic/initialization",id:"c-sharp/basic/initialization",title:"Initialization In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/initialization.md",sourceDirName:"c-sharp/basic",slug:"/initialization-c-sharp",permalink:"/devviews/interviews/initialization-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/initialization.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Initialization",title:"Initialization In C# (C-Sharp)",slug:"/initialization-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"in vs ref vs out Modifiers",permalink:"/devviews/interviews/in-ref-out-c-sharp"},next:{title:"init vs readonly",permalink:"/devviews/interviews/init-vs-readonly-c-sharp"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Question:",type:"quest"},(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," : "),(0,r.kt)("p",{parentName:"admonition"},"Initialization of difference generic types in c#?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ANSWER:")),(0,r.kt)("p",null,"  ","*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"1. Initializing a List of strings:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'List<string> stringList = new List<string> { "foo", "bar", "baz" };\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"2. Initializing a Dictionary with a string key and an integer value:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Dictionary<string, int> dict = new Dictionary<string, int> { {"foo", 1}, {"bar", 2}, {"baz", 3} };\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"3. Hash table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Hashtable<string, string> hashtable = new Hashtable<string, string>(){  {"UK", "London"},   {"USA", "Chicago"}, {"India", "Mumbai"}};\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"4. Creating an instance of a generic class:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'MyGenericClass<string> myObj = new MyGenericClass<string>("hello");\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"5. Creating an instance of a generic method:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"int result = MyGenericMethod<int>(10, 20);\n"))))}m.isMDXComponent=!0}}]);