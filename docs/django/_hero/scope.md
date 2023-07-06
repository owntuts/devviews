<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Scope</h5></summary>

Scope in Python is the concept that determines the visibility and accessibility of variables, functions, and objects in different parts of a program. 

### Types of Scope
- Python has four types of scope: **built-in**, **global**, **enclosing**, and **local**. These are also known as **LEGB** scopes, based on their initials. The scope of a name is determined by the place where it is defined or assigned in the code.
- **Built-in scope**: This is the outermost scope that contains the names of all the ***built-in objects, functions, and exceptions*** in Python. These names are available in any part of the program, without any import or declaration. For example: `print`, `len`, `True`, `Exception`, etc.
- **Global scope**: This is the scope that contains the names that are defined or assigned ***at the top level of a module or a script***. These names are available in any part of the module or script, as well as in any imported modules or scripts. For example: `x = 10`, `def foo(): ...`, `import math`, etc.
- **Enclosing scope**: This is the scope that contains the names that are defined or assigned ***in a nested function or a class***. These names are available in any inner functions or classes, but not outside the enclosing function or class. For example:

```python
# define an enclosing function
def outer():
    # define an enclosing variable
    x = 20
    # define an inner function
    def inner():
        # access the enclosing variable
        print(x)
    # call the inner function
    inner()
# call the outer function
outer()
```

Output:

```python
20
```

- **Local scope**: This is the scope that contains the names that are defined or assigned ***inside a function or a class***. These names are only available inside the function or class, and not outside it. For example:

```python
# define a function
def foo():
    # define a local variable
    x = 30
    # print the local variable
    print(x)
# call the function
foo()
# try to access the local variable outside the function
print(x)
```

Output:

```python
30
NameError: name 'x' is not defined
```
</details>

<details>
<summary><h5>Rules of Scope</h5></summary>

- Python follows a set of rules to determine which scope a name belongs to and how to resolve any name conflicts. These rules are based on the LEGB order of scopes, ***from innermost to outermost***.
- When a name is used in a program, Python first searches for it in the local scope of the current function or class. If it finds it, then it uses it. If not, then it moves to the next outer scope, which is the enclosing scope of any nested functions or classes. If it finds it there, then it uses it. If not, then it moves to the next outer scope, which is the global scope of the current module or script. If it finds it there, then it uses it. If not, then it moves to the final outer scope, which is the built-in scope of Python. If it finds it there, then it uses it. If not, then it raises a NameError exception.
- When a name is assigned in a program, Python usually creates or updates it in the local scope of the current function or class, unless otherwise specified by keywords such as global or nonlocal. For example:

```python
# assign a name in the global scope
x = 10

# define a function
def foo():
    # assign a name in the local scope
    x = 20
    # print the local name
    print(x)

# call the function
foo()

# print the global name
print(x)
```

Output:

```python
20
10
```

- The global keyword can be used to create or update a name in the global scope from inside a function or class. For example:

```python

# assign a name in the global scope

x = 10

# define a function

def foo():

    # use global keyword to access and modify global name

    global x

    x = 20

    # print the global name

    print(x)

# call the function

foo()

# print the global name

print(x)
```

Output:

```python

20

20

```

- The `nonlocal` keyword can be used to create or update a name in the enclosing scope from inside a nested function or class. For example:

```python

# define an enclosing function

def outer():

    # assign a name in the enclosing scope

    x = 10

    # define an inner function

    def inner():

        # use nonlocal keyword to access and modify enclosing name

        nonlocal x

        x = 20

        # print the enclosing name

        print(x)

    # call the inner function

    inner()

    # print the enclosing name

    print(x)

# call the outer function

outer()
```

Output:

```python

20

20

```

</details>

