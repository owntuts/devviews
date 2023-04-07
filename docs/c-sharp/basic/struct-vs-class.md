---
sidebar_position: 1000
sidebar_label: struct vs class
title: struct vs class In C# (C-Sharp)
slug: /struct-vs-class.md-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`struct` vs `class` In C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  In C#, `struct` and `class` are two user-defined data types that can be used to define and create objects. Here are some key differences between `struct` and `class`:

| Feature | Struct | Class |
| --- | --- | --- |
| Definition and Usage | Value type, allocated on the stack | Reference type, allocated on the heap |
| Inheritance | Cannot inherit from other structs or classes, cannot be used as a base for any other type | Can inherit from other classes and can be used as a base for other classes |
| Default Values | Initialized to default value | Initialized to `null` |
| Performance | Faster creation and destruction, larger structs can have significant impact on performance due to copying required when passed as parameters | Slower creation and destruction, but memory allocation is more flexible |
| Boxing and Unboxing | Not subject to boxing and unboxing | Subject to boxing and unboxing when passed as an `object` parameter or when used in collections |

```cs
// Struct example
struct PointStruct
{
    public int x, y;
}

// Class example
class PointClass
{
    public int x, y;
}

// Usage examples
PointStruct p1 = new PointStruct();
p1.x = 1;
p1.y = 2;
Console.WriteLine(p1.x + ", " + p1.y); // Output: 1, 2

PointClass p2 = new PointClass();
p2.x = 1;
p2.y = 2;
Console.WriteLine(p2.x + ", " + p2.y); // Output: 1, 2

```

</details>