"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),i=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"HostBinding vs HostListener",title:"What are @HostBinding and @HostListener & Example",slug:"/hostbinding-hostlistener-example",tags:["Basic Angular Interviews"]},a=void 0,s={unversionedId:"js/angular-interviews/basic/host-binding-vs-host-listener",id:"js/angular-interviews/basic/host-binding-vs-host-listener",title:"What are @HostBinding and @HostListener & Example",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/host-binding-vs-host-listener.md",sourceDirName:"js/angular-interviews/basic",slug:"/hostbinding-hostlistener-example",permalink:"/devviews/interviews/hostbinding-hostlistener-example",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/host-binding-vs-host-listener.md",tags:[{label:"Basic Angular Interviews",permalink:"/devviews/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"HostBinding vs HostListener",title:"What are @HostBinding and @HostListener & Example",slug:"/hostbinding-hostlistener-example",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"forRoot vs forChild",permalink:"/devviews/interviews/differences-forroot-forchild-patterns"},next:{title:"JIT vs AOT",permalink:"/devviews/interviews/differences-onchanges-docheck-angular"}},l={},c=[{value:"@HostBinding &amp; @HostListener example",id:"hostbinding--hostlistener-example",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat are ",(0,i.kt)("strong",{parentName:"p"},"@HostBinding")," and ",(0,i.kt)("strong",{parentName:"p"},"@HostListener")," and what they used for? Please give an example of using the twos?!")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"@HostBinding"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Host"))," means host element, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"binding"))," means ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"binding (binding data) to an attribute"))," of a host element. It's same as input biding ",(0,i.kt)("inlineCode",{parentName:"li"},'[value]="inputData"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"@HostListener"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"binding to an event emitted"))," by the host element. It's same as event ",(0,i.kt)("inlineCode",{parentName:"li"},'(click)="myClick()"'),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"@HostBinding")," and ",(0,i.kt)("strong",{parentName:"p"},"@HostListener")," are usually using in custom directive, to bind attribute and event of a host element to change it's style or structure."),(0,i.kt)("h3",{id:"hostbinding--hostlistener-example"},"@HostBinding & @HostListener example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="decorate.directive.ts"',title:'"decorate.directive.ts"'},"@Directive({\n  selector: '[decorate]'\n})\nexport class Decorate {\n\n  @HostBinding('style.color') color: string; // biding color style of host element to `color` variable\n  @HostBinding('style.border-color') borderColor: string; \n\n  @HostEvent('keydown) changeColor() {\n    this.color = this.borderColor = 'red'; // change `color` variable will change the color style of the host element\n  }\n\n}\n")),(0,i.kt)("p",null,"Using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"decorate")," in other component. (",(0,i.kt)("strong",{parentName:"p"},"Host element")," here, is the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," element)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="text.component.ts"',title:'"text.component.ts"'},"@Component({\n  selector: 'text',\n  template: `\n    <input type='text' decorate />\n  `\n})\n"))))}d.isMDXComponent=!0}}]);