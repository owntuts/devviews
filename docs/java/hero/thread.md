<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>What is Multi-threading?</h5></summary>

Multi-threading in Java is a feature that allows concurrent execution of two or more parts of a program for maximum utilization of CPU. Each part of such program is called a thread, which is a lightweight sub-process that shares the same memory space and resources with other threads.

Java also provides some classes and interfaces ***to manage and coordinate multiple threads***, such as `ExecutorService`, `Future`, `Callable`, `Lock`, `Condition`, etc. These classes and interfaces help to create thread pools, submit tasks, return results, synchronize threads, communicate between threads, etc.

Here is an example of creating and running two threads using Thread and Runnable in Java:

```java
// A task that prints "Hello" every second
class HelloTask implements Runnable {
  @Override
  public void run() {
    while (true) {
      System.out.println("Hello");
      try {
        // Sleep for one second
        Thread.sleep(1000);
      } catch (InterruptedException e) {
        // Interrupted, break the loop
        break;
      }
    }
  }
}

// A task that prints "World" every two seconds
class WorldTask extends Thread {
  @Override
  public void run() {
    while (true) {
      System.out.println("World");
      try {
        // Sleep for two seconds
        Thread.sleep(2000);
      } catch (InterruptedException e) {
        // Interrupted, break the loop
        break;
      }
    }
  }
}

public class MultiThreadingDemo {
  public static void main(String[] args) throws InterruptedException {
    // Create a thread using Runnable
    Thread t1 = new Thread(new HelloTask());
    // Create a thread using Thread
    Thread t2 = new WorldTask();

    // Start the threads
    t1.start();
    t2.start();

    // Wait for five seconds
    Thread.sleep(5000);

    // Interrupt the threads
    t1.interrupt();
    t2.interrupt();

    // Wait for the threads to finish
    t1.join();
    t2.join();

    System.out.println("Done");
  }
}
```

The output of this program may look something like this:

```
Hello
World
Hello
Hello
World
Hello
Hello
World
Hello
Done
```
</details>

<details>
<summary><h5>Thread and Runnable</h5></summary>

Okay, here is a table that compares Thread and Runnable in Java:

| Thread | Runnable |
|--------|----------|
| A class that represents a thread of execution | An interface that represents a task that can be executed by a thread |
| Provides the functionality of creating and managing threads | Defines only one method, run, that contains the logic of the task |
| Implements Runnable, which means every thread is also a runnable | Not every runnable is a thread, a runnable is just a task |
| To create a thread, we need to extend Thread and override its run method | To create a thread, we need to implement Runnable and define its run method, then pass the runnable object to the Thread constructor or any other executor service |
| Extending Thread has some disadvantages, such as limiting inheritance, violating composition over inheritance, and creating unnecessary coupling | Implementing Runnable has some advantages, such as allowing inheritance, following composition over inheritance, and creating loose coupling |
</details>

<details>
<summary><h5>Explain the thread life cycle in Java</h5></summary>

The thread life cycle in Java is the sequence of states that a thread goes through during its execution. The thread can be in one of the following states at any given point of time:

![thread life cycle](/img/interviews/java/Life_cycle_of_a_Thread_in_Java.jpg)


- **NEW**: A thread is in the NEW state when it is created but not yet started. It remains in this state until the start method is invoked on the thread object.
- **RUNNABLE**: A thread is in the RUNNABLE state when it is ready to run or running. The thread scheduler can choose any thread in this state to execute on the available CPU core. A thread can move from RUNNABLE to RUNNING and vice versa depending on the thread scheduler's decision.
- **BLOCKED**: A thread is in the BLOCKED state when it is waiting to acquire a monitor lock to enter or re-enter a synchronized block or method. A thread can move from RUNNABLE to BLOCKED when it tries to access a synchronized resource that is held by another thread. A thread can move from BLOCKED to RUNNABLE when it acquires the lock or when the lock is released by another thread.
- **WAITING**: A thread is in the WAITING state when it is waiting for another thread to perform a specific action without any time limit. A thread can move from RUNNABLE to WAITING when it invokes methods such as Object.wait, Thread.join, or LockSupport.park. A thread can move from WAITING to RUNNABLE when it receives a notification from another thread, such as Object.notify, Thread.interrupt, or LockSupport.unpark.
- **TIMED_WAITING**: A thread is in the TIMED_WAITING state when it is waiting for another thread to perform a specific action for a specified period of time. A thread can move from RUNNABLE to TIMED_WAITING when it invokes methods such as Thread.sleep, Object.wait with timeout, Thread.join with timeout, or LockSupport.parkNanos. A thread can move from TIMED_WAITING to RUNNABLE when the timeout expires, when it receives a notification from another thread, or when it is interrupted by another thread.
- **TERMINATED**: A thread is in the TERMINATED state when it has completed its execution or when an uncaught exception or error occurs in the thread. A thread can move from RUNNABLE to TERMINATED when the run method returns normally or abnormally. A terminated thread cannot be restarted.

