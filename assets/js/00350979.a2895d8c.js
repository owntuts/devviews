"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[970],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44504:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var a=r(83117),n=(r(67294),r(3905));const o={sidebar_position:1e3,sidebar_label:"Kafka Architecture",title:"Kafka Architecture",tags:["Kafka Knowledge"]},i=void 0,s={unversionedId:"kafka/hero/architecture",id:"kafka/hero/architecture",title:"Kafka Architecture",description:"Architecture",source:"@site/docs/kafka/hero/architecture.md",sourceDirName:"kafka/hero",slug:"/kafka/hero/architecture",permalink:"/devviews/interviews/kafka/hero/architecture",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/kafka/hero/architecture.md",tags:[{label:"Kafka Knowledge",permalink:"/devviews/interviews/tags/kafka-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Kafka Architecture",title:"Kafka Architecture",tags:["Kafka Knowledge"]},sidebar:"kafkaInterviewSidebar",next:{title:"list of common stream operations",permalink:"/devviews/interviews/kafka/hero/common-stream"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,(0,n.kt)("h5",null,"Architecture")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kafka Architecture",src:r(85841).Z,width:"947",height:"486"})),(0,n.kt)("p",null,"Kafka is a distributed messaging system that can be used for real-time data streaming and processing. It is highly scalable and fault-tolerant, making it a popular choice for handling large volumes of data."),(0,n.kt)("p",null,"The Kafka architecture is composed of four main components:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Producers"),": A producer is responsible for sending messages to Kafka topics. It can be a standalone application that generates events or a system that collects log data from various sources."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Brokers"),": Kafka brokers are the nodes that store and manage the messages that are produced by the producers. They are responsible for maintaining the replicas of the data and distributing the messages to consumers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consumers"),": A consumer is responsible for subscribing to the Kafka topics, receiving and processing the messages. It can be a standalone application, a service or a system that processes events in real-time."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zookeeper"),": Zookeeper is responsible for managing the Kafka cluster and the coordination of the brokers, producers and consumers. It provides features like leader election, configuration management, and synchronization."),(0,n.kt)("p",null,"In the above diagram, the producers generate messages and send them to the Kafka cluster. The cluster is composed of the brokers, which are responsible for storing and managing the messages. The Kafka cluster is managed by Zookeeper, which coordinates communication between the brokers, producers and consumers."),(0,n.kt)("p",null,"Consumers subscribe to specific Kafka topics and receive messages from the brokers. They can process the data and perform real-time analytics. The Kafka architecture allows for high scalability, low latency and fault tolerance, making it a popular choice for handling large volumes of data.")))}f.isMDXComponent=!0},85841:function(e,t,r){t.Z=r.p+"assets/images/architecture-e4005e7ea5122e022b2cf448c9379ac0.png"}}]);