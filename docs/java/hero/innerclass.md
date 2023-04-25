---
sidebar_position: 1000
sidebar_label: Innerclass
title: Innerclass
tags:
  - Java Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Innerclass</h5></summary>

An inner class is a class that is defined inside another class or interface. The purpose of inner classes is to group classes that are logically related, to improve readability and maintainability, and to increase encapsulation and access control.

There are four types of inner classes in Java:

| Type | Syntax | Access to members of outer class | Requires instance of outer class | Can be declared abstract or final |
| --- | --- | --- | --- | --- |
| Member inner class | `class OuterClass { class InnerClass { } }` | Yes, both static and non-static | Yes, using `OuterClass.InnerClass inner = outer.new InnerClass();` | Yes |
| Local inner class | `class OuterClass { void someMethod() { class LocalClass { } } }` | Yes, both static and non-static (final or effectively final) | No, but can only be instantiated within the method | No |
| Static nested class | `class OuterClass { static class NestedClass { } }` | Only static members of outer class | No, using `OuterClass.NestedClass nested = new OuterClass.NestedClass();` | Yes |
| Anonymous inner class | `class OuterClass { SomeInterface obj = new SomeInterface() { // implement methods here }; }` | Yes, both static and non-static (final or effectively final) | No, but must extend a class or implement an interface | No |

Here is an example that demonstrates each type of inner class in Java:

```java
public class OuterClass {

    // a private instance variable
    private int x = 10;

    // a public static variable
    public static int y = 20;

    // a member inner class
    public class MemberInnerClass {
        // a method of the member inner class
        public void print() {
            System.out.println("Member inner class: x = " + x);
        }
    }

    // a method of the outer class
    public void display() {
        // a local variable
        final int z = 30;

        // a local inner class
        class LocalInnerClass {
            // a method of the local inner class
            public void print() {
                System.out.println("Local inner class: x = " + x + ", z = " + z);
            }
        }

        // creating an object of the local inner class
        LocalInnerClass lic = new LocalInnerClass();
        // calling the method of the local inner class
        lic.print();
    }

    // a static nested class
    public static class StaticNestedClass {
        // a method of the static nested class
        public void print() {
            System.out.println("Static nested class: y = " + y);
        }
    }

    // a method that returns an anonymous inner class that implements an interface
    public Printable getAnonymousInnerClass() {
        return new Printable() {
            @Override
            public void print() {
                System.out.println("Anonymous inner class: x = " + x);
            }
        };
    }
}

// an interface for demonstration purpose
interface Printable {
    void print();
}

// a test class
public class Main {

    public static void main(String[] args) {
        // creating an object of the outer class
        OuterClass oc = new OuterClass();

        // creating an object of the member inner class
        OuterClass.MemberInnerClass mic = oc.new MemberInnerClass();
        // calling the method of the member inner class
        mic.print();

        // calling the method of the outer class that contains a local inner class
        oc.display();

        // creating an object of the static nested class
        OuterClass.StaticNestedClass snc = new OuterClass.StaticNestedClass();
        // calling the method of the static nested class
        snc.print();

        // getting an object of the anonymous inner class that implements Printable interface
        Printable p = oc.getAnonymousInnerClass();
        // calling the method of the anonymous inner class
        p.print();
    }
}
```

The output of this program is:

```
Member inner class: x = 10
Local inner class: x = 10, z = 30
Static nested class: y = 20
Anonymous inner class: x = 10
```

</details>
