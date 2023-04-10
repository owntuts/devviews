"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[8341],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"deligate",title:"deligate In C# (C-Sharp)",slug:"/deligate-c-sharp",tags:["Basic C# Interviews"]},o=void 0,l={unversionedId:"c-sharp/basic/deligate",id:"c-sharp/basic/deligate",title:"deligate In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/deligate.md",sourceDirName:"c-sharp/basic",slug:"/deligate-c-sharp",permalink:"/devviews/interviews/deligate-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/deligate.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"deligate",title:"deligate In C# (C-Sharp)",slug:"/deligate-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"what is Deadlocks",permalink:"/devviews/interviews/deadlock"},next:{title:"Event in C#",permalink:"/devviews/interviews/event-c-sharp"}},s={},c=[{value:"Chained Delegate",id:"chained-delegate",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Question:",type:"quest"},(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain about ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," in c#?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ANSWER:")),(0,r.kt)("p",null,"  ","*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nIn C#, a delegate is a type that represents references to methods with a specific signature. Delegates are similar to function pointers in C and C++, but with some additional features."),(0,r.kt)("p",null,"Here are some key points to understand about delegates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A delegate is a reference type."),(0,r.kt)("li",{parentName:"ul"},"Delegates are used to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"define method signatures"))," that can be assigned to variables and passed as method arguments."),(0,r.kt)("li",{parentName:"ul"},"Delegates can be used to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"implement callback"))," functionality, where a method is called in response to an event or some other trigger."),(0,r.kt)("li",{parentName:"ul"},"Delegates can reference static or instance methods."),(0,r.kt)("li",{parentName:"ul"},"Delegates can be ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"multicast")),", meaning that they can reference multiple methods that will be called in sequence when the delegate is invoked."),(0,r.kt)("li",{parentName:"ul"},"Delegates can be ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"chained"))," together using the ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," operators to add or remove methods from the invocation list."),(0,r.kt)("li",{parentName:"ul"},"A delegate instance is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"immutable")),", so adding or removing a method from a delegate returns a new delegate instance with the modified invocation list.")),(0,r.kt)("p",null,"Here is an example of how to use a delegate in C#:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// Define a delegate type\npublic delegate void MyDelegate(int x);\n\n// Create a method to be referenced by the delegate (method signature)\npublic void MyMethod(int x)\n{\n    Console.WriteLine($"MyMethod was called with argument {x}");\n}\n\n// Create a delegate instance that references the method\nMyDelegate myDelegate = new MyDelegate(MyMethod);\n// or\n// MyDelegate myDelegate = MyMethod;\n\n// Invoke the delegate\nmyDelegate(42); // The output will be "MyMethod was called with argument 42"\n\n')),(0,r.kt)("h4",{id:"chained-delegate"},"Chained Delegate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// Define a delegate type\npublic delegate void MyDelegate();\n\n// Define method 1\npublic void Method1()\n{\n    Console.WriteLine("Method 1");\n}\n\n// Define method 2\npublic void Method2()\n{\n    Console.WriteLine("Method 2");\n}\n\n// Create a delegate instance that chains together Method1 and Method2\nMyDelegate myDelegate = new MyDelegate(Method1);\nmyDelegate += Method2;\n\n// Invoke the delegate\nmyDelegate(); // The output will be "Method 1" followed by "Method 2"\n\n// using reference \nforeach (MyDelegate fnc in myDelegate.GetInvocationList())\n{\n    Console.WriteLine(fnc());\n}\n\n'))))}u.isMDXComponent=!0}}]);