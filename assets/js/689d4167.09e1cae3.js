"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[2526],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2793:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=a(3117),n=(a(7294),a(3905));const i={sidebar_position:1e3,sidebar_label:"Kafka Replication",title:"Kafka Replication",tags:["Kafka Knowledge"]},o=void 0,s={unversionedId:"kafka/hero/replication",id:"kafka/hero/replication",title:"Kafka Replication",description:"Data Distribution & Replication in kafka",source:"@site/docs/kafka/hero/replication.md",sourceDirName:"kafka/hero",slug:"/kafka/hero/replication",permalink:"/devviews/interviews/kafka/hero/replication",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/kafka/hero/replication.md",tags:[{label:"Kafka Knowledge",permalink:"/devviews/interviews/tags/kafka-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Kafka Replication",title:"Kafka Replication",tags:["Kafka Knowledge"]},sidebar:"kafkaInterviewSidebar",previous:{title:"Kafka Pub/Sub Example",permalink:"/devviews/interviews/kafka/hero/pub-sub-strem-example"},next:{title:"Kafka Zookeeper Roles",permalink:"/devviews/interviews/kafka/hero/zookeeper"}},l={},p=[{value:"Here&#39;s an overview of how data distribution and replication work in Kafka:",id:"heres-an-overview-of-how-data-distribution-and-replication-work-in-kafka",level:3}],c={toc:p},d="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,(0,n.kt)("h5",null,"Data Distribution & Replication in kafka")),(0,n.kt)("p",null,"In Kafka, ",(0,n.kt)("strong",{parentName:"p"},"data distribution and replication")," are key features that help ensure high availability, fault-tolerance, and durability."),(0,n.kt)("p",null,"Every Kafka topic is divided into one or more partitions, and each partition is replicated across multiple Kafka brokers. This means that each partition has multiple copies, called replicas, that are stored on different brokers for redundancy and fault-tolerance."),(0,n.kt)("h3",{id:"heres-an-overview-of-how-data-distribution-and-replication-work-in-kafka"},"Here's an overview of how data distribution and replication work in Kafka:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kafka Replication",src:a(4895).Z,width:"1314",height:"774"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Partitioning:")," When a producer ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"sends a message to a Kafka topic")),", the message is assigned to a specific partition using a hashing algorithm based on the message's key. The partition is identified by an integer value from 0 to (number of partitions - 1).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Replicating:")," (Each partition is ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"replicated across multiple Kafka brokers")),") When a topic is created, the user sets the replication factor, which determines the number of replicas for each partition. The recommended replication factor is 3, meaning each partition has three replicas on different brokers."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The replicas for each partition include a leader replica and multiple follower replicas. ",(0,n.kt)("strong",{parentName:"p"},"The leader replica")," is responsible for coordinating writes and managing the partition. ",(0,n.kt)("strong",{parentName:"p"},"The follower replicas")," replicate data from the leader and provide backup and fault-tolerance in case of a server failure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The leader replica receives the message from the producer and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"writes it to the end of the partition's log")),". The message is assigned a unique offset, which represents its sequence number in the partition.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"The follower replicas replicate the messages"))," written by the leader by copying the log segment files from the leader to their own log directories. Each replica maintains an offset value, indicating the last message it has replicated from the leader. Follower replicas regularly send requests to the leader to ensure they are up-to-date and do not fall behind.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Data Distribution"),": When a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"consumer group subscribes to a Kafka topic"))," and its associated partitions, each consumer is assigned to only one partition within the same topic, ensuring parallelism for data processing. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Consumers read messages from the partition in the order they were written")),", starting from their assigned offset.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Managment:")," In case of a broker failure, the corresponding leader replica may fail as well. In that case, the follower ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"ZooKeeper elect a new leader"))," and replicate the missing data from the new leader replica."))),(0,n.kt)("p",null,"By using the above process, Kafka provides durable, fault-tolerant, and scalable distributed messaging capabilities.")))}f.isMDXComponent=!0},4895:function(e,t,a){t.Z=a.p+"assets/images/replication-bdf4920601d911a4d9c718da880300b0.png"}}]);