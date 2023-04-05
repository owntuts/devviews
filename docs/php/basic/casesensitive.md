---
sidebar_position: 1000
sidebar_label: Case Sensitive In PHP
title: Case Sensitive In PHP
slug: /case-sensitive-in-php
tags:
  - Basic PHP Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Is PHP a case-sensitive language?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
PHP is a a partial case-sensitive language. The variable names are completely case-sensitive but function names are not

```php
$myVar = 'foo';
$MyVar = 'bar';

echo $myVar; // Output: 'foo'
echo $MyVar; // Output: 'bar'
```

```php
function myFunction() {
  // ...
}

myFunction(); // correct
MyFunction(); // same

```

</details>