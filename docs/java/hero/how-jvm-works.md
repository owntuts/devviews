---
sidebar_position: 1000
sidebar_label: How JVM Works
title: How JVM Works
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>How JVM Works</h5></summary>

![How JVM Works](/img/interviews/java/how-jvm-works.png)

JVM (Java Virtual Machine) is a software layer that provides a runtime environment for Java applications. It works by performing the following steps:

- It loads the Java bytecode (the .class files) into the memory using a **class loader subsystem**. The class loader subsystem consists of ***three phases***: **loading**, **linking**, and **initialization**. 
  - It reads the bytecode and stores the **class information** (like class name, immediate parent class name, methods and variables information etc. are stored, including static variables.
) in the method area. 
  - It also creates an **object of type Class** (All the Objects and their corresponding instance variables and arrays) for each loaded class in the heap memory.
- It executes the bytecode using an execution engine. The **execution engine** consists of an interpreter and a just-in-time (JIT) compiler. The **interpreter** reads and executes the bytecode instructions one by one. The **JIT compiler** optimizes the performance by compiling frequently executed parts of the bytecode into native machine code.
- It manages the memory using various areas such as **heap**, **stack**, **method area**, etc. It also performs garbage collection to reclaim the unused memory space. It allocates memory for objects and variables and stores them in the heap and stack respectively. It also stores static data and class information in the method area.
- It handles various tasks such as exception handling, security checks, thread synchronization, etc. It also interacts with the native libraries and operating system using a native method interface (JNI) and a native method library.

This is how JVM works in Java and enables the cross-platform compatibility of Java applications. JVM can run on any device that has a compatible version of it installed.

</details>

<details>
<summary><h5>loading, linking, and initialization</h5></summary>
The three phases of class loading in Java are:

- **Loading**: This is ***the process of finding the binary representation (bytecode)*** of a class or interface with a particular name and creating a Class object from that. The class loader subsystem reads the .class file and stores the class information in the method area. It also creates an object of type Class for each loaded class in the heap memory. There are three built-in class loaders in Java: bootstrap, extension, and application. 
  - The bootstrap class loader ***loads the core Java classes*** from the `rt.jar` file. 
  - The extension class loader ***loads the classes that are extensions of the core Java classes*** from the `ext` directory. 
  - The application class loader ***loads the classes that are specific to the application*** from the `classpath`.
- **Linking**: This is ***the process of taking a Class object and combining it*** into the runtime state of the JVM so that it can be executed. Linking consists of three sub-phases: verification, preparation, and resolution. 
  - **Verification** checks that the bytecode is well-formed and adheres to the language rules. 
  - **Preparation** allocates memory for static fields and assigns default values to them. 
  - **Resolution** resolves symbolic references to other classes, fields, and methods in the constant pool to direct references.
- **Initialization**: This is ***the process of executing*** the static initializers and initializers for static fields of a class or interface. Initialization is triggered by the first active use of a class or interface, such as creating an instance, invoking a static method, accessing a static field, etc. Initialization invokes the `<clinit>` method of a class or interface, which contains all the static initialization code.

These are the three phases of class loading in Java that ensure that a class or interface is ready to be used by the JVM.
</details>

<details>
<summary><h5>method erea vs heap vs stack</h5></summary>

Method area, heap, and stack are three memory areas used by the JVM to store different types of data. Here is a table that summarizes their main features and differences:

| Memory Area | Purpose | Content | Scope | Size | Access |
|-------------|---------|---------|-------|------|--------|
| Method area | To store class structures and metadata | Runtime constant pool, field and method data, code for methods, etc. | Shared by all threads | No fixed size, can grow or shrink as needed | By reference |
| Heap | To store objects and class instances | Objects, arrays, instance variables, etc. | Shared by all threads | No fixed size, can grow or shrink as needed | By reference |
| Stack | To store local variables and method calls | Primitive values, references to objects in heap, method frames, etc. | Private to each thread | Fixed size, can cause overflow or underflow errors if exceeded or unused | By value |

Heap and stack in JVM are similar to data structures in some ways, but they are not exactly the same. Heap and stack are memory areas that store data in a specific way, while data structures are abstract models that define how data can be organized and manipulated.

</details>

