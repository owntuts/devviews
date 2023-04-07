"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5090],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:1e3,sidebar_label:"in vs ref vs out Modifiers",title:"in vs ref vs out Modifiers in C#?",slug:"/in-ref-out-c-sharp",tags:["Basic C# Interviews"]},o=void 0,l={unversionedId:"c-sharp/basic/in-ref-out",id:"c-sharp/basic/in-ref-out",title:"in vs ref vs out Modifiers in C#?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/c-sharp/basic/in-ref-out.md",sourceDirName:"c-sharp/basic",slug:"/in-ref-out-c-sharp",permalink:"/devviews/interviews/in-ref-out-c-sharp",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/c-sharp/basic/in-ref-out.md",tags:[{label:"Basic C# Interviews",permalink:"/devviews/interviews/tags/basic-c-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"in vs ref vs out Modifiers",title:"in vs ref vs out Modifiers in C#?",slug:"/in-ref-out-c-sharp",tags:["Basic C# Interviews"]},sidebar:"cSharpInterviewSidebar",previous:{title:"Hash Table vs Dictionary",permalink:"/devviews/interviews/hashtable-dictionary-c-sharp"},next:{title:"Initialization",permalink:"/devviews/interviews/initialization-c-sharp"}},s={},p=[{value:"The <code>in</code> modifier example",id:"the-in-modifier-example",level:4},{value:"The <code>ref</code> modifier example",id:"the-ref-modifier-example",level:4},{value:"The <code>out</code> modifier example",id:"the-out-modifier-example",level:4}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Question:",type:"quest"},(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\n",(0,i.kt)("inlineCode",{parentName:"p"},"in")," vs ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," vs ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," Modifiers in C#?")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"ANSWER:")),(0,i.kt)("p",null,"  ","*",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,i.kt)("p",null,"  The ",(0,i.kt)("inlineCode",{parentName:"p"},"in"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," modifiers are used to modify how parameters are passed to methods or functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in"),": read data from the outside"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"out"),": do something then pass data to the outside"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref"),": reference (sync) to the outside data")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Modifier"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes to Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Initialized Beforehand"),(0,i.kt)("th",{parentName:"tr",align:null},"Must be Assigned a Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"in")),(0,i.kt)("td",{parentName:"tr",align:null},"Value type (including ",(0,i.kt)("inlineCode",{parentName:"td"},"struct"),") and ReadOnly reference type"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ref")),(0,i.kt)("td",{parentName:"tr",align:null},"Any type"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"out")),(0,i.kt)("td",{parentName:"tr",align:null},"Any type"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h4",{id:"the-in-modifier-example"},"The ",(0,i.kt)("inlineCode",{parentName:"h4"},"in")," modifier example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Example usage of `in`\npublic static void DisplayPerson(in Person person)\n{\n    Console.WriteLine($"First Name: {person.FirstName}, Last Name: {person.LastName}");\n}\n\n// Usage\nPerson person1 = new Person("John", "Doe");\nDisplayPerson(person1);\n\n')),(0,i.kt)("h4",{id:"the-ref-modifier-example"},"The ",(0,i.kt)("inlineCode",{parentName:"h4"},"ref")," modifier example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Example usage of `ref`\npublic static void ChangeAge(ref Person person, int age)\n{\n    person.Age = age;\n}\n\n// Usage\nPerson person1 = new Person("John", "Doe");\nChangeAge(ref person1, 30);\n\n')),(0,i.kt)("h4",{id:"the-out-modifier-example"},"The ",(0,i.kt)("inlineCode",{parentName:"h4"},"out")," modifier example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// Example usage of `out`\npublic static void Divide(int dividend, int divisor, out int quotient, out int remainder)\n{\n    quotient = dividend / divisor;\n    remainder = dividend % divisor;\n}\n\n// Usage\nint quotient, remainder;\nDivide(10, 3, out quotient, out remainder);\n\n"))))}m.isMDXComponent=!0}}]);