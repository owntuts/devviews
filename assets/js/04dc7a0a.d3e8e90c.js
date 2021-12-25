"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9956],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(d,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4826:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1e3,sidebar_label:"Multi Provider",title:"Eager Loading vs Lazy Loading vs Pre-Loading Angular?",slug:"/eager-loading-vs-lazy-loading-vs-pre-loading-angular",tags:["Middle Angular Interviews"]},d=void 0,p={unversionedId:"js/angular-interviews/middle/loading-strategies",id:"js/angular-interviews/middle/loading-strategies",title:"Eager Loading vs Lazy Loading vs Pre-Loading Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/middle/loading-strategies.md",sourceDirName:"js/angular-interviews/middle",slug:"/eager-loading-vs-lazy-loading-vs-pre-loading-angular",permalink:"/interviews/eager-loading-vs-lazy-loading-vs-pre-loading-angular",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/middle/loading-strategies.md",tags:[{label:"Middle Angular Interviews",permalink:"/interviews/tags/middle-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Multi Provider",title:"Eager Loading vs Lazy Loading vs Pre-Loading Angular?",slug:"/eager-loading-vs-lazy-loading-vs-pre-loading-angular",tags:["Middle Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Change Detection Strategy",permalink:"/interviews/change-detection-strategy"},next:{title:"Multi Provider",permalink:"/interviews/multi-provider-angular"}},s=[],g={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat Is ",(0,o.kt)("strong",{parentName:"p"},"Eager Loading"),", ",(0,o.kt)("strong",{parentName:"p"},"Lazy Loading"),", and ",(0,o.kt)("strong",{parentName:"p"},"Pre-Loading")," in Angular?"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"ANSWER:")),(0,o.kt)("p",null,"  ","*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,o.kt)("strong",{parentName:"p"},"Eager Loading"),", ",(0,o.kt)("strong",{parentName:"p"},"Lazy Loading"),", and ",(0,o.kt)("strong",{parentName:"p"},"Pre-Loading")," are loading strategies in Angular."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Eager Loading"),": A feature module will be imported & loaded before the application starts -> So, We should ",(0,o.kt)("strong",{parentName:"p"},"*use "),"Eager Loading",(0,o.kt)("strong",{parentName:"p"}," to load core modules*")," -> and usually ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"come with ",(0,o.kt)("inlineCode",{parentName:"em"},"forRoot")," pattern")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Lazy Loading"),": A feature module will be loaded on demand after the application starts -> and usually ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"come with ",(0,o.kt)("inlineCode",{parentName:"em"},"forChild")," pattern")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pre-Loading"),": A feature module will be loaded automatically after the application starts: like lazy loading except ",(0,o.kt)("inlineCode",{parentName:"p"},"applyPreload")," option."),(0,o.kt)("h3",{parentName:"li",id:"look-at-example-below-for-more-details"},"Look At Example Below For More Details"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  { path: '', redirectTo: 'eager-loading', pathMatch: 'full' }, \n  { \n    path: 'eager-loading', \n    component: EagerHomeComponent, \n    children: [\n      { path: '', redirectTo: 'childl', pathMatch: 'full' }, \n      { path: 'childl', component: EagerChildComponent }, \n      { path: 'child2', component: EagerChild2Component },\n      { path: '**', redirectTo: 'childl' } \n    ]\n  }, \n  { \n    path: 'lazy-loading', \n    loadChildren:'./features/lazy-loading-module/lazy-loading.module#LazyLoadingModule' \n  }, \n  { \n    path: 'pre-loading', \n    loadChildren: './features/pre-loading-module/pre-loading.module#PreLoadingModule', \n    data: { applyPreload: true } \n  }, \n  { path: '**', redirectTo: reager-loading' } \n];\n\n@NgModule({\n  imports: [\n    RouterModule.forRoot(routes, { preloadingStrategy:  CustomPreloadingStrategy}) \n  ],\n    exports: [RouterModule] \n}) export class\nAppRoutingModule { }\n"))))))}u.isMDXComponent=!0}}]);