"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7885],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const i={sidebar_position:1e3,sidebar_label:"Interceptor",title:"What Is Interceptor In Angular?",slug:"/interceptor-angular",tags:["Middle Angular Interviews"]},o=void 0,l={unversionedId:"js/angular-interviews/middle/interceptor-angular",id:"js/angular-interviews/middle/interceptor-angular",title:"What Is Interceptor In Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/middle/interceptor-angular.md",sourceDirName:"js/angular-interviews/middle",slug:"/interceptor-angular",permalink:"/devviews/interviews/interceptor-angular",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/middle/interceptor-angular.md",tags:[{label:"Middle Angular Interviews",permalink:"/devviews/interviews/tags/middle-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Interceptor",title:"What Is Interceptor In Angular?",slug:"/interceptor-angular",tags:["Middle Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Change Detection Strategy",permalink:"/devviews/interviews/change-detection-strategy"},next:{title:"Multi Provider",permalink:"/devviews/interviews/eager-loading-vs-lazy-loading-vs-pre-loading-angular"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat Is ",(0,a.kt)("strong",{parentName:"p"},"Interceptor")," In Angular? And how to use Interceptor?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,a.kt)("strong",{parentName:"p"},"Interceptor")," is a function (middleware) that receives and adjusts requests/responses before they are processed/sent to the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="request-interceptor.service.ts"',title:'"request-interceptor.service.ts"'},"@Injectable()\nexport class ReqInterceptor implements HttpInterceptor {\n  public intercept(req: HttpRequest<any>, res: HttpHandler): Observable<HttpEvent<any>> {\n    req = req.clone({\n      setHeaders: {\n        // ...\n      }\n    });\n    next.handle(req);\n  }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app-module.Module.ts"',title:'"app-module.Module.ts"'},"@NgModule({\n  // ...\n  providers: [\n    {\n      provide: HTTP_INTERCEPTORS,\n      useClass: ReqInterceptor,\n      multi: true // can register multiple interceptors\n    }\n  ]\n})\n"))))}d.isMDXComponent=!0}}]);