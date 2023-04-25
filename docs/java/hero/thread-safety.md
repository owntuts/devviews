---
sidebar_position: 1000
sidebar_label: Thread Safety In Java
title: Thread Safety In Java
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Thread Safety In Java</h5></summary>

Thread safety is a programming methodology that ensures different threads can access the same resources without exposing erroneous behavior or producing unpredictable results.

Here are some techniques to ensure thread safety in Java:

1. **Synchronization**: Synchronization ***allows only one thread to access*** the synchronized block or method at a time, thus preventing race conditions.

2. **Volatile keyword**: Volatile keyword is used to ***prevent the caching of shared variables*** by different threads.

3. **Atomic operations**: Atomic operations are thread-safe and ***guarantee consistency of shared data***.

4. **Locks**: Lock objects are used to ***protect shared resources from being accessed simultaneously*** by multiple threads.

5. **Immutable objects**: Immutable objects ***cannot be changed once created***, so they are inherently thread-safe.

6. **Thread-safe collections**: Concurrent collections provided by Java's ***Concurrent*** Collections Framework are thread-safe and can be used for shared resources.

It is important to note that ensuring thread safety in Java code is not a one-size-fits-all solution, and the choice of technique will depend on the specific requirements of the application.

</details>

<details>
<summary><h5>Synchronization (Common resources can only be acessed synchronously)</h5></summary>

Synchronization ***ensures that only one thread can execute a block of code or a method at a time***, and that any changes made by that thread are visible to other threads. This way, you can avoid race conditions and memory inconsistency errors that can lead to incorrect or unpredictable results.

For example, suppose you have a class that represents a bank account with a balance field and a deposit method:

```java
public class BankAccount {
    private int balance;

    public BankAccount(int initialBalance) {
        this.balance = initialBalance;
    }

    public int getBalance() {
        return balance;
    }

    public void deposit(int amount) {
        balance += amount;
    }
}
```

If there're two threads try to deposit at the same time:

```
Thread 1: balance = 1000
Thread 2: balance = 1000
Thread 1: deposit(100)
Thread 2: deposit(200)
Thread 1: balance = 1000 + 100 = 1100
Thread 2: balance = 1000 + 200 = 1200
Final balance: 1200
```

The expected final balance should be 1300, but because of the race condition, we lost 100. To avoid this problem, we can use synchronization to make the deposit method thread-safe:

```java
public class BankAccount {
    private int balance;

    public BankAccount(int initialBalance) {
        this.balance = initialBalance;
    }

    public synchronized int getBalance() {
        return balance;
    }

    public synchronized void deposit(int amount) {
        balance += amount;
    }
}
```

Now, only one thread can enter the deposit method at a time, and any changes made by that thread will be visible to other threads. For example:

```
Thread 1: balance = 1000
Thread 2: tries to enter deposit, but blocked by Thread 1
Thread 1: deposit(100)
Thread 1: balance = 1000 + 100 = 1100
Thread 1: exits deposit
Thread 2: enters deposit
Thread 2: balance = 1100
Thread 2: deposit(200)
Thread 2: balance = 1100 + 200 = 1300
Thread 2: exits deposit
Final balance: 1300
```

The final balance is correct and consistent. This is how synchronization can help achieve thread-safety in Java.

</details>

<details>
<summary><h5>volatile (Common resource is like one common state for all threads)</h5></summary>

The word "volatile" means something that can change quickly and unpredictably. In Java, the volatile keyword is used to indicate that a variable ***can be changed by different threads at any time***, and that the ***compiler should not cache its value*** or reorder its operations. The volatile keyword ensures that ***all threads see a consistent value for the variable***.

One example of using the volatile keyword is when you have a boolean flag that controls the execution of a thread, such as:

```java
public class VolatileExample extends Thread {
    private volatile boolean running = true;

    public void run() {
        while (running) {
            System.out.println("Running");
        }
        System.out.println("Stopped");
    }

    public void stopThread() {
        running = false;
    }
}
```

In this example, the running variable is declared as volatile, so that when the `stopThread()` method is called by another thread, the change will be visible to the thread that is executing the `run()` method. If the running variable was not volatile, there is a possibility that the thread would not see the updated value and continue running indefinitely.

</details>

<details>
<summary><h5>Atomic (Common resources is single unit of work)</h5></summary>

Atomic operations are operations that are performed as a ***single unit of work*** without the possibility of interference from other operations. Atomic operations are useful in multithreaded environments where you want to avoid race conditions and ensure data integrity.

One example of using atomic operations in Java is to use the classes in the java.util.concurrent.atomic package, such as `AtomicInteger`, `AtomicLong`, `AtomicBoolean`, and `AtomicReference`. These classes provide methods to atomically update their values, such as `incrementAndGet()`, `compareAndSet()`, and `getAndSet()`.

For example, the following class uses an AtomicInteger to count the number of tasks completed by multiple threads:

```java
public class TaskCounter {
    private AtomicInteger counter = new AtomicInteger();

    public void increment() {
        counter.incrementAndGet();
    }

    public int getCount() {
        return counter.get();
    }
}
```