</details>


<details>
<summary><h5>Methods in the Thread</h5></summary>

There are several methods in the Thread class that are related to the thread life cycle in Java. Here is a list of some of them with examples for each:

- **start**: This method starts the execution of the thread by invoking its run method. It moves the thread from NEW to RUNNABLE state. Example:

```java
// Create a thread using Runnable
Thread t = new Thread(new Runnable() {
  @Override
  public void run() {
    System.out.println("Thread started");
  }
});

// Start the thread
t.start();
```

- **run**: This method contains the logic of the task to be performed by the thread. It is invoked by the start method or directly by the programmer. It moves the thread from RUNNABLE to RUNNING state. Example:

```java
// Create a thread using Runnable
Thread t = new Thread(new Runnable() {
  @Override
  public void run() {
    System.out.println("Thread running");
  }
});

// Invoke the run method directly
t.run();
```

- **sleep**: This method causes the current thread to pause its execution for a specified period of time. It moves the thread from RUNNING to TIMED_WAITING state. It can be interrupted by another thread. Example:

```java
// Create a thread using Runnable
Thread t = new Thread(new Runnable() {
  @Override
  public void run() {
    try {
      System.out.println("Thread sleeping");
      // Sleep for 5 seconds
      Thread.sleep(5000);
      System.out.println("Thread awake");
    } catch (InterruptedException e) {
      System.out.println("Thread interrupted");
    }
  }
});

// Start the thread
t.start();

// Interrupt the thread after 3 seconds
Thread.sleep(3000);
t.interrupt();
```

- **join**: This method causes the current thread to wait for the completion of another thread. It moves the thread from RUNNING to WAITING or TIMED_WAITING state. It can be interrupted by another thread. Example:

```java
// Create two threads using Runnable
Thread t1 = new Thread(new Runnable() {
  @Override
  public void run() {
    System.out.println("Thread 1 running");
  }
});
Thread t2 = new Thread(new Runnable() {
  @Override
  public void run() {
    try {
      System.out.println("Thread 2 waiting for Thread 1");
      // Wait for Thread 1 to finish
      t1.join();
      System.out.println("Thread 2 running");
    } catch (InterruptedException e) {
      System.out.println("Thread 2 interrupted");
    }
  }
});

// Start both threads
t1.start();
t2.start();

// Interrupt Thread 2 after 3 seconds
Thread.sleep(3000);
t2.interrupt();
```

- **yield**: This method causes the current thread to give up its CPU time voluntarily and allow other threads of the same or higher priority to execute. It moves the thread from RUNNING to RUNNABLE state. It is a hint to the thread scheduler and does not guarantee any specific behavior. Example:

```java
// Create two threads using Runnable
Thread t1 = new Thread(new Runnable() {
  @Override
  public void run() {
    for (int i = 0; i < 10; i++) {
      System.out.println("Thread 1: " + i);
      // Yield to other threads
      Thread.yield();
    }
  }
});
Thread t2 = new Thread(new Runnable() {
  @Override
  public void run() {
    for (int i = 0; i < 10; i++) {
      System.out.println("Thread 2: " + i);
      // Yield to other threads
      Thread.yield();
    }
  }
});

// Start both threads
t1.start();
t2.start();
```

- **interrupt**: This method interrupts the target thread and sets its interrupt status to true. It does not stop the thread, but it causes some methods that are blocking or waiting, such as sleep, join, wait, etc., to throw an InterruptedException. The target thread can also check its interrupt status by calling isInterrupted or interrupted methods and handle it accordingly. Example:

```java
// Create a thread using Runnable
Thread t = new Thread(new Runnable() {
  @Override
  public void run() {
    while (true) {
      // Check if the thread is interrupted
      if (Thread.interrupted()) {
        System.out.println("Thread interrupted");
        break;
      }
      System.out.println("Thread running");
    }
  }
});

// Start the thread
t.start();

// Interrupt the thread after 3 seconds
Thread.sleep(3000);
t.interrupt();
```

