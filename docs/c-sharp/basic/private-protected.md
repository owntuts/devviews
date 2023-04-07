---
sidebar_position: 1000
sidebar_label: private protected
title: private protected In C# (C-Sharp)
slug: /private-protected-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What happens when you apply the `private protected` access modifier to a variable in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

  `private protected` is just the combination of `private` and `protected`. We can see what happen in the following example.
  
  ```cs
  using System;

  public class MyBaseClass
  {
      private protected int number = 0;
  }

  public class MyDerivedClass : MyBaseClass
  {
      public void DisplayNumber()
      {
          var baseObj = new MyBaseClass();
          // baseObj.number = 55; ---> leads to Error because number is private

          number = 65;  // number is accessible here because MyDerivedClass derives from MyBaseClass (because number is protected)
      }
  }
  ```

</details>