In this example, the `increment()` and `getCount()` methods are thread-safe and do not need synchronization, because they use atomic operations on the counter variable.

</details>

<details>
<summary><h5>Locks (Common resources are locked to be proccessed untill unlock)</h5></summary>

Locks are thread synchronization mechanisms that ***allow only one thread to access a shared resource*** or a critical section at a time. Locks are useful in multithreaded environments where you want to avoid race conditions and ensure data consistency.

One example of using locks in Java is to use the Lock interface and its implementations, such as ReentrantLock, in the java.util.concurrent.locks package. These classes provide methods to acquire and release locks, such as `lock()`, `unlock()`, `tryLock()`, and `lockInterruptibly()`.

For example, the following class uses a ReentrantLock to manage access to a printer queue:

```java
public class PrinterQueue {
    private final Lock queueLock = new ReentrantLock();

    public void printJob(Object document) {
        queueLock.lock();
        try {
            // print the document
        } finally {
            queueLock.unlock();
        }
    }
}
```

In this example, the `printJob()` method uses a queueLock to ensure that only one thread can print a document at a time. The `lock()` method acquires the lock if it is available, or blocks the thread until it is released. The `unlock()` method releases the lock so that other threads can acquire it. The try-finally block ensures that the lock is always released even if an exception occurs².

</details>

<details>
<summary><h5>Immutable (Common resource is immutable)</h5></summary>

Immutable objects are objects whose internal state remains constant after they have been entirely created. Immutable objects are thread-safe because they ***cannot be modified by multiple threads concurrently***, and they do not require synchronization.

```java
class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
```

```java
Person person = new Person("Alice", 30);

Thread t1 = new Thread(() -> {
    System.out.println(person.getName() + " is " + person.getAge() + " years old");
});

Thread t2 = new Thread(() -> {
    System.out.println(person.getName() + " is " + person.getAge() + " years old");
});

t1.start();
t2.start();

t1.join();
t2.join();
```

Both threads are trying to access the `name` and `age` fields of the `Person` object. Since the fields are marked as `final`, they cannot be modified once initialized, which means they are thread-safe. Even if both threads access the `Person` object simultaneously, they will get the same value for `name` and `age`, and the fields will not be overwritten.

In contrast, if we had not marked the `name` and `age` fields as `final`, there would be a risk of thread interference and memory consistency errors. Suppose one thread modifies the `name` field while the second thread is reading it. This can lead to unpredictable behavior and incorrect results.

To create a custom immutable class in Java, we need to follow some rules:

- Declare the class as final so that it cannot be extended by other classes
- Declare all the fields as private and final so that they cannot be accessed or modified by other classes
- Provide only getters for the fields and no setters
- Initialize all the fields in the constructor and do not provide any methods that can change the state of the object
- If the class has any mutable fields, such as arrays or collections, do not expose them directly or return a copy of them

For example, the following code shows how to create a custom immutable class called Money:

```java
public final class Money {
    private final double amount;
    private final Currency currency;

    public Money(double amount, Currency currency) {
        this.amount = amount;
        this.currency = currency;
    }

    public double getAmount() {
        return amount;
    }

    public Currency getCurrency() {
        return currency;
    }
}
```

In this example, the Money class is immutable because it follows all the rules mentioned above. The amount and currency fields are private and final, and they are initialized in the constructor. The class only provides getters for the fields and no setters. The class does not have any mutable fields that need to be protected or copied.

</details>

<details>
<summary><h5>Thread-safe collections</h5></summary>

Thread-safe collections are collections that can be safely accessed and modified by multiple threads concurrently without causing data inconsistency or corruption. Thread-safe collections ensure that their internal state and the values returned by their methods are correct even when they are invoked by different threads¹.

Some of the collection classes that are thread-safe in Java are:

- **Stack**: A thread-safe implementation of a last-in-first-out (LIFO) data structure that extends Vector.
- **Vector**: A thread-safe implementation of a resizable array that implements the List interface. All of its methods are synchronized.
- **Properties**: A thread-safe implementation of a persistent set of key-value pairs that extends Hashtable.
- **Hashtable**: A thread-safe implementation of a hash table that implements the Map interface. All of its methods are synchronized.

However, these thread-safe collections have some drawbacks, such as:

- They have ***poor performance because synchronization*** requires locking and unlocking, which takes time and reduces concurrency.
- They ***do not prevent concurrent modification exceptions*** when iterating over them using iterators or enumerations.
- They ***do not provide any advanced concurrency features***, such as atomic operations, non-blocking algorithms, or concurrent data structures.

To overcome these drawbacks, Java provides some alternatives for thread-safe collections, such as:

- **Synchronized wrappers**: These are static methods in the Collections class that return synchronized views of the given collections. For example, `Collections.synchronizedList()` returns a thread-safe List backed by the specified List.
- **Concurrent collections**: These are classes in the `java.util.concurrent` package that provide high-performance and scalable thread-safe collections. For example, `CopyOnWriteArrayList`, `ConcurrentHashMap`, `ConcurrentLinkedQueue`, etc.

</details>
