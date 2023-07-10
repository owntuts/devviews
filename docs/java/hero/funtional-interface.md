---
sidebar_position: 1000
sidebar_label: Functional Interface
title: Functional Interface
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Functional Interface</h5></summary>

**A functional interface** can have any number of default or static methods, but only one abstract method. A functional interface can also declare methods of the Object class, such as equals or toString. A functional interface is also known as a **Single Abstract Method (SAM) interface**.

A functional interface can be annotated with `@FunctionalInterface` annotation. However, this annotation is not mandatory, and the compiler will treat any interface with one abstract method as a functional interface.

A functional interface ***can be used as the target type of a lambda expression*** or a method reference, which are concise ways of creating ***anonymous*** implementations of the interface. For example:

```java
// A functional interface with one abstract method
@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

// A lambda expression that implements the interface
Greeting greeting = name -> System.out.println("Hello, " + name);

// A method reference that implements the interface
Greeting greeting2 = System.out::println;

// Calling the abstract method using the lambda expression
greeting.sayHello("John");

// Calling the abstract method using the method reference
greeting2.sayHello("Jane");
```

Output:

```text
Hello, John
Jane
```

Some examples of functional interfaces in Java are:

- `Runnable`: Represents an action that can be run ***without any argument***s and ***returns no result***.
- `Predicate<T>`: Represents a ***boolean-valued function*** of ***one argument***.
- `Function<T,R>`: Represents a function that accepts ***one argumen***t and produces ***a result.***
- `Consumer<T>`: Represents an operation that accepts ***one argument*** and returns ***no result***.
- `Supplier<T>`: Represents a ***supplier of results*** that takes ***no arguments***.
- `Comparator<T>`: Represents a comparison function that ***compares two objects of the same type***.

</details>

<details>
<summary><h5>Predicate</h5></summary>

A Predicate in Java is a functional interface that represents a boolean-valued function of one argument. It is defined in the `java.util.function` package.

```java
Predicate<String> isEmpty = s -> s.isEmpty(); // lambda expression
Predicate<String> isNull = Objects::isNull; // method reference
System.out.println(isEmpty.test("")); // true
System.out.println(isNull.test(null)); // true
```

A Predicate also has some default methods that can be used to compose more complex predicates from existing ones. These methods are:

- `and` (Predicate other): returns a predicate that represents the logical AND of this predicate and another.
- `or` (Predicate other): returns a predicate that represents the logical OR of this predicate and another.
- `negate`: returns a predicate that represents the logical negation of this predicate.

For example:

```java
Predicate<String> isNotNull = isNull.negate(); // not null
Predicate<String> isNotEmpty = isEmpty.negate(); // not empty
Predicate<String> isNotNullOrEmpty = isNotNull.and(isNotEmpty); // not null and not empty
System.out.println(isNotNullOrEmpty.test("Hello")); // true
System.out.println(isNotNullOrEmpty.test(null)); // false
System.out.println(isNotNullOrEmpty.test("")); // false
```

A Predicate also has a static method `isEqual(Object targetRef)` that returns a predicate that tests if two arguments are equal according to `Objects.equals(Object, Object)`. For example:

```java
Predicate<String> isEqualToHello = Predicate.isEqual("Hello"); // equal to "Hello"
System.out.println(isEqualToHello.test("Hello")); // true
System.out.println(isEqualToHello.test("World")); // false
```
</details>

<details>
<summary><h5>Runnable</h5></summary>

Runnable is a functional interface that has a single abstract method run () that takes no arguments and returns no result. Runnable is ***used to create a task that can run in parallel with the main thread or other threads***.

For example:

```java
// Create a Runnable object using a lambda expression
Runnable task = () -> {
    // Task logic
    System.out.println("Hello from " + Thread.currentThread().getName());
};

// Create a Thread object and pass the Runnable object
Thread thread = new Thread(task);

// Start the thread
thread.start();

// Output: Hello from Thread-0
```

</details>

