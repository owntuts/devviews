---
sidebar_position: 1000
sidebar_label: Covariance in delegate
title: Covariance in delegate In C# (C-Sharp)
slug: /covariance-in-delegate-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
explain Covariance in delegate in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  When you assign a method to a delegate, the method signature does not have to match the delegate type exactly. It can be Covariance of deligate type insteads.

  #### Example

  ```cs
  class Parent { }
  class Child : Parent { }
  delegate Parent CovarianceDelegate(); // the delegate's return type is the base class
  static Child CovarianceMethod() // the method's return type is the derived class
  {
      return new Child();
  }
  ​
  static void Main(string[] args)
  {
      CovarianceDelegate delegateObject = CovarianceMethod;
      Parent result = delegateObject();
      
      /*
          cast is needed if you want to hold the return value in an instance of the derived class e.g.:
          Child result = (Child)result(); or Child result = result() as Child;
      */
  }
  ```


</details>