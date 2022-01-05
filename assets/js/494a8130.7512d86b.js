"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7563],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),v=a,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:1e3,sidebar_label:"useClass vs useValue vs useFactory",title:"Difference between useClass vs useValue vs useFactory providers In Angular?",slug:"/useclass-vs-usevalue-vs-usefactory-providers",tags:["Middle Angular Interviews"]},l=void 0,u={unversionedId:"js/angular-interviews/middle/useClass-useValue-useFactory",id:"js/angular-interviews/middle/useClass-useValue-useFactory",title:"Difference between useClass vs useValue vs useFactory providers In Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/middle/useClass-useValue-useFactory.md",sourceDirName:"js/angular-interviews/middle",slug:"/useclass-vs-usevalue-vs-usefactory-providers",permalink:"/interviews/useclass-vs-usevalue-vs-usefactory-providers",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/middle/useClass-useValue-useFactory.md",tags:[{label:"Middle Angular Interviews",permalink:"/interviews/tags/middle-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"useClass vs useValue vs useFactory",title:"Difference between useClass vs useValue vs useFactory providers In Angular?",slug:"/useclass-vs-usevalue-vs-usefactory-providers",tags:["Middle Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Route Guards",permalink:"/interviews/many-types-route-guards-angular"},next:{title:"Angular Interviews",permalink:"/interviews/angular-interview-questions-answers"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"*",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is the difference between ",(0,s.kt)("inlineCode",{parentName:"p"},"useClass")," vs ",(0,s.kt)("inlineCode",{parentName:"p"},"useValue")," vs ",(0,s.kt)("inlineCode",{parentName:"p"},"useFactory")," providers In Angular?"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h5",null,"ANSWER:")),(0,s.kt)("p",null,"  ","*",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"useClass")),": Inject instance of declared service instead of instance of curent service class."),(0,s.kt)("p",{parentName:"li"},"Example: by default, the instance of ",(0,s.kt)("inlineCode",{parentName:"p"},"TestService")," below will be injected, but if you declare ",(0,s.kt)("inlineCode",{parentName:"p"},"useClass"),", the instance of ",(0,s.kt)("inlineCode",{parentName:"p"},"OtherTestService")," will be injected insteads."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable({\n  providedIn: SomeModule,\n  useClass: OtherTestService\n})\nclass TestService {}\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"useFactory")),": Inject services based on some cases decided by factory function."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// a factory (a function) decides which service will be injected insteaad of instance of TestService.\nexport function xyzFactory(http?: HttpClient) {\n  return new OtherTestService();\n}\n\n@Injectable({\n  providedIn: SomeModule,\n  useFactory: xyzFactory,\n  deps: [HttpClient], // arguments of factory, this is optional\n})\nclass TestService {}\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"useValue")),": Inject a declared value."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable({\n  providedIn: SomeModule,\n  // Inject this value (which is an object) instead of instance of TestService\n  useValue: {\n    sayhi: function() {}\n  },\n})\nclass TestService {}\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"useExisting")),": is like an alias for an already registered provider."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable({\n  providedIn: SomeModule,\n  // Inject OtherTestService which is registered in parent module's providers\n  useExisting: OtherTestService,\n})\nclass TestService {}\n"))))))}d.isMDXComponent=!0}}]);