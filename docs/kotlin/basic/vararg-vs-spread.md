---
sidebar_position: 1000
sidebar_label: vararg spread operator
title: vararg spread operator
slug: /vararg-vs-spread
tags:
  - Basic Kotlin Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are differences between `myFun(*elements)` vs `myFun(vararg elements)` in Kotlin?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  `myFun(*elements)` vs `myFun(vararg elements)` are two ways of passing a variable number of arguments to a function in Kotlin.

  1. **`myFun(*elements)` is the spread operator**. It allows you to ***pass a list or array of elements*** as a parameter to a function. The spread operator ***unpacks*** the contents of the list or array and passes each value individually as an argument to the function.

```kt
fun foo(vararg elements: String) {
    elements.forEach { println(it) }
}

val myList = listOf("a", "b", "c")

foo(*myList.toTypedArray())

```
2. **`myFun(vararg elements)`** defines a function that takes ***multiple arguments*** of the same type.

```kt
fun bar(vararg elements: Int) {
    elements.forEach { println(it) }
}

bar(1, 2, 3, 4, 5)
```

</details>