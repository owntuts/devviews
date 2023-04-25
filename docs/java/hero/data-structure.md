---
sidebar_position: 1000
sidebar_label: Data Structure
title: Data Structure
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Data Structure</h5></summary>

![How Java Works](/img/interviews/java/data-structure.png)

Data structure in Java can be classified into two types: primitive and non-primitive.

- **Primitive** data structures are the basic types of data that are built-in in Java, such as byte, short, int, long, float, double, char, and boolean. 
- **Non-primitive** data structures are the complex types of data that are derived from primitive data structures or defined by the user, such as array, string, class, object, interface, etc.

Non-primitive data structures can be further classified into two types: linear and non-linear.

- **Linear data structures** are the ones that store data ***in a sequential and ordered manner***, such that each element has a unique predecessor and successor, except the first and last element. Examples of linear data structures are `array`, `linked list`, `stack`, `queue`, etc.

- **Non-linear data structures** are the ones that store data ***in a hierarchical or networked manner***, such that each element may have more than one predecessor or successor. Examples of non-linear data structures are `tree`, `graph`, `heap`, `hash table`, etc.

:::note Tips To Remember
- Linear prefix: `Array`, `Linked`, `Priority`
- Non-linear prefix: `Hash`, `Tree`
- Suffix: `Set`, `List`, `Map`, `Table`

:::
</details>

<details>
<summary><h5>Iterable</h5></summary>

Iterable in Java is an interface that represents a collection of elements that can be iterated over using a for-each loop or an iterator & allows sequential access to the elements of a collection. It has three methods: `hasNext()`, `next()`, and `remove()`.

```java
// A custom class that implements Iterable interface
class MyCollection<T> implements Iterable<T> {
  // An array to store the elements
  private T[] array;

  // A constructor to initialize the array
  public MyCollection(T[] array) {
    this.array = array;
  }

  // An implementation of iterator () method that returns an Iterator object
  public Iterator<T> iterator() {
    // Return an anonymous inner class that implements Iterator interface
    return new Iterator<T>() {
      // A variable to keep track of the current index
      private int index = 0;

      // An implementation of hasNext () method that checks if there are more elements
      public boolean hasNext() {
        return index < array.length;
      }

      // An implementation of next () method that returns the next element
      public T next() {
        return array[index++];
      }

      // An implementation of remove () method that is not supported
      public void remove() {
        throw new UnsupportedOperationException();
      }
    };
  }
}
```

To use an Iterable object in Java, we can either use a for-each loop or an explicit iterator. For example:

```java
// Create an array of strings
String[] names = {"Alice", "Bob", "Charlie"};

// Create an instance of MyCollection class with the array
MyCollection<String> myCollection = new MyCollection<>(names);

// Use a for-each loop to iterate over the elements
for (String name : myCollection) {
  System.out.println(name);
}

// Use an explicit iterator to iterate over the elements
Iterator<String> iterator = myCollection.iterator();
while (iterator.hasNext()) {
  System.out.println(iterator.next());
}
```

</details>

<details>
<summary><h5>Array vs Array List</h5></summary>

| Difference | Array | ArrayList |
|------------|-------|-----------|
| Size | Fixed-size data structure | Variable-size data structure |
| Type | Can store primitive types or objects | Can only store objects |
| Access | By using the index operator [] | By using the get () and set () methods |
| Methods | Does not have any built-in methods | Has many methods to manipulate the data |
| Generics | Can’t use generics along | Can use generics along |


```java
// Declare and initialize an array of int type
int[] numbers = {10, 20, 30, 40};

// Print the length of the array
System.out.println(numbers.length); // Output: 4

// Print the first element of the array
System.out.println(numbers[0]); // Output: 10

// Change the value of the second element of the array
numbers[1] = 25;

// Print the second element of the array
System.out.println(numbers[1]); // Output: 25

// Try to add a new element to the array
numbers[4] = 50; // Error: ArrayIndexOutOfBoundsException

// Declare and initialize an ArrayList of Integer type
ArrayList<Integer> numbersList = new ArrayList<Integer>();

// Add some elements to the ArrayList
numbersList.add(10);
numbersList.add(20);
numbersList.add(30);
numbersList.add(40);

// Print the size of the ArrayList
System.out.println(numbersList.size()); // Output: 4

// Print the first element of the ArrayList
System.out.println(numbersList.get(0)); // Output: 10

// Change the value of the second element of the ArrayList
numbersList.set(1, 25);

// Print the second element of the ArrayList
System.out.println(numbersList.get(1)); // Output: 25

// Add a new element to the end of the ArrayList
numbersList.add(50);

// Print the size of the ArrayList
System.out.println(numbersList.size()); // Output: 5

// Print the last element of the ArrayList
System.out.println(numbersList.get(4)); // Output: 50

```
</details>

