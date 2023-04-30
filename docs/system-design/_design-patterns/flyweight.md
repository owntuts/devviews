<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Flyweight Pattern</h5></summary>

The Flyweight pattern is a design pattern that reduces the memory usage and improves the performance of applications that use a large number of objects. It does so by ***sharing the common state of the objects (intrinsic) and passing the variable state (extrinsic) as arguments to the methods***. 

An example of the Flyweight pattern is a coffee shop that sells different flavors of coffee. ***Instead of creating a new object for each order, the shop can reuse the existing objects*** that represent the flavors and add the customer-specific details such as sugar, milk, etc. as extrinsic data.

![flyweight](/img/interviews/design-system/flyweight.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

:::note Tips

Flyweight = Caching resources so that our system work more lightly.

In the example, `coffeeCache` is used to cache `CoffeeFlavor` for reuse later.

:::

```java
// The interface for coffee objects
public interface Coffee {
    void serve(String customer);
}

// A concrete class for a specific flavor of coffee
public class CoffeeFlavor implements Coffee {
    private String flavor;

    public CoffeeFlavor(String flavor) {
        this.flavor = flavor;
    }

    @Override
    public void serve(String customer) {
        System.out.println("Serving " + flavor + " to " + customer);
    }
}

// A factory class that creates and manages the coffee objects
public class CoffeeFactory {
    private static Map<String, Coffee> coffeeCache = new HashMap<>();

    public static Coffee getCoffee(String flavor) {
        Coffee coffee = coffeeCache.get(flavor);
        if (coffee == null) {
            coffee = new CoffeeFlavor(flavor);
            coffeeCache.put(flavor, coffee);
        }
        return coffee;
    }

    public static int getCoffeeCount() {
        return coffeeCache.size();
    }
}

// A test class to demonstrate the usage of the Flyweight pattern
public class FlyweightTest {

    public static void main(String[] args) {
        // Order some coffees with different flavors
        Coffee espresso = CoffeeFactory.getCoffee("Espresso");
        espresso.serve("Alice");

        Coffee latte = CoffeeFactory.getCoffee("Latte");
        latte.serve("Bob");

        Coffee mocha = CoffeeFactory.getCoffee("Mocha");
        mocha.serve("Charlie");

        Coffee cappuccino = CoffeeFactory.getCoffee("Cappuccino");
        cappuccino.serve("David");

        // Order some coffees with same flavors
        Coffee espresso2 = CoffeeFactory.getCoffee("Espresso");
        espresso2.serve("Eve");

        Coffee latte2 = CoffeeFactory.getCoffee("Latte");
        latte2.serve("Frank");

        // Print the number of coffee objects created
        System.out.println("Number of coffee objects: " + CoffeeFactory.getCoffeeCount());
    }
}
```

The output of this program is:

```
Serving Espresso to Alice
Serving Latte to Bob
Serving Mocha to Charlie
Serving Cappuccino to David
Serving Espresso to Eve
Serving Latte to Frank
Number of coffee objects: 4
```

Notice how only four coffee objects are created and reused for different customers, instead of creating six objects for each order. This way, the memory usage and object creation overhead are reduced. Also, notice how the customer name is passed as an argument to the serve method, representing the extrinsic data that varies for each order.

</details>
