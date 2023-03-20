"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[3324],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:e},l),{},{components:n})):a.createElement(g,o({ref:e},l))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4846:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1e3,sidebar_label:"Data Fetching",title:"Data Fetching Methods in NextJS",slug:"/data-fetching-methods-nextjs",tags:["NextJS Interviews"]},p=void 0,c={unversionedId:"js/nextjs/basic/data-fetching",id:"js/nextjs/basic/data-fetching",title:"Data Fetching Methods in NextJS",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/nextjs/basic/data-fetching.md",sourceDirName:"js/nextjs/basic",slug:"/data-fetching-methods-nextjs",permalink:"/devviews/interviews/data-fetching-methods-nextjs",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/nextjs/basic/data-fetching.md",tags:[{label:"NextJS Interviews",permalink:"/devviews/interviews/tags/next-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Data Fetching",title:"Data Fetching Methods in NextJS",slug:"/data-fetching-methods-nextjs",tags:["NextJS Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Get Data On Client Side",permalink:"/devviews/interviews/get-data-client-side-nextjs"},next:{title:"Dynamic Import",permalink:"/devviews/interviews/dynamic-import-vs-react-lazy"}},l=[],d={toc:l};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat is ",(0,i.kt)("strong",{parentName:"p"},"Data Fetching Methods")," in NextJS? Please explain about them?"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,i.kt)("strong",{parentName:"p"},"Data Fetching Methods")," are unique functions in Next.js you can use to fetch data for pre-rendering."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"getStaticProps"))," (Static Generation): Fetch data at build time."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,11} title="/pages/post.js"',"{1,11}":!0,title:'"/pages/post.js"'},"const Post = ({ data }) => {\n  return <div>{data}</div>\n}\n\nexport async function getStaticProps() {\n  const res = await fetch('https://.../posts')\n  const data = await res.json()\n\n  return {\n    // pass data down to Post via props\n    props: {\n      data,\n    },\n  }\n}\nexport default Blog;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"getStaticPaths"))," (Static Generation): In case of dynamic routing (- routing depends on param), you use ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," to fetch data, you won't know which page/route to fetch data to because it's dynamic. So, to let ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," know which page to fetch data to, you need ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7,15}","{7,15}":!0},"function Post({ post }) {\n  // Render post...\n}\n\nexport async function getStaticPaths() {\n  const paths = [\n    { params: { id: 1 }},\n    { params: { id: 2 }}\n  ]\n  // Pass paths params to getStaticProps\n  // { fallback: false } means other routes (not in the params list above) should 404.\n  return { paths, fallback: false }\n}\n\nexport async function getStaticProps({ params }) {\n  const res = await fetch(`https://.../posts/${params.id}`)\n  const post = await res.json()\n\n  // Pass post data to the page via props\n  return { props: { post } }\n}\n\nexport default Post\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"getServerSideProps"))," (Server-side Rendering): Fetch data on each request."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function Page({ data }) {\n  // Render data...\n}\n\n// This gets called on every request\nexport async function getServerSideProps() {\n  const res = await fetch(`https://.../data`)\n  const data = await res.json()\n\n  // Pass data to the page via props\n  return { props: { data } }\n}\n\nexport default Page\n"))))))}u.isMDXComponent=!0}}]);