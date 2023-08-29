"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[1581],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Springboot Modules",title:"Springboot Modules",tags:["Springboot Knowledge"]},i=void 0,s={unversionedId:"java/springboot/modules",id:"java/springboot/modules",title:"Springboot Modules",description:"Spring Boot modules",source:"@site/docs/java/springboot/modules.md",sourceDirName:"java/springboot",slug:"/java/springboot/modules",permalink:"/devviews/interviews/java/springboot/modules",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/springboot/modules.md",tags:[{label:"Springboot Knowledge",permalink:"/devviews/interviews/tags/springboot-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Springboot Modules",title:"Springboot Modules",tags:["Springboot Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"Springboot Architecture",permalink:"/devviews/interviews/java/springboot/how-springboot-works"},next:{title:"Java Interviews",permalink:"/devviews/interviews/java/java-interview-questions-answers"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Spring Boot modules")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Spring Boot modules",src:n(25534).Z,width:"579",height:"447"})),(0,o.kt)("p",null,"Spring Boot Core Container is a term that refers to the core module of the Spring Framework, which provides the basic functionality for creating and managing beans. The core container consists of four components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core"),": Provides the fundamental parts of the framework, such as IoC and dependency injection features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Beans"),": Provides a factory pattern for creating and configuring beans, as well as a registry for storing and retrieving them."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Context"),": Provides a way to access beans in a consistent manner, as well as advanced features such as events, resources, and internationalization."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expression Language"),": Provides a powerful expression language for querying and manipulating objects at runtime.")),(0,o.kt)("p",null,"The core container is the basis of the whole Spring ecosystem and comprehends many other modules that build on top of it, such as web, data, security, cloud, etc.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Spring Boot workflow")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Springboot workflow",src:n(8440).Z,width:"900",height:"553"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The client makes an HTTP ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"request"))," (GET, POST, PUT, DELETE, etc.) to the server."),(0,o.kt)("li",{parentName:"ul"},"The request is forwarded to the ",(0,o.kt)("inlineCode",{parentName:"li"},"DispatcherServlet")," (in Web Module), which is the front controller of Spring MVC."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"DispatcherServlet")," maps the request to the appropriate ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"controller"))," based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"@RequestMapping")," annotations."),(0,o.kt)("li",{parentName:"ul"},"The controller handles the request and calls the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"service"))," layer if needed."),(0,o.kt)("li",{parentName:"ul"},"The service layer performs the business logic and uses the persistence layer to access the data."),(0,o.kt)("li",{parentName:"ul"},"The persistence layer uses ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"JPA"))," to interact with the database layer and performs CRUD (create, read, update, delete) operations."),(0,o.kt)("li",{parentName:"ul"},"The controller returns a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"response"))," to the client, which can be a view (such as JSP) or a JSON object."))))}d.isMDXComponent=!0},8440:function(e,t,n){t.Z=n.p+"assets/images/springboot-architecture-6830818364e6c40ed8bc396f7a063498.png"},25534:function(e,t,n){t.Z=n.p+"assets/images/springboot-modules-8bede8a8ddcef68fe1308bc0e3766302.png"}}]);