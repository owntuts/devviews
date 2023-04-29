<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Singleton Pattern</h5></summary>

The singleton design pattern ***ensures that a class can only have one object***. It is used for resources such as logging, drivers, caching, and thread pool.

In this example, we have a `Singleton` class with a private static instance variable `instance`. The class also has a ***private constructor to prevent instantiation from other classes***, and a public static method `getInstance()` which creates the Singleton instance only if it doesn't exist already, and then returns it.

![singleton](/img/interviews/design-system/singleton.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
public class Singleton {
    // Private static instance of the Singleton class
    private static Singleton instance;
    // Private constructor to prevent instantiation from other classes
    private Singleton() {}
    // Public static method to get the Singleton instance
    public static Singleton getInstance() {
        // Create the Singleton instance only if it doesn't exist already
        if (instance == null) {
            instance = new Singleton();
        }
        // Return the Singleton instance
        return instance;
    }
    // Public method of the Singleton class
    public void greet() {
        System.out.println("Hello, World!");
    }
}

// This is the Client class
public class Main {
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.greet(); // This will print "Hello, World!" to the console
    }
}

```
</details>
