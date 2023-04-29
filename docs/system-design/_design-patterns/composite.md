<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Composite Pattern</h5></summary>

The composite design pattern is a structural design pattern that allows you to ***treat individual objects and compositions of objects in the same way***. It can be useful when you need to ***represent data in a hierarchical or tree structure***, such as file systems, menus, or organizational charts.

Example: An organization can be considered as a composite class containing a single CEO, a bunch of senior managers doing similar jobs, and a whole lot of employees doing different jobs and having different skill sets.

![composite](/img/interviews/design-system/composite.svg)

</details>

<details>
<summary><h5>implementation</h5></summary>

```java
// The component interface for all the objects in the hierarchy
public interface Employee {
  void printName();
}

// The leaf class for employees who do not have subordinates
public class Developer implements Employee {
  private String name;

  public Developer(String name) {
    this.name = name;
  }

  public void printName() {
    System.out.println("Developer: " + name);
  }
}

// The leaf class for employees who do not have subordinates
public class Tester implements Employee {
  private String name;

  public Tester(String name) {
    this.name = name;
  }

  public void printName() {
    System.out.println("Tester: " + name);
  }
}

// The composite class for employees who have subordinates
public class Manager implements Employee {
  private String name;
  private List<Employee> subordinates;

  public Manager(String name) {
    this.name = name;
    this.subordinates = new ArrayList<>();
  }

  public void addEmployee(Employee employee) {
    subordinates.add(employee);
  }

  public void removeEmployee(Employee employee) {
    subordinates.remove(employee);
  }

  public void printName() {
    System.out.println("Manager: " + name);
    // Print the names of all subordinates recursively
    for (Employee employee : subordinates) {
      employee.printName();
    }
  }
}

// The client class that uses the component interface
public class CompositeDemo {

  public static void main(String[] args) {
    // Create some leaf objects
    Developer dev1 = new Developer("Alice");
    Developer dev2 = new Developer("Bob");
    Tester tester1 = new Tester("Charlie");
    Tester tester2 = new Tester("David");

    // Create some composite objects
    Manager manager1 = new Manager("Eve");
    Manager manager2 = new Manager("Frank");
    Manager ceo = new Manager("Grace");

    // Build the hierarchy
    manager1.addEmployee(dev1);
    manager1.addEmployee(dev2);
    manager2.addEmployee(tester1);
    manager2.addEmployee(tester2);
    ceo.addEmployee(manager1);
    ceo.addEmployee(manager2);

    // Print the names of all employees in the hierarchy
    ceo.printName();
  }
}
```

</details>
