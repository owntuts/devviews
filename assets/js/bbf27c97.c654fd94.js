"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7219],{3905:function(e,t,r){r.d(t,{Zo:function(){return v},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},v=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),p=l(r),w=o,u=p["".concat(c,".").concat(w)]||p[w]||g[w]||a;return r?n.createElement(u,i(i({ref:t},v),{},{components:r})):n.createElement(u,i({ref:t},v))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=w;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},2052:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_position:1e3,sidebar_label:"Springboot Architecture",title:"Springboot Architecture",tags:["Springboot Knowledge"]},i=void 0,s={unversionedId:"java/springboot/how-springboot-works",id:"java/springboot/how-springboot-works",title:"Springboot Architecture",description:"Springboot Architecture",source:"@site/docs/java/springboot/how-springboot-works.md",sourceDirName:"java/springboot",slug:"/java/springboot/how-springboot-works",permalink:"/devviews/interviews/java/springboot/how-springboot-works",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/springboot/how-springboot-works.md",tags:[{label:"Springboot Knowledge",permalink:"/devviews/interviews/tags/springboot-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Springboot Architecture",title:"Springboot Architecture",tags:["Springboot Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"Springboot Functional Models",permalink:"/devviews/interviews/java/springboot/functional-model"},next:{title:"Springboot Modules",permalink:"/devviews/interviews/java/springboot/modules"}},c={},l=[],v={toc:l},p="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Springboot Architecture")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Springboot Architecture",src:r(810).Z,width:"700",height:"215"})),(0,o.kt)("p",null,"Spring Boot architecture is a way of designing and organizing a Spring Boot application into different layers that communicate with each other. The main layers are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Presentation layer"),": This layer handles the user interface and the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"HTTP requests and responses")),". It can use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"controllers, views, filters, interceptors"))," and other components to perform ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"authentication, validation, JSON conversion"))," and other tasks. It can also use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Spring MVC or Spring WebFlux"))," frameworks to simplify the web development."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Business layer"),": This layer contains the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"business logic"))," and the rules of the application. It can use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"services, components, aspects"))," and other beans to perform operations, calculations, transactions and other tasks. It can also use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Spring AOP or Spring Security"))," frameworks to add cross-cutting concerns such as ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"logging, caching, security"))," and others."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Persistence layer"),": This layer handles the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"data access and storage logic")),". It can use ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"repositories, entities, DAOs"))," and other components to interact with databases, files or other sources of data. It can also use Spring Data or Spring Batch frameworks to simplify the data access and processing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database layer"),": This layer contains the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"actual databases or data sources"))," that store the data of the application. It can use relational databases such as ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"MySQL or PostgreSQL")),", or non-relational databases such as ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"MongoDB or Redis")),".")),(0,o.kt)("p",null,"Spring Boot architecture follows the dependency rule, which means that ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"each layer depends only on the layers below it, not above it")),". This way, the layers are loosely coupled and easy to test and maintain. Spring Boot also provides auto-configuration and starter dependencies to reduce the boilerplate code and configuration needed for each layer.")))}g.isMDXComponent=!0},810:function(e,t){t.Z="data:image/png;base64,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"}}]);