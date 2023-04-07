---
sidebar_position: 1000
sidebar_label: deligate
title: deligate In C# (C-Sharp)
slug: /deligate-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about `delegate` in c#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
In C#, a delegate is a type that represents references to methods with a specific signature. Delegates are similar to function pointers in C and C++, but with some additional features.

Here are some key points to understand about delegates:

- A delegate is a reference type.
- Delegates are used to ***define method signatures*** that can be assigned to variables and passed as method arguments.
- Delegates can be used to ***implement callback*** functionality, where a method is called in response to an event or some other trigger.
- Delegates can reference static or instance methods.
- Delegates can be ***multicast***, meaning that they can reference multiple methods that will be called in sequence when the delegate is invoked.
- Delegates can be ***chained*** together using the `+` and `-` operators to add or remove methods from the invocation list.
- A delegate instance is ***immutable***, so adding or removing a method from a delegate returns a new delegate instance with the modified invocation list.

Here is an example of how to use a delegate in C#:

```cs
// Define a delegate type
public delegate void MyDelegate(int x);

// Create a method to be referenced by the delegate (method signature)
public void MyMethod(int x)
{
    Console.WriteLine($"MyMethod was called with argument {x}");
}

// Create a delegate instance that references the method
MyDelegate myDelegate = new MyDelegate(MyMethod);
// or
// MyDelegate myDelegate = MyMethod;

// Invoke the delegate
myDelegate(42); // The output will be "MyMethod was called with argument 42"

```

#### Chained Delegate

```cs
// Define a delegate type
public delegate void MyDelegate();

// Define method 1
public void Method1()
{
    Console.WriteLine("Method 1");
}

// Define method 2
public void Method2()
{
    Console.WriteLine("Method 2");
}

// Create a delegate instance that chains together Method1 and Method2
MyDelegate myDelegate = new MyDelegate(Method1);
myDelegate += Method2;

// Invoke the delegate
myDelegate(); // The output will be "Method 1" followed by "Method 2"

// using reference 
foreach (MyDelegate fnc in myDelegate.GetInvocationList())
{
    Console.WriteLine(fnc());
}

```

</details>