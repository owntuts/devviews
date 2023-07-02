"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6446],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var a=n(3117),i=(n(7294),n(3905));const r={sidebar_position:1e3,sidebar_label:"Scopes In Java",title:"Scopes In Java",tags:["Java Knowledge"]},o=void 0,l={unversionedId:"java/hero/scope",id:"java/hero/scope",title:"Scopes In Java",description:"Scopes In Java",source:"@site/docs/java/hero/scope.md",sourceDirName:"java/hero",slug:"/java/hero/scope",permalink:"/devviews/interviews/java/hero/scope",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/hero/scope.md",tags:[{label:"Java Knowledge",permalink:"/devviews/interviews/tags/java-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Scopes In Java",title:"Scopes In Java",tags:["Java Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"Innerclass",permalink:"/devviews/interviews/java/hero/innerclass"},next:{title:"Thread Safety In Java",permalink:"/devviews/interviews/java/hero/thread-safety"}},s={},c=[{value:"Here is a simple class that uses both types of blocks:",id:"here-is-a-simple-class-that-uses-both-types-of-blocks",level:4}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Scopes In Java")),(0,i.kt)("p",null,"Scope in Java refers to the region of the program where a variable or a method is accessible. Scope determines the visibility and lifetime of a variable or a method."),(0,i.kt)("p",null,"There are three types of scope in Java:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Method scope"),": Variables declared inside a method are only accessible within that method. They are created when the method is invoked and destroyed when the method returns."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block scope"),": Variables declared inside a block of code (between curly braces) are only accessible within that block. They are created when the block is entered and destroyed when the block is exited."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Class scope"),": Variables declared inside a class (also known as instance variables or fields) are accessible by all methods in that class. They are created when an object of the class is instantiated and destroyed when the object is garbage collected.")),(0,i.kt)("p",null,"In addition to scope, Java also has access modifiers that restrict the accessibility of variables and methods to other classes. There are four access modifiers in Java:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"private"),": The most restrictive modifier. It limits access to variables and methods to the class in which they are declared. It is used to hide implementation details and enforce encapsulation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default"),": The modifier that is applied when no other modifier is specified. It allows access to variables and methods only from within the same package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protected"),": A modifier that allows access to variables and methods only from within the same package or from subclasses in other packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public"),": The least restrictive modifier. It allows access to variables and methods from anywhere in the program."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Static Block vs Non-static Block")),(0,i.kt)("p",null,"Static block and non-static block are two types of initializer blocks in Java. They are used to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"initialize variables or execute some code before the constructor is called")),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Static Block")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Non-static Block")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A block of code that is preceded by the static keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"A block of code that is not preceded by any keyword")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Executed only once when the class is loaded into memory"),(0,i.kt)("td",{parentName:"tr",align:null},"Executed every time an object of the class is created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can access only static variables and methods"),(0,i.kt)("td",{parentName:"tr",align:null},"Can access both static and instance variables and methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Executed before the main method"),(0,i.kt)("td",{parentName:"tr",align:null},"Executed after the super constructor and before the current constructor")))),(0,i.kt)("h4",{id:"here-is-a-simple-class-that-uses-both-types-of-blocks"},"Here is a simple class that uses both types of blocks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Example {\n\n    // a static variable\n    private static int count;\n\n    // a non-static variable\n    private String name;\n\n    // a static block\n    static {\n        System.out.println("Static block is executed");\n        count = 10; // initialize the static variable\n    }\n\n    // a non-static block\n    {\n        System.out.println("Non-static block is executed");\n        name = "Example"; // initialize the non-static variable\n    }\n\n    // a constructor\n    public Example() {\n        System.out.println("Constructor is executed");\n        System.out.println("Name: " + name);\n        System.out.println("Count: " + count);\n    }\n\n    // a main method\n    public static void main(String[] args) {\n        System.out.println("Main method is executed");\n        Example ex1 = new Example(); // create the first object\n        Example ex2 = new Example(); // create the second object\n    }\n}\n')),(0,i.kt)("p",null,"The output of this program is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Static block is executed\nMain method is executed\nNon-static block is executed\nConstructor is executed\nName: Example\nCount: 10\nNon-static block is executed\nConstructor is executed\nName: Example\nCount: 10\n")),(0,i.kt)("p",null,"As you can see, the static block is executed only once when the class is loaded, before the main method. The non-static block is executed twice, once for each object creation, before the constructor. The constructor is also executed twice, once for each object creation, after the non-static block.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Static vs dynamic binding")),(0,i.kt)("p",null,"Static binding and dynamic binding are two types of binding in Java. Binding refers to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"the process of linking a method call with its implementation")),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Static binding")," (also called early binding) is when the compiler resolves the method call ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"at compile time")),". It uses the type information of the reference variable to determine which method to invoke. Static binding is used for private, final, and static methods and variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dynamic binding "),"(also called late binding) is when the JVM resolves the method ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"call at runtime")),". It uses the type information of the actual object to determine which method to invoke. Dynamic binding is used for virtual methods (which are all non-static methods in Java by default)."))),(0,i.kt)("p",null,"The main differences between static binding and dynamic binding are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Static Binding"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic Binding"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Occurs at compile time"),(0,i.kt)("td",{parentName:"tr",align:null},"Occurs at runtime")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Uses reference type"),(0,i.kt)("td",{parentName:"tr",align:null},"Uses object type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Faster"),(0,i.kt)("td",{parentName:"tr",align:null},"Slower")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supports method overloading"),(0,i.kt)("td",{parentName:"tr",align:null},"Supports method overriding")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Used for private, final, and static methods and variables"),(0,i.kt)("td",{parentName:"tr",align:null},"Used for virtual methods")))),(0,i.kt)("p",null,"Here is an example that demonstrates static binding and dynamic binding in Java:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Animal {\n    public static void eat() {\n        System.out.println("Animal eats");\n    }\n\n    public void sleep() {\n        System.out.println("Animal sleeps");\n    }\n}\n\npublic class Dog extends Animal {\n    public static void eat() {\n        System.out.println("Dog eats");\n    }\n\n    @Override\n    public void sleep() {\n        System.out.println("Dog sleeps");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a1 = new Animal();\n        Animal a2 = new Dog();\n\n        a1.eat(); // static binding\n        a2.eat(); // static binding\n\n        a1.sleep(); // dynamic binding\n        a2.sleep(); // dynamic binding\n    }\n}\n')),(0,i.kt)("p",null,"The output of this program is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Animal eats\nAnimal eats\nAnimal sleeps\nDog sleeps\n")),(0,i.kt)("p",null,"As you can see, the eat() method is resolved by static binding, because it is a static method. The compiler uses the reference type (Animal) to determine which eat() method to call. Therefore, both a1 and a2 invoke the eat() method of Animal class."),(0,i.kt)("p",null,"The sleep() method is resolved by dynamic binding, because it is a virtual method. The JVM uses the object type (Animal or Dog) to determine which sleep() method to call. Therefore, a1 invokes the sleep() method of Animal class, while a2 invokes the sleep() method of Dog class."),(0,i.kt)("p",null,":::note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"private"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"final")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," methods and variables -> can't be overiden -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"use static binding"))," and are bonded by compiler "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"overloaded")," methods are bonded using ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"static binding "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"overridden"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"virtual")," methods are bonded using ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"dynamic binding"))," at runtime.")),(0,i.kt)("p",null,":::")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h5",null,"Instance initializer block")),(0,i.kt)("p",null,"An instance initializer block in Java is a block of code that is placed inside a class but outside any method or constructor. It is used to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"initialize the instance variables of the class. It runs every time an object of the class is created")),". The Java compiler copies the instance initializer block in every constructor of the class ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"after the first statement ",(0,i.kt)("inlineCode",{parentName:"em"},"super()"))),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class Bike {\n    int speed; // instance variable\n    // instance initializer block\n    {\n        speed = 100;\n    }\n    Bike() {\n        System.out.println("speed is " + speed);\n    }\n    public static void main(String[] args) {\n        Bike b1 = new Bike(); // creates an object and invokes constructor\n        Bike b2 = new Bike(); // creates another object and invokes constructor\n    }\n}\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"speed is 100\nspeed is 100\n"))))}m.isMDXComponent=!0}}]);