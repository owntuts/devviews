"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9664],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,d=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return t?a.createElement(d,i(i({ref:r},m),{},{components:t})):a.createElement(d,i({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27199:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(83117),n=(t(67294),t(3905));const o={sidebar_position:1e3,sidebar_label:"How Terraform Work",title:"How Terraform Work",slug:"/how-terraforn-work",tags:["Basic Terraform Interviews"]},i=void 0,s={unversionedId:"terraform/basic/how-terraforn-work",id:"terraform/basic/how-terraforn-work",title:"How Terraform Work",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/terraform/basic/how-terraforn-work.md",sourceDirName:"terraform/basic",slug:"/how-terraforn-work",permalink:"/devviews/interviews/how-terraforn-work",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/terraform/basic/how-terraforn-work.md",tags:[{label:"Basic Terraform Interviews",permalink:"/devviews/interviews/tags/basic-terraform-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"How Terraform Work",title:"How Terraform Work",slug:"/how-terraforn-work",tags:["Basic Terraform Interviews"]},sidebar:"terraformInterviewSidebar",previous:{title:"Terrform File Types",permalink:"/devviews/interviews/terraforn-file-types"},next:{title:"store state files remotely",permalink:"/devviews/interviews/remotely-statefile"}},l={},u=[{value:"Here&#39;s steps to use Terraform",id:"heres-steps-to-use-terraform",level:3},{value:"What is plugin",id:"what-is-plugin",level:3},{value:"What is state",id:"what-is-state",level:3}],m={toc:u},p="wrapper";function c(e){let{components:r,...o}=e;return(0,n.kt)(p,(0,a.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Question:",type:"quest"},(0,n.kt)("p",{parentName:"admonition"},"*",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nPlease explain How Terraform works?")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h5",null,"ANSWER:")),(0,n.kt)("p",null,"  ","*",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,n.kt)("img",{alt:"How it works",src:t(6151).Z,width:"1003",height:"609"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),": Terraform takes two types of input resources:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Your configuration files (your desired state)")),": ",(0,n.kt)("inlineCode",{parentName:"li"},".tf")," files in your project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"current state (which is managed by Terraform)")),": Terraform also keeps track of your infrastructure state in a file called ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform.tfstate")," on the way."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),": With these info the Terraform then ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"creates a plan"))," of what resources needs to be created/changed/removed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),": Terraform Contacts to providers (IaaS (like AWS, GCP, Azure), PaaS (like Heroku, Kubernetes) or SaaS services (like Cloudflare)). Providers expose resources, which makes it possible to create infrastructure across all this platforms.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"heres-steps-to-use-terraform"},"Here's steps to use Terraform"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You write configuration files using HCL (HashiCorp Configuration Language) syntax in a folder. These files should ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"specify the provider, resources, variables, outputs, etc")),". that you want to use."),(0,n.kt)("li",{parentName:"ol"},"You initialize your working directory by running ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform init"),". This command will ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"download the required plugins"))," for your provider and prepare your folder for other commands."),(0,n.kt)("li",{parentName:"ol"},"You ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"validate"))," your configuration files by running ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform validate"),". This command will check for any syntax errors or configuration issues."),(0,n.kt)("li",{parentName:"ol"},"You ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"plan your changes"))," by running ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform plan"),". This command will show you what actions Terraform will take to create or update your infrastructure based on your configuration files. You can also save the plan output to a file for later use."),(0,n.kt)("li",{parentName:"ol"},"You apply your changes by running ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform apply"),". This command will ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"execute the actions"))," shown in the plan and create or update your infrastructure. You can also use a saved plan file as an argument for this command. You will be prompted to confirm the changes before applying them."),(0,n.kt)("li",{parentName:"ol"},"You ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"destroy your infrastructure"))," by running ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform destroy"),". This command will delete all the resources that were created by Terraform. You will be prompted to confirm the destruction before proceeding.")),(0,n.kt)("h3",{id:"what-is-plugin"},"What is plugin"),(0,n.kt)("p",null,"Terraform uses providers (plugins) to communicate with the APIs of the platforms and services that you want to manage. There are thousands of providers available for Terraform, covering many types of resources and services. You can find all publicly available providers on the Terraform Registry\xb9."),(0,n.kt)("h3",{id:"what-is-state"},"What is state"),(0,n.kt)("p",null,"Terraform also keeps track of your infrastructure state in a file called terraform.tfstate. This file records the current state of your resources and their attributes. Terraform uses this file to compare the desired state (from your configuration files) with the actual state (from the APIs) and determine what changes need to be made. You can store this file locally or remotely using a backend.")))}c.isMDXComponent=!0},6151:function(e,r,t){r.Z=t.p+"assets/images/how-it-work-6fb6ebba6146fe218f5b1d5cd2886c53.png"}}]);