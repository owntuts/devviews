"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9668],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),v=i,w=u["".concat(p,".").concat(v)]||u[v]||c[v]||a;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1e3,sidebar_label:"Preview Mode",title:"What Is Preview Mode In NextJS?",slug:"/what-is-preview-mode-nextjs",tags:["NextJS Interviews"]},p=void 0,l={unversionedId:"js/nextjs/basic/preview-mode",id:"js/nextjs/basic/preview-mode",title:"What Is Preview Mode In NextJS?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/nextjs/basic/preview-mode.md",sourceDirName:"js/nextjs/basic",slug:"/what-is-preview-mode-nextjs",permalink:"/devviews/interviews/what-is-preview-mode-nextjs",editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/nextjs/basic/preview-mode.md",tags:[{label:"NextJS Interviews",permalink:"/devviews/interviews/tags/next-js-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Preview Mode",title:"What Is Preview Mode In NextJS?",slug:"/what-is-preview-mode-nextjs",tags:["NextJS Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"Pre-rendering",permalink:"/devviews/interviews/pre-rendering-nextjs"},next:{title:"JIT vs AOT Node",permalink:"/devviews/interviews/static-generation-use-server-rendering"}},d=[{value:"Workflow Of Preview Mode",id:"workflow-of-preview-mode",children:[],level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-quest alert alert--alert"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M 13.648438 2.339844 C 10.527344 -0.78125 5.464844 -0.78125 2.339844 2.339844 C -0.78125 5.464844 -0.78125 10.527344 2.339844 13.648438 C 5.464844 16.769531 10.527344 16.769531 13.648438 13.648438 C 16.769531 10.527344 16.769531 5.464844 13.648438 2.339844 Z M 7.515625 14.148438 C 6.824219 14.148438 6.320312 13.625 6.320312 12.902344 C 6.320312 12.171875 6.832031 11.644531 7.53125 11.644531 C 8.234375 11.644531 8.722656 12.160156 8.722656 12.902344 C 8.722656 13.636719 8.226562 14.148438 7.515625 14.148438 Z M 9.316406 7.644531 C 8.609375 8.480469 8.328125 9.199219 8.378906 10.042969 L 8.394531 10.46875 C 8.398438 10.480469 8.398438 10.488281 8.398438 10.5 C 8.398438 10.597656 8.320312 10.679688 8.21875 10.679688 L 6.878906 10.679688 C 6.785156 10.679688 6.707031 10.609375 6.699219 10.515625 L 6.667969 10.066406 C 6.550781 9.03125 6.921875 7.988281 7.769531 6.96875 C 8.507812 6.105469 8.929688 5.460938 8.929688 4.734375 C 8.929688 3.910156 8.414062 3.449219 7.476562 3.433594 C 6.898438 3.433594 6.242188 3.632812 5.855469 3.929688 C 5.808594 3.964844 5.75 3.976562 5.695312 3.960938 C 5.640625 3.945312 5.597656 3.90625 5.578125 3.851562 L 5.167969 2.769531 C 5.136719 2.695312 5.164062 2.609375 5.226562 2.5625 C 5.832031 2.125 6.835938 1.839844 7.789062 1.839844 C 9.890625 1.839844 10.835938 3.199219 10.835938 4.542969 C 10.835938 5.746094 10.175781 6.625 9.316406 7.644531 Z M 9.316406 7.644531 "}))),"Question:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat Is ",(0,a.kt)("strong",{parentName:"p"},"Preview Mode")," In NextJS? And What will Happen if you navigate to a preview url?"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\n",(0,a.kt)("strong",{parentName:"p"},"Preview mode")," allows you to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"view the draft content"))," on certain page immediately (That means NextJS will renders the editing content at request time instead of build time)."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"draft content")," (or preview content) is the content that you're editing uncompletely, it may be saved on other database table."),(0,a.kt)("h3",{id:"workflow-of-preview-mode"},"Workflow Of Preview Mode"),(0,a.kt)("p",null,"When you navigate to the preview url like this:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-site>/api/preview?secret=<token>&slug=<path>"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default function in ",(0,a.kt)("inlineCode",{parentName:"li"},"preview.js")," file (that you need to create first) in ",(0,a.kt)("inlineCode",{parentName:"li"},"pages/api")," will receive the request."),(0,a.kt)("li",{parentName:"ul"},"Calling ",(0,a.kt)("inlineCode",{parentName:"li"},"res.setPreviewData")," in the function will enable preview mode (NextJS will set these cookies ",(0,a.kt)("inlineCode",{parentName:"li"},"__prerender_bypass")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"__next_preview_data")," in brower)."),(0,a.kt)("li",{parentName:"ul"},"And ",(0,a.kt)("inlineCode",{parentName:"li"},"res.writeHead")," will redirect to the regular API - the API page that you want to fetch the preview content.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/api/preview.js"',title:'"pages/api/preview.js"'},"export default async (req, res) => {\n  // Fetch data based on url query to check if `slug` exists\n  // const post = await getPreviewPost ...\n  // ...\n  \n  // Enable Preview Mode by setting the cookies\n  res.setPreviewData({\n    post: {\n      id: post.databaseId,\n      slug: post.slug,\n      status: post.status,\n    },\n  });\n\n  // Redirect to the path from the fetched post\n  res.writeHead(307, { Location: `/posts/${post.slug || post.databaseId}` })\n  res.end()\n}\n")),(0,a.kt)("p",null,"In the regular API page, when ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps")," runs, NextJS will check browser cookies to know whether preview mode is turned on, if yes, it sets ",(0,a.kt)("inlineCode",{parentName:"p"},"preview = true")," in the context param of ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps"),". You will fetch preview content based on that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/posts/[slug].js"',title:'"pages/posts/[slug].js"'},"export default function Post({ post, posts, preview }) {\n  if (preview) {\n    // render preview content\n  } else {\n    // render regular content\n  }\n}\n\nexport async function getStaticProps({ params, preview = false, previewData }) {\n  // get preview/draft data\n  const data = await getPostAndMorePosts(params.slug, preview, previewData)\n\n  // pass data to Post above\n  return {\n    props: {\n      preview,\n      post: data.post,\n      posts: data.posts,\n    },\n  }\n}\n"))))}u.isMDXComponent=!0}}]);