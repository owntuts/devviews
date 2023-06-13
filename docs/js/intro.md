---
sidebar_position: 1
id: intro
sidebar_label: Javascript
title: Javascript
tags:
  - Javascript
---

import Interview from "../_MDXComponents/Interview.mdx";

# Javascript


## 
<!-- 
<Interview level="Junior">
  <BoxingvsUnboxing />
</Interview> -->

<!-- ### Directory Structure
<BoxingvsUnboxing /> -->

### JavaScript Event Propagation

<details open>
<summary><h5>JavaScript Event Propagation</h5></summary>

There are three phases of event propagation in JavaScript: capturing, target, and bubbling.

![event-propagation-illustration](/img/interviews/js/event-propagation-illustration.png)

- **Capturing phase**: the event moves down towards the element
  ```html
  <html lang="en">
  <body>
  <div id="wrap">DIV
      <p class="hint">P
          <a href="#">A</a>
      </p>
  </div>

  <script>
      function showTagName() {
          alert("Capturing: "+ this.tagName);
      }
      
      var elems = document.querySelectorAll("div, p, a");
      for(let elem of elems) {
          // registering capturing phase for all parents
          // when clicking any of these elements, capturing phases of them will be triggered downwards
          elem.addEventListener("click", showTagName, true);
      }
  </script>
  </body>
  </html>
  ```
- **Target phase**:  the event reaches the target element

  ```js
  document.getElementById("button").addEventListener("click", e => {
    // check if the event listener is on the same element as the event target
    if (e.target === e.currentTarget) {
      alert("Button target");
    }
  });
  ```

- **Bubbling phase**:  the event bubbles up from the element. The default behavior of `addEventListener()` is to register the event listener in the bubbling phase.
  ```html
  <!-- registering Bubbling phase for all parents -->
  <!-- when clicking any of these elements, Bubbling phases of them will be triggered from upwards -->
  <div onclick="alert('Bubbling: ' + this.tagName)">DIV
      <p onclick="alert('Bubbling: ' + this.tagName)">P
          <a href="#" onclick="alert('Bubbling: ' + this.tagName)">A</a>
      </p>
  </div>
  ```

</details>


<details>
<summary><h5>Stopping the Event Propagation</h5></summary>
You can also stop event propagation in the middle if you want to prevent any ancestor element's event handlers from being notified about the event.

```js
  function showAlert(event) {
      alert("You clicked: "+ this.tagName);
      event.stopPropagation();
  }

  var elems = document.querySelectorAll("div, p, a");
  for(let elem of elems) {
      elem.addEventListener("click", showAlert);
  }
```
</details>

<details>
<summary><h5>Preventing the Default Action</h5></summary>
Some events have a default action associated with them. For example, if you click on a link browser takes you to the link's target, when you click on a form submit button browser submit the form, etc. You can prevent such default actions with the preventDefault() method of the event object.

```js
  var btn = document.getElementById("submitBtn");
  
  btn.addEventListener("click", function(event) {
      var name = document.getElementById("firstName").value;
      alert("Sorry, " + name + ". The preventDefault() won't let you submit this form!");
      event.preventDefault(); // Prevent form submission
  });
```
</details>

### OOP in JS vs OOP in Java

<details open>
<summary><h5>OOP in JS vs OOP in Java</h5></summary>

JS is a **prototype-based language**, while Java is a **class-based language**. This means that in JS, objects inherit features directly from other objects through a link called **prototype**, while in Java, objects inherit features from abstract definitions called classes through a keyword called extends.

</details>

<details>
<summary><h5>prototype Chain in JS</h5></summary>

The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, when you access a property or method on an object, the JavaScript engine will first ***look for the property or method on the object itself. If it doesn't find it, the engine will then look for the property or method on the object's prototype, and so on***, until it finds the property or method.

Here is an example of a prototype chain:

```js
function Person() {
  this.name = "John Doe";
  this.age = 30;
}

Person.prototype.greet = function() {
  return "Hello, my name is " + this.name;
};

var john = new Person();

console.log(john.greet()); // "Hello, my name is John Doe"
```

When you access the `greet()` method on the `john` object, the JavaScript engine will first look for the method on the `john` object itself. If it doesn't find it, the engine will then look for the method on the `john` object's prototype, which is the `Person.prototype` object. The `greet()` method is defined on the `Person.prototype` object, so the JavaScript engine will return it.

</details>

