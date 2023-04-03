"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5330],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),v=i,f=p["".concat(c,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Differences Between Boxing vs Unboxing In C# (C-Sharp)",slug:"/java-coding",tags:["Basic C# Interviews"]},o=void 0,s={unversionedId:"java/basic/coding",id:"java/basic/coding",title:"Differences Between Boxing vs Unboxing In C# (C-Sharp)",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/java/basic/coding.md",sourceDirName:"java/basic",slug:"/java-coding",permalink:"/devviews/interviews/java-coding",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/basic/coding.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Boxing vs Unboxing",title:"Differences Between Boxing vs Unboxing In C# (C-Sharp)",slug:"/java-coding",tags:["Basic C# Interviews"]},sidebar:"javaInterviewSidebar",next:{title:"Java Interviews",permalink:"/devviews/interviews/java/java-interview-questions-answers"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nWhat will be the output of below code ?"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.ArrayList;\nimport java.util.List;\npublic class Test {\n    public static void main(String[] args) {\n        List < Integer > arrayList = new ArrayList < > ();\n        arrayList.add(1);\n        arrayList.add(2);\n        arrayList.add(3);\n        arrayList.add(4);\n        arrayList.add(1);\n        for (Integer i: arrayList) {\n            if (i == 1) {\n                arrayList.remove(i);\n            }\n        }\n        System.out.println(arrayList);\n    }\n}\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :\nThe output of the code will be an exception which is ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException"),".\nThis is because the loop uses a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"for-each loop which creates an iterator in the background"))," to iterate over the list. During the loop, the list is modified by the removal of elements with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", which results in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException")," since modifying a collection during iteration is not allowed.\nTo avoid the exception, one can use the Iterator interface to remove the elements instead of using the for each loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.ArrayList;\nimport java.util.Iterator;\nimport java.util.List;\n\npublic class Test {\n  public static void main(String[] args) {\n    List<Integer> arrayList = new ArrayList<>();\n    arrayList.add(1);\n    arrayList.add(2);\n    arrayList.add(3);\n    arrayList.add(4);\n    arrayList.add(1);\n    \n    Iterator<Integer> iter = arrayList.iterator();\n    while (iter.hasNext()) {\n      Integer i = iter.next();\n      if (i == 1) {\n        iter.remove();\n      }\n    }\n    System.out.println(arrayList);\n  }\n}\n"))))}d.isMDXComponent=!0}}]);