"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[927],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1e3,sidebar_label:"How JVM Works",title:"How JVM Works",tags:["Java Knowledge"]},s=void 0,o={unversionedId:"java/hero/how-jvm-works",id:"java/hero/how-jvm-works",title:"How JVM Works",description:"How JVM Works",source:"@site/docs/java/hero/how-jvm-works.md",sourceDirName:"java/hero",slug:"/java/hero/how-jvm-works",permalink:"/devviews/interviews/java/hero/how-jvm-works",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/hero/how-jvm-works.md",tags:[{label:"Java Knowledge",permalink:"/devviews/interviews/tags/java-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"How JVM Works",title:"How JVM Works",tags:["Java Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"How Java Works",permalink:"/devviews/interviews/java/hero/how-java-works"},next:{title:"Innerclass",permalink:"/devviews/interviews/java/hero/innerclass"}},l={},c=[],m={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h5",null,"How JVM Works")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How JVM Works",src:a(6302).Z,width:"818",height:"845"})),(0,r.kt)("p",null,"JVM (Java Virtual Machine) is a software layer that provides a runtime environment for Java applications. It works by performing the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It loads the Java bytecode (the .class files) into the memory using a ",(0,r.kt)("strong",{parentName:"li"},"class loader subsystem"),". The class loader subsystem consists of ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"three phases")),": ",(0,r.kt)("strong",{parentName:"li"},"loading"),", ",(0,r.kt)("strong",{parentName:"li"},"linking"),", and ",(0,r.kt)("strong",{parentName:"li"},"initialization"),". ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It reads the bytecode and stores the ",(0,r.kt)("strong",{parentName:"li"},"class information")," (like class name, immediate parent class name, methods and variables information etc. are stored, including static variables.\n) in the method area. "),(0,r.kt)("li",{parentName:"ul"},"It also creates an ",(0,r.kt)("strong",{parentName:"li"},"object of type Class")," (All the Objects and their corresponding instance variables and arrays) for each loaded class in the heap memory."))),(0,r.kt)("li",{parentName:"ul"},"It executes the bytecode using an execution engine. The ",(0,r.kt)("strong",{parentName:"li"},"execution engine")," consists of an interpreter and a just-in-time (JIT) compiler. The ",(0,r.kt)("strong",{parentName:"li"},"interpreter")," reads and executes the bytecode instructions one by one. The ",(0,r.kt)("strong",{parentName:"li"},"JIT compiler")," optimizes the performance by compiling frequently executed parts of the bytecode into native machine code."),(0,r.kt)("li",{parentName:"ul"},"It manages the memory using various areas such as ",(0,r.kt)("strong",{parentName:"li"},"heap"),", ",(0,r.kt)("strong",{parentName:"li"},"stack"),", ",(0,r.kt)("strong",{parentName:"li"},"method area"),", etc. It also performs garbage collection to reclaim the unused memory space. It allocates memory for objects and variables and stores them in the heap and stack respectively. It also stores static data and class information in the method area."),(0,r.kt)("li",{parentName:"ul"},"It handles various tasks such as exception handling, security checks, thread synchronization, etc. It also interacts with the native libraries and operating system using a native method interface (JNI) and a native method library.")),(0,r.kt)("p",null,"This is how JVM works in Java and enables the cross-platform compatibility of Java applications. JVM can run on any device that has a compatible version of it installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"loading, linking, and initialization")),"The three phases of class loading in Java are:",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Loading"),": This is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"the process of finding the binary representation (bytecode)"))," of a class or interface with a particular name and creating a Class object from that. The class loader subsystem reads the .class file and stores the class information in the method area. It also creates an object of type Class for each loaded class in the heap memory. There are three built-in class loaders in Java: bootstrap, extension, and application. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The bootstrap class loader ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"loads the core Java classes"))," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"rt.jar")," file. "),(0,r.kt)("li",{parentName:"ul"},"The extension class loader ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"loads the classes that are extensions of the core Java classes"))," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"ext")," directory. "),(0,r.kt)("li",{parentName:"ul"},"The application class loader ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"loads the classes that are specific to the application"))," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"classpath"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linking"),": This is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"the process of taking a Class object and combining it"))," into the runtime state of the JVM so that it can be executed. Linking consists of three sub-phases: verification, preparation, and resolution. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Verification")," checks that the bytecode is well-formed and adheres to the language rules. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Preparation")," allocates memory for static fields and assigns default values to them. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resolution")," resolves symbolic references to other classes, fields, and methods in the constant pool to direct references."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Initialization"),": This is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"the process of executing"))," the static initializers and initializers for static fields of a class or interface. Initialization is triggered by the first active use of a class or interface, such as creating an instance, invoking a static method, accessing a static field, etc. Initialization invokes the ",(0,r.kt)("inlineCode",{parentName:"li"},"<clinit>")," method of a class or interface, which contains all the static initialization code.")),(0,r.kt)("p",null,"These are the three phases of class loading in Java that ensure that a class or interface is ready to be used by the JVM.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"method erea vs heap vs stack")),(0,r.kt)("p",null,"Method area, heap, and stack are three memory areas used by the JVM to store different types of data. Here is a table that summarizes their main features and differences:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Memory Area"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"),(0,r.kt)("th",{parentName:"tr",align:null},"Scope"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Access"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method area"),(0,r.kt)("td",{parentName:"tr",align:null},"To store class structures and metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime constant pool, field and method data, code for methods, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"Shared by all threads"),(0,r.kt)("td",{parentName:"tr",align:null},"No fixed size, can grow or shrink as needed"),(0,r.kt)("td",{parentName:"tr",align:null},"By reference")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Heap"),(0,r.kt)("td",{parentName:"tr",align:null},"To store objects and class instances"),(0,r.kt)("td",{parentName:"tr",align:null},"Objects, arrays, instance variables, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"Shared by all threads"),(0,r.kt)("td",{parentName:"tr",align:null},"No fixed size, can grow or shrink as needed"),(0,r.kt)("td",{parentName:"tr",align:null},"By reference")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stack"),(0,r.kt)("td",{parentName:"tr",align:null},"To store local variables and method calls"),(0,r.kt)("td",{parentName:"tr",align:null},"Primitive values, references to objects in heap, method frames, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"Private to each thread"),(0,r.kt)("td",{parentName:"tr",align:null},"Fixed size, can cause overflow or underflow errors if exceeded or unused"),(0,r.kt)("td",{parentName:"tr",align:null},"By value")))),(0,r.kt)("p",null,"Heap and stack in JVM are similar to data structures in some ways, but they are not exactly the same. Heap and stack are memory areas that store data in a specific way, while data structures are abstract models that define how data can be organized and manipulated.")))}p.isMDXComponent=!0},6302:function(e,t,a){t.Z=a.p+"assets/images/how-jvm-works-c448181225b529ef952a22cf50497bf7.png"}}]);