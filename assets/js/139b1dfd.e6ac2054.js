"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9622],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(83117),i=(n(67294),n(3905));const a={sidebar_position:1e3,sidebar_label:"setNativeProps",title:"setNativeProps",slug:"/setNativeProps",tags:["Basic React Native Interviews"]},o=void 0,s={unversionedId:"react-native/basic/setNativeProps",id:"react-native/basic/setNativeProps",title:"setNativeProps",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/react-native/basic/setNativeProps.md",sourceDirName:"react-native/basic",slug:"/setNativeProps",permalink:"/devviews/interviews/setNativeProps",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/react-native/basic/setNativeProps.md",tags:[{label:"Basic React Native Interviews",permalink:"/devviews/interviews/tags/basic-react-native-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"setNativeProps",title:"setNativeProps",slug:"/setNativeProps",tags:["Basic React Native Interviews"]},sidebar:"reactnativeInterviewSidebar",previous:{title:"Boxing vs Unboxing",permalink:"/devviews/interviews/sessionlist-with-large-dataset"},next:{title:"Smooth Animation",permalink:"/devviews/interviews/smooth-animation"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain setNativeProps in React Native?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nIn React Native, ",(0,i.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is a method that allows you to directly modify the properties of a native component without going through the normal React reconciliation process. This means that you can update the visual properties of a native component immediately, without having to wait for the next render cycle."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setNativeProps")," method is only available on components that have a native implementation in the platform-specific code. This includes built-in components like ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Image"),", as well as custom native components created using the Native Modules API."),(0,i.kt)("p",null,"Here's an example of how you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"setNativeProps")," method to directly modify a native component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef } from 'react';\nimport { View } from 'react-native';\n\nconst MyComponent = () => {\n  const viewRef = useRef(null);\n\n  const handlePress = () => {\n    if (viewRef.current) {\n      viewRef.current.setNativeProps({ style: { backgroundColor: 'green' } });\n    }\n  };\n\n  return (\n    <View ref={viewRef} style={{ width: 100, height: 100, backgroundColor: 'red' }} onClick={handlePress} />\n  );\n};\n")),(0,i.kt)("p",null,"In the example above, a ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," component is rendered with an initial background color of red. When the user clicks on the component, the ",(0,i.kt)("inlineCode",{parentName:"p"},"handlePress")," function is called, which calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"setNativeProps")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," component. The method updates the component's style property to change the background color to green."),(0,i.kt)("p",null,"Note that using ",(0,i.kt)("inlineCode",{parentName:"p"},"setNativeProps")," should be done with caution, as it can bypass React's normal rendering mechanisms and potentially cause unexpected behavior if used improperly. It's generally recommended to use the standard React props and state to manage component properties whenever possible, and only use ",(0,i.kt)("inlineCode",{parentName:"p"},"setNativeProps")," when absolutely necessary.")))}d.isMDXComponent=!0}}]);