"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[2750],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},261:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Difference Between Dynamic type vs Object type variables In C# (C-Sharp)",slug:"/dynamic-type-vs-object-type-variables-c-sharp",tags:["Basic C# Interviews"]},c=void 0,p={unversionedId:"c-sharp/basic/object-vs-dynamic-type",id:"c-sharp/basic/object-vs-dynamic-type",title:"Difference Between Dynamic type vs Object type variables In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/object-vs-dynamic-type.md",sourceDirName:"c-sharp/basic",slug:"/dynamic-type-vs-object-type-variables-c-sharp",permalink:"/interviews/dynamic-type-vs-object-type-variables-c-sharp",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/object-vs-dynamic-type.md",tags:[{label:"Basic C# Interviews",permalink:"/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Difference Between Dynamic type vs Object type variables In C# (C-Sharp)",slug:"/dynamic-type-vs-object-type-variables-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"Boxing vs Unboxing",permalink:"/interviews/differences-boxing-vs-unboxing-c-sharp"},next:{title:"C# Interviews",permalink:"/interviews/c-sharp/c-sharp-interview-questions-answers"}},l=[],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nPlease tell the diference between Between ",(0,i.kt)("strong",{parentName:"p"},"Dynamic type")," vs ",(0,i.kt)("strong",{parentName:"p"},"Object type")," variables In C#?"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"object type")," is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Object")," in .NET. All types in .Net inherit directly or indirectly from ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Object"),". So, you can assign values of any type to variables of type object.  ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Type checking"))," for object type variables takes place ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"at compile time"))),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dynamic types")," are similar to object types. But ",(0,i.kt)("u",null,"dynamic type is not resolved or type checked at compile time"),". ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"At run time")),", dynamic type is converted to object type."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"dynamic dyn = 1;\nobject obj = 1;\ndyn = dyn + 3; // throw error at run time\nobj = obj + 3; // throw error at compile time\n"))))))}u.isMDXComponent=!0}}]);