"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[190],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u["".concat(c,".").concat(d)]||u[d]||v[d]||i;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_position:1e3,sidebar_label:"Event in C#",title:"explain about `Event` in C# (C-Sharp)",slug:"/event-c-sharp",tags:["Basic C# Interviews"]},s=void 0,o={unversionedId:"c-sharp/basic/event",id:"c-sharp/basic/event",title:"explain about `Event` in C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/event.md",sourceDirName:"c-sharp/basic",slug:"/event-c-sharp",permalink:"/devviews/interviews/event-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/event.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Event in C#",title:"explain about `Event` in C# (C-Sharp)",slug:"/event-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"deligate",permalink:"/devviews/interviews/deligate-c-sharp"},next:{title:"Hash Table vs Dictionary",permalink:"/devviews/interviews/hashtable-dictionary-c-sharp"}},c={},l=[],p={toc:l},u="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain about ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," in C#?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nIn C#, an ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," is a language feature that enables classes to send notifications or signals to other objects. It follows the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"publisher/subscriber pattern")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// Define the event arguments\npublic class DataReceivedEventArgs : EventArgs\n{\n    public string Data { get; set; }\n}\n\n// Define the publisher class\npublic class DataReceiver\n{\n    // Declare the event\n    public event EventHandler<DataReceivedEventArgs> DataReceived;\n    \n    public void ReceiveData(string data)\n    {\n        // Fire the event\n        DataReceived?.Invoke(this, new DataReceivedEventArgs { Data = data });\n    }\n}\n\n// Define the subscriber class\npublic class DataConsumer\n{\n    public void OnDataReceived(object sender, DataReceivedEventArgs e)\n    {\n        Console.WriteLine($"Received data: {e.Data}");\n    }\n}\n\n// Usage\nvar receiver = new DataReceiver();\nvar consumer = new DataConsumer();\n\nreceiver.DataReceived += consumer.OnDataReceived; // Subscribe to the event\nreceiver.ReceiveData("Some data"); // Raise the event\n\n'))))}v.isMDXComponent=!0}}]);