"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5834],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),v=i,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},7010:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=t(3117),i=(t(7294),t(3905));const a={sidebar_position:1e3,sidebar_label:"Event Binding",title:"Event Binding in Angular And Example",slug:"/event-binding-angular-example",tags:["Basic Angular Interviews"]},o=void 0,l={unversionedId:"js/angular-interviews/basic/event-binding",id:"js/angular-interviews/basic/event-binding",title:"Event Binding in Angular And Example",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/basic/event-binding.md",sourceDirName:"js/angular-interviews/basic",slug:"/event-binding-angular-example",permalink:"/devviews/interviews/event-binding-angular-example",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/basic/event-binding.md",tags:[{label:"Basic Angular Interviews",permalink:"/devviews/interviews/tags/basic-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Event Binding",title:"Event Binding in Angular And Example",slug:"/event-binding-angular-example",tags:["Basic Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Custom Directives",permalink:"/devviews/interviews/angular-directive"},next:{title:"forRoot vs forChild",permalink:"/devviews/interviews/differences-forroot-forchild-patterns"}},s={},c=[{value:"Event Binding Example",id:"event-binding-example",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is event binding in Angular? Please give an example?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,i.kt)("strong",{parentName:"p"},"Event binding")," is a mechanism of Angular to handle (pass) the native events (browser events) raised from the DOM like button click, mouse move etc to upper components and deligate the event handler to specified component's method."),(0,i.kt)("h3",{id:"event-binding-example"},"Event Binding Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Child component receive an native click event of a button. "),(0,i.kt)("li",{parentName:"ol"},"It deligate the native event to Parent component. "),(0,i.kt)("li",{parentName:"ol"},"The Parent component handles the deligated event.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="child.Component.ts"',title:'"child.Component.ts"'},'@Component({\n  selector: \'Child\',\n  template: `\n    <button (click)="handleNativeEvent()">Notify Parent!</button>\n  `\n})\nexport class Child {\n  @Output notifyToParent: EventEmiter<any> = new EventEmiter();\n  handleNativeEvent() {\n    notifyToParent.emmit("Hi, I\'m your child!");\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="parent.Component.ts"',title:'"parent.Component.ts"'},"@Component({\n  selector: 'Parent',\n  template: `\n    <Child (notifyParent)=handleNotify($event)></Child>\n  `\n})\nexport class Parent {\n  handleNotify(evt) {\n    // do something with child notification data sent from Child (evt)\n  }\n}\n"))))}d.isMDXComponent=!0}}]);