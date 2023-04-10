"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[2750],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,v=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Difference Between Dynamic type vs Object type variables In C# (C-Sharp)",slug:"/dynamic-type-vs-object-type-variables-c-sharp",tags:["Basic C# Interviews"]},o=void 0,c={unversionedId:"c-sharp/basic/object-vs-dynamic-type",id:"c-sharp/basic/object-vs-dynamic-type",title:"Difference Between Dynamic type vs Object type variables In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/object-vs-dynamic-type.md",sourceDirName:"c-sharp/basic",slug:"/dynamic-type-vs-object-type-variables-c-sharp",permalink:"/devviews/interviews/dynamic-type-vs-object-type-variables-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/object-vs-dynamic-type.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Difference Between Dynamic type vs Object type variables In C# (C-Sharp)",slug:"/dynamic-type-vs-object-type-variables-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"new vs override",permalink:"/devviews/interviews/new-vs-override"},next:{title:"private protected",permalink:"/devviews/interviews/private-protected-c-sharp"}},p={},s=[],l={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nPlease tell the diference between Between ",(0,a.kt)("strong",{parentName:"p"},"Dynamic type")," vs ",(0,a.kt)("strong",{parentName:"p"},"Object type")," variables In C#?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"object type")," is an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Object")," in .NET. All types in .Net inherit directly or indirectly from ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Object"),". So, you can assign values of any type to variables of type object.  ",(0,a.kt)("u",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Type checking"))," for object type variables takes place ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"at compile time"))),". ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dynamic types")," are similar to object types. But ",(0,a.kt)("u",null,"dynamic type is not resolved or type checked at compile time"),". ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"At run time")),", dynamic type is converted to object type."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"dynamic dyn = 1;\nobject obj = 1;\ndyn = dyn + 3; // throw error at run time\nobj = obj + 3; // throw error at compile time\n"))))))}u.isMDXComponent=!0}}]);