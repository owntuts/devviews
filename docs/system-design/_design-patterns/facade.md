<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Facade Pattern</h5></summary>

The Facade pattern is a design pattern that ***provides a unified interface to a set of interfaces in a subsystem***. It simplifies the interaction between the client and the subsystem by hiding the complexity and diversity of the subsystem's classes and methods. 

A Example of the Facade pattern is ***a hotel receptionist who acts as a single point of contact for various services*** offered by the hotel, such as booking a room, ordering food, arranging a taxi, etc. The receptionist encapsulates the complexity of dealing with different departments and provides a simple interface to the customers.

![facade](/img/interviews/design-system/facade.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

:::note Tips

Facading services = wrapping those services + make some simple APIs to control => hide complex system by providing a simple interface

:::

```java
// The interface for hotel services
public interface HotelService {
    void book();
}

// A concrete class for booking a room
public class RoomBooking implements HotelService {
    @Override
    public void book() {
        System.out.println("Booked a room");
    }
}

// A concrete class for ordering food
public class FoodOrdering implements HotelService {
    @Override
    public void book() {
        System.out.println("Ordered food");
    }
}

// A concrete class for arranging a taxi
public class TaxiArranging implements HotelService {
    @Override
    public void book() {
        System.out.println("Arranged a taxi");
    }
}

// A facade class that provides a simple interface to the hotel services
public class HotelReceptionist {
    private HotelService roomBooking;
    private HotelService foodOrdering;
    private HotelService taxiArranging;

    public HotelReceptionist() {
        this.roomBooking = new RoomBooking();
        this.foodOrdering = new FoodOrdering();
        this.taxiArranging = new TaxiArranging();
    }

    public void bookRoom() {
        this.roomBooking.book();
    }

    public void orderFood() {
        this.foodOrdering.book();
    }

    public void arrangeTaxi() {
        this.taxiArranging.book();
    }
}

// A test class to demonstrate the usage of the Facade pattern
public class FacadeTest {

    public static void main(String[] args) {
        // Create a facade object
        HotelReceptionist receptionist = new HotelReceptionist();

        // Use the facade object to access the hotel services
        receptionist.bookRoom();
        receptionist.orderFood();
        receptionist.arrangeTaxi();
    }
}
```

The output of this program is:

```
Booked a room
Ordered food
Arranged a taxi
```

</details>
