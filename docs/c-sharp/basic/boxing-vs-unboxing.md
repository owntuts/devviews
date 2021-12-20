---
sidebar_position: 1000
sidebar_label: Boxing vs Unboxing
title: Differences Between Boxing vs Unboxing In C# (C-Sharp)
slug: /differences-boxing-vs-unboxing-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are Differences between **Boxing** vs **Unboxing** in C#? and caveat when using both?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  There are two types of ***converting*** a value of this type to other type. That's **Boxing** & **Unboxing**.

  - **Boxing** means converting a ***value type*** to ***object type*** or to an ***interface*** type by wraping the value inside a `System.Object` instance and stores it on the managed heap.

  ```csharp
  int i = 123;
  // boxing i (wrapping i in an object).
  object o = i;
  ```
  
  - **Unboxing**: is the reverse process that extracts the value type from the object.
  
  ```cs
  o = 123;
  // unboxing (extracts the value o)
  i = (int)o;  
  ```

|Boxing|Unboxing|
|------|--------|
|Implicit Conversion|Explicit Conversion|
|Convert Value Type to Reference| Convert Reference Type to Value Type|

### Performance Caveat
Boxing & Unboxing is expensive computationally due to allocating/unallocating & contruction/deconstruction of the object used for Boxing/Unboxing.

</details>