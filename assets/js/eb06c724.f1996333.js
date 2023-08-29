"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4972],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_position:1e3,sidebar_label:"Reference Variables In PHP",title:"Reference Variables In PHP",slug:"/reference-variables-in-php",tags:["Basic PHP Interviews"]},o=void 0,s={unversionedId:"php/basic/reference-variables",id:"php/basic/reference-variables",title:"Reference Variables In PHP",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/php/basic/reference-variables.md",sourceDirName:"php/basic",slug:"/reference-variables-in-php",permalink:"/devviews/interviews/reference-variables-in-php",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/php/basic/reference-variables.md",tags:[{label:"Basic PHP Interviews",permalink:"/devviews/interviews/tags/basic-php-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Reference Variables In PHP",title:"Reference Variables In PHP",slug:"/reference-variables-in-php",tags:["Basic PHP Interviews"]},sidebar:"phpInterviewSidebar",previous:{title:"Final vs Constant In PHP",permalink:"/devviews/interviews/final-vs-constant-in-php"},next:{title:"Scope In PHP",permalink:"/devviews/interviews/scope-in-php"}},p={},l=[],c={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nCan you explain the difference among ",(0,a.kt)("inlineCode",{parentName:"p"},"$a vs &$a vs $$a?")," in PHP?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,a.kt)("inlineCode",{parentName:"p"},"$a")," represents a regular variable in PHP, which means that it stores a value that can be directly accessed or modified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$a = 10;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"&$a")," represents a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"reference variable"))," in PHP, which means that it does not store a value directly but rather ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"refers to the memory address"))," of a regular variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$a = 10;\n$b = &$a;\n// asign value\n$b = 20;\necho $a; // Output: 20\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$$a")," is a type of variable called a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"variable variable"))," in PHP. In variable variables, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"name of the variable is determined"))," by the value of another variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$a = 'b';\n$$a = 10;\necho $b; // Output: 10\n"))))}f.isMDXComponent=!0}}]);