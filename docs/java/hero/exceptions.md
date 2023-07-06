<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Types of exceptions in java</h5></summary>

Exceptions are events that occur during the execution of a program and disrupt the normal flow of instructions. Exceptions can be classified into two main types: **checked exceptions** and **unchecked exceptions**.

- **Checked exceptions** are exceptions that are ***checked by the compiler at compile-time***. They represent conditions that are ***outside the control of the program***, such as file not found, network error, invalid input, etc. Checked exceptions must be either handled by the program using `try-catch` blocks or declared in the `throws` clause of the method that may cause them. Examples of checked exceptions are IOException, SQLException, ClassNotFoundException, etc.
- **Unchecked exceptions** are exceptions that are ***runtime exceptions*** - ***not checked by the compiler at compile-time***. They represent conditions that are caused by the program ***logic errors***, such as null pointer dereference, array index out of bounds, arithmetic exception, etc. Unchecked exceptions do not need to be handled or declared by the program, but they can be caught and handled if desired. Examples of unchecked exceptions are RuntimeException and its subclasses, such as NullPointerException, ArithmeticException, IndexOutOfBoundsException, etc.

Another type of exception is **error**, which is a subclass of Throwable class, just like Exception class. Errors are also unchecked exceptions, but they represent conditions that are beyond the control and recovery of the program, such as system crash, memory overflow, stack overflow, etc. Errors are usually not handled by the program, but they can be caught and logged if needed. Examples of errors are Error and its subclasses, such as OutOfMemoryError, StackOverflowError, VirtualMachineError, etc.

Here is an example of using different types of exceptions in Java:

```java
// A checked exception
class CheckedExceptionDemo {
  public static void main(String[] args) {
    try {
      // This may throw a FileNotFoundException
      File file = new File("test.txt");
      Scanner sc = new Scanner(file);
      while (sc.hasNextLine()) {
        System.out.println(sc.nextLine());
      }
      sc.close();
    } catch (FileNotFoundException e) {
      // Handle the exception
      System.out.println("File not found");
    }
  }
}

// An unchecked exception
class UncheckedExceptionDemo {
  public static void main(String[] args) {
    // This may throw an ArithmeticException
    int a = 10;
    int b = 0;
    int c = a / b; // Divide by zero
    System.out.println(c);
  }
}

// An error
class ErrorDemo {
  public static void main(String[] args) {
    // This may throw a StackOverflowError
    recursiveMethod(); // Call itself infinitely
  }

  public static void recursiveMethod() {
    recursiveMethod();
  }
}
```

</details>

<details>
<summary><h5>Explain about Exception Propagation</h5></summary>

Exception propagation in Java is a process in which an exception that occurs in a method is passed to the caller method if it is not handled in the current method. This way, the ***exception can be propagated up the call stack until it reaches a method that can handle it*** or the main method. Exception propagation allows the separation of error handling logic from the normal business logic.

By default, ***only unchecked exceptions (RuntimeException and its subclasses) are propagated in Java***. Checked exceptions (Exception and its subclasses except RuntimeException) must be either handled in the current method using `try-catch` blocks or declared in the `throws` clause of the method signature. If a checked exception is thrown and not handled or declared, the compiler will report an error.

Here is an example of exception propagation in Java:

```java
// An unchecked exception
class UncheckedExceptionDemo {
  // This method throws an unchecked exception
  void m() {
    // This may throw an ArithmeticException
    int a = 10;
    int b = 0;
    int c = a / b; // Divide by zero
  }

  // This method calls m() and does not declare or handle the exception
  void n() {
    m();
  }

  // This method calls n() and handles the exception
  void p() {
    try {
      n();
    } catch (ArithmeticException e) {
      // Handle the exception
      System.out.println("Cannot divide by zero");
    }
  }

  public static void main(String[] args) {
    UncheckedExceptionDemo obj = new UncheckedExceptionDemo();
    obj.p();
    System.out.println("Normal flow");
  }
}
```


| Call Stack | Exception |
|------------|-----------|
| m() | ArithmeticException |
| n() | ArithmeticException |
| p() | ArithmeticException (handled) |
| main() |  |

If an exception occurs in the `m()` method is not caught, then it moves to the method `n()`, then `p()`. Then it is moved to the `main()` method and then it will stop the flow of execution.

In case of Checked Exception, you must either handled (using `try`, `catch`) or declared by the method that may cause it (using `throws`). 

```java
// A checked exception
class CheckedExceptionDemo {
  // This method throws a checked exception
  void m() throws IOException {
    // This may throw an IOException
    FileReader fr = new FileReader("test.txt");
  }

  // This method calls m() and declares the exception
  void n() throws IOException {
    m();
  }

  // This method calls n() and handles the exception
  void p() {
    try {
      n();
    } catch (IOException e) {
      // Handle the exception
      System.out.println("File not found");
    }
  }

  public static void main(String[] args) {
    CheckedExceptionDemo obj = new CheckedExceptionDemo();
    obj.p();
    System.out.println("Normal flow");
  }
}
```

If the `m()`, `n()` method does not handle the exception, then it must declare it in the `throws` clause of its signature.

</details>
