"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[3751],{9861:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(67294),l=a(34334),r=a(95999);const c=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a(1944),u=a(35281),i=a(7961),m=a(13008),o={tag:"tag_Nnez"};function g(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:o.tag},n.createElement(m.Z,e))))),n.createElement("hr",null))}function E(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((e=>n.createElement(g,{key:e.letter,letterEntry:e}))))}var p=a(90197);function f(e){let{tags:t}=e;const a=c();return n.createElement(s.FG,{className:(0,l.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},n.createElement(s.d,{title:a}),n.createElement(p.Z,{tag:"doc_tags_list"}),n.createElement(i.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("h1",null,a),n.createElement(E,{tags:t}))))))}},13008:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),l=a(34334),r=a(39960),c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&n.createElement("span",null,s))}}}]);