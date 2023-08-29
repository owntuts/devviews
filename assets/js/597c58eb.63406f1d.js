"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[3691],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87156:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=t(83117),a=(t(67294),t(3905));const o={sidebar_position:1e3,sidebar_label:"Dynamic Import",title:"Dynamic Import vs React Lazy?",slug:"/dynamic-import-vs-react-lazy",tags:["NextJS Interviews"]},i=void 0,s={unversionedId:"js/nextjs/basic/dynamic-import",id:"js/nextjs/basic/dynamic-import",title:"Dynamic Import vs React Lazy?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/nextjs/basic/dynamic-import.md",sourceDirName:"js/nextjs/basic",slug:"/dynamic-import-vs-react-lazy",permalink:"/devviews/interviews/dynamic-import-vs-react-lazy",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/nextjs/basic/dynamic-import.md",tags:[{label:"NextJS Interviews",permalink:"/devviews/interviews/tags/next-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Dynamic Import",title:"Dynamic Import vs React Lazy?",slug:"/dynamic-import-vs-react-lazy",tags:["NextJS Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Data Fetching",permalink:"/devviews/interviews/data-fetching-methods-nextjs"},next:{title:"Dynamic Router",permalink:"/devviews/interviews/dynamic-routing"}},c={},p=[],l={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nCould you please tell the diference between ",(0,a.kt)("strong",{parentName:"p"},"Dynamic Import")," in NextJS vs ",(0,a.kt)("strong",{parentName:"p"},"React Lazy"),"?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,a.kt)("strong",{parentName:"p"},"Dynamic Import")," in NextJS and ",(0,a.kt)("strong",{parentName:"p"},"React Lazy")," are similar, they're used to load component dynamically.\nBut Dynamic Import supports more unique features to use with NextJS. Such as, used as a child component of normal component, like below. (while React lazy is only placed inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," tag)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8}","{8}":!0},"const DynamicComponent = dynamic(() =>\n  import('../components/hello').then((mod) => mod.Hello)\n)\n\nfunction Home() {\n  return (\n    <Header>\n      <DynamicComponent />\n    </Header>\n  )\n}\n")),(0,a.kt)("p",null,"or disable ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"const DynamicComponentWithNoSSR = dynamic(\n  () => import('../components/hello3'),\n  { ssr: false }\n)\n")),(0,a.kt)("p",null,"Or you can use with suspense like React lazy too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"const DynamicLazyComponent = dynamic(() => import('../components/hello4'), {\n  suspense: true,\n});\n\n// const DynamicLazyComponent = lazy(() => import('./SomeComponent');\n\nfunction Home() {\n  return (\n    <div>\n      <Suspense fallback={`loading`}>\n        <DynamicLazyComponent />\n      </Suspense>\n    </div>\n  )\n}\n"))))}u.isMDXComponent=!0}}]);