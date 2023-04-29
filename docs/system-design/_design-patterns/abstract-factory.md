<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![abstract-factory](/img/interviews/design-system/abstract-factory.svg) -->

<details open>
<summary><h5>Abstract Factory pattern</h5></summary>

The abstract factory pattern is a creational design pattern that lets you ***create families of related objects without specifying their concrete classes***. It defines an interface or an abstract class for creating a family of objects and lets the subclasses decide which family to instantiate. The abstract factory in the interface or abstract class lets a class defer the instantiation to one or more concrete subclasses.

A real-life example of the abstract factory pattern is ***a restaurant that can serve different types of cuisines***, such as Chinese and Italian, using a common interface or abstract class. ***The specific type of cuisine is decided by the concrete factory class*** that implements the interface or abstract class.

Example of the abstract factory pattern:

![abstract factory](/img/interviews/design-system/abstract-factory.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
// The interface for creating cuisines
public interface Cuisine {
    void prepare();
    void cook();
    void serve();
}

// The concrete classes that implement the Cuisine interface
public class ChineseCuisine implements Cuisine {
    @Override
    public void prepare() {
        System.out.println("Prepare Chinese Cuisine");
    }

    @Override
    public void cook() {
        System.out.println("Cook Chinese Cuisine");
    }

    @Override
    public void serve() {
        System.out.println("Serve Chinese Cuisine");
    }
}

public class ItalianCuisine implements Cuisine {
    @Override
    public void prepare() {
        System.out.println("Prepare Italian Cuisine");
    }

    @Override
    public void cook() {
        System.out.println("Cook Italian Cuisine");
    }

    @Override
    public void serve() {
        System.out.println("Serve Italian Cuisine");
    }
}

// The abstract class for creating cuisine factories
public abstract class CuisineFactory {
    public Cuisine orderCuisine() {
        Cuisine cuisine = createCuisine();
        cuisine.prepare();
        cuisine.cook();
        cuisine.serve();
        return cuisine;
    }

    protected abstract Cuisine createCuisine();
}

// The concrete classes that extend the CuisineFactory abstract class
public class ChineseCuisineFactory extends CuisineFactory {
    @Override
    protected Cuisine createCuisine() {
        return new ChineseCuisine();
    }
}

public class ItalianCuisineFactory extends CuisineFactory {
    @Override
    protected Cuisine createCuisine() {
        return new ItalianCuisine();
    }
}

// The client code that uses the abstract factory pattern
public class Client {
    public static void main(String[] args) {
        // Create a Chinese cuisine factory and an Italian cuisine factory
        CuisineFactory chineseCuisineFactory = new ChineseCuisineFactory();
        CuisineFactory italianCuisineFactory = new ItalianCuisineFactory();

        // Order a Chinese cuisine and an Italian cuisine using the factories
        Cuisine chineseCuisine = chineseCuisineFactory.orderCuisine();
        Cuisine italianCuisine = italianCuisineFactory.orderCuisine();

        // Do something with the cuisines
        // ...
    }
}
```
</details>
