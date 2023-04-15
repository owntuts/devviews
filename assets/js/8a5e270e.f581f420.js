"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[215],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Persisted Queries Link",title:"Persisted Queries Link",slug:"/persisted-query-link-apollojs",tags:["Basic Apollo GraphQL Interviews"]},o=void 0,l={unversionedId:"apollographql/basic/persisted-query-link",id:"apollographql/basic/persisted-query-link",title:"Persisted Queries Link",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/apollographql/basic/persisted-query-link.md",sourceDirName:"apollographql/basic",slug:"/persisted-query-link-apollojs",permalink:"/devviews/interviews/persisted-query-link-apollojs",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/apollographql/basic/persisted-query-link.md",tags:[{label:"Basic Apollo GraphQL Interviews",permalink:"/devviews/interviews/tags/basic-apollo-graph-ql-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Persisted Queries Link",title:"Persisted Queries Link",slug:"/persisted-query-link-apollojs",tags:["Basic Apollo GraphQL Interviews"]},sidebar:"apolloInterviewSidebar",previous:{title:"Apollo Link & Link Chain",permalink:"/devviews/interviews/what-is-apollo-link--link-chain"},next:{title:"Apollo Graphql Interviews",permalink:"/devviews/interviews/apollographql/apollographql-interview-questions-answers-junior"}},s={},p=[{value:"Example",id:"example",level:4},{value:"Send Query",id:"send-query",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain about Persisted Queries Link? Why we need it?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nAll requests in GraphQL contains in a big file that will effect the performance. ",(0,i.kt)("inlineCode",{parentName:"p"},"Persisted Queries Link")," is a useful link in Apollo Client that can ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"help reduce the amount of network traffic"))," between the client and server, and can speed up query execution time."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";\nimport { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";\nimport { sha256 } from \'crypto-hash\';\n\nconst httpLink = new HttpLink({ uri: "/graphql" });\nconst persistedQueriesLink = createPersistedQueryLink({ sha256 });\nconst client = new ApolloClient({\n  cache: new InMemoryCache(),\n  link: persistedQueriesLink.concat(httpLink),\n});\n')),(0,i.kt)("h4",{id:"send-query"},"Send Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  operationName: 'MyQuery',\n  variables: null,\n  query: `query MyQuery { id }`,\n  extensions: {\n    persistedQuery: {\n      version: 1,\n      sha256Hash: hashOfQuery\n    }\n  }\n}\n")),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," method is called with this context information, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Persisted Queries Link")," will ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"intercept the request and replace the query text with the query ID")),". The server will use the ID to look up the full query text from a cache and execute the query as usual.")))}d.isMDXComponent=!0}}]);