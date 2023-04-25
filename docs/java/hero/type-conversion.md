---
sidebar_position: 1000
sidebar_label: Java Type Conversion
title: Java Type Conversion
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Java Type Conversion</h5></summary>

![Java Type Conversion](/img/interviews/java/type-conversion.png)

- **Widening Casting (automatically)** - converting a smaller type to a larger type size
`byte -> short -> int -> (long | float) -> double`
Ex:
```java
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double
System.out.println(myInt);      // Outputs 9
System.out.println(myDouble);   // Outputs 9.0
```
- **Narrowing Casting (manually)** - converting a larger type to a smaller size type
`double -> (float | long) -> int -> short -> byte`
Ex:
```java
double myDouble = 9.78;
int myInt = (int) myDouble; // Manual casting: double to int
System.out.println(myDouble);   // Outputs 9.78
System.out.println(myInt);      // Outputs 9
```

:::note Tips To Remember

`buy short [car] in (long | float) doubt`

:::

</details>

<details>
<summary><h5>Autoboxing and Unboxing</h5></summary>

Autoboxing and unboxing are two features of Java that allow ***automatic conversion between primitive types and their corresponding wrapper classes***. Wrapper classes are classes that wrap a primitive value in an object, such as Integer, Double, Character, etc.

- **Autoboxing** (wrapping) is the process of ***converting a primitive value to a wrapper object***. For example, assigning an int value to an Integer variable:

```java
int i = 10; // a primitive value
Integer j = i; // autoboxing
```

- **Unboxing** (unwrapping) is the process of ***converting a wrapper object to a primitive value***. For example, passing an Integer object to a method that expects an int parameter:

```java
Integer k = 20; // a wrapper object
int l = k; // unboxing
```

Autoboxing and unboxing are useful because they allow us to use primitive values and wrapper objects interchangeably. For example, we can use them with generics, collections, and methods that require objects as arguments or return values.

Here is an example that demonstrates autoboxing and unboxing in Java:

```java
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        // autoboxing: converting int to Integer
        int x = 100;
        Integer y = x;

        // unboxing: converting Integer to int
        Integer z = 200;
        int w = z;

        // using autoboxing and unboxing with generics
        List<Integer> list = new ArrayList<>();
        list.add(x); // autoboxing
        list.add(y);
        list.add(z);
        int sum = 0;
        for (Integer num : list) {
            sum += num; // unboxing
        }
        System.out.println("Sum: " + sum);

        // using autoboxing and unboxing with methods
        System.out.println("Square: " + square(x)); // autoboxing
        System.out.println("Cube: " + cube(y)); // unboxing

    }

    // a method that returns the square of an Integer object
    public static Integer square(Integer n) {
        return n * n;
    }

    // a method that returns the cube of an int value
    public static int cube(int n) {
        return n * n * n;
    }
}
```

The output of this program is:

```
Sum: 400
Square: 10000
Cube: 8000000
```

</details>
