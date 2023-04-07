---
sidebar_position: 1000
sidebar_label: new vs override
title: new vs override In C# (C-Sharp)
slug: /new-vs-override
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`new` vs `override` method in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

- `new` are used for method hiding
- `override` are used for method overriding,

|  | `new` | `override` |
| --- | --- | --- |
| Method hiding | Yes, the method with the same name in the base class is hidden | No, the method with the same name in the base class is not hidden |
| Method overriding | No, a new implementation of the method is created in the derived class | Yes, a new implementation of the method replaces the implementation in the base class |
| Signature | Can have a different signature from the method in the base class | Must have the same signature as the method in the base class |
| Polymorphism | Method resolution depends on the object type that is used to call it | Method resolution is always the current implementation of the method in the derived class |
| Use case | Used to provide a new implementation of a method that is not intended to replace the implementation in the base class | Used to customize the behavior of an inherited method and provide functionality that is specific to the derived class |
| Syntax | `public new returnType MethodName(parameters) { ... }` | `public override returnType MethodName(parameters) { ... }` |

#### Here's an example of using `new`:
```cs
public class BaseClass
{
    public virtual void SayHello()
    {
        Console.WriteLine("Hello from BaseClass");
    }
}

public class DerivedClass : BaseClass
{
    public new void SayHello()
    {
        Console.WriteLine("Hello from DerivedClass");
    }
}

// Usage
BaseClass obj1 = new DerivedClass();
obj1.SayHello(); // Output: "Hello from BaseClass"

DerivedClass obj2 = new DerivedClass();
obj2.SayHello(); // Output: "Hello from DerivedClass"
```

#### Here's an example of using `override`:
```cs
public class BaseClass
{
    public virtual void SayHello()
    {
        Console.WriteLine("Hello from BaseClass");
    }
}

public class DerivedClass : BaseClass
{
    public override void SayHello()
    {
        Console.WriteLine("Hello from DerivedClass");
    }
}

// Usage
BaseClass obj1 = new DerivedClass();
obj1.SayHello(); // Output: "Hello from DerivedClass"

DerivedClass obj2 = new DerivedClass();
obj2.SayHello(); // Output: "Hello from DerivedClass"

```

</details>