<details>
<summary><h5>ArrayList vs. LinkedList vs. Vector vs. Stack</h5></summary>

| Difference | ArrayList | LinkedList | Vector | Stack |
|------------|-----------|------------|--------|-------|
| Implementation | Uses a dynamic array as its internal data structure | Uses a doubly linked list as its internal data structure | Uses a synchronized dynamic array as its internal data structure | Extends Vector and uses a LIFO (last-in first-out) order for its elements |
| Size | Can grow or shrink dynamically as needed | Can grow or shrink dynamically as needed | Can grow or shrink dynamically as needed | Can grow or shrink dynamically as needed |
| Access | Allows random access to any element by using its index | Does not allow random access, requires sequential traversal to access any element | Allows random access to any element by using its index | Does not allow random access, only allows access to the top element |
| Performance | Fast for get and set operations, slow for add and remove operations when resizing is involved or shifting is required | Fast for add and remove operations at any position, slow for get and set operations | Similar to ArrayList, but slower due to synchronization overhead | Similar to Vector, but provides additional methods such as push, pop, peek, and search |
| Synchronization | Not synchronized, not thread-safe | Not synchronized, not thread-safe | Synchronized, thread-safe | Synchronized, thread-safe |
| Legacy | Not a legacy class, introduced in Java 1.2 | Not a legacy class, introduced in Java 1.2 | A legacy class, part of the original Java 1.0 API | A legacy class, part of the original Java 1.0 API |

Here are some examples to demonstrate the usage of these classes:

```java
// Import the required classes
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Vector;
import java.util.Stack;

// Create a class with a main method
public class Main {

  // Define the main method
  public static void main(String[] args) {

    // Create an ArrayList of String type
    ArrayList<String> names = new ArrayList<String>();

    // Add some elements to the ArrayList
    names.add("Alice");
    names.add("Bob");
    names.add("Charlie");

    // Print the size and contents of the ArrayList
    System.out.println("ArrayList size: " + names.size());
    System.out.println("ArrayList elements: " + names);

    // Get and set an element using its index
    System.out.println("First element: " + names.get(0));
    names.set(0, "Ann");
    System.out.println("First element after update: " + names.get(0));

    // Create a LinkedList of Integer type
    LinkedList<Integer> numbers = new LinkedList<Integer>();

    // Add some elements to the LinkedList
    numbers.add(10);
    numbers.add(20);
    numbers.add(30);

    // Print the size and contents of the LinkedList
    System.out.println("LinkedList size: " + numbers.size());
    System.out.println("LinkedList elements: " + numbers);

    // Add and remove an element at any position
    numbers.add(1, 15);
    System.out.println("LinkedList elements after adding 15 at index 1: " + numbers);
    numbers.remove(2);
    System.out.println("LinkedList elements after removing element at index 2: " + numbers);

    // Create a Vector of Character type
    Vector<Character> letters = new Vector<Character>();

    // Add some elements to the Vector
    letters.add('A');
    letters.add('B');
    letters.add('C');

    // Print the size and contents of the Vector
    System.out.println("Vector size: " + letters.size());
    System.out.println("Vector elements: " + letters);

    // Sort and search the Vector using Collections class methods
    Collections.sort(letters);
    System.out.println("Vector elements after sorting: " + letters);
    int index = Collections.binarySearch(letters, 'B');
    System.out.println("Index of B in Vector: " + index);

    // Create a Stack of Double type
    Stack<Double> values = new Stack<Double>();

    // Add some elements to the Stack using push method
    values.push(1.0);
    values.push(2.0);
    values.push(3.0);

    // Print the size and contents of the Stack
    // Print the size and contents of the Stack
    System.out.println("Stack size: " + values.size());
    System.out.println("Stack elements: " + values);

    // Access and remove the top element using pop and peek methods
    System.out.println("Top element: " + values.peek());
    values.pop();
    System.out.println("Top element after pop: " + values.peek());

    // Search for an element using search method
    int position = values.search(2.0);
    System.out.println("Position of 2.0 in Stack: " + position);
```

</details>

<details>
<summary><h5>HashSet vs. TreeSet vs. LinkedHashSet</h5></summary>

| Feature | HashSet | LinkedHashSet | TreeSet |
| --- | --- | --- | --- |
| Internal Working | Uses HashMap for storing objects | Uses LinkedHashMap for storing objects | Uses TreeMap for storing objects |
| When To Use | If you don’t want to maintain insertion order but want to store unique objects | If you want to ***maintain the insertion order*** of elements then you can use LinkedHashSet | If you want to ***sort the elements*** according to some Comparator then use TreeSet |
| Order | Does not maintain insertion order | Maintains the insertion order of objects | Orders the elements according to supplied Comparator or natural ascending order |
| Complexity of Operations | O(1) for insertion, removing, and retrieving objects | O(1) for insertion, removing, and retrieving operations | O(log(n)) for insertion, removing, and retrieving operations |
| Performance | Better than LinkedHashSet and TreeSet | Slower than HashSet but faster than TreeSet | Slower than HashSet and LinkedHashSet due to sorting |
| Compare | Uses equals() and hashCode() methods to compare the objects | Uses equals() and hashCode() methods to compare it’s objects | Uses compare() and compareTo() methods to compare the objects |
| Null Elements | Allows only one null value | Allows only one null value | Does not permit null value |

