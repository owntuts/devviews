"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5861],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Differences Between Boxing vs Unboxing In C# (C-Sharp)",slug:"/sessionlist-with-large-dataset",tags:["Basic React Native Interviews"]},o=void 0,s={unversionedId:"react-native/basic/sessionlist-with-large-dataset",id:"react-native/basic/sessionlist-with-large-dataset",title:"Differences Between Boxing vs Unboxing In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/react-native/basic/sessionlist-with-large-dataset.md",sourceDirName:"react-native/basic",slug:"/sessionlist-with-large-dataset",permalink:"/devviews/interviews/sessionlist-with-large-dataset",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/react-native/basic/sessionlist-with-large-dataset.md",tags:[{label:"Basic React Native Interviews",permalink:"/devviews/interviews/tags/basic-react-native-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Differences Between Boxing vs Unboxing In C# (C-Sharp)",slug:"/sessionlist-with-large-dataset",tags:["Basic React Native Interviews"]},sidebar:"reactnativeInterviewSidebar",previous:{title:"Memory leak Issue",permalink:"/devviews/interviews/memory-leak"},next:{title:"setNativeProps",permalink:"/devviews/interviews/setNativeProps"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Question:",type:"quest"},(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nI have a large data, I want to group the data into sections and render each section as a separate list but would like to use a virtualized list to optimize performance. How to do that?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ANSWER:")),(0,r.kt)("p",null,"  ","*",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nYou can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList")," component in React Native to group your data into sections and render each section as a separate list. To optimize performance, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getItemLayout")," prop of ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList")," to provide estimated dimensions for each item, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSize")," prop to configure the number of items to render outside of the visible area."),(0,r.kt)("p",null,"Here's an example of how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList")," with virtualization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, Text, SectionList } from 'react-native';\n\nconst data = [\n  { title: 'Section 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3'] },\n  { title: 'Section 2', data: ['Item 2-1', 'Item 2-2', 'Item 2-3'] },\n  { title: 'Section 3', data: ['Item 3-1', 'Item 3-2', 'Item 3-3'] },\n  // more sections and items...\n];\n\nconst Item = ({ title }) => {\n  return (\n    <View style={{ padding: 16 }}>\n      <Text>{title}</Text>\n    </View>\n  );\n};\n\nconst SectionHeader = ({ title }) => {\n  return (\n    <View style={{ backgroundColor: '#f4f4f4', padding: 8 }}>\n      <Text>{title}</Text>\n    </View>\n  );\n};\n\nconst App = () => {\n  const getItemLayout = (data, index) => ({\n    length: 50, // estimated item height\n    offset: 50 * index,\n    index,\n  });\n\n  return (\n    <SectionList\n      sections={data}\n      keyExtractor={(item, index) => item + index}\n      renderItem={({ item }) => <Item title={item} />}\n      renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}\n      getItemLayout={getItemLayout}\n      initialNumToRender={20} // number of items to render initially\n      windowSize={30} // number of items to keep outside of the visible area\n    />\n  );\n};\n\nexport default App;\n"))))}d.isMDXComponent=!0}}]);