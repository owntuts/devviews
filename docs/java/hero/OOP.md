<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>OOP</h5></summary>
OOP is a programming paradigm that uses objects to model real-world entities and behaviors

- **Objects** are instances of classes, which define the state and behavior of the objects. OOP aims to achieve ***abstraction***, ***encapsulation***, ***inheritance***, and ***polymorphism*** in programming
- **Abstraction** is hiding the implementation details and showing only the essential features. Abstraction can be achieved by using ***abstract classes*** and ***interfaces***.
- **Encapsulation** is wrapping the data and methods together and restricting access to them. Encapsulation can be achieved by using access modifiers, such as ***public***, ***private***, ***protected***, and ***default***.
- **Inheritance** is acquiring the features and behaviors of an existing class by another class. Inheritance can be achieved by using the `extends` keyword or the `implements` keyword.
- **Polymorphism** is the ability of an object to take different forms depending on the context. Polymorphism can be achieved by using method `overriding`, `overloading`.

</details>

<details>
<summary><h5>Interface vs Abstract Class</h5></summary>

An interface and an abstract class are both ways to achieve **abstraction** in Java, which means hiding the implementation details and showing only the essential features to the user. However, there are some differences between them, such as:

- An interface can only declare **abstract methods**, which are methods that have no body and must be implemented by the classes that implement the interface. An abstract class can declare both **abstract methods** and **non-abstract methods**, which are methods that have a body and can be inherited or overridden by the subclasses that extend the abstract class. Since Java 8, an interface can also have **default methods** and **static methods**, which are methods that have a body and provide a default or utility implementation for the interface. Since Java 9, an interface can also have **private methods**, which are methods that are only accessible within the interface.
- An interface can only declare **constant variables**, which are variables that are public, static, and final by default. An abstract class can declare any kind of variables, such as public, private, protected, default, static, final, non-final, etc.
- A class can implement multiple interfaces, but it can extend only one abstract class. This is because an interface represents a set of behaviors, while an abstract class represents a type of object. A class can have multiple behaviors, but it can only belong to one type hierarchy.
- An interface cannot have a constructor, because it cannot be instantiated. An abstract class can have a constructor, which will be invoked during the subclass object creation.

| Interface | Abstract Class |
|-----------|----------------|
| Can only declare abstract methods (except default, static, and private methods since Java 8 and 9) | Can declare both abstract and non-abstract methods |
| Can only declare constant variables (public, static, and final) | Can declare any kind of variables (public, private, protected, default, static, final, non-final, etc.) |
| A class can implement multiple interfaces | A class can extend only one abstract class |
| Cannot have a constructor | Can have a constructor (but cannot initialize) |

Here is an example of an interface and an abstract class in Java:

```java
// An interface
interface Flyable {
  // A constant variable
  int WINGS = 2;
  // An abstract method
  void fly();
  // A default method
  default void glide() {
    System.out.println("Gliding...");
  }
  // A static method
  static void land() {
    System.out.println("Landing...");
  }
}

// An abstract class
abstract class Animal {
  // A non-final variable
  private String name;
  // A final variable
  protected final int legs;
  // A constructor
  public Animal(String name, int legs) {
    this.name = name;
    this.legs = legs;
  }
  // A non-abstract method
  public String getName() {
    return name;
  }
  // An abstract method
  public abstract void makeSound();
}

// A class that implements an interface
class Bird implements Flyable {
  // Implementing the abstract method
  public void fly() {
    System.out.println("Flying...");
  }
}

// A class that extends an abstract class and implements an interface
class Eagle extends Animal implements Flyable {
  // Calling the superclass constructor
  public Eagle(String name) {
    super(name, 2);
  }
  // Implementing the abstract method from Animal
  public void makeSound() {
    System.out.println("Screaming...");
  }
  // Overriding the default method from Flyable
  public void glide() {
    System.out.println("Gliding high...");
  }
}
```

</details>

<details>
<summary><h5>Access modifiers & Non-access modifiers in java</h5></summary>

In Java, there are two types of modifiers: access modifiers and non-access modifiers.

**Access modifiers** ***control the visibility and accessibility*** of classes, methods, and fields. There are four access modifiers in Java:

- **public**: The class, method, or field is accessible from any other class or any package.
- **private**: The class, method, or field is accessible only within the same class.
- **protected**: The class, method, or field is accessible within the same package or from subclasses in different packages.
- **default** (no keyword): The class, method, or field is accessible within the same package.

**Non-access modifiers** ***modify the behavior and properties*** of classes, methods, and fields. There are several non-access modifiers in Java, such as:

