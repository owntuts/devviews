"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9870],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={},i=void 0,c={unversionedId:"java/hero/exceptions",id:"java/hero/exceptions",title:"exceptions",description:"Types of exceptions in java",source:"@site/docs/java/hero/exceptions.md",sourceDirName:"java/hero",slug:"/java/hero/exceptions",permalink:"/devviews/interviews/java/hero/exceptions",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/hero/exceptions.md",tags:[],version:"current",frontMatter:{},sidebar:"javaInterviewSidebar",previous:{title:"concurrency",permalink:"/devviews/interviews/java/hero/concurrency"},next:{title:"thread",permalink:"/devviews/interviews/java/hero/thread"}},l={},s=[],p={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Types of exceptions in java")),(0,a.kt)("p",null,"Exceptions are events that occur during the execution of a program and disrupt the normal flow of instructions. Exceptions can be classified into two main types: ",(0,a.kt)("strong",{parentName:"p"},"checked exceptions")," and ",(0,a.kt)("strong",{parentName:"p"},"unchecked exceptions"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Checked exceptions")," are exceptions that are ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"checked by the compiler at compile-time")),". They represent conditions that are ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"outside the control of the program")),", such as file not found, network error, invalid input, etc. Checked exceptions must be either handled by the program using ",(0,a.kt)("inlineCode",{parentName:"li"},"try-catch")," blocks or declared in the ",(0,a.kt)("inlineCode",{parentName:"li"},"throws")," clause of the method that may cause them. Examples of checked exceptions are IOException, SQLException, ClassNotFoundException, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unchecked exceptions")," are exceptions that are ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"runtime exceptions"))," - ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"not checked by the compiler at compile-time")),". They represent conditions that are caused by the program ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"logic errors")),", such as null pointer dereference, array index out of bounds, arithmetic exception, etc. Unchecked exceptions do not need to be handled or declared by the program, but they can be caught and handled if desired. Examples of unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException, ArithmeticException, IndexOutOfBoundsException, etc.")),(0,a.kt)("p",null,"Another type of exception is ",(0,a.kt)("strong",{parentName:"p"},"error"),", which is a subclass of Throwable class, just like Exception class. Errors are also unchecked exceptions, but they represent conditions that are beyond the control and recovery of the program, such as system crash, memory overflow, stack overflow, etc. Errors are usually not handled by the program, but they can be caught and logged if needed. Examples of errors are Error and its subclasses, such as OutOfMemoryError, StackOverflowError, VirtualMachineError, etc."),(0,a.kt)("p",null,"Here is an example of using different types of exceptions in Java:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// A checked exception\nclass CheckedExceptionDemo {\n  public static void main(String[] args) {\n    try {\n      // This may throw a FileNotFoundException\n      File file = new File("test.txt");\n      Scanner sc = new Scanner(file);\n      while (sc.hasNextLine()) {\n        System.out.println(sc.nextLine());\n      }\n      sc.close();\n    } catch (FileNotFoundException e) {\n      // Handle the exception\n      System.out.println("File not found");\n    }\n  }\n}\n\n// An unchecked exception\nclass UncheckedExceptionDemo {\n  public static void main(String[] args) {\n    // This may throw an ArithmeticException\n    int a = 10;\n    int b = 0;\n    int c = a / b; // Divide by zero\n    System.out.println(c);\n  }\n}\n\n// An error\nclass ErrorDemo {\n  public static void main(String[] args) {\n    // This may throw a StackOverflowError\n    recursiveMethod(); // Call itself infinitely\n  }\n\n  public static void recursiveMethod() {\n    recursiveMethod();\n  }\n}\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Explain about Exception Propagation")),(0,a.kt)("p",null,"Exception propagation in Java is a process in which an exception that occurs in a method is passed to the caller method if it is not handled in the current method. This way, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"exception can be propagated up the call stack until it reaches a method that can handle it"))," or the main method. Exception propagation allows the separation of error handling logic from the normal business logic."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"only unchecked exceptions (RuntimeException and its subclasses) are propagated in Java")),". Checked exceptions (Exception and its subclasses except RuntimeException) must be either handled in the current method using ",(0,a.kt)("inlineCode",{parentName:"p"},"try-catch")," blocks or declared in the ",(0,a.kt)("inlineCode",{parentName:"p"},"throws")," clause of the method signature. If a checked exception is thrown and not handled or declared, the compiler will report an error."),(0,a.kt)("p",null,"Here is an example of exception propagation in Java:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// An unchecked exception\nclass UncheckedExceptionDemo {\n  // This method throws an unchecked exception\n  void m() {\n    // This may throw an ArithmeticException\n    int a = 10;\n    int b = 0;\n    int c = a / b; // Divide by zero\n  }\n\n  // This method calls m() and does not declare or handle the exception\n  void n() {\n    m();\n  }\n\n  // This method calls n() and handles the exception\n  void p() {\n    try {\n      n();\n    } catch (ArithmeticException e) {\n      // Handle the exception\n      System.out.println("Cannot divide by zero");\n    }\n  }\n\n  public static void main(String[] args) {\n    UncheckedExceptionDemo obj = new UncheckedExceptionDemo();\n    obj.p();\n    System.out.println("Normal flow");\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Call Stack"),(0,a.kt)("th",{parentName:"tr",align:null},"Exception"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"m()"),(0,a.kt)("td",{parentName:"tr",align:null},"ArithmeticException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n()"),(0,a.kt)("td",{parentName:"tr",align:null},"ArithmeticException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"p()"),(0,a.kt)("td",{parentName:"tr",align:null},"ArithmeticException (handled)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"main()"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"If an exception occurs in the ",(0,a.kt)("inlineCode",{parentName:"p"},"m()")," method is not caught, then it moves to the method ",(0,a.kt)("inlineCode",{parentName:"p"},"n()"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"p()"),". Then it is moved to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," method and then it will stop the flow of execution."),(0,a.kt)("p",null,"In case of Checked Exception, you must either handled (using ",(0,a.kt)("inlineCode",{parentName:"p"},"try"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),") or declared by the method that may cause it (using ",(0,a.kt)("inlineCode",{parentName:"p"},"throws"),"). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// A checked exception\nclass CheckedExceptionDemo {\n  // This method throws a checked exception\n  void m() throws IOException {\n    // This may throw an IOException\n    FileReader fr = new FileReader("test.txt");\n  }\n\n  // This method calls m() and declares the exception\n  void n() throws IOException {\n    m();\n  }\n\n  // This method calls n() and handles the exception\n  void p() {\n    try {\n      n();\n    } catch (IOException e) {\n      // Handle the exception\n      System.out.println("File not found");\n    }\n  }\n\n  public static void main(String[] args) {\n    CheckedExceptionDemo obj = new CheckedExceptionDemo();\n    obj.p();\n    System.out.println("Normal flow");\n  }\n}\n')),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"m()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"n()")," method does not handle the exception, then it must declare it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"throws")," clause of its signature.")))}h.isMDXComponent=!0}}]);