<details>
<summary><h5>prototype vs [[prototype]] vs __proto__ in js</h5></summary>

1. Every object in JS has an implicit property called `prototype` which point to it's prototype. Not available on instance obj.
1. Every object in JS has an implicit property called `[[Prototype]]` which point to parent's prototype to form an inheritance chain. (`[[Prototype]]` is not directly accessible).
2. `__proto__` is the accessor of `[[Prototype]]`

![prototype](/img/interviews/angular/prototype.png)

</details>

### `this` in JS

<details open>
<summary><h5>this in js</h5></summary>

- In **regular functions** the this keyword represented the ***object that called the function***.
- In **arrow functions** the this keyword always represents the ***object that defined the arrow function***.

```js
// this is like pronounce such as "I'm", "This is",...
const person = {
  name: "Alice",
  greet: function () {
    console.log ("Hi, I'm " + this.name);
  }
};

// Call the method on the object
person.greet(); // Hi, I'm Alice

// Assign the method to a variable
var greet = person.greet;

// Scenarios 1: Call the variable as a function
greet(); // Hi, I'm undefined
// Use call() to change the value of this
greet.call(person); // Hi, I'm Alice

// Scenarios 2: Pass the method as a callback to another function
setTimeout (person.greet, 1000); // Hi, I'm undefined
setTimeout (function () {
  return person.greet ();
}, 1000);

// Scenarios 3: Pass the method as an event handler to an element
var btn = document.getElementById ("btn");
btn.addEventListener("click", person.greet); // Hi, I'm [object HTMLButtonElement]

```

</details>

<details>
<summary><h5>bind() vs call() vs apply()</h5></summary>


| Method | Calls | Arguments |
|--------|-------|-----------|
| `bind()` | No | `greet.bind(person, Arg1, Arg2, Arg3)` |
| `call()` | Yes | `greet.call(person, Arg1, Arg2, Arg3)` |
| `apply()` | Yes | `greet.apply(person, [Arg1, Arg2, Arg3])` |

</details>

<details>
<summary><h5>regular function vs arrow function</h5></summary>

Regular functions and arrow functions are two types of functions in JavaScript. They have some differences in syntax, behavior, and usage. Here are some of the main differences:

- **Syntax**: Regular functions can be defined using the `function` keyword, either as a function declaration or a function expression. Arrow functions can be defined using the `=>` operator, and they have a shorter and simpler syntax. For example:

```javascript
// Regular function declaration
function greet (name) {
  console.log ("Hello, " + name);
}

// Regular function expression
var greet = function (name) {
  console.log ("Hello, " + name);
};

// Arrow function expression
var greet = (name) => {
  console.log ("Hello, " + name);
};

// Arrow function expression with implicit return
var greet = (name) => "Hello, " + name;
```

- **`this` binding**: Regular functions have their own `this` value, which depends on how they are called. Arrow functions do not have their own `this`, but they inherit it from the enclosing scope. For example:

```javascript
// Define an object with a regular method and an arrow method
var obj = {
  name: "Alice",
  greet: function () {
    console.log ("Hi, I'm " + this.name);
  },
  sayBye: () => {
    console.log ("Bye, I'm " + this.name);
  }
};

// Call the methods on the object
obj.greet (); // Hi, I'm Alice
obj.sayBye (); // Bye, I'm undefined

// Assign the methods to variables
var greet = obj.greet;
var sayBye = obj.sayBye;

// Call the variables as functions
greet (); // Hi, I'm undefined
sayBye (); // Bye, I'm undefined
```

- **Constructor**: Regular functions can be used as constructors with the `new` keyword, and they have a `prototype` property that can be used for inheritance. Arrow functions cannot be used as constructors, and they do not have a `prototype` property. For example:

```javascript
// Define a regular function as a constructor
function Person (name) {
  this.name = name;
}

// Define a method on the prototype
Person.prototype.greet = function () {
  console.log ("Hi, I'm " + this.name);
};

// Create an instance with new
var alice = new Person ("Alice");
alice.greet (); // Hi, I'm Alice

// Define an arrow function as a constructor
var Animal = (name) => {
  this.name = name;
};

// Try to create an instance with new
var cat = new Animal ("Cat"); // TypeError: Animal is not a constructor
```

- **Arguments object**: Regular functions have an `arguments` object that contains the arguments passed to the function when called. Arrow functions do not have an `arguments` object, but they can use rest parameters to access the arguments. For example:

```javascript
// Define a regular function that logs the arguments object
function logArgs () {
  console.log (arguments);
}

// Call the function with some arguments
logArgs (1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

// Define an arrow function that logs the arguments object
var logArgs = () => {
  console.log (arguments);
};

// Call the function with some arguments
logArgs (1, 2, 3); // ReferenceError: arguments is not defined

// Define an arrow function that uses rest parameters to access the arguments
var logArgs = (...args) => {
  console.log (args);
};

// Call the function with some arguments
logArgs (1, 2, 3); // [ 1, 2, 3 ]
```

</details>


### Order of Hoisting

<details open>
<summary><h5>Order of Hoisting</h5></summary>

According to the **ECMAScript 5 specification**, the order of hoisting in JavaScript is as follows:

- **Function declarations** are hoisted first, with their name and value (the function body).
- **Variable declarations** are hoisted next, with their name only. The initialization (if any) is not hoisted.
- If a variable name is already taken by a function declaration, the variable declaration is ignored.

#### Example 1:

```javascript
console.log(foo); // logs the function foo
console.log(bar); // logs undefined
foo(); // calls the function foo
bar(); // throws a TypeError: bar is not a function

function foo() {
  console.log("Hello");
}

var bar = function() {
  console.log("World");
};
```

This code is equivalent to:

```javascript
function foo() { // function declaration is hoisted first
  console.log("Hello");
}

var bar; // variable declaration is hoisted next, but not the initialization

console.log(foo); // logs the function foo
console.log(bar); // logs undefined
foo(); // calls the function foo
bar(); // throws a TypeError: bar is not a function

bar = function() { // variable initialization happens here
  console.log("World");
};
```

#### Example 2:

```js
var double = 22;
function double(num) {
  return (num*2);
}
console.log(typeof double);
```
The equivalent of this code in runtime is:

```javascript
function double(num) { // function declaration is hoisted to the top
  return (num*2);
}
var double; // variable declaration is hoisted to the top, but not the initialization
double = 22; // variable is initialized with the value 22
console.log(typeof double); // logs "number" 
```
#### Example 3:

```js
var double;
function double(num) {
 return (num*2);
}
console.log(typeof double);
```

The equivalent of this code in runtime is:

```javascript
function double(num) { // function declaration is hoisted to the top
 return (num*2);
}
var double; // variable declaration is hoisted to the top next
console.log(typeof double); // logs "function" because variable initialization haven't happened yet
```

</details>

### Symbol

<details open>
<summary><h5>Reasons why we use Symbol but don't use a string instead?</h5></summary>

We can use a string as a property key of an object, but there are some drawbacks:

- **Strings are not guaranteed to be unique**. If we use a string that is already used by another property or method of the object, we ***may overwrite or access the wrong value***. For example:

```js
const obj = {
  foo: "bar",
  toString: "baz", // overwrites the built-in toString method
};

console.log(obj.foo); // "bar"
console.log(obj.toString); // "baz"
console.log(obj["toString"]); // "baz"
```

- **Strings are enumerable by default**. If we use a string as a property key, it will show up in Object.keys, `for..in loops`, and `JSON.stringify`. This ***may expose or leak some internal or private data*** that we don't want to share. For example:

```js
const obj = {
  foo: "bar",
  _secret: "baz", // supposed to be a private property
};

console.log(Object.keys(obj)); // ["foo", "_secret"]
for (let key in obj) {
  console.log(key); // "foo", "_secret"
}
console.log(JSON.stringify(obj)); // "{\"foo\":\"bar\",\"_secret\":\"baz\"}"
```

- **Strings are accessible by normal methods**. If we use a string as a property key, it can be accessed by dot notation or bracket notation with the same string. This ***may allow other code to accidentally or maliciously access or modify the property***. For example:

```js
const obj = {
  foo: "bar",
  _secret: "baz", // supposed to be a private property
};

// Some other code
obj.foo = "qux"; // modifies the property
obj._secret = "quux"; // modifies the private property
console.log(obj.foo); // "qux"
console.log(obj._secret); // "quux"
console.log(obj["foo"]); // "qux"
console.log(obj["_secret"]); // "quux"
```

Symbols can avoid these drawbacks because they are ***unique, non-enumerable, and non-accessible*** by normal methods. For example:

