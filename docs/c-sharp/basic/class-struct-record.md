---
sidebar_position: 1000
sidebar_label: class vs struct vs record
title: class vs struct vs record in C-Sharp
slug: /class-struct-record
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`class` vs `struct` vs `record` in C#? Give an example using `record`?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

Here's a summary of the differences between the three types:

| **Type**   | **Allocation** | **Access** | **Inheritance** | **Mutability** |
|------------|----------------|------------|-----------------|----------------|
| **Class**  | Heap           | Reference  | Yes             | Mutable        |
| **Struct** | Stack          | Value      | No              | Mutable        |
| **Record** | Heap           | Reference  | No              | Immutable      |

In general, use a `class` when you need complex behavior, inheritance, and references, use a `struct` when you need a simple data container that can be passed around by value, and use a `record` when you need an immutable data container with some additional functionality.

#### An example of how to define and use a `record` in C#:
```cs
using System;

public class MyClass
{
    public record Person(string Name, int Age);

    public static void Main(string[] args)
    {
        Person person = new Person("John Smith", 30);

        // Accessing values of a record
        string name = person.Name; // "John Smith"
        int age = person.Age; // 30

        // Attempt to update the object
        // This won't work because records are immutable
        // person.Age = 31;

        // Creating a new Person record with updated age
        Person updatedPerson = person with { Age = 31 };
        Console.WriteLine(updatedPerson.Age); // Output: 31
    }
}

```

</details>