- **wait**: This method causes the current thread to wait until another thread invokes the notify or notifyAll method on the same object. It moves the thread from RUNNING to WAITING state. It can be interrupted by another thread. It must be called within a synchronized block or method on the same object. Example:

```java
// Create a shared object
Object obj = new Object();

// Create two threads using Runnable
Thread t1 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      try {
        System.out.println("Thread 1 waiting for notification");
        // Wait on the shared object
        obj.wait();
        System.out.println("Thread 1 notified");
      } catch (InterruptedException e) {
        System.out.println("Thread 1 interrupted");
      }
    }
  }
});
Thread t2 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      System.out.println("Thread 2 notifying");
      // Notify the shared object
      obj.notify();
    }
  }
});

// Start both threads
t1.start();
t2.start();
```

- **notify**: This method wakes up one thread that is waiting on the same object. It moves the thread from WAITING to RUNNABLE state. It must be called within a synchronized block or method on the same object. Example:

```java
// Create a shared object
Object obj = new Object();

// Create two threads using Runnable
Thread t1 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      try {
        System.out.println("Thread 1 waiting for notification");
        // Wait on the shared object
        obj.wait();
        System.out.println("Thread 1 notified");
      } catch (InterruptedException e) {
        System.out.println("Thread 1 interrupted");
      }
    }
  }
});
Thread t2 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      System.out.println("Thread 2 notifying");
      // Notify the shared object
      obj.notify();
    }
  }
});

// Start both threads
t1.start();
t2.start();
```

- **notifyAll**: This method wakes up all threads that are waiting on the same object. It moves the threads from WAITING to RUNNABLE state. It must be called within a synchronized block or method on the same object. Example:

```java
// Create a shared object
Object obj = new Object();

// Create three threads using Runnable
Thread t1 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      try {
        System.out.println("Thread 1 waiting for notification");
        // Wait on the shared object
        obj.wait();
        System.out.println("Thread 1 notified");
      } catch (InterruptedException e) {
        System.out.println("Thread 1 interrupted");
      }
    }
  }
});
Thread t2 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      try {
        System.out.println("Thread 2 waiting for notification");
        // Wait on the shared object
        obj.wait();
        System.out.println("Thread 2 notified");
      } catch (InterruptedException e) {
        System.out.println("Thread 2 interrupted");
      }
    }
  }
});
Thread t3 = new Thread(new Runnable() {
  @Override
  public void run() {
    synchronized (obj) {
      System.out.println("Thread 3 notifying all");
      // Notify all the shared object
      obj.notifyAll();
    }
  }
});

// Start all threads
t1.start();
t2.start();
t3.start();
```
</details>

<details>
<summary><h5>ExecutorService</h5></summary>

`ExecutorService` in Java is an interface that provides methods to manage the execution of asynchronous tasks on threads. It is part of the `java.util.concurrent` package, which contains classes and interfaces for concurrent programming. `ExecutorService` helps in ***creating and managing a pool of threads, and assigning tasks to them***. 

- You can **create** an `ExecutorService` instance by using one of the factory methods of the Executors class, or by using a specific implementation such as `ThreadPoolExecutor` or `ForkJoinPool`. 

- You can **assign tasks** to the `ExecutorService` using methods such as `execute()`, `submit()`, `invokeAll()` or `invokeAny()`. These methods can accept `Runnable` or `Callable` objects, which represent the tasks to be executed. You can also use `Future` or `CompletableFuture` objects to get the result or status of the tasks. 

- You can **shut down** the `ExecutorService` when you don’t need it anymore, by using methods such as `shutdown()` or `shutdownNow()`.

Here is an example of how to use ExecutorService in Java:

```java
import java.util.concurrent.*;

public class ExecutorServiceExample {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        // Create an executor service with 4 threads
        ExecutorService executor = Executors.newFixedThreadPool(4);

        // Create a runnable task that prints "Hello World"
        Runnable task = () -> {
            System.out.println("Hello World");
        };

        // Submit the task to the executor service 10 times
        for (int i = 0; i < 10; i++) {
            executor.submit(task);
        }

        // Shutdown the executor service gracefully
        executor.shutdown();
    }
}
```

This code will output something like this:

```
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
```

You can see that the executor service executes the task 10 times on 4 threads, and then shuts down. This is the benefit of using `ExecutorService` in Java.
</details>
