"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[684],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,v=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?o.createElement(v,i(i({ref:t},m),{},{components:n})):o.createElement(v,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:1e3,sidebar_label:"Bootstrap Component vs Entry Component",title:"Difference Between Bootstrap Component and Entry component",tags:["Basic Angular Interviews"]},s=void 0,l={unversionedId:"angular-tutorial/basic-angular-interviews/bootstrap-component-vs-entry-component",id:"angular-tutorial/basic-angular-interviews/bootstrap-component-vs-entry-component",title:"Difference Between Bootstrap Component and Entry component",description:"Bootstrap Component vs Entry Component",source:"@site/docs/angular-tutorial/basic-angular-interviews/bootstrap-component-vs-entry-component.md",sourceDirName:"angular-tutorial/basic-angular-interviews",slug:"/angular-tutorial/basic-angular-interviews/bootstrap-component-vs-entry-component",permalink:"/devviews/docs/angular-tutorial/basic-angular-interviews/bootstrap-component-vs-entry-component",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/angular-tutorial/basic-angular-interviews/bootstrap-component-vs-entry-component.md",tags:[{label:"Basic Angular Interviews",permalink:"/devviews/docs/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Bootstrap Component vs Entry Component",title:"Difference Between Bootstrap Component and Entry component",tags:["Basic Angular Interviews"]},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/devviews/docs/intro"},next:{title:"forRoot vs forChild",permalink:"/devviews/docs/angular-tutorial/basic-angular-interviews/forRoot-vs-forChild"}},m=[{value:"Bootstrap Component vs Entry Component",id:"bootstrap-component-vs-entry-component",children:[],level:3}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bootstrap-component-vs-entry-component"},"Bootstrap Component vs Entry Component"),(0,a.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nCan you tell the difference between ",(0,a.kt)("strong",{parentName:"p"},"bootstrap component")," and ",(0,a.kt)("strong",{parentName:"p"},"entry component")," in Angular?"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Entry Component")," is components that Angular loads ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"imperatively")),", (it's not referenced in template) but ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"dynamically loaded at runtime"))," through a ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentFactoryResolver")," or via router. Declaring a component in ",(0,a.kt)("inlineCode",{parentName:"p"},"entryComponents")," array will prevent the compiler to treeshake these components out of the module."),(0,a.kt)("p",null,"  There are 3 main types of entry components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bootstrapped component")," is an entry component that Angular loads into the DOM during the bootstrap process (rendering the root component inside the DOM at application launch time)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"@NgModule({\n  declarations: [\n    RootComponent\n  ],\n  imports: [],\n  providers: [],\n  bootstrap: [RootComponent] // bootstrapped entry component\n})\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Routed entry component")," A component you specify in a route definition"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  const routes: Routes = [\n  {\n    path: '',\n    component: RoutedComponent\n  }\n];\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dynamic component")," which loaded dynamically (at run time) through a ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentFactoryResolver")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{10} title="appModule.tsx"',"{10}":!0,title:'"appModule.tsx"'},"@NgModule({\n    declarations: [\n        AppComponent, DynamicComponent\n    ],\n    imports: [\n        BrowserModule\n    ],\n    providers: [],\n    bootstrap: [AppComponent], // Bootstrapped component\n    entryComponents: [DynamicComponent] // Declared dynamic entry components\n})\nexport class AppModule { }\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{16} title="app.component.tsx"',"{16}":!0,title:'"app.component.tsx"'},"import { DynamicComponent } from './dynamic.component';\n\n@Component({\n    // ...\n})\nexport class AppComponent {\n    title = 'app';\n    componentRef: any;\n\n    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;\n\n    constructor(private resolver: ComponentFactoryResolver) { }\n\n    // create component dynamically\n    createComponent(someOptions) {\n        const factory = this.resolver.resolveComponentFactory(DynamicComponent);\n        this.componentRef = this.entry.createComponent(factory);\n    }\n}\n")))),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"As of Angular 9 entryComponents is no longer required"))))))}u.isMDXComponent=!0}}]);