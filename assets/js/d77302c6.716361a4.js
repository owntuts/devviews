"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[1414],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,v=c["".concat(u,".").concat(g)]||c[g]||m[g]||o;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68982:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=t(83117),a=(t(67294),t(3905));const o={sidebar_position:1e3,sidebar_label:"Java Type Conversion",title:"Java Type Conversion",tags:["Java Knowledge"]},i=void 0,l={unversionedId:"java/hero/type-conversion",id:"java/hero/type-conversion",title:"Java Type Conversion",description:"Java Type Conversion",source:"@site/docs/java/hero/type-conversion.md",sourceDirName:"java/hero",slug:"/java/hero/type-conversion",permalink:"/devviews/interviews/java/hero/type-conversion",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/hero/type-conversion.md",tags:[{label:"Java Knowledge",permalink:"/devviews/interviews/tags/java-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Java Type Conversion",title:"Java Type Conversion",tags:["Java Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"Thread Safety In Java",permalink:"/devviews/interviews/java/hero/thread-safety"},next:{title:"OOP",permalink:"/devviews/interviews/java/hero/OOP"}},u={},s=[],p={toc:s},c="wrapper";function m(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Java Type Conversion")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Java Type Conversion",src:t(66013).Z,width:"2186",height:"1232"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Widening Casting (automatically)")," - converting a smaller type to a larger type size\n",(0,a.kt)("inlineCode",{parentName:"li"},"byte -> short -> int -> (long | float) -> double"),"\nEx:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int myInt = 9;\ndouble myDouble = myInt; // Automatic casting: int to double\nSystem.out.println(myInt);      // Outputs 9\nSystem.out.println(myDouble);   // Outputs 9.0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Narrowing Casting (manually)")," - converting a larger type to a smaller size type\n",(0,a.kt)("inlineCode",{parentName:"li"},"double -> (float | long) -> int -> short -> byte"),"\nEx:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"double myDouble = 9.78;\nint myInt = (int) myDouble; // Manual casting: double to int\nSystem.out.println(myDouble);   // Outputs 9.78\nSystem.out.println(myInt);      // Outputs 9\n")),(0,a.kt)("p",null,":::note Tips To Remember"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"buy short [car] in (long | float) doubt")),(0,a.kt)("p",null,":::")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Autoboxing and Unboxing")),(0,a.kt)("p",null,"Autoboxing and unboxing are two features of Java that allow ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"automatic conversion between primitive types and their corresponding wrapper classes")),". Wrapper classes are classes that wrap a primitive value in an object, such as Integer, Double, Character, etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Autoboxing")," (wrapping) is the process of ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"converting a primitive value to a wrapper object")),". For example, assigning an int value to an Integer variable:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int i = 10; // a primitive value\nInteger j = i; // autoboxing\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unboxing")," (unwrapping) is the process of ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"converting a wrapper object to a primitive value")),". For example, passing an Integer object to a method that expects an int parameter:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Integer k = 20; // a wrapper object\nint l = k; // unboxing\n")),(0,a.kt)("p",null,"Autoboxing and unboxing are useful because they allow us to use primitive values and wrapper objects interchangeably. For example, we can use them with generics, collections, and methods that require objects as arguments or return values."),(0,a.kt)("p",null,"Here is an example that demonstrates autoboxing and unboxing in Java:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n\n    public static void main(String[] args) {\n        // autoboxing: converting int to Integer\n        int x = 100;\n        Integer y = x;\n\n        // unboxing: converting Integer to int\n        Integer z = 200;\n        int w = z;\n\n        // using autoboxing and unboxing with generics\n        List<Integer> list = new ArrayList<>();\n        list.add(x); // autoboxing\n        list.add(y);\n        list.add(z);\n        int sum = 0;\n        for (Integer num : list) {\n            sum += num; // unboxing\n        }\n        System.out.println("Sum: " + sum);\n\n        // using autoboxing and unboxing with methods\n        System.out.println("Square: " + square(x)); // autoboxing\n        System.out.println("Cube: " + cube(y)); // unboxing\n\n    }\n\n    // a method that returns the square of an Integer object\n    public static Integer square(Integer n) {\n        return n * n;\n    }\n\n    // a method that returns the cube of an int value\n    public static int cube(int n) {\n        return n * n * n;\n    }\n}\n')),(0,a.kt)("p",null,"The output of this program is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Sum: 400\nSquare: 10000\nCube: 8000000\n"))))}m.isMDXComponent=!0},66013:function(e,n,t){n.Z=t.p+"assets/images/type-conversion-2e63ce785874017dcdc9d145c2b2ad57.png"}}]);