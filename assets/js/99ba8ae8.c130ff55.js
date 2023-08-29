"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[7762],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54312:function(e,t,n){n.d(t,{ZP:function(){return i}});var a=n(83117),o=(n(67294),n(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"interview"},n.level&&(0,o.kt)("span",{className:"level"},n.level),n.children))}i.isMDXComponent=!0},78806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var a=n(83117),o=(n(67294),n(3905));n(54312);const r={sidebar_position:1,id:"intro",sidebar_label:"Javascript",title:"Javascript",tags:["Javascript"]},l="Javascript",i={unversionedId:"js/intro",id:"js/intro",title:"Javascript",description:"\x3c!--",source:"@site/docs/js/intro.md",sourceDirName:"js",slug:"/js/intro",permalink:"/devviews/interviews/js/intro",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/intro.md",tags:[{label:"Javascript",permalink:"/devviews/interviews/tags/javascript"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",sidebar_label:"Javascript",title:"Javascript",tags:["Javascript"]},sidebar:"jsInterviewSidebar",next:{title:"React Zero To Hero",permalink:"/devviews/interviews/js/react-zero-hero"}},s={},p=[{value:"JavaScript Event Propagation",id:"javascript-event-propagation",level:3},{value:"OOP in JS vs OOP in Java",id:"oop-in-js-vs-oop-in-java",level:3},{value:"<code>this</code> in JS",id:"this-in-js",level:3},{value:"Order of Hoisting",id:"order-of-hoisting",level:3},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Example 3:",id:"example-3",level:4},{value:"Symbol",id:"symbol",level:3},{value:"Enumerable vs Iterable",id:"enumerable-vs-iterable",level:3},{value:"Example",id:"example",level:4},{value:"Map vs Object",id:"map-vs-object",level:3},{value:"Example:",id:"example-4",level:4}],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"javascript"},"Javascript"),(0,o.kt)("h2",{id:""}),(0,o.kt)("h3",{id:"javascript-event-propagation"},"JavaScript Event Propagation"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"JavaScript Event Propagation")),(0,o.kt)("p",null,"There are three phases of event propagation in JavaScript: capturing, target, and bubbling."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"event-propagation-illustration",src:n(11561).Z,width:"1600",height:"800"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Capturing phase"),": the event moves down towards the element"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en">\n<body>\n<div id="wrap">DIV\n    <p class="hint">P\n        <a href="#">A</a>\n    </p>\n</div>\n\n<script>\n    function showTagName() {\n        alert("Capturing: "+ this.tagName);\n    }\n    \n    var elems = document.querySelectorAll("div, p, a");\n    for(let elem of elems) {\n        // registering capturing phase for all parents\n        // when clicking any of these elements, capturing phases of them will be triggered downwards\n        elem.addEventListener("click", showTagName, true);\n    }\n<\/script>\n</body>\n</html>\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Target phase"),": \u200athe event reaches the target element"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'document.getElementById("button").addEventListener("click", e => {\n  // check if the event listener is on the same element as the event target\n  if (e.target === e.currentTarget) {\n    alert("Button target");\n  }\n});\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bubbling phase"),": \u200athe event bubbles up from the element. The default behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener()")," is to register the event listener in the bubbling phase."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- registering Bubbling phase for all parents --\x3e\n\x3c!-- when clicking any of these elements, Bubbling phases of them will be triggered from upwards --\x3e\n<div onclick="alert(\'Bubbling: \' + this.tagName)">DIV\n    <p onclick="alert(\'Bubbling: \' + this.tagName)">P\n        <a href="#" onclick="alert(\'Bubbling: \' + this.tagName)">A</a>\n    </p>\n</div>\n'))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Stopping the Event Propagation")),"You can also stop event propagation in the middle if you want to prevent any ancestor element's event handlers from being notified about the event.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  function showAlert(event) {\n      alert("You clicked: "+ this.tagName);\n      event.stopPropagation();\n  }\n\n  var elems = document.querySelectorAll("div, p, a");\n  for(let elem of elems) {\n      elem.addEventListener("click", showAlert);\n  }\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Preventing the Default Action")),"Some events have a default action associated with them. For example, if you click on a link browser takes you to the link's target, when you click on a form submit button browser submit the form, etc. You can prevent such default actions with the preventDefault() method of the event object.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  var btn = document.getElementById("submitBtn");\n  \n  btn.addEventListener("click", function(event) {\n      var name = document.getElementById("firstName").value;\n      alert("Sorry, " + name + ". The preventDefault() won\'t let you submit this form!");\n      event.preventDefault(); // Prevent form submission\n  });\n'))),(0,o.kt)("h3",{id:"oop-in-js-vs-oop-in-java"},"OOP in JS vs OOP in Java"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"OOP in JS vs OOP in Java")),(0,o.kt)("p",null,"JS is a ",(0,o.kt)("strong",{parentName:"p"},"prototype-based language"),", while Java is a ",(0,o.kt)("strong",{parentName:"p"},"class-based language"),". This means that in JS, objects inherit features directly from other objects through a link called ",(0,o.kt)("strong",{parentName:"p"},"prototype"),", while in Java, objects inherit features from abstract definitions called classes through a keyword called extends.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"prototype Chain in JS")),(0,o.kt)("p",null,"The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, when you access a property or method on an object, the JavaScript engine will first ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"look for the property or method on the object itself. If it doesn't find it, the engine will then look for the property or method on the object's prototype, and so on")),", until it finds the property or method."),(0,o.kt)("p",null,"Here is an example of a prototype chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function Person() {\n  this.name = "John Doe";\n  this.age = 30;\n}\n\nPerson.prototype.greet = function() {\n  return "Hello, my name is " + this.name;\n};\n\nvar john = new Person();\n\nconsole.log(john.greet()); // "Hello, my name is John Doe"\n')),(0,o.kt)("p",null,"When you access the ",(0,o.kt)("inlineCode",{parentName:"p"},"greet()")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"john")," object, the JavaScript engine will first look for the method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"john")," object itself. If it doesn't find it, the engine will then look for the method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"john")," object's prototype, which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.prototype")," object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"greet()")," method is defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.prototype")," object, so the JavaScript engine will return it.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"prototype vs [[prototype]] vs __proto__ in js")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Every object in JS has an implicit property called ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype")," which point to it's prototype. Not available on instance obj."),(0,o.kt)("li",{parentName:"ol"},"Every object in JS has an implicit property called ",(0,o.kt)("inlineCode",{parentName:"li"},"[[Prototype]]")," which point to parent's prototype to form an inheritance chain. (",(0,o.kt)("inlineCode",{parentName:"li"},"[[Prototype]]")," is not directly accessible)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"__proto__")," is the accessor of ",(0,o.kt)("inlineCode",{parentName:"li"},"[[Prototype]]"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"prototype",src:n(20017).Z,width:"808",height:"505"}))),(0,o.kt)("h3",{id:"this-in-js"},(0,o.kt)("inlineCode",{parentName:"h3"},"this")," in JS"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"this in js")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"regular functions")," the this keyword represented the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"object that called the function")),"."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"arrow functions")," the this keyword always represents the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"object that defined the arrow function")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// this is like pronounce such as "I\'m", "This is",...\nconst person = {\n  name: "Alice",\n  greet: function () {\n    console.log ("Hi, I\'m " + this.name);\n  }\n};\n\n// Call the method on the object\nperson.greet(); // Hi, I\'m Alice\n\n// Assign the method to a variable\nvar greet = person.greet;\n\n// Scenarios 1: Call the variable as a function\ngreet(); // Hi, I\'m undefined\n// Use call() to change the value of this\ngreet.call(person); // Hi, I\'m Alice\n\n// Scenarios 2: Pass the method as a callback to another function\nsetTimeout (person.greet, 1000); // Hi, I\'m undefined\nsetTimeout (function () {\n  return person.greet ();\n}, 1000);\n\n// Scenarios 3: Pass the method as an event handler to an element\nvar btn = document.getElementById ("btn");\nbtn.addEventListener("click", person.greet); // Hi, I\'m [object HTMLButtonElement]\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"bind() vs call() vs apply()")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Calls"),(0,o.kt)("th",{parentName:"tr",align:null},"Arguments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bind()")),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"greet.bind(person, Arg1, Arg2, Arg3)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"call()")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"greet.call(person, Arg1, Arg2, Arg3)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"apply()")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"greet.apply(person, [Arg1, Arg2, Arg3])")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"regular function vs arrow function")),(0,o.kt)("p",null,"Regular functions and arrow functions are two types of functions in JavaScript. They have some differences in syntax, behavior, and usage. Here are some of the main differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Syntax"),": Regular functions can be defined using the ",(0,o.kt)("inlineCode",{parentName:"li"},"function")," keyword, either as a function declaration or a function expression. Arrow functions can be defined using the ",(0,o.kt)("inlineCode",{parentName:"li"},"=>")," operator, and they have a shorter and simpler syntax. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Regular function declaration\nfunction greet (name) {\n  console.log ("Hello, " + name);\n}\n\n// Regular function expression\nvar greet = function (name) {\n  console.log ("Hello, " + name);\n};\n\n// Arrow function expression\nvar greet = (name) => {\n  console.log ("Hello, " + name);\n};\n\n// Arrow function expression with implicit return\nvar greet = (name) => "Hello, " + name;\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"this")," binding"),": Regular functions have their own ",(0,o.kt)("inlineCode",{parentName:"li"},"this")," value, which depends on how they are called. Arrow functions do not have their own ",(0,o.kt)("inlineCode",{parentName:"li"},"this"),", but they inherit it from the enclosing scope. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define an object with a regular method and an arrow method\nvar obj = {\n  name: \"Alice\",\n  greet: function () {\n    console.log (\"Hi, I'm \" + this.name);\n  },\n  sayBye: () => {\n    console.log (\"Bye, I'm \" + this.name);\n  }\n};\n\n// Call the methods on the object\nobj.greet (); // Hi, I'm Alice\nobj.sayBye (); // Bye, I'm undefined\n\n// Assign the methods to variables\nvar greet = obj.greet;\nvar sayBye = obj.sayBye;\n\n// Call the variables as functions\ngreet (); // Hi, I'm undefined\nsayBye (); // Bye, I'm undefined\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Constructor"),": Regular functions can be used as constructors with the ",(0,o.kt)("inlineCode",{parentName:"li"},"new")," keyword, and they have a ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype")," property that can be used for inheritance. Arrow functions cannot be used as constructors, and they do not have a ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype")," property. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Define a regular function as a constructor\nfunction Person (name) {\n  this.name = name;\n}\n\n// Define a method on the prototype\nPerson.prototype.greet = function () {\n  console.log ("Hi, I\'m " + this.name);\n};\n\n// Create an instance with new\nvar alice = new Person ("Alice");\nalice.greet (); // Hi, I\'m Alice\n\n// Define an arrow function as a constructor\nvar Animal = (name) => {\n  this.name = name;\n};\n\n// Try to create an instance with new\nvar cat = new Animal ("Cat"); // TypeError: Animal is not a constructor\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arguments object"),": Regular functions have an ",(0,o.kt)("inlineCode",{parentName:"li"},"arguments")," object that contains the arguments passed to the function when called. Arrow functions do not have an ",(0,o.kt)("inlineCode",{parentName:"li"},"arguments")," object, but they can use rest parameters to access the arguments. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define a regular function that logs the arguments object\nfunction logArgs () {\n  console.log (arguments);\n}\n\n// Call the function with some arguments\nlogArgs (1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }\n\n// Define an arrow function that logs the arguments object\nvar logArgs = () => {\n  console.log (arguments);\n};\n\n// Call the function with some arguments\nlogArgs (1, 2, 3); // ReferenceError: arguments is not defined\n\n// Define an arrow function that uses rest parameters to access the arguments\nvar logArgs = (...args) => {\n  console.log (args);\n};\n\n// Call the function with some arguments\nlogArgs (1, 2, 3); // [ 1, 2, 3 ]\n"))),(0,o.kt)("h3",{id:"order-of-hoisting"},"Order of Hoisting"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Order of Hoisting")),(0,o.kt)("p",null,"According to the ",(0,o.kt)("strong",{parentName:"p"},"ECMAScript 5 specification"),", the order of hoisting in JavaScript is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Function declarations")," are hoisted first, with their name and value (the function body)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Variable declarations")," are hoisted next, with their name only. The initialization (if any) is not hoisted."),(0,o.kt)("li",{parentName:"ul"},"If a variable name is already taken by a function declaration, the variable declaration is ignored.")),(0,o.kt)("h4",{id:"example-1"},"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(foo); // logs the function foo\nconsole.log(bar); // logs undefined\nfoo(); // calls the function foo\nbar(); // throws a TypeError: bar is not a function\n\nfunction foo() {\n  console.log("Hello");\n}\n\nvar bar = function() {\n  console.log("World");\n};\n')),(0,o.kt)("p",null,"This code is equivalent to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function foo() { // function declaration is hoisted first\n  console.log("Hello");\n}\n\nvar bar; // variable declaration is hoisted next, but not the initialization\n\nconsole.log(foo); // logs the function foo\nconsole.log(bar); // logs undefined\nfoo(); // calls the function foo\nbar(); // throws a TypeError: bar is not a function\n\nbar = function() { // variable initialization happens here\n  console.log("World");\n};\n')),(0,o.kt)("h4",{id:"example-2"},"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var double = 22;\nfunction double(num) {\n  return (num*2);\n}\nconsole.log(typeof double);\n")),(0,o.kt)("p",null,"The equivalent of this code in runtime is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function double(num) { // function declaration is hoisted to the top\n  return (num*2);\n}\nvar double; // variable declaration is hoisted to the top, but not the initialization\ndouble = 22; // variable is initialized with the value 22\nconsole.log(typeof double); // logs "number" \n')),(0,o.kt)("h4",{id:"example-3"},"Example 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var double;\nfunction double(num) {\n return (num*2);\n}\nconsole.log(typeof double);\n")),(0,o.kt)("p",null,"The equivalent of this code in runtime is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function double(num) { // function declaration is hoisted to the top\n return (num*2);\n}\nvar double; // variable declaration is hoisted to the top next\nconsole.log(typeof double); // logs "function" because variable initialization haven\'t happened yet\n'))),(0,o.kt)("h3",{id:"symbol"},"Symbol"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Reasons why we use Symbol but don't use a string instead?")),(0,o.kt)("p",null,"We can use a string as a property key of an object, but there are some drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Strings are not guaranteed to be unique"),". If we use a string that is already used by another property or method of the object, we ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"may overwrite or access the wrong value")),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  foo: "bar",\n  toString: "baz", // overwrites the built-in toString method\n};\n\nconsole.log(obj.foo); // "bar"\nconsole.log(obj.toString); // "baz"\nconsole.log(obj["toString"]); // "baz"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Strings are enumerable by default"),". If we use a string as a property key, it will show up in Object.keys, ",(0,o.kt)("inlineCode",{parentName:"li"},"for..in loops"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON.stringify"),". This ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"may expose or leak some internal or private data"))," that we don't want to share. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  foo: "bar",\n  _secret: "baz", // supposed to be a private property\n};\n\nconsole.log(Object.keys(obj)); // ["foo", "_secret"]\nfor (let key in obj) {\n  console.log(key); // "foo", "_secret"\n}\nconsole.log(JSON.stringify(obj)); // "{\\"foo\\":\\"bar\\",\\"_secret\\":\\"baz\\"}"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Strings are accessible by normal methods"),". If we use a string as a property key, it can be accessed by dot notation or bracket notation with the same string. This ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"may allow other code to accidentally or maliciously access or modify the property")),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  foo: "bar",\n  _secret: "baz", // supposed to be a private property\n};\n\n// Some other code\nobj.foo = "qux"; // modifies the property\nobj._secret = "quux"; // modifies the private property\nconsole.log(obj.foo); // "qux"\nconsole.log(obj._secret); // "quux"\nconsole.log(obj["foo"]); // "qux"\nconsole.log(obj["_secret"]); // "quux"\n')),(0,o.kt)("p",null,"Symbols can avoid these drawbacks because they are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"unique, non-enumerable, and non-accessible"))," by normal methods. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const sym = Symbol("foo");\n\n// Use the symbol as a property key\nconst obj = {\n  [sym]: "bar",\n};\n\n// The property is not enumerable by default. \n// Hacker can access `obj` but don\'t know it has `sym` in it\nconsole.log(Object.keys(obj)); // []\n\n// The property is not accessible by normal methods\nconsole.log(obj.foo); // undefined\nconsole.log(obj["foo"]); // undefined\n\n// The symbol is unique and immutable\nconst sym2 = Symbol("foo");\nconsole.log(sym === sym2); // false\n// sym = Symbol("baz"); // TypeError: Assignment to constant variable.\n')),(0,o.kt)("p",null,"To get ",(0,o.kt)("inlineCode",{parentName:"p"},"sym"),", use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const symbols = Object.getOwnPropertySymbols(obj);\nconsole.log(symbols[0]); // sym\n")),(0,o.kt)("p",null,"To get value, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, sym);\nconsole.log(propertyDescriptor.value); // bar\n"))),(0,o.kt)("h3",{id:"enumerable-vs-iterable"},"Enumerable vs Iterable"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Enumerable vs Iterable")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Enumerable"),(0,o.kt)("th",{parentName:"tr",align:null},"Iterable"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Applies to properties"),(0,o.kt)("td",{parentName:"tr",align:null},"Applies to values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Depends on the internal enumerable flag"),(0,o.kt)("td",{parentName:"tr",align:null},"Depends on the implementation of Symbol.iterator or Symbol.asyncIterator method")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Visited by methods that iterate over the object's own or inherited properties"),(0,o.kt)("td",{parentName:"tr",align:null},"Visited by methods that iterate over the values themselves")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Examples: for..in loop, Object.keys, Object.values, Object.entries"),(0,o.kt)("td",{parentName:"tr",align:null},"Examples: for..of loop, spread syntax, Array.from")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enumerable data types")," are ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"symbol"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"BigInt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Iterable data types")," are ",(0,o.kt)("inlineCode",{parentName:"li"},"Map"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Set"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise.all"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"set"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"generator"))),(0,o.kt)("p",null,"Imagine you have a bookshelf that contains many books. Each book has a title, an author, a genre, and a number of pages. These are the properties of each book."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enumerable")," means that you can ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"list the properties of each book by looking at its cover"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"opening it")),'. For example, you can say "this book has a title, an author, a genre, and a number of pages". You can also list the properties of all the books on the shelf by scanning them one by one. For example, you can say "the first book has this title, the second book has this author, the third book has this genre, etc". This is ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"like using a ",(0,o.kt)("inlineCode",{parentName:"em"},"for..in")," loop"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"Object.keys")))," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"iterate over the properties of an object")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Iterable")," means that you can ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"read the contents of each book by turning its pages")),'. For example, you can say "this book starts with this sentence, then it continues with this paragraph, then it ends with this chapter". You can also read the contents of all the books on the shelf by opening them one by one. For example, you can say "the first book tells this story, the second book tells this story, the third book tells this story, etc". This is ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"like using a ",(0,o.kt)("inlineCode",{parentName:"em"},"for..of")," loop"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"spread syntax"))," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"iterate over the values of an iterable object")),"."),(0,o.kt)("p",null,"However, not all books are enumerable or iterable. Some books may have hidden properties that are not visible on the cover or inside. For example, a book may have a secret code or a hidden message that only the author knows. These are non-enumerable properties that cannot be listed by normal methods. Some books may not have pages that can be turned. For example, a book may be locked or glued together. These are non-iterable values that cannot be read by normal methods."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"An array is an iterable value, because it has a Symbol.iterator method that returns an iterator. However, its properties are not all enumerable, because some of them are hidden from methods that iterate over the properties, such as length and Symbol.iterator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const arr = [1, 2, 3];\n\n// The array is iterable\nfor (let x of arr) {\n  console.log(x); // 1, 2, 3\n}\n\n// The array\'s properties are not all enumerable\nfor (let key in arr) {\n  console.log(key); // 0, 1, 2\n}\nconsole.log(Object.keys(arr)); // ["0", "1", "2"]\nconsole.log(arr.length); // 3\nconsole.log(arr[Symbol.iterator]); // [Function: values]\n')),(0,o.kt)("p",null,"An object is a non-iterable value, because it does not have a Symbol.iterator method by default. However, its properties can be enumerable or not, depending on how they are defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  foo: "bar",\n  [Symbol("baz")]: "qux",\n};\n\n// The object is not iterable\nfor (let x of obj) {\n  console.log(x); // TypeError: obj is not iterable\n}\n\n// The object\'s properties can be enumerable or not\nfor (let key in obj) {\n  console.log(key); // foo\n}\nconsole.log(Object.keys(obj)); // ["foo"]\nconsole.log(Object.getOwnPropertySymbols(obj)); // [Symbol(baz)]\nconsole.log(obj[Symbol("baz")]); // undefined\nconsole.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // qux\n'))),(0,o.kt)("h3",{id:"map-vs-object"},"Map vs Object"),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Map vs Object")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Map"),(0,o.kt)("th",{parentName:"tr",align:null},"Object"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Preserves insertion order of keys"),(0,o.kt)("td",{parentName:"tr",align:null},"Does not preserve insertion order of keys")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can use any value as a key"),(0,o.kt)("td",{parentName:"tr",align:null},"Can only use strings, numbers, or symbols as keys")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Has a size property"),(0,o.kt)("td",{parentName:"tr",align:null},"Does not have a size property")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Has built-in methods for adding, deleting, and checking keys"),(0,o.kt)("td",{parentName:"tr",align:null},"Does not have built-in methods for adding, deleting, and checking keys")))),(0,o.kt)("h4",{id:"example-4"},"Example:"),(0,o.kt)("p",null,"Store a mapping between functions and their names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Create a map\nconst functionNames = new Map();\n\n// Use functions as keys\nfunctionNames.set(function foo() {}, "foo");\nfunctionNames.set(function bar() {}, "bar");\n\n// Get the names using the functions\nconsole.log(functionNames.get(function foo() {})); // "foo"\nconsole.log(functionNames.get(function bar() {})); // "bar"\n\n// Check if a function has a name\nconsole.log(functionNames.has(function foo() {})); // true\nconsole.log(functionNames.has(function baz() {})); // false\n\n// Delete a function\'s name\nfunctionNames.delete(function bar() {});\nconsole.log(functionNames.size); // 1\n\n'))))}u.isMDXComponent=!0},20017:function(e,t,n){t.Z=n.p+"assets/images/prototype-85edd756ae2ed27af5902b8fbc2016c3.png"},11561:function(e,t,n){t.Z=n.p+"assets/images/event-propagation-illustration-1d31dab0e867d4b82d834a0dd1669ec6.png"}}]);