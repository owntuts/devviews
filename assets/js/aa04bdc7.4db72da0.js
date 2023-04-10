"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6373],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4212:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"Task",title:"Task In C# (C-Sharp)",slug:"/task-c-sharp",tags:["Basic C# Interviews"]},s=void 0,o={unversionedId:"c-sharp/basic/Task",id:"c-sharp/basic/Task",title:"Task In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/Task.md",sourceDirName:"c-sharp/basic",slug:"/task-c-sharp",permalink:"/devviews/interviews/task-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/Task.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Task",title:"Task In C# (C-Sharp)",slug:"/task-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"Event vs Deligate",permalink:"/devviews/interviews/Event-vs-Deligate-c-sharp"},next:{title:"Explain About `Async` `Await` in C#",permalink:"/devviews/interviews/async-await-c-sharp"}},l={},c=[{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Question:",type:"quest"},(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," in C#?  ",(0,r.kt)("inlineCode",{parentName:"p"},".Result")," vs",(0,r.kt)("inlineCode",{parentName:"p"},".Wait()"),"?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ANSWER:")),(0,r.kt)("p",null,"  ","*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," is implementation of asynchronous programming in C#."),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Task<string> task = Task<string>.Run(() =>\n{\n    // This is the work that will be done asynchronously\n    return "Hello, World!";\n});\n\nstring result = await task; // Wait for the task to finish and get the result\n\n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Threading.Tasks;\n\npublic class Example {\n    public static void Main() {\n      // Declare 4 Tasks. The first one start (`StartNew`)the chain, the others chains to the first (`ContinueWith`)\n       Task<DataType> getDataTask = Task.Factory.StartNew(() => { return GetData(); } );\n       Task<ProcessedDataType> processDataTask = getDataTask.ContinueWith((data) => { return ProcessData(data);} );\n       Task saveDataTask = processDataTask.ContinueWith((pData) => { SaveData(pData)} );\n       Task<string> displayDataTask = processDataTask.ContinueWith((pData) => { return CreateDisplayString(pData); } );\n\n       Console.WriteLine(displayDataTask.Result);\n      //  ensure that the `SaveData` operation completes before the application ends.\n       saveDataTask.Wait();\n    }\n}\n\n")),(0,r.kt)("p",null,"The difference from calling .Result or .Wait() is that the await keyword sends the current thread back to the thread pool, instead of keeping it in a blocked state.")))}d.isMDXComponent=!0}}]);