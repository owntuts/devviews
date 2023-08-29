"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[2062],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),v=a,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},81615:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(83117),a=(r(67294),r(3905));const i={sidebar_position:1e3,sidebar_label:"private protected",title:"private protected In C# (C-Sharp)",slug:"/private-protected-c-sharp",tags:["Basic C# Interviews"]},o=void 0,p={unversionedId:"c-sharp/basic/private-protected",id:"c-sharp/basic/private-protected",title:"private protected In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/private-protected.md",sourceDirName:"c-sharp/basic",slug:"/private-protected-c-sharp",permalink:"/devviews/interviews/private-protected-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/private-protected.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"private protected",title:"private protected In C# (C-Sharp)",slug:"/private-protected-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"Boxing vs Unboxing",permalink:"/devviews/interviews/dynamic-type-vs-object-type-variables-c-sharp"},next:{title:"protected internal",permalink:"/devviews/interviews/protected-internal-c-sharp"}},s={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat happens when you apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"private protected")," access modifier to a variable in C#?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"private protected")," is just the combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"protected"),". We can see what happen in the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\n\npublic class MyBaseClass\n{\n    private protected int number = 0;\n}\n\npublic class MyDerivedClass : MyBaseClass\n{\n    public void DisplayNumber()\n    {\n        var baseObj = new MyBaseClass();\n        // baseObj.number = 55; ---\x3e leads to Error because number is private\n\n        number = 65;  // number is accessible here because MyDerivedClass derives from MyBaseClass (because number is protected)\n    }\n}\n"))))}d.isMDXComponent=!0}}]);