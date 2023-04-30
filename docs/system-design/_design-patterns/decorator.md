<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Decorator Pattern</h5></summary>

The Decorator pattern is a design pattern that ***allows you to dynamically add functionality and behavior to an object without affecting the behavior of other existing objects*** within the same class. It uses composition instead of inheritance to achieve this goal. 

An example of the Decorator pattern is a pizza shop that sells different kinds of pizzas and toppings. ***The pizzas are the objects that can be decorated with toppings***, which are the decorators. Each topping knows about the pizza that it is decorating and its price. The GetPrice() method of the topping returns the cumulative price of both the pizza and the topping.

![decorator](/img/interviews/design-system/decorator.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

:::Tips

Decorating an object = wrapping that object + overwrite behaviors of that object => to make it look different.

:::

```java
// The interface for pizzas and toppings
public interface Pizza {
    double getPrice();
}

// A concrete class for plain pizza
public class PlainPizza implements Pizza {
    private double price;

    public PlainPizza(double price) {
        this.price = price;
    }

    @Override
    public double getPrice() {
        return this.price;
    }
}

// An abstract class for toppings that implements Pizza
public abstract class Topping implements Pizza {
    protected Pizza pizza; // The pizza that is decorated by this topping

    public Topping(Pizza pizza) {
        this.pizza = pizza;
    }

    @Override
    public double getPrice() {
        return this.pizza.getPrice(); // Delegate to the decorated pizza
    }
}

// A concrete class for cheese topping
public class CheeseTopping extends Topping {
    private double price;

    public CheeseTopping(Pizza pizza, double price) {
        super(pizza); // Call the constructor of the abstract class
        this.price = price;
    }

    @Override
    public double getPrice() {
        return super.getPrice() + this.price; // Add the price of cheese to the decorated pizza
    }
}

// A concrete class for mushroom topping
public class MushroomTopping extends Topping {
    private double price;

    public MushroomTopping(Pizza pizza, double price) {
        super(pizza); // Call the constructor of the abstract class
        this.price = price;
    }

    @Override
    public double getPrice() {
        return super.getPrice() + this.price; // Add the price of mushroom to the decorated pizza
    }
}

// A test class to demonstrate the usage of the Decorator pattern
public class DecoratorTest {

    public static void main(String[] args) {
        // Create a plain pizza with a base price of 10
        Pizza plainPizza = new PlainPizza(10);

        // Decorate it with cheese topping with a price of 2
        Pizza cheesePizza = new CheeseTopping(plainPizza, 2);

        // Decorate it further with mushroom topping with a price of 3
        Pizza mushroomPizza = new MushroomTopping(cheesePizza, 3);

        // Print the final price of the decorated pizza
        System.out.println("The price of the pizza is: " + mushroomPizza.getPrice());
    }
}
```

The output of this program is:

```
The price of the pizza is: 15.0
```

</details>
