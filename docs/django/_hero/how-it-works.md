<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![memory-management](/img/interviews/angular/memory-management.png) -->

<details open>
<summary><h5>How Python Works</h5></summary>

![How Python Works](/img/interviews/python/how-python-works.png)

Python is a popular programming language that can be used for web development, data analysis, software development, and more. It is an **interpreted** language, which means that the code you write is not directly translated into machine code, but rather passed to an interpreter that executes it. The interpreter performs several steps to run your Python code:

- First, it checks and searches for **syntax errors** and verifies **indentation rules**. Python uses indentation to define blocks of code, so it is important to follow the correct indentation style.
- Next, it converts the source code via **tokenization**, which means breaking the code into smaller pieces called tokens. Tokens are the basic units of Python syntax, such as keywords, identifiers, operators, literals, etc.
- Then, the parser receives the lexical tokens and generates an **Abstract Syntax Tree (AST)**. The AST is a representation of the structure and meaning of your code. It shows how different tokens are related to each other and form expressions, statements, and blocks.
- Finally, the interpreter converts the AST to **Byte Code** and initializes the **Python Virtual Machine (PVM)** to execute the byte code and send back the final result. Byte code is a low-level representation of your code that can be understood by the PVM. The PVM is a software component that simulates a physical machine and runs the byte code instructions.

</details>

<details>
<summary><h5>Interpreted language vs Compiled language</h5></summary>

An interpreted language and a compiled language are two types of programming languages that differ in how they are executed by the computer. 

- **An interpreted language** is a language that is ***translated into machine code line by line*** by another program called an interpreter. An example of an interpreted language is Python. 
- **A compiled language** is a language that is ***translated into machine code at once*** by another program called a compiler. An example of a compiled language is C.

Some of the main differences between an interpreted and a compiled language are:

- **Speed**: A compiled language is usually faster than an interpreted language because it does not need to be translated at run time. An interpreted language may have some performance overhead due to the interpreter.
- **Portability**: An interpreted language is usually more portable than a compiled language because it can run on any platform that has the interpreter installed. A compiled language may need to be recompiled for different platforms or architectures.
- **Error detection**: A compiled language can detect syntax and semantic errors at compile time, which can prevent the code from running if there are any errors. An interpreted language can only detect errors at run time, which may cause unexpected behavior or crashes.
- **Flexibility**: An interpreted language can be more flexible than a compiled language because it can be modified or extended while the program is running. A compiled language may need to be recompiled for any changes to take effect.

</details>


<details>
<summary><h5>Static vs Dynamic typed language?</h5></summary>

Here is a table that summarizes some of the main differences between the two types of languages:

| Static Typed Language | Dynamic Typed Language |
| --------------------- | ---------------------- |
| Performs type checking at compile time | Performs type checking at run time |
| Requires explicit declaration of data types for variables | Does not require explicit declaration of data types for variables |
| Can detect type errors at compile time and prevent the code from running | Can only detect type errors at run time and may cause unexpected behavior or crashes |
| Does not allow changing the data type of a variable once declared | Allows changing the data type of a variable at any point in the code |
| Can be faster and more efficient than a dynamic typed language | May have some performance overhead due to the interpreter or the type checking process |

- Static typed languages: Java, C, C++, C#, Scala, Kotlin, Rust, Go, Pascal, Swift, etc.
- Dynamic typed languages: Python, Ruby, Perl, PHP, JavaScript, Erlang, Lisp, etc.

In a **strongly-typed language**, such as Python, "1" + 2 will result in a type error since these languages don't allow for "type-coercion" (implicit conversion of data types). On the other hand, a **weakly-typed language**, such as Javascript, will simply output "12" as result.

</details>

<details>
<summary><h5>Memory Management in Python</h5></summary>

![memory management](/img/interviews/python/memory-management.png)

- Python uses a private heap space to store all its objects and data structures. The programmer can access the objects through references, which are stored in the stack.
- Python uses reference counting to track how many references point to an object. When an object's reference count reaches zero, it is eligible for garbage collection.
- Python has a built-in garbage collector that runs periodically and automatically. It uses a generational algorithm to scan the heap and collect unreachable objects. It also handles cyclic references using a mark-and-sweep algorithm.

</details>

<details>
<summary><h5>range vs xrange</h5></summary>

| Range | Xrange |
| ----- | ------ |
| A built-in function in Python 3 that returns an iterable object of numbers | A built-in function in Python 2 that returns an iterable object of numbers |
| Replaced xrange in Python 3 and behaves like xrange in Python 2 | ***Deprecated*** in Python 3 and replaced by range |
| Returns a range object that supports indexing, slicing, and some common operations | Returns an xrange object that supports indexing and some common operations, but not slicing |
| Uses less memory than xrange because it does not store all the numbers in memory, but generates them on demand | Uses more memory than range because it stores all the numbers in memory as an array of integers |
| Faster than xrange because it can access the numbers directly using indexing or slicing, and can be iterated over multiple times | Slower than range because it has to generate the numbers on demand, and can be iterated over only once |
</details>

