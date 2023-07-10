<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![memory-management](/img/interviews/angular/memory-management.png) -->

<details open>
<summary><h5>Functional programming in Python</h5></summary>

Functional programming is a programming paradigm that focuses on using pure functions, which are functions that have no side effects and depend only on their inputs and outputs. Python has some features that enable functional programming, such as:

- The `lambda` keyword can be used to define anonymous functions, which are useful for creating short and concise functions that can be used in higher-order functions.
- The `map ()`, `filter ()`, and `reduce ()` functions can be used to apply a function to an iterable, select elements from an iterable based on a condition, or reduce an iterable to a single value, respectively.
- The `itertools` and `functools` modules provide additional tools for functional programming, such as **iterators**, **generators**, **decorators**, **partial functions**, and more.

However, Python is not a purely functional language, as it also supports other paradigms such as procedural and object-oriented programming.

</details>

<details>
<summary><h5>lambda in Python</h5></summary>

A lambda function in Python is a **small anonymous function** that can take any number of arguments, but can only have one expression¹. The syntax for a lambda function is:

`lambda arguments : expression`

The expression is executed and the result is returned. For example, this lambda function adds 10 to the argument and returns the result:

`x = lambda a : a + 10`

You can print the result by calling the function with an argument:

`print(x(5))`

This will output 15.

Here are some more examples of using lambda functions in Python:

- To double a list of numbers using `map`:

  `numbers = [1, 2, 3, 4, 5]`
  
  `doubled = map(lambda x: x * 2, numbers)`
  
  `print(list(doubled))`
  
  This will output `[2, 4, 6, 8, 10]`.

- To filter out odd numbers from a list using `filter`:

  `numbers = [1, 2, 3, 4, 5]`
  
  `even = filter(lambda x: x % 2 == 0, numbers)`
  
  `print(list(even))`
  
  This will output `[2, 4]`.

- To sort a list of tuples by the second element using `sorted`:

  `tuples = [(1, 'a'), (3, 'c'), (2, 'b')]`
  
  `sorted_by_second = sorted(tuples, key=lambda x: x[1])`
  
  `print(sorted_by_second)`
  
  This will output `[(1, 'a'), (2, 'b'), (3, 'c')]`.

</details>


<details>
<summary><h5>iterators in Python</h5></summary>

An `iterator` in Python is an object that allows you to **iterate over iterable objects** like **lists**, **tuples**, **dicts**, and **sets**. The Python iterators object is initialized using the **iter()** method. It uses the **next()** method for iteration.

Python iterators implement the **iterator protocol**, which consists of the methods **__iter__()** and **__next__()**. The __iter__() method returns the iterator object itself, and the __next__() method returns the next item in the sequence.

You can also create your own iterators by defining a class that implements the iterator protocol. You can use **yield** to create generator iterators, which are functions that produce values on demand. You can also use **generator expressions** to create iterators in a concise way.

Here are some examples of how to use iterators in Python:

- To iterate over a list using an iterator, you can do this:

```python
mylist = [1, 2, 3]
myiter = iter(mylist) # converts iterable object to an iterator
print(next(myiter)) # 1
print(next(myiter)) # 2
print(next(myiter)) # 3
```

- To create a custom iterator that returns numbers from 1 to 10, you can do this:

```python
class MyNumbers:
    def __init__(self):
        self.n = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.n < 10:
            self.n += 1
            return self.n
        else:
            raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)
for x in myiter:
    print(x) # 1, 2, ..., 10
```

- To create a generator iterator that yields Fibonacci numbers, you can do this:

```python
def fib():
    a = 0
    b = 1
    while True:
        yield a # pause & pass the value to the next function
        a, b = b, a + b

mygen = fib()
print(next(mygen)) # 0
print(next(mygen)) # 1
print(next(mygen)) # 1
print(next(mygen)) # 2
```

- To create an iterator using a generator expression, you can do this:

```python
mygen = (x * x for x in range(5))
print(next(mygen)) # 0
print(next(mygen)) # 1
print(next(mygen)) # 4
print(next(mygen)) # 9
print(next(mygen)) # 16
```
</details>

<details>
<summary><h5>generator in Python</h5></summary>

A generator in Python is a type of function that **produces a sequence of values** when iterated over. Generators are useful when we want to produce a large sequence of values, but we don't want to store all of them in memory at once.

A generator function is defined like a normal function, but it uses the **yield keyword** instead of the return keyword to produce a value. The yield keyword **pauses the execution** of the function and **returns a generator object** that can be iterated over to get the next value.

A generator expression is a concise way to create a generator object. It is similar to a list comprehension, but it uses parentheses instead of brackets. A generator expression produces values on demand, one at a time, when iterated over.

Here are some examples of how to use generators and yield in Python:

- To create a generator function that yields the squares of numbers from 0 to n, you can do this:

```python
def squares(n):
    for i in range(n):
        yield i * i

mygen = squares(5)
print(next(mygen)) # 0
print(next(mygen)) # 1
print(next(mygen)) # 4
print(next(mygen)) # 9
print(next(mygen)) # 16
```

