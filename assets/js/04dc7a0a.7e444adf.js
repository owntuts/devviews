"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9956],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,c=u["".concat(d,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(c,i(i({ref:t},s),{},{components:n})):r.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:1e3,sidebar_label:"Multi Provider",title:"Eager Loading vs Lazy Loading vs Pre-Loading Angular?",slug:"/eager-loading-vs-lazy-loading-vs-pre-loading-angular",tags:["Middle Angular Interviews"]},i=void 0,l={unversionedId:"js/angular-interviews/middle/loading-strategies",id:"js/angular-interviews/middle/loading-strategies",title:"Eager Loading vs Lazy Loading vs Pre-Loading Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/middle/loading-strategies.md",sourceDirName:"js/angular-interviews/middle",slug:"/eager-loading-vs-lazy-loading-vs-pre-loading-angular",permalink:"/devviews/interviews/eager-loading-vs-lazy-loading-vs-pre-loading-angular",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/middle/loading-strategies.md",tags:[{label:"Middle Angular Interviews",permalink:"/devviews/interviews/tags/middle-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Multi Provider",title:"Eager Loading vs Lazy Loading vs Pre-Loading Angular?",slug:"/eager-loading-vs-lazy-loading-vs-pre-loading-angular",tags:["Middle Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Interceptor",permalink:"/devviews/interviews/interceptor-angular"},next:{title:"Multi Provider",permalink:"/devviews/interviews/multi-provider-angular"}},d={},p=[],s={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat Is ",(0,a.kt)("strong",{parentName:"p"},"Eager Loading"),", ",(0,a.kt)("strong",{parentName:"p"},"Lazy Loading"),", and ",(0,a.kt)("strong",{parentName:"p"},"Pre-Loading")," in Angular?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,a.kt)("strong",{parentName:"p"},"Eager Loading"),", ",(0,a.kt)("strong",{parentName:"p"},"Lazy Loading"),", and ",(0,a.kt)("strong",{parentName:"p"},"Pre-Loading")," are loading strategies in Angular."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eager Loading"),": A feature module or a component will be imported & loaded before the application starts -> So, We should ",(0,a.kt)("strong",{parentName:"p"},"*use "),"Eager Loading",(0,a.kt)("strong",{parentName:"p"}," to load core modules*")," -> and usually ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"come with ",(0,a.kt)("inlineCode",{parentName:"em"},"forRoot")," pattern")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Lazy Loading"),": A feature module will be loaded on demand after the application starts -> and usually ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"come with ",(0,a.kt)("inlineCode",{parentName:"em"},"forChild")," pattern")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Pre-Loading"),": A feature module will be loaded automatically after the application starts: like lazy loading except ",(0,a.kt)("inlineCode",{parentName:"p"},"applyPreload")," option."),(0,a.kt)("h3",{parentName:"li",id:"look-at-example-below-for-more-details"},"Look At Example Below For More Details"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  { path: '', redirectTo: 'eager-loading', pathMatch: 'full' }, \n  { \n    path: 'eager-loading', \n    component: EagerLoadedComponent, \n    children: [\n      { path: 'eager-child', component: EagerChildComponent }, \n    ]\n  }, \n  { \n    path: 'lazy-loading', \n    loadChildren: () => import('./lazy-loading.module').then(m => m.LazyLoadingModule)\n  }, \n  { \n    path: 'pre-loading', \n    loadChildren: () => import('./pre-loading.module').then(m => m.PreloadingModule),\n    data: { applyPreload: true } \n  }, \n];\n\nclass CustomPreloadingStrategy implements PreloadingStrategy {\n  preload(route: Route, loadModule: Function): Observable<any> {\n    return route.data && route.data.applyPreload ? loadModule() : of(null);\n  }\n}\n\n@NgModule({\n  imports: [\n    RouterModule.forRoot(routes, { preloadingStrategy:  CustomPreloadingStrategy}) \n  ],\n    exports: [RouterModule] \n}) export class\nAppRoutingModule { }\n"))))))}g.isMDXComponent=!0}}]);