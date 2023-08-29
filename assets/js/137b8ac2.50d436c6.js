"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4994],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=n(83117),i=(n(67294),n(3905));const r={toc:[]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Principles vs Rules vs Patterns vs Building Blocks")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Design Principles"),": are the fundamental & general design ",(0,i.kt)("strong",{parentName:"li"},"ideas")," can be applied to different situations and contexts (",(0,i.kt)("strong",{parentName:"li"},"trade-off")," to avoid common pitfalls)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Design Rules"),": Best practices, ",(0,i.kt)("strong",{parentName:"li"},"guidelines")," (specific rules of what to do and what not to do)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Design Patterns"),": are general reusable solutions ",(0,i.kt)("strong",{parentName:"li"},"to specific problems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Design Anti Patterns"),":  ",(0,i.kt)("strong",{parentName:"li"},"common but")," ineffective solutions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Building blocks"),": are commonly used infrastructure software, tools, frameworks, and services"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Principles vs Non-functional Features")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Non-functional features")," are the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"quality attributes of the software"))," that affect the user experience and the stakeholder satisfaction. Example: Performance, Reliability, Maintainability, Usability, Security, Scalability, Availability, Portability,...")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Software design principles")," are fundamental & general rules/ideas or guidelines that help you create a software architecture that ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"satisfies non-functional features"))," by following ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"best practices and avoiding common pitfalls"))," in software development."))),(0,i.kt)("p",null,"For example, one non-functional feature is scalability, which means how well the software can handle increasing or decreasing workloads or demands. One software design principle that helps achieve scalability is modularity, which means dividing the software into smaller and independent components that can be added, removed, or changed without affecting the whole system. By applying modularity, you can make your software more scalable by allowing it to adapt to different scenarios and requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Customer --------------------------------\x3e Application -----------------\x3e Developer\n            [non-functional features]                     [principles]\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Principles vs Design rules")),(0,i.kt)("p",null,"Yes, that is a good way to put it. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Design rules are solutions that satisfy design principles in specific contexts of software")),". Design rules are more concrete and precise than design principles, which are more abstract and general."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Design principles"),(0,i.kt)("th",{parentName:"tr",align:null},"Design rules"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"General guidelines or recommendations that help designers create effective and attractive compositions"),(0,i.kt)("td",{parentName:"tr",align:null},"Specific and mandatory requirements that designers must follow to meet certain standards or specifications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Derived from the accumulated knowledge and experience of professionals from various disciplines"),(0,i.kt)("td",{parentName:"tr",align:null},"Defined by the context and purpose of the design")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Applied with discretion and flexibility, depending on the situation and the desired outcome"),(0,i.kt)("td",{parentName:"tr",align:null},"Followed strictly and consistently, otherwise the design might fail to function properly or meet the expectations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Examples: Emphasis, Balance, Alignment, Repetition, Proportion, Movement, White space"),(0,i.kt)("td",{parentName:"tr",align:null},"Examples: Grid system, Color palette, Typography system, Icons, Images")))),(0,i.kt)("p",null,"Example is to use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"modularity"))," to divide the software into smaller and independent units that can be developed, tested, and maintained separately. One design rule that satisfies this principle is to use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"microservices"))," to create a distributed architecture that consists of loosely coupled and highly cohesive services that communicate through well-defined protocols.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Common Software development principles")),(0,i.kt)("p",null,"Software development principles are general guidelines or best practices that help developers create high-quality software that meets the customer's needs and expectations. There are many software development principles, but some of the most common ones are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Agile principles"),": These are based on the Agile Manifesto, which is a statement of values and principles for software development that emphasizes customer satisfaction, collaboration, flexibility, and working software. Some of the agile principles are\xb9:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."),(0,i.kt)("li",{parentName:"ul"},"Welcome changing requirements, even late in development. Agile processes harness change for the customer\u2019s competitive advantage."),(0,i.kt)("li",{parentName:"ul"},"Business people and developers must work together daily throughout the project."),(0,i.kt)("li",{parentName:"ul"},"Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done."),(0,i.kt)("li",{parentName:"ul"},"The most efficient and effective method of conveying information to and within a development team is face-to-face conversation."),(0,i.kt)("li",{parentName:"ul"},"Working software is the primary measure of progress."),(0,i.kt)("li",{parentName:"ul"},"Continuous attention to technical excellence and good design enhances agility."),(0,i.kt)("li",{parentName:"ul"},"Simplicity\u2013the art of maximizing the amount of work not done\u2013is essential."),(0,i.kt)("li",{parentName:"ul"},"The best architectures, requirements, and designs emerge from self-organizing teams."),(0,i.kt)("li",{parentName:"ul"},"At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SOLID principles"),": These are a set of design principles for object-oriented programming that help developers create maintainable, extensible, and testable code. SOLID stands for\xb2:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Single responsibility principle: A class should have one and only one reason to change, meaning that a class should have only one job."),(0,i.kt)("li",{parentName:"ul"},"Open-closed principle: Objects or entities should be open for extension but closed for modification. This means that a class should be easily extendable without modifying the class itself."),(0,i.kt)("li",{parentName:"ul"},"Liskov substitution principle: Every subclass or derived class should be substitutable for their base or parent class. This means that a subclass should override the parent class methods in a way that does not break functionality from a client\u2019s point of view."),(0,i.kt)("li",{parentName:"ul"},"Interface segregation principle: A client should never be forced to implement an interface that it doesn\u2019t use or clients shouldn\u2019t be forced to depend on methods they do not use."),(0,i.kt)("li",{parentName:"ul"},"Dependency inversion principle: Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DRY principle"),": This stands for Don't Repeat Yourself, which means that every piece of knowledge or logic should have a single, unambiguous representation within a system. This helps developers avoid duplication and redundancy in code, which can lead to bugs, inconsistencies, and difficulties in maintenance\xb3.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"KISS principle"),": This stands for Keep It Simple, Stupid, which means that developers should aim for simplicity and clarity in their code and design. This helps developers avoid unnecessary complexity and over-engineering, which can make code harder to understand, test, debug, and modify.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"YAGNI principle"),": This stands for You Aren't Gonna Need It, which means that developers should only implement things when they actually need them, not when they foresee or speculate that they might need them in the future. This helps developers avoid wasting time and effort on features or functionalities that may never be used or may change significantly later.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Separation of concerns"),": This means that a system should be divided into distinct and independent modules or components that each have a clear and well-defined responsibility. This helps developers achieve high cohesion and low coupling, which improve modularity, readability, reusability, and testability of code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Single Responsibility (SoC)"),": responsibility -> behavior. Ex: Invoice class does not have a responsibility to print itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Avoid Premature Optimization"),": profile your code to identify true bottlenecks to fix them rather than guess sth slow and speed it up.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Clean Code > Clever Code"),": forget about writing clever code. example of clever code is packing as much logic into one line as possible or write dynamic code.")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Principles for Scalable Apps")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simplicity"),": simplifies scalability, development, deployment, maintenance and support. (big system => hard to mange => need to keep it simple)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decomposition"),": big system => split into scalable subsystems (plug n play) => should be able to independently run in a separate process or threads and enabled to scale."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decentralization/Distribution"),": a collection of subsystems running on independent servers => high ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"availability, realiable")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Asynchronous"),": process execution ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"without blocking on resources"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Loose Coupling High Cohesion"),": cohesion - a stone is a stone, a diamond is a diamon (each atom in them related to each other) but stone and diamon be loose sticky together (loose Coupling) via gravity. Weak cohesion among subsystems tends to result in more round trips because the classes or components are not logically grouped and may reside in different tiers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Concurrency and Parallelization"),": Concurrency is multiple tasks -> shared resources (multi tasks run on one CPU). Parallelization is single task divided into multiple tasks (one task run on multi CPUs)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parsimony"),": complex system => spend system resources => need parsimony. Resources might be cached or pooled and multiplexed"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"12-Factor App")),(0,i.kt)("p",null,"  The 12-Factor App is a set of best practices for building software-as-a-service (SaaS) applications that can run reliably and efficiently on the web. The 12 factors are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Codebase"),": One codebase tracked in revision control, many deploys"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dependencies"),": Explicitly declare and isolate dependencies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Config"),": Store config in the environment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Backing services"),": Treat backing services as attached resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Build, release, run"),": Strictly separate build and run stages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Processes"),": Execute the app as one or more stateless processes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port binding"),": Export services via port binding"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Concurrency"),": Scale out via the process model"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disposability"),": Maximize robustness with fast startup and graceful shutdown"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dev/prod parity"),": Keep development, staging, and production as similar as possible"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logs"),": Treat logs as event streams"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Admin processes"),": Run admin/management tasks as one-off processes")),(0,i.kt)("p",null,"The 12-Factor App methodology aims to make SaaS applications more portable, scalable, agile, and consistent. It is based on the experience and observations of hundreds of SaaS apps developed and deployed on the Heroku platform."),(0,i.kt)("p",null,": ",(0,i.kt)("a",{parentName:"p",href:"https://12factor.net/"},"https://12factor.net/"))))}s.isMDXComponent=!0;const l={sidebar_position:3,id:"system-design-principles",sidebar_label:"System Design Principles",title:"System Design Principles"},p=void 0,m={unversionedId:"system-design/system-design-principles",id:"system-design/system-design-principles",title:"System Design Principles",description:"Software development Principles",source:"@site/docs/system-design/30.principles.md",sourceDirName:"system-design",slug:"/system-design/system-design-principles",permalink:"/devviews/interviews/system-design/system-design-principles",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/system-design/30.principles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"system-design-principles",sidebar_label:"System Design Principles",title:"System Design Principles"},sidebar:"designSystemInterviewSidebar",previous:{title:"Database",permalink:"/devviews/interviews/system-design/database"},next:{title:"Architectures",permalink:"/devviews/interviews/system-design/architectures"}},c={},d=[{value:"Software development Principles",id:"software-development-principles",level:3},{value:"Procedural Programming vs DI vs IoC",id:"procedural-programming-vs-di-vs-ioc",level:3},{value:"Procedural Programming vs IoC",id:"procedural-programming-vs-ioc",level:4},{value:"DI vs IoC",id:"di-vs-ioc",level:4}],u={toc:d},g="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"software-development-principles"},"Software development Principles"),(0,i.kt)(s,{mdxType:"Principles"}),(0,i.kt)("h3",{id:"procedural-programming-vs-di-vs-ioc"},"Procedural Programming vs DI vs IoC"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Procedural Programming vs DI vs IoC")),(0,i.kt)("h4",{id:"procedural-programming-vs-ioc"},"Procedural Programming vs IoC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In procedural programming, the code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom (program) code.")),(0,i.kt)("h4",{id:"di-vs-ioc"},"DI vs IoC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DI")," is a technique for ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"injecting dependencies into an object")),", while ",(0,i.kt)("strong",{parentName:"li"},"IoC (Inversion of Control)")," is a design principle that shifts the control of object creation from the client to a ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"third-party container")),". The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"container can provide more features"))," such as auto injecting, managing dependencies, and resolving conflicts.")),(0,i.kt)("p",null,"Here is a table that summarizes the key differences between DI and IoC:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"DI"),(0,i.kt)("th",{parentName:"tr",align:null},"IoC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Definition"),(0,i.kt)("td",{parentName:"tr",align:null},"A technique for injecting dependencies into an object."),(0,i.kt)("td",{parentName:"tr",align:null},"A design principle that shifts the control of object creation from the client to a third-party container.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scope"),(0,i.kt)("td",{parentName:"tr",align:null},"Specific"),(0,i.kt)("td",{parentName:"tr",align:null},"General")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Implementation"),(0,i.kt)("td",{parentName:"tr",align:null},"Typically implemented using dependency injection frameworks."),(0,i.kt)("td",{parentName:"tr",align:null},"Can be implemented in a variety of ways, including dependency injection frameworks, service locators, and container-based programming.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Benefits"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"}," Loose coupling. ")," Testability. * Extensibility."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"}," Loose coupling. ")," Testability. ",(0,i.kt)("em",{parentName:"td"}," Extensibility. ")," Auto injecting. ",(0,i.kt)("em",{parentName:"td"}," Managing dependencies. ")," Resolving conflicts.")))),(0,i.kt)("p",null,"Here is an example of how IoC works in practice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// In procedural programming, you would do this:\n\nclass MyClass {\n  public void doSomething() {\n    // This code would create a new instance of the Logger class.\n    Logger logger = new Logger();\n    logger.log("Something happened");\n  }\n}\n\n// With IoC, you would do this:\n\nclass MyClass {\n  public void doSomething() {\n    // This code would not create a new instance of the Logger class.\n    // Instead, it would ask the IoC container to create a Logger instance for it.\n    Logger logger = getIoCContainer().getLogger();\n    logger.log("Something happened");\n  }\n}\n')),(0,i.kt)("p",null,"Here is an example of how DI works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class MyClass {\n  private Logger logger;\n\n  public MyClass(Logger logger) {\n    this.logger = logger;\n  }\n\n  public void doSomething() {\n    logger.log("Something happened");\n  }\n}\n'))))}h.isMDXComponent=!0}}]);