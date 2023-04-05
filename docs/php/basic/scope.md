---
sidebar_position: 1000
sidebar_label: Scope In PHP
title: Scope In PHP
slug: /scope-in-php
tags:
  - Basic PHP Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about variable's scope in PHP?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
In PHP, a variable's scope refers to the area of the code where the variable can be accessed and used. There are three main types of variable scope in PHP:

**Global Scope**: A variable defined in the global scope can be accessed from anywhere in the PHP code, including inside functions and classes.
Example:

```php
function testFunction() {
  $localVar = "This is a local variable.";
  echo $localVar; // This will output "This is a local variable."
}
testFunction();

echo $localVar; // This will throw an error: "Notice: Undefined variable: localVar"

```
**Local Scope**: A variable defined in the local scope (inside a function or method) can only be accessed from within that function or method.
Example:
```php
function testFunction() {
  $localVar = "This is a local variable.";
  echo $localVar; // This will output "This is a local variable."
}
testFunction();

echo $localVar; // This will throw an error: "Notice: Undefined variable: localVar"
```

**Static Scope**: A static variable is one that retains its value between function calls. It is defined within a function or method, but retains its value even after the function or method has finished executing.

```php
function counter() {
  static $count = 0;
  $count++;
  echo $count;
}

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

</details>