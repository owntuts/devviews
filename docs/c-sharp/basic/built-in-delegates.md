---
sidebar_position: 1000
sidebar_label: Built-in delegates
title: Built-in delegates In C# (C-Sharp)
slug: /built-in-delegates-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Built-in delegates in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  C# has some built-in delegates that make it easy to create and work with delegates. Here are the four built-in delegates in C#:

| Delegate | Description | Example |
| --- | --- | --- |
| `Action` | Represents a method that takes no parameters and returns no value. | `Action printMessage = () => Console.WriteLine("Hello World!");` This creates an `Action` delegate called `printMessage` that will print out "Hello World!" when called. |
| `Func` | Represents a method that takes one or more parameters and returns a value. | `Func addAndFormat = (a, b) => $"The sum of {a} and {b} is {a + b}.";` This creates a `Func` delegate called `addAndFormat` that will take two `int` parameters and return a formatted `string` with their sum. |
| `Predicate` | Represents a method that takes one parameter and returns a boolean value. | `Predicate isEven = (x) => x % 2 == 0;` This creates a `Predicate` delegate called `isEven` that will return `true` if the input integer is even, and `false` otherwise. |
| `EventHandler` | Represents a method that handles an event. | `public event EventHandler MyEvent;` This creates an `event` that can be subscribed to with an `EventHandler` delegate. When the event is raised, all registered handlers will be called. |

:::note
There's `Action<>` is another built-in delegate in C# that is similar to `Action`, but allows for methods that take one or more arguments.

```cs
Action<int, string> logData = (id, message) => Console.WriteLine($"ID: {id}, Message: {message}");
logData(123, "An important message");

```
:::

</details>