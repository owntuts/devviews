---
sidebar_position: 1000
sidebar_label: Const vs define In PHP
title: Const vs define  In PHP
slug: /const-vs-define-in-php
tags:
  - Basic PHP Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`const` vs `define()` in PHP?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
In PHP, both `const` and `define()` can be used to define constants, but they have some differences:


|     | **`const`** | **`define()`**                            |
|-------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Scope       | Define constants at class or namespace level                      | Define constants at the global level                      |
| Data types  | Only used to define scalar values                                 | Can be used for scalar or non-scalar values               |
| Performance | Faster as constants are processed at compile-time                 | Slower as constants are processed at runtime              |
| Conditional | Cannot be defined conditionally as it's processed at compile-time | Can be defined conditionally as it's processed at runtime |

Here's an example that demonstrates the use of `const` and `define()`:
```php
const MY_CONST = 'Hello, World!';
define('MY_DEFINE', 'Hi, World!');

echo MY_CONST;    // Outputs "Hello, World!"
echo MY_DEFINE;   // Outputs "Hi, World!"

// Defining a constant with a non-scalar value using define()
define('MY_ARRAY', [1, 2, 3]);
echo MY_ARRAY[0]; // Outputs 1

// Using const inside a class
class MyClass {
    const MY_CLASS_CONST = 'Hello, Class!';
    
    public function myMethod() {
        echo self::MY_CLASS_CONST;
    }
}

$obj = new MyClass();
$obj->myMethod();  // Outputs "Hello, Class!"

```

</details>