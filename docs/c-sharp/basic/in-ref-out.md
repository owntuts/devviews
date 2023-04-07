---
sidebar_position: 1000
sidebar_label: in vs ref vs out Modifiers
title: in vs ref vs out Modifiers in C#?
slug: /in-ref-out-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`in` vs `ref` vs `out` Modifiers in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

  The `in`, `ref`, and `out` modifiers are used to modify how parameters are passed to methods or functions.

  - `in`: read data from the outside
  - `out`: do something then pass data to the outside
  - `ref`: reference (sync) to the outside data

| Modifier | Parameter Type | Changes to Parameter | Initialized Beforehand | Must be Assigned a Value |
| --- | --- | --- | --- | --- |
| `in` | Value type (including `struct`) and ReadOnly reference type | No | Yes | N/A |
| `ref` | Any type | Yes | Yes | N/A |
| `out` | Any type | Yes | No | Yes |

#### The `in` modifier example

```cs
// Example usage of `in`
public static void DisplayPerson(in Person person)
{
    Console.WriteLine($"First Name: {person.FirstName}, Last Name: {person.LastName}");
}

// Usage
Person person1 = new Person("John", "Doe");
DisplayPerson(person1);

```
#### The `ref` modifier example

```cs
// Example usage of `ref`
public static void ChangeAge(ref Person person, int age)
{
    person.Age = age;
}

// Usage
Person person1 = new Person("John", "Doe");
ChangeAge(ref person1, 30);

```
#### The `out` modifier example

```cs
// Example usage of `out`
public static void Divide(int dividend, int divisor, out int quotient, out int remainder)
{
    quotient = dividend / divisor;
    remainder = dividend % divisor;
}

// Usage
int quotient, remainder;
Divide(10, 3, out quotient, out remainder);

```

</details>