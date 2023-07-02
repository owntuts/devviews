"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6312],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4562:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const l={sidebar_position:1e3,sidebar_label:"Nodejs single-thread vs multi-threads vs concurrency vs paralell",title:"Nodejs single-thread vs multi-threads vs concurrency vs paralell",tags:["Nodejs Knowledge"]},o=void 0,s={unversionedId:"nodejs/nodejs/threadsvs",id:"nodejs/nodejs/threadsvs",title:"Nodejs single-thread vs multi-threads vs concurrency vs paralell",description:"single-thread vs multi-threads vs concurrency vs paralell in Nodejs",source:"@site/docs/nodejs/nodejs/threadsvs.md",sourceDirName:"nodejs/nodejs",slug:"/nodejs/nodejs/threadsvs",permalink:"/devviews/interviews/nodejs/nodejs/threadsvs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/nodejs/nodejs/threadsvs.md",tags:[{label:"Nodejs Knowledge",permalink:"/devviews/interviews/tags/nodejs-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Nodejs single-thread vs multi-threads vs concurrency vs paralell",title:"Nodejs single-thread vs multi-threads vs concurrency vs paralell",tags:["Nodejs Knowledge"]},sidebar:"nodejsInterviewSidebar",previous:{title:"Nodejs Stream",permalink:"/devviews/interviews/nodejs/nodejs/stream"},next:{title:"Nodejs Worker Thread vs Cluster",permalink:"/devviews/interviews/nodejs/nodejs/worker-thread-vs-cluster"}},i={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"single-thread vs multi-threads vs concurrency vs paralell in Nodejs")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Single-thread:")," A single-thread is like a single person doing a task. For example, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"a single person cooking a meal")),". The person can only focus on one task at a time, and the meal will take longer to cook if the person is not very efficient."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concurrency:")," Concurrency is like multiple people doing different tasks at the same time. For example, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"a group of people cooking different meals")),". The people are not working together, but they are all doing something at the same time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-thread:")," A multi-thread is like multiple people doing a task together. For example, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"a group of people cooking a meal")),". The people can focus on different tasks at the same time, and the meal will cook faster if the people are efficient.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Multithreading is a way to achieve concurrency in software development. Concurrency is the ability to run multiple tasks or processes at the same time, and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"multithreading is a specific approach to implementing concurrency"))," by dividing a program into multiple threads of execution that can run concurrently.\nHere is an example of how multithreading can be used to improve the performance of a request-response system:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"A web server receives requests from multiple clients."),(0,a.kt)("li",{parentName:"ul"},"The server divides the requests into multiple tasks."),(0,a.kt)("li",{parentName:"ul"},"The server assigns each task to a different thread."),(0,a.kt)("li",{parentName:"ul"},"The threads execute the tasks concurrently."),(0,a.kt)("li",{parentName:"ul"},"The server returns the results of the tasks to the clients.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parallelism:")," Parallelism is like multiple people doing the same task at the same time. For example, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"a group of people running a race")),". The people are all working towards the same goal, and they are all doing it at the same time.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Consider a web server that receives requests from multiple clients. If the server only has one processor, it can only process one request at a time. However, if the server has multiple processors, it can process multiple requests simultaneously. This can be done by ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"dividing the requests into multiple tasks and assigning each task to a different processor")),".")))),(0,a.kt)("p",null,"Here is a table that summarizes the differences between single-thread, multi-thread, concurrency, and parallel:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Single-thread"),(0,a.kt)("th",{parentName:"tr",align:null},"Multi-thread"),(0,a.kt)("th",{parentName:"tr",align:null},"Concurrency"),(0,a.kt)("th",{parentName:"tr",align:null},"Parallelism"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Number of tasks"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiple"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiple"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiple")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Focus"),(0,a.kt)("td",{parentName:"tr",align:null},"One task at a time"),(0,a.kt)("td",{parentName:"tr",align:null},"Different tasks at the same time"),(0,a.kt)("td",{parentName:"tr",align:null},"Different tasks at the same time"),(0,a.kt)("td",{parentName:"tr",align:null},"Same task at the same time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Speed"),(0,a.kt)("td",{parentName:"tr",align:null},"Slow"),(0,a.kt)("td",{parentName:"tr",align:null},"Faster"),(0,a.kt)("td",{parentName:"tr",align:null},"Faster"),(0,a.kt)("td",{parentName:"tr",align:null},"Fastest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Example"),(0,a.kt)("td",{parentName:"tr",align:null},"A single person cooking a meal"),(0,a.kt)("td",{parentName:"tr",align:null},"A group of people cooking a meal"),(0,a.kt)("td",{parentName:"tr",align:null},"A group of people cooking different meals"),(0,a.kt)("td",{parentName:"tr",align:null},"A group of people running a race"))))))}d.isMDXComponent=!0}}]);