---
sidebar_position: 1000
sidebar_label: Boxing vs Unboxing
title: Difference Between Dynamic type vs Object type variables In C# (C-Sharp)
slug: /dynamic-type-vs-object-type-variables-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please tell the diference between Between **Dynamic type** vs **Object type** variables In C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  - **object type** is an alias for `System.Object` in .NET. All types in .Net inherit directly or indirectly from `System.Object`. So, you can assign values of any type to variables of type object.  <u>***Type checking*** for object type variables takes place ***at compile time***</u>. 
  - **Dynamic types** are similar to object types. But <u>dynamic type is not resolved or type checked at compile time</u>. ***At run time***, dynamic type is converted to object type.

  ```cs
  dynamic dyn = 1;
  object obj = 1;
  dyn = dyn + 3; // throw error at run time
  obj = obj + 3; // throw error at compile time
  ```

</details>