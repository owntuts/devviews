---
sidebar_position: 1000
sidebar_label: Block Scope and function scope In PHP
title: Block Scope and function scope In PHP
slug: /block-function-scope-in-php
tags:
  - Basic PHP Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Is there function scope & block scopoe in PHP?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
In PHP, only variables have scope, not functions. However, there is a concept of block scope for conditional statements and loops.
Example:

```php
$globalVar = "This is a global variable.";

if (true) {
  $blockVar = "This is a block variable.";
  echo $globalVar; // This will output "This is a global variable."
  echo $blockVar; // This will output "This is a block variable."
}

echo $globalVar; // This will output "This is a global variable."
echo $blockVar; // This will throw an error: "Notice: Undefined variable: blockVar"
```

:::note
Note that since PHP 7, support for the `use` keyword has been added to create closures with inheritable variables. This allows for variables to be used within a function that are defined outside of it. However, this feature does not create a new scope for variables.

```php
$multiplier = 10;

$myClosure = function ($num) use ($multiplier) {
    return $num * $multiplier;
};

echo $myClosure(5); // Output: 50

```
:::

</details>