<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Concurrency vs Multithreading vs Parallelism</h5></summary>

- **Multithreading** is a technique that splits applications into multiple threads/tasks.
- **Concurrency** means doing those threads/tasks simultaneously on one or multiple processors.
- **Parallelism** means that multiple threads/tasks are executed at the same time on different processors or cores.

Since version 5.0, the Java platform has also included high-level concurrency APIs in the `java.util.concurrent` packages. These packages provide useful features such as ***thread pools***, ***atomic variables***, ***locks***, ***concurrent collections***, ***synchronizers***, ***executors***, ***futures***, and ***completable futures***.

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

<details>
<summary><h5>ExecutorService vs ThreadPoolExecutor vs ForkJoinPool</h5></summary>

`ExecutorService`, `ThreadPoolExecutor` and `ForkJoinPool` are all interfaces or classes for managing and executing tasks in Java. However, they have some differences in their design and behavior, such as:

- `ExecutorService` is an interface that represents an executor that can ***run tasks asynchronously***. It provides methods to `submit`, `cancel`, `monitor` and control the execution of tasks.
- `ThreadPoolExecutor` is a concrete class that implements `ExecutorService`. It ***uses a pool of threads to execute tasks***. It allows to configure the core pool size, maximum pool size, keep alive time, work queue, thread factory and rejected execution handler.
- `ForkJoinPool` is another concrete class that implements `ExecutorService`. It ***uses a work-stealing algorithm to execute tasks***. It is designed for tasks that can be split into smaller subtasks recursively, such as ***divide-and-conquer algorithms***. It allows to configure the parallelism level, thread factory and uncaught exception handler.

Here is a table that compares some of the main features of `ExecutorService`, `ThreadPoolExecutor` and `ForkJoinPool`:

| Feature | ExecutorService | ThreadPoolExecutor | ForkJoinPool |
|---------|-----------------|--------------------|--------------|
| Interface or class | Interface | Class | Class |
| Task queue | Common queue for all threads | Common queue for all threads | Separate queue for each thread |
| Task splitting | No support | No support | Support for recursive subtasks |
| Work stealing | No support | No support | Support for stealing subtasks from other threads |
| Configuration options | Depends on the implementation | Core pool size, maximum pool size, keep alive time, work queue, thread factory, rejected execution handler | Parallelism level, thread factory, uncaught exception handler |

</details>

<details>
<summary><h5>execute() vs submit() vs invokeAll() vs invokeAny()</h5></summary>

ExecutorService is an interface that provides methods for managing and executing tasks in Java. It has four methods for submitting tasks: `execute()`, `submit()`, `invokeAll()` and `invokeAny()`. They have some differences in their design and behavior, such as:

- `execute()` takes a `Runnable` task as a parameter and does not return anything. It is suitable for tasks that do not need to produce any result or handle any exception. It ***does not provide any way to cancel or monitor the task***.
- `submit()` takes either a `Runnable` or a `Callable` task as a parameter and returns a `Future` object. It is suitable for tasks that need to produce a result or handle an exception. It ***provides a way to cancel or monitor the task using the `Future` object***.
- `invokeAll()` takes a collection of `Callable` tasks as a parameter and returns a list of `Future` objects. It ***blocks until all the tasks are completed or the timeout expires***. It is ***suitable for tasks that need to be executed in parallel*** and their results need to be collected.
- `invokeAny()` takes a collection of `Callable` tasks as a parameter and returns the result of one of the completed tasks. It ***blocks until at least one of the tasks is completed or the timeout expires***. It is ***suitable for tasks that are equivalent and only one result is needed***.

Here is a table that compares some of the main features of execute(), submit(), invokeAll() and invokeAny() methods in ExecutorService:

| Method | Parameter | Return type | Blocking | Cancellation | Result |
|--------|-----------|-------------|----------|--------------|--------|
| execute() | Runnable | void | No | No | None |
| submit() | Runnable or Callable | Future | No | Yes | Optional |
| invokeAll() | Collection of Callable | List of Future | Yes | Yes | All |
| invokeAny() | Collection of Callable | Object | Yes | Yes | One |

Here are some examples of using execute(), submit(), invokeAll() and invokeAny() methods in ExecutorService:

- Using execute() to run a Runnable task:

```java
// Create an ExecutorService with a fixed thread pool
ExecutorService executor = Executors.newFixedThreadPool(2);

// Create a Runnable task
Runnable task = () -> {
    // Do some work
    System.out.println("Hello from execute()");
};

// Execute the task
executor.execute(task);

// Shutdown the executor
executor.shutdown();
```

- Using submit() to run a Callable task and get the result:

```java
// Create an ExecutorService with a fixed thread pool
ExecutorService executor = Executors.newFixedThreadPool(2);

// Create a Callable task
Callable<String> task = () -> {
    // Do some work
    return "Hello from submit()";
};

// Submit the task and get a Future object
Future<String> future = executor.submit(task);

// Get the result from the Future object
try {
    String result = future.get();
    System.out.println(result);
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}

// Shutdown the executor
executor.shutdown();
```

- Using invokeAll() to run a collection of Callable tasks and get a list of results:

```java
// Create an ExecutorService with a fixed thread pool
ExecutorService executor = Executors.newFixedThreadPool(2);

// Create a collection of Callable tasks
List<Callable<String>> tasks = new ArrayList<>();
tasks.add(() -> "Task 1");
tasks.add(() -> "Task 2");
tasks.add(() -> "Task 3");

// Invoke all the tasks and get a list of Future objects
List<Future<String>> futures = executor.invokeAll(tasks);

// Iterate over the futures and get the results
for (Future<String> future : futures) {
    try {
        String result = future.get();
        System.out.println(result);
    } catch (InterruptedException | ExecutionException e) {
        e.printStackTrace();
    }
}

// Shutdown the executor
executor.shutdown();
```

- Using invokeAny() to run a collection of Callable tasks and get one result:

```java
// Create an ExecutorService with a fixed thread pool
ExecutorService executor = Executors.newFixedThreadPool(2);

// Create a collection of Callable tasks
List<Callable<String>> tasks = new ArrayList<>();
tasks.add(() -> "Task 1");
tasks.add(() -> "Task 2");
tasks.add(() -> "Task 3");

// Invoke any of the tasks and get one result
String result = executor.invokeAny(tasks);

// Print the result
System.out.println(result);

// Shutdown the executor
executor.shutdown();
```

</details>

<details>
<summary><h5>Future  vs CompletableFuture</h5></summary>

| Feature | Future | CompletableFuture |
|---------|--------|-------------------|
| Blocking | Yes, `Future.get()` blocks the current thread | No, `CompletableFuture.thenAccept()` registers a callback function |
| Completing | No, Future can only be cancelled | Yes, CompletableFuture can be completed manually |
| Composing | Limited, Future does not provide methods to chain or combine tasks | Rich, `CompletableFuture` provides methods such as `thenApply()`, `thenCompose()`, `thenCombine()`, etc. |
| Handling exceptions | Poor, `Future.get()` throws an `ExecutionException` | `Splendid`, `CompletableFuture.exceptionally()` allows handling exceptions and providing fallback values |

Here are some examples of using Future and CompletableFuture in Java:

- Creating a Future with ExecutorService and getting the result with Future.get():

```java
ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(() -> {
    // Some long-running task
    return 42;
});
// Do some other work
try {
    // Get the result, blocking if necessary
    Integer result = future.get();
    System.out.println("Result: " + result);
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}
```

- Creating a CompletableFuture with CompletableFuture.supplyAsync() and getting the result with CompletableFuture.join():

```java
CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
    // Some long-running task
    return 42;
});
// Do some other work
// Get the result, blocking if necessary
Integer result = future.join();
System.out.println("Result: " + result);
```

- Chaining multiple tasks with CompletableFuture.thenApply() and thenAccept():

```java
CompletableFuture.supplyAsync(() -> {
    // Some long-running task
    return 42;
}).thenApply(result -> {
    // Apply a function to the previous result
    return result * 2;
}).thenAccept(result -> {
    // Consume the final result
    System.out.println("Result: " + result);
});
```

- Handling exceptions with CompletableFuture.exceptionally():

```java
CompletableFuture.supplyAsync(() -> {
    // Some long-running task that may throw an exception
    if (Math.random() > 0.5) {
        throw new RuntimeException("Something went wrong");
    }
    return 42;
}).exceptionally(ex -> {
    // Handle the exception and provide a fallback value
    System.out.println("Error: " + ex.getMessage());
    return -1;
}).thenAccept(result -> {
    // Consume the final result
    System.out.println("Result: " + result);
});
```

</details>

