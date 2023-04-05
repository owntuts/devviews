---
sidebar_position: 1000
sidebar_label: Final vs Constant In PHP
title: Final vs Constant In PHP
slug: /final-vs-constant-in-php
tags:
  - Basic PHP Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`final` vs `const` in PHP?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
In PHP, both `final` and `const` (short for constant) can be used to define constants within a class, but they have different purposes and use cases.


`final`: When applied to a class, it means that ***no other class can inherit*** from it and extend its behavior. When applied to a method, it means that ***no subclass can override*** the method and change its behavior. Here's an example:

```php
class BaseClass {
    public final function myFinalMethod() {
        // do something
    }
}

class SubClass extends BaseClass {
    // This would result in an error because `myFinalMethod()` cannot be overridden
    public function myFinalMethod() { 
        // do something else
    }
}
```
On the other hand, `const` is used to define a constant value that ***cannot be changed at runtime***. Constants declared with `const` are always considered public and cannot be redefined or undefined once defined. Here's an example:
```php
class MyClass {
    const MY_CONSTANT = 42;
}

// Accessing the constant using the class name
echo MyClass::MY_CONSTANT; // Outputs 42
```

</details>