<details>
<summary><h5>Callable</h5></summary>

`Callable` is an interface that represents a task that can be executed by a thread in Java. It has a single method `call()` that defines the logic of the task and returns a value or throws an exception.

Some of the features and benefits of using Callable are:

- `Callable` is a generic interface, so it can accept and return any type of value. It is suitable for tasks that need to produce a result or handle a checked exception.
- `Callable` was introduced in Java 1.5 as an ***improvement over `Runnable`***, which does not return any value or throw any checked exception.
- `Callable` instances can be combined with `Future` and `FutureTask` classes to obtain the result of the task asynchronously and cancel the task if needed.

Here is an example of creating and running a Callable task using a lambda expression:

```java
// Create a Callable task
Callable<Integer> task = () -> {
    // Do some work
    return 42;
};

// Run the task using an ExecutorService
ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(task);
executor.shutdown();

// Get the result of the task
try {
    Integer result = future.get();
    System.out.println("Result: " + result);
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}
```

</details>

<details>
<summary><h5>Function</h5></summary>

`Function<T,R> `functional interface in Java is an interface that represents a function that accepts one argument of type T and produces a result of type R.

The functions of Function<T,R> interface are:

- `apply(T t)`: This is the abstract method that takes an argument of type T and returns a value of type R. It defines the logic of the function.
- `andThen(Function<? super R,? extends V> after)`: This is a default method that returns a composed function that first applies this function to its input, and then applies the after function to the result. It can be used to chain multiple functions together.
- `compose(Function<? super V,? extends T> before)`: This is a default method that returns a composed function that first applies the before function to its input, and then applies this function to the result. It can be used to create a function from other functions.
- `identity()`: This is a static method that returns a function that always returns its input argument. It can be used as a no-op function.

For example:

```java
// Import the Function interface
import java.util.function.Function;

// Create some Function objects using lambda expressions
Function<String, Integer> lengthFunction = s -> s.length(); // returns the length of a string
Function<Integer, Integer> squareFunction = x -> x * x; // returns the square of an integer
Function<String, String> upperFunction = s -> s.toUpperCase(); // returns the upper case of a string

// Apply the functions to some arguments
System.out.println(lengthFunction.apply("Hello")); // 5
System.out.println(squareFunction.apply(4)); // 16
System.out.println(upperFunction.apply("world")); // WORLD

// Compose the functions using andThen and compose methods
Function<String, Integer> lengthSquareFunction = lengthFunction.andThen(squareFunction); // returns the square of the length of a string
Function<Integer, String> squareUpperFunction = squareFunction.andThen(upperFunction); // returns the upper case of the square of an integer
Function<String, String> upperLengthFunction = lengthFunction.compose(upperFunction); // returns the length of the upper case of a string

// Apply the composed functions to some arguments
System.out.println(lengthSquareFunction.apply("Hello")); // 25
System.out.println(squareUpperFunction.apply(4)); // 16
System.out.println(upperLengthFunction.apply("world")); // 5

// Use the identity function
Function<String, String> identityFunction = Function.identity(); // returns the same string
System.out.println(identityFunction.apply("Hello")); // Hello
```

</details>


<details>
<summary><h5>Consumer</h5></summary>

`Consumer<T>` is a functional interface that represents an operation that ***accepts/comsumes*** a single input argument of type T and returns no result.

The functions of `Consumer<T>` interface are:

- `accept(T t)`: This is the abstract method that takes an argument of type T and performs some action on it. It defines the logic of the operation.
- `andThen(Consumer<? super T> after)`: This is a default method that returns a composed consumer that performs this operation followed by the after operation. It can be used to ***chain multiple consumers together***.
- For example:

