<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![grpc-architecture](/img/interviews/design-system/grpc-architecture.png) -->

<details open>
<summary><h5>Builder pattern</h5></summary>

The Builder pattern is a creational design pattern that ***lets you construct complex objects step by step***. The pattern allows you to produce different types and representations of an object using the same construction code.

For example, in Java, you can use the Builder pattern to create a Pizza object with different toppings and sizes. Instead of using a constructor with many parameters or setters that may break the immutability of the object, you can use a Builder class that has methods for ***adding different toppings and a build method for returning the final product***. For example:

![builder pattern](/img/interviews/design-system/builder.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
// The product class
public class Pizza {
  private int size;
  private boolean cheese;
  private boolean pepperoni;
  private boolean bacon;

  // Private constructor
  private Pizza(Builder builder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.bacon = builder.bacon;
  }

  // Getters
  public int getSize() {
    return size;
  }

  public boolean hasCheese() {
    return cheese;
  }

  public boolean hasPepperoni() {
    return pepperoni;
  }

  public boolean hasBacon() {
    return bacon;
  }

  // The builder class
  public static class Builder {
    //required
    private final int size;

    //optional
    private boolean cheese = false;
    private boolean pepperoni = false;
    private boolean bacon = false;

    public Builder(int size) {
      this.size = size;
    }

    public Builder cheese(boolean value) {
      cheese = value;
      return this;
    }

    public Builder pepperoni(boolean value) {
      pepperoni = value;
      return this;
    }

    public Builder bacon(boolean value) {
      bacon = value;
      return this;
    }

    // Build method
    public Pizza build() {
      return new Pizza(this);
    }
  }
}

// Usage example
public class Main {
  public static void main(String[] args) {
    // Create a large pizza with cheese and pepperoni
    Pizza pizza1 = new Pizza.Builder(12)
        .cheese(true)
        .pepperoni(true)
        .build();

    // Create a small pizza with bacon
    Pizza pizza2 = new Pizza.Builder(8)
        .bacon(true)
        .build();
    
    // Print the pizzas
    System.out.println(pizza1);
    System.out.println(pizza2);
  }
}
```

</details>