```js
const sym = Symbol("foo");

// Use the symbol as a property key
const obj = {
  [sym]: "bar",
};

// The property is not enumerable by default. 
// Hacker can access `obj` but don't know it has `sym` in it
console.log(Object.keys(obj)); // []

// The property is not accessible by normal methods
console.log(obj.foo); // undefined
console.log(obj["foo"]); // undefined

// The symbol is unique and immutable
const sym2 = Symbol("foo");
console.log(sym === sym2); // false
// sym = Symbol("baz"); // TypeError: Assignment to constant variable.
```

</details>

### Enumerable vs Iterable
<details open>
<summary><h5>Enumerable vs Iterable</h5></summary>

| Enumerable | Iterable |
|------------|----------|
| Applies to properties | Applies to values |
| Depends on the internal enumerable flag | Depends on the implementation of Symbol.iterator or Symbol.asyncIterator method |
| Visited by methods that iterate over the object's own or inherited properties | Visited by methods that iterate over the values themselves |
| Examples: for..in loop, Object.keys, Object.values, Object.entries | Examples: for..of loop, spread syntax, Array.from |

Imagine you have a bookshelf that contains many books. Each book has a title, an author, a genre, and a number of pages. These are the properties of each book.

**Enumerable** means that you can ***list the properties of each book by looking at its cover*** or ***opening it***. For example, you can say "this book has a title, an author, a genre, and a number of pages". You can also list the properties of all the books on the shelf by scanning them one by one. For example, you can say "the first book has this title, the second book has this author, the third book has this genre, etc". This is ***like using a `for..in` loop*** or ***`Object.keys`*** to ***iterate over the properties of an object***.

**Iterable** means that you can ***read the contents of each book by turning its pages***. For example, you can say "this book starts with this sentence, then it continues with this paragraph, then it ends with this chapter". You can also read the contents of all the books on the shelf by opening them one by one. For example, you can say "the first book tells this story, the second book tells this story, the third book tells this story, etc". This is ***like using a `for..of` loop*** or ***spread syntax*** to ***iterate over the values of an iterable object***.

However, not all books are enumerable or iterable. Some books may have hidden properties that are not visible on the cover or inside. For example, a book may have a secret code or a hidden message that only the author knows. These are non-enumerable properties that cannot be listed by normal methods. Some books may not have pages that can be turned. For example, a book may be locked or glued together. These are non-iterable values that cannot be read by normal methods.

#### Example

An array is an iterable value, because it has a Symbol.iterator method that returns an iterator. However, its properties are not all enumerable, because some of them are hidden from methods that iterate over the properties, such as length and Symbol.iterator.

```js
const arr = [1, 2, 3];

// The array is iterable
for (let x of arr) {
  console.log(x); // 1, 2, 3
}

// The array's properties are not all enumerable
for (let key in arr) {
  console.log(key); // 0, 1, 2
}
console.log(Object.keys(arr)); // ["0", "1", "2"]
console.log(arr.length); // 3
console.log(arr[Symbol.iterator]); // [Function: values]
```

An object is a non-iterable value, because it does not have a Symbol.iterator method by default. However, its properties can be enumerable or not, depending on how they are defined.

```js
const obj = {
  foo: "bar",
  [Symbol("baz")]: "qux",
};

// The object is not iterable
for (let x of obj) {
  console.log(x); // TypeError: obj is not iterable
}

// The object's properties can be enumerable or not
for (let key in obj) {
  console.log(key); // foo
}
console.log(Object.keys(obj)); // ["foo"]
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(baz)]
console.log(obj[Symbol("baz")]); // undefined
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // qux
```
</details>

### Map vs Object
<details open>
<summary><h5>Map vs Object</h5></summary>

| Map | Object |
|-----|--------|
| Preserves insertion order of keys | Does not preserve insertion order of keys |
| Can use any value as a key | Can only use strings, numbers, or symbols as keys |
| Has a size property | Does not have a size property |
| Has built-in methods for adding, deleting, and checking keys | Does not have built-in methods for adding, deleting, and checking keys |

#### Example: 
Store a mapping between functions and their names:

```js
// Create a map
const functionNames = new Map();

// Use functions as keys
functionNames.set(function foo() {}, "foo");
functionNames.set(function bar() {}, "bar");

// Get the names using the functions
console.log(functionNames.get(function foo() {})); // "foo"
console.log(functionNames.get(function bar() {})); // "bar"

// Check if a function has a name
console.log(functionNames.has(function foo() {})); // true
console.log(functionNames.has(function baz() {})); // false

// Delete a function's name
functionNames.delete(function bar() {});
console.log(functionNames.size); // 1

```

</details>
