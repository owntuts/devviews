"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4624],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63223:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(83117),i=(n(67294),n(3905));const a={sidebar_position:1e3,sidebar_label:"nth-child vs nth-of-type",title:"CSS nth-child() vs nth-of-type()?",slug:"/css-nth-child-vs-nth-type",tags:["CSS Interviews"]},o=void 0,p={unversionedId:"css/basic/css-nth-child-vs-nth-type",id:"css/basic/css-nth-child-vs-nth-type",title:"CSS nth-child() vs nth-of-type()?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/css/basic/css-nth-child-vs-nth-type.md",sourceDirName:"css/basic",slug:"/css-nth-child-vs-nth-type",permalink:"/devviews/interviews/css-nth-child-vs-nth-type",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/css/basic/css-nth-child-vs-nth-type.md",tags:[{label:"CSS Interviews",permalink:"/devviews/interviews/tags/css-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"nth-child vs nth-of-type",title:"CSS nth-child() vs nth-of-type()?",slug:"/css-nth-child-vs-nth-type",tags:["CSS Interviews"]},sidebar:"cssInterviewSidebar",previous:{title:"CSS counter",permalink:"/devviews/interviews/css-counter"},next:{title:"CSS Properties",permalink:"/devviews/interviews/css-static-vs-absolute-vs-relative-vs-fixed-vs-sticky"}},s={},l=[],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is the difference between the ",(0,i.kt)("inlineCode",{parentName:"p"},"nth-child()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nth-of-type()")," in CSS?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"nth-child()")),": Select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"the child"))," at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"nth position of children")),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Example"),": We want to select a child ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," at position 2. But at that position, there's no ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," tag => so nothing will be selected."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-css"},".container p:nth-child(2) { background: red; }\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <p>Position 1</p>\n  <div>Position 2</div> \x3c!-- At position 2, there\'s no child with p tag --\x3e\n  <div>Position 3</div>\n  <p>Position 4</p>\n</div>\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"nth-of-type()")),": Select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"the type"))," of certain tag at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"nth position of that type")),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Example"),": We want to select a child ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," at position 2 of it's type."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-css"},".container p:nth-of-type(2) { background: red; }\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <p>Position 1 of type P</p>\n  <div>Position 1 of type DIV</div> \n  <div>Position 2 of type DIV</div>\n  <p>Position 2 of type P</p> \x3c!-- Selected --\x3e\n</div>\n')))),(0,i.kt)("p",null,":::note\nNote that ",(0,i.kt)("inlineCode",{parentName:"p"},"nth-child()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nth-of-type()")," use the same formular:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":nth-child(2n+3)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-child(odd/even)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-child(3n)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-child(3)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":nth-of-type(2n+3)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-of-type(odd/even)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-of-type(3n)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-of-type(3)"),"\n:::"))))}m.isMDXComponent=!0}}]);