Here is an example of how to use each of these classes in Java:

```java
import java.util.*;

class Example {

  public static void main(String args[]) {

    // Create HashSet
    HashSet<String> hashSet = new HashSet<>();
    // Add elements to HashSet
    hashSet.add("Java");
    hashSet.add("Angular");
    hashSet.add("Spring");
    hashSet.add("Oracle");
    hashSet.add("MySQL");
    // Add duplicate elements to HashSet
    hashSet.add("Java");
    hashSet.add("Spring");
    // Add null values to HashSet
    hashSet.add(null);
    hashSet.add(null);
    // Print HashSet elements
    System.out.println(hashSet); // [null, Java, MySQL, Spring, Oracle, Angular]

    // Create LinkedHashSet
    LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();
    // Add elements to LinkedHashSet
    linkedHashSet.add("Java");
    linkedHashSet.add("Angular");
    linkedHashSet.add("Spring");
    linkedHashSet.add("Oracle");
    linkedHashSet.add("MySQL");
    // Add duplicate elements to LinkedHashSet
    linkedHashSet.add("Java");
    linkedHashSet.add("Spring");
    // Add null values to LinkedHashSet
    linkedHashSet.add(null);
    linkedHashSet.add(null);
    // Print LinkedHashSet elements
    System.out.println(linkedHashSet); // [Java, Angular, Spring, Oracle, MySQL, null]

    // Create TreeSet
    TreeSet<String> treeSet = new TreeSet<>();
    // Add elements to TreeSet
    treeSet.add("Java");
    treeSet.add("Angular");
    treeSet.add("Spring");
    treeSet.add("Oracle");
    treeSet.add("MySQL");
    // Add duplicate elements to TreeSet
    treeSet.add("Java");
    treeSet.add("Spring");
    // Print TreeSet elements
    System.out.println(treeSet); // [Angular, Java, MySQL, Oracle, Spring]
  }
}
```
</details>

<details>
<summary><h5>HashMap vs. TreeMap vs. HashTable vs. LinkedHashMap</h5></summary>

| Feature | HashMap | TreeMap | HashTable | LinkedHashMap |
| --- | --- | --- | --- | --- |
| Internal Working | Uses hash table for storing key-value pairs | Uses red-black tree for storing key-value pairs | Uses hash table for storing key-value pairs | Uses hash table and doubly-linked list for storing key-value pairs |
| When To Use | If you don’t care about the order of elements and want fast access and insertion | If you want to store elements in sorted order by keys or by a custom comparator | If you want a legacy thread-safe map that does not allow null keys or values | If you want to maintain the insertion order or access order of elements |
| Order | Does not maintain any order | Maintains ascending order by keys or by a custom comparator | Does not maintain any order | Maintains insertion order or access order |
| Complexity of Operations | O(1) for get, put, remove and containsKey (average case) | O(log(n)) for get, put, remove and containsKey | O(1) for get, put, remove and containsKey (average case) | O(1) for get, put, remove and containsKey (average case) |
| Performance | Faster than TreeMap and HashTable | Slower than HashMap and HashTable due to sorting | Slower than HashMap and LinkedHashMap due to synchronization | Slower than HashMap but faster than HashTable due to maintaining order |
| Compare | Uses equals() and hashCode() methods to compare keys and values | Uses compare() or compareTo() methods to compare keys and values | Uses equals() and hashCode() methods to compare keys and values | Uses equals() and hashCode() methods to compare keys and values |
| Null Elements/Keys | Allows one null key and multiple null values | Does not allow null key but allows multiple null values | Does not allow null key or null value | Allows one null key and multiple null values |
| Thread-Safety | Not thread-safe as it is not synchronized | Not thread-safe as it is not synchronized | Thread-safe as it is synchronized on the whole map | Not thread-safe as it is not synchronized |
| Fail-Fast Behavior | Iterator is fail-fast (throws ConcurrentModificationException) but cannot be guaranteed in the presence of unsynchronized concurrent modification | Iterator is fail-fast (throws ConcurrentModificationException) but cannot be guaranteed in the presence of unsynchronized concurrent modification Iterator is fail-fast (throws ConcurrentModificationException) but cannot be guaranteed in the presence of unsynchronized concurrent modification |  |  |


</details>
