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
