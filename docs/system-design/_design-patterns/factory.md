<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![grpc-architecture](/img/interviews/design-system/grpc-architecture.png) -->

<details open>
<summary><h5>Factory pattern</h5></summary>

The factory pattern is a creational design pattern that lets you ***create objects without exposing the instantiation logic***. It defines an interface or an abstract class for creating an object and lets the subclasses decide which class to instantiate. The factory method in the interface or abstract class lets a class defer the instantiation to one or more concrete subclasses.

A real-life analogy of the factory pattern is ***a vehicle manufacturer that can produce different types of vehicles***, such as cars and motorcycles, using a common interface or abstract class. The specific type of vehicle is decided by the concrete factory class that implements the interface or abstract class.

Example of the factory pattern:

![factory](/img/interviews/design-system/factory.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
// The interface for creating vehicles
public interface MotorVehicle {
    void build();
}

// The concrete classes that implement the MotorVehicle interface
public class Motorcycle implements MotorVehicle {
    @Override
    public void build() {
        System.out.println("Build Motorcycle");
    }
}

public class Car implements MotorVehicle {
    @Override
    public void build() {
        System.out.println("Build Car");
    }
}

// The abstract class for creating motor vehicle factories
public abstract class MotorVehicleFactory {
    public MotorVehicle create() {
        MotorVehicle vehicle = createMotorVehicle();
        vehicle.build();
        return vehicle;
    }

    protected abstract MotorVehicle createMotorVehicle();
}

// The concrete classes that extend the MotorVehicleFactory abstract class
public class MotorcycleFactory extends MotorVehicleFactory {
    @Override
    protected MotorVehicle createMotorVehicle() {
        return new Motorcycle();
    }
}

public class CarFactory extends MotorVehicleFactory {
    @Override
    protected MotorVehicle createMotorVehicle() {
        return new Car();
    }
}

// The client code that uses the factory pattern
public class Client {
    public static void main(String[] args) {
        // Create a motorcycle factory and a car factory
        MotorVehicleFactory motorcycleFactory = new MotorcycleFactory();
        MotorVehicleFactory carFactory = new CarFactory();

        // Create a motorcycle and a car using the factories
        MotorVehicle motorcycle = motorcycleFactory.create();
        MotorVehicle car = carFactory.create();

        // Do something with the motorcycle and car objects
        // ...
    }
}
```

</details>
