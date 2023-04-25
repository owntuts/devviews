---
sidebar_position: 1000
sidebar_label: Scopes In Java
title: Scopes In Java
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Scopes In Java</h5></summary>

Scope in Java refers to the region of the program where a variable or a method is accessible. Scope determines the visibility and lifetime of a variable or a method.

There are three types of scope in Java:

- **Method scope**: Variables declared inside a method are only accessible within that method. They are created when the method is invoked and destroyed when the method returns.
- **Block scope**: Variables declared inside a block of code (between curly braces) are only accessible within that block. They are created when the block is entered and destroyed when the block is exited.
- **Class scope**: Variables declared inside a class (also known as instance variables or fields) are accessible by all methods in that class. They are created when an object of the class is instantiated and destroyed when the object is garbage collected.

In addition to scope, Java also has access modifiers that restrict the accessibility of variables and methods to other classes. There are four access modifiers in Java:

- `private`: The most restrictive modifier. It limits access to variables and methods to the class in which they are declared. It is used to hide implementation details and enforce encapsulation.
- `default`: The modifier that is applied when no other modifier is specified. It allows access to variables and methods only from within the same package.
- `protected`: A modifier that allows access to variables and methods only from within the same package or from subclasses in other packages.
- `public`: The least restrictive modifier. It allows access to variables and methods from anywhere in the program.

</details>

<details>
<summary><h5>Static Block vs Non-static Block</h5></summary>

Static block and non-static block are two types of initializer blocks in Java. They are used to ***initialize variables or execute some code before the constructor is called***.

| **Static Block** | **Non-static Block** |
|--------------|------------------|
| A block of code that is preceded by the static keyword | A block of code that is not preceded by any keyword |
| Executed only once when the class is loaded into memory | Executed every time an object of the class is created |
| Can access only static variables and methods | Can access both static and instance variables and methods |
| Executed before the main method | Executed after the super constructor and before the current constructor |

#### Here is a simple class that uses both types of blocks:

```java
public class Example {

    // a static variable
    private static int count;

    // a non-static variable
    private String name;

    // a static block
    static {
        System.out.println("Static block is executed");
        count = 10; // initialize the static variable
    }

    // a non-static block
    {
        System.out.println("Non-static block is executed");
        name = "Example"; // initialize the non-static variable
    }

    // a constructor
    public Example() {
        System.out.println("Constructor is executed");
        System.out.println("Name: " + name);
        System.out.println("Count: " + count);
    }

    // a main method
    public static void main(String[] args) {
        System.out.println("Main method is executed");
        Example ex1 = new Example(); // create the first object
        Example ex2 = new Example(); // create the second object
    }
}
```

The output of this program is:

```
Static block is executed
Main method is executed
Non-static block is executed
Constructor is executed
Name: Example
Count: 10
Non-static block is executed
Constructor is executed
Name: Example
Count: 10
```

As you can see, the static block is executed only once when the class is loaded, before the main method. The non-static block is executed twice, once for each object creation, before the constructor. The constructor is also executed twice, once for each object creation, after the non-static block.

</details>

<details>
<summary><h5>Static vs dynamic binding</h5></summary>

Static binding and dynamic binding are two types of binding in Java. Binding refers to ***the process of linking a method call with its implementation***.

- **Static binding** (also called early binding) is when the compiler resolves the method call ***at compile time***. It uses the type information of the reference variable to determine which method to invoke. Static binding is used for private, final, and static methods and variables.

- **Dynamic binding **(also called late binding) is when the JVM resolves the method ***call at runtime***. It uses the type information of the actual object to determine which method to invoke. Dynamic binding is used for virtual methods (which are all non-static methods in Java by default).

The main differences between static binding and dynamic binding are:

| Static Binding | Dynamic Binding |
|----------------|-----------------|
| Occurs at compile time | Occurs at runtime |
| Uses reference type | Uses object type |
| Faster | Slower |
| Supports method overloading | Supports method overriding |
| Used for private, final, and static methods and variables | Used for virtual methods |

Here is an example that demonstrates static binding and dynamic binding in Java:

```java
public class Animal {
    public static void eat() {
        System.out.println("Animal eats");
    }

    public void sleep() {
        System.out.println("Animal sleeps");
    }
}

public class Dog extends Animal {
    public static void eat() {
        System.out.println("Dog eats");
    }

    @Override
    public void sleep() {
        System.out.println("Dog sleeps");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a1 = new Animal();
        Animal a2 = new Dog();

        a1.eat(); // static binding
        a2.eat(); // static binding

        a1.sleep(); // dynamic binding
        a2.sleep(); // dynamic binding
    }
}
```

The output of this program is:

```
Animal eats
Animal eats
Animal sleeps
Dog sleeps
```

As you can see, the eat() method is resolved by static binding, because it is a static method. The compiler uses the reference type (Animal) to determine which eat() method to call. Therefore, both a1 and a2 invoke the eat() method of Animal class.

The sleep() method is resolved by dynamic binding, because it is a virtual method. The JVM uses the object type (Animal or Dog) to determine which sleep() method to call. Therefore, a1 invokes the sleep() method of Animal class, while a2 invokes the sleep() method of Dog class.

:::note

- `private`, `final` and `static` methods and variables -> can't be overiden -> ***use static binding*** and are bonded by compiler 
- `overloaded` methods are bonded using ***static binding ***
- `overridden`, `virtual` methods are bonded using ***dynamic binding*** at runtime.

:::

</details>

<details>
<summary><h5>Instance initializer block</h5></summary>

An instance initializer block in Java is a block of code that is placed inside a class but outside any method or constructor. It is used to ***initialize the instance variables of the class. It runs every time an object of the class is created***. The Java compiler copies the instance initializer block in every constructor of the class ***after the first statement `super()`***. For example:

```java
class Bike {
    int speed; // instance variable
    // instance initializer block
    {
        speed = 100;
    }
    Bike() {
        System.out.println("speed is " + speed);
    }
    public static void main(String[] args) {
        Bike b1 = new Bike(); // creates an object and invokes constructor
        Bike b2 = new Bike(); // creates another object and invokes constructor
    }
}
```

Output:

```text
speed is 100
speed is 100
```

</details>