- To create a generator expression that yields the cubes of numbers from 0 to n, you can do this:

```python
mygen = (i * i * i for i in range(5))
print(next(mygen)) # 0
print(next(mygen)) # 1
print(next(mygen)) # 8
print(next(mygen)) # 27
print(next(mygen)) # 64
```

</details>

<details>
<summary><h5>iterable vs iterator vs generator</h5></summary>

| Term | Definition | Example | Creation | State | Values |
| --- | --- | --- | --- | --- | --- |
| Iterable | An object that can be iterated over | List, string, dictionary, set | Any object with an __iter__ method | Does not have a state | Stores all values in memory |
| Iterator | An object that represents a stream of data | Object returned by iter function, generator object | Any object with __iter__ and __next__ methods | Has a state that remembers the current position | Produces one value at a time on demand |
| Generator | A special type of iterator that is created by using a function with yield or a generator expression | Function with yield, generator expression | Function with yield or generator expression | Saves the state of the local variables every time yield pauses the loop | Produces one value at a time on demand |

</details>

<details>
<summary><h5>decorator</h5></summary>

Decorators are useful when you want to **add some functionality** to an existing function or class without changing its source code or subclassing it. Decorators can also help you to **avoid code duplication** and make your code more readable and maintainable.

The syntax for using decorators in Python is simple: you just need to use the `@` symbol followed by the name of the decorator function before the definition of the function or class that you want to decorate. For example:

```python
@make_pretty
def ordinary():
    print("I am ordinary")

# is equivalent to

def ordinary():
    print("I am ordinary")

ordinary = make_pretty(ordinary)
```

Here, make_pretty is a decorator function that takes an ordinary function as an argument and returns a modified version of it. The @ symbol is a syntactic sugar that makes the code more concise and elegant.

Decorators can also take arguments, which can be passed after the decorator name in parentheses. For example:

```python
@repeat(3)
def greet(name):
    print(f"Hello, {name}")

# is equivalent to

def greet(name):
    print(f"Hello, {name}")

greet = repeat(3)(greet)
```

Here, repeat is a decorator function that takes a number as an argument and returns another decorator function that repeats the original function that many times. The parentheses after repeat indicate that we are passing 3 as an argument to the repeat decorator.

Decorators can also be applied to classes, which can modify their methods or attributes. For example:

```python
@singleton
class Foo:
    pass

# is equivalent to

class Foo:
    pass

Foo = singleton(Foo)
```

Here, singleton is a decorator function that takes a class as an argument and returns a modified version of it that ensures only one instance of the class can be created. The @ symbol indicates that we are applying the singleton decorator to the Foo class.

</details>

<details>
<summary><h5>partial function in python</h5></summary>

A partial function in Python is a function that allows you to **fix a certain number of arguments** of another function and generate a new function. Partial functions are useful when you want to **derive specialized functions** from general functions and therefore help you to **reuse your code**.

Here are some examples of how to use partial functions in Python:

- To create a partial function that adds 10 to any number, you can do this:

```python
from functools import partial

def add(a, b):
    return a + b

add_ten = partial(add, 10)

print(add_ten(5)) # 15
```

- To create a partial function that greets a person with a specified message, you can do this:

```python
from functools import partial

def greet(message, name):
    return f"{message}, {name}!"

hello = partial(greet, "Hello")

print(hello("Alice")) # Hello, Alice!
```

- To create a partial function that calculates the power of a number with a fixed exponent, you can do this:

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)

print(square(4)) # 16
```
</details>

<details>
<summary><h5>*args vs **kwargs</h5></summary>

`*args` and `**kwargs` are special symbols in Python that allow you to ***pass a variable number of arguments or keyword arguments to a function***. They are useful when you want to create flexible and generic functions that can handle different types and numbers of inputs.

- `*args` stands for ***non-keyword arguments***. It is used to pass a variable-length argument list to a function. The function can then access the ***arguments as a tuple***.

- `**kwargs` stands for ***keyword arguments***. It is used to pass a variable-length keyword argument dictionary to a function. The function can then access the ***arguments as a dictionary***.

Here are some examples of how to use `*args` and `**kwargs` in Python:

- To create a function that can sum any number of numbers, you can use `*args`:

```python
def my_sum(*args):
    result = 0
    for x in args:
        result += x
    return result

print(my_sum(1, 2, 3)) # 6
print(my_sum(4, 5)) # 9
print(my_sum(10)) # 10
```

- To create a function that can print any number of key-value pairs, you can use `**kwargs`:

```python
def my_print(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} = {value}")

my_print(name="Alice", age=25) # name = Alice, age = 25
my_print(color="red", shape="circle") # color = red, shape = circle
my_print(country="Vietnam") # country = Vietnam
```

- To create a function that can accept both positional and keyword arguments, you can use both `*args` and `**kwargs`:

```python
def my_func(*args, **kwargs):
    print(f"args = {args}")
    print(f"kwargs = {kwargs}")

my_func(1, 2, 3, name="Alice", age=25)
# args = (1, 2, 3)
# kwargs = {'name': 'Alice', 'age': 25}
```

</details>

