---
sidebar_position: 1000
sidebar_label: protected internal
title: protected internal In C# (C-Sharp)
slug: /protected-internal-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain `protected internal` in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  The `protected internal` access modifier combines the functionalities of `protected` and `internal` access modifiers.

  - `protected` means variable can be used in derived class
  - `internal` means it can be used in the same namespace

```cs
namespace MyNamespace
{
    public class MyBaseClass
    {
        protected internal int number = 42;
    }

    public class MyDerivedClass : MyBaseClass
    {
        public void Access()
        {
            var baseObj = new MyBaseClass();
            baseObj.number = 44; // can modify variable here because it's internal (in the same namespace)
        }
    }
}

// Program.cs

using MyNamespace;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            MyBaseClass myBaseClass = new MyBaseClass();
            myBaseClass.number = 45; // Error, because it's internal (can't be modified outside it's name space)

            MyDerivedClass myDerivedClass = new MyDerivedClass();
            myDerivedClass.number = 56; // it's ok because it's protected can be modified in derived class
        }
    }
}

```
</details>