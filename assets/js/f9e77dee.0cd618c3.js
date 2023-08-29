"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[8803],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),y=a,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||i;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},83883:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l}});var r=t(83117),a=(t(67294),t(3905));const i={sidebar_position:1e3,sidebar_label:"Explain About `Async` `Await` in C#",title:"Explain About `Async` `Await` in C# (C-Sharp)",slug:"/async-await-c-sharp",tags:["Basic C# Interviews"]},s=void 0,o={unversionedId:"c-sharp/basic/async-await",id:"c-sharp/basic/async-await",title:"Explain About `Async` `Await` in C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/async-await.md",sourceDirName:"c-sharp/basic",slug:"/async-await-c-sharp",permalink:"/devviews/interviews/async-await-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/async-await.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Explain About `Async` `Await` in C#",title:"Explain About `Async` `Await` in C# (C-Sharp)",slug:"/async-await-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"Task",permalink:"/devviews/interviews/task-c-sharp"},next:{title:"Boxing vs Unboxing",permalink:"/devviews/interviews/differences-boxing-vs-unboxing-c-sharp"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain About ",(0,a.kt)("inlineCode",{parentName:"p"},"Async")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Await")," in C#?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nIn C#, ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," are keywords used for asynchronous programming."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public async Task<ResultType> DoWorkAsync()\n{\n  ResultType retVal;\n  try {\n    Task<APIResult> apiResultTask = CallAnAPIAsync();\n    var fileName = CreateFileName();\n    var apiResult = await apiResultTask;\n    await WriteToAFileAsync(fileName, apiResult);\n    retVal = await StartAsyncOperation(fileName);\n  } catch (RealException rex) {\n    HandleError(rex);\n    retVal = null\n  }\n  return retVal;\n}\n\n"))))}f.isMDXComponent=!0}}]);