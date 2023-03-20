"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5712],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(v,s(s({ref:t},p),{},{components:a})):n.createElement(v,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5860:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={sidebar_position:1e3,sidebar_label:"Route Guards",title:"How Many Types of Route Guards In Angular?",slug:"/many-types-route-guards-angular",tags:["Middle Angular Interviews"]},u=void 0,l={unversionedId:"js/angular-interviews/middle/route-gaurds",id:"js/angular-interviews/middle/route-gaurds",title:"How Many Types of Route Guards In Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/middle/route-gaurds.md",sourceDirName:"js/angular-interviews/middle",slug:"/many-types-route-guards-angular",permalink:"/devviews/interviews/many-types-route-guards-angular",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/middle/route-gaurds.md",tags:[{label:"Middle Angular Interviews",permalink:"/devviews/interviews/tags/middle-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Route Guards",title:"How Many Types of Route Guards In Angular?",slug:"/many-types-route-guards-angular",tags:["Middle Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"ProvidedIn vs Providers",permalink:"/devviews/interviews/providedin-vs-providers-angular"},next:{title:"useClass vs useValue vs useFactory",permalink:"/devviews/interviews/useclass-vs-usevalue-vs-usefactory-providers"}},p=[],c={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is ",(0,o.kt)("strong",{parentName:"p"},"Route Guard")," in Angular? How Many Types of Route Guards In Angular? Please Explain about them?"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"ANSWER:")),(0,o.kt)("p",null,"  ","*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,o.kt)("strong",{parentName:"p"},"Route guards")," are interfaces provided by Angular allows us to control the accessibility of a route based on condition. We usually use Route guard for authentication, limit user access to certain routes."),(0,o.kt)("p",null,"  There are 5 types of route guards:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"canActivate"),": Allows to control if a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"route can be activated (accessed)")),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="router.route.ts"',"{5}":!0,title:'"router.route.ts"'},"const routes: Routes = [\n  {\n    path: 'private-route',\n    component: PrivateComponent,\n    canActivate: [CanActivateRouteGaurd]\n  }\n]\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{4} title="can-activate-route-gaurd.service.ts"',"{4}":!0,title:'"can-activate-route-gaurd.service.ts"'},"@Injectable()\nexport class CanActivateRouteGaurd implements CanActivate {\n  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {\n    // return boolean -> `false` means not allows users to access\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"canActivateChild"),": Allows to control if ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"children of a route can be activated (accessed)")),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="router.route.ts"',"{5}":!0,title:'"router.route.ts"'},"const routes: Routes = [\n  {\n    path: 'private-route',\n    component: PrivateComponent,\n    canActivateChild: [CanActivateChildRouteGaurd],\n    children: [\n        { path: 'child-route', component: ChildComponent},\n      ]\n  }\n]\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{4} title="can-activate-child-route-gaurd.service.ts"',"{4}":!0,title:'"can-activate-child-route-gaurd.service.ts"'},"@Injectable()\nexport class CanActivateChildRouteGaurd implements CanActivateChild {\n  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {\n    // return boolean -> `false` means not allows users to access\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"canLoad"),": Allows to control if a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"route can be accessed"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"feature module be loaded"))," (In the case of lazy loading, CanLoad can control feature module loading)."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="router.route.ts"',"{5}":!0,title:'"router.route.ts"'},"const routes: Routes = [\n  {\n    path: 'private-route',\n    loadChildren: () => import('./private-route').then(m => m.PrivateModule),\n    canLoad: [CanLoadGaurd]\n  }\n]\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{4} title="can-load-route-gaurd.service.ts"',"{4}":!0,title:'"can-load-route-gaurd.service.ts"'},"@Injectable()\nexport class CanLoadGaurd implements CanLoad {\n  canLoad(route:Route,segments:UrlSegment[]): boolean {\n    // return true or false depending on whether you want to load PrivateModule or not\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"canDeactivate"),": Allows to control if the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"user can leave a route")),". Note that this guard doesn\u2019t prevent the user from closing the browser tab or navigating to a different address."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="router.route.ts"',"{5}":!0,title:'"router.route.ts"'},"const routes: Routes = [\n  {\n    path: 'private-route',\n    component: CertainComponent,\n    canDeactivate: CanDeactivateRouteGaurd\n  }\n]\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="can-deactivate-route-gaurd.service.ts"',"{5}":!0,title:'"can-deactivate-route-gaurd.service.ts"'},"@Injectable()\nexport class CanDeactivateRouteGaurd implements CanDeactivate<CertainComponent> {\n  canActivate(compoent: CertainComponent): boolean {\n    if(component.unsaved()) {\n      return confirm('Are you sure you want to quit?')\n    }\n    return true;\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"resolve"),": In a route, heavy data is not possible to pass through query params. Resolve Guard allows to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"resolve data and pass to the component")),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="router.route.ts"',"{5}":!0,title:'"router.route.ts"'},"const routes: Routes = [\n  {\n    path: 'heavy-data-route',\n    component: DataComponent,\n    resolve: { data: ResolveGuard }\n  }\n]\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{4} title="resolve-route-gaurd.service.ts"',"{4}":!0,title:'"resolve-route-gaurd.service.ts"'},"@Injectable()\nexport class ResolveGuard implements Resolve<SomeDataType> {\n  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SomeDataType {\n    // Fetch and return data here\n  }\n}\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{7} title="data-component.component.ts"',"{7}":!0,title:'"data-component.component.ts"'},"@Component()\nexport class DataComponent implements OnInit {\n  constructor(private route: ActivatedRoute, private router: Router) {\n\n  }\n  ngOnInit() {\n    this.route.data.subscribe(data: Data => /* Return data needed*/)\n  }\n}\n"))))))}d.isMDXComponent=!0}}]);