```java
// Import the Consumer interface
import java.util.function.Consumer;

// Create some Consumer objects using lambda expressions
Consumer<String> printConsumer = s -> System.out.println(s); // prints a string
Consumer<String> lengthConsumer = s -> System.out.println(s.length()); // prints the length of a string
Consumer<String> upperConsumer = s -> System.out.println(s.toUpperCase()); // prints the upper case of a string

// Apply the consumers to an argument
printConsumer.accept("Hello"); // Hello
lengthConsumer.accept("Hello"); // 5
upperConsumer.accept("Hello"); // HELLO

// Compose the consumers using andThen method
Consumer<String> printLengthConsumer = printConsumer.andThen(lengthConsumer); // prints a string and its length
Consumer<String> printUpperConsumer = printConsumer.andThen(upperConsumer); // prints a string and its upper case
Consumer<String> printLengthUpperConsumer = printConsumer.andThen(lengthConsumer).andThen(upperConsumer); // prints a string, its length and its upper case

// Apply the composed consumers to an argument
printLengthConsumer.accept("Hello"); // Hello 5
printUpperConsumer.accept("Hello"); // Hello HELLO
printLengthUpperConsumer.accept("Hello"); // Hello 5 HELLO
```

</details>

<details>
<summary><h5>Supplier</h5></summary>

`Supplier<T>` is a functional interface that represents ***a supplier of results*** (it produces/supplies result). It is a functional interface that ***has a single abstract method `get()`*** that takes no arguments and returns a value of type T.

For example:

```java
// Import the Supplier interface
import java.util.function.Supplier;

// Create a Supplier object using a lambda expression
Supplier<String> helloSupplier = () -> "Hello";

// Get the result from the supplier
String result = helloSupplier.get();

// Print the result
System.out.println(result);

// Output: Hello
```
</details>

<details>
<summary><h5>Comparator</h5></summary>

`Comparator<T>` is a functional interface that represents ***a comparison function that compares two objects of the same type***.

The functions of `Comparator<T>` interface are:

- `compare(T o1, T o2)`: This is the abstract method that takes two arguments of type T and returns an int value that indicates their order. It ***defines the logic of the comparison function***.
- `reversed()`: This is a default method that returns a comparator that imposes the reverse order of this comparator. It can be used to sort a collection in descending order.
- `thenComparing(Comparator<? super T> other)`: This is a default method that returns a lexicographic-order comparator that compares two objects by first applying this comparator and then applying the other comparator if the first comparison is equal. It can be used to sort a collection by multiple criteria.
- `naturalOrder()`: This is a static method that returns a comparator that compares two objects according to their natural order. It can be used to sort a collection of objects that implement Comparable interface.
- `nullsFirst(Comparator<? super T> comparator)`: This is a static method that returns a comparator that considers null values to be less than any non-null values and compares non-null values using the specified comparator. It can be used to sort a collection that may contain null values.

For example:

```java
// Import the Comparator interface
import java.util.Comparator;

// Create some Comparator objects using lambda expressions
Comparator<String> lengthComparator = (s1, s2) -> s1.length() - s2.length(); // compares two strings by their lengths
Comparator<String> alphaComparator = (s1, s2) -> s1.compareTo(s2); // compares two strings by their alphabetical order
Comparator<String> reverseComparator = lengthComparator.reversed(); // reverses the order of lengthComparator
Comparator<String> lengthAlphaComparator = lengthComparator.thenComparing(alphaComparator); // compares two strings by their lengths and then by their alphabetical order
Comparator<String> naturalComparator = Comparator.naturalOrder(); // compares two strings by their natural order
Comparator<String> nullsFirstComparator = Comparator.nullsFirst(lengthComparator); // compares two strings by their lengths and considers null values to be less than any non-null values

// Compare some strings using the comparators
System.out.println(lengthComparator.compare("Hello", "World")); // 0
System.out.println(alphaComparator.compare("Hello", "World")); // -15
System.out.println(reverseComparator.compare("Hello", "World")); // 0
System.out.println(lengthAlphaComparator.compare("Hello", "World")); // -15
System.out.println(naturalComparator.compare("Hello", "World")); // -15
System.out.println(nullsFirstComparator.compare("Hello", null)); // 1
```
</details>
