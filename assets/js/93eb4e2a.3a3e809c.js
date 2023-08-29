"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5590],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54312:function(t,e,n){n.d(e,{ZP:function(){return o}});var r=n(83117),a=(n(67294),n(3905));const l={toc:[]},i="wrapper";function o(t){let{components:e,...n}=t;return(0,a.kt)(i,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"interview"},n.level&&(0,a.kt)("span",{className:"level"},n.level),n.children))}o.isMDXComponent=!0},39425:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));n(54312);const l={sidebar_position:3,id:"CICD",sidebar_label:"CICD",title:"CICD"},i=void 0,o={unversionedId:"system-design/CICD",id:"system-design/CICD",title:"CICD",description:"CI vs CD vs CD",source:"@site/docs/system-design/80.CICD.md",sourceDirName:"system-design",slug:"/system-design/CICD",permalink:"/devviews/interviews/system-design/CICD",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/system-design/80.CICD.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"CICD",sidebar_label:"CICD",title:"CICD"},sidebar:"designSystemInterviewSidebar",previous:{title:"security",permalink:"/devviews/interviews/system-design/security"},next:{title:"Performance",permalink:"/devviews/interviews/system-design/performance"}},s={},u=[{value:"CI vs CD vs CD",id:"ci-vs-cd-vs-cd",level:3}],p={toc:u},m="wrapper";function c(t){let{components:e,...l}=t;return(0,a.kt)(m,(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cicd"},"CICD"),(0,a.kt)("h3",{id:"ci-vs-cd-vs-cd"},"CI vs CD vs CD"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"CI vs CD vs CD")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CICD",src:n(52073).Z,width:"1027",height:"361"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Integration")," - is an automation to build and test application whenever new commits are pushed into the branch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Delivery"),' - is Continuous Integration + Deploy application to production by "clicking on a button" (Release to customers is often, but on demand).'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Deployment")," - is Continuous Delivery but without human intervention (Release to customers is on-going)."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Tools of CICD")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tool"),(0,a.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,a.kt)("th",{parentName:"tr",align:null},"Cloud-based"),(0,a.kt)("th",{parentName:"tr",align:null},"Self-hosted"),(0,a.kt)("th",{parentName:"tr",align:null},"Free tier"),(0,a.kt)("th",{parentName:"tr",align:null},"Paid tier"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Jenkins"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GitLab CI/CD"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CircleCI"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bitbucket Pipelines"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Travis CI"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ArgoCD"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other factors to consider:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Features:")," Each tool offers a different set of features, so it's important to choose one that meets your specific needs. For example, some tools offer more advanced features for testing and deployment, while others are more focused on basic build automation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ease of use:")," The ease of use of a CI/CD tool can vary greatly. Some tools are very complex and require a lot of manual configuration, while others are more user-friendly and can be set up with a few clicks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Community support:")," The community support for a CI/CD tool can be an important factor, especially if you need help troubleshooting problems or getting help with specific features."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pricing:")," The pricing of CI/CD tools can vary greatly. Some tools are free to use for open source projects, while others have paid plans that offer more features and/or scalability.")),(0,a.kt)("p",null,"Ultimately, the best CI/CD tool for your organization will depend on your specific needs and requirements. It's important to compare a few different tools before making a decision.")))}c.isMDXComponent=!0},52073:function(t,e,n){e.Z=n.p+"assets/images/CICD-f3f4cec943c26be4346d07cdcad488d7.png"}}]);