- **static**: The class, method, or field belongs to the class and not to any object of the class. It can be accessed without creating an object of the class.
- **final**: The class, method, or field cannot be changed or overridden. It can be initialized only once.
- **abstract**: The class or method is incomplete and cannot be instantiated. It can only be extended or implemented by subclasses or subinterfaces.
- **synchronized**: The method or block can be accessed by only one thread at a time.
- **volatile**: The field is not cached by threads and its value is always read from the main memory.
- **transient**: The field is not serialized when the object is saved to a file or sent over a network.
- **native**: The method is implemented in a platform-dependent language such as C or C++.

Here are some examples of using these modifiers in Java:

```java
// A public class that can be accessed from any package
public class Animal {
  // A private field that can be accessed only within this class
  private String name;
  // A protected field that can be accessed within this package or from subclasses in different packages
  protected int age;
  // A default field that can be accessed within this package
  String type;
  // A public static final field that can be accessed from any class or package and cannot be changed
  public static final int MAX_AGE = 100;
  
  // A public constructor that can be used to create an object of this class from any package
  public Animal(String name, int age, String type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  
  // A private method that can be called only within this class
  private void setName(String name) {
    this.name = name;
  }
  
  // A protected method that can be called within this package or from subclasses in different packages
  protected void setAge(int age) {
    this.age = age;
  }
  
  // A default method that can be called within this package
  void setType(String type) {
    this.type = type;
  }
  
  // A public method that can be called from any class or package
  public String getName() {
    return name;
  }
  
  // A public static method that can be called without creating an object of this class
  public static boolean isOld(int age) {
    return age > MAX_AGE;
  }
  
  // An abstract method that has no implementation and must be overridden by subclasses
  public abstract void makeSound();
}

// A final class that cannot be extended by any other class
final class Dog extends Animal {
  
  // A public constructor that calls the super constructor
  public Dog(String name, int age) {
    super(name, age, "Dog");
  }
  
  // An overridden method that provides the implementation for the abstract method in the superclass
  @Override
  public void makeSound() {
    System.out.println("Woof!");
  }
}

// An interface that defines some constants and abstract methods
interface Flyable {
  
  // A public static final field that is implicitly declared by the interface
  int MAX_SPEED = 200;
  
  // An abstract method that has no implementation and must be implemented by classes that implement this interface
  void fly();
}

// A class that implements an interface and inherits from another class
class Bird extends Animal implements Flyable {
  
  // A private volatile field that is not cached by threads and always read from the main memory
  private volatile boolean flying;
  
  // A public constructor that calls the super constructor
  public Bird(String name, int age) {
    super(name, age, "Bird");
    flying = false;
  }
  
  // A synchronized method that can be accessed by only one thread at a time
  public synchronized void setFlying(boolean flying) {
    this.flying = flying;
  }
  
  // An implemented method that provides the implementation for the interface method
  @Override
  public void fly() {
    if (flying) {
      System.out.println("I am flying at " + MAX_SPEED + " km/h");
    } else {
      System.out.println("I am not flying");
    }
  }
  
  // An overridden method that provides the implementation for the abstract method in the superclass
  @Override
  public void makeSound() {
    System.out.println("Tweet!");
  }
}
```

| Modifier | Access | Mutability | Inheritance | Overriding |
|----------|--------|------------|-------------|------------|
| public | Anywhere | Depends on other modifiers | Allowed for classes and methods | Allowed for methods |
| private | Same class only | Depends on other modifiers | Not allowed for classes and methods | Not allowed for methods |
| protected | Same package or subclasses in different packages | Depends on other modifiers | Allowed for classes and methods | Allowed for methods |
| default | Same package only | Depends on other modifiers | Allowed for classes and methods | Allowed for methods |
| static | Depends on other access modifiers | Depends on other modifiers | Not allowed for classes, allowed for methods and fields | Not allowed for methods and fields |
| final | Depends on other access modifiers | Not mutable | Not allowed for classes and methods, allowed for fields | Not allowed for methods and fields |
| non-final | Depends on other access modifiers | Mutable | Allowed for classes, methods, and fields | Allowed for methods and fields |

```java
// A public class
public class A {
  // A public static final field
  public static final int VALUE = 10;
  // A private non-static non-final field
  private int number;
  // A protected static non-final method
  protected static void print() {
    System.out.println("Printing...");
  }
  // A default non-static final method
  final void display() {
    System.out.println("Displaying...");
  }
}

// A non-final class that inherits from A
class B extends A {
  // A public non-static non-final method that overrides print()
  public void print() {
    System.out.println("Printing from B...");
  }
  // A private static final method
  private static final void show() {
    System.out.println("Showing...");
  }
}

// A final class that inherits from B
final class C extends B {
  // A protected non-static non-final field
  protected int value;
  // A default static non-final method
  static void display() {
    System.out.println("Displaying from C...");
  }
}
```

</details>
