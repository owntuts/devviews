---
sidebar_position: 1000
sidebar_label: init vs readonly
title: init vs readonly In C# (C-Sharp)
slug: /init-vs-readonly-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`init` vs `readonly` in c#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  Both `init` and `readonly` are used to ensure that a field's value can only be initialized once and cannot be changed afterwards (***immutable***). However, there are some differences between the two modifiers.

| Modifier | Applicable to | Value Assigned | Value Changeable |
| --- | --- | --- | --- |
| `init` | Properties and fields | During object construction & object initializer only | No |
| `readonly` | Fields only | During object construction only | No |

#### Example of `init` in constructor
```cs
public class Person
{
    public string Name { get; init; }

    // set variable in constructor
    public Person(string name)
    {
        Name = name;
    }
}

var person = new Person("John");
person.Name = "Jane"; // This will cause a compile-time error
```
#### Example of `init` in object initializer

```cs
public class Person
{
  public string Name {get; init;}
}

var person = new Person
{
  // set variable in object initializer
  Name = "Jane"
}
```

#### Example of `readonly` in constructor
```cs
public class Circle
{
    private readonly double _radius;

    // set variable in constructor, can't be change later
    public Circle(double radius)
    {
        _radius = radius;
    }

    public double CalculateArea()
    {
        _radius = 1; // result in error
    }
}
```

</details>