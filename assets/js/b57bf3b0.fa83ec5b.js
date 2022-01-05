"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5966],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=u(r),m=i,d=v["".concat(c,".").concat(m)]||v[m]||p[m]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},8500:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return v}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:1e3,sidebar_label:"Directives vs Component",title:"Attribute Directives vs Structural Directives vs Component",slug:"/attribute-directives-vs-structural-directives-vs-component",tags:["Basic Angular Interviews"]},c=void 0,u={unversionedId:"js/angular-interviews/basic/attribute-vs-structure-directive",id:"js/angular-interviews/basic/attribute-vs-structure-directive",title:"Attribute Directives vs Structural Directives vs Component",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/attribute-vs-structure-directive.md",sourceDirName:"js/angular-interviews/basic",slug:"/attribute-directives-vs-structural-directives-vs-component",permalink:"/interviews/attribute-directives-vs-structural-directives-vs-component",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/attribute-vs-structure-directive.md",tags:[{label:"Basic Angular Interviews",permalink:"/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Directives vs Component",title:"Attribute Directives vs Structural Directives vs Component",slug:"/attribute-directives-vs-structural-directives-vs-component",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Tutorial Intro",permalink:"/interviews/js/intro"},next:{title:"Bootstrap Component vs Entry Component",permalink:"/interviews/difference-bootstrap-component-entry-component"}},l=[],p={toc:l};function v(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat are Differences among ",(0,a.kt)("strong",{parentName:"p"},"Attribute Directives")," vs ",(0,a.kt)("strong",{parentName:"p"},"Structural Directives")," vs ",(0,a.kt)("strong",{parentName:"p"},"Component")," in Angular?"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Attribute Directives"),": Responsible for manipulating the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"appearance and behavior of DOM"))," elements (like NgStyle, NgClass, etc)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Structural Directives"),": Responsible for changing the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"structure of the DOM"))," (ex. NgIf, NgFor, and NgSwitch)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Components"),": The component is like the general type of directive. It can change the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"appearance and behavior of DOM"))," as well as the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"structure of the DOM"))," The only difference between Components and the other two types of directives is the Template."))))}v.isMDXComponent=!0}}]);