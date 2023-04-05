---
sidebar_position: 1000
sidebar_label: Reference Variables In PHP
title: Reference Variables In PHP
slug: /reference-variables-in-php
tags:
  - Basic PHP Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Can you explain the difference among `$a vs &$a vs $$a?` in PHP?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
`$a` represents a regular variable in PHP, which means that it stores a value that can be directly accessed or modified.
```php
$a = 10;
```
`&$a` represents a ***reference variable*** in PHP, which means that it does not store a value directly but rather ***refers to the memory address*** of a regular variable.
```php
$a = 10;
$b = &$a;
// asign value
$b = 20;
echo $a; // Output: 20
```
`$$a` is a type of variable called a ***variable variable*** in PHP. In variable variables, the ***name of the variable is determined*** by the value of another variable.
```php
$a = 'b';
$$a = 10;
echo $b; // Output: 10
```

</details>