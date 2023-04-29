<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![factory-method](/img/interviews/design-system/factory-method.svg) -->

<details open>
<summary><h5>Factory Method Pattern</h5></summary>

The Factory Method is a creational design pattern that ***defines an interface (with abstract method) for creating an object, but lets subclasses decide which class to instantiate***. It is also known as a virtual constructor.

A real life of this pattern is ***a vehicle factory that produces different types of vehicles for different purposes***. For example, there can be a motorcycle factory that produces motorcycles, and a car factory that produces cars. These vehicles belong to the same interface but they are of different classes. The factory method pattern allows the client to create vehicles without knowing their concrete classes.

Example:

![factory-method](/img/interviews/design-system/factory-method.svg)

</details>

<details>
<summary><h5>Factory Method Pattern</h5></summary>

```java
public interface MotorVehicle {
  void build() ;
}
```

Here is a code snippet of the Motorcycle class:

```java
public class Motorcycle implements MotorVehicle {
  @Override
  public void build() {
    System.out.println ( "Build Motorcycle" );
  }
}
```

Here is a code snippet of the abstract factory class:

```java {7}
public abstract class MotorVehicleFactory {
  public MotorVehicle create() {
    MotorVehicle vehicle = createMotorVehicle ();
    vehicle.build ();
    return vehicle;
  }
  protected abstract MotorVehicle createMotorVehicle() ;
}
```

Here is a code snippet of the MotorcycleFactory class:

```java
public class MotorcycleFactory extends MotorVehicleFactory {
  @Override
  protected MotorVehicle createMotorVehicle() {
    return new Motorcycle ();
  }
}
```

</details>
