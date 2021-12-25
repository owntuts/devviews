"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6173],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6716:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:1e3,sidebar_label:"JIT vs AOT",title:"Difference between Constructor and ngOnInit in Angular",slug:"/difference-constructor-ngoninit-angular",tags:["Basic Angular Interviews"]},c=void 0,l={unversionedId:"js/angular-interviews/basic/constructor-vs-ngOninit",id:"js/angular-interviews/basic/constructor-vs-ngOninit",title:"Difference between Constructor and ngOnInit in Angular",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/constructor-vs-ngOninit.md",sourceDirName:"js/angular-interviews/basic",slug:"/difference-constructor-ngoninit-angular",permalink:"/interviews/difference-constructor-ngoninit-angular",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/constructor-vs-ngOninit.md",tags:[{label:"Basic Angular Interviews",permalink:"/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"JIT vs AOT",title:"Difference between Constructor and ngOnInit in Angular",slug:"/difference-constructor-ngoninit-angular",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Bootstrap Component vs Entry Component",permalink:"/interviews/difference-bootstrap-component-entry-component"},next:{title:"Custom Directives",permalink:"/interviews/angular-directive"}},u=[],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat are differences between ",(0,i.kt)("strong",{parentName:"p"},"Constructor")," and ",(0,i.kt)("strong",{parentName:"p"},"ngOnInit")," in Angular?"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"constructor")," is ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"part of ES6 JavaScript"))," class which is executed when the class is instantiated: ",(0,i.kt)("inlineCode",{parentName:"li"},"new MyClass(something)"),". It can be used to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"inject dependencies"))," (such as services) to be used later"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ngOnInit")," is ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"part of Angular lifecycle"))," which called by Angular to indicate that Angular is done creating the component. It can be used to do something once after component ready.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class ExampleComponent implement OnInit{\n  constructor(private _dataService: DataService) {\n    // Called first time before the ngOnInit()\n  }\n  ngOnInit() {\n    // Called after the constructor and called  after the first ngOnChanges()\n    this.dataService.getSomeData().suscribe(data => ...);\n  }\n}\n"))))}m.isMDXComponent=!0}}]);