"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[3481],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,v=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?i.createElement(v,o(o({ref:t},m),{},{components:n})):i.createElement(v,o({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var i=n(83117),r=(n(67294),n(3905));const a={sidebar_position:1e3,sidebar_label:"CSS Properties",title:"static vs absolute vs relative vs fixed vs sticky position in CSS",slug:"/css-static-vs-absolute-vs-relative-vs-fixed-vs-sticky",tags:["CSS Interviews"]},o=void 0,s={unversionedId:"css/basic/css-positioning",id:"css/basic/css-positioning",title:"static vs absolute vs relative vs fixed vs sticky position in CSS",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/css/basic/css-positioning.md",sourceDirName:"css/basic",slug:"/css-static-vs-absolute-vs-relative-vs-fixed-vs-sticky",permalink:"/devviews/interviews/css-static-vs-absolute-vs-relative-vs-fixed-vs-sticky",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/css/basic/css-positioning.md",tags:[{label:"CSS Interviews",permalink:"/devviews/interviews/tags/css-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"CSS Properties",title:"static vs absolute vs relative vs fixed vs sticky position in CSS",slug:"/css-static-vs-absolute-vs-relative-vs-fixed-vs-sticky",tags:["CSS Interviews"]},sidebar:"cssInterviewSidebar",previous:{title:"nth-child vs nth-of-type",permalink:"/devviews/interviews/css-nth-child-vs-nth-type"},next:{title:"Apply CSS",permalink:"/devviews/interviews/difference-ways-apply-css-page"}},p={},l=[],m={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Question:",type:"quest"},(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nPlease explain the differences among CSS position Properties: ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"static")),", ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"absolute")),", ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"relative")),", ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"fixed")),",  ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"sticky")),"?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ANSWER:")),(0,r.kt)("p",null,"  ","*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"position: static")),": Default position property. static-positioned element always positioned according to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"normal flow"))," of the page & ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"not affected by the top, bottom, left, and right"))," properties.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"position: relative")),": relatively-positioned element is positioned ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"relative to its normal position"))," (you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," properties to shift the element out of it's original position)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"div.relative {\n  position: relative;\n  left: 30px;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"position: absolute")),": Element is positioned ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"relative to the nearest positioned ancestor")),".  You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," properties to position the element."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/*relative ancestor*/\ndiv.relative {\n  position: relative;\n}\n\ndiv.absolute {\n  position: absolute;\n  top: 80px;\n  right: 0;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"position: fixed")),": Element is positioned ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"relative to the viewport"))," (fixed at the same place even if you sroll). You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," properties to position the element.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"position: sticky")),": A sticky element ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"toggles between ",(0,r.kt)("inlineCode",{parentName:"em"},"relative")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"fixed"))),". It is positioned relative then it changes to fixed position when you scroll (up or down) to a viewport offset."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"div.sticky {\n  position: sticky;\n  top: 0; /*or bottom: 0*/ /*<- viewport offset*/\n  background-color: red;\n}\n"))))))}d.isMDXComponent=!0}}]);