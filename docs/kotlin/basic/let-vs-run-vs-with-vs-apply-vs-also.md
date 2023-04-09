---
sidebar_position: 1000
sidebar_label: let vs run vs with vs apply vs also in Kotlin
title: let vs run vs with vs apply vs also in Kotlin
slug: /let-vs-run-vs-with-vs-apply-vs-also
tags:
  - Basic Kotlin Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`let` vs `run` vs `with` vs `apply` vs `also` in Kotlin

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  
These functions provide a convenient way to execute a block of code within a specific scope, allowing you to access the properties and methods of an object more easily.

- `run` and `let` are similar
- `apply` and `with` are similar

Here's a table summarizing the differences:

| Function | Return Value | Object Scope | Lambda Scope | Mutable Change |
| --- | --- | --- | --- | --- |
| `let` | Lambda result | Non-null | `it` | No |
| `run` | Lambda result | Non-null | `this` | No |
| `with` | Lambda result | Non-null | `this` | No |
| `apply` | Object | Non-null | `this` | Yes |
| `also` | Object | Non-null | `it` | No |

---

#### `let` vs `run` Example

**Usage**:  ***Want to run a block of code within an object scope***

We want to convert the object's data into a string. We can use either `let` or `run` to achieve this.

```kt
data class User(val name: String, val age: Int)

val user = User("John Doe", 30)

val resultFromLet = user.let {
    "Name: ${it.name}, Age: ${it.age}"
}

val resultFromRun = user.run {
    "Name: ${this.name}, Age: ${this.age}"
}

```
`let` is useful when working with ***nullable objects***, while `run` is more useful when working with ***non-null objects***.

---

#### `apply` and `also` Example:

**Uasage**: ***Want to modify an object in it's scope***

In this example, we have a `User` object and we want to update its properties. We can use either `apply` or `also` to achieve this.

```kt
data class User(var name: String, var age: Int)

val user = User("John Doe", 30)

val resultFromApply = user.apply {
    name = "Alice"
    age = 25
}.toString()

val resultFromAlso = user.also {
    it.name = "Bob"
    it.age = 40
}.toString()

```
- `apply` is useful when you want to ***modify*** an object's properties and ***return the object itself***. 
- `also` is useful when you want to do something with the object and ***return the object itself without modifying*** it.

---

#### `with` Example

**Ussage**: ***want to access argument of an object***

`with` can access members of an object argument concisely

```kt
class Configuration(var host: String, var port: Int) 

fun main() {
    val configuration = Configuration(host = "127.0.0.1", port = 9000) 

    with(configuration) {
        println("$host:$port")
    }

    // instead of:
    println("${configuration.host}:${configuration.port}")    
}
```

</details>